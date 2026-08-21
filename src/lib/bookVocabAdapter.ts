import type { BookPracticeVocabItem, VocabItem, CefrLevel } from '../types'

const TARKOITTAA_RE = /tarkoittaa\s+['"]([^'"]+)['"]/i

// Book-practice vocab quizzes are authored as MCQ questions ("Mikä sana
// tarkoittaa 'X'?" + Finnish-word options), not as fi/en pairs. Most
// questions follow that pattern closely enough to extract a clean
// word<->meaning pair for the match/fill-gap games; questions that don't
// match (grammar-in-context questions like "Missä nukut?") are simply
// skipped rather than guessed at.
export function bookVocabToItems(items: BookPracticeVocabItem[], chapterId: string, theme: string, level: CefrLevel): VocabItem[] {
  const out: VocabItem[] = []
  items.forEach((item, i) => {
    const match = item.question.match(TARKOITTAA_RE)
    const fi = item.options[item.correctIndex]
    if (!match || !fi) return
    out.push({
      id: `${chapterId}-bv${i}`,
      fi,
      en: match[1],
      example: item.question,
      exampleEn: '',
      theme,
      level,
      source: 'book-practice',
    })
  })
  return out
}
