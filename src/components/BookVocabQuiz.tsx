import { useState } from 'react'
import type { BookPracticeVocabItem } from '../types'
import { useFinnishSpeech } from '../lib/tts'

export default function BookVocabQuiz({ items }: { items: BookPracticeVocabItem[] }) {
  const [answered, setAnswered] = useState<Record<number, number>>({})
  const { play, speaking, supported } = useFinnishSpeech()

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
                  <span key={oi} className="inline-flex items-center gap-0.5">
                    <button
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
                    {supported && (
                      <button
                        onClick={() => play(opt)}
                        disabled={speaking}
                        aria-label="Kuuntele ääntäminen"
                        title="Kuuntele ääntäminen"
                        className="rounded-full bg-blue-50 px-1 py-0.5 text-[10px] text-blue-700 hover:bg-blue-100 disabled:opacity-50"
                      >
                        🔊
                      </button>
                    )}
                  </span>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
