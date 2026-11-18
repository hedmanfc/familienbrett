/* Familienbrett – Service Worker: Benachrichtigungen im Hintergrund und Offline-Start */
importScripts("config.js");
importScripts(
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js",
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js"
);
try {
  firebase.initializeApp(self.FAMILIENBRETT.firebase);
  firebase.messaging(); // zeigt eingehende Benachrichtigungen automatisch an
} catch (e) {}

const CACHE = "familienbrett-v1";
const SHELL = ["./", "index.html", "config.js", "rezepte.txt", "manifest.webmanifest", "icon-192.png", "icon-512.png", "apple-touch-icon.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).catch(() => {})); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
// Eigene Dateien: erst Netz, bei Funkloch aus dem Speicher (z. B. Einkaufsliste im Supermarkt)
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== self.location.origin) return;
  e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {}); return r; }).catch(() => caches.match(e.request).then(r => r || caches.match("index.html"))));
});
