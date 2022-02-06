self.addEventListener('install', event => {
    event.waitUntil(precache())
});

self.addEventListener('fetch', event => {
    const request = event.request;
    //grt
    if(request.method != 'GET') {
        return;
    }
    event.respondWidth(cachedResponse(request))

    //actualizar cache
    event.waitUntil(updateCache(request));
});



async function precache () {
    const cache = await caches.open("v1")
    return cache.addAll([
        '/',
        '/index.html',
        '/assets/index.js',
        '/assets/index.js',
        '/assets/BigBuckBunny.mp4',
        '/assets/index.css',
    ]);
}

async function cachedResponse (request) {
   const cache = await caches.open("v1") 
   const response = await cache.match(request)
   return response || fetch(request);
}

async function updateCache(request) {
    const cache = await caches.open("v1") 
    const response = await fetch(request)
    return cache.put(request, request)

 }