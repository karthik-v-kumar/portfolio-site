# BUILD BRIEF — karthikvkumar.com (personal portfolio)

**This brief is the source of truth for the build.** Build exactly what is specified here. Where copy is marked `[NEEDS INPUT]`, render the fallback shown and list the item in your completion report — never invent metrics, dates, or testimonials to fill a gap.

Companion file: `CONTENT.md` (same repo) is the source of truth for all words on the site. If it exists, it supersedes the draft copy in this brief. Never rewrite its copy for tone.

---

## 1. What this site is

Karthik Kumar's portfolio and evidence layer for a move into AI product roles at startups (life-sciences wedge first). Three audiences:

1. **Founders** at Series A/B health-AI companies — the primary audience
2. **Recruiters and hiring managers** for PM / product-strategy roles
3. **AI-native peers** — the credibility jury; they will spot generated-looking design and copy instantly

**The one job of the site:** convert a ~90-second visit into a 15-minute conversation.

**Positioning (locked — do not paraphrase it away):**
> AI product & strategy leader in life sciences who builds and ships.

The product/strategy fork resolves product-led with operator range. The profile and site lead with product; the range shows up in the evidence. Founder outreach asks for a 15-minute conversation, never for a role — the site's CTAs mirror that.

**Success criteria:** a founder landing cold from a LinkedIn profile or a DM can, within 90 seconds, (a) understand what Karthik does, (b) click into at least one live, working product, and (c) find the contact CTA without scrolling past a resume.

## 2. What this site is NOT

- **Not a resume mirror.** LinkedIn carries the chronology. This site carries evidence. Career history appears once, compressed (§5.4), and borrows credibility from the projects, never the reverse.
- **Not a GitHub mirror.** GitHub carries the code. This site curates 6–7 projects with judgment, live links, and honest labels. No auto-generated repo cards.
- **Not a blog** (v1). No posts, no newsletter signup, no "thought leadership" section.

## 3. The anti-slop standard (hard requirements)

The audience builds AI products for a living. A site that *looks* generated destroys the exact claim it exists to make. These are build requirements, not taste notes:

1. **Zero AI-writing tells in copy.** No "passionate about", "leveraging", "delve", "in today's fast-paced world", "elevate", "harness", rocket/sparkle emojis, or testimonial quotes. Copy comes from `CONTENT.md` verbatim. If a string isn't in the content file, flag it — don't write it.
2. **No default-template design language.** No purple/blue gradient hero, no glassmorphism cards, no glow effects, no identical icon-card grid with stock icons, no typing-animation headline, no generic "Hi, I'm X 👋" hero.
3. **Proof beats adjectives.** Every claim on the site links to something checkable: a live deployment, a public repo, or a number with a source the reader can verify. Where proof can't be shown (employer work), say less, precisely (§6).
4. **Specificity is the aesthetic.** Real numbers, real constraints, real failure notes. Every project entry carries one honest line — what was hard, what broke, or what he'd redo (§5.2). Generated portfolios never contain friction; this one does on purpose.
5. **Typography carries the design.** One display serif + one grotesque sans + mono for data/labels (§7). No icon library characters as decoration. No stock photography anywhere. Visuals are product screenshots or data.
6. **Be honest about the agent-built nature — as a feature, in his words.** Several of these products were built by directing AI coding agents against written specs, with Karthik on architecture, acceptance tests, and the consequential calls. AI-native readers respect that workflow when it's stated plainly with artifacts (specs, eval results, commit history). They punish it when it's dressed up as hand-typed code. §5.3 exists for this. Copy from `CONTENT.md` only.

## 4. Repo & deploy

- **Repo:** new, `karthik-v-kumar/portfolio-site`, **public** (the repo is itself a portfolio artifact; keep code and commit messages clean).
- **Stack:** Astro (static output) + hand-written CSS. No CSS framework, no UI component library, no chart library. Content as MDX/Markdown collections so copy edits never touch components. This mirrors his other properties (Vite/TS frontends, hand-rolled CSS, static deploy) — keep the family resemblance in engineering, not in appearance.
- **Hosting:** Vercel, root = repo root or `web/` per Astro defaults; custom domain `karthikvkumar.com` + `www` redirect. DNS instructions in the completion report if the domain step needs his hand.
- **No backend, no accounts, no cookies, no analytics in v1.** (A privacy-respecting counter is a v2 question — do not add one speculatively.)
- **Performance budget:** Lighthouse ≥95 performance on mobile, no layout shift, total JS minimal (Astro islands only where interaction is specified).

## 5. Site structure (single page + project deep-dives)

### 5.1 Hero (above the fold, nothing else competing)

- Name: **Karthik Kumar**
- One line (locked positioning, expanded by one clause): "AI product & strategy leader in life sciences. I build and ship — at work, and after it."
- One proof strip, numbers only, each verifiable: `[NEEDS INPUT — 3–4 stats, e.g. products shipped, platform users, GitHub projects live]` — until provided, render: "11 public & private builds · 4 live products · 1 in production at a Fortune 500" — **no: do not ship invented stats.** Fallback hero proof strip = the three flagship project names as text links. Stats ship only when supplied in `CONTENT.md`.
- Two CTAs: **See the work** (scroll) · **15-minute conversation** (mailto / calendar link `[NEEDS INPUT — link]`, fallback: LinkedIn URL).
- No photo in v1 unless he supplies one (`[NEEDS INPUT — headshot, optional]`). A monogram/typographic treatment instead. No avatar illustration.

### 5.2 Selected work (the core of the site)

Ordering principle: live-and-clickable first, wedge-relevant first. Each entry has a **card** on the index and a **deep-dive page** (`/work/<slug>`). Card = name, one-line description, 2–3 evidence chips (e.g. "Live", "Public repo", "Has eval suite"), one screenshot. Deep-dive = the full blurb structure below.

**Blurb structure (every project, no exceptions — consistency reads as editorial, not generated):**

1. **What it is** — 1–2 sentences, plain.
2. **The problem** — who has it, why existing tools don't solve it. 1–2 sentences.
3. **What's interesting** — the non-obvious technical or product decision. 2–3 sentences. This is the section AI-native readers actually read.
4. **The honest line** — what was hard, what broke, what's still missing, or what he'd redo. 1 sentence. Never skip; never make it a humble-brag.
5. **Status & links** — Live / In development / Reference build; demo URL, repo URL (or "private repo — architecture notes on request" where §6 applies).

**Roster (build all seven; content status noted):**

1. **Clinical Trial Delta** — FLAGSHIP #1 (life-sciences wedge). Tracks clinical trials in GLP-1/obesity, T2D, and cholesterol; ClinicalTrials.gov only shows a trial's current record, so it snapshots the registry daily and surfaces what changed — status flips, enrollment, endpoints, sites. Built-in AI evaluation suite (golden set, CI assertions, LLM-judge). Public repo, live demo when deployed. Blurb draft in §9.
2. **Site Insights Accelerator (SIA)** — FLAGSHIP #2 (day-job proof). Clinical-trial site-insights AI inside a trial recruitment program at my employer; synthesizes millions of Veeva clinical notes. Narrative only — no screenshots, no repo, metrics limited to what Karthik marks cleared in `CONTENT.md`. `[NEEDS INPUT — scope/impact numbers]` Until then the deep-dive uses the cleared-facts fallback in §9. Employer IP rules in §6 are absolute.
3. **Financial planning app** ("financial-plan-v2") — FLAGSHIP #3 (systems depth). Household financial OS: income/budget/tax estimation (incl. SALT-cap planning), card-benefit tracking. Live product, daily personal use; **private repo**, public entry shows screenshots with synthetic data only. The interesting-section hook: it has an agent-connection layer — he talks to his own plan through an AI agent with real numbers.
4. **Trading research app** — renamed product, trademark pending; display name on site = `[NEEDS INPUT — final name; until supplied, list as "Trading research platform" with no brand name]`. Watchlist research with computed valuation lenses, catalyst tracking, and a daily GitHub-Actions data pipeline. Private repo; screenshots with the multiple
4. **Trading research platform** — FLAGSHIP #4 (data pipeline + valuation). Watchlist research app: computed valuation lenses, catalyst tracking, daily data pipeline on GitHub Actions. Private repo; screenshots only, and never under its old name (trademark-risky, rename pending) — list it unbranded until he supplies the new name.

5. **Trip Hub** — travel planner: trips, itineraries (flights, stays, transport, activities, meals), packing lists, documents. Live product, real trips run through it. Interesting-section hook: it exposes an agent layer, so his AI agent can read and manage trips from chat. Public repo candidate `household-tracking` is Stocked (below); Trip Hub repo is private (`trip-well-planned`).
6. **Stocked** — household grocery lists and pantry inventory, shared across the household, with upkeep/filter tracking. Public repo (`household-tracking`). Live at stocked.grok.me. The smallest product on the page and deliberately included: it shows range and that the ecosystem includes unglamorous, used-daily tools.
7. **Recoup** — card-benefits wallet: tracks Amex/Chase-style credits and offers so they get used before they expire. Private repo. Status: working product, go-to-market in progress. `[NEEDS INPUT — current status line]`

**Explicitly excluded (do not list):** Investing-Terminal (precursor of #4), financial-planner + Financial-Planning-DemoOLD (duplicates/precursors of #3), our-kitchen-personal (precursor of the recipes app; the recipes app itself is a family project, not his solo build — exclude), portfolio-performance-trade-tracker (utility script, public repo — fold into #4's deep-dive as a supporting tool if space allows, never its own card).

### 5.3 How I build (one section, below Selected work)

The agent-ecosystem story, in his framing: **apps as systems of record, agents as operators, a human on the consequential calls.** Contents: the workflow (written spec → agent build → acceptance criteria → his review), two or three linked artifacts as proof (a build brief, an eval results page, a pipeline run), and the guardrails he runs (synthetic data on anything public, approvals on consequential actions). All copy from `CONTENT.md`. No diagram generated from a stock icon set; if a visual is needed, it is a real screenshot of a brief or a run log.

### 5.4 Career (compressed — one block, after the work)

A single timeline, newest first, role + company + dates + ONE impact line each. No paragraphs, no duties lists, no skills cloud. Entries (impact lines are placeholders until `CONTENT.md` supplies cleared numbers):

- **Senior Manager, Digital Product Management** (2026– ) · SIA, clinical-trial AI `[NEEDS INPUT — impact line]`
- **Manager, Digital Product Management** (2024–2026) · Built a RAG-based agentic medical-insights platform 0→1: 15+ brands, 477+ users, engagement 5x, 8.4 hrs saved per user per month
- **Manager, Digital Transformation & Innovation** (2023–2024) · Ran 5 AI/ML university-partnership projects across rare disease and obesity; rebuilt the innovation process, 2x faster
- **Co-founder — YTLS Health** (dates `[NEEDS INPUT]`) · Wireless NICU monitoring; NSF I-Corps. One line, matter-of-fact. Never the lead anywhere on this site.
- **Marketing Manager — You First Services** (2017–2020) · Took a biotech disinfection product from idea to launch: pilots at Ohio State, Tennessee, and Buffalo, then full installation; grew the product portfolio from $240K to $950K+ in a year
- **Clinical Research Assistant — Oishei Children's Hospital** (2014–2017) · Co-authored a Journal of Perinatology study

Education, one line: MBA + MS Marketing, UT Dallas (2023) · BS Biological Sciences, Buffalo (2015). Certifications, one line max. Quarterhill and BD internships: omit from the site (they live on LinkedIn).

### 5.5 Close / contact (final block)

- One line: what he's looking for — product / product-strategy roles at life-sciences AI companies, and conversations with founders building there.
- CTAs: **15-minute conversation** (same link as hero) · LinkedIn · GitHub · email.
- No contact form in v1.

## 6. Hard rules

- **Employer IP:** Employer work is narrative-only. No screenshots, no internal documents, no code, no unreleased product details. Numbers only where `CONTENT.md` marks them cleared. If unsure whether a fact is cleared, leave it out and flag it.
- **Privacy:** the financial app and trading platform are private repos with real personal data behind them. Public pages show screenshots with synthetic data only, and no real balances, positions, or account details anywhere — including in image filenames and alt text.
- **No public use of the research app's old name** anywhere until the rename lands.
- **No invented anything:** metrics, dates, user counts, testimonials, logos of employers as endorsements. If it isn't in `CONTENT.md` or this brief, it doesn't ship.
- **YTLS stays downplayed** (owner's explicit call): matter-of-fact timeline line only, never in the hero, never the lead of any summary.

## 7. Design direction (to be refined with a mock before full build)

- **Editorial, typography-led.** Think printed annual report / journal, not SaaS landing page. Generous margins, strong hierarchy, hairline rules, numbered sections (01 Work, 02 How I build, 03 Career, 04 Contact).
- **Type:** display serif (e.g. Source Serif 4 / Newsreader class) for headlines; grotesque sans (e.g. Inter Tight / Archivo class — not default Inter) for body; mono (e.g. IBM Plex Mono class) for labels, dates, data chips. All self-hosted or Google Fonts with `font-display: swap`.
- **Color:** warm paper background (#FAF9F6 class), near-black ink, ONE accent used sparingly (deep green or oxblood class — pick one in the mock, never a gradient). Dark mode: respect `prefers-color-scheme`, same palette inverted, no separate design.
- **Layout:** asymmetric where it earns it; project cards are NOT identical boxes — flagships get large treatments, the rest compact rows. Screenshots in consistent frames with captions (captions carry facts: what the reader is looking at, when it shipped).
- **Motion:** none beyond native scroll and link states in v1. No parallax, no reveal-on-scroll, no cursor effects.
- **Charts (if any):** numbered axis labels on every chart, and plain-language captions for any technical term — owner's standing rule across all his properties.

## 8. Milestones

- **M0 — scaffolding + design mock:** repo, Astro skeleton, domain wired, ONE page mock (hero + one flagship card + one deep-dive) for approval before the full build. Stop and report.
- **M1 — structure:** all sections and deep-dive routes with real layout, copy from `CONTENT.md` (draft copy from §9 until it exists).
- **M2 — content & assets:** screenshots processed to spec, career block, OG image, favicon, 404 page.
- **M3 — polish & ship:** performance budget verified, mobile pass, link audit (every external link clicked and verified live), deploy to production domain.

## 9. Draft copy (until CONTENT.md supersedes)

**Clinical Trial Delta (deep-dive, draft):**
- *What it is:* A tracker for clinical trials in GLP-1/obesity, type 2 diabetes, and cholesterol that records what changed, not just what is.
- *The problem:* ClinicalTrials.gov only ever shows a trial's current record. A status flip, an enrollment cut, a moved endpoint — once it changes, the old state is gone.
- *What's interesting:* The pipeline snapshots the registry daily and diffs it, so change itself becomes the dataset. It ships with an AI evaluation suite — a golden set, assertions that run in CI on every change, and an LLM judge when a key is present — because "the AI summarized it" is not a quality standard.
- *The honest line:* The differ is only as good as its field selection; v1 watches the fields that matter and will miss exotic edits.
- *Status:* In development · Public repo · Demo at launch.

**SIA (deep-dive fallback, cleared facts only):**
- *What it is:* Site Insights Accelerator — the clinical-trial site-insights product I own at work, inside a trial recruitment program.
- *The problem:* Trial teams choosing and supporting sites drown in unstructured clinical notes; the signal exists, spread across millions of Veeva records.
- *What's interesting:* `[NEEDS INPUT — one cleared sentence on approach]`
- *The honest line:* Employer product — no screenshots, no code, and only the numbers my employer has made public. Happy to talk through the product decisions in conversation.
- *Status:* In production · Employer work, narrative only.

## 10. Acceptance criteria

- Founder test: a cold reader can state his positioning after 30 seconds and reach a live product in one click.
- Every project has all five blurb parts; every claim links to proof or is removed.
- Zero items from the §3 banned list present in copy or design (grep the banned words before ship).
- Lighthouse ≥95 mobile performance; all pages usable with JS disabled except specified islands.
- Completion report lists: live URLs per project verified, `[NEEDS INPUT]` items outstanding, DNS steps needing his hand.
