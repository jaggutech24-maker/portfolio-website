import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import ResumePage from './ResumePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </Router>
  )
}

export default App
