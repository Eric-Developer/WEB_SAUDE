
self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open('v1').then(function (cache){
            cache.addAll([
            
                '/index.html',
                '../pages/clinica.html',
                '../pages/hospital.html',
                '../pages/endereco.html',
                '../pages/login.html',
                '../pages/verMais.html',
                '../pages/sobre.html',
                '../assets/css/style.css',
                '../assets/css/clinica.css',
                '../assets/css/hospital.css',
                '../assets/css/endereco.css',
                '../assets/css/login.css',
                '../assets/css/verMais.css',
                '../assets/css/sobre.css',
                '../assets/js/app.js',
                '/assets/js/APIS/mapa.js'

            ])
        })
    )
    return self.skipWaiting()
})

self.addEventListener('activate', e =>{
    self.clients.claim()
})

self.addEventListener('fetch', async e =>{
    const req = e.request
    const url = new URL(req.url)

    if(url.origin === location.origin){
        e.respondWith(cacheFirst(req))
    } else{
        e.respondWith(networkAndCache(req))
    }
})

async function cacheFirst(req){
    const cache = await caches.open(cacheName)
    const cached = await cache.match(req)

    return cached || fetch(req)
}

async function networkAndCache(req){
    const cache = await caches.open(cacheName);
    try{
        const refresh = await fetch(req)
        await cache.put(req, refresh.clone())
        return refresh
    } catch(e){
        const cached = await cache.match(req);
        return cached
    }
}