/* eslint-disable no-restricted-globals */

const CACHE_NAME = 'az900-offline-v1';

// self.__WB_MANIFEST is replaced at build time by Workbox with the list of files to precache
const precacheManifest = [].concat(self.__WB_MANIFEST || []);

// Install event: cache the manifest files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(
        precacheManifest
          .map((entry) => entry.url)
          .filter((url) => url && !url.includes('index.html'))
      );
    }).catch((err) => console.log('Cache install failed', err))
  );
  self.skipWaiting();
});

// Activate event: clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        // FIX: Filter first, then map. This avoids the "no return value" error.
        cacheNames
          .filter((cacheName) => cacheWhitelist.indexOf(cacheName) === -1)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
  self.clients.claim();
});

// Fetch event: cache-first for app shell, network-first for questions.json
self.addEventListener('fetch', (event) => {
  // Network-first for questions.json so it stays fresh when online
  if (event.request.url.includes('questions.json')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Cache-first for everything else (app shell, CSS, JS, images)
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
