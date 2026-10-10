// Dunia Cimey service worker: network-first (selalu coba versi terbaru), cache sebagai cadangan offline.
const V='cimey-v4';
const CORE=['./','index.html','manifest.webmanifest','fonts/baloo-2-latin-500-normal.woff2','fonts/baloo-2-latin-700-normal.woff2','fonts/baloo-2-latin-800-normal.woff2','ikon/ikon_app_192.png','ikon/ikon_app_512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{if(r&&r.ok){const cp=r.clone();caches.open(V).then(c=>c.put(e.request,cp))}return r}).catch(()=>caches.match(e.request).then(m=>m||caches.match('index.html'))))});
