if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const l=e=>n(e,r),f={module:{uri:r},exports:o,require:l};s[r]=Promise.all(i.map((e=>f[e]||l(e)))).then((e=>(t(...e),o)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/Dashboard.04f2b97f.js",revision:null},{url:"assets/index.1fe27283.css",revision:null},{url:"assets/index.32d92514.js",revision:null},{url:"assets/Instructions.07f78eb6.js",revision:null},{url:"index.html",revision:"c7278f08d8979b1f8fbf5a2c49762d48"},{url:"manifest.webmanifest",revision:"c21688bb5a95bc1f00698f863f878e6a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
