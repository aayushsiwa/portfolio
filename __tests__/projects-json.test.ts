import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import { resolve } from "path";

const projectsPath = resolve(__dirname, "../public/projects.json");
const rawData = readFileSync(projectsPath, "utf-8");
const projects = JSON.parse(rawData);

interface ProjectEntry {
  title: string;
  description: string;
  imgSrc: string;
  githubLink: string;
  liveLink: string;
}

describe("public/projects.json", () => {
  it("is a valid JSON array", () => {
    expect(Array.isArray(projects)).toBe(true);
  });

  it("contains at least one project", () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  describe("each project entry", () => {
    it("has a non-empty title string", () => {
      for (const project of projects as ProjectEntry[]) {
        expect(typeof project.title).toBe("string");
        expect(project.title.trim().length).toBeGreaterThan(0);
      }
    });

    it("has a non-empty description string", () => {
      for (const project of projects as ProjectEntry[]) {
        expect(typeof project.description).toBe("string");
        expect(project.description.trim().length).toBeGreaterThan(0);
      }
    });

    it("has an imgSrc string", () => {
      for (const project of projects as ProjectEntry[]) {
        expect(typeof project.imgSrc).toBe("string");
      }
    });

    it("has a githubLink that starts with https://github.com/", () => {
      for (const project of projects as ProjectEntry[]) {
        expect(typeof project.githubLink).toBe("string");
        expect(project.githubLink.startsWith("https://github.com/")).toBe(true);
      }
    });

    it("has a liveLink string (can be empty)", () => {
      for (const project of projects as ProjectEntry[]) {
        expect(typeof project.liveLink).toBe("string");
      }
    });

    it("has no extra unexpected top-level keys", () => {
      const allowedKeys = new Set([
        "title",
        "description",
        "imgSrc",
        "githubLink",
        "liveLink",
      ]);
      for (const project of projects as Record<string, unknown>[]) {
        for (const key of Object.keys(project)) {
          expect(allowedKeys.has(key)).toBe(
            true,
            `Unexpected key "${key}" in project "${(project as ProjectEntry).title}"`
          );
        }
      }
    });
  });

  describe("imgSrc URLs", () => {
    it("non-empty imgSrc values point to raw.githubusercontent.com", () => {
      for (const project of projects as ProjectEntry[]) {
        if (project.imgSrc) {
          expect(project.imgSrc.startsWith("https://raw.githubusercontent.com/")).toBe(true);
        }
      }
    });
  });

  describe("liveLink URLs", () => {
    it("non-empty liveLink values start with https://", () => {
      for (const project of projects as ProjectEntry[]) {
        if (project.liveLink) {
          expect(project.liveLink.startsWith("https://")).toBe(true);
        }
      }
    });
  });

  describe("title uniqueness", () => {
    it("has unique titles across all projects", () => {
      const titles = (projects as ProjectEntry[]).map((p) => p.title);
      const uniqueTitles = new Set(titles);
      expect(uniqueTitles.size).toBe(titles.length);
    });
  });

  describe("githubLink uniqueness", () => {
    it("has unique github links across all projects", () => {
      const links = (projects as ProjectEntry[]).map((p) => p.githubLink);
      const uniqueLinks = new Set(links);
      expect(uniqueLinks.size).toBe(links.length);
    });
  });

  describe("specific projects", () => {
    it("contains a project named 'devboard'", () => {
      const devboard = (projects as ProjectEntry[]).find(
        (p) => p.title === "devboard"
      );
      expect(devboard).toBeDefined();
    });

    it("devboard project has correct github link", () => {
      const devboard = (projects as ProjectEntry[]).find(
        (p) => p.title === "devboard"
      );
      expect(devboard?.githubLink).toBe("https://github.com/aayushsiwa/devboard");
    });

    it("devboard project has a live link", () => {
      const devboard = (projects as ProjectEntry[]).find(
        (p) => p.title === "devboard"
      );
      expect(devboard?.liveLink).toBeTruthy();
    });
  });

  describe("edge cases", () => {
    it("raven-v2 project has an empty liveLink (allowed)", () => {
      const raven = (projects as ProjectEntry[]).find(
        (p) => p.title === "raven-v2"
      );
      expect(raven).toBeDefined();
      expect(raven?.liveLink).toBe("");
    });
  });
});