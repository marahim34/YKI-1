import { useMemo, useState } from 'react'
import type { VocabItem } from '../types'
import { buildGapQuestions } from '../lib/vocabGames'

function normalize(s: string): string {
  return s.trim().toLowerCase()
}

export default function FillGapGame({ items }: { items: VocabItem[] }) {
  const [round, setRound] = useState(0)
  const questions = useMemo(() => buildGapQuestions(items), [items, round])
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [checked, setChecked] = useState<Record<string, boolean>>({})

  if (questions.length === 0) {
    return <p className="text-sm text-slate-500">Tälle kategorialle ei löytynyt sopivia esimerkkilauseita aukkotehtävään.</p>
  }

  const allChecked = questions.every((q) => checked[q.id])
  const correctCount = questions.filter((q) => {
    if (!checked[q.id]) return false
    const val = normalize(answers[q.id] ?? '')
    return val === normalize(q.answer) || val === normalize(q.base)
  }).length

  function check(id: string) {
    setChecked((c) => ({ ...c, [id]: true }))
  }

  function nextRound() {
    setRound((r) => r + 1)
    setAnswers({})
    setChecked({})
  }

  return (
    <div className="space-y-3">
      <p className="text-xs text-slate-500">
        Täydennä puuttuva sana lauseeseen vihjeen avulla. Fill in the missing word using the meaning hint.
      </p>
      {questions.map((q) => {
        const isChecked = checked[q.id]
        const value = answers[q.id] ?? ''
        const correct = isChecked && (normalize(value) === normalize(q.answer) || normalize(value) === normalize(q.base))
        return (
          <div key={q.id} className="rounded-lg border border-slate-200 bg-white p-3 text-sm">
            <p className="text-slate-800">
              {q.before}
              <span
                className={`mx-1 inline-block min-w-16 border-b-2 px-1 text-center font-semibold ${
                  isChecked ? (correct ? 'border-emerald-400 text-emerald-700' : 'border-rose-400 text-rose-700') : 'border-slate-400 text-slate-400'
                }`}
              >
                {isChecked ? q.answer : '_____'}
              </span>
              {q.after}
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Vihje: {q.hintEn}
              {q.hintBn ? ` · ${q.hintBn}` : ''}
            </p>
            <div className="mt-1.5 flex flex-wrap items-center gap-2">
              <input
                value={value}
                disabled={isChecked}
                onChange={(e) => setAnswers((a) => ({ ...a, [q.id]: e.target.value }))}
                placeholder="vastauksesi"
                className={`w-36 rounded-md border px-2 py-1 text-sm focus:outline-none ${
                  isChecked ? (correct ? 'border-emerald-400 bg-emerald-50' : 'border-rose-400 bg-rose-50') : 'border-slate-300'
                }`}
              />
              {!isChecked && (
                <button onClick={() => check(q.id)} className="rounded-md bg-slate-900 px-3 py-1 text-xs font-semibold text-white hover:bg-slate-800">
                  Tarkista
                </button>
              )}
              {isChecked && !correct && (
                <span className="text-xs text-rose-600">
                  Oikea: {q.answer}
                  {q.answer.toLowerCase() !== q.base.toLowerCase() ? ` (perusmuoto: ${q.base})` : ''}
                </span>
              )}
            </div>
          </div>
        )
      })}
      {allChecked && (
        <div className="flex items-center justify-between rounded-lg bg-slate-900 px-3 py-2 text-sm text-white">
          <span>
            {correctCount}/{questions.length} oikein
          </span>
          <button onClick={nextRound} className="rounded-md bg-white/20 px-2 py-1 text-xs font-semibold hover:bg-white/30">
            Uusi kierros
          </button>
        </div>
      )}
    </div>
  )
}
