import { NewProject } from "@/types/Project";

/** Fixed URL prefixes shown as left-side badges inside prefixed inputs. */
export const PREFIX_MAP: Partial<Record<keyof NewProject, string>> = {
  gh_repo: "https://github.com/aayushsiwa/",
  deployment: "https://",
  img_src: "https://raw.githubusercontent.com/aayushsiwa/",
};

/**
 * Get the portion of `fullValue` that follows the given `prefix`.
 *
 * If `fullValue` starts with `prefix`, returns the substring after the prefix; otherwise returns `fullValue` unchanged.
 *
 * @param fullValue - The string from which to extract the suffix
 * @param prefix - The prefix to remove when present
 * @returns The substring after `prefix` if `prefix` is present at the start of `fullValue`, otherwise `fullValue`
 */
export function getSuffix(fullValue: string, prefix: string): string {
  return fullValue.startsWith(prefix)
    ? fullValue.slice(prefix.length)
    : fullValue;
}
