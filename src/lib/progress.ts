import type { ExerciseResult, ProgressState, SrsCard } from '../types'
import { loadJSON, saveJSON } from './storage'
import { gradeCard, newCard, type Grade } from './srs'

const KEY = 'progress'

function emptyState(): ProgressState {
  return {
    startedAt: new Date().toISOString(),
    streakCount: 0,
    lastActiveDate: null,
    completedExerciseIds: [],
    exerciseResults: [],
    srs: {},
    xp: 0,
  }
}

function todayStr(d = new Date()): string {
  return d.toISOString().slice(0, 10)
}

export function loadProgress(): ProgressState {
  return loadJSON<ProgressState>(KEY, emptyState())
}

export function saveProgress(state: ProgressState): void {
  saveJSON(KEY, state)
}

// Call once when the app mounts to update the daily streak.
export function touchStreak(state: ProgressState): ProgressState {
  const today = todayStr()
  if (state.lastActiveDate === today) return state
  const yesterday = todayStr(new Date(Date.now() - 86400000))
  const streakCount = state.lastActiveDate === yesterday ? state.streakCount + 1 : 1
  const next = { ...state, streakCount, lastActiveDate: today }
  saveProgress(next)
  return next
}

export function recordExerciseResult(state: ProgressState, result: ExerciseResult, xpAward = 10): ProgressState {
  const completedExerciseIds = state.completedExerciseIds.includes(result.exerciseId)
    ? state.completedExerciseIds
    : [...state.completedExerciseIds, result.exerciseId]
  const next: ProgressState = {
    ...state,
    completedExerciseIds,
    exerciseResults: [...state.exerciseResults, result],
    xp: state.xp + xpAward,
  }
  saveProgress(next)
  return next
}

export function gradeVocabCard(state: ProgressState, itemId: string, grade: Grade): ProgressState {
  const existing = state.srs[itemId] ?? newCard(itemId)
  const updated = gradeCard(existing, grade)
  const next: ProgressState = {
    ...state,
    srs: { ...state.srs, [itemId]: updated },
    xp: state.xp + (grade === 'again' ? 1 : 2),
  }
  saveProgress(next)
  return next
}

export function isExerciseComplete(state: ProgressState, exerciseId: string): boolean {
  return state.completedExerciseIds.includes(exerciseId)
}

export function exportProgressBlob(state: ProgressState, extra: Record<string, unknown>): string {
  return JSON.stringify({ progress: state, ...extra, exportedAt: new Date().toISOString() }, null, 2)
}

export type { SrsCard }
