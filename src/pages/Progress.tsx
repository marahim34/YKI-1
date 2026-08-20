import { useRef, type ChangeEvent } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext'
import { VOCAB_BANK } from '../data/vocab'
import { loadCustomVocab, loadMockExamResults } from '../lib/customContent'
import { exportProgressBlob } from '../lib/progress'
import { saveJSON } from '../lib/storage'
import { computeWeakSpots } from '../lib/weakSpots'
import type { ProgressState } from '../types'
import ProgressBar from '../components/ProgressBar'
import LevelPill from '../components/LevelPill'

const SKILL_META: Record<string, { label: string; icon: string }> = {
  reading: { label: 'Lukeminen', icon: '📖' },
  listening: { label: 'Kuunteleminen', icon: '🎧' },
  writing: { label: 'Kirjoittaminen', icon: '✍️' },
  speaking: { label: 'Puhuminen', icon: '🗣️' },
}

export default function Progress() {
  const { state, refresh } = useProgress()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const customVocab = loadCustomVocab()
  const mockExams = loadMockExamResults()
  const totalVocab = VOCAB_BANK.length + customVocab.length
  const learnedVocab = Object.values(state.srs).filter((c) => c.reps > 0).length

  function handleExport() {
    const blob = exportProgressBlob(state, { customVocab, mockExams })
    const url = URL.createObjectURL(new Blob([blob], { type: 'application/json' }))
    const a = document.createElement('a')
    a.href = url
    a.download = `yki-companion-backup-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  function handleImportClick() {
    fileInputRef.current?.click()
  }

  function handleImportFile(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      try {
        const data = JSON.parse(String(reader.result)) as { progress?: ProgressState; customVocab?: unknown; mockExams?: unknown }
        if (data.progress) saveJSON('progress', data.progress)
        if (data.customVocab) saveJSON('custom-vocab', data.customVocab)
        if (data.mockExams) saveJSON('mock-exams', data.mockExams)
        refresh()
        window.alert('Tiedot palautettu onnistuneesti!')
      } catch {
        window.alert('Tiedoston lukeminen epäonnistui. Varmista, että valitsit oikean varmuuskopiotiedoston.')
      }
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  const weakSpots = computeWeakSpots(state)

  const skillCounts = state.exerciseResults.reduce<Record<string, { count: number; scoreSum: number; scored: number }>>((acc, r) => {
    acc[r.skill] ??= { count: 0, scoreSum: 0, scored: 0 }
    acc[r.skill].count += 1
    if (r.score !== undefined) {
      acc[r.skill].scoreSum += r.score
      acc[r.skill].scored += 1
    }
    return acc
  }, {})

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold text-slate-900">Edistyminen</h1>

      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard label="Putki" value={`${state.streakCount} pv`} icon="🔥" />
        <StatCard label="XP" value={String(state.xp)} icon="⭐" />
        <StatCard label="Harjoitukset" value={String(state.completedExerciseIds.length)} icon="✅" />
        <StatCard label="Opitut sanat" value={`${learnedVocab}/${totalVocab}`} icon="🧠" />
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="mb-3 text-sm font-semibold text-slate-800">Taidot</h2>
        <div className="space-y-3">
          {Object.entries(SKILL_META).map(([key, meta]) => {
            const s = skillCounts[key]
            const avg = s && s.scored > 0 ? s.scoreSum / s.scored : null
            return (
              <div key={key} className="flex items-center gap-3">
                <span className="w-8 text-lg">{meta.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-700">{meta.label}</span>
                    <span className="text-slate-500">
                      {s?.count ?? 0} suoritusta{avg !== null ? ` · ${Math.round(avg * 100)}% keskiarvo` : ''}
                    </span>
                  </div>
                  {avg !== null && <ProgressBar value={avg} className="mt-1" />}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {weakSpots.length > 0 && (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-800">Heikot kohdat</h2>
          <p className="mt-1 text-xs text-slate-500">
            Kielioppiaiheet, joita sisältävät harjoitukset ovat menneet sinulla heikoiten — kannattaa kerrata näitä ensin.
          </p>
          <div className="mt-3 space-y-2">
            {weakSpots.map((spot) => (
              <Link
                key={spot.topicId}
                to={`/grammar?topic=${spot.topicId}`}
                className="flex items-center gap-3 rounded-lg border border-slate-100 px-3 py-2 hover:border-blue-300"
              >
                <LevelPill level={spot.level} />
                <span className="flex-1 text-sm font-medium text-slate-800">{spot.title}</span>
                <span className="text-xs text-slate-500">
                  {Math.round(spot.avgScore * 100)}% · {spot.attempts} suoritusta
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {mockExams.length > 0 && (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-sm font-semibold text-slate-800">Koekierrosten historia</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            {mockExams
              .slice()
              .reverse()
              .map((exam) => (
                <li key={exam.id} className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
                  <span>{new Date(exam.date).toLocaleDateString('fi-FI')}</span>
                  <span>
                    L {Math.round((exam.scores.reading ?? 0) * 100)}% · K {Math.round((exam.scores.listening ?? 0) * 100)}%
                  </span>
                </li>
              ))}
          </ul>
        </section>
      )}

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-sm font-semibold text-slate-800">Varmuuskopiointi</h2>
        <p className="mt-1 text-sm text-slate-500">
          Kaikki tietosi tallennetaan vain tämän selaimen muistiin. Vie tiedot säännöllisesti talteen, jotta et menetä
          edistymistäsi selainta vaihtaessa tai tyhjentäessä.
        </p>
        <div className="mt-3 flex gap-2">
          <button onClick={handleExport} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
            Vie tiedot (JSON)
          </button>
          <button onClick={handleImportClick} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
            Tuo varmuuskopio
          </button>
          <input ref={fileInputRef} type="file" accept="application/json" onChange={handleImportFile} className="hidden" />
        </div>
      </section>
    </div>
  )
}

function StatCard({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm">
      <p className="text-xl">{icon}</p>
      <p className="mt-1 text-lg font-bold text-slate-900">{value}</p>
      <p className="text-xs text-slate-500">{label}</p>
    </div>
  )
}
