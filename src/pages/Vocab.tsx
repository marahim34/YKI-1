import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { VOCAB_BANK } from '../data/vocab'
import { loadCustomVocab } from '../lib/customContent'
import { useProgress } from '../context/ProgressContext'
import { dueCardIds } from '../lib/srs'
import type { Grade } from '../lib/srs'
import { useFinnishSpeech } from '../lib/tts'
import { routes } from '../routes'

export default function Vocab() {
  const { state, gradeVocab } = useProgress()
  const { play, speaking, supported } = useFinnishSpeech()
  const allItems = useMemo(() => [...VOCAB_BANK, ...loadCustomVocab()], [])
  const itemsById = useMemo(() => new Map(allItems.map((v) => [v.id, v])), [allItems])

  const [studyAhead, setStudyAhead] = useState(false)
  const [flipped, setFlipped] = useState(false)
  const [sessionDone, setSessionDone] = useState(0)
  const [cursor, setCursor] = useState(0)

  const queue = useMemo(() => {
    if (studyAhead) return allItems.map((v) => v.id).slice(0, 30)
    return dueCardIds(state.srs, allItems.map((v) => v.id)).slice(0, 30)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [studyAhead, allItems])

  const currentId = queue[cursor]
  const current = currentId ? itemsById.get(currentId) : undefined

  function handleGrade(grade: Grade) {
    if (!currentId) return
    gradeVocab(currentId, grade)
    setSessionDone((d) => d + 1)
    setFlipped(false)
    setCursor((c) => c + 1)
  }

  if (!current) {
    return (
      <div className="mx-auto max-w-md space-y-4 text-center">
        <h1 className="text-xl font-bold text-slate-900">Sanaston kertaus</h1>
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
          <p className="text-3xl">🎉</p>
          <p className="mt-2 font-semibold text-emerald-800">
            {sessionDone > 0 ? `Hienoa! Kertasit ${sessionDone} sanaa.` : 'Ei kertausta juuri nyt.'}
          </p>
          <p className="mt-1 text-sm text-emerald-700">Tule takaisin huomenna, tai harjoittele silti muutama sana etukäteen.</p>
        </div>
        {!studyAhead && (
          <button
            onClick={() => {
              setStudyAhead(true)
              setCursor(0)
            }}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Harjoittele silti (satunnaisia sanoja)
          </button>
        )}
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-md space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-slate-900">Sanaston kertaus</h1>
        <span className="text-sm text-slate-500">
          {cursor + 1} / {queue.length}
        </span>
      </div>

      <Link
        to={routes.basics}
        className="block rounded-lg bg-amber-50 px-3 py-2 text-center text-xs font-medium text-amber-800 hover:bg-amber-100"
      >
        🌻 Selaa perussanastoa kategorioittain (kuukaudet, värit, ruoka...) →
      </Link>

      <div
        onClick={() => setFlipped((f) => !f)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setFlipped((f) => !f)}
        className="flex min-h-56 w-full cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm"
      >
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500">{current.theme}</span>
        <div className="flex items-center gap-2">
          <p className="text-2xl font-bold text-slate-900">{current.fi}</p>
          {supported && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                play(current.fi)
              }}
              disabled={speaking}
              aria-label="Kuuntele ääntäminen"
              title="Kuuntele ääntäminen"
              className="rounded-full bg-blue-50 p-2 text-blue-700 hover:bg-blue-100 disabled:opacity-50"
            >
              🔊
            </button>
          )}
        </div>
        {flipped ? (
          <div className="space-y-2">
            <p className="text-lg text-blue-700">{current.en}</p>
            {current.bn && <p className="text-lg text-emerald-700">{current.bn}</p>}
            <p className="text-sm italic text-slate-500">{current.example}</p>
            <p className="text-xs text-slate-400">{current.exampleEn}</p>
            {current.exampleBn && <p className="text-xs text-slate-400">{current.exampleBn}</p>}
          </div>
        ) : (
          <p className="text-sm text-slate-400">Napauta nähdäksesi käännöksen</p>
        )}
      </div>

      {flipped ? (
        <div className="grid grid-cols-3 gap-2">
          <button onClick={() => handleGrade('again')} className="rounded-lg bg-rose-100 py-3 text-sm font-semibold text-rose-700 hover:bg-rose-200">
            Uudelleen
          </button>
          <button onClick={() => handleGrade('good')} className="rounded-lg bg-blue-100 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-200">
            Hyvä
          </button>
          <button onClick={() => handleGrade('easy')} className="rounded-lg bg-emerald-100 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-200">
            Helppo
          </button>
        </div>
      ) : (
        <button onClick={() => setFlipped(true)} className="w-full rounded-lg bg-slate-900 py-3 text-sm font-semibold text-white hover:bg-slate-800">
          Näytä vastaus
        </button>
      )}
    </div>
  )
}
