---
# Copy from Karthik's case-study brief (Nov 10, 2026), as written. Every number
# here is a proof-of-concept target, never a result. The employer name is left
# off this page.
order: 4
title: AI Agents for Faster Drug Advancement Decisions
summary: >-
  Agentic AI that helps teams build stronger cases on whether a drug candidate
  should advance past Phase 1, so go/no-go decisions take fewer review cycles.
role: >-
  Product Manager. I defined the problem, the success criteria and the phased
  plan, and led the 12-week proof of concept.
timeframe: '2026'
tags: [Agentic AI, Multi-agent design, Drug development, Proof of concept]

metricsLabel: Success criteria
metrics:
  - value: <1.6
    label: Target review cycles per case, from a baseline of about 2.3
  - value: 70%+
    label: Target accuracy predicting reviewer issues
  - value: '2'
    label: AI agents
  - value: 12 wk
    label: Proof of concept

why:
  - >-
    After Phase 1 trials, every drug candidate reaches a go/no-go point: does it
    show enough potential to justify the next phase of development? In a
    regulated industry, that decision weighs many variables at once. They
    include early clinical signals, the patient population, the competitive
    landscape, commercial potential, and the cost and risk of the next phase.
  - >-
    Getting the call right, and making it quickly, matters. Advancing a weak
    drug candidate ties up resources that could go to stronger ones. Slow decisions
    delay promising therapies on their way to patients.
  - >-
    The bottleneck was the analysis loop. Teams preparing a drug candidate’s
    case averaged about 2.3 review cycles before a decision, because reviewers kept
    finding gaps that sent the case back. Each cycle added time to the decision
    and pulled teams away from the science.

builtIntro: >-
  Two AI agents that work before the decision review, so issues are caught
  before the case reaches reviewers.
built:
  - name: Readiness agent
    text: >-
      Shows teams what a strong advancement case needs, including the evidence,
      analyses and structure reviewers expect. Before anything goes to the
      committee, it checks the submitted data for thoroughness and compares the
      full submission against a checklist we developed, so every component of
      the drug candidate’s business case profile is present. New teams get up to
      speed faster and first submissions arrive complete.
  - name: Review simulation agent
    text: >-
      Stress-tests a draft case against the questions the decision committee is
      likely to raise. Teams close the gaps before review instead of after it.

flow:
  alt: >-
    Flow diagram: Phase 1 data goes to the team building the case, where the
    Readiness agent guides it and checks it; the Review simulation agent then
    stress-tests it; the decision committee advances the drug candidate to
    Phase 2 or stops it. The two agent steps are highlighted. A dashed arrow
    runs from the committee back to the team building the case: the rework
    loop.
  caption: Where the two agents sit in the decision process, and the rework loop they are meant to cut.
  steps:
    - label: Phase 1 data
      items: []
    - label: Team builds the case
      items: []
      agent:
        name: Readiness agent
        text: Guides the case and checks it against the completeness checklist.
    - label: Stress test
      items: []
      agent:
        name: Review simulation agent
        text: Tests the draft against the questions the committee is likely to raise.
    - label: Decision committee
      items: []
    - label: Decision
      items: [Advance to Phase 2, or stop]
  loop:
    from: 4
    to: 2
    short: Rework loop
    label: >-
      Rework loop. Reviewers find gaps and send the case back to the team,
      about 2.3 times per case today. The two agents are meant to cut it.

helps:
  - name: Program teams
    text: Fewer rework cycles and more time on the analysis that moves a drug candidate forward.
  - name: Decision-makers
    text: Cases arrive complete and already stress-tested, so reviews focus on the decision itself.
  - name: The pipeline
    text: >-
      Faster, better-informed calls on which drug candidates advance, so resources
      reach the most promising ones sooner.

drove:
  - name: Reframed the ask.
    text: >-
      Stakeholders came asking for a specific agent. I took them back to the
      problem and found the real cost: repeated review cycles, not the single
      step they had named.
  - name: Set success criteria before building.
    text: >-
      I defined measurable targets up front, so the proof of concept had to
      show value before any larger investment.
  - name: Ran it in gated phases.
    text: >-
      Define & Align → Build & Integrate → Deploy. Engineering started each
      phase only after the business had confirmed alignment, which kept the
      build stable.
  - name: Built in ground truth.
    text: >-
      Decision committee members reviewed the issues the agents flagged and
      confirmed whether they were real. That measured accuracy, not just usage.

resultsTitle: Success criteria (proof of concept)
resultsCols: [Measure, Target]
results:
  - [Review cycles per case, Below 1.6 (baseline about 2.3)]
  - [Accuracy predicting issues the committee raises, 70% or higher]
  - [User Net Promoter Score, Above 20]

skills: [Agentic AI, Multi-agent design, Generative AI, Drug development, Proof of concept, Stage-gate delivery, OKRs, Stakeholder alignment]

card:
  blurb: >-
    Designed a two-agent AI proof of concept to cut review cycles on post-Phase
    1 go/no-go decisions.
  tags: [Agentic AI, Drug development, POC]
seo:
  title: AI Agents for Drug Advancement Decisions | Karthik Kumar
  description: >-
    How I designed AI agents that help drug teams build stronger post-Phase 1
    cases, targeting fewer review cycles and faster go/no-go decisions.
next: ai-medical-insights
---
