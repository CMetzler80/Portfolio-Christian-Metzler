# Todo App

Eine Full-Stack Aufgabenverwaltungs-App als persönliches Lernprojekt, um den kompletten Entwicklungsprozess von Frontend bis Datenbank zu üben.

## Technologien

| Bereich | Technologie |
|---|---|
| Frontend | Next.js 16, React 19, TypeScript, Tailwind CSS |
| Datenbank | MySQL 8 (via Docker), Prisma ORM 7 |
| Tooling | ESLint, dotenv, Docker |

## Voraussetzungen

- [Node.js](https://nodejs.org/) (Version 18+)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

## Installation & Start

```bash
# 1. Abhängigkeiten installieren
npm install

# 2. Umgebungsvariablen einrichten
cp .env.example .env

# 3. Datenbank starten
docker-compose up -d

# 4. Datenbankstruktur anlegen
npx prisma db push

# 5. (Optional) Testdaten einfügen
npx prisma db seed

# 6. App starten
npm run dev
```

App läuft unter **http://localhost:3000**

## Autor

**Christian Metzler** — [GitHub Portfolio](https://github.com/Portfolio-Christian-Metzler)
