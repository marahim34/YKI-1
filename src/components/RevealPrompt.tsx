import { useState } from 'react'

export default function RevealPrompt({
  titleFi,
  titleEn,
  promptFi,
  promptEn,
  bulletsFi,
  sampleFi,
  revealLabel = 'Yritä itse ensin, näytä sitten mallivastaus →',
}: {
  titleFi?: string
  titleEn?: string
  promptFi: string
  promptEn?: string
  bulletsFi?: string[]
  sampleFi: string
  revealLabel?: string
}) {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3">
      {titleFi && (
        <p className="text-sm font-semibold text-slate-900">
          {titleFi}
          {titleEn && <span className="ml-2 text-xs font-normal text-slate-400">{titleEn}</span>}
        </p>
      )}
      <p className="mt-1 text-sm text-slate-700">{promptFi}</p>
      {promptEn && <p className="text-xs text-slate-400">{promptEn}</p>}
      {bulletsFi && bulletsFi.length > 0 && (
        <ul className="mt-1.5 list-inside list-disc space-y-0.5 text-sm text-slate-600">
          {bulletsFi.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
      {revealed ? (
        <p className="mt-3 whitespace-pre-line border-t border-slate-100 pt-3 text-sm text-slate-800">{sampleFi}</p>
      ) : (
        <button onClick={() => setRevealed(true)} className="mt-3 rounded-md bg-violet-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-violet-700">
          {revealLabel}
        </button>
      )}
    </div>
  )
}
