// Single source of truth for every route in the app. Two exports:
//   - `routes`: path *builders* — every <Link>/<Navigate>/useNavigate call
//     in the app should go through these instead of hand-writing template
//     strings, so a URL never silently drifts out of sync between where a
//     route is declared (routePatterns, consumed by App.tsx) and where it's
//     linked to.
//   - `routePatterns`: the literal patterns passed to <Route path="...">,
//     including :param placeholders. Only App.tsx should need these.
export type WeekSkill = 'reading' | 'listening' | 'writing' | 'speaking'
export type TemplatesTab = 'writing' | 'speaking'
export type RoadmapPhase = 1 | 2 | 3

export const routes = {
  home: '/',
  howToUse: '/how-to-use',
  roadmap: '/roadmap',
  roadmapPhase: (phase: RoadmapPhase) => `/roadmap#phase-${phase}`,
  week: (weekId: number | string) => `/week/${weekId}`,
  weekSkill: (weekId: number | string, skill: WeekSkill) => `/week/${weekId}/${skill}`,
  vocab: '/vocab',
  myBooks: '/my-books',
  grammar: '/grammar',
  grammarTopic: (topicId: string) => `/grammar?topic=${topicId}`,
  books: '/books',
  templates: '/templates',
  templatesTab: (tab: TemplatesTab) => `/templates?tab=${tab}`,
  numbers: '/numbers',
  basics: '/basics',
  daily: '/daily',
  conversations: '/conversations',
  ykiValmennus: '/yki-valmennus',
  exam: '/exam',
  progress: '/progress',
} as const

export const routePatterns = {
  home: routes.home,
  howToUse: routes.howToUse,
  roadmap: routes.roadmap,
  weekDetail: '/week/:weekId',
  weekReading: '/week/:weekId/reading',
  weekListening: '/week/:weekId/listening',
  weekWriting: '/week/:weekId/writing',
  weekSpeaking: '/week/:weekId/speaking',
  vocab: routes.vocab,
  myBooks: routes.myBooks,
  grammar: routes.grammar,
  books: routes.books,
  templates: routes.templates,
  numbers: routes.numbers,
  basics: routes.basics,
  daily: routes.daily,
  conversations: routes.conversations,
  ykiValmennus: routes.ykiValmennus,
  exam: routes.exam,
  progress: routes.progress,
  notFound: '*',
} as const
