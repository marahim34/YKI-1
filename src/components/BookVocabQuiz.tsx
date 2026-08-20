import { useState } from 'react'
import type { BookPracticeVocabItem } from '../types'

export default function BookVocabQuiz({ items }: { items: BookPracticeVocabItem[] }) {
  const [answered, setAnswered] = useState<Record<number, number>>({})

  return (
    <div className="space-y-2">
      {items.map((item, i) => {
        const picked = answered[i]
        return (
          <div key={i} className="rounded-lg border border-slate-200 bg-white p-3">
            <p className="text-sm font-medium text-slate-800">{item.question}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {item.options.map((opt, oi) => {
                const isPicked = picked === oi
                const isCorrect = picked !== undefined && oi === item.correctIndex
                const isWrongPick = isPicked && oi !== item.correctIndex
                return (
                  <button
                    key={oi}
                    onClick={() => setAnswered((a) => ({ ...a, [i]: oi }))}
                    disabled={picked !== undefined}
                    className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                      isCorrect
                        ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                        : isWrongPick
                          ? 'border-rose-300 bg-rose-50 text-rose-800'
                          : 'border-slate-200 text-slate-600 hover:border-blue-300'
                    }`}
                  >
                    {opt}
                  </button>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
