"use client";

import { useCallback } from "react";
import { NewProject, Project } from "@/types/Project";

type ConflictErrors = Record<string, string>;

/**
 * Provides a utility to detect field conflicts between a candidate project and existing projects.
 *
 * @param projects - The list of existing projects to check against.
 * @returns An object containing `checkConflicts(data, excludeId?)`, a function that returns a `ConflictErrors` map of field names to error messages. `checkConflicts` detects conflicts for `title` (case-insensitive, trimmed), `gh_repo`, `deployment` (when provided), and `img_src` (when provided); it optionally excludes a project by id from comparisons.
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

      if (data.img_src && others.some((p) => p.img_src === data.img_src)) {
        conflicts.img_src = "This image URL is already used by another project";
      }

      return conflicts;
    },
    [projects],
  );

  return { checkConflicts };
}
