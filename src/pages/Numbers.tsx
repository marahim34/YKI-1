import { useState, type ReactNode } from 'react'
import {
  CARDINALS_BASIC,
  CARDINALS_TENS,
  CARDINALS_LARGE,
  ORDINALS,
  AGREEMENT_PATTERN_A,
  AGREEMENT_PATTERN_B,
  USAGE_CONTEXTS,
  PLURALIA_TANTUM,
  type NumberRow,
  type AgreementExample,
} from '../data/numbers'
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

function NumberTable({ rows }: { rows: NumberRow[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[420px] border-collapse text-left text-sm">
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-slate-100">
              <td className="w-24 py-1.5 pr-3 font-mono text-slate-500">{r.value}</td>
              <td className="py-1.5 pr-2 font-medium text-slate-900">
                <span className="inline-flex items-center">
                  {r.fi}
                  <ListenButton text={r.fi} />
                </span>
              </td>
              {r.note && <td className="py-1.5 text-xs text-slate-500">{r.note}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function AgreementList({ items }: { items: AgreementExample[] }) {
  return (
    <div className="space-y-1.5">
      {items.map((ex, i) => (
        <div key={i} className="rounded-lg bg-slate-50 px-3 py-2 text-sm">
          <p className="inline-flex items-center font-medium text-slate-800">
            {ex.fi}
            <ListenButton text={ex.fi} />
          </p>
          <p className="text-slate-500">{ex.en}</p>
          <p className="text-emerald-700">{ex.bn}</p>
          {ex.note && <p className="mt-0.5 text-xs italic text-violet-600">{ex.note}</p>}
        </div>
      ))}
    </div>
  )
}

function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  const [open, setOpen] = useState(true)
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <button onClick={() => setOpen((o) => !o)} className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left">
        <span>
          <span className="font-semibold text-slate-900">{title}</span>
          {subtitle && <span className="ml-2 text-xs text-slate-400">{subtitle}</span>}
        </span>
        <span className="text-slate-400">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="space-y-3 border-t border-slate-100 px-4 py-4">{children}</div>}
    </section>
  )
}

export default function Numbers() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-slate-900">Numerot</h1>
        <p className="text-sm text-slate-500">
          Lukusanat 0:sta miljardiin, järjestysluvut, ja se yksi sääntö joka sotkee lähes jokaisen oppijan: milloin
          numeron jälkeinen sana on yksikössä ja milloin monikossa. Numbers from 0 to a billion, ordinals, and the rule
          that trips up nearly every learner: singular or plural after a number?
        </p>
      </div>

      <Section title="Peruslukusanat 0–20" subtitle="Basic numbers">
        <NumberTable rows={CARDINALS_BASIC} />
      </Section>

      <Section title="Kymmenet 20–100" subtitle="Tens">
        <NumberTable rows={CARDINALS_TENS} />
      </Section>

      <Section title="Suuremmat luvut: sadat, tuhannet, miljoonat, miljardit" subtitle="Hundreds to billions">
        <p className="text-sm text-slate-600">
          Kirjoitetut lukusanat muodostetaan yhdistämällä osat yhdeksi sanaksi — paitsi <strong>miljoona</strong> ja{' '}
          <strong>miljardi</strong>, jotka ovat omia sanojaan ja pysyvät erillään edeltävästä luvusta.
        </p>
        <p className="text-sm text-slate-600">
          Written-out numbers are built by fusing the parts into one word — except <strong>miljoona</strong> (million)
          and <strong>miljardi</strong> (billion), which are true nouns and stay as separate words after the number
          (e.g. "kaksi miljoonaa", not "kaksimiljoonaa"). Finnish "miljardi" = English "billion" (10⁹).
        </p>
        <NumberTable rows={CARDINALS_LARGE} />
      </Section>

      <Section title="Järjestysluvut" subtitle="Ordinals — 1st, 2nd, 3rd...">
        <p className="text-sm text-slate-600">
          Ensimmäinen ja toinen ovat epäsäännöllisiä. Muuten pääte on yleensä <strong>-s</strong> (kolmas, neljäs...).
          Yhdistelmäluvuissa (esim. 21.) MOLEMMAT osat taipuvat järjestysluvuiksi: kahdeskymmenesensimmäinen.
        </p>
        <NumberTable rows={ORDINALS} />
      </Section>

      <Section title="Yksikkö vai monikko numeron jälkeen? — Malli A" subtitle="Pattern A: counting in the nominative">
        <p className="text-sm text-slate-600">
          Kun kerrot, <em>kuinka monta</em> jotakin on, numero pysyy perusmuodossa ja seuraava sana on{' '}
          <strong>yksikön partitiivissa</strong> — ei koskaan monikossa, vaikka luku olisi kuinka suuri. Poikkeus:
          "muutama" käyttäytyy kuin "yksi" (yksikön nominatiivi), ja "useita" on jo itsessään monikossa (monikon
          partitiivi seuraa).
        </p>
        <AgreementList items={AGREEMENT_PATTERN_A} />
      </Section>

      <Section title="Yksikkö vai monikko numeron jälkeen? — Malli B" subtitle="Pattern B: the number phrase itself is case-marked">
        <p className="text-sm text-slate-600">
          Kun koko luku+sana-ilmaus taipuu johonkin muuhun sijaan (ei nominatiiviin) lauseen roolin mukaan, sekä numero
          että sana pysyvät <strong>yksikössä</strong> siinä sijassa — vaikka tarkoitat useampaa kuin yhtä. Tämä
          yllättää monet oppijat.
        </p>
        <AgreementList items={AGREEMENT_PATTERN_B} />
      </Section>

      <Section title="Numerot eri tilanteissa" subtitle="Numbers in real-life contexts">
        <div className="space-y-2">
          {USAGE_CONTEXTS.map((u, i) => (
            <div key={i} className="rounded-lg bg-slate-50 px-3 py-2 text-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {u.context} <span className="text-emerald-600">· {u.contextBn}</span>
              </p>
              <p className="mt-1 inline-flex items-center font-medium text-slate-800">
                {u.fi}
                <ListenButton text={u.fi} />
              </p>
              <p className="text-slate-500">{u.en}</p>
              <p className="text-emerald-700">{u.bn}</p>
              <p className="mt-0.5 text-xs italic text-violet-600">{u.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Aina monikossa olevat sanat" subtitle="Pluralia tantum — always-plural nouns">
        <p className="text-sm text-slate-600">
          Muutama sana on suomessa aina monikossa, vaikka tarkoittaisit yhtä kappaletta — hyviä poikkeuksia
          muistettavaksi.
        </p>
        <div className="flex flex-wrap gap-2">
          {PLURALIA_TANTUM.map((p, i) => (
            <span key={i} className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-700">
              <span className="font-medium">{p.fi}</span>
              <ListenButton text={p.fi} />
              <span className="text-slate-400">· {p.en} · {p.bn}</span>
            </span>
          ))}
        </div>
      </Section>
    </div>
  )
}
