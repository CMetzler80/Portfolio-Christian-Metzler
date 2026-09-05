
# Kalender App

Eine persönliche Kalender-App die Termine aus dem Google Kalender abruft und übersichtlich im Browser darstellt. Die App ist live auf Netlify verfügbar und läuft standardmäßig mit Demo-Daten.

**Live Demo:** [kalender-christian.netlify.app](https://kalender-christian.netlify.app)

## Technologien

| Bereich | Technologie |
|---|---|
| Frontend | JavaScript, HTML, CSS |
| Build-Tool | Vite 8 |
| API | Google Calendar API (OAuth 2.0) |
| Hosting | Netlify |

## Voraussetzungen

- [Node.js](https://nodejs.org/) (Version 18+)
- Ein Google-Konto (nur für echte Kalender-Daten nötig)

## Installation & Start

```bash
# 1. Abhängigkeiten installieren
npm install

# 2. Umgebungsvariablen einrichten
cp .env.example .env

# 3. App starten
npm run dev
```

App läuft unter **http://localhost:5173**

> Die App startet automatisch im **Demo-Modus** mit Beispiel-Terminen.  
> Für echte Kalender-Daten wird eine Google Client-ID benötigt (siehe `.env.example`).


## Autor

**Christian Metzler** — [GitHub Portfolio](https://github.com/Portfolio-Christian-Metzler)







