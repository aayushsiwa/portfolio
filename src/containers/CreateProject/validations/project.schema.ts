import { z } from "zod";

const minWordsInDescription = z.string().refine(
  (val) => {
    const words = val
      .trim()
      .split(/\s+/)
      .filter((word) => word !== "");
    return words.length >= 10;
  },
  { message: "Description must be at least 10 words" }
);

export const projectSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),

  description: minWordsInDescription,

  gh_repo: z.string().refine(
    (val) =>
      val.startsWith("https://github.com/") &&
      val.length > "https://github.com/".length,
    { message: "Enter a valid GitHub repo path (e.g. username/repo-name)" }
  ),

  deployment: z
    .string()
    .trim()
    .optional()
    .or(z.literal(""))
    .refine(
      (val) =>
        !val || (val.startsWith("https://") && val.length > "https://".length),
      { message: "Enter a valid deployment URL (e.g. https://myapp.vercel.app)" }
    ),

  img_src: z
    .string()
    .trim()
    .optional()
    .or(z.literal(""))
    .refine(
      (val) =>
        !val ||
        (val.startsWith("https://raw.githubusercontent.com/") &&
          val.length > "https://raw.githubusercontent.com/".length),
      {
        message:
          "Enter a valid raw GitHub image path (e.g. https://raw.githubusercontent.com/user/repo/branch/image.png)",
      }
    ),

  featured: z.boolean(),
});

export type ProjectFormValues = z.infer<typeof projectSchema>;
