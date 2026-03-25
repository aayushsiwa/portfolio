import { AdminPage } from "@/containers/Admin/Admin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Panel",
};

/**
 * Renders the admin panel page by returning the AdminPage container.
 *
 * @returns The React element for the admin panel page.
 */
export default function HomePage() {
  return <AdminPage />;
}
