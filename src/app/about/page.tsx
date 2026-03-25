import { About } from "@/containers/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

/**
 * Render the About page component.
 *
 * @returns A React element that renders the `About` container
 */
export default function Home() {
  return <About />;
}
