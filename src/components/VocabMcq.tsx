import { useMemo, useState } from 'react'
import type { VocabItem } from '../types'
import { buildMcqQuestions } from '../lib/vocabGames'
import McqQuiz from './McqQuiz'

export default function VocabMcq({ items }: { items: VocabItem[] }) {
  const [round, setRound] = useState(0)
  const [done, setDone] = useState(false)
  const questions = useMemo(() => buildMcqQuestions(items), [items, round])

  if (questions.length === 0) {
    return <p className="text-sm text-slate-500">Tälle kategorialle ei ole tarpeeksi sanoja monivalintatehtävään.</p>
  }

  return (
    <div>
      <McqQuiz key={round} questions={questions} onFinish={() => setDone(true)} />
      {done && (
        <button
          onClick={() => {
            setRound((r) => r + 1)
            setDone(false)
          }}
          className="mt-3 w-full rounded-lg bg-slate-100 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200"
        >
          Uusi kierros
        </button>
      )}
    </div>
  )
}
