import { describe, it, expect } from "vitest";
import config from "../../postcss.config.mjs";

describe("postcss.config.mjs", () => {
  it("exports a config object", () => {
    expect(config).toBeDefined();
    expect(typeof config).toBe("object");
    expect(config).not.toBeNull();
  });

  it("has a plugins property", () => {
    expect(config).toHaveProperty("plugins");
  });

  it("plugins is an object", () => {
    expect(typeof (config as Record<string, unknown>).plugins).toBe("object");
    expect((config as Record<string, unknown>).plugins).not.toBeNull();
  });

  it("includes @tailwindcss/postcss plugin", () => {
    const plugins = (config as Record<string, unknown>).plugins as Record<string, unknown>;
    expect(plugins).toHaveProperty("@tailwindcss/postcss");
  });

  it("@tailwindcss/postcss plugin is configured as an empty object (default options)", () => {
    const plugins = (config as Record<string, unknown>).plugins as Record<string, unknown>;
    expect(plugins["@tailwindcss/postcss"]).toEqual({});
  });

  it("only contains the plugins property at the top level", () => {
    const keys = Object.keys(config as object);
    expect(keys).toEqual(["plugins"]);
  });

  it("does not include legacy autoprefixer plugin", () => {
    const plugins = (config as Record<string, unknown>).plugins as Record<string, unknown>;
    expect(plugins).not.toHaveProperty("autoprefixer");
  });
});