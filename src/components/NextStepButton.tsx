import { Link } from 'react-router-dom'

const CLASS_NAME =
  'flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-700'

// Chains one step to the next: pass `path` to navigate to a route, or
// `onClick` for in-page progression (e.g. advancing a tab/chapter without a
// route change). Exactly one of the two should be given.
export default function NextStepButton({ path, onClick, label }: { path?: string; onClick?: () => void; label: string }) {
  if (onClick) {
    return (
      <button onClick={onClick} className={CLASS_NAME}>
        {label} →
      </button>
    )
  }
  return (
    <Link to={path ?? '#'} className={CLASS_NAME}>
      {label} →
    </Link>
  )
}
