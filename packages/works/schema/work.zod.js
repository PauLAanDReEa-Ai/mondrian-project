/**
 * Zod mirror of work.schema.json (structural + provenance discriminators).
 * Imported by Astro content.config and scripts/conformance.sh.
 * Semantic geometry checks remain in validateWork / pydantic refinements.
 */
import { z } from "zod";

const axisPoint = z.object({
  id: z.string().min(1),
  position: z.number().min(0).max(1),
});

const swatch = z.object({
  measured: z.object({
    h: z.number().min(0).lt(360),
    s: z.number().min(0).max(100),
    l: z.number().min(0).max(100),
  }),
});

const reviewProposal = z.object({
  status: z.literal("proposal"),
  reviewed_by: z.string().optional(),
  date: z.string().optional(),
});

const reviewAccepted = z.object({
  status: z.literal("accepted"),
  reviewed_by: z.string().min(1),
  date: z.string().min(1),
});

const reproduction = z.object({
  source: z.string().min(1),
  px_w: z.number().int().positive(),
  px_h: z.number().int().positive(),
  crop: z.object({
    x0: z.number().min(0),
    y0: z.number().min(0),
    x1: z.number().positive(),
    y1: z.number().positive(),
  }),
});

const provenanceHand = z
  .object({
    method: z.literal("hand"),
    measured_by: z.string().min(1),
    date: z.string().min(1),
    reproduction,
    review: z.union([reviewProposal, reviewAccepted]),
  })
  .strict();

const provenanceAnalyzer = z
  .object({
    method: z.literal("analyzer"),
    analyzer_version: z.string().min(1),
    run_at: z.string().min(1),
    reproduction,
    review: z.union([reviewProposal, reviewAccepted]),
  })
  .strict();

const provenanceExternal = z
  .object({
    method: z.literal("external"),
    dataset: z.string().min(1),
    citation: z.string().min(1),
    record_id: z.string().min(1),
    license: z.string().min(1),
    imported_by: z.string().min(1),
    date: z.string().min(1),
    reproduction,
    review: z.union([reviewProposal, reviewAccepted]),
  })
  .strict();

export const workSchema = z
  .object({
    id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    title: z.string().min(1),
    year: z.number().int().min(1000).max(2100),
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
            thickness: z.number().positive().max(0.25),
          }),
        )
        .min(1),
    }),
    provenance: z.discriminatedUnion("method", [
      provenanceHand,
      provenanceAnalyzer,
      provenanceExternal,
    ]),
    rights: z.object({
      eu: z.string(),
      us: z.string(),
      checked_by: z.string(),
      date: z.string(),
      credit: z.string().optional(),
    }),
    uncertainty: z.record(z.string(), z.unknown()).optional(),
    swatches: z.record(z.string(), swatch),
  })
  .strict();

/**
 * @param {unknown} doc
 * @returns {{ ok: true } | { ok: false, path: string, message: string }}
 */
export function validateWorkZod(doc) {
  const result = workSchema.safeParse(doc);
  if (result.success) return { ok: true };
  const issue = result.error.issues[0];
  const path = issue?.path?.length ? issue.path.join(".") : "";
  return {
    ok: false,
    path,
    message: issue?.message || "zod reject",
  };
}
