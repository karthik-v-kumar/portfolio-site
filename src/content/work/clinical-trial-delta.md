---
# Source: BUILD_BRIEF.md §9 draft copy, verbatim. Superseded by CONTENT.md when it exists.
order: 1
title: Clinical Trial Delta
tier: flagship
status: In development
chips:
  - In development
  - Public repo
  - Has eval suite

whatItIs: >-
  A tracker for clinical trials in GLP-1/obesity, type 2 diabetes, and cholesterol
  that records what changed, not just what is.
problem: >-
  ClinicalTrials.gov only ever shows a trial’s current record. A status flip, an
  enrollment cut, a moved endpoint — once it changes, the old state is gone.
interesting: >-
  The pipeline snapshots the registry daily and diffs it, so change itself becomes
  the dataset. It ships with an AI evaluation suite — a golden set, assertions that
  run in CI on every change, and an LLM judge when a key is present — because “the
  AI summarized it” is not a quality standard.
honest: >-
  The differ is only as good as its field selection; v1 watches the fields that
  matter and will miss exotic edits.

statusLine:
  - In development
  - Public repo
  - Demo at launch
links:
  - label: Status
    value: In development
  - label: Repo
    value: karthik-v-kumar/clinical-trial-delta
    href: https://github.com/karthik-v-kumar/clinical-trial-delta
  - label: Demo
    value: At launch

# Figures are captures of the real product, built locally from the public repo.
# Captions state what the reader is looking at and where it came from.
cardFigure:
  src: ../../assets/work/clinical-trial-delta-collection.png
  alt: >-
    Clinical Trial Delta collection page for GLP-1 and obesity: 1,091 trials, 239
    recruiting now, with charts of trials by phase and by status.
  caption: >-
    GLP-1 & obesity collection. Local build of the public repo, registry data as of
    Nov 9, 2026.
pageFigure:
  src: ../../assets/work/clinical-trial-delta-evals.png
  alt: >-
    Clinical Trial Delta AI evaluation page, titled How the AI is checked: latest
    run Nov 9, 2026 with 30 cases, and the three kinds of automatic checks.
  caption: >-
    The AI evaluation page. Local build of the public repo; eval run of Nov 9, 2026,
    30 golden-set cases.
---
