"use client";

import { useCallback } from "react";
import { NewProject, Project } from "@/types/Project";

type ConflictErrors = Record<string, string>;

/**
 * Provide a memoized function to detect naming and URL conflicts between a proposed project and existing projects.
 *
 * @param projects - Array of existing projects to compare against
 * @returns An object with `checkConflicts`, a function that accepts `(data: NewProject, excludeId?: string)` and returns a `ConflictErrors` record mapping field names (e.g., `title`, `gh_repo`, `deployment`, `img_src`) to descriptive conflict messages when duplicates are found
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
