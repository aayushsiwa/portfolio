import { describe, it, expect } from "vitest";
import nextConfig from "../../next.config.ts";

describe("next.config.ts", () => {
  describe("reactCompiler", () => {
    it("enables the React compiler", () => {
      expect(nextConfig.reactCompiler).toBe(true);
    });
  });

  describe("compiler", () => {
    it("enables styledComponents support", () => {
      expect(nextConfig.compiler).toBeDefined();
      expect((nextConfig.compiler as Record<string, unknown>).styledComponents).toBe(true);
    });
  });

  describe("images.remotePatterns", () => {
    it("defines remote image patterns", () => {
      expect(nextConfig.images).toBeDefined();
      expect(nextConfig.images?.remotePatterns).toBeDefined();
      expect(Array.isArray(nextConfig.images?.remotePatterns)).toBe(true);
    });

    it("includes exactly 4 remote patterns", () => {
      expect(nextConfig.images?.remotePatterns).toHaveLength(4);
    });

    it("all remote patterns use https protocol", () => {
      const patterns = nextConfig.images?.remotePatterns ?? [];
      for (const pattern of patterns) {
        expect((pattern as Record<string, unknown>).protocol).toBe("https");
      }
    });

    it("allows raw.githubusercontent.com for project images", () => {
      const patterns = nextConfig.images?.remotePatterns ?? [];
      const hostnames = patterns.map((p) => (p as Record<string, unknown>).hostname);
      expect(hostnames).toContain("raw.githubusercontent.com");
    });

    it("allows github.com", () => {
      const patterns = nextConfig.images?.remotePatterns ?? [];
      const hostnames = patterns.map((p) => (p as Record<string, unknown>).hostname);
      expect(hostnames).toContain("github.com");
    });

    it("allows skillicons.dev for skill icons", () => {
      const patterns = nextConfig.images?.remotePatterns ?? [];
      const hostnames = patterns.map((p) => (p as Record<string, unknown>).hostname);
      expect(hostnames).toContain("skillicons.dev");
    });

    it("allows http.dog", () => {
      const patterns = nextConfig.images?.remotePatterns ?? [];
      const hostnames = patterns.map((p) => (p as Record<string, unknown>).hostname);
      expect(hostnames).toContain("http.dog");
    });

    it("does not allow arbitrary hostnames", () => {
      const patterns = nextConfig.images?.remotePatterns ?? [];
      const hostnames = patterns.map((p) => (p as Record<string, unknown>).hostname);
      expect(hostnames).not.toContain("example.com");
      expect(hostnames).not.toContain("untrusted.com");
    });

    it("raw.githubusercontent.com pattern uses https", () => {
      const patterns = nextConfig.images?.remotePatterns ?? [];
      const rawGitHub = patterns.find(
        (p) => (p as Record<string, unknown>).hostname === "raw.githubusercontent.com"
      );
      expect(rawGitHub).toBeDefined();
      expect((rawGitHub as Record<string, unknown>).protocol).toBe("https");
    });
  });
});