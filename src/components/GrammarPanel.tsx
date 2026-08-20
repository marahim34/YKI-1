import { useState } from 'react'
import { Link } from 'react-router-dom'
import { grammarTopicsFor } from '../data/grammar'
import LevelPill from './LevelPill'

export default function GrammarPanel({ topicIds, defaultOpen = false }: { topicIds: string[]; defaultOpen?: boolean }) {
  const topics = grammarTopicsFor(topicIds)
  const [openId, setOpenId] = useState<string | null>(defaultOpen ? (topics[0]?.id ?? null) : null)

  if (topics.length === 0) return null

  return (
    <section className="rounded-2xl border border-violet-200 bg-violet-50/60 p-4">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-1.5 text-sm font-semibold text-violet-900">📐 Kielioppi tällä viikolla</h2>
        <Link to="/grammar" className="text-xs font-semibold text-violet-700 hover:underline">
          Koko kielioppiopas →
        </Link>
      </div>
      <div className="mt-2 space-y-2">
        {topics.map((topic) => {
          const open = openId === topic.id
          return (
            <div key={topic.id} className="rounded-xl border border-violet-200 bg-white">
              <button
                onClick={() => setOpenId(open ? null : topic.id)}
                className="flex w-full items-center justify-between gap-2 px-3 py-2.5 text-left"
              >
                <span className="flex items-center gap-2">
                  <span className="text-sm font-medium text-slate-900">{topic.title}</span>
                  <LevelPill level={topic.level} />
                </span>
                <span className="text-slate-400">{open ? '−' : '+'}</span>
              </button>
              {open && (
                <div className="space-y-3 border-t border-violet-100 px-3 py-3">
                  <p className="text-sm text-slate-600">{topic.summary}</p>
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
    </section>
  )
}
