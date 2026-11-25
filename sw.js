const CACHE = 'mon-argent-pwa-public-v3';
const ASSETS = ['./', './index.html', './manifest.json', './icon.png', './icon512.png'];
self.addEventListener('install',event => {event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));});
self.addEventListener('activate',event => {event.waitUntil(Promise.all([caches.keys().then(keys => Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))),self.clients.claim()]));});
self.addEventListener('fetch',event => {if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin) return;event.respondWith(fetch(event.request).catch(()=>caches.match(event.request)));});
