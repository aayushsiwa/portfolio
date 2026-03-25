import { Metadata } from "next";
import { Login } from "@/containers/Admin/Login/Login";

export const metadata: Metadata = {
  title: "Admin Login",
};

export default function LoginPage() {
  return <Login />;
}
