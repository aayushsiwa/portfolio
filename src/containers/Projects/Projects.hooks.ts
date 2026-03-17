import { useEffect, useState } from "react";
import { fetchAllProjects } from "@/api/projects.api";
import { Project } from "@/types/Project";

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchAllProjects().then(setProjects);
  }, []);

  return { projects };
};
