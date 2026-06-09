import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    status: z.string(),
    summary: z.array(z.string()).default([]),
    date: z.string().optional(),
    link: z
      .object({ title: z.string(), url: z.string() })
      .nullish(),
    order: z.number().default(999),
  }),
});

export const collections = { projects };
