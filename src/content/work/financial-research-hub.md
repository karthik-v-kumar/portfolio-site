---
# Facts from the private repo's README. No screenshots: the app carries its old
# product name, which must not appear on this site (BUILD_BRIEF.md §6).
order: 6
title: Financial Research Hub
tier: flagship
status: Private repo
chips:
  - Private repo
  - No public demo

whatItIs: >-
  A trading research site for a personal watchlist. For each ticker it shows
  prices, technical indicators, a setup score, a fair value estimate, catalysts,
  and news.
problem: >-
  Deciding whether a stock is worth buying near its lows means checking
  catalysts, fundamentals, the chart, and sentiment. Those sit on different
  sites.
howItWorks:
  - >-
    A setup score rates each stock from 0 to 100 on how closely it matches a
    “buy near the lows” checklist. The score is broken down rule by rule and
    carries warnings for upcoming earnings and for stocks that are still
    falling.
  - >-
    Fair value blends four methods: a discounted cash flow model, the stock’s
    own historical multiples, multiples relative to peers, and a reverse DCF.
    The result is a base case with a bull and bear range.
  - >-
    A data pipeline on GitHub Actions fetches the data, computes the technicals
    and valuations, and writes JSON files that the site reads. A Refresh button
    queues a new run.
limits: >-
  There is no public demo. The app needs an account and the repo is private.

statusLine:
  - Private repo
  - No public demo
links:
  - label: Repo
    value: Private
  - label: Demo
    value: None public
---
