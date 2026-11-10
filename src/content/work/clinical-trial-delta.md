---
# Facts from BUILD_BRIEF.md §9 and the public repo's README. Wording revised
# for plain language. Superseded by CONTENT.md when it exists.
order: 1
title: Clinical Trial Delta
tier: flagship
status: In development
chips:
  - In development
  - Public repo
  - AI output tested

whatItIs: >-
  A daily tracker for clinical trials in GLP‑1/obesity, type 2 diabetes, and
  cholesterol. It shows what changed in each trial’s public record: status,
  enrollment, endpoints, and sites.
problem: >-
  ClinicalTrials.gov shows a trial’s current record. When a sponsor changes the
  status, the enrollment number, or an endpoint, the page shows the new value,
  and you would have to remember the old one to notice.
howItWorks:
  - >-
    Every day the pipeline saves a copy of the registry record for each tracked
    trial and compares it with the previous day’s copy. Each difference becomes
    a dated change event, such as a status change, an enrollment change, or a
    site added.
  - >-
    Trial pages also carry a short AI-written summary of the record, and those
    summaries are tested. 30 hand-written test cases and a set of automatic
    checks run on every data refresh. When an API key is configured, a second AI
    model scores each summary for accuracy and clarity. A summary that fails a
    check is not published.
limits: >-
  The comparison covers only the fields I chose to watch. Version 1 tracks
  status, enrollment, endpoints, sites, dates, and posted results. A change to
  any other field will not show up.

statusLine:
  - In development
  - Public repo
  - Live demo not deployed yet
links:
  - label: Status
    value: In development
  - label: Repo
    value: karthik-v-kumar/clinical-trial-delta
    href: https://github.com/karthik-v-kumar/clinical-trial-delta
  - label: Live demo
    value: Not deployed yet

# Figures are screenshots of the real product, built locally from the public repo.
# Captions say what the reader is looking at and where it came from.
cardFigure:
  src: ../../assets/work/clinical-trial-delta-collection.png
  alt: >-
    Clinical Trial Delta page for GLP-1 and obesity trials: 1,091 trials, 239
    recruiting now, with charts of trials by phase and by status.
  caption: >-
    The GLP-1 and obesity page, listing every tracked trial in that group.
    Screenshot from a local copy of the app, with registry data from Nov 9, 2026.
pageFigure:
  src: ../../assets/work/clinical-trial-delta-evals.png
  alt: >-
    Clinical Trial Delta page titled How the AI is checked: latest run Nov 9, 2026
    with 30 cases, and the three kinds of automatic checks.
  caption: >-
    The page that reports how the AI summaries are tested. Screenshot from a
    local copy of the app. Test run of Nov 9, 2026, 30 test cases.
---
