import { Home } from "@/containers/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aayush Siwach | Full Stack Developer",
};

/**
 * Root Next.js page component that renders the Home container.
 *
 * @returns A JSX element representing the Home page
 */
export default function HomePage() {
  return <Home />;
}
