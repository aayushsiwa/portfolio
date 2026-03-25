import { About } from "@/containers/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function Home() {
  return <About />;
}
