import type { SrsCard } from '../types'

export type Grade = 'again' | 'good' | 'easy'

const DAY_MS = 24 * 60 * 60 * 1000

export function newCard(itemId: string): SrsCard {
  return {
    itemId,
    interval: 0,
    ease: 2.5,
    reps: 0,
    dueAt: new Date().toISOString(),
  }
}

// Simplified SM-2: three grades instead of six, tuned for quick daily review sessions.
export function gradeCard(card: SrsCard, grade: Grade): SrsCard {
  let { interval, ease, reps } = card

  if (grade === 'again') {
    interval = 0 // due again today, but later in the session (see queueOrder)
    ease = Math.max(1.3, ease - 0.2)
    reps = 0
  } else if (grade === 'good') {
    if (reps === 0) interval = 1
    else if (reps === 1) interval = 3
    else interval = Math.round(interval * ease)
    reps += 1
  } else {
    // easy
    if (reps === 0) interval = 4
    else interval = Math.round(Math.max(interval, 1) * ease * 1.3)
    ease = ease + 0.15
    reps += 1
  }

  const dueAt = new Date(Date.now() + interval * DAY_MS).toISOString()
  return { itemId: card.itemId, interval, ease, reps, dueAt, lastGrade: grade === 'again' ? 0 : grade === 'good' ? 3 : 5 }
}

export function isDue(card: SrsCard): boolean {
  return new Date(card.dueAt).getTime() <= Date.now()
}

export function dueCardIds(srs: Record<string, SrsCard>, allIds: string[]): string[] {
  const due: string[] = []
  const unseen: string[] = []
  for (const id of allIds) {
    const card = srs[id]
    if (!card) unseen.push(id)
    else if (isDue(card)) due.push(id)
  }
  // review overdue/known cards first, then introduce new ones
  return [...due, ...unseen]
}
