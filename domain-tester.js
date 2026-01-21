import https from 'https';

const generateRandomDomain = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let domain = '';
  const length = Math.floor(Math.random() * 8) + 4; // 4-12 characters
  for (let i = 0; i < length; i++) {
    domain += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `https://${domain}.github.io`;
};

const checkDomain = (url) => {
  return new Promise((resolve) => {
    const request = https.get(url, { timeout: 3000 }, (response) => {
      let data = '';
      const maxSize = 10000; // Only read first 10KB

      response.on('data', (chunk) => {
        data += chunk;
        if (data.length > maxSize) {
          data = data.substring(0, maxSize);
          response.pause(); // Stop reading more data
        }
      });

      response.on('end', () => {
        checkBlocking(data, response.statusCode, url, resolve, response.headers);
      });
    });

    request.on('error', (error) => {
      resolve({ url, status: 'error', error: error.message });
    });

    request.on('timeout', () => {
      request.destroy();
      resolve({ url, status: 'timeout' });
    });
  });
};

const checkBlocking = (data, statusCode, url, resolve, headers) => {
  // Check for Lightspeed and other blocking messages
  const blockingPatterns = [
    'is not available because it is categorized',
    'Security - Domain Sharing',
    'domain is blocked',
    'Oops',
    'Lightspeed',
    'blocked',
    'access denied',
    'not permitted',
    'filtered',
    'categorized',
    'category',
    'web filter',
    'web guard',
    'blocked by',
    'denied access',
    'administrator',
    'policy',
    'cannot access',
    'under review'
  ];

  const lowerData = data.toLowerCase();
  const isBlocked = blockingPatterns.some(pattern => lowerData.includes(pattern.toLowerCase()));

  if (isBlocked) {
    resolve({ url, status: 'blocked', code: statusCode });
    return;
  }

  // Check if it's a redirect or error page (common with filters)
  if (statusCode >= 301 && statusCode <= 307) {
    resolve({ url, status: 'blocked', code: statusCode });
    return;
  }

  // Check if response is too small (likely a block page)
  if (statusCode === 200 && data.length < 500) {
    resolve({ url, status: 'blocked', code: statusCode });
    return;
  }

  // Check for common block page indicators
  if (statusCode === 200 && (data.includes('<!DOCTYPE') || data.includes('<html'))) {
    // If it's an HTML page with very little content, it's likely a block page
    const htmlMatch = data.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    const bodyContent = htmlMatch ? htmlMatch[1].trim() : data;
    
    if (bodyContent.length < 200) {
      resolve({ url, status: 'blocked', code: statusCode });
      return;
    }
  }

  // Check status code
  if (statusCode === 200) {
    resolve({ url, status: 'working', code: statusCode });
  } else if (statusCode === 404 || statusCode === 403) {
    resolve({ url, status: 'blocked', code: statusCode });
  } else {
    resolve({ url, status: 'other', code: statusCode });
  }
};

const runTester = async (iterations = 100) => {
  console.log(`\n🔍 Starting domain tester... Checking ${iterations} random domains in parallel\n`);
  
  const workingDomains = [];
  const concurrency = 20; // Check 20 domains at a time
  
  for (let i = 0; i < iterations; i += concurrency) {
    const batch = Math.min(concurrency, iterations - i);
    const promises = [];
    
    for (let j = 0; j < batch; j++) {
      const domain = generateRandomDomain();
      promises.push(checkDomain(domain));
    }
    
    const results = await Promise.all(promises);
    
    results.forEach((result) => {
      if (result.status === 'working') {
        console.log(`✅ WORKING: ${result.url} (${result.code})`);
        workingDomains.push(result.url);
      } else if (result.status !== 'blocked' && result.status !== 'timeout') {
        console.log(`⚠️  ${result.status.toUpperCase()}: ${result.url}`);
      }
    });
    
    console.log(`   [Checked ${Math.min(i + concurrency, iterations)}/${iterations}]`);
  }

  console.log(`\n📊 Summary:`);
  console.log(`   Total checked: ${iterations}`);
  console.log(`   Working domains found: ${workingDomains.length}`);
  
  if (workingDomains.length > 0) {
    console.log(`\n🎉 Working domains:`);
    workingDomains.forEach((domain) => console.log(`   ${domain}`));
  }
};

// Run with custom iterations or default 100
const iterations = process.argv[2] ? parseInt(process.argv[2]) : 100;
runTester(iterations);
