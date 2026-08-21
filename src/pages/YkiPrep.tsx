import { useEffect, useState } from 'react'
import { YKI_CHAPTERS, YKI_SUBTESTS, YKI_THEMES } from '../data/ykiPrep'
import type { YkiSpeakingLongTask } from '../types'
import { formatSeconds } from '../lib/timer'
import LevelPill from '../components/LevelPill'
import YkiTip from '../components/YkiTip'
import YkiPassageCard from '../components/YkiPassageCard'
import SequentialTimer from '../components/SequentialTimer'

type Tab = 'yleiskatsaus' | 'lukeminen' | 'kirjoittaminen' | 'kuunteleminen' | 'puhuminen' | 'sanasto'

const TABS: { key: Tab; label: string; icon: string }[] = [
  { key: 'yleiskatsaus', label: 'Yleiskatsaus', icon: '🗂️' },
  { key: 'lukeminen', label: 'Lukeminen', icon: '📖' },
  { key: 'kirjoittaminen', label: 'Kirjoittaminen', icon: '✍️' },
  { key: 'kuunteleminen', label: 'Kuunteleminen', icon: '🎧' },
  { key: 'puhuminen', label: 'Puhuminen', icon: '🗣️' },
  { key: 'sanasto', label: 'Sanasto', icon: '📋' },
]

function VocabGrid({ items }: { items: { fi: string; en: string }[] }) {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
      {items.map((v, i) => (
        <div key={i} className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
          <p className="font-medium text-slate-900">{v.fi}</p>
          <p className="text-sm text-slate-500">{v.en}</p>
        </div>
      ))}
    </div>
  )
}

function LongSpeakingTaskCard({ task }: { task: YkiSpeakingLongTask }) {
  return (
    <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div>
        <p className="font-semibold text-slate-900">{task.titleFi}</p>
        {task.titleEn && <p className="text-xs text-slate-400">{task.titleEn}</p>}
        <p className="mt-1 text-xs text-slate-400">
          Valmistautumisaika {formatSeconds(task.prepSeconds)} · Puheaika {formatSeconds(task.speakSeconds)}
        </p>
      </div>
      {task.questions.length > 0 && (
        <ul className="list-inside list-disc space-y-1 text-sm text-slate-700">
          {task.questions.map((q, i) => (
            <li key={i}>{q}</li>
          ))}
        </ul>
      )}
      {task.subChoices && (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {task.subChoices.map((sc) => (
            <div key={sc.label} className="rounded-lg border border-slate-100 bg-slate-50 p-3">
              <p className="mb-1.5 text-xs font-semibold text-slate-700">{sc.label}</p>
              <ul className="list-inside list-disc space-y-1 text-xs text-slate-600">
                {sc.questions.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      <SequentialTimer
        steps={[
          { label: 'Valmistaudu', seconds: task.prepSeconds },
          { label: '🔴 Puhu nyt', seconds: task.speakSeconds },
        ]}
        idleLabel="Aloita ajastin"
      />
    </div>
  )
}

export default function YkiPrep() {
  const [chapterId, setChapterId] = useState(YKI_CHAPTERS[0].id)
  const chapter = YKI_CHAPTERS.find((c) => c.id === chapterId) ?? YKI_CHAPTERS[0]
  const [tab, setTab] = useState<Tab>('yleiskatsaus')

  useEffect(() => {
    setTab('yleiskatsaus')
  }, [chapterId])

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-slate-900">YKI-valmennus</h1>
        <p className="text-sm text-slate-500">
          Kirjan omaan lukujakoon ja YKI-testin neljään osakokeeseen (lukeminen, kirjoittaminen, kuunteleminen, puhuminen) rakennettu
          valmennus, joka etenee lämmittele → harjoittele → testaa -periaatteella jokaisessa osakokeessa.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {YKI_CHAPTERS.map((c) => (
          <button
            key={c.id}
            onClick={() => setChapterId(c.id)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium ${
              chapterId === c.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {c.number}. {c.titleFi}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <LevelPill level="B1" />
        <p className="text-sm text-slate-500">{chapter.titleEn}</p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              tab === t.key ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      {tab === 'yleiskatsaus' && (
        <div className="space-y-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-semibold text-slate-800">
              Luku {chapter.number}: {chapter.titleFi}
            </p>
            <p className="text-xs text-slate-400">{chapter.titleEn}</p>
            <p className="mt-2 text-sm text-slate-600">{chapter.theme}</p>
            <p className="mt-1 text-xs text-slate-400">Sivut {chapter.pages}</p>
          </div>

          <div>
            <h2 className="mb-2 text-sm font-semibold text-slate-800">YKI-testin rakenne</h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-400">
                    <th className="px-3 py-2">Osakoe</th>
                    <th className="px-3 py-2">Aika</th>
                  </tr>
                </thead>
                <tbody>
                  {YKI_SUBTESTS.map((s) => (
                    <tr key={s.nameFi} className="border-b border-slate-50 last:border-0">
                      <td className="px-3 py-2 text-slate-700">
                        {s.nameFi} <span className="text-xs text-slate-400">({s.nameEn})</span>
                      </td>
                      <td className="px-3 py-2 text-slate-700">{s.minutes} min</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="mb-2 text-sm font-semibold text-slate-800">YKI-testin 9 aihepiiriä</h2>
            <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
              {YKI_THEMES.map((t, i) => (
                <div
                  key={t.fi}
                  className={`rounded-lg border px-3 py-2 text-sm ${
                    i + 1 === chapter.number ? 'border-blue-300 bg-blue-50 text-blue-900' : 'border-slate-100 bg-slate-50 text-slate-600'
                  }`}
                >
                  {i + 1}. {t.fi} <span className="text-xs opacity-70">({t.en})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === 'lukeminen' && (
        <div className="space-y-5">
          {chapter.reading.vocabWarmup && (
            <>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="mb-2 text-sm text-slate-600">{chapter.reading.vocabWarmup.instructionsFi}</p>
                <VocabGrid items={chapter.reading.vocabWarmup.items} />
              </div>
              {chapter.reading.vocabWarmup.note && <YkiTip tip={chapter.reading.vocabWarmup.note} />}
            </>
          )}

          <div>
            <h2 className="mb-2 text-sm font-semibold text-slate-800">Harjoittele</h2>
            <div className="space-y-4">
              {chapter.reading.practicePassages.map((p) => (
                <YkiPassageCard key={p.id} passage={p} />
              ))}
            </div>
          </div>

          {chapter.reading.testPassages.length > 0 && (
            <div>
              <h2 className="mb-2 text-sm font-semibold text-slate-800">Testaa</h2>
              <div className="space-y-4">
                {chapter.reading.testPassages.map((p) => (
                  <YkiPassageCard key={p.id} passage={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {tab === 'kirjoittaminen' && (
        <div className="space-y-5">
          <YkiTip tip={chapter.writing.tip} />

          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-semibold text-slate-800">Lämmittele yksin</p>
            <p className="mt-1 text-sm text-slate-600">{chapter.writing.freewrite.instructionsFi}</p>
            <p className="mt-2 text-xs font-semibold text-slate-500">Säännöt:</p>
            <ul className="list-inside list-disc space-y-0.5 text-sm text-slate-600">
              {chapter.writing.freewrite.rules.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
            <p className="mt-2 text-xs font-semibold text-slate-500">Aiheet:</p>
            <ul className="list-inside list-disc space-y-0.5 text-sm text-slate-600">
              {chapter.writing.freewrite.topics.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-semibold text-slate-800">Lämmittele yhdessä kaverin kanssa</p>
            <p className="mt-1 text-sm text-slate-600">{chapter.writing.groupIntro.instructionsFi}</p>
            <ul className="mt-1.5 list-inside list-disc space-y-0.5 text-sm text-slate-600">
              {chapter.writing.groupIntro.questions.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-sm font-semibold text-slate-800">Harjoittele</h2>
            <div className="space-y-3">
              {chapter.writing.practiceTasks.map((t) => (
                <div key={t.id} className="rounded-lg border border-slate-200 bg-white p-3">
                  <p className="text-sm font-semibold text-slate-900">{t.titleFi}</p>
                  <p className="mt-1 text-sm text-slate-700">{t.instructionsFi}</p>
                  {t.bulletsFi && t.bulletsFi.length > 0 && (
                    <ul className="mt-1.5 list-inside list-disc space-y-0.5 text-sm text-slate-600">
                      {t.bulletsFi.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}
                  {t.starterFi && <p className="mt-2 text-sm italic text-slate-500">{t.starterFi}</p>}
                  {t.exampleFi && (
                    <div className="mt-3 rounded-lg bg-slate-50 p-3">
                      {t.exampleTitleFi && <p className="mb-1 text-xs font-semibold text-slate-500">{t.exampleTitleFi}</p>}
                      <p className="whitespace-pre-line text-sm text-slate-700">{t.exampleFi}</p>
                    </div>
                  )}
                  {t.sampleFi && (
                    <details className="mt-3 text-sm">
                      <summary className="cursor-pointer text-xs font-semibold text-blue-700 hover:underline">Näytä mallivastaus →</summary>
                      <p className="mt-2 whitespace-pre-line border-t border-slate-100 pt-2 text-slate-700">{t.sampleFi}</p>
                    </details>
                  )}
                </div>
              ))}
            </div>
            {chapter.writing.practiceShareTable && chapter.writing.practiceShareTable.length > 0 && (
              <div className="mt-3 overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-slate-100 bg-slate-50 text-left uppercase tracking-wide text-slate-400">
                      <th className="px-3 py-2">Harrastuskaveri</th>
                      <th className="px-3 py-2">Naapurit</th>
                      <th className="px-3 py-2">Molemmat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chapter.writing.practiceShareTable.map((row) => (
                      <tr key={row.category} className="border-b border-slate-50 last:border-0">
                        <td className="px-3 py-2 text-slate-700">{row.hobbyBuddy}</td>
                        <td className="px-3 py-2 text-slate-700">{row.neighbors}</td>
                        <td className="px-3 py-2 text-slate-700">{row.both}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <YkiTip tip={chapter.writing.openingClosingTip} />

          <div>
            <h2 className="mb-2 text-sm font-semibold text-slate-800">Testaa: Epämuodollinen viesti</h2>
            <div className="space-y-2">
              {chapter.writing.informalTasks.map((t) => (
                <div key={t.id} className="rounded-lg border border-slate-200 bg-white p-3">
                  <p className="text-sm font-semibold text-slate-900">{t.titleFi}</p>
                  <p className="mt-1 text-sm text-slate-700">{t.instructionsFi}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-2 text-sm font-semibold text-slate-800">Testaa: Muodollinen viesti</h2>
            <div className="space-y-2">
              {chapter.writing.formalTasks.map((t) => (
                <div key={t.id} className="rounded-lg border border-slate-200 bg-white p-3">
                  <p className="text-sm font-semibold text-slate-900">{t.titleFi}</p>
                  <p className="mt-1 text-sm text-slate-700">{t.instructionsFi}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-2 text-sm font-semibold text-slate-800">Testaa: Mielipide</h2>
            <div className="space-y-2">
              {chapter.writing.opinionTopics.map((t) => (
                <div key={t.id} className="rounded-lg border border-slate-200 bg-white p-3">
                  <p className="text-sm font-semibold text-slate-900">{t.titleFi}</p>
                  <ul className="mt-1 list-inside list-disc space-y-0.5 text-sm text-slate-600">
                    {t.options.map((o, i) => (
                      <li key={i}>{o}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === 'kuunteleminen' && (
        <div className="space-y-5">
          <YkiTip tip={chapter.listening.tip} />

          {chapter.listening.podcastWarmup && (
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-800">Lämmittele: Kuuntele podcastia</p>
              <p className="mt-1 text-sm text-slate-600">{chapter.listening.podcastWarmup.instructionsFi}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {chapter.listening.podcastWarmup.keywords.map((k) => (
                  <span key={k} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
                    {k}
                  </span>
                ))}
              </div>
            </div>
          )}

          {chapter.listening.repeatSentences && (
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-800">Lämmittele: Kuuntele ja toista lauseita</p>
              <p className="mt-1 text-sm text-slate-600">{chapter.listening.repeatSentences.instructionsFi}</p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-700">
                {chapter.listening.repeatSentences.sentences.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h2 className="mb-2 text-sm font-semibold text-slate-800">Harjoittele</h2>
            <div className="space-y-4">
              {chapter.listening.practicePassages.map((p) => (
                <YkiPassageCard key={p.id} passage={p} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-2 text-sm font-semibold text-slate-800">Testaa</h2>
            <div className="space-y-4">
              {chapter.listening.testPassages.map((p) => (
                <YkiPassageCard key={p.id} passage={p} />
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === 'puhuminen' && (
        <div className="space-y-5">
          {chapter.speaking.tip && <YkiTip tip={chapter.speaking.tip} />}

          {chapter.speaking.selfIntro && (
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-800">Lämmittele yksin: Kertominen itsestä</p>
              <p className="mt-1 text-sm text-slate-600">{chapter.speaking.selfIntro.instructionsFi}</p>
              <div className="mt-3 overflow-x-auto rounded-xl border border-slate-100">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-100 bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-400">
                      <th className="px-3 py-2">Puhekieli</th>
                      <th className="px-3 py-2">Kirjakieli</th>
                      <th className="px-3 py-2">English</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chapter.speaking.selfIntro.qa.map((row) => (
                      <tr key={row.spoken} className="border-b border-slate-50 last:border-0">
                        <td className="px-3 py-2 text-slate-700">{row.spoken}</td>
                        <td className="px-3 py-2 text-slate-700">{row.written}</td>
                        <td className="px-3 py-2 text-slate-400">{row.en}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {chapter.speaking.repeatPhrases && (
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-800">Lämmittele: Kuuntele ja toista lauseita</p>
              <p className="mt-1 text-sm text-slate-600">{chapter.speaking.repeatPhrases.instructionsFi}</p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-700">
                {chapter.speaking.repeatPhrases.phrases.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          )}

          {chapter.speaking.phraseTable && (
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-800">{chapter.speaking.phraseTable.titleFi}</p>
              <div className="mt-3 overflow-x-auto rounded-xl border border-slate-100">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-100 bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-400">
                      <th className="px-3 py-2">Puhekieli</th>
                      <th className="px-3 py-2">Kirjakieli</th>
                      <th className="px-3 py-2">English</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chapter.speaking.phraseTable.rows.map((row) => (
                      <tr key={row.spoken} className="border-b border-slate-50 last:border-0">
                        <td className="px-3 py-2 text-slate-700">{row.spoken}</td>
                        <td className="px-3 py-2 text-slate-700">{row.written}</td>
                        <td className="px-3 py-2 text-slate-400">{row.en}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-semibold text-slate-800">Lämmittele yhdessä kaverin kanssa</p>
            <p className="mt-1 text-sm text-slate-600">{chapter.speaking.groupIntro.instructionsFi}</p>
            <ul className="mt-1.5 list-inside list-disc space-y-0.5 text-sm text-slate-600">
              {chapter.speaking.groupIntro.questions.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </div>

          {chapter.speaking.truthTip && <YkiTip tip={chapter.speaking.truthTip} />}

          {chapter.speaking.practiceLongTask && (
            <div>
              <h2 className="mb-2 text-sm font-semibold text-slate-800">Harjoittele: Kertominen</h2>
              <LongSpeakingTaskCard task={chapter.speaking.practiceLongTask} />
              {chapter.speaking.practiceLongTask.reflectionPrompt && (
                <p className="mt-2 text-sm text-slate-600">
                  <span className="font-semibold">Reflektoi:</span> {chapter.speaking.practiceLongTask.reflectionPrompt}
                </p>
              )}
              {chapter.speaking.practiceLongTask.speakDontWriteTip && (
                <div className="mt-2">
                  <YkiTip tip={chapter.speaking.practiceLongTask.speakDontWriteTip} />
                </div>
              )}
            </div>
          )}

          {chapter.speaking.practiceSituationalTasks && chapter.speaking.practiceSituationalTasks.length > 0 && (
            <div>
              <h2 className="mb-2 text-sm font-semibold text-slate-800">Harjoittele: Tilannetehtävät</h2>
              <div className="space-y-3">
                {chapter.speaking.practiceSituationalTasks.map((t) => (
                  <div key={t.id} className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="text-sm text-slate-700">{t.scenarioFi}</p>
                    <SequentialTimer steps={[{ label: '🔴 Puhu nyt', seconds: t.seconds }]} idleLabel={`Aloita (${t.seconds} s)`} />
                    {t.modelAnswerFi && (
                      <details className="text-sm">
                        <summary className="cursor-pointer text-xs font-semibold text-blue-700 hover:underline">Näytä mallivastaus →</summary>
                        <p className="mt-2 whitespace-pre-line border-t border-slate-100 pt-2 text-slate-700">{t.modelAnswerFi}</p>
                      </details>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {chapter.speaking.practiceConversationTasks && chapter.speaking.practiceConversationTasks.length > 0 && (
            <div>
              <h2 className="mb-2 text-sm font-semibold text-slate-800">Harjoittele: Keskustelutehtävät</h2>
              <div className="space-y-3">
                {chapter.speaking.practiceConversationTasks.map((t) => (
                  <div key={t.id} className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="font-semibold text-slate-900">{t.titleFi}</p>
                    <p className="text-sm text-slate-600">{t.scenarioFi}</p>
                    <ul className="list-inside list-decimal space-y-0.5 text-xs text-slate-500">
                      {t.turns.map((turn, i) => (
                        <li key={i}>
                          {turn.instructionFi} <span className="text-slate-400">({turn.seconds} s)</span>
                        </li>
                      ))}
                    </ul>
                    <SequentialTimer steps={t.turns.map((turn) => ({ label: turn.instructionFi, seconds: turn.seconds }))} idleLabel="Aloita keskustelu" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {chapter.speaking.dontMemorizeTip && <YkiTip tip={chapter.speaking.dontMemorizeTip} />}

          {chapter.speaking.conversationVocab && chapter.speaking.conversationVocab.length > 0 && (
            <div>
              <h2 className="mb-2 text-sm font-semibold text-slate-800">VINKKI: Keskustelutehtävien sanastoa</h2>
              <VocabGrid items={chapter.speaking.conversationVocab} />
            </div>
          )}

          <div>
            <h2 className="mb-2 text-sm font-semibold text-slate-800">Testaa: Kertominen</h2>
            <div className="space-y-3">
              {chapter.speaking.testLongTasks.map((t) => (
                <LongSpeakingTaskCard key={t.id} task={t} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-2 text-sm font-semibold text-slate-800">Testaa: Keskustelu</h2>
            <div className="space-y-3">
              {chapter.speaking.conversationTasks.map((t) => (
                <div key={t.id} className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="font-semibold text-slate-900">{t.titleFi}</p>
                  <p className="text-sm text-slate-600">{t.scenarioFi}</p>
                  <ul className="list-inside list-decimal space-y-0.5 text-xs text-slate-500">
                    {t.turns.map((turn, i) => (
                      <li key={i}>
                        {turn.instructionFi} <span className="text-slate-400">({turn.seconds} s)</span>
                      </li>
                    ))}
                  </ul>
                  <SequentialTimer steps={t.turns.map((turn) => ({ label: turn.instructionFi, seconds: turn.seconds }))} idleLabel="Aloita keskustelu" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-2 text-sm font-semibold text-slate-800">Testaa: Tilannetehtävät</h2>
            <div className="space-y-3">
              {chapter.speaking.situationalTasks.map((t, i) => {
                const prevLabel = i > 0 ? chapter.speaking.situationalTasks[i - 1].setLabel : undefined
                const showLabel = t.setLabel && t.setLabel !== prevLabel
                return (
                  <div key={t.id}>
                    {showLabel && <p className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400">{t.setLabel}</p>}
                    <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <p className="text-sm text-slate-700">{t.scenarioFi}</p>
                      <SequentialTimer steps={[{ label: '🔴 Puhu nyt', seconds: t.seconds }]} idleLabel={`Aloita (${t.seconds} s)`} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div>
            <h2 className="mb-2 text-sm font-semibold text-slate-800">Testaa: Mielipide</h2>
            <div className="space-y-3">
              {chapter.speaking.opinionTasks.map((t) => (
                <div key={t.id}>
                  <LongSpeakingTaskCard task={t} />
                  {t.id === 'speaking-opinion-1' && chapter.speaking.ageVocabTip && (
                    <div className="mt-2 rounded-lg border border-amber-200 bg-amber-50 p-3">
                      <p className="text-sm font-semibold text-amber-800">💡 {chapter.speaking.ageVocabTip.title}</p>
                      <div className="mt-2 grid grid-cols-2 gap-1.5 text-sm text-amber-900 sm:grid-cols-4">
                        {chapter.speaking.ageVocabTip.pairs.map((p) => (
                          <div key={p.person}>
                            <p className="font-medium">{p.person}</p>
                            <p className="text-xs opacity-80">{p.stage}</p>
                          </div>
                        ))}
                      </div>
                      <p className="mt-2 text-xs text-amber-800">{chapter.speaking.ageVocabTip.note}</p>
                      <ul className="mt-1.5 list-inside list-disc space-y-0.5 text-xs text-amber-900">
                        {chapter.speaking.ageVocabTip.phrases.map((p, i) => (
                          <li key={i}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === 'sanasto' && (
        <div className="space-y-5">
          <div>
            <h2 className="mb-2 text-sm font-semibold text-slate-800">Avainsanasto</h2>
            <VocabGrid items={chapter.vocabSummary} />
          </div>
          <div>
            <h2 className="mb-2 text-sm font-semibold text-slate-800">Hyödyllisiä fraaseja</h2>
            <VocabGrid items={chapter.usefulPhrases} />
          </div>
          {chapter.learnEverywhereTip && <YkiTip tip={chapter.learnEverywhereTip} />}
        </div>
      )}
    </div>
  )
}
