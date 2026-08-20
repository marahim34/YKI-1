import { useEffect, useRef, useState } from 'react'

export function ttsSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}

function pickFinnishVoice(): SpeechSynthesisVoice | null {
  if (!ttsSupported()) return null
  const voices = window.speechSynthesis.getVoices()
  return (
    voices.find((v) => v.lang?.toLowerCase().startsWith('fi')) ??
    voices.find((v) => v.lang?.toLowerCase().startsWith('fi-fi')) ??
    null
  )
}

export interface SpeakOptions {
  rate?: number // 0.1 - 10, default 0.9 (slightly slower for learners)
  onEnd?: () => void
}

export function speakFinnish(text: string, options: SpeakOptions = {}): SpeechSynthesisUtterance | null {
  if (!ttsSupported()) return null
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  const voice = pickFinnishVoice()
  if (voice) utterance.voice = voice
  utterance.lang = voice?.lang ?? 'fi-FI'
  utterance.rate = options.rate ?? 0.9
  if (options.onEnd) utterance.onend = options.onEnd
  window.speechSynthesis.speak(utterance)
  return utterance
}

export function stopSpeaking(): void {
  if (ttsSupported()) window.speechSynthesis.cancel()
}

// React hook for a "play listening script" button with speaking state + rate control.
export function useFinnishSpeech() {
  const [speaking, setSpeaking] = useState(false)
  const [supported, setSupported] = useState(false)
  const [hasFinnishVoice, setHasFinnishVoice] = useState(false)
  const rateRef = useRef(0.9)

  useEffect(() => {
    setSupported(ttsSupported())
    if (!ttsSupported()) return
    const check = () => setHasFinnishVoice(pickFinnishVoice() !== null)
    check()
    window.speechSynthesis.onvoiceschanged = check
    return () => {
      window.speechSynthesis.onvoiceschanged = null
    }
  }, [])

  function play(text: string) {
    if (!ttsSupported()) return
    setSpeaking(true)
    speakFinnish(text, {
      rate: rateRef.current,
      onEnd: () => setSpeaking(false),
    })
  }

  function stop() {
    stopSpeaking()
    setSpeaking(false)
  }

  function setRate(rate: number) {
    rateRef.current = rate
  }

  return { play, stop, speaking, supported, hasFinnishVoice, setRate }
}
