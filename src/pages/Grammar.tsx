import { useMemo, useState } from 'react'
import type { CefrLevel } from '../types'
import { GRAMMAR_TOPICS } from '../data/grammar'
import LevelPill from '../components/LevelPill'

const LEVELS: CefrLevel[] = ['A1', 'A2', 'B1', 'B2']

export default function Grammar() {
  const [levelFilter, setLevelFilter] = useState<CefrLevel | 'all'>('all')
  const [openId, setOpenId] = useState<string | null>(null)

  const topics = useMemo(
    () => (levelFilter === 'all' ? GRAMMAR_TOPICS : GRAMMAR_TOPICS.filter((t) => t.level === levelFilter)),
    [levelFilter],
  )

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-slate-900">Kielioppiopas</h1>
        <p className="text-sm text-slate-500">
          {GRAMMAR_TOPICS.length} kielioppiaihetta A1-tasosta B2-tasolle, selityksillä ja esimerkeillä. Sama sisältö näkyy
          myös lyhennettynä kunkin viikon ja harjoituksen "Kielioppi tällä viikolla" -osiossa.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setLevelFilter('all')}
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            levelFilter === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          Kaikki
        </button>
        {LEVELS.map((level) => (
          <button
            key={level}
            onClick={() => setLevelFilter(level)}
            className={`rounded-full px-3 py-1 text-sm font-medium ${
              levelFilter === level ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {level}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {topics.map((topic) => {
          const open = openId === topic.id
          return (
            <div key={topic.id} id={topic.id} className="rounded-xl border border-slate-200 bg-white shadow-sm">
              <button onClick={() => setOpenId(open ? null : topic.id)} className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left">
                <span className="flex flex-1 items-center gap-2">
                  <LevelPill level={topic.level} />
                  <span className="font-semibold text-slate-900">{topic.title}</span>
                  <span className="hidden text-xs text-slate-400 sm:inline">· {topic.category}</span>
                </span>
                <span className="text-slate-400">{open ? '−' : '+'}</span>
              </button>
              {!open && <p className="px-4 pb-3 text-sm text-slate-500">{topic.summary}</p>}
              {open && (
                <div className="space-y-3 border-t border-slate-100 px-4 py-4">
                  <p className="text-sm font-medium text-slate-700">{topic.summary}</p>
                  {topic.explanation.map((p, i) => (
                    <p key={i} className="text-sm leading-relaxed text-slate-700">
                      {p}
                    </p>
                  ))}
                  <div className="space-y-1.5">
                    {topic.examples.map((ex, i) => (
                      <div key={i} className="rounded-lg bg-slate-50 px-3 py-2 text-sm">
                        <p className="font-medium text-slate-800">{ex.fi}</p>
                        <p className="text-slate-500">{ex.en}</p>
                        {ex.note && <p className="mt-0.5 text-xs italic text-violet-600">{ex.note}</p>}
                      </div>
                    ))}
                  </div>
                  {topic.tips && topic.tips.length > 0 && (
                    <ul className="list-inside list-disc space-y-1 text-xs text-slate-500">
                      {topic.tips.map((tip, i) => (
                        <li key={i}>{tip}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
