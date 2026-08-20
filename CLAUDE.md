# CLAUDE.md

Guidance for Claude Code (or any future agent) working in this repository.

## What this is

"Matka YKI:hin" — a personal, single-user Finnish study web app for going from
A1 to YKI keskitaso (B1–B2) over a 32-week curriculum. Vite + React 19 +
TypeScript + Tailwind CSS v4 + React Router (hash mode). No backend, no
accounts, no analytics — everything persists in the browser's `localStorage`.
Deployed as a static site to GitHub Pages via `.github/workflows/deploy.yml`
(builds and deploys automatically on every push to `main`).

Run locally: `npm install && npm run dev`. Build: `npm run build` (runs
`tsc -b && vite build` — treat a failing `tsc -b` as a real error to fix, not
something to work around). `npm run lint` runs `oxlint`.

## Directory map

```
src/
  types.ts                 — every shared interface/type. Read this first.
  data/
    curriculum.ts           — the 32-week roadmap (topics, grammar focus,
                               grammarTopicIds, vocab themes, book refs).
                               WEEKS is the single source of truth for week
                               metadata; getWeek(id) looks one up.
    vocab.ts                 — starter vocabulary bank (original content),
                               tagged by theme/level, feeds the SRS trainer.
    grammar.ts                — the full grammar reference (~30 topics,
                               A1→B2), each with explanation + examples.
                               grammarTopic(id) / grammarTopicsFor(ids).
    bookPractice.ts            — book+chapter-indexed practice drills for
                               Suomen Mestari 1-3 / Oma Suomi 1-2 (original
                               content, not copied from the books).
    content/
      weekN.ts                 — full 4-skill content (reading, listening,
                               writing, speaking) for week N. One file per
                               week that has content; see "Adding a week's
                               content" below.
      index.ts                  — imports every weekN.ts and assembles
                               READING_BY_WEEK / LISTENING_BY_WEEK /
                               WRITING_BY_WEEK / SPEAKING_BY_WEEK.
                               weekHasFullContent(id) is derived from these
                               maps, not from any flag on the Week object.
  lib/
    storage.ts                 — thin localStorage JSON get/set (prefixed keys).
    progress.ts                  — ProgressState: streak, XP, completed
                               exercise ids, exercise results, SRS state.
    srs.ts                        — simplified SM-2 spaced repetition
                               (3 grades: again/good/easy).
    tts.ts                          — Web Speech API wrapper + useFinnishSpeech
                               hook, used by the listening exercise (no audio
                               files — the browser reads the script aloud).
    timer.ts                         — useCountdown hook, used by writing/
                               speaking/mock-exam timers.
    customContent.ts                  — user-added vocab ("My Books") and
                               mock exam result history.
  context/ProgressContext.tsx    — app-wide progress state provider.
  components/                       — shared UI: Layout/nav, LevelPill,
                               ProgressBar, McqQuiz, GrammarPanel,
                               FillInDrill, BookVocabQuiz, ExerciseHeader.
  pages/                             — one file per route; pages/exercises/
                               holds Reading/Listening/Writing/Speaking.
```

## Data model conventions (important — keep these exact)

- **Exercise ids** follow `r-w{weekId}` (reading), `l-w{weekId}` (listening),
  `w-w{weekId}` (writing), `s-w{weekId}` (speaking) — e.g. week 12's reading
  exercise is `r-w12`. Several places depend on this pattern (progress
  tracking, `Roadmap.tsx`'s completion count, the mock exam). Don't deviate.
- **Week content exports** follow `week{N}Reading`, `week{N}Listening`,
  `week{N}Writing`, `week{N}Speaking` from `src/data/content/week{N}.ts`.
- A week is "has content" purely by being registered in
  `content/index.ts`'s four `*_BY_WEEK` maps — there's no separate flag to
  flip. (`Week.hasContent` in `curriculum.ts` is documentation only, not read
  by any component — don't rely on it.)
- `Week.grammarTopicIds` links a week to entries in `grammar.ts` — this is
  what `<GrammarPanel>` renders. If you add a new grammar topic, also link it
  from any week (or book-practice chapter) it's relevant to, or it'll only be
  reachable from the standalone `/grammar` page.
- Review weeks (`isReviewWeek: true`, weeks 10/22/30) and exam weeks
  (`isExamWeek: true`, weeks 31/32) intentionally have **no** `content/weekN.ts`
  file — `WeekDetail.tsx` renders a dedicated panel for them instead (linking
  to `/vocab` and `/exam`) rather than fabricating filler reading/listening
  content for a "review" or "full mock exam" week.

## Adding a week's 4-skill content

1. Copy the shape of an existing file, e.g. `content/week12.ts`.
2. Write **original** Finnish content — never copy text from Suomen Mestari,
   Oma Suomi, or any other copyrighted book. Match the CEFR level already set
   for that week in `curriculum.ts` (`levelRange`), and actually exercise the
   week's `grammarFocus` in the text/dialogue/prompt, not just the vocab theme.
3. Reading: 3-4 paragraphs, 5 `McqQuestion`s. Listening: a short dialogue
   (`Name: line` format) or monologue, 4 `McqQuestion`s. Writing: instructions
   + minWords/maxWords/timeMinutes + 4-5 Finnish self-check rubric bullets +
   a full `modelAnswer`. Speaking: instructions + prepSeconds/speakSeconds +
   4-5 `helpfulPhrases`.
4. Register the four exports in `content/index.ts`'s four maps.
5. Run `npx tsc -b` — it will catch missing/misnamed exports immediately.

If you're generating several weeks at once, this is very parallelizable
across background agents (each agent owns its own `weekN.ts` files and
touches no shared file) — the pattern used to build out weeks 2-29 in this
repo's history. Do the map registration yourself afterward, sequentially.

## Adding a grammar topic

Add an entry to `GRAMMAR_TOPICS` in `src/data/grammar.ts` (id, title, level,
category, summary, explanation paragraphs, 3-5 `examples` with fi/en pairs).
Link it from any `Week.grammarTopicIds` or `BookPracticeChapter.grammarTopicIds`
that should surface it in their expandable "Kielioppi" panel.

## Adding book-practice content

`src/data/bookPractice.ts` exports `BOOK_PRACTICE: BookPracticeChapter[]`,
grouped by `book` (one of the 5 fixed book name strings) and `chapterLabel`.
Each chapter has a 4-item multiple-choice `vocabQuiz` and a 4-item
`grammarDrill` (fill-in-the-blank with a single accepted `answer`, checked
case-insensitively). Same rule as week content: 100% original material, only
the book/chapter label ties it to the real textbook.

## Progress & storage

Everything lives in `localStorage` under the `yki-companion:` prefix (see
`lib/storage.ts`): `progress`, `custom-vocab`, `mock-exams`. There's no
migration system — if you change `ProgressState`'s shape, either keep it
backward-compatible or accept that existing users' state resets for that key.
`Progress.tsx` has JSON export/import for backups; keep that in sync with any
new persisted keys.

## Things that look like they'd work but don't

- **`base: './'` + `HashRouter`** in `vite.config.ts`/`main.tsx` is
  deliberate — it makes the build deployable to GitHub Pages under a repo
  subpath (or any static host) with zero server-side rewrite config. Don't
  switch to `BrowserRouter` without also solving the GitHub Pages 404/rewrite
  problem.
- **GitHub Pages deploys can fail silently-ish** even with the workflow
  correctly configured: the auto-created `github-pages` **environment** has
  its own "Deployment branches and tags" allow-list, separate from the repo's
  default branch setting and separate from repo-level Actions permissions.
  If `deploy-pages` fails instantly with zero log output, check
  Settings → Environments → github-pages → deployment branch policy first.
  Also check Settings → Actions → General → Workflow permissions is "Read
  and write" (the restrictive default blocks the `pages: write` permission
  the workflow requests even though it's declared in the YAML).
- The **listening exercise has no audio files** — it uses
  `window.speechSynthesis` live. Voice availability/quality depends entirely
  on the user's OS/browser; there's a fallback message when no Finnish voice
  is found, don't remove it.

## Testing this app

There's no test suite. Verify changes with:
1. `npx tsc -b` (type errors) and `npm run build` (full build).
2. A Playwright smoke pass if you touch interactive flows — Chromium is
   pre-installed in this environment at `/opt/pw-browsers/chromium`
   (`playwright install` is unnecessary and will fail/is wasteful — launch
   with `executablePath: '/opt/pw-browsers/chromium'`). `npm run preview`
   after building, then drive it with `chromium.launch(...)`.
