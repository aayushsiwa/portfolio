export type Project = {
  id: string;
  created_at: string;
  title: string;
  description: string;
  gh_repo: string;
  deployment?: string;
  featured: boolean;
  img_src?: string;
  // tags?: string[];
  // category?: string;
};

export type NewProject = Omit<Project, "id" | "created_at">;

export type UpdateProject = Partial<NewProject>;
