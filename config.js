/* Familienbrett – Einstellungen für die eigene App.
   Die Werte bekommst du aus der Firebase-Konsole (siehe Anleitung, Teil 1)
   und vom Cloudflare-Worker (Teil 3). Diese Datei enthält keine Geheimnisse,
   Firebase-Web-Schlüssel sind dafür gedacht, öffentlich im Browser zu stehen. */
self.FAMILIENBRETT = {
  firebase: {
    apiKey: "AIzaSyDQtyli6uOqwy8vosHCBihKJ7S615H-zxk",
    authDomain: "familienbrett-ed77d.firebaseapp.com",
    projectId: "familienbrett-ed77d",
    storageBucket: "familienbrett-ed77d.firebasestorage.app",
    messagingSenderId: "243219701993",
    appId: "1:243219701993:web:1bbc11619f0909e07cd078"
  },
  // Firebase → Projekteinstellungen → Cloud Messaging → Web-Push-Zertifikate → Schlüsselpaar
  vapidKey: "BFSKPaGlmdrKAQzF9gJ-qiz9Y0gtOCKsgJDWJkoMeKr4XkB8ho_c3vc3kpG505UFAmz4pdwsacKKSqhxzKvTvBY",
  // Adresse deines Cloudflare-Workers, z. B. https://familienbrett.deinname.workers.dev
  workerUrl: "https://familienbrett.timhartmann-effzeh.workers.dev"
};
