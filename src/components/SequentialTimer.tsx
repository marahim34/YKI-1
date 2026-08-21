import { useEffect, useState } from 'react'
import { useCountdown, formatSeconds } from '../lib/timer'

export default function SequentialTimer({ steps, idleLabel = 'Aloita ajastin' }: { steps: { label: string; seconds: number }[]; idleLabel?: string }) {
  const [index, setIndex] = useState(-1)

  const timer = useCountdown(steps[0]?.seconds ?? 0, () => setIndex((i) => i + 1))

  useEffect(() => {
    if (index >= 0 && index < steps.length) {
      timer.reset(steps[index].seconds)
      timer.start()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  function begin() {
    setIndex(0)
  }

  function reset() {
    setIndex(-1)
    timer.reset(steps[0]?.seconds ?? 0)
  }

  if (index === -1) {
    return (
      <button onClick={begin} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
        {idleLabel}
      </button>
    )
  }

  if (index >= steps.length) {
    return (
      <div className="flex items-center gap-3">
        <p className="font-semibold text-emerald-700">✅ Valmis!</p>
        <button onClick={reset} className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50">
          Aloita uudelleen
        </button>
      </div>
    )
  }

  const step = steps[index]
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-wide text-rose-600">{step.label}</p>
      <p className="mt-1 text-3xl font-bold text-slate-900">{formatSeconds(timer.remaining)}</p>
    </div>
  )
}
