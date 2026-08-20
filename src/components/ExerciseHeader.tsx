import { Link } from 'react-router-dom'
import type { CefrLevel } from '../types'
import LevelPill from './LevelPill'

export default function ExerciseHeader({
  weekId,
  icon,
  title,
  level,
}: {
  weekId: number
  icon: string
  title: string
  level: CefrLevel
}) {
  return (
    <div className="space-y-2">
      <Link to={`/week/${weekId}`} className="text-sm text-blue-700 hover:underline">
        ← Takaisin viikkoon {weekId}
      </Link>
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-xl font-bold text-slate-900">
          {icon} {title}
        </h1>
        <LevelPill level={level} />
      </div>
    </div>
  )
}
