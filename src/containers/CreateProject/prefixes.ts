import { NewProject } from "@/types/Project";

/** Fixed URL prefixes shown as left-side badges inside prefixed inputs. */
export const PREFIX_MAP: Partial<Record<keyof NewProject, string>> = {
  gh_repo: "https://github.com/aayushsiwa/",
  deployment: "https://",
  img_src: "https://raw.githubusercontent.com/aayushsiwa/",
};

/**
 * Extracts the substring after a specified prefix if present.
 *
 * @param fullValue - The string that may start with `prefix`
 * @param prefix - The prefix to remove from `fullValue` if present
 * @returns The portion of `fullValue` after `prefix` if `fullValue` starts with `prefix`, otherwise `fullValue`
 */
export function getSuffix(fullValue: string, prefix: string): string {
  return fullValue.startsWith(prefix)
    ? fullValue.slice(prefix.length)
    : fullValue;
}
