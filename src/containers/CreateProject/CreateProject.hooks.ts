"use client";

import { useEffect, useState, useCallback } from "react";

import { Project, NewProject } from "@/types/Project";
import { createClient } from "@/lib/supabase/client";
import z from "zod";

export function useCreateProject() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const supabase = createClient();

  const fetchProjects = useCallback(async () => {
    setLoading(true);
    setError(null);

    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setProjects(data ?? []);
    setLoading(false);
  }, [supabase]);

  const addProject = useCallback(
    async (project: NewProject) => {
      setError(null);

      const { data, error } = await supabase
        .from("projects")
        .insert(project)
        .select()
        .single();

      if (error) {
        setError(error.message);
        return;
      }

      if (data) {
        setProjects((prev) => [data, ...prev]);
      }
    },
    [supabase],
  );

  const updateProject = useCallback(
    async (id: string, updates: Partial<NewProject>) => {
      setError(null);

      const { data, error } = await supabase
        .from("projects")
        .update(updates)
        .eq("id", id)
        .select()
        .single();

      if (error) {
        setError(error.message);
        return;
      }

      if (data) {
        setProjects((prev) =>
          prev.map((project) => (project.id === id ? data : project)),
        );
      }
    },
    [supabase],
  );

  const deleteProject = useCallback(
    async (id: string) => {
      setError(null);

      const { error } = await supabase.from("projects").delete().eq("id", id);

      if (error) {
        setError(error.message);
        return;
      }

      setProjects((prev) => prev.filter((project) => project.id !== id));
    },
    [supabase],
  );

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const minWordsInDescription = z.string().refine(
    (val) => {
      const words = val
        .trim()
        .split(/\s+/)
        .filter((word) => word !== "");
      return words.length >= 10;
    },
    {
      message: "Description must be at least 10 words",
    },
  );

  const projectSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters"),
    description: minWordsInDescription, // your existing description validator
    gh_repo: z
      .string()
      .refine(
        (val) =>
          val.startsWith("https://github.com/") &&
          val.length > "https://github.com/".length,
        { message: "Enter a valid GitHub repo path (e.g. username/repo-name)" },
      ),

    // ✅ Deployment URL optional
    deployment: z
      .string()
      .trim()
      .optional()
      .or(z.literal("")) // allow empty string
      .refine(
        (val) =>
          !val ||
          (val.startsWith("https://") && val.length > "https://".length),
        {
          message:
            "Enter a valid deployment URL (e.g. https://myapp.vercel.app)",
        },
      ),

    // ✅ Image URL optional
    img_src: z
      .string()
      .trim()
      .optional()
      .or(z.literal("")) // allow empty string
      .refine(
        (val) =>
          !val ||
          (val.startsWith("https://raw.githubusercontent.com/") &&
            val.length > "https://raw.githubusercontent.com/".length),
        {
          message:
            "Enter a valid raw GitHub image path (e.g. https://raw.githubusercontent.com/user/repo/branch/image.png)",
        },
      ),

    featured: z.boolean(),
  });

  const checkConflicts = useCallback(
    (data: NewProject, excludeId?: string): Record<string, string> => {
      const others = excludeId
        ? projects.filter((p) => p.id !== excludeId)
        : projects;

      const conflicts: Record<string, string> = {};

      if (
        others.some(
          (p) =>
            p.title.trim().toLowerCase() === data.title.trim().toLowerCase(),
        )
      ) {
        conflicts.title = "A project with this title already exists";
      }

      if (others.some((p) => p.gh_repo === data.gh_repo)) {
        conflicts.gh_repo =
          "This GitHub repo URL is already used by another project";
      }

      if (
        data.deployment &&
        others.some((p) => p.deployment === data.deployment)
      ) {
        conflicts.deployment =
          "This live URL is already used by another project";
      }

      if (others.some((p) => p.img_src === data.img_src)) {
        conflicts.img_src = "This image URL is already used by another project";
      }

      return conflicts;
    },
    [projects],
  );

  return {
    projects,
    loading,
    error,
    fetchProjects,
    addProject,
    updateProject,
    deleteProject,
    projectSchema,
    checkConflicts,
  };
}
