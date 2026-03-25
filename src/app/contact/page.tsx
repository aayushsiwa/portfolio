import { Contact } from "@/containers/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

/**
 * Page component for the Contact route.
 *
 * @returns A React element representing the Contact page.
 */
export default function Home() {
  return <Contact />;
}
