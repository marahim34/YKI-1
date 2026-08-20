import type { ProgressState } from '../types'
import { WEEKS } from '../data/curriculum'
import { READING_BY_WEEK, LISTENING_BY_WEEK, WRITING_BY_WEEK, SPEAKING_BY_WEEK, weekHasFullContent } from '../data/content'

export interface Achievement {
  id: string
  title: string
  titleBn: string
  description: string
  icon: string
  unlocked: boolean
  progressText?: string
}

function phaseExerciseIds(phase: 1 | 2 | 3): string[] {
  const ids: string[] = []
  for (const week of WEEKS.filter((w) => w.phase === phase && weekHasFullContent(w.id))) {
    for (const map of [READING_BY_WEEK, LISTENING_BY_WEEK, WRITING_BY_WEEK, SPEAKING_BY_WEEK]) {
      const ex = map[week.id]
      if (ex) ids.push(ex.id)
    }
  }
  return ids
}

function allExerciseIds(): string[] {
  return [1, 2, 3].flatMap((p) => phaseExerciseIds(p as 1 | 2 | 3))
}

export function computeAchievements(state: ProgressState, vocabLearnedCount: number, mockExamCount: number): Achievement[] {
  const completed = new Set(state.completedExerciseIds)
  const total = allExerciseIds()
  const phase1 = phaseExerciseIds(1)
  const phase2 = phaseExerciseIds(2)
  const phase3 = phaseExerciseIds(3)
  const doneCount = total.filter((id) => completed.has(id)).length

  const list: Achievement[] = [
    {
      id: 'first-step',
      title: 'Ensimmäinen askel',
      titleBn: 'প্রথম পদক্ষেপ',
      description: 'Tee ensimmäinen harjoituksesi.',
      icon: '🐾',
      unlocked: state.completedExerciseIds.length >= 1,
    },
    {
      id: 'streak-7',
      title: 'Viikon putki',
      titleBn: 'এক সপ্তাহের ধারা',
      description: '7 päivän opiskeluputki.',
      icon: '🔥',
      unlocked: state.streakCount >= 7,
      progressText: `${Math.min(state.streakCount, 7)}/7 pv`,
    },
    {
      id: 'streak-30',
      title: 'Kuukauden putki',
      titleBn: 'এক মাসের ধারা',
      description: '30 päivän opiskeluputki — vaikuttavaa kestävyyttä.',
      icon: '🏆',
      unlocked: state.streakCount >= 30,
      progressText: `${Math.min(state.streakCount, 30)}/30 pv`,
    },
    {
      id: 'vocab-25',
      title: 'Sanaseppo',
      titleBn: 'শব্দ শিক্ষার্থী',
      description: 'Opi 25 sanaa sanaston kertauksessa.',
      icon: '🌱',
      unlocked: vocabLearnedCount >= 25,
      progressText: `${Math.min(vocabLearnedCount, 25)}/25`,
    },
    {
      id: 'vocab-100',
      title: 'Sanamestari',
      titleBn: 'শব্দ ভান্ডার মাস্টার',
      description: 'Opi 100 sanaa sanaston kertauksessa.',
      icon: '📚',
      unlocked: vocabLearnedCount >= 100,
      progressText: `${Math.min(vocabLearnedCount, 100)}/100`,
    },
    {
      id: 'phase-1',
      title: 'Perusta valmis',
      titleBn: 'ভিত্তি সম্পন্ন',
      description: 'Suorita kaikki Vaihe 1:n (A1→A2) harjoitukset.',
      icon: '🥉',
      unlocked: phase1.length > 0 && phase1.every((id) => completed.has(id)),
      progressText: `${phase1.filter((id) => completed.has(id)).length}/${phase1.length}`,
    },
    {
      id: 'phase-2',
      title: 'Vahvistus valmis',
      titleBn: 'দৃঢ়ীকরণ সম্পন্ন',
      description: 'Suorita kaikki Vaihe 2:n (A2→B1) harjoitukset.',
      icon: '🥈',
      unlocked: phase2.length > 0 && phase2.every((id) => completed.has(id)),
      progressText: `${phase2.filter((id) => completed.has(id)).length}/${phase2.length}`,
    },
    {
      id: 'phase-3',
      title: 'Keskitaso valmis',
      titleBn: 'কেস্কিতাসো সম্পন্ন',
      description: 'Suorita kaikki Vaihe 3:n (B1→B2) harjoitukset.',
      icon: '🥇',
      unlocked: phase3.length > 0 && phase3.every((id) => completed.has(id)),
      progressText: `${phase3.filter((id) => completed.has(id)).length}/${phase3.length}`,
    },
    {
      id: 'exam-1',
      title: 'Ensimmäinen koekierros',
      titleBn: 'প্রথম মক পরীক্ষা',
      description: 'Suorita ensimmäinen täysi koekierros.',
      icon: '📝',
      unlocked: mockExamCount >= 1,
    },
    {
      id: 'exam-5',
      title: 'Koeveteraani',
      titleBn: 'পরীক্ষা অভিজ্ঞ',
      description: 'Suorita 5 koekierrosta.',
      icon: '🎓',
      unlocked: mockExamCount >= 5,
      progressText: `${Math.min(mockExamCount, 5)}/5`,
    },
    {
      id: 'xp-500',
      title: '500 XP',
      titleBn: '৫০০ এক্সপি',
      description: 'Kerää yhteensä 500 kokemuspistettä.',
      icon: '⭐',
      unlocked: state.xp >= 500,
      progressText: `${Math.min(state.xp, 500)}/500`,
    },
    {
      id: 'all-done',
      title: 'Koko matka!',
      titleBn: 'সম্পূর্ণ যাত্রা!',
      description: 'Suorita jokaisen viikon jokainen harjoitus — valmis YKI:hin.',
      icon: '🦊',
      unlocked: total.length > 0 && doneCount === total.length,
      progressText: `${doneCount}/${total.length}`,
    },
  ]

  return list
}
