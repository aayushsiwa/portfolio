"use client";

import { useCallback, useEffect, useState } from "react";
import {
  fetchAllProjects,
  createProject,
  updateProject,
  deleteProject,
} from "@/api/projects.api";
import { NewProject, Project, UpdateProject } from "@/types/Project";

interface UseProjectsReturn {
  projects: Project[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  addProject: (project: NewProject) => Promise<void>;
  editProject: (id: string, updates: UpdateProject) => Promise<void>;
  removeProject: (id: string) => Promise<void>;
}

/**
 * Manages a list of projects and exposes loading, error, and CRUD operations for UI components.
 *
 * @returns An object with:
 * - `projects` — the current array of projects.
 * - `loading` — `true` while projects are being fetched, `false` otherwise.
 * - `error` — an error message when a fetch fails, or `null` when there is no error.
 * - `refetch` — reloads the projects from the server.
 * - `addProject` — creates a new project and prepends it to the list.
 * - `editProject` — updates an existing project by id and replaces it in the list.
 * - `removeProject` — deletes a project by id and removes it from the list.
 */
export function useProjects(): UseProjectsReturn {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchAllProjects();
      setProjects(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch projects");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refetch();
  }, [refetch]);

  const addProject = useCallback(async (project: NewProject) => {
    const created = await createProject(project);
    setProjects((prev) => [created, ...prev]);
  }, []);

  const editProject = useCallback(
    async (id: string, updates: UpdateProject) => {
      const updated = await updateProject(id, updates);
      setProjects((prev) => prev.map((p) => (p.id === id ? updated : p)));
    },
    [],
  );

  const removeProject = useCallback(async (id: string) => {
    await deleteProject(id);
    setProjects((prev) => prev.filter((p) => p.id !== id));
  }, []);

  return {
    projects,
    loading,
    error,
    refetch,
    addProject,
    editProject,
    removeProject,
  };
}
