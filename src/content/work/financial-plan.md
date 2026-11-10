---
# Facts from the public repo's README (karthik-v-kumar/financial-planner) and
# BUILD_BRIEF.md §5.2. Screenshots are of the public demo, fictional data only.
order: 5
title: Financial Plan
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
    Six tabs feed each other: dashboard, income plan, spending plan, tax
    planning, card benefits, and net worth. Property tax entered on the spending
    plan is the property tax used in the tax calculation. Change a salary and
    the tax tab, dashboard, and spending plan all move.
  - >-
    The tax tab computes a full return and does not use a flat effective rate.
    It finds the marginal rate by running the whole return again with $1,000
    more income. Tax brackets and limits are stored as editable data, so a new
    year’s figures are typed in without a new build.
  - >-
    The app is one HTML file with no build step. The public demo runs on
    fictional data and saves only to the visitor’s browser. In the private copy
    I use every day, I can ask an AI agent questions about my own plan.
limits: >-
  There are no bank connections. The app models what should happen and does not
  record what did. The tax engine does not handle AMT, and nothing in it is tax
  or financial advice.

statusLine:
  - Live demo
  - Public repo
  - Demo runs on fictional data
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
    Financial Plan dashboard, marked Demo data: net income per month, savings
    rate, fixed costs, a bar showing where every dollar goes, a net worth chart,
    and a red panel flagging the most urgent item.
  caption: >-
    The dashboard of the public demo, which runs on fictional data. Screenshot
    from a local copy, Nov 10, 2026.
pageFigure:
  src: ../../assets/work/financial-plan-tax.png
  alt: >-
    Financial Plan tax planning tab, marked Demo data: total tax, projected
    refund, effective and marginal tax rates, deductions, and tables of gains,
    dividends and interest.
  caption: >-
    The tax planning tab of the public demo, fictional data. Screenshot from a
    local copy, Nov 10, 2026.
---
