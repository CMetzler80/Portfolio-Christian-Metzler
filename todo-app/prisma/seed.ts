import { ProjekteCreateInput } from "@/generated/prisma/models";
import { PrismaClient, Prisma } from "../src/generated/prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import "dotenv/config";
import projekte from './projekteDaten.json';

const adapter = new PrismaMariaDb(
  process.env.DATABASE_URL as string
);

const prisma = new PrismaClient({
  adapter,
});

const projekteData: ProjekteCreateInput[] = projekte.map((projekt) => ({
  name: projekt.name,
  beschreibung: projekt.beschreibung,
}));

export async function main() {
  for (const projekt of projekteData) {
    console.log("now inserting:",projekt)
    await prisma.projekte.create({ data: projekt });
  }
}

main();