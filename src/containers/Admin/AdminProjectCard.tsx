import { Project } from "@/types/Project";
import Card from "@/components/uiComponents/Card";

interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
  onDelete: (project: Project) => void;
}

/**
 * Render an admin-facing project card that displays project details and exposes Edit and Delete actions.
 *
 * @param project - The project data to display inside the card.
 * @param onEdit - Callback invoked with the `project` when the Edit button is clicked.
 * @param onDelete - Callback invoked with the `project` after the user confirms deletion.
 * @returns The rendered project card element with action buttons.
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
