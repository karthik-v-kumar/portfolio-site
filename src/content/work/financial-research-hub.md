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
featuresTitle: What it does
featuresNote: >-
  Each part is explained for a reader who has never traded. The three
  screenshots are from the public demo: market data is a snapshot from Nov 9,
  2026, and option prices are modelled.
features:
  - name: Watchlist
    text: >-
      A watchlist is the set of stocks you are following. The dashboard lists
      each one with its price, a 30-day trend line, how far it has fallen from
      its highest price of the past year, and today’s move. You can sort,
      filter, and group the list by industry.
    figure:
      src: ../../assets/work/financial-research-hub-watchlist.png
      alt: Watchlist table of 25 tickers with trend lines, prices and scores, beside upcoming events and market headlines.
  - name: Setup score
    text: >-
      Every stock gets a score from 0 to 100 for how well it fits a “buy near
      the lows” checklist: a company whose price has dropped a long way and
      shows signs the selling is ending. The score is shown rule by rule, so
      you can see which checks passed, which failed, and which had no data.
    art: score
  - name: Price chart
    text: >-
      A price history chart with the measures traders use to judge direction:
      the average price over the last 50 and 200 days, the year’s high and low,
      and RSI, a 0 to 100 gauge of whether a stock has been sold heavily (low)
      or bought heavily (high). The estimated fair value is drawn on the same
      chart.
    art: chart
  - name: Sentiment and the contrarian read
    text: >-
      Contrarian investing means buying when most people are selling. This
      section tracks the signs of that: how heavily the stock is being bet
      against, whether company insiders are buying or selling, and whether
      traders are paying more for protection against a fall than for bets on a
      rise. It then says in one sentence where the stock stands.
    art: sentiment
  - name: Fair value
    text: >-
      Fair value is an estimate of what a company’s shares are worth, which can
      differ from what they cost today. The app works it out several ways,
      including from expected earnings, from the stock’s own history, and from
      similar companies. It shows each result as a price range against today’s
      price, and says which methods it left out and why.
    figure:
      src: ../../assets/work/frh-valuation.png
      alt: Valuation panel with horizontal bars showing each method’s price range against today’s price, and a table of valuation multiples.
  - name: Catalyst calendar
    text: >-
      A catalyst is a scheduled event that can move a price, such as a
      company’s earnings report or a government inflation release. The calendar
      shows them by month, with a short note on why each one matters.
    art: calendar
  - name: Economy
    text: >-
      A plain-language read of the US economy from Federal Reserve data:
      inflation, jobs, growth, interest rates, recession risk, and market
      stress. Each one gets a label such as “running hot” or “solid”, followed
      by what it means for buying stocks now.
    art: economy
  - name: Glossary
    text: >-
      Every term in the app is explained in plain language. Words with a dotted
      underline open their definition on the spot, and a glossary page lists
      them all.
    art: glossary
  - name: Option chain
    text: >-
      An option is a contract that gives the right to buy or sell a stock at a
      set price by a set date. The option chain lists the contracts for a stock
      with their prices and how many have traded. An unusual activity table
      flags contracts trading far more than normal, which can show where large
      traders are placing bets.
    art: chain
  - name: Strategy builder
    text: >-
      Options can be combined into a strategy, such as buying one contract and
      selling another to limit both the cost and the gain. You pick a strategy
      from a list, and the builder shows what it costs, the most you can make,
      the most you can lose, the price at which you break even, and the
      estimated chance of a profit.
    art: builder
  - name: Trade tracker
    text: >-
      Trades placed at a broker can be saved and tracked. Each card shows what
      was paid, what the position is worth now, the profit or loss since it was
      opened, and how many days remain. An alert can be set for a chosen profit
      or loss.
    art: trades
  - name: Profit and loss table
    text: >-
      A grid shows the profit or loss for each combination of stock price and
      date until the contracts expire. Green cells are gains and red cells are
      losses. Sliders let you test a bigger price move or a change in how
      large a swing the market expects.
    figure:
      src: ../../assets/work/frh-payoff.png
      alt: Grid of profit and loss by stock price and date, green above the breakeven price and red below it.
  - name: Access for AI assistants
    text: >-
      With a personal access key, an AI assistant can read the watchlist,
      scores, valuations, events, and news, and can add or remove tickers. It
      connects over MCP or a REST API. This part needs an account, so it is not
      in the public demo.
    art: agent

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
---
