import { Navigate, useParams } from 'react-router-dom'
import { READING_BY_WEEK } from '../../data/content'
import { getWeek } from '../../data/curriculum'
import { useProgress } from '../../context/ProgressContext'
import ExerciseHeader from '../../components/ExerciseHeader'
import McqQuiz from '../../components/McqQuiz'
import GrammarPanel from '../../components/GrammarPanel'

export default function Reading() {
  const { weekId } = useParams()
  const { recordResult } = useProgress()
  const exercise = READING_BY_WEEK[Number(weekId)]

  if (!exercise) return <Navigate to={`/week/${weekId}`} replace />

  return (
    <div className="space-y-4">
      <ExerciseHeader weekId={exercise.weekId} icon="📖" title={exercise.title} level={exercise.level} />

      <GrammarPanel topicIds={getWeek(exercise.weekId)?.grammarTopicIds ?? []} />

      <article className="whitespace-pre-line rounded-xl border border-slate-200 bg-white p-5 text-sm leading-relaxed text-slate-800">
        {exercise.textFi}
      </article>

      <McqQuiz
        questions={exercise.questions}
        onFinish={(score) =>
          recordResult(
            { exerciseId: exercise.id, skill: 'reading', weekId: exercise.weekId, score, completedAt: new Date().toISOString() },
            Math.round(10 + score * 10),
          )
        }
      />
    </div>
  )
}
