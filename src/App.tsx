import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import RouteErrorBoundary from './components/RouteErrorBoundary'
import ScrollToTop from './components/ScrollToTop'
import { routePatterns } from './routes'

// Every page is its own chunk, fetched on first visit to that route instead
// of all at once — the app has grown to 30+ pages worth of content (32-week
// curriculum, 9 YKI-valmennus chapters, full grammar reference, etc.), and
// bundling it all into a single chunk was flagged by Vite's own build
// output as oversized.
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Roadmap = lazy(() => import('./pages/Roadmap'))
const WeekDetail = lazy(() => import('./pages/WeekDetail'))
const Vocab = lazy(() => import('./pages/Vocab'))
const MyBooks = lazy(() => import('./pages/MyBooks'))
const MockExam = lazy(() => import('./pages/MockExam'))
const Progress = lazy(() => import('./pages/Progress'))
const Grammar = lazy(() => import('./pages/Grammar'))
const BookPractice = lazy(() => import('./pages/BookPractice'))
const HowToUse = lazy(() => import('./pages/HowToUse'))
const Templates = lazy(() => import('./pages/Templates'))
const Numbers = lazy(() => import('./pages/Numbers'))
const BasicVocab = lazy(() => import('./pages/BasicVocab'))
const DailyPractice = lazy(() => import('./pages/DailyPractice'))
const ConversationPractice = lazy(() => import('./pages/ConversationPractice'))
const YkiPrep = lazy(() => import('./pages/YkiPrep'))
const Reading = lazy(() => import('./pages/exercises/Reading'))
const Listening = lazy(() => import('./pages/exercises/Listening'))
const Writing = lazy(() => import('./pages/exercises/Writing'))
const Speaking = lazy(() => import('./pages/exercises/Speaking'))
const NotFound = lazy(() => import('./pages/NotFound'))

function PageLoading() {
  return (
    <div className="flex justify-center py-16 text-sm text-slate-400" role="status" aria-live="polite">
      Ladataan…
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <RouteErrorBoundary>
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path={routePatterns.home} element={<Dashboard />} />
              <Route path={routePatterns.howToUse} element={<HowToUse />} />
              <Route path={routePatterns.roadmap} element={<Roadmap />} />
              <Route path={routePatterns.weekDetail} element={<WeekDetail />} />
              <Route path={routePatterns.weekReading} element={<Reading />} />
              <Route path={routePatterns.weekListening} element={<Listening />} />
              <Route path={routePatterns.weekWriting} element={<Writing />} />
              <Route path={routePatterns.weekSpeaking} element={<Speaking />} />
              <Route path={routePatterns.vocab} element={<Vocab />} />
              <Route path={routePatterns.myBooks} element={<MyBooks />} />
              <Route path={routePatterns.grammar} element={<Grammar />} />
              <Route path={routePatterns.books} element={<BookPractice />} />
              <Route path={routePatterns.templates} element={<Templates />} />
              <Route path={routePatterns.numbers} element={<Numbers />} />
              <Route path={routePatterns.basics} element={<BasicVocab />} />
              <Route path={routePatterns.daily} element={<DailyPractice />} />
              <Route path={routePatterns.conversations} element={<ConversationPractice />} />
              <Route path={routePatterns.ykiValmennus} element={<YkiPrep />} />
              <Route path={routePatterns.exam} element={<MockExam />} />
              <Route path={routePatterns.progress} element={<Progress />} />
              <Route path={routePatterns.notFound} element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </RouteErrorBoundary>
    </>
  )
}
