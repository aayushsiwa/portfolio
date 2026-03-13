"use client";

import { useEffect, useMemo, useState } from "react";
import { NewProject, Project } from "@/types/Project";
import Card from "@/components/uiComponents/Card";
import { useCreateProject } from "./CreateProject.hooks";
import { Input, PrefixInput, Textarea } from "@/components/uiComponents/Input";

type Props = {
  onSubmit: (data: NewProject) => Promise<void> | void;
  onCancel?: () => void;
  initialData?: Project;
};

const EMPTY_PROJECT: NewProject = {
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

/** Fixed URL prefixes shown as left-side badges inside the input. */
const PREFIX_MAP: Partial<Record<keyof NewProject, string>> = {
  gh_repo: "https://github.com/aayushsiwa/",
  deployment: "https://",
  img_src: "https://raw.githubusercontent.com/aayushsiwa/",
};

/**
 * Returns the part of `fullValue` that comes after `prefix`.
 * Falls back to `fullValue` as-is when it doesn't start with the prefix
 * (handles legacy data stored without the expected prefix).
 */
function getSuffix(fullValue: string, prefix: string): string {
  return fullValue.startsWith(prefix)
    ? fullValue.slice(prefix.length)
    : fullValue;
}

export function CreateProject({ onSubmit, onCancel, initialData }: Props) {
  const [form, setForm] = useState<NewProject>(() =>
    mapProjectToForm(initialData),
  );
  const { projectSchema, checkConflicts } = useCreateProject();

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setForm(mapProjectToForm(initialData));
  }, [initialData]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    const fieldName = name as keyof NewProject;

    // Prepend fixed prefix for URL fields; keep raw value for everything else.
    // We construct updatedForm synchronously so checkConflicts sees the new value
    // before React has flushed the setForm call.
    const prefix = PREFIX_MAP[fieldName];
    const fullValue = prefix ? prefix + value : value;

    const updatedForm = { ...form, [fieldName]: fullValue };
    setForm(updatedForm);

    // 1. Schema validation on the full stored value
    const schemaResult = projectSchema.shape[fieldName].safeParse(fullValue);

    if (!schemaResult.success) {
      setErrors((prev) => ({
        ...prev,
        [fieldName]: schemaResult.error.issues[0].message,
      }));
      return;
    }

    // 2. Schema passed — run conflict check for conflict-trackable fields
    if (CONFLICT_FIELDS.has(fieldName)) {
      const allConflicts = checkConflicts(updatedForm, initialData?.id);
      setErrors((prev) => {
        const next = { ...prev };
        delete next[fieldName];
        if (allConflicts[fieldName]) {
          next[fieldName] = allConflicts[fieldName];
        }
        return next;
      });
    } else {
      // Not a conflict-checkable field — just clear any stale error
      setErrors((prev) => {
        const next = { ...prev };
        delete next[fieldName];
        return next;
      });
    }
  }

  function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, featured: e.target.checked }));
  }

  async function handleSubmit() {
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

    // Final safety-net conflict check (covers race conditions between last
    // keystroke and submit, e.g. another tab added a project in between)
    const conflicts = checkConflicts(form, initialData?.id);

    if (Object.keys(conflicts).length > 0) {
      setErrors(conflicts);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      await onSubmit(form);

      if (!initialData) {
        setForm(EMPTY_PROJECT);
      }
    } finally {
      setLoading(false);
    }
  }

  const isFormValid = useMemo(() => {
    if (Object.keys(errors).length > 0) return false;

    return Object.entries(form).every(([_key, value]) =>
      typeof value === "boolean" ? true : value.trim() !== "",
    );
  }, [form, errors]);

  /** Border-only wrapper class used by PrefixInput (no padding — inner elements handle it). */
  function prefixContainerClass(name: keyof NewProject) {
    return `flex items-stretch w-full border rounded-lg transition overflow-hidden ${
      errors[name] ? "border-red-500" : "border-gray-300"
    }`;
  }

  /** Full input class used by regular Input / Textarea (border + padding). */
  function inputClass(name: keyof NewProject) {
    return `w-full border p-3 rounded-lg transition ${
      errors[name] ? "border-red-500" : "border-gray-300"
    }`;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-10 w-full">
      {/* FORM */}
      <div className="space-y-4">
        <Input
          name="title"
          placeholder="Title"
          value={form.title}
          error={errors.title}
          onChange={handleChange}
          className={inputClass("title")}
        />

        <Textarea
          name="description"
          placeholder="Description"
          value={form.description}
          error={errors.description}
          onChange={handleChange}
          className={inputClass("description")}
        />

        <PrefixInput
          name="gh_repo"
          prefix={PREFIX_MAP.gh_repo ?? ""}
          placeholder="repo-name"
          value={getSuffix(form.gh_repo, PREFIX_MAP.gh_repo ?? "")}
          error={errors.gh_repo}
          onChange={handleChange}
          containerClass={prefixContainerClass("gh_repo")}
        />

        <PrefixInput
          name="deployment"
          prefix={PREFIX_MAP.deployment ?? ""}
          placeholder="myapp.vercel.app"
          value={getSuffix(form.deployment ?? "", PREFIX_MAP.deployment ?? "")}
          error={errors.deployment}
          onChange={handleChange}
          containerClass={prefixContainerClass("deployment")}
        />

        <PrefixInput
          name="img_src"
          prefix={PREFIX_MAP.img_src ?? ""}
          placeholder="repo/branch/image.png"
          value={getSuffix(form.img_src ?? "", PREFIX_MAP.img_src ?? "")}
          error={errors.img_src}
          onChange={handleChange}
          containerClass={prefixContainerClass("img_src")}
        />

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={form.featured}
            onChange={handleCheckboxChange}
          />
          Featured
        </label>

        <div className="flex gap-3">
          <button
            onClick={handleSubmit}
            disabled={!isFormValid || loading}
            className="bg-black text-white px-6 py-3 rounded-lg disabled:opacity-50"
          >
            {loading
              ? "Saving..."
              : initialData
                ? "Update Project"
                : "Add Project"}
          </button>

          {onCancel && initialData && (
            <button
              type="button"
              onClick={() => {
                onCancel();
                setErrors({});
              }}
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* LIVE PREVIEW */}
      <div>
        <h2 className="mb-4 font-semibold text-xl">Live Preview</h2>
        <Card
          data={{
            ...form,
            id: "",
            created_at: "",
          }}
        />
      </div>
    </div>
  );
}
