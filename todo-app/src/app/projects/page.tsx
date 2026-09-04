import { prisma } from "@/lib/prisma";

export default async function Home() {
  const projects = await prisma.projekte.findMany();
  return (
    <div className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400 underline-offset-4">
      <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
        Christians Projekte
      </h1>
      <ol className="list-decimal list-inside font-[family-name:var(--font-geist-sans)]">
        {projects.map((project: typeof projects[0]) => (
          <li key={project.id} className="bg-gray-100 m-4 p-4 mb-2 border rounded font-bold">
            <div className="underline">{project.name} </div>
            <div>{project.beschreibung}</div>
          </li>
        ))}
      </ol>
    </div>
  );
}