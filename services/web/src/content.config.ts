import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const axisPoint = z.object({
  id: z.string(),
  position: z.number().min(0).max(1),
});

const workSchema = z
  .object({
    id: z.string(),
    title: z.string(),
    year: z.number().int(),
    source: z.object({
      collection: z.string(),
      inventory: z.string(),
      catalogueNote: z.string().optional(),
    }),
    canvas: z.object({
      width: z.number().positive(),
      height: z.number().positive(),
      unit: z.enum(["mm", "cm", "in"]),
    }),
    geometry: z.object({
      coordinateSpace: z.literal("normalized-0-1"),
      points: z.object({
        x: z.array(axisPoint).min(2),
        y: z.array(axisPoint).min(2),
      }),
      rectangles: z
        .array(
          z.object({
            id: z.string(),
            x: z.tuple([z.string(), z.string()]),
            y: z.tuple([z.string(), z.string()]),
            role: z.enum(["red", "yellow", "blue", "black", "white", "gray"]),
          }),
        )
        .min(1),
      lines: z
        .array(
          z.object({
            id: z.string(),
            orientation: z.enum(["h", "v"]),
            center: z.string(),
            extent: z.tuple([z.string(), z.string()]),
            thickness: z.number().positive(),
          }),
        )
        .min(1),
    }),
    provenance: z.record(z.string(), z.unknown()),
    rights: z.record(z.string(), z.unknown()),
    uncertainty: z.record(z.string(), z.unknown()).optional(),
    swatches: z.record(z.string(), z.unknown()),
  })
  .passthrough();

/**
 * Load measured works from the monorepo package (YAML).
 * Base is relative to this config file → packages/works/works.
 */
const works = defineCollection({
  loader: glob({
    pattern: "*/work.yml",
    base: "../../packages/works/works",
  }),
  schema: workSchema,
});

export const collections = { works };
