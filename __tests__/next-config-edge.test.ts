import { describe, it, expect } from "vitest";
import nextConfig from "../next.config";

describe("next.config.ts - boundary and negative cases", () => {
  describe("remotePatterns - protocol enforcement", () => {
    it("does not contain any http (non-secure) remote patterns", () => {
      const patterns = nextConfig.images?.remotePatterns ?? [];
      for (const pattern of patterns) {
        expect(pattern.protocol).not.toBe("http");
      }
    });
  });

  describe("remotePatterns - hostname format", () => {
    it("all hostnames are non-empty strings", () => {
      const patterns = nextConfig.images?.remotePatterns ?? [];
      for (const pattern of patterns) {
        expect(typeof pattern.hostname).toBe("string");
        expect((pattern.hostname as string).trim().length).toBeGreaterThan(0);
      }
    });

    it("no hostname contains a path separator (slash)", () => {
      const patterns = nextConfig.images?.remotePatterns ?? [];
      for (const pattern of patterns) {
        expect((pattern.hostname as string).includes("/")).toBe(false);
      }
    });
  });

  describe("config object integrity", () => {
    it("exports a non-null object", () => {
      expect(nextConfig).toBeTruthy();
      expect(typeof nextConfig).toBe("object");
    });

    it("does not define turbopack config (uses default)", () => {
      expect((nextConfig as Record<string, unknown>).turbopack).toBeUndefined();
    });
  });
});