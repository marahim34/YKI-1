import { useState } from 'react'
import { vocabByTheme } from '../data/vocab'
import type { VocabItem } from '../types'
import VocabPracticeTabs from '../components/VocabPracticeTabs'

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
  { theme: 'kela and benefits', title: 'Kela ja etuudet', subtitle: 'Kela & benefits', icon: '🏛️' },
  { theme: 'banking', title: 'Pankkiasiat', subtitle: 'Banking', icon: '🏦' },
  { theme: 'renting process', title: 'Vuokraaminen', subtitle: 'Renting an apartment', icon: '🔑' },
  { theme: 'doctor visit', title: 'Lääkärikäynti', subtitle: 'Doctor visit', icon: '🩺' },
  { theme: 'job interview', title: 'Työhaastattelu', subtitle: 'Job interview', icon: '💼' },
]

function CategorySection({ category, items }: { category: Category; items: VocabItem[] }) {
  const [open, setOpen] = useState(false)

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
          <VocabPracticeTabs items={items} />
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
