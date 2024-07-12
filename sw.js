const CACHE_NAME = 'bubsi-kiss-cache-v1';
const assets = [
  '/Bubsi-kiss/',
  '/Bubsi-kiss/index.html',
  '/Bubsi-kiss/manifest.json',
  '/Bubsi-kiss/icon-192x192.png',
  '/Bubsi-kiss/icon-512x512.png',
  '/Bubsi-kiss/kiss-sound.m4a'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(assets);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
