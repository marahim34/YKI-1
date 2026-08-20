import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { LISTENING_BY_WEEK } from '../../data/content'
import { useProgress } from '../../context/ProgressContext'
import { useFinnishSpeech } from '../../lib/tts'
import ExerciseHeader from '../../components/ExerciseHeader'
import McqQuiz from '../../components/McqQuiz'

export default function Listening() {
  const { weekId } = useParams()
  const { recordResult } = useProgress()
  const exercise = LISTENING_BY_WEEK[Number(weekId)]
  const { play, stop, speaking, supported, hasFinnishVoice, setRate } = useFinnishSpeech()
  const [showTranscript, setShowTranscript] = useState(false)
  const [rate, setRateState] = useState(0.9)

  if (!exercise) return <Navigate to={`/week/${weekId}`} replace />

  return (
    <div className="space-y-4">
      <ExerciseHeader weekId={exercise.weekId} icon="🎧" title={exercise.title} level={exercise.level} />

      <div className="rounded-xl border border-slate-200 bg-white p-5">
        {!supported && (
          <p className="mb-3 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
            Selaimesi ei tue puhesyntetisaattoria. Voit silti lukea tekstin näytä-painikkeella.
          </p>
        )}
        {supported && !hasFinnishVoice && (
          <p className="mb-3 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
            Laitteellasi ei löytynyt suomenkielistä ääntä — käytössä on lähin saatavilla oleva ääni. Ääni voi kuulostaa
            oudolta, mutta harjoitus toimii silti.
          </p>
        )}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => (speaking ? stop() : play(exercise.scriptFi))}
            disabled={!supported}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:bg-slate-300"
          >
            {speaking ? '⏸ Pysäytä' : '▶ Kuuntele'}
          </button>
          <label className="flex items-center gap-2 text-xs text-slate-500">
            Nopeus
            <input
              type="range"
              min={0.6}
              max={1.2}
              step={0.1}
              value={rate}
              onChange={(e) => {
                const r = Number(e.target.value)
                setRateState(r)
                setRate(r)
              }}
            />
          </label>
          <button onClick={() => setShowTranscript((s) => !s)} className="text-xs font-semibold text-blue-700 hover:underline">
            {showTranscript ? 'Piilota teksti' : 'Näytä teksti'}
          </button>
        </div>
        {showTranscript && (
          <p className="mt-3 whitespace-pre-line rounded-lg bg-slate-50 p-3 text-sm leading-relaxed text-slate-700">
            {exercise.scriptFi}
          </p>
        )}
      </div>

      <McqQuiz
        questions={exercise.questions}
        onFinish={(score) =>
          recordResult(
            { exerciseId: exercise.id, skill: 'listening', weekId: exercise.weekId, score, completedAt: new Date().toISOString() },
            Math.round(10 + score * 10),
          )
        }
      />
    </div>
  )
}
