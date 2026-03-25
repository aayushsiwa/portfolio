import { Projects } from "@/containers/Projects/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

/**
 * Render the Projects page.
 *
 * @returns The JSX element representing the Projects page
 */
export default function ProjectsPage() {
  return <Projects />;
}
