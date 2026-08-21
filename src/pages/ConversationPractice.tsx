import { useState } from 'react'
import { CONVERSATION_CHAPTERS } from '../data/conversationPractice'
import LevelPill from '../components/LevelPill'
import BookVocabQuiz from '../components/BookVocabQuiz'
import FillInDrill from '../components/FillInDrill'
import DialoguePractice from '../components/DialoguePractice'
import RevealPrompt from '../components/RevealPrompt'
import { useFinnishSpeech } from '../lib/tts'

function ListenButton({ text }: { text: string }) {
  const { play, speaking, supported } = useFinnishSpeech()
  if (!supported) return null
  return (
    <button
      onClick={() => play(text)}
      disabled={speaking}
      aria-label="Kuuntele ääntäminen"
      title="Kuuntele ääntäminen"
      className="ml-1 shrink-0 rounded-full bg-blue-50 px-1.5 py-0.5 text-[11px] text-blue-700 hover:bg-blue-100 disabled:opacity-50"
    >
      🔊
    </button>
  )
}

type Section = 'sanasto' | 'dialogit' | 'reagointi' | 'kertominen' | 'mielipide' | 'kirjoittaminen' | 'sanastolista'

const SECTIONS: { key: Section; label: string; icon: string }[] = [
  { key: 'sanasto', label: 'Sanasto', icon: '📖' },
  { key: 'dialogit', label: 'Dialogit', icon: '💬' },
  { key: 'reagointi', label: 'Reagointi', icon: '⚡' },
  { key: 'kertominen', label: 'Kertominen', icon: '📝' },
  { key: 'mielipide', label: 'Mielipide', icon: '🗣️' },
  { key: 'kirjoittaminen', label: 'Kirjoittaminen', icon: '✍️' },
  { key: 'sanastolista', label: 'Sanasto-yhteenveto', icon: '📋' },
]

export default function ConversationPractice() {
  const [chapterId, setChapterId] = useState(CONVERSATION_CHAPTERS[0].id)
  const [section, setSection] = useState<Section>('sanasto')
  const chapter = CONVERSATION_CHAPTERS.find((c) => c.id === chapterId) ?? CONVERSATION_CHAPTERS[0]

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-slate-900">Keskusteluharjoitukset</h1>
        <p className="text-sm text-slate-500">
          Laajoja alkuperäisiä puhe- ja kirjoitusharjoituksia: roolileikkidialogeja, pikareagointeja, mielipidekirjoituksia ja
          kirjeitä. Extensive original speaking and writing practice — roleplay dialogues, quick reactions, opinion essays,
          and letters.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {CONVERSATION_CHAPTERS.map((c) => (
          <button
            key={c.id}
            onClick={() => setChapterId(c.id)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium ${
              chapterId === c.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {c.titleFi}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <LevelPill level={chapter.level} />
        <p className="text-sm text-slate-500">{chapter.titleEn}</p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {SECTIONS.map((s) => (
          <button
            key={s.key}
            onClick={() => setSection(s.key)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              section === s.key ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {s.icon} {s.label}
          </button>
        ))}
      </div>

      {section === 'sanasto' && (
        <div className="space-y-5">
          <div>
            <h2 className="mb-2 text-sm font-semibold text-slate-800">Sanastotesti</h2>
            <BookVocabQuiz items={chapter.vocabQuiz} />
          </div>
          <div>
            <h2 className="mb-2 text-sm font-semibold text-slate-800">Ristikko: Mikä sana?</h2>
            <FillInDrill instructions="Lue vihjeet ja keksi oikea sana." items={chapter.crossword} />
          </div>
          <div>
            <h2 className="mb-2 text-sm font-semibold text-slate-800">Keskustelukysymykset</h2>
            <div className="space-y-2">
              {chapter.discussionQuestions.map((q, i) => (
                <div key={i} className="rounded-lg border border-slate-200 bg-white p-3 text-sm">
                  <p className="inline-flex items-center font-medium text-slate-800">
                    {q.fi}
                    <ListenButton text={q.fi} />
                  </p>
                  <p className="text-xs text-slate-400">{q.en}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {section === 'dialogit' && (
        <div className="space-y-4">
          {chapter.dialogues.map((d) => (
            <div key={d.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="font-semibold text-slate-900">{d.titleFi}</p>
              <p className="mb-3 text-xs text-slate-400">{d.titleEn}</p>
              <DialoguePractice dialogue={d} />
            </div>
          ))}
        </div>
      )}

      {section === 'reagointi' && (
        <div>
          <p className="mb-3 text-sm text-slate-500">Kuvittele tilanne ja puhu lyhyesti. Imagine the situation and speak briefly.</p>
          <div className="space-y-3">
            {chapter.reactions.map((r) => (
              <RevealPrompt key={r.id} promptFi={r.scenarioFi} promptEn={r.scenarioEn} sampleFi={r.sampleFi} revealLabel="Näytä mallivastaus →" />
            ))}
          </div>
        </div>
      )}

      {section === 'kertominen' && (
        <div className="space-y-3">
          {chapter.longSpeaking.map((t) => (
            <RevealPrompt key={t.id} titleFi={t.titleFi} titleEn={t.titleEn} promptFi={t.instructionsFi} sampleFi={t.sampleFi} />
          ))}
        </div>
      )}

      {section === 'mielipide' && (
        <div className="space-y-3">
          {chapter.opinions.map((t) => (
            <RevealPrompt key={t.id} titleFi={t.titleFi} titleEn={t.titleEn} promptFi={t.instructionsFi} sampleFi={t.sampleFi} />
          ))}
        </div>
      )}

      {section === 'kirjoittaminen' && (
        <div className="space-y-3">
          {chapter.writingTasks.map((t) => (
            <RevealPrompt
              key={t.id}
              titleFi={t.titleFi}
              promptFi={t.instructionsFi}
              bulletsFi={t.bulletsFi}
              sampleFi={t.sampleFi}
              revealLabel="Näytä mallivastaus →"
            />
          ))}
        </div>
      )}

      {section === 'sanastolista' && (
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          {chapter.vocabSummary.map((v, i) => (
            <div key={i} className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
              <p className="inline-flex items-center font-medium text-slate-900">
                {v.fi}
                <ListenButton text={v.fi} />
              </p>
              <p className="text-sm text-slate-500">{v.en}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
