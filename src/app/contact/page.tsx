import { Contact } from "@/containers/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

/**
 * Renders the Contact page.
 *
 * @returns The React element for the Contact page
 */
export default function Home() {
  return <Contact />;
}
