---
# Facts from the public repo's README and AGENT_API.md (karthik-v-kumar/household-tracking).
order: 8
title: Stocked
tier: index
status: Live
chips:
  - Live
  - Public repo

whatItIs: >-
  A shared grocery and household supplies app for a two-person household. It
  keeps store lists, pantry stock, and filter replacement dates in one place
  that both people see.
problem: >-
  My household kept its shopping in iPhone Reminders. We kept adding the same
  weekly items again, splitting lists by store, forgetting when bulk goods were
  running out, and losing track of when furnace and car cabin filters were due.
howItWorks:
  - >-
    The lists, the pantry, and the filters feed each other. A pantry item
    marked low goes onto the right store list with one tap, and buying it
    restocks the pantry. A filter that is due with no spare on the shelf goes
    on a shopping list, and buying the spare restocks the shelf.
  - >-
    Checking off an item does not erase it. After a shopping trip you clear the
    bought items, and the usuals stay available for next time.
featuresTitle: What it does
features:
  - name: Lists per store
    art: list
    text: >-
      Grocery, warehouse, and pharmacy lists to start, and you can add or delete
      stores. Each list has its own name, icon, and color.
  - name: Usuals tray
    art: economy
    text: >-
      Items you buy often sit in a tray on each list. You tap or drag only the
      ones you need this week.
  - name: Pantry
    art: levels
    text: >-
      Bulk and slow-moving goods marked full, okay, low, or out, with a warning
      before they run out.
  - name: Filters
    art: timeline
    text: >-
      Parts that are replaced on a schedule, such as a furnace air filter or a
      fridge water filter, with the replacement interval, the last date, and the
      spares on hand.
  - name: Household sharing
    art: sync
    text: >-
      One person creates a household and shares a short invite code. Both people
      see the same lists on their phones.
  - name: Access for AI assistants
    art: agent
    text: >-
      A household key lets an AI assistant read the lists, pantry, and filters.
      A write key can also change them. A key cannot invite or remove people.

statusLine:
  - Live
  - Public repo
links:
  - label: Status
    value: Live
  - label: App
    value: stocked.grok.me
    href: https://stocked.grok.me
  - label: Repo
    value: karthik-v-kumar/household-tracking
    href: https://github.com/karthik-v-kumar/household-tracking
---
