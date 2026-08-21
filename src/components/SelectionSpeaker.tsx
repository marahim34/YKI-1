import { useEffect, useState } from 'react'
import { speakFinnish, ttsSupported } from '../lib/tts'

interface Position {
  top: number
  left: number
}

// A floating "listen" button that appears whenever the user selects any text
// anywhere in the app (a word in a reading passage, a grammar example, a
// vocab list...) and reads it aloud on click — for when you're not sure how
// to pronounce/spell a specific word and don't want to hunt for a dedicated
// 🔊 button next to it.
export default function SelectionSpeaker() {
  const [selectedText, setSelectedText] = useState('')
  const [position, setPosition] = useState<Position | null>(null)
  const [speaking, setSpeaking] = useState(false)

  useEffect(() => {
    if (!ttsSupported()) return

    function clear() {
      setSelectedText('')
      setPosition(null)
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
    }

    document.addEventListener('selectionchange', handleSelectionChange)
    // Selection coordinates are viewport-relative; scrolling would leave the
    // button floating over the wrong spot, so just dismiss it instead.
    window.addEventListener('scroll', clear, true)
    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange)
      window.removeEventListener('scroll', clear, true)
    }
  }, [])

  if (!ttsSupported() || !selectedText || !position) return null

  function handlePlay() {
    setSpeaking(true)
    speakFinnish(selectedText, { onEnd: () => setSpeaking(false) })
  }

  return (
    <button
      // Selecting text collapses on the next mousedown outside the range —
      // preventing default here keeps the selection (and this button) alive
      // until the click actually fires.
      onMouseDown={(e) => e.preventDefault()}
      onClick={handlePlay}
      disabled={speaking}
      style={{ top: Math.max(position.top - 42, 8), left: position.left, transform: 'translateX(-50%)' }}
      className="fixed z-50 flex items-center gap-1.5 whitespace-nowrap rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white shadow-lg hover:bg-slate-800 disabled:opacity-60"
      aria-label="Kuuntele valittu teksti"
    >
      🔊 {speaking ? 'Kuuntelet…' : 'Kuuntele'}
    </button>
  )
}
