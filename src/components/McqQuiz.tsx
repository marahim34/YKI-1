import { useState } from 'react'
import type { McqQuestion } from '../types'

export default function McqQuiz({
  questions,
  onFinish,
}: {
  questions: McqQuestion[]
  onFinish: (score: number) => void
}) {
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [submitted, setSubmitted] = useState(false)

  const allAnswered = questions.every((q) => answers[q.id] !== undefined)
  const correctCount = questions.filter((q) => answers[q.id] === q.correctIndex).length

  function handleSubmit() {
    setSubmitted(true)
    onFinish(correctCount / questions.length)
  }

  return (
    <div className="space-y-4">
      {questions.map((q, qi) => (
        <div key={q.id} className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="font-medium text-slate-900">
            {qi + 1}. {q.question}
          </p>
          <div className="mt-2 space-y-1.5">
            {q.options.map((opt, oi) => {
              const selected = answers[q.id] === oi
              const isCorrectOption = submitted && oi === q.correctIndex
              const isWrongSelected = submitted && selected && oi !== q.correctIndex
              return (
                <button
                  key={oi}
                  disabled={submitted}
                  onClick={() => setAnswers((a) => ({ ...a, [q.id]: oi }))}
                  className={`block w-full rounded-lg border px-3 py-2 text-left text-sm transition-colors ${
                    isCorrectOption
                      ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                      : isWrongSelected
                        ? 'border-rose-300 bg-rose-50 text-rose-800'
                        : selected
                          ? 'border-blue-400 bg-blue-50 text-blue-800'
                          : 'border-slate-200 text-slate-700 hover:border-blue-300'
                  }`}
                >
                  {opt}
                </button>
              )
            })}
          </div>
          {submitted && q.explanation && <p className="mt-2 text-xs text-slate-500">{q.explanation}</p>}
        </div>
      ))}

      {!submitted ? (
        <button
          disabled={!allAnswered}
          onClick={handleSubmit}
          className="w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          Tarkista vastaukset
        </button>
      ) : (
        <div className="rounded-xl bg-slate-900 p-4 text-center text-white">
          <p className="text-lg font-bold">
            {correctCount}/{questions.length} oikein
          </p>
        </div>
      )}
    </div>
  )
}
