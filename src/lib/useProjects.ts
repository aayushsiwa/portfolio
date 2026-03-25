"use client";
import { useCallback, useEffect, useState } from "react";
import {
  fetchAllProjects,
  createProject,
  updateProject,
  deleteProject,
} from "@/api/projects.api";
import { NewProject, Project, UpdateProject } from "@/types/Project";
import { supabaseBrowserClient } from "./supabase/client";

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
 * Manages a list of projects with loading and error state and exposes CRUD operations.
 *
 * The hook fetches projects on mount and provides functions to refetch, add, edit, and remove projects; mutation functions update local state and surface API errors.
 *
 * @returns An object containing:
 * - `projects` — the current array of `Project` items
 * - `loading` — `true` while a fetch is in progress, `false` otherwise
 * - `error` — a user-facing error message or `null`
 * - `refetch` — reloads the project list
 * - `addProject` — creates a new project and prepends it to the list (may throw on failure)
 * - `editProject` — updates an existing project in-place by `id` (may throw on failure)
 * - `removeProject` — deletes a project by `id` and removes it from the list (may throw on failure)
 */
export function useProjects(): UseProjectsReturn {
  const supabaseClient = supabaseBrowserClient;
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchAllProjects(supabaseClient);
      setProjects(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch projects");
    } finally {
      setLoading(false);
    }
  }, [supabaseClient]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  const addProject = useCallback(
    async (project: NewProject) => {
      setError(null);
      try {
        const created = await createProject(supabaseClient, project);
        if (created) {
          setProjects((prev) => [created, ...prev]);
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to create project",
        );
        throw err;
      }
    },
    [supabaseClient],
  );

  const editProject = useCallback(
    async (id: string, updates: UpdateProject) => {
      setError(null);
      try {
        const updated = await updateProject(supabaseClient, id, updates);
        if (updated) {
          setProjects((prev) => prev.map((p) => (p.id === id ? updated : p)));
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to update project",
        );
        throw err;
      }
    },
    [supabaseClient],
  );
  const removeProject = useCallback(
    async (id: string) => {
      setError(null);
      try {
        await deleteProject(supabaseClient, id);
        setProjects((prev) => prev.filter((p) => p.id !== id));
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to delete project",
        );
        throw err;
      }
    },
    [supabaseClient],
  );

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
