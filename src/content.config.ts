import { defineCollection, z } from 'astro:content';

const langField = z.enum(['en', 'cs']).default('en');

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

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    slug: z.string().optional(),
    description: z.string().optional(),
    featuredImage: z.string().optional(),
    category: z
      .enum(['announcement', 'event', 'project-update', 'press'])
      .default('announcement'),
    lang: langField,
  }),
});

const theory = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    lang: langField,
    pillar: z.enum(['psychology', 'physiology', 'chemistry', 'process']),
    summary: z.string(),
    order: z.number().optional(),
    featuredImage: z.string().optional(),
  }),
});

const practices = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    lang: langField,
    audience: z.enum([
      'individuals',
      'families',
      'schools',
      'workplaces',
      'guides',
      'health-professionals',
    ]),
    scope: z.enum(['micro', 'session', 'weekly', 'monthly', 'seasonal']),
    summary: z.string(),
    order: z.number().optional(),
    featuredImage: z.string().optional(),
  }),
});

const forestManagement = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    lang: langField,
    topic: z.enum([
      'silviculture',
      'safety-visibility',
      'soundscape',
      'species',
      'typology',
      'certification',
      'czech-law',
    ]),
    summary: z.string(),
    order: z.number().optional(),
    featuredImage: z.string().optional(),
  }),
});

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    lang: langField,
    date: z.string(),
    summary: z.string(),
    status: z.enum(['ongoing', 'completed', 'planned']),
    themes: z.array(
      z.enum(['psychology', 'physiology', 'silviculture', 'digital', 'policy'])
    ),
    partners: z.array(z.string()).optional(),
    link: z.string().optional(),
    featuredImage: z.string().optional(),
  }),
});

export const collections = {
  pages,
  team,
  news,
  theory,
  practices,
  'forest-management': forestManagement,
  research,
};
