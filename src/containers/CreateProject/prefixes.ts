import { NewProject } from "@/types/Project";

/** Fixed URL prefixes shown as left-side badges inside prefixed inputs. */
export const PREFIX_MAP: Partial<Record<keyof NewProject, string>> = {
  gh_repo: "https://github.com/aayushsiwa/",
  deployment: "https://",
  img_src: "https://raw.githubusercontent.com/aayushsiwa/",
};

/**
 * Extracts the substring of `fullValue` that follows `prefix`, or returns `fullValue` unchanged when the prefix is not present.
 *
 * @param fullValue - The input string that may begin with `prefix`
 * @param prefix - The prefix to remove if present
 * @returns The substring after `prefix` when `fullValue` starts with `prefix`, otherwise `fullValue`
 */
export function getSuffix(fullValue: string, prefix: string): string {
  return fullValue.startsWith(prefix)
    ? fullValue.slice(prefix.length)
    : fullValue;
}
