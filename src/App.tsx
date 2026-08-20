import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Roadmap from './pages/Roadmap'
import WeekDetail from './pages/WeekDetail'
import Vocab from './pages/Vocab'
import MyBooks from './pages/MyBooks'
import MockExam from './pages/MockExam'
import Progress from './pages/Progress'
import Grammar from './pages/Grammar'
import BookPractice from './pages/BookPractice'
import HowToUse from './pages/HowToUse'
import Templates from './pages/Templates'
import Numbers from './pages/Numbers'
import Reading from './pages/exercises/Reading'
import Listening from './pages/exercises/Listening'
import Writing from './pages/exercises/Writing'
import Speaking from './pages/exercises/Speaking'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/how-to-use" element={<HowToUse />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/week/:weekId" element={<WeekDetail />} />
        <Route path="/week/:weekId/reading" element={<Reading />} />
        <Route path="/week/:weekId/listening" element={<Listening />} />
        <Route path="/week/:weekId/writing" element={<Writing />} />
        <Route path="/week/:weekId/speaking" element={<Speaking />} />
        <Route path="/vocab" element={<Vocab />} />
        <Route path="/my-books" element={<MyBooks />} />
        <Route path="/grammar" element={<Grammar />} />
        <Route path="/books" element={<BookPractice />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/numbers" element={<Numbers />} />
        <Route path="/exam" element={<MockExam />} />
        <Route path="/progress" element={<Progress />} />
      </Route>
    </Routes>
  )
}
