if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let a={};const c=e=>i(e,o),d={module:{uri:o},exports:a,require:c};s[o]=Promise.all(n.map((e=>d[e]||c(e)))).then((e=>(r(...e),a)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/Dashboard.db611ea7.js",revision:null},{url:"assets/index.bc5f903a.js",revision:null},{url:"assets/index.d8415c7d.css",revision:null},{url:"assets/Instructions.94bbdaa6.js",revision:null},{url:"index.html",revision:"763aa945479a5f4ad5f25b12f0295a17"},{url:"favicon.svg",revision:"c53e7ef96d9a20402acb6a7eb6e876de"},{url:"favicon.ico",revision:"d261372bc902b1383be741e08a70b576"},{url:"robots.txt",revision:"61c27d2cd39a713f7829422c3d9edcc7"},{url:"apple-touch-icon.png",revision:"845709e9b14e6b5fed71cc8bbae7bad6"},{url:"android-chrome-192x192.png",revision:"ddf6ef0aafe37263edff6fab04e22e01"},{url:"android-chrome-512x512.png",revision:"7aac88053b9a1aa5707d3caf2ac8c3c9"},{url:"manifest.webmanifest",revision:"e09fb69e27384b7e7a233d82605d034e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
