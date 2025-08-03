import { defineCollection, z } from 'astro:content';

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    authors: z.string(),
    link: z.string().optional(),
    template: z.literal('publication'),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    featuredImage: z.string().optional(),
  }),
});

const team = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string().optional(),
    featuredImage: z.string().optional(),
    template: z.literal('team-member'),
  }),
});

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    featuredImage: z.string().optional(),
    template: z.string().optional(),
  }),
});

export const collections = {
  publications,
  pages,
  team,
  posts,
}; 