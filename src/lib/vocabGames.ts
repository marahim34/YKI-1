import type { VocabItem, McqQuestion } from '../types'

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function buildMcqQuestions(items: VocabItem[], count = 6): McqQuestion[] {
  const pool = shuffle(items).slice(0, Math.min(count, items.length))
  return pool
    .map((item) => {
      const distractorPool = items.filter((i) => i.id !== item.id)
      const distractors = shuffle(distractorPool).slice(0, Math.min(3, distractorPool.length))
      const options = shuffle([item, ...distractors])
      return {
        id: item.id,
        question: `Mitä tarkoittaa "${item.fi}"?`,
        options: options.map((o) => o.en),
        correctIndex: options.findIndex((o) => o.id === item.id),
      }
    })
    .filter((q) => q.options.length >= 2)
}

export interface GapQuestion {
  id: string
  before: string
  after: string
  answer: string
  base: string
  hintEn: string
  hintBn?: string
}

const PUNCT_RE = /[.,!?:;"'()]/g

export function buildGapQuestions(items: VocabItem[], count = 6): GapQuestion[] {
  const all: GapQuestion[] = []
  for (const item of items) {
    if (!item.example) continue
    const stemLen = Math.max(3, Math.ceil(item.fi.length * 0.55))
    const stem = item.fi.slice(0, stemLen).toLowerCase()
    const tokens = item.example.split(/(\s+)/)
    let matchIndex = -1
    let matchedWord = ''
    for (let i = 0; i < tokens.length; i++) {
      const clean = tokens[i].replace(PUNCT_RE, '')
      if (!clean) continue
      if (clean.toLowerCase().startsWith(stem)) {
        matchIndex = i
        matchedWord = clean
        break
      }
    }
    if (matchIndex === -1) continue
    all.push({
      id: item.id,
      before: tokens.slice(0, matchIndex).join(''),
      after: tokens.slice(matchIndex + 1).join(''),
      answer: matchedWord,
      base: item.fi,
      hintEn: item.en,
      hintBn: item.bn,
    })
  }
  return shuffle(all).slice(0, Math.min(count, all.length))
}
