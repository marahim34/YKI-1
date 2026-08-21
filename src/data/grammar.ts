import type { GrammarTopic } from '../types'
import { CORE_GRAMMAR_TOPICS } from './grammarCore'
import { CASE_GRAMMAR_TOPICS } from './grammarCases'
import { VERB_GRAMMAR_TOPICS } from './grammarVerbs'
import { EXTRA_GRAMMAR_TOPICS } from './grammarExtra'

// The full Finnish grammar reference, A1 -> B2: the 30 foundational topics
// tied to the curriculum's grammarFocus points (grammarCore.ts), plus the
// wider case system and word classes (grammarCases.ts) and deep-dive verb/
// structure/register topics (grammarVerbs.ts) that round it out into a
// standalone, comprehensive reference. Original explanations — not copied
// from any textbook.
export const GRAMMAR_TOPICS: GrammarTopic[] = [...CORE_GRAMMAR_TOPICS, ...CASE_GRAMMAR_TOPICS, ...VERB_GRAMMAR_TOPICS, ...EXTRA_GRAMMAR_TOPICS]

export function grammarTopic(id: string): GrammarTopic | undefined {
  return GRAMMAR_TOPICS.find((t) => t.id === id)
}

export function grammarTopicsFor(ids: string[]): GrammarTopic[] {
  return ids.map((id) => grammarTopic(id)).filter((t): t is GrammarTopic => Boolean(t))
}
