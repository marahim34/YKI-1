import type { ListeningExercise, ReadingExercise, SpeakingPrompt, WritingPrompt } from '../../types'
import { week1Listening, week1Reading, week1Speaking, week1Writing } from './week1'
import { week11Listening, week11Reading, week11Speaking, week11Writing } from './week11'
import { week23Listening, week23Reading, week23Speaking, week23Writing } from './week23'

export const READING_BY_WEEK: Record<number, ReadingExercise> = {
  1: week1Reading,
  11: week11Reading,
  23: week23Reading,
}

export const LISTENING_BY_WEEK: Record<number, ListeningExercise> = {
  1: week1Listening,
  11: week11Listening,
  23: week23Listening,
}

export const WRITING_BY_WEEK: Record<number, WritingPrompt> = {
  1: week1Writing,
  11: week11Writing,
  23: week23Writing,
}

export const SPEAKING_BY_WEEK: Record<number, SpeakingPrompt> = {
  1: week1Speaking,
  11: week11Speaking,
  23: week23Speaking,
}

export function weekHasFullContent(weekId: number): boolean {
  return weekId in READING_BY_WEEK
}
