import type { CefrLevel, ProgressState } from '../types'
import { getWeek } from '../data/curriculum'
import { grammarTopic } from '../data/grammar'

export interface WeakSpot {
  topicId: string
  title: string
  level: CefrLevel
  avgScore: number
  attempts: number
}

// Attributes each scored exercise result to the grammar topics linked to its
// week (Week.grammarTopicIds), then surfaces the lowest-scoring topics as
// focus areas. Coarse (a whole exercise's score is credited to every topic
// the week links), but needs no new per-question tracking to be useful.
export function computeWeakSpots(state: ProgressState, limit = 6): WeakSpot[] {
  const totals = new Map<string, { sum: number; count: number }>()

  for (const result of state.exerciseResults) {
    if (result.score === undefined) continue
    const week = getWeek(result.weekId)
    if (!week) continue
    for (const topicId of week.grammarTopicIds) {
      const entry = totals.get(topicId) ?? { sum: 0, count: 0 }
      entry.sum += result.score
      entry.count += 1
      totals.set(topicId, entry)
    }
  }

  const spots: WeakSpot[] = []
  for (const [topicId, { sum, count }] of totals) {
    const topic = grammarTopic(topicId)
    if (!topic) continue
    spots.push({ topicId, title: topic.title, level: topic.level, avgScore: sum / count, attempts: count })
  }

  return spots.sort((a, b) => a.avgScore - b.avgScore).slice(0, limit)
}
