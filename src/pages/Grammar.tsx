import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { CefrLevel, GrammarTopic } from '../types'
import { GRAMMAR_TOPICS, grammarTopic } from '../data/grammar'
import { CASE_TABLE } from '../data/caseTable'
import LevelPill from '../components/LevelPill'
import { useFinnishSpeech } from '../lib/tts'

const LEVELS: CefrLevel[] = ['A1', 'A2', 'B1', 'B2']

function groupByCategory(topics: GrammarTopic[]): [string, GrammarTopic[]][] {
  const map = new Map<string, GrammarTopic[]>()
  for (const t of topics) {
    const list = map.get(t.category) ?? []
    list.push(t)
    map.set(t.category, list)
  }
  return [...map.entries()]
}

export default function Grammar() {
  const [searchParams] = useSearchParams()
  const deepLinkId = searchParams.get('topic')

  const [levelFilter, setLevelFilter] = useState<CefrLevel | 'all'>('all')
  const [categoryFilter, setCategoryFilter] = useState<string | 'all'>('all')
  const [query, setQuery] = useState('')
  const [openId, setOpenId] = useState<string | null>(deepLinkId)
  const [showCaseTable, setShowCaseTable] = useState(true)
  const { play, speaking, supported } = useFinnishSpeech()

  useEffect(() => {
    if (!deepLinkId || !grammarTopic(deepLinkId)) return
    setOpenId(deepLinkId)
    const el = document.getElementById(deepLinkId)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deepLinkId])

  const categories = useMemo(() => [...new Set(GRAMMAR_TOPICS.map((t) => t.category))].sort(), [])

  const topics = useMemo(() => {
    const q = query.trim().toLowerCase()
    return GRAMMAR_TOPICS.filter((t) => {
      if (levelFilter !== 'all' && t.level !== levelFilter) return false
      if (categoryFilter !== 'all' && t.category !== categoryFilter) return false
      if (q && !(t.title.toLowerCase().includes(q) || t.summary.toLowerCase().includes(q))) return false
      return true
    })
  }, [levelFilter, categoryFilter, query])

  const grouped = useMemo(() => groupByCategory(topics), [topics])

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-slate-900">Kielioppiopas</h1>
        <p className="text-sm text-slate-500">
          {GRAMMAR_TOPICS.length} kielioppiaihetta A1-tasosta B2-tasolle — koko suomen kielen keskeinen kielioppi
          selityksillä ja runsailla esimerkeillä, {categories.length} aihepiiriin jaoteltuna. Sama sisältö näkyy myös
          lyhennettynä kunkin viikon ja harjoituksen "Kielioppi tällä viikolla" -osiossa.
        </p>
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <button
          onClick={() => setShowCaseTable((s) => !s)}
          className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
        >
          <span>
            <span className="font-semibold text-slate-900">Sijamuotojen vertailutaulukko</span>
            <span className="ml-2 text-xs text-slate-400">Case comparison table — {CASE_TABLE.length} sijamuotoa</span>
          </span>
          <span className="text-slate-400">{showCaseTable ? '−' : '+'}</span>
        </button>
        {showCaseTable && (
          <div className="border-t border-slate-100 px-4 py-4">
            <p className="mb-3 text-xs text-slate-500">
              Kaikki keskeiset sijamuodot rinnakkain samasta sanasta (talo) taivutettuna — helpottaa samankaltaisten
              sijojen erottamista toisistaan. All the core cases inflected from the same word, side by side, to make
              similar-looking cases easier to tell apart.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-400">
                    <th className="py-2 pr-3">Sija</th>
                    <th className="py-2 pr-3">Pääte</th>
                    <th className="py-2 pr-3">Esimerkki</th>
                    <th className="py-2">Käyttö / Use case</th>
                  </tr>
                </thead>
                <tbody>
                  {CASE_TABLE.map((row) => (
                    <tr key={row.fi} className="border-b border-slate-100 align-top">
                      <td className="py-2 pr-3 font-medium text-slate-900">
                        {row.fi}
                        <span className="block text-xs font-normal text-slate-400">{row.en}</span>
                      </td>
                      <td className="py-2 pr-3 font-mono text-xs text-violet-700">{row.ending}</td>
                      <td className="py-2 pr-3">
                        <span className="inline-flex items-center gap-1">
                          <span className="font-medium text-slate-800">{row.example}</span>
                          {supported && (
                            <button
                              onClick={() => play(row.example)}
                              disabled={speaking}
                              aria-label="Kuuntele ääntäminen"
                              title="Kuuntele ääntäminen"
                              className="rounded-full bg-blue-50 px-1 py-0.5 text-[10px] text-blue-700 hover:bg-blue-100 disabled:opacity-50"
                            >
                              🔊
                            </button>
                          )}
                        </span>
                      </td>
                      <td className="py-2 text-slate-600">
                        {row.usage}
                        <span className="block text-emerald-700">{row.usageBn}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Hae aihetta (esim. partitiivi, passiivi, sanajärjestys...)"
        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-400 focus:outline-none"
      />

      <div className="space-y-2">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setLevelFilter('all')}
            className={`rounded-full px-3 py-1 text-sm font-medium ${
              levelFilter === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Kaikki tasot
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
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setCategoryFilter('all')}
            className={`rounded-full px-2.5 py-1 text-xs font-medium ${
              categoryFilter === 'all' ? 'bg-violet-600 text-white' : 'bg-violet-50 text-violet-700 hover:bg-violet-100'
            }`}
          >
            Kaikki aihepiirit
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategoryFilter(c)}
              className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                categoryFilter === c ? 'bg-violet-600 text-white' : 'bg-violet-50 text-violet-700 hover:bg-violet-100'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {topics.length === 0 && <p className="text-sm text-slate-500">Ei tuloksia. Kokeile toista hakusanaa tai suodatinta.</p>}

      {grouped.map(([category, categoryTopics]) => (
        <section key={category} className="space-y-2">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            {category} <span className="text-slate-300">({categoryTopics.length})</span>
          </h2>
          {categoryTopics.map((topic) => {
            const open = openId === topic.id
            return (
              <div key={topic.id} id={topic.id} className="rounded-xl border border-slate-200 bg-white shadow-sm">
                <button onClick={() => setOpenId(open ? null : topic.id)} className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left">
                  <span className="flex flex-1 items-center gap-2">
                    <LevelPill level={topic.level} />
                    <span className="font-semibold text-slate-900">{topic.title}</span>
                  </span>
                  <span className="text-slate-400">{open ? '−' : '+'}</span>
                </button>
                {!open && (
                  <div className="px-4 pb-3">
                    <p className="text-sm text-slate-500">{topic.summary}</p>
                    {topic.summaryBn && <p className="text-sm text-emerald-700">{topic.summaryBn}</p>}
                  </div>
                )}
                {open && (
                  <div className="space-y-3 border-t border-slate-100 px-4 py-4">
                    <p className="text-sm font-medium text-slate-700">{topic.summary}</p>
                    {topic.summaryBn && <p className="text-sm font-medium text-emerald-700">{topic.summaryBn}</p>}
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
        </section>
      ))}
    </div>
  )
}
