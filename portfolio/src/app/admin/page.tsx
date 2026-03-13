"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useCreateProject } from "@/containers/CreateProject/CreateProject.hooks";
import { CreateProject } from "@/containers/CreateProject/CreateProject";
import Card from "@/components/uiComponents/Card";
import { Project } from "@/types/Project";

export default function AdminPage() {
  const { projects, addProject, updateProject, deleteProject } =
    useCreateProject();

  const [editing, setEditing] = useState<Project | null>(null);
  const router = useRouter();
  const supabase = createClient();

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  return (
    <div className="min-h-screen px-4 pt-24 pb-10 sm:px-8 sm:pt-28 md:px-10 md:pt-32 max-w-7xl mx-auto space-y-10 sm:space-y-16">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
        >
          Logout
        </button>
      </div>

      <CreateProject
        onSubmit={(data) => {
          if (editing) {
            updateProject(editing.id, data);
            setEditing(null);
          } else {
            addProject(data);
          }
        }}
        onCancel={editing ? () => setEditing(null) : undefined}
        initialData={editing ?? undefined}
      />

      <hr className="my-10" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="space-y-3">
            <Card data={project} key={project.id} isAdminView={true} />

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setEditing(project);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => {
                  if (
                    confirm(
                      `Are you sure you want to delete "${project.title}"? This action cannot be undone.`,
                    )
                  ) {
                    deleteProject(project.id);
                  }
                }}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
