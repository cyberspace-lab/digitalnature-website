import { defineCollection, z } from 'astro:content';

const langField = z.enum(['en', 'cs']).default('en');

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    authors: z.string(),
    link: z.string().optional(),
    template: z.literal('publication'),
    lang: langField,
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    featuredImage: z.string().optional(),
    lang: langField,
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
    lang: langField,
  }),
});

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    slug: z.string().optional(),
    description: z.string().optional(),
    featuredImage: z.string().optional(),
    template: z.string().optional(),
    lang: langField,
  }),
});

export const collections = {
  publications,
  pages,
  team,
  posts,
};
