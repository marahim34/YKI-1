import { VOCAB_BANK } from '../data/vocab'

export interface WordMeaning {
  fi: string
  en: string
  bn?: string
}

// This module is dynamically imported only when the user actually asks for
// a word's meaning (see SelectionSpeaker.tsx) — it pulls in the ~1000-word
// VOCAB_BANK, which would otherwise bloat the always-loaded entry bundle if
// imported eagerly. Deliberately doesn't also pull in YKI_CHAPTERS for a
// little extra vocabSummary coverage — that would drag along the entire
// (much larger) YkiPrep content chunk for comparatively little gain.

function normalize(raw: string): string {
  // Strip surrounding punctuation/quotes a drag-selection often picks up,
  // and case-fold — the dictionary itself is stored in lowercase base form.
  return raw
    .trim()
    .toLowerCase()
    .replace(/^[^\p{L}]+|[^\p{L}]+$/gu, '')
}

let dictionary: Map<string, WordMeaning> | null = null

function buildDictionary(): Map<string, WordMeaning> {
  const map = new Map<string, WordMeaning>()
  for (const item of VOCAB_BANK) {
    const key = normalize(item.fi)
    if (key && !map.has(key)) map.set(key, { fi: item.fi, en: item.en, bn: item.bn })
  }
  return map
}

function getDictionary(): Map<string, WordMeaning> {
  if (!dictionary) dictionary = buildDictionary()
  return dictionary
}

// Ordered longest-first so a long, correct suffix is tried before a short
// one that would strip too little (talossa -> try "ssa" before bare "a",
// so we land on "talo" rather than "taloss"). This is a best-effort
// heuristic, NOT a real Finnish lemmatizer — consonant gradation (katu ->
// kadun) and many irregular stems won't resolve correctly. That's fine: a
// stripped form only ever counts as a hit if it lands on a genuine
// dictionary entry, so a bad guess just falls through to "not found"
// rather than ever surfacing a wrong translation.
const CANDIDATE_SUFFIXES = [
  'lta', 'ltä', 'lla', 'llä', 'lle', 'ssa', 'ssä', 'sta', 'stä', 'ksi', 'tta', 'ttä', 'nsa', 'nsä', 'mme', 'nne',
  'na', 'nä', 'ta', 'tä', 'ni', 'si',
  'n', 'a', 'ä', 't', 'i',
]

export function findMeaning(rawSelection: string): WordMeaning | null {
  const dict = getDictionary()
  const normalized = normalize(rawSelection)
  if (!normalized) return null

  const exact = dict.get(normalized)
  if (exact) return exact

  // Only try de-inflecting a single word — a multi-word selection is either
  // an exact phrase match (handled above) or out of scope for this heuristic.
  if (/\s/.test(normalized)) return null

  for (const suffix of CANDIDATE_SUFFIXES) {
    if (!normalized.endsWith(suffix)) continue
    const stem = normalized.slice(0, normalized.length - suffix.length)
    if (stem.length < 3) continue
    const hit = dict.get(stem)
    if (hit) return hit
  }
  return null
}
