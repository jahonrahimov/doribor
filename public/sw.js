if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const o=e=>a(e,t),r={module:{uri:t},exports:c,require:o};s[t]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(n(...e),c)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"5e9c011a8c0a0de3a8a12f0c27d9aa2e"},{url:"/_next/static/Qf5DKvoNuQp8iBXClTtq3/_buildManifest.js",revision:"a2fca4e7c42d36e6bd2b18d2c2583e62"},{url:"/_next/static/Qf5DKvoNuQp8iBXClTtq3/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/455-e68c2e447770060e.js",revision:"Qf5DKvoNuQp8iBXClTtq3"},{url:"/_next/static/chunks/546.a28b0becd6e2fe54.js",revision:"a28b0becd6e2fe54"},{url:"/_next/static/chunks/552.23b62276e19f16a2.js",revision:"23b62276e19f16a2"},{url:"/_next/static/chunks/920-9f7d793dd7b601cf.js",revision:"Qf5DKvoNuQp8iBXClTtq3"},{url:"/_next/static/chunks/app/andijon-tumani/page-eb0dfed2b79af88c.js",revision:"Qf5DKvoNuQp8iBXClTtq3"},{url:"/_next/static/chunks/app/asaka-tumani/page-583cbd3f5fc76839.js",revision:"Qf5DKvoNuQp8iBXClTtq3"},{url:"/_next/static/chunks/app/baliqchi-tumani/page-c88a294411efb07a.js",revision:"Qf5DKvoNuQp8iBXClTtq3"},{url:"/_next/static/chunks/app/boston-tumani/page-cc9bcbb315034b94.js",revision:"Qf5DKvoNuQp8iBXClTtq3"},{url:"/_next/static/chunks/app/buloqboshi-tumani/page-3ad8ebecbf7e2b24.js",revision:"Qf5DKvoNuQp8iBXClTtq3"},{url:"/_next/static/chunks/app/dorihonani-qoshish/page-629b9f49346dd6e8.js",revision:"Qf5DKvoNuQp8iBXClTtq3"},{url:"/_next/static/chunks/app/izboskan-tumani/page-d4d5961e29cc1628.js",revision:"Qf5DKvoNuQp8iBXClTtq3"},{url:"/_next/static/chunks/app/jalaquduq-tumani/page-bf73b4fdad014e9c.js",revision:"Qf5DKvoNuQp8iBXClTtq3"},{url:"/_next/static/chunks/app/layout-905e3d1579380b62.js",revision:"Qf5DKvoNuQp8iBXClTtq3"},{url:"/_next/static/chunks/app/marhamat-tumani/page-d224bcfa33338c07.js",revision:"Qf5DKvoNuQp8iBXClTtq3"},{url:"/_next/static/chunks/app/oltinkol-tumani/page-8fab486341c66e9d.js",revision:"Qf5DKvoNuQp8iBXClTtq3"},{url:"/_next/static/chunks/app/page-d9417217bbf1c3c9.js",revision:"Qf5DKvoNuQp8iBXClTtq3"},{url:"/_next/static/chunks/app/pahtaobod-tumani/page-47c67c5246dfe08b.js",revision:"Qf5DKvoNuQp8iBXClTtq3"},{url:"/_next/static/chunks/app/qorgontepa-tumani/page-1add0dd7b3c7192a.js",revision:"Qf5DKvoNuQp8iBXClTtq3"},{url:"/_next/static/chunks/app/shahrihon-tumani/page-79a6de2677199e09.js",revision:"Qf5DKvoNuQp8iBXClTtq3"},{url:"/_next/static/chunks/app/ulugnor-tumani/page-618f66de65ce3e20.js",revision:"Qf5DKvoNuQp8iBXClTtq3"},{url:"/_next/static/chunks/app/xojaobod-tumani/page-9fa0c3ec03031912.js",revision:"Qf5DKvoNuQp8iBXClTtq3"},{url:"/_next/static/chunks/main-1d79ca7cc5e3fdfc.js",revision:"Qf5DKvoNuQp8iBXClTtq3"},{url:"/_next/static/chunks/main-app-08d76de7170f0224.js",revision:"Qf5DKvoNuQp8iBXClTtq3"},{url:"/_next/static/chunks/pages/_app-907dedfd0e4177db.js",revision:"Qf5DKvoNuQp8iBXClTtq3"},{url:"/_next/static/chunks/pages/_error-b5ee443ea3f1b36c.js",revision:"Qf5DKvoNuQp8iBXClTtq3"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-bc4b864f29d0c521.js",revision:"Qf5DKvoNuQp8iBXClTtq3"},{url:"/_next/static/css/aa15fe3776697b1b.css",revision:"aa15fe3776697b1b"},{url:"/_next/static/css/b13bfd0e686959a2.css",revision:"b13bfd0e686959a2"},{url:"/_next/static/css/ed96b308e79c5cfe.css",revision:"ed96b308e79c5cfe"},{url:"/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/favicon.ico",revision:"bfab40b95566ca8466fa0e1703e0d26c"},{url:"/hero.png",revision:"01635966664ef9ba46a7b9f0c653a3ba"},{url:"/icon_down.svg",revision:"2b842a904ad5557bb9f3efb53cc3c7c4"},{url:"/icons/android-chrome-192x192.png",revision:"f6f51311f4ca525861ce93958d257282"},{url:"/icons/android-chrome-384x384.png",revision:"31d750c64fdc59dd1ef4156525b93273"},{url:"/icons/icon-512x512.png",revision:"45af035041dc04aeafaf6462bc85f878"},{url:"/manifest.json",revision:"cb0f7ef1a6d731c70d7fa28c1bc62259"},{url:"/maskable_icon.png",revision:"8e6380a5ac3d0a245c29dd967aa979ac"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
