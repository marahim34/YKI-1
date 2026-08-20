import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { ExerciseResult, ProgressState } from '../types'
import { loadProgress, recordExerciseResult, gradeVocabCard, touchStreak, isExerciseComplete } from '../lib/progress'
import type { Grade } from '../lib/srs'

interface ProgressContextValue {
  state: ProgressState
  recordResult: (result: ExerciseResult, xp?: number) => void
  gradeVocab: (itemId: string, grade: Grade) => void
  isComplete: (exerciseId: string) => boolean
  refresh: () => void
}

const ProgressContext = createContext<ProgressContextValue | null>(null)

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ProgressState>(() => touchStreak(loadProgress()))

  useEffect(() => {
    setState((s) => touchStreak(s))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const value = useMemo<ProgressContextValue>(
    () => ({
      state,
      recordResult: (result, xp) => setState((s) => recordExerciseResult(s, result, xp)),
      gradeVocab: (itemId, grade) => setState((s) => gradeVocabCard(s, itemId, grade)),
      isComplete: (exerciseId) => isExerciseComplete(state, exerciseId),
      refresh: () => setState(loadProgress()),
    }),
    [state],
  )

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider')
  return ctx
}
