"use client";
import Card from "@/components/uiComponents/Card";
import { useProjects } from "@/lib/useProjects";

export const Projects = () => {
  const { projects } = useProjects();

  return (
    <section
      id="projects"
      className="bg-light-bg dark:bg-dark-bg py-40 px-4 md:px-0 lg:px-0 gap-0 font-[Poppins] min-h-screen"
    >
      {projects.length != 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-4 max-w-[90vw] mx-auto">
          {projects.map((project) => (
            <Card key={project.id} data={project} />
          ))}
        </div>
      )}
    </section>
  );
};
