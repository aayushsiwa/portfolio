import { AdminPage } from "@/containers/Admin/Admin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Panel",
};

/**
 * Page component that renders the admin panel.
 *
 * @returns The React element for the admin panel page.
 */
export default function HomePage() {
  return <AdminPage />;
}
