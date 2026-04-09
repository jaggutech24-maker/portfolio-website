import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CursorTrail from './components/CursorTrail'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [loadingPhase, setLoadingPhase] = useState<'loading' | 'fading' | 'done'>('loading')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'resume', 'projects', 'contact']
      const scrollPos = window.scrollY + 100

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const bottom = top + el.offsetHeight
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Loading screen — unmounts itself after onDone fires */}
      {loadingPhase !== 'done' && (
        <LoadingScreen 
          onFadeStart={() => setLoadingPhase('fading')}
          onDone={() => setLoadingPhase('done')} 
        />
      )}

      {/* Main content fades in simultaneously as loader fades out */}
      <div
        className="bg-[#0B0B0B] min-h-screen font-inter"
        style={{
          opacity: loadingPhase !== 'loading' ? 1 : 0,
          transition: 'opacity 0.7s ease',
          pointerEvents: loadingPhase !== 'loading' ? 'auto' : 'none',
        }}
      >
        <CursorTrail />
        <Navbar activeSection={activeSection} />
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
