'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2a01464eabdc38debd20960ca60c2ff2",
"assets/AssetManifest.json": "2526a8045ed633db0e0ddffc5fa05c59",
"assets/assets/img/header.png": "f4b42583f7da6fc92639c13963a5dc6a",
"assets/assets/img/logo-black.png": "7a16ec0e03fabd3d5e268cf807485292",
"assets/assets/img/logo-img.svg": "224738a5b23a61ab9f6b32396005ac5b",
"assets/assets/img/logo-text.svg": "0207e15090dd90a65f82ae4aafa97ecf",
"assets/assets/img/logo.png": "673101e38e1bd51d583497d7e41a9779",
"assets/FontManifest.json": "cdb6071e0673e404dcd4f3236b4f4d12",
"assets/fonts/MaterialIcons-Regular.otf": "e48a598471a1686694b2c2618f607457",
"assets/fonts/PlusJakartaDisplay-Bold.otf": "1e5642fdde54004e7ac175ceb48b9a1f",
"assets/fonts/PlusJakartaDisplay-Medium.otf": "1f27f846a2a8e5c0b3162e3fb1d78865",
"assets/fonts/PlusJakartaDisplay-Regular.otf": "a81ce9b45769e9a0227e6949a9b4b9c8",
"assets/NOTICES": "68ef97985656d123d9c9b0ff6ca8e307",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "95a9e2c575331be1b217122494c58fbf",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/android-icon-144x144.png": "89f3c119b1b430b670a3898ec961cdca",
"icons/android-icon-192x192.png": "589df1faebc62f8bd13933a012a29be1",
"icons/android-icon-36x36.png": "3069231152a72ca4fa634965cc9c4a04",
"icons/android-icon-48x48.png": "a88bf7ba97878223028eaed1c93e2daf",
"icons/android-icon-72x72.png": "1b41ef926833226b1c0e967d6b29174e",
"icons/android-icon-96x96.png": "38a84d02fd9833b99aee0784ee8553ef",
"icons/apple-icon-114x114.png": "0b29890d82d9ee2b24fabd6983e19168",
"icons/apple-icon-120x120.png": "cd26dca0c13ceb4dc3d35ab244f213a6",
"icons/apple-icon-144x144.png": "89f3c119b1b430b670a3898ec961cdca",
"icons/apple-icon-152x152.png": "f60f673a363d82d8db75df5f954cef6e",
"icons/apple-icon-180x180.png": "d8f0460ccc9dac5d836a17d8b2e67bf8",
"icons/apple-icon-57x57.png": "4c35c7479179147f44f5c2c3fda1e5a3",
"icons/apple-icon-60x60.png": "fde0e09b055400f78e8e04e9ddf1eed7",
"icons/apple-icon-72x72.png": "1b41ef926833226b1c0e967d6b29174e",
"icons/apple-icon-76x76.png": "53cc82116ee3f58227e68f555cdfbbaa",
"icons/apple-icon-precomposed.png": "effca59aea8d80791031863ac701f61c",
"icons/apple-icon.png": "effca59aea8d80791031863ac701f61c",
"icons/favicon-16x16.png": "c2177fdcfed0c4b3c87d1456f213753d",
"icons/favicon-32x32.png": "14d0f24b3062c9b0c1a75e44393aeac5",
"icons/favicon-96x96.png": "38a84d02fd9833b99aee0784ee8553ef",
"icons/favicon.ico": "e4519f2b852c75f4e04c97c14c4e584f",
"icons/ms-icon-144x144.png": "89f3c119b1b430b670a3898ec961cdca",
"icons/ms-icon-150x150.png": "b1b70204ece7c1ae3b9eb6ac6d4360e6",
"icons/ms-icon-310x310.png": "4a5ecd6080a93698c6503486e4692211",
"icons/ms-icon-70x70.png": "a13df21697774e7fb355f7e14648a715",
"index.html": "72334fc267b0edb5b3beb87f97036e44",
"/": "72334fc267b0edb5b3beb87f97036e44",
"main.dart.js": "08e5fe29c7641a49908aef2be86f9016",
"manifest.json": "d03d9667ea281409465c939d00f0a4b7",
"version.json": "fb02a0649438af0015419cb982ddffdc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
