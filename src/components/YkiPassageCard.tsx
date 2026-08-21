import { useState } from 'react'
import type { YkiPassage } from '../types'
import McqQuiz from './McqQuiz'
import TrueFalseQuiz from './TrueFalseQuiz'
import RevealPrompt from './RevealPrompt'
import YkiTip from './YkiTip'

export default function YkiPassageCard({ passage }: { passage: YkiPassage }) {
  const [textOpen, setTextOpen] = useState(true)

  return (
    <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div>
        <p className="font-semibold text-slate-900">{passage.titleFi}</p>
        {passage.titleEn && <p className="text-xs text-slate-400">{passage.titleEn}</p>}
        {passage.source && <p className="mt-0.5 text-[11px] italic text-slate-400">Lähde: {passage.source}</p>}
      </div>

      {passage.tip && <YkiTip tip={passage.tip} />}

      {passage.predictVocab && passage.predictVocab.length > 0 && (
        <div className="rounded-lg border border-slate-100 bg-slate-50 p-3">
          <p className="mb-1.5 text-xs font-semibold text-slate-600">Ennakoi sanastoa ennen kuuntelua:</p>
          <div className="flex flex-wrap gap-1.5">
            {passage.predictVocab.map((v) => (
              <span
                key={v.fi}
                className="rounded-full bg-white px-2.5 py-1 text-xs text-slate-600"
                title={v.bn ? `${v.en} · ${v.bn}` : v.en}
              >
                {v.fi}
              </span>
            ))}
          </div>
        </div>
      )}

      <div>
        <button onClick={() => setTextOpen((o) => !o)} className="text-xs font-semibold text-blue-700 hover:underline">
          {textOpen ? 'Piilota teksti ▲' : 'Näytä teksti ▼'}
        </button>
        {textOpen && <p className="mt-2 whitespace-pre-line rounded-lg bg-slate-50 p-3 text-sm text-slate-700">{passage.textFi}</p>}
      </div>

      {passage.mcq && passage.mcq.length > 0 && (
        <div>
          <p className="mb-2 text-xs font-semibold text-slate-600">Monivalinta</p>
          <McqQuiz questions={passage.mcq} onFinish={() => {}} />
        </div>
      )}

      {passage.trueFalse && passage.trueFalse.length > 0 && (
        <div>
          <p className="mb-2 text-xs font-semibold text-slate-600">Oikein vai väärin?</p>
          <TrueFalseQuiz questions={passage.trueFalse} />
        </div>
      )}

      {passage.open && passage.open.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs font-semibold text-slate-600">Avoimet kysymykset</p>
          {passage.open.map((q) => (
            <RevealPrompt key={q.id} promptFi={q.questionFi} promptEn={q.questionEn} sampleFi={q.sampleAnswerFi} revealLabel="Näytä mallivastaus →" />
          ))}
        </div>
      )}
    </div>
  )
}
