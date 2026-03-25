"use client";

import { useCallback } from "react";
import { NewProject, Project } from "@/types/Project";

type ConflictErrors = Record<string, string>;

/**
 * Provide a function that detects duplicate project fields against an existing list.
 *
 * @param projects - Array of existing projects to check for conflicts
 * @returns An object with `checkConflicts(data, excludeId?)`, a function that returns a `ConflictErrors` map of field names to human-readable conflict messages. The `checkConflicts` function compares the provided `data` to `projects` (excluding the project with `id === excludeId` when `excludeId` is given) and reports conflicts for title (case-insensitive, trimmed), normalized GitHub repo URL (trimmed, trailing slashes removed), deployment URL, and image source URL.
 */
export function useProjectConflicts(projects: Project[]) {
  const checkConflicts = useCallback(
    (data: NewProject, excludeId?: string): ConflictErrors => {
      const others = excludeId
        ? projects.filter((p) => p.id !== excludeId)
        : projects;

      const conflicts: ConflictErrors = {};

      if (
        others.some(
          (p) =>
            p.title.trim().toLowerCase() === data.title.trim().toLowerCase(),
        )
      ) {
        conflicts.title = "A project with this title already exists";
      }

      const normalizeRepo = (value: string) => value.trim().replace(/\/+$/, "");

      if (
        others.some(
          (p) => normalizeRepo(p.gh_repo) === normalizeRepo(data.gh_repo),
        )
      ) {
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

      if (data.img_src && others.some((p) => p.img_src === data.img_src)) {
        conflicts.img_src = "This image URL is already used by another project";
      }

      return conflicts;
    },
    [projects],
  );

  return { checkConflicts };
}
