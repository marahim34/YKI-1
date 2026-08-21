import { Component, type ErrorInfo, type ReactNode } from 'react'

const RELOAD_KEY = 'yki-chunk-reload-at'
const RELOAD_COOLDOWN_MS = 10_000

function isChunkLoadError(error: unknown): boolean {
  const message = error instanceof Error ? error.message : String(error)
  return /dynamically imported module|module script failed|ChunkLoadError|Failed to fetch/i.test(message)
}

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  isChunkError: boolean
  reloading: boolean
}

// Catches render errors from the lazy-loaded route chunks in App.tsx. Without
// this, a stale chunk URL left over from a previous deploy (the service
// worker activates a new version in the background without reloading an
// already-open tab) throws during a dynamic import() with nothing to catch
// it, and the whole React tree unmounts — a blank page instead of a message.
// A single reload almost always fixes it, since it fetches the current
// index.html and the currently-deployed chunk hashes; the cooldown guards
// against reload-looping if the chunk is genuinely broken rather than stale.
export default class RouteErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, isChunkError: false, reloading: false }

  static getDerivedStateFromError(error: unknown): Pick<State, 'hasError' | 'isChunkError'> {
    return { hasError: true, isChunkError: isChunkLoadError(error) }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (isChunkLoadError(error)) {
      const last = Number(sessionStorage.getItem(RELOAD_KEY) || 0)
      const now = Date.now()
      if (now - last > RELOAD_COOLDOWN_MS) {
        sessionStorage.setItem(RELOAD_KEY, String(now))
        this.setState({ reloading: true })
        window.location.reload()
        return
      }
    }
    console.error('Route render error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      if (this.state.isChunkError && this.state.reloading) {
        return (
          <div className="flex flex-col items-center justify-center gap-1 py-20 text-center text-sm text-slate-500" role="status">
            <p>Päivitetään uusimpaan versioon…</p>
            <p className="text-xs">Loading the latest version… · সর্বশেষ সংস্করণ লোড হচ্ছে…</p>
          </div>
        )
      }
      return (
        <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
          <p className="text-sm font-semibold text-slate-700">Jokin meni pieleen. / Something went wrong.</p>
          <p className="text-xs text-slate-500">দুঃখিত, একটি সমস্যা হয়েছে।</p>
          <button
            onClick={() => window.location.reload()}
            className="rounded-full bg-blue-600 px-4 py-1.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Lataa sivu uudelleen / Reload
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
