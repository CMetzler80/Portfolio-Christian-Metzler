## Installation von Prisma ORM

- als erstes die `npx prisma@latest init` laufen lassen im Terminal
- Locale neue Datenbank erstellen mit `npx prisma dev` im terminal
    
    diese Befehle erstellen ein **schema.prisma** und ein **prisma.config.ts** in deinem Projektordner
 - die Dependencies installieren mit `npm install prisma tsx @types/pg --save-dev`

- den Prisma Client installierern `npm install @prisma/client`
- den passenden datenbank Adapter installieren (MySQL) `npm install @prisma/adapter-mariadb`



## Einrichten der Datenbank

- im **schema.prisma** deine art von Datenbank (MySQL) definieren `datasource db {
  provider = "mysql"
}`

- in der **prisma.config.ts** definieren welche Datenbank man verwendet 


```
import {defineConfig, env } from "prisma/config"

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    //Abhängig davon welche Datenbank man verwendet
    url: env("DATABASE_URL"), // mysql://user:pass@host:3306/db
  },
});
```
in unserem Fall ist die Datenbank im docker container in der Datei **docker-compose.yaml** definiert. 
- erstellen der Tabelle mit Daten (`model Projekt {Name Wert Name Wert}`) im **schema.prisma** 
- Befehl `npx prisma migrate dev --name init` ausführen um die Tabelle zu erstellen
- Dann den Prisma Client generieren `npx prisma generate`

- datenbank URl nach folgendem Schema definieren ![alt text](image.png)

## Befüllen mit Daten

- mit einer **seeds.ts** datei
- aktualliesieren der **prisma.config.ts** mit dem `seed: "tsx prisma/seed.ts", ` 

Beispiel code: 
```
// prisma.config.ts  ← liegt im Projektstamm (neben package.json)

import "dotenv/config"; // Lädt deine .env Datei automatisch
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma", // Wo liegt deine Schema-Datei?

  migrations: {
    path: "prisma/migrations", // Wo werden Migrationen gespeichert?
    seed: "tsx prisma/seed.ts", // Welcher Befehl startet den Seed?
  },

  datasource: {
    url: env("DATABASE_URL"), // Datenbankverbindung aus .env
  },
});
```
- dann `prisma db seed` ausführen 

## Schaffen einer Verbindung zur Datenbank
  - zuerst in einem neuen **lib Ordner** eine **prisma.ts** erstellen mit dem Befehl `mkdir -p lib && touch lib/prisma.ts`

## Starten der ganzen Todo-app

- in den Projektordner gehen (todo-app) und starten mit `docker compose up -d` im Terminal
- danach `npm run dev`

## Man kann die Datenbank im Prisma Studio anschauen und bearbeiten 
  - den Befehl `npx prisma studio` ausführen um das Prisma studio zu starten
  - ausführen in einem bestehenden Prisma Projekt mit anpassung der **prisma.config.ts** Datei `npx prisma studio --config ./prisma.config.ts`

