"use client";

import { useState, useCallback } from "react";
import { Project, NewProject } from "@/types/Project";
import { useProjects } from "@/lib/useProjects";
import { supabaseBrowserClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

/**
 * Compose admin state and action handlers for project management and user sign-out.
 *
 * Provides the current list of projects and loading/error state from data hooks,
 * the currently edited project (if any), CRUD handlers for projects, a cancel handler,
 * and a logout function that signs the user out and navigates to the login page.
 *
 * @returns An object containing:
 * - `projects` — the array of `Project` items
 * - `loading` — a boolean indicating whether project data is loading
 * - `error` — an error object or `null` if no error occurred
 * - `editing` — the `Project` currently being edited, or `null`
 * - `handleSubmit` — a function `(data: NewProject) => Promise<void>` to add or save a project
 * - `handleEdit` — a function `(project: Project) => void` that sets a project for editing and scrolls to top
 * - `handleDelete` — a function `(project: Project) => Promise<void>` that removes the given project
 * - `handleCancel` — a function `() => void` that cancels editing
 * - `logout` — a function `() => Promise<void>` that signs the user out and redirects to `/login`
 */
export function useAdminHooks() {
  const { projects, loading, error, addProject, editProject, removeProject } =
    useProjects();
  const router = useRouter();
  const supabase = supabaseBrowserClient;

  async function logout() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  const [editing, setEditing] = useState<Project | null>(null);

  const handleSubmit = useCallback(
    async (data: NewProject) => {
      if (editing) {
        await editProject(editing.id, data);
        setEditing(null);
      } else {
        await addProject(data);
      }
    },
    [editing, editProject, addProject],
  );

  const handleEdit = useCallback((project: Project) => {
    setEditing(project);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleDelete = useCallback(
    async (project: Project) => {
      await removeProject(project.id);
    },
    [removeProject],
  );

  const handleCancel = useCallback(() => {
    setEditing(null);
  }, []);

  return {
    projects,
    loading,
    error,
    editing,
    handleSubmit,
    handleEdit,
    handleDelete,
    handleCancel,
    logout,
  };
}
