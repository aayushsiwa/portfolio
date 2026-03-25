import { Home } from "@/containers/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aayush Siwach | Full Stack Developer",
};

/**
 * Render the application's root page using the Home container.
 *
 * @returns A React element that renders the `Home` container
 */
export default function HomePage() {
  return <Home />;
}
