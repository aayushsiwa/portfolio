"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { NewProject, Project } from "@/types/Project";
import { projectSchema } from "./validations/project.schema";
import { useProjectConflicts } from "./useProjectConflicts";
import { PREFIX_MAP } from "./prefixes";

export const EMPTY_PROJECT: NewProject = {
  title: "",
  description: "",
  gh_repo: "",
  deployment: "",
  img_src: "",
  featured: false,
};

/**
 * Convert a Project (or undefined) into a NewProject shape suitable for the form.
 *
 * @param data - The source Project to map; if omitted, the empty form template is used.
 * @returns A NewProject where each field is copied from `data` when present, otherwise:
 * - `title`, `description`, `gh_repo`, `deployment`, `img_src` default to `""`
 * - `featured` defaults to `false`
 */
function mapProjectToForm(data?: Project): NewProject {
  if (!data) return EMPTY_PROJECT;
  return {
    title: data.title ?? "",
    description: data.description ?? "",
    gh_repo: data.gh_repo ?? "",
    deployment: data.deployment ?? "",
    img_src: data.img_src ?? "",
    featured: data.featured ?? false,
  };
}

const CONFLICT_FIELDS = new Set<keyof NewProject>([
  "title",
  "gh_repo",
  "deployment",
  "img_src",
]);

interface UseProjectFormOptions {
  initialData?: Project;
  projects: Project[];
  onSubmit: (data: NewProject) => Promise<void> | void;
}

/**
 * Manages project form state, validation, conflict checking, and submit/reset handlers for creating or editing a project.
 *
 * @param initialData - Optional existing project used to populate the form for editing; if omitted the form is initialized as empty for creation.
 * @param projects - The list of existing projects used to detect field conflicts (title, gh_repo, deployment, img_src).
 * @param onSubmit - Callback invoked with validated form data when the form is submitted.
 *
 * @returns An object with the following properties:
 * - `form` — The current `NewProject` form values.
 * - `errors` — A record of field error messages keyed by field name.
 * - `loading` — `true` when a submit is in progress, `false` otherwise.
 * - `isFormValid` — `true` when required fields are populated and there are no validation or conflict errors, `false` otherwise.
 * - `handleChange` — Input change handler for text and textarea fields that updates the form, runs field-level validation, and checks conflicts for relevant fields.
 * - `handleCheckboxChange` — Checkbox change handler that updates boolean flags on the form (e.g., `featured`).
 * - `handleSubmit` — Validates the entire form, re-checks conflicts, invokes `onSubmit` with the form when valid, and resets the form after successful creation.
 * - `reset` — Resets the form and clears errors, reinitializing from `initialData`.
 */
export function useProjectForm({
  initialData,
  projects,
  onSubmit,
}: UseProjectFormOptions) {
  const [form, setForm] = useState<NewProject>(() =>
    mapProjectToForm(initialData),
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const { checkConflicts } = useProjectConflicts(projects);

  useEffect(() => {
    setForm(mapProjectToForm(initialData));
    setErrors({});
  }, [initialData]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      const fieldName = name as keyof NewProject;
      const prefix = PREFIX_MAP[fieldName];
      const fullValue = prefix && value.trim() !== "" ? prefix + value : value;

      const updatedForm = { ...form, [fieldName]: fullValue };
      setForm(updatedForm);

      // Field-level schema validation
      const fieldResult = projectSchema.shape[fieldName].safeParse(fullValue);

      if (!fieldResult.success) {
        setErrors((prev) => ({
          ...prev,
          [fieldName]: fieldResult.error.issues[0].message,
        }));
        return;
      }

      // Conflict check only for relevant fields with a value
      if (CONFLICT_FIELDS.has(fieldName) && fullValue.trim() !== "") {
        const allConflicts = checkConflicts(updatedForm, initialData?.id);
        setErrors((prev) => {
          const next = { ...prev };
          delete next[fieldName];
          if (allConflicts[fieldName])
            next[fieldName] = allConflicts[fieldName];
          return next;
        });
      } else {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[fieldName];
          return next;
        });
      }
    },
    [form, checkConflicts, initialData?.id],
  );

  const handleCheckboxChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, featured: e.target.checked }));
    },
    [],
  );

  const handleSubmit = useCallback(async () => {
    const result = projectSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        const key = err.path[0];
        if (key) fieldErrors[String(key)] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    // Race-condition safety: re-check conflicts right before submit
    const conflicts = checkConflicts(form, initialData?.id);
    if (Object.keys(conflicts).length > 0) {
      setErrors(conflicts);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      await onSubmit(form);
      if (!initialData) setForm(EMPTY_PROJECT);
    } finally {
      setLoading(false);
    }
  }, [form, checkConflicts, initialData, onSubmit]);

  const reset = useCallback(() => {
    setForm(mapProjectToForm(initialData));
    setErrors({});
  }, [initialData]);

  const isFormValid = useMemo(() => {
    if (Object.keys(errors).length > 0) return false;
    const { title, description, gh_repo } = form;
    return (
      title.trim() !== "" && description.trim() !== "" && gh_repo.trim() !== ""
    );
  }, [form, errors]);

  return {
    form,
    errors,
    loading,
    isFormValid,
    handleChange,
    handleCheckboxChange,
    handleSubmit,
    reset,
  };
}
