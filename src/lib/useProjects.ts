"use client";
import { useCallback, useEffect, useState } from "react";
import {
  fetchAllProjects,
  createProject,
  updateProject,
  deleteProject,
} from "@/api/projects.api";
import { NewProject, Project, UpdateProject } from "@/types/Project";
import { createClient } from "./supabase/client";

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
 * Manages a projects collection and exposes state plus CRUD actions backed by Supabase.
 *
 * Provides the current `projects` array, a `loading` flag for async operations, an `error` message when operations fail, and four async actions to `refetch`, `addProject`, `editProject`, and `removeProject`.
 *
 * @returns An object containing:
 * - `projects`: the current list of `Project` items
 * - `loading`: `true` while an operation is in progress, otherwise `false`
 * - `error`: a user-facing error message or `null`
 * - `refetch`: async function to reload all projects
 * - `addProject`: async function to create and prepend a new project
 * - `editProject`: async function to update an existing project by id
 * - `removeProject`: async function to delete a project by id
 */
export function useProjects(): UseProjectsReturn {
  const supabaseClient = createClient();
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
        setProjects((prev) => [created, ...prev]);
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
        setProjects((prev) => prev.map((p) => (p.id === id ? updated : p)));
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
