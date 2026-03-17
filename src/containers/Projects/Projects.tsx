import Card from "@/components/uiComponents/Card";
import { fetchAllProjects } from "@/api/projects.api";

export const Projects = async () => {
  const projects = await fetchAllProjects();

  if (!projects?.length) return null;

  return (
    <section
      id="projects"
      className="bg-light-bg dark:bg-dark-bg py-40 px- md:px-0 lg:px-0 gap-0 font-[Poppins]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-4 max-w-[90vw] mx-auto">
        {projects.map((project, index) => (
          <Card key={index} data={project} />
        ))}
      </div>
    </section>
  );
};
