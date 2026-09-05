import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const speaking = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/speaking' }),
  schema: z.object({
    title: z.string(),
    event: z.string(),
    date: z.date(),
    location: z.string().optional(),
    slidesUrl: z.string().optional(),
    videoUrl: z.string().optional(),
    eventUrl: z.string().optional(),
    summary: z.string().optional(),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/experience' }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    location: z.string().optional(),
    startDate: z.date(),
    endDate: z.date().optional(),
    summary: z.string().optional(),
    techStack: z.array(z.string()).optional(),
  }),
});

const community = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/community' }),
  schema: z.object({
    title: z.string(),
    organization: z.string(),
    role: z.string().optional(),
    startDate: z.date(),
    endDate: z.date().optional(),
    url: z.string().optional(),
    summary: z.string().optional(),
  }),
});

export const collections = { experience, speaking, community };
