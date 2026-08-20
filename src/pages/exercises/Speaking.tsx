import { useRef, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { SPEAKING_BY_WEEK } from '../../data/content'
import { getWeek } from '../../data/curriculum'
import { useProgress } from '../../context/ProgressContext'
import { useCountdown, formatSeconds } from '../../lib/timer'
import ExerciseHeader from '../../components/ExerciseHeader'
import GrammarPanel from '../../components/GrammarPanel'

type Phase = 'idle' | 'prep' | 'speaking' | 'done'

export default function Speaking() {
  const { weekId } = useParams()
  const { recordResult } = useProgress()
  const exercise = SPEAKING_BY_WEEK[Number(weekId)]

  const [phase, setPhase] = useState<Phase>('idle')
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [micError, setMicError] = useState<string | null>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])
  const streamRef = useRef<MediaStream | null>(null)

  function handleComplete() {
    if (phase === 'prep' && exercise) {
      setPhase('speaking')
      timer.reset(exercise.speakSeconds)
      timer.start()
      void startRecording()
    } else if (phase === 'speaking') {
      setPhase('done')
      stopRecording()
      if (exercise) {
        recordResult(
          { exerciseId: exercise.id, skill: 'speaking', weekId: exercise.weekId, completedAt: new Date().toISOString() },
          15,
        )
      }
    }
  }

  const timer = useCountdown(exercise ? exercise.prepSeconds : 0, handleComplete)

  if (!exercise) return <Navigate to={`/week/${weekId}`} replace />

  async function startRecording() {
    if (!navigator.mediaDevices?.getUserMedia) return
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      streamRef.current = stream
      chunksRef.current = []
      const recorder = new MediaRecorder(stream)
      recorder.ondataavailable = (e) => chunksRef.current.push(e.data)
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' })
        setAudioUrl(URL.createObjectURL(blob))
      }
      recorder.start()
      mediaRecorderRef.current = recorder
    } catch {
      setMicError('Mikrofonia ei voitu käyttää. Voit silti harjoitella ajastimen kanssa ääneen puhuen.')
    }
  }

  function stopRecording() {
    mediaRecorderRef.current?.stop()
    streamRef.current?.getTracks().forEach((t) => t.stop())
  }

  function beginPractice() {
    setAudioUrl(null)
    setPhase('prep')
    timer.reset(exercise.prepSeconds)
    timer.start()
  }

  function reset() {
    setPhase('idle')
    setAudioUrl(null)
    timer.reset(exercise.prepSeconds)
  }

  return (
    <div className="space-y-4">
      <ExerciseHeader weekId={exercise.weekId} icon="🗣️" title={exercise.title} level={exercise.level} />

      <GrammarPanel topicIds={getWeek(exercise.weekId)?.grammarTopicIds ?? []} />

      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <p className="text-sm text-slate-700">{exercise.instructions}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {exercise.helpfulPhrases.map((p) => (
            <span key={p} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
              {p}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
        {phase === 'idle' && (
          <>
            <p className="text-sm text-slate-500">
              Valmistautumisaika: {formatSeconds(exercise.prepSeconds)} · Puheaika: {formatSeconds(exercise.speakSeconds)}
            </p>
            <button onClick={beginPractice} className="mt-4 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">
              Aloita harjoitus
            </button>
          </>
        )}

        {phase === 'prep' && (
          <>
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-600">Valmistaudu</p>
            <p className="mt-1 text-4xl font-bold text-slate-900">{formatSeconds(timer.remaining)}</p>
            <p className="mt-2 text-sm text-slate-500">Mieti vastauksesi runko ja tarvittava sanasto.</p>
          </>
        )}

        {phase === 'speaking' && (
          <>
            <p className="text-xs font-semibold uppercase tracking-wide text-rose-600">🔴 Puhu nyt</p>
            <p className="mt-1 text-4xl font-bold text-slate-900">{formatSeconds(timer.remaining)}</p>
            {micError && <p className="mt-2 text-xs text-amber-600">{micError}</p>}
          </>
        )}

        {phase === 'done' && (
          <>
            <p className="text-2xl">✅</p>
            <p className="mt-1 font-semibold text-emerald-700">Hyvin tehty! Harjoitus on merkitty valmiiksi.</p>
            {audioUrl && (
              <div className="mt-3">
                <p className="mb-1 text-xs text-slate-500">Kuuntele oma vastauksesi:</p>
                <audio controls src={audioUrl} className="mx-auto" />
              </div>
            )}
            <button onClick={reset} className="mt-4 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              Harjoittele uudelleen
            </button>
          </>
        )}
      </div>
    </div>
  )
}
