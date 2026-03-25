import { Projects } from "@/containers/Projects/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return <Projects />;
}
