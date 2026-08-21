import { useState } from 'react'
import { BOOK_NAMES, chaptersForBook } from '../data/bookPractice'
import type { BookPracticeSampleAnswer } from '../types'
import LevelPill from '../components/LevelPill'
import BookVocabQuiz from '../components/BookVocabQuiz'
import FillInDrill from '../components/FillInDrill'
import GrammarPanel from '../components/GrammarPanel'
import MatchGame from '../components/MatchGame'
import { bookVocabToItems } from '../lib/bookVocabAdapter'

function SampleAnswer({ sample }: { sample: BookPracticeSampleAnswer }) {
  const [revealed, setRevealed] = useState(false)
  return (
    <div>
      <h3 className="mb-2 text-sm font-semibold text-slate-800">Mallivastaus (taitotaso 4 / B2)</h3>
      <div className="rounded-lg border border-violet-200 bg-violet-50 p-3">
        <p className="text-sm font-medium text-violet-900">{sample.promptFi}</p>
        <p className="text-xs text-violet-600">{sample.promptEn}</p>
        {revealed ? (
          <div className="mt-3 space-y-1 border-t border-violet-200 pt-3">
            <p className="whitespace-pre-line text-sm text-slate-800">{sample.textFi}</p>
            <p className="whitespace-pre-line text-xs text-slate-500">{sample.textEn}</p>
          </div>
        ) : (
          <button
            onClick={() => setRevealed(true)}
            className="mt-3 rounded-md bg-violet-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-violet-700"
          >
            Yritä itse ensin, näytä sitten mallivastaus →
          </button>
        )}
      </div>
    </div>
  )
}

export default function BookPractice() {
  const [book, setBook] = useState<string>(BOOK_NAMES[0])
  const [openChapterId, setOpenChapterId] = useState<string | null>(null)
  const chapters = chaptersForBook(book)

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-slate-900">Kirjaharjoitukset</h1>
        <p className="text-sm text-slate-500">
          Lyhyitä alkuperäisiä harjoituksia rinnalle, kun luet omaa Suomen mestari- tai Oma suomi -kirjaasi luku
          kerrallaan. Nämä eivät korvaa kirjaa, vaan täydentävät sitä sanasto- ja kielioppiharjoituksilla.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {BOOK_NAMES.map((b) => (
          <button
            key={b}
            onClick={() => {
              setBook(b)
              setOpenChapterId(null)
            }}
            className={`rounded-full px-3 py-1.5 text-sm font-medium ${
              book === b ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {b}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {chapters.map((chapter) => {
          const open = openChapterId === chapter.id
          return (
            <div key={chapter.id} className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <button onClick={() => setOpenChapterId(open ? null : chapter.id)} className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left">
                <span className="flex flex-1 items-center gap-2">
                  <LevelPill level={chapter.level} />
                  <span>
                    <span className="block font-semibold text-slate-900">{chapter.chapterLabel}</span>
                    <span className="block text-xs text-slate-500">{chapter.topic}</span>
                  </span>
                </span>
                <span className="text-slate-400">{open ? '−' : '+'}</span>
              </button>
              {open && (
                <div className="space-y-4 border-t border-slate-100 px-4 py-4">
                  <div>
                    <h3 className="mb-2 text-sm font-semibold text-slate-800">Sanastotesti</h3>
                    <BookVocabQuiz items={chapter.vocabQuiz} />
                  </div>
                  {(() => {
                    const matchItems = bookVocabToItems(chapter.vocabQuiz, chapter.id, chapter.topic, chapter.level)
                    if (matchItems.length < 2) return null
                    return (
                      <div>
                        <h3 className="mb-2 text-sm font-semibold text-slate-800">Yhdistämispeli</h3>
                        <MatchGame items={matchItems} />
                      </div>
                    )
                  })()}
                  <div>
                    <h3 className="mb-2 text-sm font-semibold text-slate-800">Kielioppiharjoitus</h3>
                    <FillInDrill instructions={chapter.grammarDrill.instructions} items={chapter.grammarDrill.items} />
                  </div>
                  {chapter.sampleAnswer && <SampleAnswer sample={chapter.sampleAnswer} />}
                  <GrammarPanel topicIds={chapter.grammarTopicIds} />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
