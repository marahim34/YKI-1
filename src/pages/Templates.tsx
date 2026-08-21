import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { WRITING_TEMPLATES, SPEAKING_PATTERNS } from '../data/templates'
import { useFinnishSpeech } from '../lib/tts'

type Tab = 'writing' | 'speaking'

export default function Templates() {
  const [searchParams] = useSearchParams()
  const [tab, setTab] = useState<Tab>(searchParams.get('tab') === 'speaking' ? 'speaking' : 'writing')
  const [openId, setOpenId] = useState<string | null>(null)
  const [showLevelGuide, setShowLevelGuide] = useState(true)
  const { play, speaking, supported } = useFinnishSpeech()

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-slate-900">Mallipohjat</h1>
        <p className="text-sm text-slate-500">
          YKI-tehtävät toistavat samoja kysymys- ja tehtävätyyppejä. Opettele yksi runko per tyyppi, niin voit soveltaa
          samaa rakennetta uuteen aiheeseen vaihtamalla vain sanaston — vaikka et ymmärtäisi kysymyksen jokaista sanaa.
        </p>
        <p className="mt-1.5 text-sm text-emerald-700">
          প্রতিটি রানকো (কাঠামো)-র নিচে বাংলায় ব্যাখ্যা আছে, যাতে বুঝতে সহজ হয় — শুধু ফিনিশ পড়ে আটকে যাবেন না, নিচে দেখুন! ↓
        </p>
      </div>

      <section className="rounded-2xl border border-blue-200 bg-blue-50 shadow-sm">
        <button onClick={() => setShowLevelGuide((s) => !s)} className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left">
          <span className="font-semibold text-blue-900">🎯 Tavoitteena taitotaso 4</span>
          <span className="text-blue-400">{showLevelGuide ? '−' : '+'}</span>
        </button>
        {showLevelGuide && (
          <div className="space-y-2 border-t border-blue-100 px-4 py-4 text-sm text-blue-900">
            <p>
              YKI-koe arvioi jokaisen osa-alueen taitotasolla 1–6. Keskitason koe kattaa tasot 3–6, ja taitotaso 4 (suunnilleen
              CEFR-tasoa B1.2–B2) on yleisin vaadittu taso esimerkiksi työelämässä ja kansalaisuushakemuksissa. Tämä ei ole
              virallinen arviointiohje, vaan yleinen suuntaviiva siitä, mihin sovellus pyrkii valmentamaan sinua.
            </p>
            <p>Tyypillisesti taitotasolla 4 arvioija odottaa tekstiltä/puheelta:</p>
            <ul className="list-inside list-disc space-y-1">
              <li>Selkeää rakennetta: johdanto, kehittely useammalla perustellulla näkökulmalla, lopetus.</li>
              <li>Laajaa rakennevalikoimaa — ei vain preesensiä, vaan myös sivulauseita, passiivia, konditionaalia ja tarvittaessa referointia tai partisiippirakenteita.</li>
              <li>Melko sujuvaa ja tarkkaa kielenkäyttöä: pienet virheet eivät haittaa ymmärrettävyyttä.</li>
              <li>Kykyä käsitellä sekä arkisia että hieman abstraktimpia aiheita (esim. mielipiteet, yhteiskunnalliset teemat).</li>
              <li>Konnektoreiden käyttöä (toisaalta, kuitenkin, näin ollen) tekstin sitomiseksi yhtenäiseksi kokonaisuudeksi.</li>
            </ul>
            <p className="text-blue-700">
              এই মানদণ্ড অফিসিয়াল রুব্রিক নয়, বরং সাধারণ দিকনির্দেশনা — টাইটোতাসো ৪ মানে মোটামুটি B1.2–B2 স্তরের সাবলীল, সুগঠিত ভাষা।
              অর্থাৎ পরীক্ষক আশা করেন স্পষ্ট গঠন, বিভিন্ন ধরনের বাক্য এবং যুক্তিসহ মতামত দেওয়ার ক্ষমতা।
            </p>
            <p className="text-xs text-blue-600">
              Mallivastaukset koko sovelluksessa (viikkojen kirjoitus-/puhetehtävät, koepaketit ja mallipohjat alla) on
              kirjoitettu tätä tasoa silmällä pitäen — käytä niitä vertailukohtana omalle vastauksellesi.
            </p>
          </div>
        )}
      </section>

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
                {!open && (
                  <div className="px-4 pb-3">
                    <p className="text-sm text-slate-500">{t.whenUsed}</p>
                    {t.whenUsedBn && <p className="mt-0.5 text-xs text-emerald-700">{t.whenUsedBn}</p>}
                  </div>
                )}
                {open && (
                  <div className="space-y-4 border-t border-slate-100 px-4 py-4">
                    <div>
                      <p className="text-sm text-slate-600">{t.whenUsed}</p>
                      {t.whenUsedBn && <p className="mt-1 text-sm text-emerald-700">{t.whenUsedBn}</p>}
                    </div>

                    <div className="rounded-lg bg-slate-50 p-3">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">Runko / Template</p>
                      <p className="text-sm text-slate-700">
                        <span className="font-semibold">Aloitus:</span> {t.opening}
                      </p>
                      {t.openingBn && <p className="mt-0.5 text-sm text-emerald-700">{t.openingBn}</p>}
                      <p className="mt-2 text-sm text-slate-700">
                        <span className="font-semibold">Runko:</span> {t.body}
                      </p>
                      {t.bodyBn && <p className="mt-0.5 text-sm text-emerald-700">{t.bodyBn}</p>}
                      <p className="mt-2 text-sm text-slate-700">
                        <span className="font-semibold">Lopetus:</span> {t.closing}
                      </p>
                      {t.closingBn && <p className="mt-0.5 text-sm text-emerald-700">{t.closingBn}</p>}
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

                    <ul className="list-inside list-disc space-y-1.5 text-xs text-slate-500">
                      {t.tips.map((tip, i) => (
                        <li key={i}>
                          {tip}
                          {t.tipsBn?.[i] && <span className="mt-0.5 block pl-4 text-emerald-700">{t.tipsBn[i]}</span>}
                        </li>
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
                        {p.recognizeBy.map((r, i) => (
                          <span key={r} className="flex flex-col items-start rounded-lg bg-amber-50 px-2.5 py-1.5 text-xs text-amber-800">
                            <span>{r}</span>
                            {p.recognizeByBn?.[i] && <span className="mt-0.5 text-[11px] text-emerald-700">{p.recognizeByBn[i]}</span>}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-lg bg-slate-50 p-3">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">Vastausrunko / Answer template</p>
                      <p className="text-sm text-slate-700">{p.answerTemplate}</p>
                      {p.answerTemplateBn && <p className="mt-1 text-sm text-emerald-700">{p.answerTemplateBn}</p>}
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

                    {p.verbTable && p.verbTable.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Myönteinen vs. kielteinen vastaus — esimerkkiverbit
                        </p>
                        <p className="mt-0.5 text-xs text-emerald-700">ইতিবাচক বনাম নেতিবাচক উত্তর — উদাহরণ ক্রিয়াপদ</p>
                        <div className="mt-2 overflow-x-auto rounded-lg border border-slate-200">
                          <table className="w-full min-w-[560px] text-left text-xs">
                            <thead>
                              <tr className="bg-slate-50 text-slate-500">
                                <th className="px-2.5 py-2 font-semibold">Verbi</th>
                                <th className="px-2.5 py-2 font-semibold text-emerald-700">✓ Myönteinen (kyllä)</th>
                                <th className="px-2.5 py-2 font-semibold text-rose-700">✗ Kielteinen (ei)</th>
                              </tr>
                            </thead>
                            <tbody>
                              {p.verbTable.map((v) => (
                                <tr key={v.verb} className="border-t border-slate-100 align-top">
                                  <td className="px-2.5 py-2">
                                    <p className="font-medium text-slate-800">{v.verb}</p>
                                    <p className="text-slate-400">{v.verbEn}</p>
                                  </td>
                                  <td className="bg-emerald-50/40 px-2.5 py-2 text-slate-700">
                                    <p>{v.positiveFi}</p>
                                  </td>
                                  <td className="bg-rose-50/40 px-2.5 py-2 text-slate-700">
                                    <p>{v.negativeFi}</p>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <div className="mt-1.5 space-y-1">
                          {p.verbTable.map((v) => (
                            <p key={v.verb} className="text-[11px] text-slate-400">
                              <span className="font-medium text-slate-500">{v.verb.split(' ')[0]}:</span> {v.en}
                              {v.bn && <span className="text-emerald-700"> · {v.bn}</span>}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}

                    <ul className="list-inside list-disc space-y-1.5 text-xs text-slate-500">
                      {p.tips.map((tip, i) => (
                        <li key={i}>
                          {tip}
                          {p.tipsBn?.[i] && <span className="mt-0.5 block pl-4 text-emerald-700">{p.tipsBn[i]}</span>}
                        </li>
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
