import { describe, it, expect } from "vitest";
import nextConfig from "../next.config";

describe("next.config.ts", () => {
  describe("reactCompiler", () => {
    it("enables the React compiler", () => {
      expect(nextConfig.reactCompiler).toBe(true);
    });
  });

  describe("compiler options", () => {
    it("enables styledComponents", () => {
      expect(nextConfig.compiler).toBeDefined();
      expect(nextConfig.compiler?.styledComponents).toBe(true);
    });
  });

  describe("images configuration", () => {
    it("defines remotePatterns", () => {
      expect(nextConfig.images).toBeDefined();
      expect(Array.isArray(nextConfig.images?.remotePatterns)).toBe(true);
    });

    it("includes exactly 4 remote patterns", () => {
      expect(nextConfig.images?.remotePatterns).toHaveLength(4);
    });

    it("all remote patterns use https protocol", () => {
      const patterns = nextConfig.images?.remotePatterns ?? [];
      for (const pattern of patterns) {
        expect(pattern.protocol).toBe("https");
      }
    });

    it("allows raw.githubusercontent.com", () => {
      const patterns = nextConfig.images?.remotePatterns ?? [];
      const found = patterns.some(
        (p) => p.hostname === "raw.githubusercontent.com"
      );
      expect(found).toBe(true);
    });

    it("allows github.com", () => {
      const patterns = nextConfig.images?.remotePatterns ?? [];
      const found = patterns.some((p) => p.hostname === "github.com");
      expect(found).toBe(true);
    });

    it("allows skillicons.dev", () => {
      const patterns = nextConfig.images?.remotePatterns ?? [];
      const found = patterns.some((p) => p.hostname === "skillicons.dev");
      expect(found).toBe(true);
    });

    it("allows http.dog", () => {
      const patterns = nextConfig.images?.remotePatterns ?? [];
      const found = patterns.some((p) => p.hostname === "http.dog");
      expect(found).toBe(true);
    });

    it("does not allow unexpected hostnames", () => {
      const patterns = nextConfig.images?.remotePatterns ?? [];
      const allowedHostnames = new Set([
        "raw.githubusercontent.com",
        "http.dog",
        "github.com",
        "skillicons.dev",
      ]);
      for (const pattern of patterns) {
        expect(allowedHostnames.has(pattern.hostname as string)).toBe(true);
      }
    });
  });
});