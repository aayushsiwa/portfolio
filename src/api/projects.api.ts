import type { SupabaseClient } from "@supabase/supabase-js";
import { NewProject, Project, UpdateProject } from "@/types/Project";

// Supabase client is injected by callers (server or browser),
// so this module does not create its own client instance.

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

export async function deleteProject(
  supabase: SupabaseClient,
  id: string,
): Promise<void> {
  const { error } = await supabase.from("projects").delete().eq("id", id);

  if (error) return;
}
