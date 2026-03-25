"use client";

import { NewProject, Project } from "@/types/Project";
import { useProjects } from "@/lib/useProjects";
import { useProjectForm } from "./useProjectForm";
import { PREFIX_MAP, getSuffix } from "./prefixes";
import Card from "@/components/uiComponents/Card";
import { Input, PrefixInput, Textarea } from "@/components/uiComponents/Input";

interface CreateProjectProps {
  onSubmit: (data: NewProject) => Promise<void> | void;
  onCancel?: () => void;
  initialData?: Project;
}

export function CreateProject({
  onSubmit,
  onCancel,
  initialData,
}: CreateProjectProps) {
  const { projects } = useProjects();

  const {
    form,
    errors,
    loading,
    isFormValid,
    handleChange,
    handleCheckboxChange,
    handleSubmit,
    reset,
  } = useProjectForm({ initialData, projects, onSubmit });

  function inputClass(name: keyof NewProject) {
    return `w-full border p-3 rounded-lg transition ${
      errors[name] ? "border-red-500" : "border-gray-300"
    }`;
  }

  function prefixContainerClass(name: keyof NewProject) {
    return `flex items-stretch w-full border rounded-lg transition overflow-hidden ${
      errors[name] ? "border-red-500" : "border-gray-300"
    }`;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
      {/* FORM */}
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          void handleSubmit();
        }}
      >
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

        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={form.featured}
            onChange={handleCheckboxChange}
          />
          Featured
        </label>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={!isFormValid || loading}
            className="bg-black text-white px-6 py-3 rounded-lg disabled:opacity-50 transition-opacity"
          >
            {loading
              ? "Saving…"
              : initialData
                ? "Update Project"
                : "Add Project"}
          </button>

          {onCancel && initialData && (
            <button
              type="button"
              onClick={() => {
                reset();
                onCancel();
              }}
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* LIVE PREVIEW */}
      <div>
        <h2 className="mb-4 font-semibold text-xl">Live Preview</h2>
        <Card data={{ ...form, id: "", created_at: "" }} />
      </div>
    </div>
  );
}
