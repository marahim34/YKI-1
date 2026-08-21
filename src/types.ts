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

// A standalone full practice test modeled on the real YKI keskitaso exam
// format — mixed everyday/work/society topics in one set, not tied to any
// single curriculum week's theme, the way a genuine past exam paper mixes
// subjects across its four sections. Original content only.
export interface ExamSet {
  id: string
  title: string
  titleBn?: string
  level: [CefrLevel, CefrLevel]
  reading: ReadingExercise
  listening: ListeningExercise
  writing: WritingPrompt
  speaking: SpeakingPrompt
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

// Writing task templates: a reusable structural skeleton (opening/body/closing)
// for one YKI writing task type, shown with the same skeleton filled in for
// several different topics — so recognizing the TASK TYPE lets you reuse one
// pattern across many prompts instead of needing a unique approach each time.
export interface TemplateSwap {
  topic: string
  topicBn?: string
  filled: string
}

export interface WritingTemplate {
  id: string
  taskType: string
  taskTypeBn?: string
  whenUsed: string
  opening: string
  body: string
  closing: string
  swaps: TemplateSwap[]
  tips: string[]
}

// Speaking question patterns: how to recognize a common YKI speaking
// question shape (by its Finnish question words/structure) and a reusable
// answer-template sentence frame for it — the "trick" being that once you
// recognize the pattern, you can answer confidently even without fully
// parsing the specific vocabulary in a new question.
export interface SpeakingPattern {
  id: string
  patternName: string
  patternNameBn?: string
  recognizeBy: string[]
  answerTemplate: string
  filledExample: string
  filledExampleBn?: string
  tips: string[]
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

export interface BookPracticeSampleAnswer {
  promptFi: string
  promptEn: string
  promptBn?: string
  textFi: string
  textEn: string
  textBn?: string
}

export interface DialogueTurn {
  speaker: string
  fi: string
  en?: string
  isPlaceholder?: boolean
}

export interface DialogueScenario {
  id: string
  titleFi: string
  titleEn: string
  turns: DialogueTurn[]
}

export interface ReactionPrompt {
  id: string
  scenarioFi: string
  scenarioEn?: string
  sampleFi: string
}

export interface EssayTask {
  id: string
  titleFi: string
  titleEn?: string
  instructionsFi: string
  sampleFi: string
}

export interface WritingTask {
  id: string
  titleFi: string
  instructionsFi: string
  bulletsFi: string[]
  sampleFi: string
}

export interface ConversationChapter {
  id: string
  titleFi: string
  titleEn: string
  level: CefrLevel
  warmup?: ReactionPrompt[]
  vocabQuiz?: BookPracticeVocabItem[]
  discussionQuestions?: { fi: string; en: string }[]
  crossword?: BookPracticeDrillItem[]
  dialogues: DialogueScenario[]
  reactions: ReactionPrompt[]
  longSpeaking: EssayTask[]
  opinions: EssayTask[]
  writingTasks: WritingTask[]
  vocabSummary: { fi: string; en: string }[]
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
  sampleAnswer?: BookPracticeSampleAnswer
}

// --- YKI-valmennus: exam-prep chapters built around the YKI test's 9
// official themes and 4 subtests (reading/writing/listening/speaking), each
// following the book's own lämmittele -> harjoittele -> testaa (warm-up ->
// practice -> test) progression. Distinct from Keskusteluharjoitukset, which
// is free-form speaking/writing practice not tied to the exam's task types.
export interface YkiTipBox {
  title: string
  body: string[]
}

export interface TrueFalseQuestion {
  id: string
  statementFi: string
  statementEn?: string
  answer: boolean
  explanation?: string
}

export interface OpenQuestion {
  id: string
  questionFi: string
  questionEn?: string
  sampleAnswerFi: string
}

export interface YkiPassage {
  id: string
  titleFi: string
  titleEn?: string
  source?: string
  textFi: string
  tip?: YkiTipBox
  predictVocab?: { fi: string; en: string; bn?: string }[]
  mcq?: McqQuestion[]
  trueFalse?: TrueFalseQuestion[]
  open?: OpenQuestion[]
}

export interface YkiVocabWarmup {
  instructionsFi: string
  items: { fi: string; en: string; bn?: string }[]
  note?: YkiTipBox
}

export interface YkiFreewriteTask {
  instructionsFi: string
  rules: string[]
  topics: string[]
}

export interface YkiGroupTask {
  instructionsFi: string
  questions: string[]
}

export interface YkiWritingPrompt {
  id: string
  titleFi: string
  instructionsFi: string
  bulletsFi?: string[]
  starterFi?: string
  exampleTitleFi?: string
  exampleFi?: string
  sampleFi?: string
}

export interface YkiOpinionTopic {
  id: string
  titleFi: string
  options: string[]
  modelAnswerFi?: string
}

export interface YkiSpeakingSelfIntro {
  instructionsFi: string
  qa: { spoken: string; written: string; en: string }[]
}

export interface YkiSpeakingLongTask {
  id: string
  titleFi: string
  titleEn?: string
  prepSeconds: number
  speakSeconds: number
  questions: string[]
  subChoices?: { label: string; questions: string[] }[]
  modelAnswerFi?: string
}

export interface YkiConversationTask {
  id: string
  titleFi: string
  scenarioFi: string
  turns: { instructionFi: string; seconds: number; modelResponseFi?: string }[]
}

export interface YkiSituationalTask {
  id: string
  scenarioFi: string
  seconds: number
  setLabel?: string
  modelAnswerFi?: string
}

export interface YkiSubtestReading {
  vocabWarmup?: YkiVocabWarmup
  practicePassages: YkiPassage[]
  testPassages: YkiPassage[]
}

export interface YkiSubtestWriting {
  tip?: YkiTipBox
  freewrite: YkiFreewriteTask
  groupIntro: YkiGroupTask
  practiceTasks: YkiWritingPrompt[]
  practiceShareTable?: { category: string; hobbyBuddy: string; neighbors: string; both: string }[]
  openingClosingTip?: YkiTipBox
  informalTasks: YkiWritingPrompt[]
  formalTasks: YkiWritingPrompt[]
  opinionTopics: YkiOpinionTopic[]
}

export interface YkiSubtestListening {
  tip?: YkiTipBox
  podcastWarmup?: { instructionsFi: string; keywords: string[] }
  repeatSentences?: { instructionsFi: string; sentences: string[] }
  practicePassages: YkiPassage[]
  testPassages: YkiPassage[]
}

export interface YkiAgeVocabTip {
  title: string
  pairs: { person: string; stage: string }[]
  note: string
  phrases: string[]
}

export interface YkiSubtestSpeaking {
  tip?: YkiTipBox
  selfIntro?: YkiSpeakingSelfIntro
  repeatPhrases?: { instructionsFi: string; phrases: string[] }
  phraseTable?: { titleFi: string; rows: { spoken: string; written: string; en: string }[] }
  groupIntro: YkiGroupTask
  truthTip?: YkiTipBox
  practiceLongTask?: YkiSpeakingLongTask & { reflectionPrompt?: string; speakDontWriteTip?: YkiTipBox }
  practiceSituationalTasks?: YkiSituationalTask[]
  practiceConversationTasks?: YkiConversationTask[]
  sampleDialogues?: DialogueScenario[]
  dontMemorizeTip?: YkiTipBox
  conversationVocab?: { fi: string; en: string; bn?: string }[]
  testLongTasks: YkiSpeakingLongTask[]
  conversationTasks: YkiConversationTask[]
  situationalTasks: YkiSituationalTask[]
  opinionTasks: YkiSpeakingLongTask[]
  ageVocabTip?: YkiAgeVocabTip
}

export interface YkiChapter {
  id: string
  number: number
  titleFi: string
  titleEn: string
  pages: string
  theme: string
  grammarTopicIds?: string[]
  reading: YkiSubtestReading
  writing: YkiSubtestWriting
  listening: YkiSubtestListening
  speaking: YkiSubtestSpeaking
  vocabSummary: { fi: string; en: string; bn?: string }[]
  usefulPhrases: { fi: string; en: string; bn?: string }[]
  learnEverywhereTip?: YkiTipBox
}
