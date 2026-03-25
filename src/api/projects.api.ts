import type { SupabaseClient } from "@supabase/supabase-js";
import { NewProject, Project, UpdateProject } from "@/types/Project";

// Supabase client is injected by callers (server or browser),
/**
 * Fetches all rows from the `projects` table, ordered by `featured` (descending) then `created_at` (descending).
 *
 * @returns An array of `Project` records; returns an empty array when no rows are found.
 * @throws Error when the Supabase query returns an error (message forwarded from Supabase).
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
 * Inserts a new project record into the Supabase `projects` table and returns the inserted row.
 *
 * @param project - The new project fields to insert
 * @returns The inserted `Project` on success, `void` if the insertion failed
 */
export async function createProject(
  supabase: SupabaseClient,
  project: NewProject,
): Promise<Project | void> {
  const { data, error } = await supabase
    .from("projects")
    .insert(project)
    .select()
    .single();

  if (error) return;

  return data;
}

/**
 * Apply partial updates to a project identified by `id`.
 *
 * If `updates` is an empty object, the function logs a warning and returns without performing any database operation.
 *
 * @param id - The project's unique identifier
 * @param updates - Fields to update on the project; only provided keys will be changed
 * @returns The updated `Project` on success, `void` if no update was performed or an error occurred
 */
export async function updateProject(
  supabase: SupabaseClient,
  id: string,
  updates: UpdateProject,
): Promise<Project | void> {
  if (Object.keys(updates).length === 0) {
    console.warn("No updates provided");
    return;
  }

  const { data, error } = await supabase
    .from("projects")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) return;

  return data;
}

/**
 * Delete the project row with the specified id from the `projects` table.
 *
 * If the Supabase request returns an error, the function returns without throwing.
 *
 * @param id - The `id` of the project to delete
 */
export async function deleteProject(
  supabase: SupabaseClient,
  id: string,
): Promise<void> {
  const { error } = await supabase.from("projects").delete().eq("id", id);

  if (error) return;
}
