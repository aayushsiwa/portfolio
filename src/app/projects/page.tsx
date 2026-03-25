import { Projects } from "@/containers/Projects/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

/**
 * Renders the Projects page for the /projects route.
 *
 * @returns The React element that mounts the `Projects` container.
 */
export default function ProjectsPage() {
  return <Projects />;
}
