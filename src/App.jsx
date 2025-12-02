import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Publications from './components/Publications'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />

        <Skills />

        <Projects />

        <Education />

        <Publications />

        <Achievements />

        <Contact />
      </main>
    </>
  )
}

export default App
