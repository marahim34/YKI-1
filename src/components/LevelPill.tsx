import type { CefrLevel } from '../types'

const LEVEL_COLORS: Record<CefrLevel, string> = {
  A1: 'bg-emerald-50 text-emerald-700',
  A2: 'bg-teal-50 text-teal-700',
  B1: 'bg-blue-50 text-blue-700',
  B2: 'bg-violet-50 text-violet-700',
}

export default function LevelPill({ level }: { level: CefrLevel }) {
  return <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${LEVEL_COLORS[level]}`}>{level}</span>
}
