import Card from "@/components/uiComponents/Card";
import { createClient } from "@/lib/supabase/client";

export default async function Projects() {
  const supabase = createClient();

  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false })
    .order("featured", { ascending: false });

  if (error) {
    console.error("Error fetching projects:", error);
  }

  return (
    <section
      id="projects"
      className="bg-light-bg dark:bg-dark-bg py-40 px- md:px-0 lg:px-0 gap-0 font-[Poppins]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 max-w-6xl mx-auto">
        {projects?.map((project, index) => (
          <Card key={index} data={project} />
        ))}
      </div>
    </section>
  );
}
