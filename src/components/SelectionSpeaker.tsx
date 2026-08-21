import { useEffect, useState } from 'react'
import { speakFinnish, ttsSupported } from '../lib/tts'
import type { WordMeaning } from '../lib/dictionary'

interface Position {
  top: number
  left: number
}

type MeaningState = WordMeaning | 'not-found' | null

// A floating toolbar that appears whenever the user selects any text
// anywhere in the app (a word in a reading passage, a grammar example, a
// vocab list...): one button reads it aloud, the other looks up its
// English/Bangla meaning in the app's own vocabulary data — for when
// you're not sure how to pronounce or spell a specific word and don't want
// to hunt for a dedicated 🔊 button next to it.
export default function SelectionSpeaker() {
  const [selectedText, setSelectedText] = useState('')
  const [position, setPosition] = useState<Position | null>(null)
  const [speaking, setSpeaking] = useState(false)
  const [meaning, setMeaning] = useState<MeaningState>(null)
  const [meaningLoading, setMeaningLoading] = useState(false)

  useEffect(() => {
    if (!ttsSupported()) return

    function clear() {
      setSelectedText('')
      setPosition(null)
      setMeaning(null)
    }

    function handleSelectionChange() {
      const selection = window.getSelection()
      const text = selection?.toString().trim() ?? ''
      if (!text || !selection || selection.rangeCount === 0) {
        clear()
        return
      }
      const rect = selection.getRangeAt(0).getBoundingClientRect()
      if (rect.width === 0 && rect.height === 0) {
        clear()
        return
      }
      setSelectedText(text)
      setPosition({ top: rect.top, left: rect.left + rect.width / 2 })
      setMeaning(null)
    }

    document.addEventListener('selectionchange', handleSelectionChange)
    // Selection coordinates are viewport-relative; scrolling would leave the
    // toolbar floating over the wrong spot, so just dismiss it instead.
    window.addEventListener('scroll', clear, true)
    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange)
      window.removeEventListener('scroll', clear, true)
    }
  }, [])

  if (!selectedText || !position) return null

  function handlePlay() {
    setSpeaking(true)
    speakFinnish(selectedText, { onEnd: () => setSpeaking(false) })
  }

  async function handleMeaning() {
    setMeaningLoading(true)
    const { findMeaning } = await import('../lib/dictionary')
    setMeaning(findMeaning(selectedText) ?? 'not-found')
    setMeaningLoading(false)
  }

  return (
    <div
      // Selecting text collapses on the next mousedown outside the range —
      // preventing default here keeps the selection (and this toolbar) alive
      // until the click actually fires.
      onMouseDown={(e) => e.preventDefault()}
      style={{ top: Math.max(position.top - 42, 8), left: position.left, transform: 'translateX(-50%)' }}
      className="fixed z-50 flex flex-col items-center gap-1.5"
    >
      <div className="flex items-center gap-1.5">
        {ttsSupported() && (
          <button
            onClick={handlePlay}
            disabled={speaking}
            className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white shadow-lg hover:bg-slate-800 disabled:opacity-60"
            aria-label="Kuuntele valittu teksti"
          >
            🔊 {speaking ? 'Kuuntelet…' : 'Kuuntele'}
          </button>
        )}
        <button
          onClick={handleMeaning}
          disabled={meaningLoading}
          className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-violet-700 px-3 py-1.5 text-xs font-semibold text-white shadow-lg hover:bg-violet-800 disabled:opacity-60"
          aria-label="Näytä sanan merkitys"
        >
          🔤 {meaningLoading ? 'Haetaan…' : 'Merkitys'}
        </button>
      </div>

      {meaning && (
        <div className="w-max max-w-[240px] rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs shadow-lg">
          {meaning === 'not-found' ? (
            <p className="text-slate-500">
              Sanaa ei löytynyt sisäisestä sanastosta — sanakirja kattaa sovelluksen oman sanaston perusmuodossa.
              <span className="mt-1 block text-slate-400">Word not found in the built-in dictionary (base forms only).</span>
            </p>
          ) : (
            <>
              <p className="font-semibold text-slate-900">{meaning.fi}</p>
              <p className="text-slate-700">{meaning.en}</p>
              {meaning.bn && <p className="mt-0.5 text-emerald-700">{meaning.bn}</p>}
            </>
          )}
        </div>
      )}
    </div>
  )
}
