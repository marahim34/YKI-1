import { useState, type ReactNode } from 'react'
import { vocabByTheme } from '../data/vocab'
import type { VocabItem } from '../types'
import { useFinnishSpeech } from '../lib/tts'

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
  { theme: 'flowers', title: 'Kukat', subtitle: 'Flowers', icon: '🌷' },
  { theme: 'fruits', title: 'Hedelmät', subtitle: 'Fruits', icon: '🍎' },
  { theme: 'vegetables', title: 'Vihannekset', subtitle: 'Vegetables', icon: '🥕' },
  { theme: 'home', title: 'Koti ja huoneet', subtitle: 'Home & rooms', icon: '🏡' },
  { theme: 'furniture', title: 'Huonekalut', subtitle: 'Furniture', icon: '🛋️' },
  { theme: 'clothing', title: 'Vaatteet', subtitle: 'Clothing', icon: '👕' },
  { theme: 'nature', title: 'Luonto', subtitle: 'Nature (sea, river, forest...)', icon: '🏞️' },
  { theme: 'animals', title: 'Eläimet', subtitle: 'Animals', icon: '🐾' },
  { theme: 'body', title: 'Keho', subtitle: 'Body', icon: '🧍' },
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

function Section({ title, subtitle, icon, children }: { title: string; subtitle: string; icon: string; children: ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <button onClick={() => setOpen((o) => !o)} className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left">
        <span className="flex items-center gap-2">
          <span className="text-lg">{icon}</span>
          <span>
            <span className="font-semibold text-slate-900">{title}</span>
            <span className="ml-2 text-xs text-slate-400">{subtitle}</span>
          </span>
        </span>
        <span className="text-slate-400">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-4">{children}</div>}
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
          Arjen perussanat kategorioittain: kuukaudet, viikonpäivät, vuodenajat, sää, värit, kukat, hedelmät,
          vihannekset, koti, huonekalut, vaatteet ja luonto. Everyday basics grouped by category — months, weekdays,
          seasons, weather, colors, flowers, fruits, vegetables, home, furniture, clothes and nature. Every word here
          also appears in the spaced-repetition trainer on the Sanasto page.
        </p>
      </div>

      {groups.map((g) => (
        <Section key={g.theme} title={g.title} subtitle={g.subtitle} icon={g.icon}>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
            {g.items.map((item) => (
              <WordCard key={item.id} item={item} />
            ))}
          </div>
        </Section>
      ))}
    </div>
  )
}
