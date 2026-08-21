import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext'
import FoxMascot from './FoxMascot'

const PRIMARY_NAV = [
  { to: '/', label: 'Koti', icon: '🏠' },
  { to: '/roadmap', label: 'Polku', icon: '🗺️' },
  { to: '/vocab', label: 'Sanasto', icon: '🧠' },
  { to: '/exam', label: 'Koekierros', icon: '⏱️' },
  { to: '/progress', label: 'Edistyminen', icon: '📈' },
]

const MORE_NAV = [
  { to: '/grammar', label: 'Kielioppi', icon: '📐' },
  { to: '/numbers', label: 'Numerot', icon: '🔢' },
  { to: '/basics', label: 'Perussanasto', icon: '🌻' },
  { to: '/daily', label: 'Sekoitettu harjoitus', icon: '🎲' },
  { to: '/conversations', label: 'Keskusteluharjoitukset', icon: '💬' },
  { to: '/templates', label: 'Mallipohjat', icon: '📋' },
  { to: '/books', label: 'Kirjaharjoitukset', icon: '📖' },
  { to: '/my-books', label: 'Omat kirjat', icon: '📚' },
  { to: '/how-to-use', label: 'Ohjeet', icon: '❓' },
]

const ALL_NAV = [...PRIMARY_NAV, ...MORE_NAV]

function navLinkClass(isActive: boolean) {
  return [
    'flex flex-col items-center justify-center gap-0.5 rounded-xl px-2 py-1.5 text-[11px] font-medium transition-colors sm:flex-row sm:gap-1.5 sm:px-3 sm:py-2 sm:text-sm',
    isActive ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100',
  ].join(' ')
}

export default function Layout() {
  const { state } = useProgress()
  const [moreOpen, setMoreOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#f7f6f2] pb-20 sm:pb-0">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <FoxMascot className="h-9 w-9 shrink-0" />
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
        <nav className="mx-auto hidden max-w-5xl flex-wrap gap-1 px-4 pb-2 sm:flex">
          {ALL_NAV.map((item) => (
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

      {moreOpen && (
        <button
          aria-label="Sulje valikko"
          onClick={() => setMoreOpen(false)}
          className="fixed inset-0 z-20 bg-slate-900/30 sm:hidden"
        />
      )}

      <nav className="fixed inset-x-0 bottom-0 z-30 sm:hidden">
        {moreOpen && (
          <div className="grid grid-cols-3 gap-2 border-t border-slate-200 bg-white p-3">
            {MORE_NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMoreOpen(false)}
                className={({ isActive }) => navLinkClass(isActive) + ' !flex-col border border-slate-100 py-2'}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="whitespace-nowrap">{item.label}</span>
              </NavLink>
            ))}
          </div>
        )}
        <div className="flex gap-1 border-t border-slate-200 bg-white/95 px-2 py-1.5 backdrop-blur">
          {PRIMARY_NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={() => setMoreOpen(false)} className={({ isActive }) => navLinkClass(isActive) + ' flex-1'}>
              <span>{item.icon}</span>
              <span className="whitespace-nowrap">{item.label}</span>
            </NavLink>
          ))}
          <button onClick={() => setMoreOpen((o) => !o)} className={navLinkClass(moreOpen) + ' flex-1'}>
            <span>{moreOpen ? '✕' : '⋯'}</span>
            <span className="whitespace-nowrap">Lisää</span>
          </button>
        </div>
      </nav>
    </div>
  )
}
