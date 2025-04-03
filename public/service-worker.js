// service-worker.js
const CACHE_NAME = 'travel-blog-cache-v1'
const STATIC_CACHE = 'travel-blog-static-v1'
const IMAGES_CACHE = 'travel-blog-images-v1'

// Assets that should be cached immediately on install
const urlsToCache = ['/', '/index.html', '/assets/index.css', '/assets/index.js']

// Match image requests
const isImage = (request) => request.url.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      console.log('Opened static cache')
      return cache.addAll(urlsToCache)
    }),
  )
})

self.addEventListener('fetch', (event) => {
  // For images, use a cache-first strategy
  if (isImage(event.request)) {
    event.respondWith(
      caches.open(IMAGES_CACHE).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response) {
            return response
          }

          return fetch(event.request).then((networkResponse) => {
            // Clone the response before caching
            const clonedResponse = networkResponse.clone()

            // Cache the fetched image
            if (networkResponse.ok) {
              cache.put(event.request, clonedResponse)
            }

            return networkResponse
          })
        })
      }),
    )
  } else {
    // For non-image assets, use a network-first strategy
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Cache the non-image asset for offline use
          if (response.ok) {
            const clonedResponse = response.clone()
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, clonedResponse)
            })
          }
          return response
        })
        .catch(() => {
          // If network fetch fails, try the cache
          return caches.match(event.request)
        }),
    )
  }
})

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME, STATIC_CACHE, IMAGES_CACHE]
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
})
