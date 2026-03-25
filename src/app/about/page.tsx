import { About } from "@/containers/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

/**
 * Renders the About page.
 *
 * @returns A JSX element containing the `About` container
 */
export default function Home() {
  return <About />;
}
