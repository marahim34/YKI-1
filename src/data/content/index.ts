import type { ListeningExercise, ReadingExercise, SpeakingPrompt, WritingPrompt } from '../../types'
import { week1Listening, week1Reading, week1Speaking, week1Writing } from './week1'
import { week2Listening, week2Reading, week2Speaking, week2Writing } from './week2'
import { week3Listening, week3Reading, week3Speaking, week3Writing } from './week3'
import { week4Listening, week4Reading, week4Speaking, week4Writing } from './week4'
import { week5Listening, week5Reading, week5Speaking, week5Writing } from './week5'
import { week6Listening, week6Reading, week6Speaking, week6Writing } from './week6'
import { week7Listening, week7Reading, week7Speaking, week7Writing } from './week7'
import { week8Listening, week8Reading, week8Speaking, week8Writing } from './week8'
import { week9Listening, week9Reading, week9Speaking, week9Writing } from './week9'
import { week11Listening, week11Reading, week11Speaking, week11Writing } from './week11'
import { week12Listening, week12Reading, week12Speaking, week12Writing } from './week12'
import { week13Listening, week13Reading, week13Speaking, week13Writing } from './week13'
import { week14Listening, week14Reading, week14Speaking, week14Writing } from './week14'
import { week15Listening, week15Reading, week15Speaking, week15Writing } from './week15'
import { week16Listening, week16Reading, week16Speaking, week16Writing } from './week16'
import { week17Listening, week17Reading, week17Speaking, week17Writing } from './week17'
import { week18Listening, week18Reading, week18Speaking, week18Writing } from './week18'
import { week19Listening, week19Reading, week19Speaking, week19Writing } from './week19'
import { week20Listening, week20Reading, week20Speaking, week20Writing } from './week20'
import { week21Listening, week21Reading, week21Speaking, week21Writing } from './week21'
import { week23Listening, week23Reading, week23Speaking, week23Writing } from './week23'
import { week24Listening, week24Reading, week24Speaking, week24Writing } from './week24'
import { week25Listening, week25Reading, week25Speaking, week25Writing } from './week25'
import { week26Listening, week26Reading, week26Speaking, week26Writing } from './week26'
import { week27Listening, week27Reading, week27Speaking, week27Writing } from './week27'
import { week28Listening, week28Reading, week28Speaking, week28Writing } from './week28'
import { week29Listening, week29Reading, week29Speaking, week29Writing } from './week29'

export const READING_BY_WEEK: Record<number, ReadingExercise> = {
  1: week1Reading,
  2: week2Reading,
  3: week3Reading,
  4: week4Reading,
  5: week5Reading,
  6: week6Reading,
  7: week7Reading,
  8: week8Reading,
  9: week9Reading,
  11: week11Reading,
  12: week12Reading,
  13: week13Reading,
  14: week14Reading,
  15: week15Reading,
  16: week16Reading,
  17: week17Reading,
  18: week18Reading,
  19: week19Reading,
  20: week20Reading,
  21: week21Reading,
  23: week23Reading,
  24: week24Reading,
  25: week25Reading,
  26: week26Reading,
  27: week27Reading,
  28: week28Reading,
  29: week29Reading,
}

export const LISTENING_BY_WEEK: Record<number, ListeningExercise> = {
  1: week1Listening,
  2: week2Listening,
  3: week3Listening,
  4: week4Listening,
  5: week5Listening,
  6: week6Listening,
  7: week7Listening,
  8: week8Listening,
  9: week9Listening,
  11: week11Listening,
  12: week12Listening,
  13: week13Listening,
  14: week14Listening,
  15: week15Listening,
  16: week16Listening,
  17: week17Listening,
  18: week18Listening,
  19: week19Listening,
  20: week20Listening,
  21: week21Listening,
  23: week23Listening,
  24: week24Listening,
  25: week25Listening,
  26: week26Listening,
  27: week27Listening,
  28: week28Listening,
  29: week29Listening,
}

export const WRITING_BY_WEEK: Record<number, WritingPrompt> = {
  1: week1Writing,
  2: week2Writing,
  3: week3Writing,
  4: week4Writing,
  5: week5Writing,
  6: week6Writing,
  7: week7Writing,
  8: week8Writing,
  9: week9Writing,
  11: week11Writing,
  12: week12Writing,
  13: week13Writing,
  14: week14Writing,
  15: week15Writing,
  16: week16Writing,
  17: week17Writing,
  18: week18Writing,
  19: week19Writing,
  20: week20Writing,
  21: week21Writing,
  23: week23Writing,
  24: week24Writing,
  25: week25Writing,
  26: week26Writing,
  27: week27Writing,
  28: week28Writing,
  29: week29Writing,
}

export const SPEAKING_BY_WEEK: Record<number, SpeakingPrompt> = {
  1: week1Speaking,
  2: week2Speaking,
  3: week3Speaking,
  4: week4Speaking,
  5: week5Speaking,
  6: week6Speaking,
  7: week7Speaking,
  8: week8Speaking,
  9: week9Speaking,
  11: week11Speaking,
  12: week12Speaking,
  13: week13Speaking,
  14: week14Speaking,
  15: week15Speaking,
  16: week16Speaking,
  17: week17Speaking,
  18: week18Speaking,
  19: week19Speaking,
  20: week20Speaking,
  21: week21Speaking,
  23: week23Speaking,
  24: week24Speaking,
  25: week25Speaking,
  26: week26Speaking,
  27: week27Speaking,
  28: week28Speaking,
  29: week29Speaking,
}

export function weekHasFullContent(weekId: number): boolean {
  return weekId in READING_BY_WEEK
}
