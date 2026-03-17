"use client";

import { useState, useCallback } from "react";
import { Project, NewProject } from "@/types/Project";
import { useProjects } from "@/lib/useProjects";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "vinext/shims/router";

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
