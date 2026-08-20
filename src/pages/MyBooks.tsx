import { useState, type FormEvent } from 'react'
import type { CefrLevel } from '../types'
import { addCustomVocabItem, deleteCustomVocabItem, loadCustomVocab, type NewCustomVocabInput } from '../lib/customContent'
import { useFinnishSpeech } from '../lib/tts'

const LEVELS: CefrLevel[] = ['A1', 'A2', 'B1', 'B2']
const BOOK_SUGGESTIONS = ['Suomen mestari 1', 'Suomen mestari 2', 'Suomen mestari 3', 'Oma suomi 1', 'Oma suomi 2', 'Muu']

const emptyForm: NewCustomVocabInput = {
  fi: '',
  en: '',
  bn: '',
  example: '',
  exampleEn: '',
  exampleBn: '',
  theme: '',
  level: 'A1',
  bookSource: 'Suomen mestari 1',
  chapter: '',
}

export default function MyBooks() {
  const [items, setItems] = useState(loadCustomVocab)
  const [form, setForm] = useState<NewCustomVocabInput>(emptyForm)
  const { play, speaking, supported } = useFinnishSpeech()

  function update<K extends keyof NewCustomVocabInput>(key: K, value: NewCustomVocabInput[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!form.fi.trim() || !form.en.trim()) return
    const next = addCustomVocabItem({
      ...form,
      theme: form.theme.trim() || 'omat sanat',
    })
    setItems(next)
    setForm({ ...emptyForm, bookSource: form.bookSource, level: form.level })
  }

  function handleDelete(id: string) {
    setItems(deleteCustomVocabItem(id))
  }

  const grouped = items.reduce<Record<string, typeof items>>((acc, item) => {
    ;(acc[item.bookSource] ??= []).push(item)
    return acc
  }, {})

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-slate-900">Omat kirjat</h1>
        <p className="text-sm text-slate-500">
          Lisää tähän sanoja ja lauseita suoraan omista kirjoistasi (esim. Suomen mestari, Oma suomi). Ne liittyvät
          suoraan samaan sanaston kertausjärjestelmään kuin sovelluksen valmis sanasto.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm">
            <span className="font-medium text-slate-700">Sana / ilmaus (suomeksi) *</span>
            <input
              required
              value={form.fi}
              onChange={(e) => update('fi', e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              placeholder="esim. kirjasto"
            />
          </label>
          <label className="text-sm">
            <span className="font-medium text-slate-700">Käännös (englanniksi) *</span>
            <input
              required
              value={form.en}
              onChange={(e) => update('en', e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              placeholder="e.g. library"
            />
          </label>
          <label className="text-sm sm:col-span-2">
            <span className="font-medium text-slate-700">অর্থ (বাংলায়) — Bangla meaning</span>
            <input
              value={form.bn}
              onChange={(e) => update('bn', e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              placeholder="যেমন: গ্রন্থাগার"
            />
          </label>
          <label className="text-sm sm:col-span-2">
            <span className="font-medium text-slate-700">Esimerkkilause (suomeksi)</span>
            <input
              value={form.example}
              onChange={(e) => update('example', e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              placeholder="esim. Menen kirjastoon lukemaan."
            />
          </label>
          <label className="text-sm sm:col-span-2">
            <span className="font-medium text-slate-700">Esimerkkilause (englanniksi)</span>
            <input
              value={form.exampleEn}
              onChange={(e) => update('exampleEn', e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              placeholder="e.g. I go to the library to read."
            />
          </label>
          <label className="text-sm sm:col-span-2">
            <span className="font-medium text-slate-700">উদাহরণ বাক্য (বাংলায়) — Bangla example</span>
            <input
              value={form.exampleBn}
              onChange={(e) => update('exampleBn', e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              placeholder="যেমন: আমি পড়তে গ্রন্থাগারে যাই।"
            />
          </label>
          <label className="text-sm">
            <span className="font-medium text-slate-700">Aihe/teema</span>
            <input
              value={form.theme}
              onChange={(e) => update('theme', e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              placeholder="esim. koulutus"
            />
          </label>
          <label className="text-sm">
            <span className="font-medium text-slate-700">Taso</span>
            <select
              value={form.level}
              onChange={(e) => update('level', e.target.value as CefrLevel)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            >
              {LEVELS.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm">
            <span className="font-medium text-slate-700">Kirja</span>
            <select
              value={form.bookSource}
              onChange={(e) => update('bookSource', e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            >
              {BOOK_SUGGESTIONS.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm">
            <span className="font-medium text-slate-700">Luku / sivu</span>
            <input
              value={form.chapter}
              onChange={(e) => update('chapter', e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              placeholder="esim. luku 4, s. 52"
            />
          </label>
        </div>
        <button type="submit" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
          Lisää sanastoon
        </button>
      </form>

      {Object.keys(grouped).length === 0 && (
        <p className="rounded-xl border border-dashed border-slate-300 p-4 text-center text-sm text-slate-500">
          Et ole vielä lisännyt omia sanoja. Pidä kirjasi vieressä ja lisää uusia sanoja aina, kun luet uuden luvun.
        </p>
      )}

      {Object.entries(grouped).map(([book, bookItems]) => (
        <div key={book}>
          <h2 className="mb-2 text-sm font-semibold text-slate-800">
            {book} <span className="text-slate-400">({bookItems.length})</span>
          </h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {bookItems.map((item) => (
              <div key={item.id} className="flex items-start justify-between gap-2 rounded-xl border border-slate-200 bg-white p-3">
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="font-medium text-slate-900">
                      {item.fi} <span className="text-slate-400">· {item.en}</span>
                    </p>
                    {supported && (
                      <button
                        onClick={() => play(item.fi)}
                        disabled={speaking}
                        aria-label="Kuuntele ääntäminen"
                        title="Kuuntele ääntäminen"
                        className="rounded-full bg-blue-50 px-1.5 py-0.5 text-xs text-blue-700 hover:bg-blue-100 disabled:opacity-50"
                      >
                        🔊
                      </button>
                    )}
                  </div>
                  {item.bn && <p className="text-sm text-emerald-700">{item.bn}</p>}
                  {item.example && <p className="text-xs italic text-slate-500">{item.example}</p>}
                  {item.exampleBn && <p className="text-xs text-slate-400">{item.exampleBn}</p>}
                  <p className="mt-1 text-xs text-slate-400">
                    {item.level} · {item.theme}
                    {item.chapter ? ` · ${item.chapter}` : ''}
                  </p>
                </div>
                <button onClick={() => handleDelete(item.id)} className="text-xs text-rose-600 hover:underline" aria-label="Poista">
                  Poista
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
