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

const named = z.object({ name: z.string(), text: z.string() });

// Projects written up in the five-part blurb (brief §5.2).
const work = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      title: z.string(),
      tier: z.enum(['flagship', 'index']),
      status: z.string(),
      chips: z.array(z.string()),
      whatItIs: z.string(),
      problem: z.string(),
      howItWorks: z.array(z.string()),
      limits: z.string(),
      statusLine: z.array(z.string()),
      links: z.array(z.object({ label: z.string(), value: z.string(), href: z.string().url().optional() })),
      // Employer work carries no figures (brief §6).
      cardFigure: figure(image).optional(),
      pageFigure: figure(image).optional(),
      // A redrawn layout sketch, used where a screenshot is not allowed.
      sketch: z.object({ alt: z.string(), caption: z.string() }).optional(),
      // A walkthrough of what the product does, one feature at a time.
      featuresTitle: z.string().optional(),
      featuresNote: z.string().optional(),
      features: z
        .array(
          z.object({
            name: z.string(),
            text: z.string(),
            figure: z.object({ src: image(), alt: z.string() }).optional(),
            // a small line illustration, for features shown without a screenshot
            art: z.enum(['score', 'chart', 'sentiment', 'calendar', 'economy', 'chain', 'builder', 'trades', 'glossary', 'agent', 'list', 'bars', 'flow', 'card', 'map', 'inbox', 'doc', 'sync', 'timeline', 'levels']).optional(),
          }),
        )
        .optional(),
    }),
});

// Employer case studies, in the structure of the case-study brief.
const cases = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/cases' }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    summary: z.string(),
    role: z.string(),
    timeframe: z.string(),
    tags: z.array(z.string()),
    metricsLabel: z.string(),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })),
    why: z.array(z.string()),
    builtIntro: z.string(),
    built: z.array(named),
    flow: z.object({
      alt: z.string(),
      caption: z.string(),
      steps: z.array(z.object({ label: z.string(), items: z.array(z.string()) })),
      loop: z.string().optional(),
    }),
    helps: z.array(named),
    helpsNote: z.string().optional(),
    drove: z.array(named),
    resultsTitle: z.string(),
    resultsCols: z.tuple([z.string(), z.string()]),
    results: z.array(z.tuple([z.string(), z.string()])),
    skills: z.array(z.string()),
    card: z.object({ blurb: z.string(), tags: z.array(z.string()) }),
    seo: z.object({ title: z.string(), description: z.string().max(160) }),
    next: z.string(),
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
      conversationHref: z.string().optional(),
    }),
    links: z.array(z.object({ label: z.string(), href: z.string().url() })),
    more: z.array(
      z.object({
        order: z.number(),
        title: z.string(),
        line: z.string(),
        chips: z.array(z.string()),
        href: z.string().url().optional(),
      }),
    ),
    build: z.object({
      lede: z.string(),
      steps: z.array(named),
      guardrailsLabel: z.string(),
      guardrails: z.array(z.string()),
      artifactsLabel: z.string(),
      artifacts: z.array(z.object({ label: z.string(), href: z.string().url() })),
    }),
    career: z.array(
      z.object({
        role: z.string(),
        company: z.string(),
        dates: z.string().optional(),
        line: z.string().optional(),
      }),
    ),
    education: z.string(),
    contact: z.object({ line: z.string() }),
    notFound: z.object({ title: z.string(), line: z.string(), cta: z.string() }),
  }),
});

export const collections = { work, cases, site };
