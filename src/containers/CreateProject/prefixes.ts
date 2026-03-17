import { NewProject } from "@/types/Project";

/** Fixed URL prefixes shown as left-side badges inside prefixed inputs. */
export const PREFIX_MAP: Partial<Record<keyof NewProject, string>> = {
  gh_repo: "https://github.com/aayushsiwa/",
  deployment: "https://",
  img_src: "https://raw.githubusercontent.com/aayushsiwa/",
};

/**
 * Returns the suffix of `fullValue` after stripping `prefix`.
 * Falls back to the full value when the prefix isn't present
 * (handles legacy data stored without the expected prefix).
 */
export function getSuffix(fullValue: string, prefix: string): string {
  return fullValue.startsWith(prefix)
    ? fullValue.slice(prefix.length)
    : fullValue;
}
