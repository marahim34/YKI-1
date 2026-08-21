import { useMemo, useState } from 'react'
import { VOCAB_BANK } from '../data/vocab'
import { loadCustomVocab } from '../lib/customContent'
import { shuffle } from '../lib/vocabGames'
import VocabPracticeTabs from '../components/VocabPracticeTabs'

const SET_SIZE = 20

export default function DailyPractice() {
  const allItems = useMemo(() => [...VOCAB_BANK, ...loadCustomVocab()], [])
  const [round, setRound] = useState(0)
  const items = useMemo(() => shuffle(allItems).slice(0, Math.min(SET_SIZE, allItems.length)), [allItems, round])

  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Sekoitettu harjoitus</h1>
          <p className="text-sm text-slate-500">
            {SET_SIZE} satunnaista sanaa poimittuna kaikista aihepiireistä ({allItems.length} sanaa yhteensä) — hyvä
            tapa kerrata monipuolisesti, kun et halua keskittyä vain yhteen teemaan. A random mixed set of {SET_SIZE}{' '}
            words drawn from every topic in the vocabulary bank.
          </p>
        </div>
        <button
          onClick={() => setRound((r) => r + 1)}
          className="shrink-0 rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-700"
        >
          🎲 Uusi sekoitus
        </button>
      </div>

      <VocabPracticeTabs items={items} />
    </div>
  )
}
