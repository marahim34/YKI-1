import { useState } from 'react'
import { vocabByTheme } from '../data/vocab'
import type { VocabItem } from '../types'
import { useFinnishSpeech } from '../lib/tts'
import MatchGame from '../components/MatchGame'
import FillGapGame from '../components/FillGapGame'
import VocabMcq from '../components/VocabMcq'

interface Category {
  theme: string
  title: string
  subtitle: string
  icon: string
}

const CATEGORIES: Category[] = [
  { theme: 'months', title: 'Kuukaudet', subtitle: 'Months', icon: '📅' },
  { theme: 'weekdays', title: 'Viikonpäivät', subtitle: 'Weekdays', icon: '🗓️' },
  { theme: 'seasons', title: 'Vuodenajat', subtitle: 'Seasons', icon: '🍂' },
  { theme: 'weather', title: 'Sää', subtitle: 'Weather', icon: '🌦️' },
  { theme: 'weather more', title: 'Sää (lisää)', subtitle: 'Weather (more)', icon: '🌪️' },
  { theme: 'colors', title: 'Värit', subtitle: 'Colors', icon: '🎨' },
  { theme: 'shapes', title: 'Muodot', subtitle: 'Shapes', icon: '🔺' },
  { theme: 'materials', title: 'Materiaalit', subtitle: 'Materials', icon: '🧱' },
  { theme: 'flowers', title: 'Kukat', subtitle: 'Flowers', icon: '🌷' },
  { theme: 'fruits', title: 'Hedelmät', subtitle: 'Fruits', icon: '🍎' },
  { theme: 'vegetables', title: 'Vihannekset', subtitle: 'Vegetables', icon: '🥕' },
  { theme: 'food', title: 'Ruoka ja juoma', subtitle: 'Food & drink', icon: '🍽️' },
  { theme: 'kitchen', title: 'Keittiötarvikkeet', subtitle: 'Kitchen & tableware', icon: '🍳' },
  { theme: 'home', title: 'Koti ja huoneet', subtitle: 'Home & rooms', icon: '🏡' },
  { theme: 'furniture', title: 'Huonekalut', subtitle: 'Furniture', icon: '🛋️' },
  { theme: 'clothing', title: 'Vaatteet', subtitle: 'Clothing', icon: '👕' },
  { theme: 'nature', title: 'Luonto', subtitle: 'Nature (sea, river, forest...)', icon: '🏞️' },
  { theme: 'animals', title: 'Eläimet', subtitle: 'Animals', icon: '🐾' },
  { theme: 'body', title: 'Keho', subtitle: 'Body', icon: '🧍' },
  { theme: 'body more', title: 'Keho (lisää)', subtitle: 'Body (more)', icon: '👂' },
  { theme: 'transport', title: 'Liikenne', subtitle: 'Transport', icon: '🚌' },
  { theme: 'professions', title: 'Ammatit', subtitle: 'Professions', icon: '👷' },
  { theme: 'sports', title: 'Urheilu', subtitle: 'Sports', icon: '⚽' },
]

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

function CategorySection({ category, items }: { category: Category; items: VocabItem[] }) {
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState<Tab>('sanat')

  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <button onClick={() => setOpen((o) => !o)} className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left">
        <span className="flex items-center gap-2">
          <span className="text-lg">{category.icon}</span>
          <span>
            <span className="font-semibold text-slate-900">{category.title}</span>
            <span className="ml-2 text-xs text-slate-400">{category.subtitle}</span>
          </span>
        </span>
        <span className="text-slate-400">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="border-t border-slate-100 px-4 py-4">
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
      )}
    </section>
  )
}

export default function BasicVocab() {
  const groups = CATEGORIES.map((c) => ({ ...c, items: vocabByTheme(c.theme) })).filter((g) => g.items.length > 0)

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-slate-900">Perussanasto</h1>
        <p className="text-sm text-slate-500">
          Arjen perussanat kategorioittain: kuukaudet, viikonpäivät, vuodenajat, sää, värit, muodot, materiaalit,
          kukat, hedelmät, vihannekset, ruoka, keittiö, koti, huonekalut, vaatteet, luonto, eläimet, keho, liikenne,
          ammatit ja urheilu. Jokaisessa kategoriassa on sanalista sekä kolme harjoitustapaa: yhdistä, täydennä ja
          monivalinta — words are grouped by everyday theme, and each category offers three practice modes besides
          browsing: a matching game, a fill-in-the-blank gap-fill, and a multiple-choice quiz, in addition to the
          spaced-repetition trainer on the Sanasto page.
        </p>
      </div>

      {groups.map((g) => (
        <CategorySection key={g.theme} category={g} items={g.items} />
      ))}
    </div>
  )
}
