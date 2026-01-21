import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      strict: false,
      pages: 'docs',
      assets: 'docs',
      fallback: '404.html'
    }),
    paths: {
      base: '/Grades'
    },
    prerender: {
      handleHttpError: 'warn'
    }
  }
};

export default config;
