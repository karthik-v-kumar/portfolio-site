---
# Facts from the private repo's README. Screenshots are of the public demo, which
# runs under a neutral name: the old product name must not appear on this site
# (BUILD_BRIEF.md §6).
order: 6
title: Financial Research Hub
tier: flagship
status: Live demo
chips:
  - Live demo
  - Private repo

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
  - >-
    An options section shows option chains and unusual activity, a strategy
    builder with payoff and what-if analysis, and a tracker for trades held at
    a broker.
limits: >-
  The public demo is a cut-down copy. Its market data is a snapshot for a short
  example watchlist, its option chains are modelled and are not market quotes,
  and its saved trades are invented examples.

statusLine:
  - Live demo
  - Private repo
links:
  - label: Status
    value: Live demo
  - label: Demo
    value: financial-research-hub-publicdemo.vercel.app
    href: https://financial-research-hub-publicdemo.vercel.app
  - label: Repo
    value: Private

cardFigure:
  src: ../../assets/work/financial-research-hub-watchlist.png
  alt: >-
    Research hub dashboard in demo mode: a watchlist of 25 tickers with price
    trend, percent off high, RSI, setup score and sentiment, beside upcoming
    catalysts and market headlines.
  caption: >-
    The watchlist dashboard of the public demo. Market data is a snapshot from
    Nov 9, 2026. Screenshot from a local copy.
pageFigure:
  src: ../../assets/work/financial-research-hub-trades.png
  alt: >-
    Research hub options page in demo mode, My trades tab: an example long call
    with profit and loss since entry, cost, current value, breakeven and days
    left.
  caption: >-
    The trade tracker in the public demo. The trades are invented examples and
    the option prices are modelled. Screenshot from a local copy.
---
