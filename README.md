# Roberts Oxygen — Concept Redesign

An unsolicited concept redesign of [robertsoxygen.com](https://www.robertsoxygen.com), built as a portfolio piece.

**This is not affiliated with, endorsed by, or produced on behalf of Roberts Oxygen Company, Inc.** All company facts referenced (history, locations, phone numbers, addresses) are drawn from the public robertsoxygen.com site as of August 2026.

## What this is

A responsive homepage concept exploring "big capability, local service" — Roberts' actual growth from a single 1966 Rockville, MD distributor into 57 branches across 9 states — built around their real brand green, real (small-scale, unretouched) photography pulled from their own site, and a working location search over all 57 real branch addresses.

Full write-up of the design process (assessment, IA, visual direction) lives in the conversation this was built from — this repo is the shipped concept.

## Stack

Plain HTML/CSS/JS, no framework. `npm run build` (scripts/build.mjs) copies only the public files into `dist/` and strips every HTML, CSS and JS comment; production serves `dist/` with `serve`. README, package.json, `source-assets/` and `artifact_fragment.html` are never published.

```
index.html         homepage
styles.css          design system + layout
script.js           location search/filter, nav, sticky header
images/             5 real Roberts Oxygen photos, cropped from their site header
fonts/              Oswald, IBM Plex Sans/Mono (woff2, self-hosted)
artifact_fragment.html   single-file build (fonts + images inlined) used for the shareable preview
source-assets/      original header sprite this project's photography was cropped from
```

## Run locally

```bash
npm install
npm run build
npm start
```
