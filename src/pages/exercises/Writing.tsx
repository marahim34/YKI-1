import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { WRITING_BY_WEEK } from '../../data/content'
import { getWeek } from '../../data/curriculum'
import { useProgress } from '../../context/ProgressContext'
import { loadJSON, saveJSON } from '../../lib/storage'
import { useCountdown, formatSeconds } from '../../lib/timer'
import ExerciseHeader from '../../components/ExerciseHeader'
import GrammarPanel from '../../components/GrammarPanel'

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length
}

export default function Writing() {
  const { weekId } = useParams()
  const { recordResult } = useProgress()
  const exercise = WRITING_BY_WEEK[Number(weekId)]

  const draftKey = `draft-${exercise?.id ?? ''}`
  const [text, setText] = useState(() => loadJSON(draftKey, ''))
  const [checked, setChecked] = useState<boolean[]>(() => (exercise ? exercise.rubric.map(() => false) : []))
  const [submitted, setSubmitted] = useState(false)
  const [showModel, setShowModel] = useState(false)

  const timer = useCountdown(exercise ? exercise.timeMinutes * 60 : 0)

  useEffect(() => {
    if (!exercise) return
    saveJSON(draftKey, text)
  }, [text, draftKey, exercise])

  if (!exercise) return <Navigate to={`/week/${weekId}`} replace />

  const words = wordCount(text)
  const inRange = words >= exercise.minWords && words <= exercise.maxWords

  function handleSubmit() {
    const score = checked.filter(Boolean).length / checked.length
    setSubmitted(true)
    recordResult(
      { exerciseId: exercise.id, skill: 'writing', weekId: exercise.weekId, score, wordCount: words, completedAt: new Date().toISOString() },
      Math.round(10 + score * 10),
    )
  }

  return (
    <div className="space-y-4">
      <ExerciseHeader weekId={exercise.weekId} icon="✍️" title={exercise.title} level={exercise.level} />

      <GrammarPanel topicIds={getWeek(exercise.weekId)?.grammarTopicIds ?? []} />

      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <p className="text-sm text-slate-700">{exercise.instructions}</p>
        <p className="mt-2 text-xs text-slate-500">
          Tavoitepituus: {exercise.minWords}–{exercise.maxWords} sanaa · Suositeltu aika: {exercise.timeMinutes} min
        </p>
        <Link to="/templates" className="mt-2 inline-block text-xs font-semibold text-blue-700 hover:underline">
          📋 Katso kirjoittamisen mallipohjat →
        </Link>
        <div className="mt-2 flex items-center gap-3">
          <span className="rounded-lg bg-slate-100 px-3 py-1 text-sm font-mono text-slate-700">{formatSeconds(timer.remaining)}</span>
          {!timer.running ? (
            <button onClick={timer.start} className="text-xs font-semibold text-blue-700 hover:underline">
              Käynnistä ajastin
            </button>
          ) : (
            <button onClick={timer.pause} className="text-xs font-semibold text-blue-700 hover:underline">
              Pysäytä ajastin
            </button>
          )}
        </div>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={10}
        placeholder="Kirjoita vastauksesi tähän..."
        className="w-full rounded-xl border border-slate-200 bg-white p-4 text-sm leading-relaxed text-slate-800 focus:border-blue-400 focus:outline-none"
      />
      <p className={`text-xs font-medium ${inRange ? 'text-emerald-600' : 'text-slate-500'}`}>{words} sanaa</p>

      {!submitted ? (
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm font-semibold text-slate-800">Itsearviointi — rastita, mitä teit</p>
          <div className="mt-2 space-y-2">
            {exercise.rubric.map((r, i) => (
              <label key={r} className="flex items-start gap-2 text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={checked[i]}
                  onChange={(e) =>
                    setChecked((c) => {
                      const next = [...c]
                      next[i] = e.target.checked
                      return next
                    })
                  }
                  className="mt-1"
                />
                {r}
              </label>
            ))}
          </div>
          <button onClick={handleSubmit} className="mt-4 w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700">
            Merkitse valmiiksi
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="rounded-xl bg-emerald-50 p-4 text-sm text-emerald-800">Hienoa työtä! Kirjoituksesi on tallennettu edistymiseesi.</div>
          {exercise.modelAnswer && (
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <button onClick={() => setShowModel((s) => !s)} className="text-sm font-semibold text-blue-700 hover:underline">
                {showModel ? 'Piilota mallivastaus' : 'Näytä mallivastaus'}
              </button>
              {showModel && <p className="mt-2 whitespace-pre-line text-sm text-slate-700">{exercise.modelAnswer}</p>}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
