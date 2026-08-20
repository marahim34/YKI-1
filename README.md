# Matka YKI:hin — YKI Study Companion

A personal study companion for going from basic Finnish (A1) to YKI **keskitaso**
(B1–B2) in about 7–8 months. Built as a single-page web app you can run locally
or deploy for free, so it's available on your phone or computer.

## What's in it

- **32-week roadmap** (`/roadmap`) across 3 phases (A1→A2, A2→B1, B1→B2), each
  week with a topic, grammar focus, and a pointer to which chapters of
  **Suomen Mestari** or **Oma Suomi** cover similar ground (approximate —
  match it to your own edition's table of contents).
- **All 4 YKI sections** per week: reading, listening, writing, speaking.
  - Listening exercises use your browser's built-in text-to-speech
    (Web Speech API) to read Finnish scripts aloud — no audio files needed.
    Works best in Chrome/Edge; quality depends on the Finnish voices your
    OS/browser ships with.
  - Speaking exercises give you a prep timer + a speaking timer (like the
    real exam) and can optionally record your voice locally (via your
    microphone) so you can play back and self-review — nothing is uploaded
    anywhere.
  - Writing exercises have a word-count target, a timer, a self-assessment
    rubric, and a model answer to compare against.
- **Vocabulary trainer** (`/vocab`) — spaced repetition (simplified SM-2)
  flashcards over an original ~130-word starter bank tagged by topic/level.
- **My Books** (`/my-books`) — add your own words and example sentences
  straight from your physical copies of Suomen Mestari, Oma Suomi, or
  anything else. They flow into the same spaced-repetition deck.
- **Koekierros / mock exam** (`/exam`) — run all 4 sections back-to-back
  under timed conditions using one week's material, YKI-exam style.
- **Progress** (`/progress`) — streak, XP, per-skill stats, mock exam
  history, and JSON export/import for backups (everything is stored only in
  your browser's `localStorage`, on your device).

### Honest scope note

All 32 weeks have a full topic/grammar/vocabulary plan. **3 sample weeks**
(1, 11, and 23 — one from each phase) currently have complete original
reading/listening/writing/speaking exercises built out, so you can see the
full experience end to end. The rest of the weeks are ready to be filled in
the same way — see "Adding more content" below, or just ask for more weeks
to be built out in a follow-up session.

## Running it locally

```bash
npm install
npm run dev
```

Then open the printed `localhost` URL.

## Building & deploying

```bash
npm run build     # outputs to dist/
npm run preview   # preview the production build locally
```

This repo includes a GitHub Actions workflow
(`.github/workflows/deploy.yml`) that builds and deploys automatically to
**GitHub Pages** on every push to `main`. To turn it on: in the repo's
**Settings → Pages**, set "Source" to **GitHub Actions**. After the next
push to `main`, your app will be live at
`https://<your-username>.github.io/<repo-name>/`.

The app uses relative asset paths and a hash-based router
(`/#/roadmap`, etc.), so it also deploys as-is to Vercel, Netlify, or any
static host with zero configuration — just point them at `npm run build`
and the `dist/` folder.

Everything runs client-side and stores data in `localStorage`, so there's no
backend, database, or account system — your progress lives in the browser
you use it in. Use **Progress → Vie tiedot (JSON)** regularly to back up your
data, and **Tuo varmuuskopio** to restore it (e.g. after switching browsers
or devices).

## Adding more content

Everything content-related lives in `src/data/`:

- `src/data/curriculum.ts` — the 32-week roadmap (topics, grammar focus,
  vocab themes, book references). Edit a week's `bookRefs` to match your
  exact book editions.
- `src/data/vocab.ts` — the starter vocabulary bank. Add rows to the `ROWS`
  array following the existing `[fi, en, example, exampleEn, theme, level]`
  pattern.
- `src/data/content/weekN.ts` — full 4-skill content for a given week
  (see `week1.ts`, `week11.ts`, `week23.ts` for the pattern). To build out
  another week, copy one of these files, adjust the `weekId`, and register
  the new exports in `src/data/content/index.ts`. Once a week has all 4
  exercises registered there, it automatically shows up as fully available
  throughout the app (dashboard, roadmap, week page).

You don't need to touch this to keep learning day-to-day, though — the
**My Books** page is the fast path for adding your own vocabulary straight
from whatever chapter you're reading.

## Installing on your phone (PWA)

The site is an installable Progressive Web App. On Android/desktop Chrome,
open the deployed site and use "Install app" / "Add to Home screen" from the
browser menu — it'll behave like a native app icon and works offline after
the first visit (service worker precaches the app shell). iOS Safari's
home-screen icon support is more limited (no offline caching there), but the
site still works fine as a regular bookmark.

## Tech

Vite + React + TypeScript + Tailwind CSS v4 + React Router (hash mode) +
vite-plugin-pwa. No backend. No analytics. No accounts.
