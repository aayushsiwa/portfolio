"use client";

import { useAdminHooks } from "./Admin.hooks";
import { CreateProject } from "@/containers/CreateProject/CreateProject";
import { ProjectCard } from "./AdminProjectCard";

/**
 * Render the admin dashboard page with controls to create, edit, delete, and list projects.
 *
 * Renders a header with a logout button, a create/edit form (pre-filled when editing), an error
 * message when an error exists, a loading indicator while projects load, and a responsive grid of
 * project cards with an empty-state message when there are no projects.
 *
 * @returns The Admin page React element.
 */
export default function AdminPage() {
  const {
    projects,
    loading,
    error,
    editing,
    handleSubmit,
    handleEdit,
    handleDelete,
    handleCancel,
    logout,
  } = useAdminHooks();

  return (
    <div className="min-h-screen px-4 pt-24 pb-10 sm:px-8 sm:pt-28 md:px-10 md:pt-32 max-w-7xl mx-auto space-y-10 sm:space-y-16">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={logout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
        >
          Logout
        </button>
      </div>

      {/* Create / Edit form */}
      <CreateProject
        onSubmit={handleSubmit}
        onCancel={editing ? handleCancel : undefined}
        initialData={editing ?? undefined}
      />

      <hr className="my-10" />

      {/* Error state */}
      {error && (
        <p className="text-red-600 text-sm">Something went wrong: {error}</p>
      )}

      {/* Loading state */}
      {loading && <p className="text-gray-500 text-sm">Loading projects…</p>}

      {/* Project grid */}
      {!loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}

          {projects.length === 0 && (
            <p className="text-gray-400 col-span-full text-center py-10">
              No projects yet. Add one above.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
