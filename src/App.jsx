import './App.css'
import Home from './pages/Home'
import ContactMe from './pages/ContactMe'
import Projects from './pages/Projects'
import About from './pages/About'
import {Routes,Router,Route} from 'react-router-dom'
function App() {


  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<ContactMe/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/about" element={<About/>} />
    </Routes>
  )
}

export default App
