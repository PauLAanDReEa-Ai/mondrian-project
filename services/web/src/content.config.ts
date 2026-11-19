import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { workSchema } from "../../../packages/works/schema/work.zod.js";

/**
 * Load measured works from the monorepo package (YAML).
 * Schema: shared zod mirror of work.schema.json (F1/F5).
 */
const works = defineCollection({
  loader: glob({
    pattern: "*/work.yml",
    base: "../../packages/works/works",
  }),
  schema: workSchema,
});

export const collections = { works };
