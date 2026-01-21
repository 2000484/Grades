import{f as m,a,c as O,t as Le}from"../chunks/DnKRhqIz.js";import{p as Y,c as y,b as pe,r as p,a as J,f as o,s as i,t as b,k as t,z as T,n as De,e as Fe,d as Be,$ as Ie,q as re,v as ce}from"../chunks/C_6UiiDj.js";import{p as se,r as de,a as xe,s as w,i as L,d as Ne}from"../chunks/BiKsXKFa.js";import{I as Ae,a as me}from"../chunks/HTnx3aD8.js";import{h as Ce}from"../chunks/D4UKCDl_.js";import{b as Ge}from"../chunks/B5lnDM8m.js";import{L as Oe}from"../chunks/BTwEwlez.js";import{R as je}from"../chunks/hruS_XFh.js";import{S as qe}from"../chunks/8gq2Ynae.js";import{D as ze}from"../chunks/BIgpoVci.js";import{B as ue}from"../chunks/B_MuCRaO.js";import{B as _e}from"../chunks/DTP4muSX.js";import{U as Ee}from"../chunks/BJsYme8h.js";import{s as $e}from"../chunks/5BVLSNDe.js";import{c as K}from"../chunks/Dx7iaVqR.js";import{a as He,c as Ke,s as Ye}from"../chunks/BXc22fYE.js";import{b as Je}from"../chunks/CnOpXMm8.js";import{b as Qe,c as Ve,d as We,e as Ze,a as et}from"../chunks/DfT8dkqq.js";import{b as tt}from"../chunks/Cq8bdp-N.js";import{a as at,c as rt,L as st}from"../chunks/B2N5e1u8.js";var nt=m("<div><!></div>");function ot(f,e){Y(e,!0);let h=se(e,"ref",15,null),g=de(e,["$$slots","$$events","$$legacy","ref","class","children"]);var c=nt();He(c,s=>({"data-slot":"dialog-footer",class:s,...g}),[()=>Ke("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",e.class)]);var u=y(c);$e(u,()=>e.children??pe),p(c),tt(c,s=>h(s),()=>h()),a(f,c),J()}function ke(f,e){Y(e,!0);let h=de(e,["$$slots","$$events","$$legacy"]);const g=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]];Ae(f,xe({name:"link"},()=>h,{get iconNode(){return g},children:(c,u)=>{var s=O(),l=o(s);$e(l,()=>e.children??pe),a(c,s)},$$slots:{default:!0}})),J()}function Pe(f,e){Y(e,!0);let h=de(e,["$$slots","$$events","$$legacy"]);const g=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"}]];Ae(f,xe({name:"paperclip"},()=>h,{get iconNode(){return g},children:(c,u)=>{var s=O(),l=o(s);$e(l,()=>e.children??pe),a(c,s)},$$slots:{default:!0}})),J()}var lt=m("<!> ",1),it=m("<!> ",1),ct=m("<!> ",1),mt=m('<h2 class="text-start text-lg text-wrap"> </h2> <div class="flex flex-row flex-wrap items-center gap-2"><!> <!> <!> <!></div>',1);function dt(f,e){Y(e,!0);let h=de(e,["$$slots","$$events","$$legacy","message","onclick"]);const g=new DOMParser,c=T(()=>g.parseFromString(e.message._MessageText,"text/html")),u=T(()=>new Set([...t(c).querySelectorAll("a")].filter(l=>new URL(l.href).hostname).map(l=>l.href)).size);let s=T(()=>typeof e.message.Attachments!="string"?e.message.Attachments.AttachmentXML instanceof Array?e.message.Attachments.AttachmentXML:[e.message.Attachments.AttachmentXML]:void 0);_e(f,xe(()=>h,{get onclick(){return e.onclick},variant:"card",class:"flex h-auto w-full flex-col items-start gap-2 overflow-hidden rounded-xl p-4",children:(l,Q)=>{var X=mt(),D=o(X),V=y(D,!0);p(D);var U=i(D,2),j=y(U);ue(j,{variant:"secondary",children:(r,S)=>{var _=lt(),d=o(_);Ee(d,{class:"mr-1 h-4 w-4"});var v=i(d);b(()=>w(v,` ${e.message.From.RecipientXML._Details1??""} (${e.message.From.RecipientXML._Details2??""})`)),a(r,_)},$$slots:{default:!0}});var P=i(j,2);{let r=T(()=>new Date(e.message._SendDateTime));ze(P,{get date(){return t(r)}})}var W=i(P,2);{var n=r=>{ue(r,{color:"green",children:(S,_)=>{var d=it(),v=o(d);ke(v,{class:"mr-1 h-4 w-4"});var R=i(v);b(()=>w(R,` ${t(u)??""}
				${t(u)===1?"Link":"Links"}`)),a(S,d)},$$slots:{default:!0}})};L(W,r=>{t(u)>0&&r(n)})}var x=i(W,2);{var M=r=>{ue(r,{color:"indigo",children:(S,_)=>{var d=ct(),v=o(d);Pe(v,{class:"mr-1 h-4 w-4"});var R=i(v);b(()=>w(R,` ${t(s).length??""}
				${t(s).length===1?"Attachment":"Attachments"}`)),a(S,d)},$$slots:{default:!0}})};L(x,r=>{t(s)&&r(M)})}p(U),b(()=>w(V,e.message._Subject)),a(l,X)},$$slots:{default:!0}})),J()}const ft=(f,e)=>`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            html {
                font-family: Inter, sans-serif;
                line-height: 1.5;
            }

            a {
                position: relative;
            }
                
            a::before {
                content: "Open the link in a new tab (${e})";
                position: absolute;
                bottom: calc(100% + 0.5rem);
                left: 50%;
                transform: translateX(-50%);
                background-color: #333;
                color: white;
                padding: 0.25rem;
                border-radius: 0.25rem;
                font-size: 0.8rem;
                white-space: normal;
                max-width: 12rem;
                width: max-content;
                text-align: center;
                opacity: 0;
                visibility: hidden;
                transition: opacity 0.2s;
                pointer-events: none;
            }

            a:focus::before,
            a:active::before,
            a:hover::before {
                opacity: 1;
                visibility: visible;
            }
        
        </style>
    </head>
    <body>
        ${f}
    </body>
</html>`;var vt=m("<li> </li>"),ht=m('<p>To:</p> <ul class="list-inside list-disc"></ul>',1),gt=m("<p> </p>"),ut=m("<p> </p> <p> </p> <!>",1),_t=m("<!> <!>",1),pt=m('<!> <span class="truncate"> </span>',1),xt=m('<!> <span class="truncate"> </span>',1),$t=m("<!> <!>",1),bt=m('<!> <iframe sandbox="" class="h-full bg-white" title="Message Content"></iframe> <!>',1);function wt(f,e){Y(e,!0);let h=se(e,"open",15),g=se(e,"touchscreen",3,!1),c=se(e,"content",3,""),u=se(e,"links",19,()=>new Set),s=T(()=>e.message.From.RecipientXML),l=T(()=>typeof e.message.To!="string"?e.message.To.RecipientXML instanceof Array?e.message.To.RecipientXML:[e.message.To.RecipientXML]:void 0),Q=T(()=>typeof e.message.Attachments!="string"?e.message.Attachments.AttachmentXML instanceof Array?e.message.Attachments.AttachmentXML:[e.message.Attachments.AttachmentXML]:void 0);const X=T(()=>g()?"Tap and hold the link to open it in a new tab":"Ctrl+click or right-click the link to open it in a new tab");var D=O(),V=o(D);K(V,()=>et,(U,j)=>{j(U,{get open(){return h()},set open(P){h(P)},children:(P,W)=>{var n=O(),x=o(n);K(x,()=>Qe,(M,r)=>{r(M,{class:"flex h-[calc(100%-2rem)] w-[calc(100%-2rem)] flex-col sm:max-w-3xl",children:(S,_)=>{var d=bt(),v=o(d);K(v,()=>Ve,(F,ne)=>{ne(F,{class:"text-start",children:(fe,be)=>{var oe=_t(),le=o(oe);K(le,()=>We,(q,z)=>{z(q,{children:(Z,A)=>{De();var $=Le();b(()=>w($,e.message._Subject)),a(Z,$)},$$slots:{default:!0}})});var we=i(le,2);K(we,()=>Ze,(q,z)=>{z(q,{children:(Z,A)=>{var $=ut(),B=o($),ve=y(B,!0);p(B);var k=i(B,2),I=y(k);p(k);var N=i(k,2);{var ee=he=>{var Me=O(),Te=o(Me);{var Xe=E=>{var te=ht(),ie=i(o(te),2);me(ie,21,()=>t(l),ae=>ae._GU,(ae,H)=>{var C=vt(),ge=y(C);p(C),b(()=>w(ge,`${t(H)._Details1??""} (${t(H)._Details2??""})`)),a(ae,C)}),p(ie),a(E,te)},Ue=E=>{var te=O(),ie=o(te);{var ae=H=>{var C=gt(),ge=y(C);p(C),b(()=>w(ge,`To: ${t(l)[0]._Details1??""} (${t(l)[0]._Details2??""})`)),a(H,C)};L(ie,H=>{t(l)[0]&&H(ae)},!0)}a(E,te)};L(Te,E=>{t(l).length>1?E(Xe):E(Ue,!1)})}a(he,Me)};L(N,he=>{t(l)&&he(ee)})}b(()=>{w(ve,e.message._SendDateTimeFormattedLong),w(I,`From: ${t(s)._Details1??""} (${t(s)._Details2??""})`)}),a(Z,$)},$$slots:{default:!0}})}),a(fe,oe)},$$slots:{default:!0}})});var R=i(v,2),Se=i(R,2);{var Re=F=>{var ne=O(),fe=o(ne);K(fe,()=>ot,(be,oe)=>{oe(be,{class:"flex-wrap sm:justify-start",children:(le,we)=>{var q=$t(),z=o(q);me(z,16,u,A=>A,(A,$)=>{_e(A,{get href(){return $},target:"_blank",variant:"outline",title:"Link",children:(B,ve)=>{var k=pt(),I=o(k);ke(I,{class:"h-5 w-5 shrink-0"});var N=i(I,2),ee=y(N,!0);p(N),b(()=>w(ee,new URL($).hostname)),a(B,k)},$$slots:{default:!0}})});var Z=i(z,2);me(Z,17,()=>t(Q)??[],A=>A._SmAttachmentGU,(A,$)=>{_e(A,{get href(){return`${Je??""}/mail/attachment?attachmentGU=${t($)._SmAttachmentGU??""}`},target:"_blank",variant:"outline",title:"Attachment",children:(B,ve)=>{var k=xt(),I=o(k);Pe(I,{class:"h-5 w-5 shrink-0"});var N=i(I,2),ee=y(N,!0);p(N),b(()=>w(ee,t($)._DocumentName)),a(B,k)},$$slots:{default:!0}})}),a(le,q)},$$slots:{default:!0}})}),a(F,ne)};L(Se,F=>{(t(Q)||u().size>0)&&F(Re)})}b(F=>Ye(R,"srcdoc",F),[()=>ft(c(),t(X))]),a(S,d)},$$slots:{default:!0}})}),a(P,n)},$$slots:{default:!0}})}),a(f,D),J()}const G=Fe({loaded:!1}),ye=async(f=!1)=>{const{studentAccount:e}=at;e&&await rt(G,()=>e.mailData(),st.mailData,1e3*60*60,f)};var Mt=m('<li class="w-full max-w-3xl"><!></li>'),yt=m('<ol class="m-4 flex flex-col items-center gap-4"></ol> <!>',1),Lt=m("<!> <!> <!>",1);function Ht(f,e){Y(e,!0),ye();let h;h=new DOMParser;let g=ce(!1),c=ce(void 0),u=ce("");const s=new qe;let l=ce(!1);function Q(n){re(c,n,!0);const x=h.parseFromString(n._MessageText,"text/html"),M=x.querySelectorAll("a");s.clear(),M.forEach(r=>{r.setAttribute("target","_blank"),new URL(r.href).hostname&&s.add(r.href)}),re(u,x.body.innerHTML,!0),re(g,!0)}var X=Lt();Ce("g3x7q3",n=>{Be(()=>{Ie.title=`Mail - ${Ge}`})});var D=o(X);{var V=n=>{Oe(n,{children:(x,M)=>{De();var r=Le("Loading mail...");a(x,r)},$$slots:{default:!0}})};L(D,n=>{G.loaded||n(V)})}var U=i(D,2);{var j=n=>{je(n,{get canRefresh(){return G.loaded},get lastRefresh(){return G.lastRefresh},refresh:()=>ye(!0)})};L(U,n=>{G.lastRefresh!==void 0&&n(j)})}var P=i(U,2);{var W=n=>{var x=yt(),M=o(x);me(M,21,()=>G.data.InboxItemListings.MessageXML,_=>_._SMMessageGU,(_,d)=>{var v=Mt();v.__touchend=()=>{re(l,!0)};var R=y(v);dt(R,{get message(){return t(d)},onclick:()=>Q(t(d))}),p(v),a(_,v)}),p(M);var r=i(M,2);{var S=_=>{wt(_,{get message(){return t(c)},get content(){return t(u)},get links(){return s},get touchscreen(){return t(l)},get open(){return t(g)},set open(d){re(g,d,!0)}})};L(r,_=>{t(c)&&_(S)})}a(n,x)};L(P,n=>{G.data&&n(W)})}a(f,X),J()}Ne(["touchend"]);export{Ht as component};
