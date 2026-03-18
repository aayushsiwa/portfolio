"use client";

import { useState, useCallback } from "react";
import { Project, NewProject } from "@/types/Project";
import { useProjects } from "@/lib/useProjects";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "vinext/shims/router";

/**
 * Provides admin state and action handlers for managing projects and signing out.
 *
 * Exposes project data, loading/error states, the currently edited project, and handlers
 * for creating/updating, editing, deleting, cancelling edits, and logging out.
 *
 * @returns An object containing:
 * - `projects` — the current list of projects
 * - `loading` — `true` when project data is being fetched
 * - `error` — an error object if project loading failed, otherwise `null` or `undefined`
 * - `editing` — the project currently being edited, or `null` when not editing
 * - `handleSubmit` — function to create a new project or update the currently edited project
 * - `handleEdit` — function to start editing a given project
 * - `handleDelete` — function to remove a given project
 * - `handleCancel` — function to cancel the current edit (clears `editing`)
 * - `logout` — function to sign out the current user and redirect to the login page
 */
export function useAdminHooks() {
  const { projects, loading, error, addProject, editProject, removeProject } =
    useProjects();
  const router = useRouter();
  const supabase = createClient();

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
