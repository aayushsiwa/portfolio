import { Contact } from "@/containers/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Home() {
  return <Contact />;
}
