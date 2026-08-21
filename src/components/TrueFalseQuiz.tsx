import { useState } from 'react'
import type { TrueFalseQuestion } from '../types'

export default function TrueFalseQuiz({ questions }: { questions: TrueFalseQuestion[] }) {
  const [answers, setAnswers] = useState<Record<string, boolean>>({})
  const [submitted, setSubmitted] = useState(false)

  const allAnswered = questions.every((q) => answers[q.id] !== undefined)
  const correctCount = questions.filter((q) => answers[q.id] === q.answer).length

  return (
    <div className="space-y-3">
      {questions.map((q, qi) => {
        const selected = answers[q.id]
        return (
          <div key={q.id} className="rounded-lg border border-slate-200 bg-white p-3">
            <p className="text-sm font-medium text-slate-900">
              {qi + 1}. {q.statementFi}
            </p>
            {q.statementEn && <p className="text-xs text-slate-400">{q.statementEn}</p>}
            <div className="mt-2 flex gap-2">
              {(
                [
                  ['Oikein', true],
                  ['Väärin', false],
                ] as const
              ).map(([label, value]) => {
                const isSelected = selected === value
                const isCorrectOption = submitted && value === q.answer
                const isWrongSelected = submitted && isSelected && value !== q.answer
                return (
                  <button
                    key={label}
                    disabled={submitted}
                    onClick={() => setAnswers((a) => ({ ...a, [q.id]: value }))}
                    className={`rounded-md border px-3 py-1.5 text-xs font-semibold transition-colors ${
                      isCorrectOption
                        ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                        : isWrongSelected
                          ? 'border-rose-300 bg-rose-50 text-rose-800'
                          : isSelected
                            ? 'border-blue-400 bg-blue-50 text-blue-800'
                            : 'border-slate-200 text-slate-600 hover:border-blue-300'
                    }`}
                  >
                    {label}
                  </button>
                )
              })}
            </div>
            {submitted && q.explanation && <p className="mt-2 text-xs text-slate-500">{q.explanation}</p>}
          </div>
        )
      })}
      {!submitted ? (
        <button
          disabled={!allAnswered}
          onClick={() => setSubmitted(true)}
          className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          Tarkista vastaukset
        </button>
      ) : (
        <div className="rounded-xl bg-slate-900 p-3 text-center text-white">
          <p className="font-bold">
            {correctCount}/{questions.length} oikein
          </p>
        </div>
      )}
    </div>
  )
}
