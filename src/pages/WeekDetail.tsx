import { Link, Navigate, useParams } from 'react-router-dom'
import { getWeek } from '../data/curriculum'
import { READING_BY_WEEK, LISTENING_BY_WEEK, WRITING_BY_WEEK, SPEAKING_BY_WEEK, weekHasFullContent } from '../data/content'
import { vocabForWeek } from '../data/vocab'
import { useProgress } from '../context/ProgressContext'
import LevelPill from '../components/LevelPill'
import GrammarPanel from '../components/GrammarPanel'

const SKILLS = [
  { key: 'reading', label: 'Lukeminen', icon: '📖' },
  { key: 'listening', label: 'Kuunteleminen', icon: '🎧' },
  { key: 'writing', label: 'Kirjoittaminen', icon: '✍️' },
  { key: 'speaking', label: 'Puhuminen', icon: '🗣️' },
] as const

export default function WeekDetail() {
  const { weekId } = useParams()
  const { state } = useProgress()
  const week = getWeek(Number(weekId))

  if (!week) return <Navigate to="/roadmap" replace />

  const hasContent = weekHasFullContent(week.id)
  const vocab = vocabForWeek(week.vocabThemes)
  const exercises = {
    reading: READING_BY_WEEK[week.id],
    listening: LISTENING_BY_WEEK[week.id],
    writing: WRITING_BY_WEEK[week.id],
    speaking: SPEAKING_BY_WEEK[week.id],
  }

  return (
    <div className="space-y-6">
      <Link to="/roadmap" className="text-sm text-blue-700 hover:underline">
        ← Takaisin polkuun
      </Link>

      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Viikko {week.id}</p>
          <h1 className="text-xl font-bold text-slate-900">{week.titleFi}</h1>
          <p className="text-sm text-slate-500">{week.titleEn}</p>
        </div>
        <LevelPill level={week.levelRange[0]} />
      </div>

      {week.isExamWeek && (
        <section className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <h2 className="text-sm font-semibold text-blue-900">⏱️ Koeviikko</h2>
          <p className="mt-1 text-sm text-blue-800">
            Tällä viikolla ei ole uutta sisältöä opeteltavaksi — aika ajaa täysi YKI-tyylinen koekierros kaikista
            neljästä osa-alueesta ajanotolla. Käytä myös sanaston kertausta ja kielioppiopasta viimeistelyyn.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link to="/exam" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              Aloita koekierros →
            </Link>
            <Link to="/grammar" className="rounded-lg border border-blue-300 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100">
              Kielioppiopas
            </Link>
          </div>
        </section>
      )}

      {week.isReviewWeek && (
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <h2 className="text-sm font-semibold text-amber-900">🔁 Kertausviikko</h2>
          <p className="mt-1 text-sm text-amber-800">
            Ei uutta kielioppia tai sanastoa — kertaa tämän vaiheen tärkeimmät asiat alta, kertaa sanastoa ja tee
            halutessasi lyhyt koekierros nähdäksesi, missä olet vahva ja mitä kannattaa vielä harjoitella.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link to="/vocab" className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700">
              Kertaa sanastoa →
            </Link>
            <Link to="/exam" className="rounded-lg border border-amber-300 px-4 py-2 text-sm font-semibold text-amber-800 hover:bg-amber-100">
              Koekierros
            </Link>
          </div>
        </section>
      )}

      {!hasContent && !week.isReviewWeek && !week.isExamWeek && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          Tämän viikon 4 taito-osion valmiit harjoitukset ovat vielä tulossa. Voit silti kerrata sanastoa alta, lukea
          kielioppipainotukset, ja lisätä omaa materiaalia kirjoistasi <Link to="/my-books" className="font-semibold underline">Omat kirjat</Link> -sivulla.
        </div>
      )}

      {week.grammarFocus.length > 0 && (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-800">Kieliopin painopisteet</h2>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-600">
            {week.grammarFocus.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </section>
      )}

      <GrammarPanel topicIds={week.grammarTopicIds} />

      {week.bookRefs.length > 0 && (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-800">Lue myös omista kirjoistasi</h2>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">
            {week.bookRefs.map((ref) => (
              <li key={ref.book}>
                <span className="font-medium text-slate-800">{ref.book}:</span> {ref.note}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-800">Viikon sanasto ({vocab.length} sanaa)</h2>
          <Link to="/vocab" className="text-xs font-semibold text-blue-700 hover:underline">
            Kertaa sanastoa →
          </Link>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {vocab.slice(0, 12).map((v) => (
            <span key={v.id} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700">
              {v.fi} <span className="text-slate-400">· {v.en}</span>
            </span>
          ))}
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-2">
        {SKILLS.map(({ key, label, icon }) => {
          const exercise = exercises[key]
          const done = exercise ? state.completedExerciseIds.includes(exercise.id) : false
          if (!exercise) {
            return (
              <div key={key} className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 opacity-70">
                <p className="text-xl">{icon}</p>
                <p className="mt-1 font-semibold text-slate-600">{label}</p>
                <p className="text-xs text-slate-400">Harjoitus tulossa</p>
              </div>
            )
          }
          return (
            <Link
              key={key}
              to={`/week/${week.id}/${key}`}
              className={`rounded-xl border p-4 transition-colors ${
                done ? 'border-emerald-200 bg-emerald-50' : 'border-slate-200 bg-white hover:border-blue-300'
              }`}
            >
              <p className="text-xl">{done ? '✅' : icon}</p>
              <p className="mt-1 font-semibold text-slate-900">{label}</p>
              <p className="text-xs text-slate-500">{exercise.title}</p>
            </Link>
          )
        })}
      </section>
    </div>
  )
}
