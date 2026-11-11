---
# Facts from the public repo's README (karthik-v-kumar/financial-planner) and
# BUILD_BRIEF.md §5.2. Screenshots are of the public demo, fictional data only.
order: 5
title: Financial Planning
tier: flagship
status: Live demo
chips:
  - Live demo
  - Public repo
  - Fictional demo data

whatItIs: >-
  A household financial planning app. It covers income, the budget, taxes, card
  benefits, and net worth, and a figure entered once is used everywhere it
  matters.
problem: >-
  Planning a household’s money means keeping pay, the budget, and taxes in
  step. When the same number is typed in more than one place, the copies drift
  apart.
howItWorks:
  - >-
    The tabs feed each other. Property tax entered on the spending plan is the
    property tax used in the tax calculation. Change a salary and the tax tab,
    dashboard, and spending plan all move.
  - >-
    The tax tab computes a full return and does not use a flat effective rate.
    It finds the marginal rate by running the whole return again with $1,000
    more income. Tax brackets and limits are stored as editable data, so a new
    year’s figures are typed in without a new build.
  - >-
    The app is one HTML file with no build step. The public demo runs on
    fictional data and saves only to the visitor’s browser. In the private copy
    I use every day, I can ask an AI agent questions about my own plan.
featuresTitle: What it does
features:
  - name: Dashboard
    art: flow
    text: >-
      Shows net income, the savings rate, and the share of pay that goes to
      fixed costs, with a bar showing where every dollar goes against target
      ranges. A side panel ranks what needs attention and puts the most urgent
      item in red.
  - name: Income plan
    art: list
    text: >-
      Builds each paycheck line by line: gross pay, 401k contribution,
      deductions, tax, and take-home pay. Each person’s latest paystub is
      entered once, and the rest of the app reads from it.
  - name: Spending plan
    art: bars
    text: >-
      Lays out the budget in order: fixed costs first, then investing, savings,
      and what is left to spend freely. Each part is measured against a target
      range.
  - name: Tax planning
    art: doc
    text: >-
      Estimates the year’s federal and California tax as a full return: income,
      deductions, tax owed, and what has already been paid. It also estimates
      the tax cost of selling an investment before you sell it.
  - name: Card benefits
    art: card
    text: >-
      Tracks the recurring credits on credit cards by month, quarter, and half
      year. It marks the ones that closed unused and shows which expire soonest.
  - name: Net worth
    art: chart
    text: >-
      Records what the household owns and what it owes, and charts the total
      over time.
  - name: Year by year
    art: timeline
    text: >-
      Everything that resets in January is kept per calendar year. A new year
      opens from the previous year’s setup, and a closed year stays as a record.

statusLine:
  - Live demo
  - Public repo
links:
  - label: Status
    value: Live demo
  - label: Demo
    value: financial-planner-publicdemo.vercel.app
    href: https://financial-planner-publicdemo.vercel.app
  - label: Repo
    value: karthik-v-kumar/financial-planner
    href: https://github.com/karthik-v-kumar/financial-planner

cardFigure:
  src: ../../assets/work/financial-plan-dashboard.png
  alt: >-
    Financial Planning dashboard, marked Demo data: net income per month, savings
    rate, fixed costs, a bar showing where every dollar goes, a net worth chart,
    and a red panel flagging the most urgent item.
  caption: >-
    The dashboard of the public demo, which runs on fictional data. Screenshot
    from a local copy, Nov 10, 2026.
pageFigure:
  src: ../../assets/work/financial-plan-tax.png
  alt: >-
    Financial Planning tax tab, marked Demo data: total tax, projected
    refund, effective and marginal tax rates, deductions, and tables of gains,
    dividends and interest.
  caption: >-
    The tax planning tab of the public demo, fictional data. Screenshot from a
    local copy, Nov 10, 2026.
---
