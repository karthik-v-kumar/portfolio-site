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
  A stock research site built around a personal watchlist. For each stock it
  shows the price history, a score for how good a buying opportunity it looks,
  a valuation that helps judge the right time to buy, upcoming events, and
  news.
problem: >-
  Deciding whether a stock is worth buying after a fall means checking upcoming
  events, the company’s finances, the price chart, and what other investors are
  doing. That information sits on different sites.
howItWorks:
  - >-
    The app is built around one approach: buy a stock after its price has
    fallen a long way. Each screen covers one part of that decision: how far it
    has fallen, what it is worth, whether the selling is ending, and what is
    coming up.
  - >-
    Fair value is never a single number. Four methods each give a price range,
    the app blends them into a base case with a high and a low case, and it
    shows which methods it left out.
  - >-
    A data pipeline runs on GitHub Actions. It fetches prices and company data,
    computes every score and valuation, and writes the results to files that
    the site reads. A Refresh button starts a new run.
featuresTitle: What it does
featuresNote: >-
  The three screenshots are from the public demo: market data is a snapshot
  from Nov 9, 2026, and option prices are modeled.
features:
  - name: Watchlist
    text: >-
      Every stock you follow in one table: price, 30-day trend, distance from
      the 52-week high, RSI, setup score, sentiment, and the day’s move. Sort,
      filter, and group by sector.
    figure:
      src: ../../assets/work/financial-research-hub-watchlist.png
      alt: Watchlist table of 25 tickers with trend lines, prices and scores, beside upcoming events and market headlines.
  - name: Setup score
    text: >-
      A 0 to 100 score for how closely a stock matches a “buy near the lows”
      checklist, broken down rule by rule, with warnings for upcoming earnings
      and for stocks still falling.
    art: score
  - name: Price chart
    text: >-
      Candles or a line, with 50-day and 200-day averages, the 52-week range,
      volume, RSI, and the fair value range drawn on the same chart.
    art: chart
  - name: Sentiment and the contrarian read
    text: >-
      Short interest, insider buying and selling, the put/call ratio, and news
      sentiment, combined into a three-stage read of whether the selling is
      ending.
    art: sentiment
  - name: Fair value
    text: >-
      Four valuation methods, each shown as a price range against today’s price
      and blended into a base case with bull and bear cases. The gap to today’s
      price helps judge the right time to buy.
    figure:
      src: ../../assets/work/frh-valuation.png
      alt: Valuation panel with horizontal bars showing each method’s price range against today’s price, and a table of valuation multiples.
  - name: Catalyst calendar
    text: >-
      Earnings, economic releases, and notable company events by month, each
      with a note on why it matters.
    art: calendar
  - name: Economy
    text: >-
      Inflation, jobs, growth, rates, recession risk, and market stress from
      Federal Reserve data, each with a plain label and what it means for buying
      now.
    art: economy
  - name: Glossary
    text: >-
      Every term in the app has a plain-language definition, one tap away.
    art: glossary
  - name: Option chain
    text: >-
      Every expiration and strike with prices, volume, open interest, and
      implied volatility, plus a table of unusual activity ranked by premium.
    art: chain
  - name: Strategy builder
    text: >-
      Pick a strategy or build one leg by leg. The builder shows the cost,
      maximum profit, maximum loss, breakeven, and chance of profit.
    art: builder
  - name: Trade tracker
    text: >-
      Save a trade placed at a broker and track its profit and loss since entry,
      current value, breakeven, and days left, with alerts at a chosen gain or
      loss.
    art: trades
  - name: Profit and loss table
    text: >-
      Profit or loss for every combination of stock price and date to
      expiration, with sliders for the price range and implied volatility.
    figure:
      src: ../../assets/work/frh-payoff.png
      alt: Grid of profit and loss by stock price and date, green above the breakeven price and red below it.
  - name: Access for AI assistants
    text: >-
      With a personal access key, an AI assistant can read the watchlist,
      scores, valuations, events, and news, and add or remove tickers, over MCP
      or a REST API.
    art: agent

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
---
