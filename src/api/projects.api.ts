import type { SupabaseClient } from "@supabase/supabase-js";
import { NewProject, Project, UpdateProject } from "@/types/Project";

// Supabase client is injected by callers (server or browser),
/**
 * Fetches all rows from the `projects` table ordered by `featured` descending then `created_at` descending.
 *
 * @returns An array of `Project` records; returns an empty array if no rows are found.
 * @throws Error if the Supabase query returns an error.
 */

export async function fetchAllProjects(
  supabase: SupabaseClient,
): Promise<Project[]> {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("featured", { ascending: false })
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);

  return data ?? [];
}

/**
 * Inserts a new record into the `projects` table and returns the created project.
 *
 * @param project - The new project data to insert
 * @returns The inserted `Project` record
 * @throws Error when the Supabase client returns an error
 */
export async function createProject(
  supabase: SupabaseClient,
  project: NewProject,
): Promise<Project> {
  const { data, error } = await supabase
    .from("projects")
    .insert(project)
    .select()
    .single();

  if (error) throw new Error(error.message);

  return data;
}

/**
 * Update a project's fields by its ID.
 *
 * If `updates` is an empty object a console warning is emitted. Supabase errors are logged with `console.warn` and not thrown.
 *
 * @param id - The project's `id` to update
 * @param updates - Partial project properties to apply
 * @returns The updated project record, or `undefined` if no row was returned
 */
export async function updateProject(
  supabase: SupabaseClient,
  id: string,
  updates: UpdateProject,
): Promise<Project> {
  if (Object.keys(updates).length === 0) {
    console.warn("No updates provided");
  }

  const { data, error } = await supabase
    .from("projects")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) console.warn(error.message);

  return data;
}

/**
 * Deletes the project row with the given id from the `projects` table.
 *
 * @param id - The `id` of the project to delete
 * @throws Error - If the Supabase delete operation returns an error, throws with the error message
 */
export async function deleteProject(
  supabase: SupabaseClient,
  id: string,
): Promise<void> {
  const { error } = await supabase.from("projects").delete().eq("id", id);

  if (error) throw new Error(error.message);
}
