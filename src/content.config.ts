import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// All words on the site live in src/content. Components only lay them out.

const figure = (image: any) =>
  z.object({
    src: image(),
    alt: z.string(),
    caption: z.string(),
  });

const work = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      title: z.string(),
      tier: z.enum(['flagship', 'index']),
      status: z.string(),
      chips: z.array(z.string()),
      // The five-part blurb. Every project carries all five.
      whatItIs: z.string(),
      problem: z.string(),
      interesting: z.string(),
      honest: z.string(),
      statusLine: z.array(z.string()),
      links: z.array(z.object({ label: z.string(), value: z.string(), href: z.string().url().optional() })),
      cardFigure: figure(image),
      pageFigure: figure(image),
    }),
});

const site = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/site' }),
  schema: z.object({
    name: z.string(),
    positioning: z.string(),
    line: z.string(),
    proof: z.array(z.object({ label: z.string(), slug: z.string().optional() })),
    cta: z.object({
      work: z.string(),
      conversation: z.string(),
      // [NEEDS INPUT] calendar or mailto link; brief fallback is the LinkedIn URL.
      conversationHref: z.string().optional(),
    }),
    links: z.array(z.object({ label: z.string(), href: z.string().url() })),
  }),
});

export const collections = { work, site };
