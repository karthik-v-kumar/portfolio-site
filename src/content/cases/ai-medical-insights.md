---
# Copy from Karthik's case-study brief (Nov 10, 2026), as written. Vendor names
# and the employer name are left off this page.
order: 2
title: AI Medical Insights Platform
summary: >-
  An AI platform that turns 8 separate data sources, from clinical trials and
  publications to field medical notes, into insights medical teams can act on,
  used by 17 product teams.
role: Product Manager. I owned it from MVP through scale and the handoff to the business.
timeframe: 2024–2026
tags: [Generative AI, RAG, Agentic AI, MVP to scale, Medical Affairs]

metricsLabel: Impact
metrics:
  - value: 477+
    label: Active users
  - value: 5x
    label: Questions per month
  - value: +75%
    label: Monthly active users
  - value: '8.4'
    label: Hours saved per user per month

why:
  - >-
    Medical teams decide where to focus based on what physicians tell them, what
    trials and publications show, what’s changing in regulation and what’s
    emerging at medical congresses. That information sat in separate places, so
    pulling it together took hours of manual work every month. By the time it
    was compiled, the insight was already behind what was happening in the field.
  - >-
    The real cost was capacity, more than speed. Every hour spent compiling data
    was an hour field medical teams weren’t spending with physicians. It also
    delayed medical directors in adjusting strategy.

builtIntro: >-
  One AI platform that brings together 8 data sources. They include regulatory
  information, clinical trial intelligence, publications (PubMed), congress
  data, advisory board reports, and field medical notes from the CRM where
  Medical Science Liaisons log their physician interactions.
built:
  - name: Conversational assistant
    text: >-
      Users ask questions in plain language and get answers grounded in the
      source data, using retrieval-augmented generation (RAG).
  - name: Product insight summaries
    text: What’s being heard about each product, in one view.
  - name: Trend comparisons
    text: >-
      How themes shift from period to period, such as one quarter against the
      same quarter last year.
  - name: Recurring insight digests
    text: Key themes delivered on a schedule, so users don’t have to ask.
  - name: Agentic workflows and a metadata layer
    text: >-
      Content is tagged by product and context, so answers stay precise as the
      data grows.
  - name: Contextual filtering
    text: >-
      Users asked for a separate dashboard for each brand. What they needed was
      faster access to relevant insights, so I built one platform with
      filtering instead of a tool per brand.

flow:
  alt: >-
    Flow diagram: 8 data sources feed a tagged data layer, which feeds an AI
    assistant using RAG, which produces answers, product summaries, trend
    comparisons and digests for field medical teams, medical directors and
    leadership.
  caption: How information moves through the platform, from sources to users.
  steps:
    - label: 8 data sources
      items: [Regulatory, Clinical trials, Publications, Congresses, Advisory boards, Field medical notes, and more]
    - label: Tagged data layer
      items: [Tagged by product and context]
    - label: AI assistant
      items: [Retrieval-augmented generation (RAG)]
    - label: Outputs
      items: [Answers, Product summaries, Trend comparisons, Digests]
    - label: Users
      items: [Field medical teams, Medical directors, Leadership]

helps:
  - name: Field medical teams (Medical Science Liaisons)
    text: Less time compiling, more time with healthcare providers.
  - name: Medical directors
    text: Spot shifts sooner and change strategy faster.
  - name: Medical and product leadership
    text: Compare trends across periods to see what’s changing and why.
  - name: The organization
    text: One shared platform for every product team instead of separate tools for each brand.
helpsNote: 68% of users report faster or more confident decisions.

drove:
  - name: Turned around weak early adoption.
    text: >-
      Usage was low after MVP. I raised it with leadership and ran a 2–3 week
      discovery sprint with medical directors, field medical teams and their
      leads, mapping how each role actually works.
  - name: Found the real gap.
    text: >-
      The pain points users described weren’t on the backlog. The team had been
      shipping features, but users needed faster decisions.
  - name: Reset the OKRs.
    text: >-
      I set one north-star objective (faster, more confident medical decisions)
      with key results for each user group. Every backlog item had to map to a
      key result, or it was deprioritized.
  - name: Changed the rollout.
    text: >-
      I presented the platform to senior medical leadership across product
      teams. That led to training requests and more teams onboarding.
  - name: Scaled onboarding.
    text: >-
      I redesigned and standardized onboarding. Cycle time fell by about 50% and
      throughput doubled.

resultsTitle: Results
resultsCols: [Metric, Result]
results:
  - [Active users, 477+]
  - [Product teams onboarded, '17']
  - [Questions asked per month, '400 → 2,000+ (5x)']
  - [Monthly active users, '+75% (H1 to H2 2025)']
  - [Time saved, About 8.4 hours per user per month]
  - [Users reporting faster or more confident decisions, 68%]
  - [Net Promoter Score, '23']
  - [Onboarding cycle time for new product teams, About 50% shorter]
  - [Onboarding throughput, 2x (H2 vs. H1 2025)]

skills: [Generative AI, Retrieval-augmented generation (RAG), Agentic workflows, Metadata architecture, Product discovery, OKRs, Agile, Stakeholder alignment]

card:
  blurb: >-
    Took an AI insights platform from MVP to 477+ active users and 5x
    engagement, giving medical teams hours back every month.
  tags: [Generative AI, RAG, Medical Affairs]
seo:
  title: AI Medical Insights Platform | Karthik Kumar
  description: >-
    How I scaled an AI platform that unifies 8 data sources for medical teams:
    477+ active users, 5x engagement, 8.4 hours saved per user each month.
next: drug-advancement-decisions
---
