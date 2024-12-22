import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    categories: z.array(z.string()),
    tags: z.array(z.string()),
    author: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };