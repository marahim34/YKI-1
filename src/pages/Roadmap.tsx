import { Link } from 'react-router-dom'
import { WEEKS, PHASE_INFO } from '../data/curriculum'
import { weekHasFullContent } from '../data/content'
import { useProgress } from '../context/ProgressContext'
import LevelPill from '../components/LevelPill'

export default function Roadmap() {
  const { state } = useProgress()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-xl font-bold text-slate-900">Opintopolku · 32 viikkoa</h1>
        <p className="text-sm text-slate-500">
          A1-tasosta YKI-kokeen keskitasolle (B1–B2), noin 7–8 kuukaudessa. Kirjaviitteet ovat suuntaa antavia — vertaa oman
          painoksesi sisällysluetteloon.
        </p>
      </div>

      {([1, 2, 3] as const).map((phase) => (
        <section key={phase} id={`phase-${phase}`}>
          <div className="mb-3 flex items-baseline justify-between">
            <h2 className="text-lg font-bold text-slate-900">{PHASE_INFO[phase].title}</h2>
            <span className="text-sm text-slate-500">{PHASE_INFO[phase].levelRange}</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {WEEKS.filter((w) => w.phase === phase).map((week) => {
              const hasContent = weekHasFullContent(week.id)
              const exerciseIds = [`r-w${week.id}`, `l-w${week.id}`, `w-w${week.id}`, `s-w${week.id}`]
              const doneCount = exerciseIds.filter((id) => state.completedExerciseIds.includes(id)).length
              return (
                <Link
                  key={week.id}
                  to={`/week/${week.id}`}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-colors hover:border-blue-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400">
                      Viikko {week.id}
                      {week.isReviewWeek ? ' · kertaus' : ''}
                      {week.isExamWeek ? ' · koe' : ''}
                    </span>
                    <LevelPill level={week.levelRange[0]} />
                  </div>
                  <p className="mt-1 font-semibold text-slate-900">{week.titleFi}</p>
                  <p className="text-xs text-slate-500">{week.titleEn}</p>
                  <div className="mt-3 flex items-center justify-between">
                    {hasContent ? (
                      <span className="text-xs font-medium text-emerald-700">{doneCount}/4 harjoitusta valmiina</span>
                    ) : (
                      <span className="text-xs font-medium text-slate-400">Suunnitelma valmis · harjoitukset tulossa</span>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
