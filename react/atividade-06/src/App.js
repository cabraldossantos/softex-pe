import { BrowserRouter as Router, Routes, Route}  from 'react-router-dom'

import Home from './pages/Home'
import Company from './pages/Company'
import Contact from './pages/Contact'

import Navbar from './components/layout/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/company" element={<Company />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  )
}

export default App;
