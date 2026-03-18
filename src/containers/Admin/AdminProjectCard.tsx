import { Project } from "@/types/Project";
import Card from "@/components/uiComponents/Card";

interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
  onDelete: (project: Project) => void;
}

/**
 * Renders a project card with Edit and Delete action buttons for admin use.
 *
 * @param project - The project to display.
 * @param onEdit - Callback invoked with the project when the Edit button is clicked.
 * @param onDelete - Callback invoked with the project after the user confirms deletion.
 * @returns A React element containing the project's card and Edit/Delete controls.
 */
export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {
  function handleDelete() {
    if (
      confirm(
        `Are you sure you want to delete "${project.title}"? This action cannot be undone.`,
      )
    ) {
      onDelete(project);
    }
  }

  return (
    <div className="space-y-3">
      <Card data={project} isAdminView />
      <div className="flex gap-3">
        <button
          onClick={() => onEdit(project)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
