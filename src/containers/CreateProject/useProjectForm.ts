"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
  const submittingRef = useRef(false);

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
    if (submittingRef.current) return;
    submittingRef.current = true;
    const result = projectSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        const key = err.path[0];
        if (key) fieldErrors[String(key)] = err.message;
      });
      setErrors(fieldErrors);
      submittingRef.current = false;
      return;
    }

    // Race-condition safety: re-check conflicts right before submit
    const conflicts = checkConflicts(result.data, initialData?.id);
    if (Object.keys(conflicts).length > 0) {
      setErrors(conflicts);
      submittingRef.current = false;
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      await onSubmit(result.data);
      if (!initialData) setForm(EMPTY_PROJECT);
    } finally {
      submittingRef.current = false;
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
