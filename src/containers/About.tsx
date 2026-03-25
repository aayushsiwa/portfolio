"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const languages = [
  "js",
  "ts",
  "python",
  "java",
  "c",
  "cpp",
  "r",
  "html",
  "css",
  "go",
];

const frontend = ["react", "nextjs", "vite", "svelte", "tailwind", "bootstrap"];

const backend = [
  "nodejs",
  "express",
  "django",
  "flask",
  "fastapi",
  "supabase",
  "firebase",
];

const databases = ["mongodb", "postgres", "mysql", "sqlite", "redis"];

const devops = [
  "aws",
  "azure",
  "docker",
  "kubernetes",
  "terraform",
  "githubactions",
];

const tools = [
  "git",
  "github",
  "vscode",
  "bash",
  "figma",
  "grafana",
  // "loki",
  "prometheus",
  "vitest",
];

function SkillRow({ label, skills }: { label: string; skills: string[] }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a small placeholder
  }

  return (
    <div className="flex flex-col md:flex-row md:items-center mx-auto py-3 md:py-0 border-b border-gray-200 dark:border-gray-700 md:border-b-0 last:border-b-0">
      <p className="text-base md:text-3xl font-semibold font-[Mulish] text-dark-s dark:text-light-s md:pe-4 md:border-r-2 md:border-light-a md:dark:border-dark-a shrink-0 mb-1 md:mb-0 w-full md:w-1/3">
        {label}
      </p>
      <ul className="list-none flex flex-wrap items-start md:ps-2">
        {skills.map((skill) => (
          <li key={skill}>
            <Image
              height={64}
              width={64}
              className="transition-all ease-in duration-300 hover:scale-100 scale-[0.6] md:scale-75 hover:-translate-y-2"
              src={`https://skillicons.dev/icons?i=${skill}&theme=${resolvedTheme}`}
              alt={`${skill}-icon`}
              loading="lazy"
              unoptimized
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export const About = () => {
  return (
    <section
      className="bg-light-bg2 dark:bg-dark-bg2 flex flex-col pt-32 min-h-fit md:min-h-screen"
      id="about"
    >
      <div className="mx-auto pb-10 w-[90vw]">
        <div className="flex flex-col md:flex-row gap-8 pt-8 md:pt-16">
          {/* Bio */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl text-light-a dark:text-dark-a font-bold mb-4">
              About
            </h3>
            <p className="text-lg md:text-2xl font-[Mulish] text-light-p dark:text-dark-txt font-medium leading-8 md:leading-9">
              Senior at{" "}
              <a
                href="https://kiit.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold"
              >
                KIIT
              </a>{" "}
              with a passion for development and a strong foundation in modern
              frameworks. Eager to bring my technical expertise, innovative
              mindset, and adaptability to a dynamic software engineering role
              in a cutting-edge tech environment.
            </p>
          </div>

          {/* Skills */}
          <div className="w-full md:w-1/2">
            <SkillRow label="Languages" skills={languages} />
            <SkillRow label="Frontend" skills={frontend} />
            <SkillRow label="Backend" skills={backend} />
            <SkillRow label="Databases" skills={databases} />
            <SkillRow label="DevOps" skills={devops} />
            <SkillRow label="Tools" skills={tools} />
          </div>
        </div>
      </div>
    </section>
  );
};
