import { AdminPage } from "@/containers/Admin/Admin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Panel",
};

export default function HomePage() {
  return <AdminPage />;
}
