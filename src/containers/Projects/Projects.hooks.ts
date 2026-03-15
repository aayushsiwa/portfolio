import { useState, useEffect } from "react";
import projectData from "../../../public/projects.json";

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
}
