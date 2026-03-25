import { Metadata } from "next";
import { Login } from "@/containers/Admin/Login/Login";

export const metadata: Metadata = {
  title: "Admin Login",
};

/**
 * Renders the Admin Login page.
 *
 * @returns The login page React element
 */
export default function LoginPage() {
  return <Login />;
}
