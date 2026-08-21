import { WEEKS } from '../data/curriculum'

type WeekSkill = 'reading' | 'listening' | 'writing' | 'speaking'

const SKILL_ORDER: WeekSkill[] = ['reading', 'listening', 'writing', 'speaking']
const SKILL_LABELS: Record<WeekSkill, string> = {
  reading: 'Lukeminen',
  listening: 'Kuunteleminen',
  writing: 'Kirjoittaminen',
  speaking: 'Puhuminen',
}

const LAST_WEEK_ID = WEEKS[WEEKS.length - 1].id

// Where "Seuraava ->" should take a learner after finishing one skill
// exercise, so the four skills of a week and the weeks themselves chain
// into one continuous path: reading -> listening -> writing -> speaking ->
// next week's page -> ... -> the final week -> the mock exam.
export function nextAfterSkill(weekId: number, skill: WeekSkill): { path: string; label: string } {
  const idx = SKILL_ORDER.indexOf(skill)
  if (idx < SKILL_ORDER.length - 1) {
    const nextSkill = SKILL_ORDER[idx + 1]
    return { path: `/week/${weekId}/${nextSkill}`, label: `Seuraava: ${SKILL_LABELS[nextSkill]}` }
  }
  return nextAfterWeek(weekId)
}

export function nextAfterWeek(weekId: number): { path: string; label: string } {
  if (weekId >= LAST_WEEK_ID) {
    return { path: '/exam', label: 'Koko polku suoritettu! Koekierros' }
  }
  const nextWeek = WEEKS.find((w) => w.id === weekId + 1)
  return { path: `/week/${weekId + 1}`, label: `Seuraava: Viikko ${weekId + 1}${nextWeek ? ` – ${nextWeek.titleFi}` : ''}` }
}
