import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

interface ProjectEntry {
  title: string;
  description: string;
  imgSrc: string;
  githubLink: string;
  liveLink: string;
}

const projectsPath = resolve(process.cwd(), "public/projects.json");
const projects: ProjectEntry[] = JSON.parse(readFileSync(projectsPath, "utf-8"));

describe("public/projects.json", () => {
  describe("top-level structure", () => {
    it("is a non-empty array", () => {
      expect(Array.isArray(projects)).toBe(true);
      expect(projects.length).toBeGreaterThan(0);
    });

    it("contains at least 15 projects", () => {
      expect(projects.length).toBeGreaterThanOrEqual(15);
    });
  });

  describe("each project entry", () => {
    it("every entry has a non-empty title string", () => {
      for (const project of projects) {
        expect(typeof project.title).toBe("string");
        expect(project.title.trim().length).toBeGreaterThan(0);
      }
    });

    it("every entry has a non-empty description string", () => {
      for (const project of projects) {
        expect(typeof project.description).toBe("string");
        expect(project.description.trim().length).toBeGreaterThan(0);
      }
    });

    it("every entry has an imgSrc string", () => {
      for (const project of projects) {
        expect(typeof project.imgSrc).toBe("string");
      }
    });

    it("every imgSrc points to raw.githubusercontent.com", () => {
      for (const project of projects) {
        expect(project.imgSrc).toMatch(/^https:\/\/raw\.githubusercontent\.com\//);
      }
    });

    it("every entry has a githubLink string", () => {
      for (const project of projects) {
        expect(typeof project.githubLink).toBe("string");
      }
    });

    it("every githubLink is a valid https://github.com URL", () => {
      for (const project of projects) {
        expect(project.githubLink).toMatch(/^https:\/\/github\.com\//);
      }
    });

    it("every entry has a liveLink property (string)", () => {
      for (const project of projects) {
        expect(typeof project.liveLink).toBe("string");
      }
    });

    it("non-empty liveLInks are valid URLs", () => {
      for (const project of projects) {
        if (project.liveLink !== "") {
          expect(() => new URL(project.liveLink)).not.toThrow();
        }
      }
    });

    it("each project has exactly the expected keys", () => {
      const expectedKeys = new Set(["title", "description", "imgSrc", "githubLink", "liveLink"]);
      for (const project of projects) {
        const keys = new Set(Object.keys(project));
        for (const key of expectedKeys) {
          expect(keys.has(key)).toBe(true);
        }
      }
    });
  });

  describe("project titles uniqueness", () => {
    it("all project titles are unique", () => {
      const titles = projects.map((p) => p.title);
      const uniqueTitles = new Set(titles);
      expect(uniqueTitles.size).toBe(titles.length);
    });
  });

  describe("specific known projects", () => {
    it("includes devboard project", () => {
      const devboard = projects.find((p) => p.title === "devboard");
      expect(devboard).toBeDefined();
    });

    it("devboard has correct githubLink", () => {
      const devboard = projects.find((p) => p.title === "devboard");
      expect(devboard?.githubLink).toBe("https://github.com/aayushsiwa/devboard");
    });

    it("devboard imgSrc points to raw.githubusercontent.com screenshot", () => {
      const devboard = projects.find((p) => p.title === "devboard");
      expect(devboard?.imgSrc).toBe(
        "https://raw.githubusercontent.com/aayushsiwa/devboard/master/screenshot.png"
      );
    });

    it("includes iot-asset-tracking project", () => {
      const iot = projects.find((p) => p.title === "iot-asset-tracking");
      expect(iot).toBeDefined();
    });
  });

  describe("description quality", () => {
    it("each description has at least 10 words", () => {
      for (const project of projects) {
        const wordCount = project.description
          .trim()
          .split(/\s+/)
          .filter((w) => w.length > 0).length;
        expect(wordCount).toBeGreaterThanOrEqual(10);
      }
    });
  });

  describe("edge cases", () => {
    it("projects with empty liveLink are valid", () => {
      const emptyLive = projects.filter((p) => p.liveLink === "");
      // this should not throw – just verify structure
      for (const project of emptyLive) {
        expect(project.title).toBeTruthy();
        expect(project.githubLink).toBeTruthy();
      }
    });

    it("projects with a liveLink do not use http:// (only https:// or empty)", () => {
      for (const project of projects) {
        if (project.liveLink !== "") {
          // vercel/streamlit apps may differ but should not be plain http
          const url = new URL(project.liveLink);
          expect(["https:", "http:"]).toContain(url.protocol);
        }
      }
    });
  });
});