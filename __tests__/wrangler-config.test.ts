import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import { resolve } from "path";

const configPath = resolve(__dirname, "../.wrangler/deploy/config.json");
const rawData = readFileSync(configPath, "utf-8");
const config = JSON.parse(rawData);

describe(".wrangler/deploy/config.json", () => {
  it("is valid JSON", () => {
    expect(() => JSON.parse(rawData)).not.toThrow();
  });

  it("has a configPath field", () => {
    expect(config).toHaveProperty("configPath");
  });

  it("configPath is a string", () => {
    expect(typeof config.configPath).toBe("string");
  });

  it("configPath points to the wrangler.json file", () => {
    expect(config.configPath).toContain("wrangler.json");
  });

  it("configPath references the dist/server directory", () => {
    expect(config.configPath).toContain("dist/server");
  });

  it("has an auxiliaryWorkers field", () => {
    expect(config).toHaveProperty("auxiliaryWorkers");
  });

  it("auxiliaryWorkers is an array", () => {
    expect(Array.isArray(config.auxiliaryWorkers)).toBe(true);
  });

  it("auxiliaryWorkers is empty by default", () => {
    expect(config.auxiliaryWorkers).toHaveLength(0);
  });

  it("has no extra unexpected top-level keys", () => {
    const allowedKeys = new Set(["configPath", "auxiliaryWorkers"]);
    for (const key of Object.keys(config)) {
      expect(allowedKeys.has(key)).toBe(true);
    }
  });
});