import type { YkiTipBox } from '../types'

export default function YkiTip({ tip }: { tip: YkiTipBox }) {
  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
      <p className="text-sm font-semibold text-amber-800">💡 {tip.title}</p>
      <ul className="mt-1.5 list-inside list-disc space-y-1 text-sm text-amber-900">
        {tip.body.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  )
}
