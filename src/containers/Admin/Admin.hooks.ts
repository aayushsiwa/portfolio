"use client";

import { useState, useCallback } from "react";
import { Project, NewProject } from "@/types/Project";
import { useProjects } from "@/lib/useProjects";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/router";

/**
 * Composes admin state and action handlers for managing projects in the admin UI.
 *
 * @returns An object with:
 * - `projects`: the current list of projects
 * - `loading`: whether projects are being loaded
 * - `error`: any error encountered while loading projects
 * - `editing`: the project currently being edited, or `null`
 * - `handleSubmit`: a function that creates a new project or updates the currently edited project (accepts a `NewProject`)
 * - `handleEdit`: a function that marks a given `Project` for editing
 * - `handleDelete`: a function that removes a given `Project`
 * - `handleCancel`: a function that cancels editing and clears the `editing` state
 * - `logout`: a function that signs out the current user and navigates to the login page
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
