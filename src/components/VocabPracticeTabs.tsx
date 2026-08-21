import { useState } from 'react'
import type { VocabItem } from '../types'
import { useFinnishSpeech } from '../lib/tts'
import MatchGame from './MatchGame'
import FillGapGame from './FillGapGame'
import VocabMcq from './VocabMcq'

type Tab = 'sanat' | 'match' | 'gap' | 'mcq'

const TABS: { key: Tab; label: string; icon: string }[] = [
  { key: 'sanat', label: 'Sanat', icon: '📖' },
  { key: 'match', label: 'Yhdistä', icon: '🔗' },
  { key: 'gap', label: 'Täydennä', icon: '✏️' },
  { key: 'mcq', label: 'Monivalinta', icon: '❓' },
]

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

function WordCard({ item }: { item: VocabItem }) {
  return (
    <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
      <p className="inline-flex items-center font-medium text-slate-900">
        {item.fi}
        <ListenButton text={item.fi} />
      </p>
      <p className="text-sm text-slate-500">{item.en}</p>
      {item.bn && <p className="text-sm text-emerald-700">{item.bn}</p>}
    </div>
  )
}

function tabButtonClass(active: boolean) {
  return [
    'rounded-full px-3 py-1 text-xs font-medium transition-colors',
    active ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200',
  ].join(' ')
}

export default function VocabPracticeTabs({ items }: { items: VocabItem[] }) {
  const [tab, setTab] = useState<Tab>('sanat')

  return (
    <div>
      <div className="mb-3 flex flex-wrap gap-1.5">
        {TABS.map((t) => (
          <button key={t.key} onClick={() => setTab(t.key)} className={tabButtonClass(tab === t.key)}>
            {t.icon} {t.label}
          </button>
        ))}
      </div>
      {tab === 'sanat' && (
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item) => (
            <WordCard key={item.id} item={item} />
          ))}
        </div>
      )}
      {tab === 'match' && <MatchGame items={items} />}
      {tab === 'gap' && <FillGapGame items={items} />}
      {tab === 'mcq' && <VocabMcq items={items} />}
    </div>
  )
}
