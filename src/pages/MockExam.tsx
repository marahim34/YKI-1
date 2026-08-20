import { useState, type ReactNode } from 'react'
import type { ListeningExercise } from '../types'
import { READING_BY_WEEK, LISTENING_BY_WEEK, WRITING_BY_WEEK, SPEAKING_BY_WEEK } from '../data/content'
import { getWeek } from '../data/curriculum'
import { useProgress } from '../context/ProgressContext'
import { useFinnishSpeech } from '../lib/tts'
import { useCountdown, formatSeconds } from '../lib/timer'
import { saveMockExamResult } from '../lib/customContent'
import McqQuiz from '../components/McqQuiz'

const AVAILABLE_WEEKS = Object.keys(READING_BY_WEEK).map(Number)
const STEPS = ['reading', 'listening', 'writing', 'speaking', 'finished'] as const
type Step = (typeof STEPS)[number]

export default function MockExam() {
  const { recordResult } = useProgress()
  const [weekId, setWeekId] = useState<number>(AVAILABLE_WEEKS[0])
  const [started, setStarted] = useState(false)
  const [stepIndex, setStepIndex] = useState(0)
  const [scores, setScores] = useState<{ reading?: number; listening?: number; writing?: boolean; speaking?: boolean }>({})
  const [startedAt, setStartedAt] = useState<number>(0)

  const step: Step = STEPS[stepIndex]
  const week = getWeek(weekId)
  const reading = READING_BY_WEEK[weekId]
  const listening = LISTENING_BY_WEEK[weekId]
  const writing = WRITING_BY_WEEK[weekId]
  const speaking = SPEAKING_BY_WEEK[weekId]

  function begin() {
    setScores({})
    setStepIndex(0)
    setStarted(true)
    setStartedAt(Date.now())
  }

  function finish(finalScores: typeof scores) {
    const elapsedMin = Math.round((Date.now() - startedAt) / 60000)
    saveMockExamResult({
      id: `exam-${Date.now()}`,
      date: new Date().toISOString(),
      scores: {
        reading: finalScores.reading,
        listening: finalScores.listening,
        writing: finalScores.writing ? 1 : 0,
        speaking: finalScores.speaking ? 1 : 0,
      },
    })
    recordResult(
      { exerciseId: `exam-${Date.now()}`, skill: 'reading', weekId, completedAt: new Date().toISOString(), notes: `Koekierros, ${elapsedMin} min` },
      40,
    )
    setStepIndex(4)
  }

  if (!started) {
    return (
      <div className="mx-auto max-w-xl space-y-4">
        <h1 className="text-xl font-bold text-slate-900">Koekierros</h1>
        <p className="text-sm text-slate-600">
          Harjoittele YKI-kokeen neljä osiota (lukeminen, kuunteleminen, kirjoittaminen, puhuminen) peräkkäin, ajanotolla —
          niin kuin oikeassa kokeessa. Valitse, minkä viikon materiaalilla haluat harjoitella.
        </p>
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <label className="text-sm font-medium text-slate-700">
            Viikko
            <select
              value={weekId}
              onChange={(e) => setWeekId(Number(e.target.value))}
              className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            >
              {AVAILABLE_WEEKS.map((id) => (
                <option key={id} value={id}>
                  Viikko {id}: {getWeek(id)?.titleFi}
                </option>
              ))}
            </select>
          </label>
          <button onClick={begin} className="mt-4 w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700">
            Aloita koekierros
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-xl space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-slate-900">Koekierros · Viikko {weekId}</h1>
        <span className="text-xs font-semibold text-slate-500">Osio {Math.min(stepIndex + 1, 4)}/4</span>
      </div>

      {step === 'reading' && reading && (
        <StepCard title="📖 Lukeminen">
          <article className="mb-4 whitespace-pre-line rounded-lg bg-slate-50 p-4 text-sm leading-relaxed text-slate-800">{reading.textFi}</article>
          <McqQuiz questions={reading.questions} onFinish={(score) => setScores((s) => ({ ...s, reading: score }))} />
          {scores.reading !== undefined && <NextButton onClick={() => setStepIndex(1)} label="Seuraava: Kuunteleminen" />}
        </StepCard>
      )}

      {step === 'listening' && listening && <ListeningStep exercise={listening} onDone={(score) => { setScores((s) => ({ ...s, listening: score })); setStepIndex(2) }} />}

      {step === 'writing' && writing && (
        <StepCard title="✍️ Kirjoittaminen">
          <p className="mb-3 text-sm text-slate-700">{writing.instructions}</p>
          <p className="mb-3 text-xs text-slate-500">
            Tavoite: {writing.minWords}–{writing.maxWords} sanaa · {writing.timeMinutes} min
          </p>
          <MiniWritingArea onDone={() => { setScores((s) => ({ ...s, writing: true })); setStepIndex(3) }} />
        </StepCard>
      )}

      {step === 'speaking' && speaking && (
        <StepCard title="🗣️ Puhuminen">
          <p className="mb-3 text-sm text-slate-700">{speaking.instructions}</p>
          <MiniSpeakingTimer
            prepSeconds={speaking.prepSeconds}
            speakSeconds={speaking.speakSeconds}
            onDone={() => finish({ ...scores, speaking: true })}
          />
        </StepCard>
      )}

      {step === 'finished' && week && (
        <StepCard title="🏁 Koekierros valmis!">
          <div className="space-y-2 text-sm text-slate-700">
            <p>
              Lukeminen: <strong>{Math.round((scores.reading ?? 0) * 100)}%</strong>
            </p>
            <p>
              Kuunteleminen: <strong>{Math.round((scores.listening ?? 0) * 100)}%</strong>
            </p>
            <p>Kirjoittaminen: {scores.writing ? 'suoritettu ✅' : '—'}</p>
            <p>Puhuminen: {scores.speaking ? 'suoritettu ✅' : '—'}</p>
          </div>
          <button onClick={() => setStarted(false)} className="mt-4 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
            Takaisin valintaan
          </button>
        </StepCard>
      )}
    </div>
  )
}

function StepCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="mb-3 text-sm font-semibold text-slate-800">{title}</h2>
      {children}
    </div>
  )
}

function NextButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button onClick={onClick} className="mt-4 w-full rounded-lg bg-slate-900 py-3 text-sm font-semibold text-white hover:bg-slate-800">
      {label}
    </button>
  )
}

function ListeningStep({ exercise, onDone }: { exercise: ListeningExercise; onDone: (score: number) => void }) {
  const { play, stop, speaking, supported } = useFinnishSpeech()
  const [score, setScore] = useState<number | undefined>(undefined)
  return (
    <StepCard title="🎧 Kuunteleminen">
      <button
        onClick={() => (speaking ? stop() : play(exercise.scriptFi))}
        disabled={!supported}
        className="mb-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:bg-slate-300"
      >
        {speaking ? '⏸ Pysäytä' : '▶ Kuuntele'}
      </button>
      <McqQuiz questions={exercise.questions} onFinish={setScore} />
      {score !== undefined && <NextButton onClick={() => onDone(score)} label="Seuraava: Kirjoittaminen" />}
    </StepCard>
  )
}

function MiniWritingArea({ onDone }: { onDone: () => void }) {
  const [text, setText] = useState('')
  const words = text.trim().split(/\s+/).filter(Boolean).length
  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={8}
        placeholder="Kirjoita vastauksesi..."
        className="w-full rounded-lg border border-slate-200 p-3 text-sm focus:border-blue-400 focus:outline-none"
      />
      <p className="mt-1 text-xs text-slate-500">{words} sanaa</p>
      <NextButton onClick={onDone} label="Seuraava: Puhuminen" />
    </div>
  )
}

function MiniSpeakingTimer({ prepSeconds, speakSeconds, onDone }: { prepSeconds: number; speakSeconds: number; onDone: () => void }) {
  const [phase, setPhase] = useState<'ready' | 'prep' | 'speak' | 'done'>('ready')

  function handleComplete() {
    setPhase((p) => {
      if (p === 'prep') {
        timer.reset(speakSeconds)
        timer.start()
        return 'speak'
      }
      if (p === 'speak') return 'done'
      return p
    })
  }

  const timer = useCountdown(prepSeconds, handleComplete)

  return (
    <div className="text-center">
      {phase === 'ready' && (
        <button
          onClick={() => {
            setPhase('prep')
            timer.reset(prepSeconds)
            timer.start()
          }}
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Aloita puheosio
        </button>
      )}
      {phase === 'prep' && (
        <>
          <p className="text-xs font-semibold uppercase text-amber-600">Valmistaudu</p>
          <p className="text-3xl font-bold text-slate-900">{formatSeconds(timer.remaining)}</p>
        </>
      )}
      {phase === 'speak' && (
        <>
          <p className="text-xs font-semibold uppercase text-rose-600">🔴 Puhu nyt</p>
          <p className="text-3xl font-bold text-slate-900">{formatSeconds(timer.remaining)}</p>
        </>
      )}
      {phase === 'done' && <NextButton onClick={onDone} label="Näytä tulokset" />}
    </div>
  )
}
