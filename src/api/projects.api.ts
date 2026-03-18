import { createClient } from "@/lib/supabase/client";
import { NewProject, Project, UpdateProject } from "@/types/Project";

const getClient = () => createClient();

/**
 * Retrieve all projects ordered by creation date (newest first) and then by featured flag.
 *
 * @returns An array of Project objects; an empty array if no projects are found.
 */
export async function fetchAllProjects(): Promise<Project[]> {
  const supabase = getClient();

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false })
    .order("featured", { ascending: false });

  if (error) throw new Error(error.message);

  return data ?? [];
}

/**
 * Insert a new project into the "projects" table and return the created record.
 *
 * @param project - The new project to insert
 * @returns The inserted `Project` object
 * @throws Error - If the database insertion fails, with the underlying error message
 */
export async function createProject(project: NewProject): Promise<Project> {
  const supabase = getClient();

  const { data, error } = await supabase
    .from("projects")
    .insert(project)
    .select()
    .single();

  if (error) throw new Error(error.message);

  return data;
}

/**
 * Update a project identified by its ID with the provided fields.
 *
 * @param id - The ID of the project to update
 * @param updates - Fields to update on the project
 * @returns The updated `Project` object
 * @throws Error if the database update fails
 */
export async function updateProject(
  id: string,
  updates: UpdateProject,
): Promise<Project> {
  const supabase = getClient();

  const { data, error } = await supabase
    .from("projects")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(error.message);

  return data;
}

/**
 * Delete the project with the specified id.
 *
 * Deletes the row from the "projects" table that matches `id`.
 *
 * @param id - The project id to delete
 * @throws Error if the database deletion fails (error message reflects the failure)
 */
export async function deleteProject(id: string): Promise<void> {
  const supabase = getClient();

  const { error } = await supabase.from("projects").delete().eq("id", id);

  if (error) throw new Error(error.message);
}
