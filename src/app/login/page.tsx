import { Metadata } from "next";
import { Login } from "@/containers/Admin/Login/Login";

export const metadata: Metadata = {
  title: "Admin Login",
};

/**
 * Render the admin login page.
 *
 * Renders the `Login` container as the page's content.
 *
 * @returns The JSX element representing the admin login page.
 */
export default function LoginPage() {
  return <Login />;
}
