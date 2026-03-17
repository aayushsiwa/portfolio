import { createClient } from "@/lib/supabase/client";
import { NewProject, Project, UpdateProject } from "@/types/Project";

const getClient = () => createClient();

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

export async function deleteProject(id: string): Promise<void> {
  const supabase = getClient();

  const { error } = await supabase.from("projects").delete().eq("id", id);

  if (error) throw new Error(error.message);
}
