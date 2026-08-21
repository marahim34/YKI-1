import { useMemo, useState } from 'react'
import type { VocabItem } from '../types'
import { shuffle } from '../lib/vocabGames'

export default function MatchGame({ items }: { items: VocabItem[] }) {
  const [round, setRound] = useState(0)
  const pairCount = Math.min(8, items.length)

  const pool = useMemo(() => shuffle(items).slice(0, pairCount), [items, pairCount, round])
  const leftItems = useMemo(() => shuffle(pool), [pool])
  const rightItems = useMemo(() => shuffle(pool), [pool])

  const [selectedLeft, setSelectedLeft] = useState<string | null>(null)
  const [selectedRight, setSelectedRight] = useState<string | null>(null)
  const [matched, setMatched] = useState<Set<string>>(new Set())
  const [wrongFlash, setWrongFlash] = useState<{ left?: string; right?: string }>({})

  if (pool.length < 2) {
    return <p className="text-sm text-slate-500">Tälle kategorialle ei ole tarpeeksi sanoja yhdistämispeliin.</p>
  }

  function attemptMatch(leftId: string | null, rightId: string | null) {
    if (!leftId || !rightId) return
    if (leftId === rightId) {
      setMatched((m) => new Set(m).add(leftId))
      setSelectedLeft(null)
      setSelectedRight(null)
    } else {
      setWrongFlash({ left: leftId, right: rightId })
      setTimeout(() => {
        setWrongFlash({})
        setSelectedLeft(null)
        setSelectedRight(null)
      }, 500)
    }
  }

  function pickLeft(id: string) {
    if (matched.has(id) || wrongFlash.left) return
    setSelectedLeft(id)
    attemptMatch(id, selectedRight)
  }

  function pickRight(id: string) {
    if (matched.has(id) || wrongFlash.right) return
    setSelectedRight(id)
    attemptMatch(selectedLeft, id)
  }

  function cellClass(isMatched: boolean, isSelected: boolean, isWrong: boolean) {
    if (isMatched) return 'border-emerald-300 bg-emerald-50 text-emerald-700 opacity-60'
    if (isWrong) return 'border-rose-400 bg-rose-50 text-rose-700'
    if (isSelected) return 'border-blue-400 bg-blue-50 text-blue-800'
    return 'border-slate-200 text-slate-700 hover:border-blue-300'
  }

  const done = matched.size === pool.length

  return (
    <div>
      <p className="mb-2 text-xs text-slate-500">
        Yhdistä suomenkielinen sana sen merkitykseen. Match the Finnish word to its meaning.
      </p>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          {leftItems.map((it) => (
            <button
              key={it.id}
              onClick={() => pickLeft(it.id)}
              disabled={matched.has(it.id)}
              className={`w-full rounded-lg border px-3 py-2 text-left text-sm font-medium transition-colors ${cellClass(matched.has(it.id), selectedLeft === it.id, wrongFlash.left === it.id)}`}
            >
              {it.fi}
            </button>
          ))}
        </div>
        <div className="space-y-1.5">
          {rightItems.map((it) => (
            <button
              key={it.id}
              onClick={() => pickRight(it.id)}
              disabled={matched.has(it.id)}
              className={`w-full rounded-lg border px-3 py-2 text-left text-sm transition-colors ${cellClass(matched.has(it.id), selectedRight === it.id, wrongFlash.right === it.id)}`}
            >
              {it.en}
            </button>
          ))}
        </div>
      </div>
      {done && (
        <div className="mt-3 flex items-center justify-between rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
          <span>🎉 Hienoa! Kaikki yhdistetty oikein.</span>
          <button
            onClick={() => setRound((r) => r + 1)}
            className="rounded-md bg-emerald-600 px-2 py-1 text-xs font-semibold text-white hover:bg-emerald-700"
          >
            Uusi kierros
          </button>
        </div>
      )}
    </div>
  )
}
