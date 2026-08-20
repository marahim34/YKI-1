import { useState } from 'react'
import type { BookPracticeDrillItem } from '../types'

function normalize(s: string): string {
  return s.trim().toLowerCase()
}

export default function FillInDrill({ instructions, items }: { instructions: string; items: BookPracticeDrillItem[] }) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [checked, setChecked] = useState<Record<number, boolean>>({})

  function check(i: number) {
    setChecked((c) => ({ ...c, [i]: true }))
  }

  return (
    <div>
      <p className="mb-2 text-sm text-slate-600">{instructions}</p>
      <div className="space-y-2">
        {items.map((item, i) => {
          const isChecked = checked[i]
          const value = answers[i] ?? ''
          const correct = isChecked && normalize(value) === normalize(item.answer)
          return (
            <div key={i} className="rounded-lg border border-slate-200 bg-white p-3">
              <p className="text-sm text-slate-800">{item.prompt}</p>
              {item.hint && <p className="text-xs text-slate-400">{item.hint}</p>}
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <input
                  value={value}
                  onChange={(e) => setAnswers((a) => ({ ...a, [i]: e.target.value }))}
                  className={`w-40 rounded-md border px-2 py-1 text-sm focus:outline-none ${
                    isChecked ? (correct ? 'border-emerald-400 bg-emerald-50' : 'border-rose-400 bg-rose-50') : 'border-slate-300'
                  }`}
                  placeholder="vastauksesi"
                />
                <button onClick={() => check(i)} className="rounded-md bg-slate-900 px-3 py-1 text-xs font-semibold text-white hover:bg-slate-800">
                  Tarkista
                </button>
                {isChecked && (
                  <span className={`text-xs font-medium ${correct ? 'text-emerald-700' : 'text-rose-700'}`}>
                    {correct ? 'Oikein!' : `Oikea vastaus: ${item.answer}`}
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
