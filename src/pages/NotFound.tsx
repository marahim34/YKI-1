import { Link, useLocation } from 'react-router-dom'
import { routes } from '../routes'
import FoxMascot from '../components/FoxMascot'

export default function NotFound() {
  const location = useLocation()

  return (
    <div className="flex flex-col items-center gap-4 py-16 text-center">
      <FoxMascot className="h-16 w-16" />
      <div>
        <h1 className="text-xl font-bold text-slate-900">Sivua ei löytynyt</h1>
        <p className="text-sm text-slate-500">Page not found · পাতাটি খুঁজে পাওয়া যায়নি</p>
      </div>
      <p className="max-w-sm text-sm text-slate-600">
        Osoitetta <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-700">{location.pathname}</code> ei
        ole olemassa. Se on saatettu siirtää tai kirjoittaa väärin.
      </p>
      <p className="max-w-sm text-sm text-slate-500">
        এই ঠিকানাটি বিদ্যমান নেই। এটি হয়তো সরানো হয়েছে বা ভুল লেখা হয়েছে।
      </p>
      <div className="mt-2 flex flex-wrap justify-center gap-2">
        <Link to={routes.home} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
          Etusivulle →
        </Link>
        <Link to={routes.howToUse} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
          Näin käytät sovellusta
        </Link>
      </div>
    </div>
  )
}
