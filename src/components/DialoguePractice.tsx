import { useState } from 'react'
import type { DialogueScenario } from '../types'
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

export default function DialoguePractice({ dialogue }: { dialogue: DialogueScenario }) {
  const [drafts, setDrafts] = useState<Record<number, string>>({})

  return (
    <div className="space-y-2">
      {dialogue.turns.map((turn, i) => {
        const isYou = turn.speaker.toLowerCase() === 'sinä'
        if (turn.isPlaceholder) {
          return (
            <div key={i} className={`flex ${isYou ? 'justify-end' : 'justify-start'}`}>
              <div className="max-w-[85%] rounded-xl border border-dashed border-slate-300 bg-slate-50 px-3 py-2">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">{turn.speaker}</p>
                <p className="text-sm italic text-slate-500">
                  {turn.fi}
                  {turn.en ? ` (${turn.en})` : ''}
                </p>
                {isYou && (
                  <input
                    value={drafts[i] ?? ''}
                    onChange={(e) => setDrafts((d) => ({ ...d, [i]: e.target.value }))}
                    placeholder="Kirjoita oma vastauksesi tähän..."
                    className="mt-1.5 w-full rounded-md border border-slate-300 px-2 py-1 text-sm focus:outline-none"
                  />
                )}
              </div>
            </div>
          )
        }
        return (
          <div key={i} className={`flex ${isYou ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-xl px-3 py-2 ${isYou ? 'bg-blue-600 text-white' : 'border border-slate-200 bg-white'}`}>
              <p className={`text-[11px] font-semibold uppercase tracking-wide ${isYou ? 'text-blue-100' : 'text-slate-400'}`}>{turn.speaker}</p>
              <p className={`inline-flex items-start gap-1 text-sm ${isYou ? 'text-white' : 'text-slate-800'}`}>
                <span>{turn.fi}</span>
                <ListenButton text={turn.fi} />
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
