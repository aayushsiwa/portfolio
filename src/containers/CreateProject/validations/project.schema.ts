import { z } from "zod";

const minWordsInDescription = z.string().refine(
  (val) => {
    const words = val
      .trim()
      .split(/\s+/)
      .filter((word) => word !== "");
    return words.length >= 10;
  },
  { message: "Description must be at least 10 words" },
);

// 👉 Helper to safely parse URL
const safeParseURL = (val: string) => {
  try {
    return new URL(val.trim());
  } catch {
    return null;
  }
};

export const projectSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),

  description: minWordsInDescription,

  gh_repo: z.string().refine(
    (val) => {
      const url = safeParseURL(val);
      if (!url) return false;

      const isValidHost =
        url.hostname === "github.com" || url.hostname === "www.github.com";

      const isValidProtocol = url.protocol === "https:";

      // exactly: /user/repo or /user/repo.git
      const isValidPath = /^\/[^\/\s]+\/[^\/\s]+(\.git)?\/?$/.test(
        url.pathname,
      );

      return isValidHost && isValidProtocol && isValidPath;
    },
    {
      message:
        "Enter a valid GitHub repo URL (e.g. https://github.com/user/repo)",
    },
  ),

  deployment: z
    .string()
    .trim()
    .optional()
    .or(z.literal(""))
    .refine(
      (val) => {
        if (!val) return true;

        const url = safeParseURL(val);
        if (!url) return false;

        const isValidProtocol =
          url.protocol === "https:" || url.protocol === "http:";

        // basic non-empty pathname/domain validation
        return isValidProtocol && !!url.hostname;
      },
      {
        message: "Enter a valid deployment URL (e.g. https://myapp.vercel.app)",
      },
    ),

  img_src: z
    .string()
    .trim()
    .optional()
    .or(z.literal(""))
    .refine(
      (val) => {
        if (!val) return true;

        const url = safeParseURL(val);
        if (!url) return false;

        const isValidHost = url.hostname === "raw.githubusercontent.com";
        const isValidProtocol = url.protocol === "https:";

        // raw github requires at least: /user/repo/branch/file
        const isValidPath = /^\/[^\/\s]+\/[^\/\s]+\/[^\/\s]+\/.+$/.test(
          url.pathname,
        );

        return isValidHost && isValidProtocol && isValidPath;
      },
      {
        message:
          "Enter a valid raw GitHub image path (e.g. https://raw.githubusercontent.com/user/repo/branch/image.png)",
      },
    ),

  featured: z.boolean(),
});

export type ProjectFormValues = z.infer<typeof projectSchema>;
