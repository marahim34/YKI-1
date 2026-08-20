import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { WRITING_TEMPLATES, SPEAKING_PATTERNS } from '../data/templates'
import { useFinnishSpeech } from '../lib/tts'

type Tab = 'writing' | 'speaking'

export default function Templates() {
  const [searchParams] = useSearchParams()
  const [tab, setTab] = useState<Tab>(searchParams.get('tab') === 'speaking' ? 'speaking' : 'writing')
  const [openId, setOpenId] = useState<string | null>(null)
  const { play, speaking, supported } = useFinnishSpeech()

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-slate-900">Mallipohjat</h1>
        <p className="text-sm text-slate-500">
          YKI-tehtävät toistavat samoja kysymys- ja tehtävätyyppejä. Opettele yksi runko per tyyppi, niin voit soveltaa
          samaa rakennetta uuteen aiheeseen vaihtamalla vain sanaston — vaikka et ymmärtäisi kysymyksen jokaista sanaa.
        </p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setTab('writing')}
          className={`flex-1 rounded-lg py-2 text-sm font-semibold ${tab === 'writing' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
        >
          ✍️ Kirjoittaminen
        </button>
        <button
          onClick={() => setTab('speaking')}
          className={`flex-1 rounded-lg py-2 text-sm font-semibold ${tab === 'speaking' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
        >
          🗣️ Puhuminen
        </button>
      </div>

      {tab === 'writing' && (
        <div className="space-y-2">
          {WRITING_TEMPLATES.map((t) => {
            const open = openId === t.id
            return (
              <div key={t.id} className="rounded-xl border border-slate-200 bg-white shadow-sm">
                <button onClick={() => setOpenId(open ? null : t.id)} className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left">
                  <span>
                    <span className="font-semibold text-slate-900">{t.taskType}</span>
                    {t.taskTypeBn && <span className="ml-2 text-xs text-emerald-700">{t.taskTypeBn}</span>}
                  </span>
                  <span className="text-slate-400">{open ? '−' : '+'}</span>
                </button>
                {!open && <p className="px-4 pb-3 text-sm text-slate-500">{t.whenUsed}</p>}
                {open && (
                  <div className="space-y-4 border-t border-slate-100 px-4 py-4">
                    <p className="text-sm text-slate-600">{t.whenUsed}</p>

                    <div className="rounded-lg bg-slate-50 p-3">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">Runko / Template</p>
                      <p className="text-sm text-slate-700">
                        <span className="font-semibold">Aloitus:</span> {t.opening}
                      </p>
                      <p className="mt-1.5 text-sm text-slate-700">
                        <span className="font-semibold">Runko:</span> {t.body}
                      </p>
                      <p className="mt-1.5 text-sm text-slate-700">
                        <span className="font-semibold">Lopetus:</span> {t.closing}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Sama runko, eri aiheilla</p>
                      {t.swaps.map((s) => (
                        <div key={s.topic} className="rounded-lg border border-blue-100 bg-blue-50/50 p-3">
                          <p className="text-xs font-semibold text-blue-800">
                            {s.topic} {s.topicBn && <span className="font-normal text-emerald-700">· {s.topicBn}</span>}
                          </p>
                          <p className="mt-1 whitespace-pre-line text-sm text-slate-700">{s.filled}</p>
                        </div>
                      ))}
                    </div>

                    <ul className="list-inside list-disc space-y-1 text-xs text-slate-500">
                      {t.tips.map((tip, i) => (
                        <li key={i}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      {tab === 'speaking' && (
        <div className="space-y-2">
          {SPEAKING_PATTERNS.map((p) => {
            const open = openId === p.id
            return (
              <div key={p.id} className="rounded-xl border border-slate-200 bg-white shadow-sm">
                <button onClick={() => setOpenId(open ? null : p.id)} className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left">
                  <span>
                    <span className="font-semibold text-slate-900">{p.patternName}</span>
                    {p.patternNameBn && <span className="ml-2 text-xs text-emerald-700">{p.patternNameBn}</span>}
                  </span>
                  <span className="text-slate-400">{open ? '−' : '+'}</span>
                </button>
                {!open && (
                  <p className="px-4 pb-3 text-sm text-slate-500">
                    Tunnista tästä: {p.recognizeBy.join(' · ')}
                  </p>
                )}
                {open && (
                  <div className="space-y-3 border-t border-slate-100 px-4 py-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Tunnista kysymys tästä</p>
                      <div className="mt-1 flex flex-wrap gap-1.5">
                        {p.recognizeBy.map((r) => (
                          <span key={r} className="rounded-full bg-amber-50 px-2.5 py-1 text-xs text-amber-800">
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-lg bg-slate-50 p-3">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">Vastausrunko / Answer template</p>
                      <p className="text-sm text-slate-700">{p.answerTemplate}</p>
                    </div>

                    <div className="rounded-lg border border-emerald-100 bg-emerald-50/50 p-3">
                      <div className="mb-1 flex items-center justify-between">
                        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Täytetty esimerkki</p>
                        {supported && (
                          <button
                            onClick={() => play(p.filledExample)}
                            disabled={speaking}
                            className="rounded-full bg-white px-2 py-0.5 text-xs text-blue-700 shadow-sm hover:bg-blue-50 disabled:opacity-50"
                          >
                            🔊 Kuuntele
                          </button>
                        )}
                      </div>
                      <p className="text-sm text-slate-700">{p.filledExample}</p>
                      {p.filledExampleBn && <p className="mt-1 text-sm text-emerald-800">{p.filledExampleBn}</p>}
                    </div>

                    <ul className="list-inside list-disc space-y-1 text-xs text-slate-500">
                      {p.tips.map((tip, i) => (
                        <li key={i}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
