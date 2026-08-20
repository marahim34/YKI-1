import { Link } from 'react-router-dom'
import { useState } from 'react'
import { loadJSON, saveJSON } from '../lib/storage'
import { useProgress } from '../context/ProgressContext'
import { WEEKS, PHASE_INFO } from '../data/curriculum'
import { READING_BY_WEEK, LISTENING_BY_WEEK, WRITING_BY_WEEK, SPEAKING_BY_WEEK, weekHasFullContent } from '../data/content'
import { VOCAB_BANK } from '../data/vocab'
import { loadCustomVocab } from '../lib/customContent'
import { dueCardIds } from '../lib/srs'
import ProgressBar from '../components/ProgressBar'
import LevelPill from '../components/LevelPill'

const SKILL_LABELS: Record<'reading' | 'listening' | 'writing' | 'speaking', { label: string; icon: string; path: string }> = {
  reading: { label: 'Lukeminen', icon: '📖', path: 'reading' },
  listening: { label: 'Kuunteleminen', icon: '🎧', path: 'listening' },
  writing: { label: 'Kirjoittaminen', icon: '✍️', path: 'writing' },
  speaking: { label: 'Puhuminen', icon: '🗣️', path: 'speaking' },
}

function weekSkillExerciseIds(weekId: number) {
  return {
    reading: READING_BY_WEEK[weekId]?.id,
    listening: LISTENING_BY_WEEK[weekId]?.id,
    writing: WRITING_BY_WEEK[weekId]?.id,
    speaking: SPEAKING_BY_WEEK[weekId]?.id,
  }
}

export default function Dashboard() {
  const { state } = useProgress()
  const [howToDismissed, setHowToDismissed] = useState(() => loadJSON('how-to-banner-dismissed', false))

  const contentWeeks = WEEKS.filter((w) => weekHasFullContent(w.id))
  const nextWeek =
    contentWeeks.find((w) => {
      const ids = weekSkillExerciseIds(w.id)
      return Object.values(ids).some((id) => id && !state.completedExerciseIds.includes(id))
    }) ?? contentWeeks[0]

  const allVocabIds = [...VOCAB_BANK, ...loadCustomVocab()].map((v) => v.id)
  const dueCount = dueCardIds(state.srs, allVocabIds).length

  const totalPossible = contentWeeks.length * 4
  const totalDone = contentWeeks.reduce((sum, w) => {
    const ids = weekSkillExerciseIds(w.id)
    return sum + Object.values(ids).filter((id) => id && state.completedExerciseIds.includes(id)).length
  }, 0)

  const nextIds = nextWeek ? weekSkillExerciseIds(nextWeek.id) : null

  return (
    <div className="space-y-6">
      {!howToDismissed && (
        <div className="flex items-center justify-between gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-2.5 text-sm text-amber-800">
          <Link to="/how-to-use" className="flex items-center gap-2 font-medium hover:underline">
            ❓ Uusi täällä? Katso, miten sovellus toimii · নতুন এসেছেন? অ্যাপটি কীভাবে ব্যবহার করবেন দেখুন →
          </Link>
          <button
            onClick={() => {
              setHowToDismissed(true)
              saveJSON('how-to-banner-dismissed', true)
            }}
            aria-label="Piilota"
            className="shrink-0 text-amber-600 hover:text-amber-900"
          >
            ✕
          </button>
        </div>
      )}

      <section className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-6 text-white shadow-sm">
        <p className="text-sm font-medium text-blue-100">Tavoite: YKI keskitaso (B1–B2)</p>
        <h1 className="mt-1 text-2xl font-bold">Moi! Jatketaan matkaa suomen kieleen. 🇫🇮</h1>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <div className="rounded-lg bg-white/10 px-3 py-2">
            🔥 <span className="font-semibold">{state.streakCount}</span> päivän putki
          </div>
          <div className="rounded-lg bg-white/10 px-3 py-2">
            ⭐ <span className="font-semibold">{state.xp}</span> XP yhteensä
          </div>
          <div className="rounded-lg bg-white/10 px-3 py-2">
            🧠 <span className="font-semibold">{dueCount}</span> sanaa kertauksessa tänään
          </div>
        </div>
      </section>

      {nextWeek && nextIds && (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Suositus tälle viikolle</p>
            <LevelPill level={nextWeek.levelRange[0]} />
          </div>
          <h2 className="mt-1 text-lg font-bold text-slate-900">
            Viikko {nextWeek.id}: {nextWeek.titleFi}
          </h2>
          <p className="text-sm text-slate-500">{nextWeek.titleEn}</p>

          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {(Object.keys(SKILL_LABELS) as Array<keyof typeof SKILL_LABELS>).map((skill) => {
              const exId = nextIds[skill]
              const done = exId ? state.completedExerciseIds.includes(exId) : false
              const meta = SKILL_LABELS[skill]
              return (
                <Link
                  key={skill}
                  to={`/week/${nextWeek.id}/${meta.path}`}
                  className={`flex flex-col items-center gap-1 rounded-xl border p-3 text-center text-sm transition-colors ${
                    done ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-300'
                  }`}
                >
                  <span className="text-xl">{done ? '✅' : meta.icon}</span>
                  <span className="font-medium">{meta.label}</span>
                </Link>
              )
            })}
          </div>
          <Link to={`/week/${nextWeek.id}`} className="mt-4 inline-block text-sm font-semibold text-blue-700 hover:underline">
            Katso koko viikko →
          </Link>
        </section>
      )}

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Kokonaisedistyminen (valmiit harjoitukset)</p>
        <div className="mt-2 flex items-center gap-3">
          <ProgressBar value={totalPossible ? totalDone / totalPossible : 0} className="flex-1" />
          <span className="text-sm font-medium text-slate-600">
            {totalDone}/{totalPossible}
          </span>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {([1, 2, 3] as const).map((phase) => {
            const weeksInPhase = WEEKS.filter((w) => w.phase === phase)
            const first = weeksInPhase[0]
            const last = weeksInPhase[weeksInPhase.length - 1]
            return (
              <Link
                key={phase}
                to={`/roadmap#phase-${phase}`}
                className="rounded-xl border border-slate-200 p-3 hover:border-blue-300"
              >
                <p className="text-sm font-semibold text-slate-800">{PHASE_INFO[phase].title}</p>
                <p className="text-xs text-slate-500">
                  {PHASE_INFO[phase].levelRange} · viikot {first?.id}–{last?.id}
                </p>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-3">
        <Link to="/vocab" className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:border-blue-300">
          <p className="text-2xl">🧠</p>
          <p className="mt-1 font-semibold text-slate-900">Sanaston kertaus</p>
          <p className="text-sm text-slate-500">{dueCount} sanaa odottaa kertausta juuri nyt.</p>
        </Link>
        <Link to="/my-books" className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:border-blue-300">
          <p className="text-2xl">📚</p>
          <p className="mt-1 font-semibold text-slate-900">Omat kirjat</p>
          <p className="text-sm text-slate-500">Lisää sanoja Suomen mestarista, Oma Suomesta tai muusta kirjastasi.</p>
        </Link>
        <Link to="/templates" className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:border-blue-300">
          <p className="text-2xl">📋</p>
          <p className="mt-1 font-semibold text-slate-900">Mallipohjat</p>
          <p className="text-sm text-slate-500">Valmiit rungot kirjoittamiseen ja puhumiseen — vaihda vain aihe.</p>
        </Link>
      </section>
    </div>
  )
}
