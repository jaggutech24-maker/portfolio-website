import { useState, useEffect } from 'react'

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
        className="bg-[#0B0B0B] min-h-screen font-inter text-[#A1A1AA] selection:bg-[#D4AF37]/30 selection:text-[#F5F5F5] relative"
        style={{
          opacity: loadingPhase !== 'loading' ? 1 : 0,
          transition: 'opacity 0.7s ease',
          pointerEvents: loadingPhase !== 'loading' ? 'auto' : 'none',
        }}
      >
        <CursorTrail />
        
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 flex flex-col lg:flex-row lg:justify-between gap-4 relative z-10">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <Hero activeSection={activeSection} />
          </header>

          <main className="lg:w-[52%] lg:py-24 flex flex-col gap-24">
            <About />
            <Resume />
            <Projects />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
    </>
  )
}

export default App
