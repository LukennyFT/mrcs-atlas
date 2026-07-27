/* MRCS Part A — Atlas · service worker
 *
 * Makes the app installable and fully offline. Everything is static, so we
 * pre-cache the whole app on install and serve cache-first.
 *
 * ⚠ WHEN YOU CHANGE ANY APP FILE, bump the version in CACHE below (v1 → v2 …).
 * That is what tells installed devices to fetch the new files; without it they
 * keep serving the old cached copy.
 */
const CACHE = "mrcs-atlas-v6";

const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
  "./apple-touch-icon.png",
  "./vendor/react.min.js",
  "./vendor/react-dom.min.js",
  "./vendor/babel.min.js",
  "./data-anatomy.js",
  "./data-physiology.js",
  "./data-pathology.js",
  "./data-conditions.js",
  "./data-periop.js",
  "./data-trauma.js",
  "./data-core.js",
  "./data-questions.js",
  "./firebase-config.js",
  // NB: vendor/firebase-*-compat.js are deliberately NOT precached. They are only
  // fetched if the user actually turns on sync, and the runtime handler below
  // caches them on first use. Keeps 375 KB off every first load.
  // the two alternative front ends share the same data and work offline too
  "./alternatives/index.html",
  "./alternatives/theatre/index.html",
  "./alternatives/ward-round/index.html"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          // cache same-origin successful responses for next time
          if (res && res.ok && new URL(req.url).origin === self.location.origin) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => {
          // offline and not cached: fall back to the app shell for navigations
          if (req.mode === "navigate") return caches.match("./index.html");
        });
    })
  );
});
