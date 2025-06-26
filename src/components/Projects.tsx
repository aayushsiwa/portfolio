import { useState, useEffect } from "react";
import Card from "./uiComponents/Card";
import projectData from "../assets/projects.json";

export default function Projects() {
  type Project = {
    title: string;
    description: string;
    imgSrc: string;
    githubLink: string;
    liveLink: string;
  };
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(projectData);
  }, []);
  return (
    <section
      id="projects"
      className="bg-light-bg dark:bg-dark-bg py-40 px- md:px-0 lg:px-0 gap-0 font-[Poppins]"
    >
      <div className="flex items-center justify-evenly gap-4 w-full p-4 flex-wrap max-w-[1000vw] mx-auto">
        {projects.map((project, index) => (
          <Card key={index} data={project} />
        ))}
      </div>
    </section>
  );
}
