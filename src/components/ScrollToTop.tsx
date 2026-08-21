import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// HashRouter doesn't reset scroll position between routes on its own, so a
// long page (e.g. the Grammar reference) leaves the next page scrolled to
// the same spot. Skip the reset when only the hash fragment changes (e.g.
// /roadmap#phase-2) so in-page anchor links keep working.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
