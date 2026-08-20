import { NavLink, Outlet } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext'

const NAV_ITEMS = [
  { to: '/', label: 'Koti', icon: '🏠' },
  { to: '/roadmap', label: 'Polku', icon: '🗺️' },
  { to: '/vocab', label: 'Sanasto', icon: '🧠' },
  { to: '/my-books', label: 'Omat kirjat', icon: '📚' },
  { to: '/exam', label: 'Koekierros', icon: '⏱️' },
  { to: '/progress', label: 'Edistyminen', icon: '📈' },
]

function navLinkClass(isActive: boolean) {
  return [
    'flex flex-col items-center justify-center gap-0.5 rounded-xl px-2 py-1.5 text-[11px] font-medium transition-colors sm:flex-row sm:gap-1.5 sm:px-3 sm:py-2 sm:text-sm',
    isActive ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100',
  ].join(' ')
}

export default function Layout() {
  const { state } = useProgress()

  return (
    <div className="min-h-screen bg-[#f7f6f2] pb-20 sm:pb-0">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">🇫🇮</span>
            <div>
              <p className="text-sm font-semibold leading-tight text-slate-900">Matka YKI:hin</p>
              <p className="text-[11px] leading-tight text-slate-500">A1 → YKI keskitaso</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-full bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-700" title="Peräkkäiset opiskelupäivät">
              🔥 {state.streakCount}
            </div>
            <div className="flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700" title="Kokemuspisteet">
              ⭐ {state.xp} XP
            </div>
          </div>
        </div>
        <nav className="mx-auto hidden max-w-5xl gap-1 px-4 pb-2 sm:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => navLinkClass(isActive)}>
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-6">
        <Outlet />
      </main>

      <nav className="fixed inset-x-0 bottom-0 z-20 flex justify-between border-t border-slate-200 bg-white/95 px-1 py-1.5 backdrop-blur sm:hidden">
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => navLinkClass(isActive) + ' flex-1'}>
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
