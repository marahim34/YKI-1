export type CefrLevel = 'A1' | 'A2' | 'B1' | 'B2'

export type Phase = 1 | 2 | 3

export type Skill = 'reading' | 'listening' | 'writing' | 'speaking' | 'vocab'

export interface BookRef {
  book: string
  note: string
}

export interface Week {
  id: number
  phase: Phase
  levelRange: [CefrLevel, CefrLevel]
  titleFi: string
  titleEn: string
  grammarFocus: string[]
  grammarTopicIds: string[]
  vocabThemes: string[]
  bookRefs: BookRef[]
  isReviewWeek?: boolean
  isExamWeek?: boolean
  hasContent: boolean
}

export interface VocabItem {
  id: string
  fi: string
  en: string
  bn?: string
  example: string
  exampleEn: string
  exampleBn?: string
  theme: string
  level: CefrLevel
  weekId?: number
  source?: string
}

export interface McqQuestion {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation?: string
}

export interface ReadingExercise {
  id: string
  weekId: number
  title: string
  level: CefrLevel
  textFi: string
  questions: McqQuestion[]
}

export interface ListeningExercise {
  id: string
  weekId: number
  title: string
  level: CefrLevel
  scriptFi: string
  questions: McqQuestion[]
}

export interface WritingPrompt {
  id: string
  weekId: number
  title: string
  level: CefrLevel
  instructions: string
  minWords: number
  maxWords: number
  timeMinutes: number
  rubric: string[]
  modelAnswer?: string
}

export interface SpeakingPrompt {
  id: string
  weekId: number
  title: string
  level: CefrLevel
  instructions: string
  prepSeconds: number
  speakSeconds: number
  helpfulPhrases: string[]
}

// --- Spaced repetition (progress persisted per vocab item id) ---
export interface SrsCard {
  itemId: string
  interval: number // days
  ease: number // ease factor, SM-2 style
  reps: number
  dueAt: string // ISO date
  lastGrade?: number
}

export interface UserVocabItem extends VocabItem {
  bookSource: string
  chapter?: string
}

export interface ExerciseResult {
  exerciseId: string
  skill: Skill
  weekId: number
  score?: number // 0-1
  completedAt: string
  wordCount?: number
  notes?: string
}

export interface ProgressState {
  startedAt: string
  streakCount: number
  lastActiveDate: string | null
  completedExerciseIds: string[]
  exerciseResults: ExerciseResult[]
  srs: Record<string, SrsCard>
  xp: number
}

export interface MockExamResult {
  id: string
  date: string
  scores: Partial<Record<Skill, number>>
}

export interface GrammarExample {
  fi: string
  en: string
  note?: string
}

export interface GrammarTopic {
  id: string
  title: string
  level: CefrLevel
  category: string
  summary: string
  summaryBn?: string
  explanation: string[]
  examples: GrammarExample[]
  tips?: string[]
}

export interface BookPracticeVocabItem {
  question: string
  options: string[]
  correctIndex: number
}

export interface BookPracticeDrillItem {
  prompt: string
  answer: string
  hint?: string
}

export interface BookPracticeChapter {
  id: string
  book: string
  chapterLabel: string
  level: CefrLevel
  topic: string
  vocabQuiz: BookPracticeVocabItem[]
  grammarDrill: {
    instructions: string
    items: BookPracticeDrillItem[]
  }
  grammarTopicIds: string[]
}
