import type { CefrLevel, MockExamResult, UserVocabItem } from '../types'
import { loadJSON, saveJSON } from './storage'

const VOCAB_KEY = 'custom-vocab'
const EXAM_KEY = 'mock-exams'

export function loadCustomVocab(): UserVocabItem[] {
  return loadJSON<UserVocabItem[]>(VOCAB_KEY, [])
}

export function saveCustomVocab(items: UserVocabItem[]): void {
  saveJSON(VOCAB_KEY, items)
}

export interface NewCustomVocabInput {
  fi: string
  en: string
  example: string
  exampleEn: string
  theme: string
  level: CefrLevel
  bookSource: string
  chapter?: string
}

export function addCustomVocabItem(input: NewCustomVocabInput): UserVocabItem[] {
  const items = loadCustomVocab()
  const item: UserVocabItem = {
    id: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    ...input,
  }
  const next = [...items, item]
  saveCustomVocab(next)
  return next
}

export function deleteCustomVocabItem(id: string): UserVocabItem[] {
  const next = loadCustomVocab().filter((i) => i.id !== id)
  saveCustomVocab(next)
  return next
}

export function loadMockExamResults(): MockExamResult[] {
  return loadJSON<MockExamResult[]>(EXAM_KEY, [])
}

export function saveMockExamResult(result: MockExamResult): MockExamResult[] {
  const next = [...loadMockExamResults(), result]
  saveJSON(EXAM_KEY, next)
  return next
}
