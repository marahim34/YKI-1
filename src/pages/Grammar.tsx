import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { CefrLevel, GrammarTopic } from '../types'
import { GRAMMAR_TOPICS, grammarTopic } from '../data/grammar'
import { CASE_TABLE } from '../data/caseTable'
import { VERB_TYPE_TABLE } from '../data/verbTypeTable'
import { VERB_TENSE_TABLE } from '../data/verbTenseTable'
import { GRAMMAR_MINI_TABLES } from '../data/grammarTables'
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
  const [showVerbTable, setShowVerbTable] = useState(false)
  const [showTenseTable, setShowTenseTable] = useState(false)
  const [showMiniTables, setShowMiniTables] = useState(false)
  const [miniTableId, setMiniTableId] = useState(GRAMMAR_MINI_TABLES[0].id)
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

  function jumpToTopic(id: string) {
    if (!grammarTopic(id)) return
    setLevelFilter('all')
    setCategoryFilter('all')
    setQuery('')
    setOpenId(id)
    // Wait a tick for the filter reset to re-render the (now unfiltered) topic list before scrolling.
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

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
            <p className="mb-1 text-xs text-slate-500">
              Kaikki keskeiset sijamuodot rinnakkain samasta sanasta (talo) taivutettuna — helpottaa samankaltaisten
              sijojen erottamista toisistaan. All the core cases inflected from the same word, side by side, to make
              similar-looking cases easier to tell apart.
            </p>
            <p className="mb-3 text-xs text-emerald-700">
              তালিকা শুধু দ্রুত রেফারেন্সের জন্য — প্রতিটি সারির শেষে "Selitys →" বোতাম চাপলে সেই সিজার বিস্তারিত ব্যাখ্যা, উদাহরণ ও
              টিপস সহ নিচে খুলে যাবে।
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-400">
                    <th className="py-2 pr-3">Sija</th>
                    <th className="py-2 pr-3">Pääte</th>
                    <th className="py-2 pr-3">Esimerkki</th>
                    <th className="py-2 pr-3">Käyttö / Use case</th>
                    <th className="py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {CASE_TABLE.map((row) => (
                    <tr key={row.fi} className="border-b border-slate-100 align-top">
                      <td className="py-2 pr-3 font-medium text-slate-900">
                        {row.fi}
                        <span className="block text-xs font-normal text-slate-400">{row.en}</span>
                        <span className="block text-xs font-normal text-emerald-700">{row.termBn}</span>
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
                      <td className="py-2 pr-3 text-slate-600">
                        {row.usage}
                        <span className="block text-emerald-700">{row.usageBn}</span>
                      </td>
                      <td className="py-2">
                        <button
                          onClick={() => jumpToTopic(row.topicId)}
                          className="whitespace-nowrap rounded-full bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-700 hover:bg-violet-100"
                        >
                          Selitys →
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <button
          onClick={() => setShowVerbTable((s) => !s)}
          className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
        >
          <span>
            <span className="font-semibold text-slate-900">Verbityyppien vertailutaulukko</span>
            <span className="ml-2 text-xs text-slate-400">Verb type comparison table — {VERB_TYPE_TABLE.length} tyyppiä</span>
          </span>
          <span className="text-slate-400">{showVerbTable ? '−' : '+'}</span>
        </button>
        {showVerbTable && (
          <div className="border-t border-slate-100 px-4 py-4">
            <p className="mb-1 text-xs text-slate-500">
              Kaikki kuusi verbityyppiä rinnakkain: tunnista tyyppi infinitiivin päätteestä, niin tiedät heti, miten
              preesens muodostetaan. All six verb types side by side: recognize the type from the infinitive ending
              and you immediately know how to build the present tense.
            </p>
            <p className="mb-3 text-xs text-emerald-700">
              তালিকা শুধু দ্রুত রেফারেন্সের জন্য — "Selitys →" বোতাম চাপলে ছয়টি ধরনেরই বিস্তারিত ব্যাখ্যা, উদাহরণ ও টিপস সহ নিচে খুলে
              যাবে।
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-400">
                    <th className="py-2 pr-3">Tyyppi</th>
                    <th className="py-2 pr-3">Infinitiivin pääte</th>
                    <th className="py-2 pr-3">Esimerkki</th>
                    <th className="py-2 pr-3">Sääntö / Rule</th>
                    <th className="py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {VERB_TYPE_TABLE.map((row) => (
                    <tr key={row.type} className="border-b border-slate-100 align-top">
                      <td className="py-2 pr-3 font-medium text-slate-900">
                        {row.type}
                        <span className="block text-xs font-normal text-emerald-700">{row.typeBn}</span>
                      </td>
                      <td className="py-2 pr-3 font-mono text-xs text-violet-700">{row.ending}</td>
                      <td className="py-2 pr-3">
                        <span className="inline-flex items-center gap-1">
                          <span className="font-medium text-slate-800">{row.example}</span>
                          <span className="text-slate-400">→</span>
                          <span className="text-slate-600">{row.minaForm}</span>
                          {supported && (
                            <button
                              onClick={() => play(row.minaForm)}
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
                      <td className="py-2 pr-3 text-slate-600">
                        {row.rule}
                        <span className="block text-emerald-700">{row.ruleBn}</span>
                      </td>
                      <td className="py-2">
                        <button
                          onClick={() => jumpToTopic(row.topicId)}
                          className="whitespace-nowrap rounded-full bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-700 hover:bg-violet-100"
                        >
                          Selitys →
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <button
          onClick={() => setShowTenseTable((s) => !s)}
          className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
        >
          <span>
            <span className="font-semibold text-slate-900">Aikamuotojen ja tapaluokkien vertailutaulukko</span>
            <span className="ml-2 text-xs text-slate-400">Tense &amp; mood comparison table — {VERB_TENSE_TABLE.length} muotoa</span>
          </span>
          <span className="text-slate-400">{showTenseTable ? '−' : '+'}</span>
        </button>
        {showTenseTable && (
          <div className="border-t border-slate-100 px-4 py-4">
            <p className="mb-1 text-xs text-slate-500">
              Kaikki keskeiset aikamuodot ja tapaluokat rinnakkain samasta verbistä (puhua) taivutettuna — eri asia
              kuin yllä oleva verbityyppitaulukko: jokainen verbi, tyypistä riippumatta, esiintyy kaikissa näistä.
              All the core tenses and moods inflected from the same verb, side by side — a different axis from the
              verb-TYPE table above: every verb, whatever its type, appears in all of these.
            </p>
            <p className="mb-3 text-xs text-emerald-700">
              "Milloin käytetään" kertoo, koska valita tämä aikamuoto; "Poikkeukset" nostaa esiin yleisimmät
              sudenkuopat. "Selitys →" avaa täyden selityksen esimerkkeineen alta.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[820px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-400">
                    <th className="py-2 pr-3">Aikamuoto / Tapaluokka</th>
                    <th className="py-2 pr-3">Muodostus</th>
                    <th className="py-2 pr-3">Esimerkki (puhua)</th>
                    <th className="py-2 pr-3">Milloin käytetään / When to use</th>
                    <th className="py-2 pr-3">Poikkeukset / Exceptions</th>
                    <th className="py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {VERB_TENSE_TABLE.map((row) => (
                    <tr key={row.fi} className="border-b border-slate-100 align-top">
                      <td className="py-2 pr-3 font-medium text-slate-900">
                        {row.fi}
                        <span className="block text-xs font-normal text-slate-400">{row.en}</span>
                        <span className="block text-xs font-normal text-emerald-700">{row.termBn}</span>
                      </td>
                      <td className="py-2 pr-3 font-mono text-xs text-violet-700">{row.formation}</td>
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
                      <td className="py-2 pr-3 text-slate-600">
                        {row.usage}
                        <span className="block text-emerald-700">{row.usageBn}</span>
                      </td>
                      <td className="py-2 pr-3 text-slate-600">
                        {row.exceptions}
                        <span className="block text-emerald-700">{row.exceptionsBn}</span>
                      </td>
                      <td className="py-2">
                        <button
                          onClick={() => jumpToTopic(row.topicId)}
                          className="whitespace-nowrap rounded-full bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-700 hover:bg-violet-100"
                        >
                          Selitys →
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <button
          onClick={() => setShowMiniTables((s) => !s)}
          className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
        >
          <span>
            <span className="font-semibold text-slate-900">Muut kielioppitaulukot</span>
            <span className="ml-2 text-xs text-slate-400">More grammar tables — {GRAMMAR_MINI_TABLES.length} taulukkoa</span>
          </span>
          <span className="text-slate-400">{showMiniTables ? '−' : '+'}</span>
        </button>
        {showMiniTables &&
          (() => {
            const activeTable = GRAMMAR_MINI_TABLES.find((t) => t.id === miniTableId) ?? GRAMMAR_MINI_TABLES[0]
            return (
              <div className="border-t border-slate-100 px-4 py-4">
                <p className="mb-3 text-xs text-slate-500">
                  Persoonapronominit, omistusliitteet, kieltomuoto, astevaihtelu, komparointi, modaaliverbit ja
                  kysymyssanat — valitse taulukko. Personal pronouns, possessive suffixes, negation, consonant
                  gradation, comparison, modal verbs, and question words — pick a table below.
                </p>
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {GRAMMAR_MINI_TABLES.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setMiniTableId(t.id)}
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        miniTableId === t.id ? 'bg-violet-600 text-white' : 'bg-violet-50 text-violet-700 hover:bg-violet-100'
                      }`}
                    >
                      {t.title}
                    </button>
                  ))}
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    {activeTable.title} <span className="ml-1 text-xs font-normal text-emerald-700">{activeTable.titleBn}</span>
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{activeTable.intro}</p>
                  <p className="mt-1 text-xs text-emerald-700">{activeTable.introBn}</p>

                  <div className="mt-3 overflow-x-auto">
                    <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                      <thead>
                        <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-400">
                          {activeTable.columns.map((col) => (
                            <th key={col} className="py-2 pr-3">
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {activeTable.rows.map((row, i) => (
                          <tr key={i} className="border-b border-slate-100 align-top">
                            {row.cells.map((c, j) => (
                              <td key={j} className="py-2 pr-3 text-slate-700">
                                {c.fi}
                                {c.bn && <span className="block text-xs text-emerald-700">{c.bn}</span>}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <button
                    onClick={() => jumpToTopic(activeTable.topicId)}
                    className="mt-3 whitespace-nowrap rounded-full bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-700 hover:bg-violet-100"
                  >
                    Selitys →
                  </button>
                </div>
              </div>
            )
          })()}
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
