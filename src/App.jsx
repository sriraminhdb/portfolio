import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main className="page-bg">
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
