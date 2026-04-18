import { useState, useEffect } from 'react'

interface NavbarProps {
  activeSection: string
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  const navItems = [
    { id: 'about',   label: 'About' },
    { id: 'resume',  label: 'Resume' },
    { id: 'projects',label: 'Work'   },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-14 py-4 flex items-center justify-between ${
        scrolled ? 'bg-[#0B0B0B]/95 backdrop-blur-md shadow-[0_2px_30px_rgba(0,0,0,0.6)]' : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <div
        className="flex items-center gap-2.5 cursor-pointer group"
        onClick={() => scrollTo('home')}
      >
        <div className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg,#D4AF37,#FACC15)', boxShadow: '0 0 14px rgba(212,175,55,0.45)' }}>
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
            <path d="M10 0L12.5 7.5H20L14 12L16.5 20L10 15.5L3.5 20L6 12L0 7.5H7.5L10 0Z" fill="#0B0B0B"/>
          </svg>
        </div>
        <span className="text-[#F5F5F5] font-playfair font-bold text-base sm:text-lg tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300 whitespace-nowrap overflow-hidden text-ellipsis md:overflow-visible">
          JAYESH KUMAR PRAJAPATI
        </span>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`text-sm font-medium tracking-wide transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:bg-[#D4AF37] after:transition-all after:duration-300 ${
              activeSection === item.id
                ? 'text-[#D4AF37] after:w-full'
                : 'text-[#A1A1AA] hover:text-[#FACC15] after:w-0 hover:after:w-full'
            }`}
          >
            {item.label}
          </button>
        ))}
        <button
          onClick={() => scrollTo('contact')}
          className="text-[#0B0B0B] font-semibold px-5 py-2 rounded-full text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.45)]"
          style={{ background: 'linear-gradient(135deg,#D4AF37,#FACC15)' }}
        >
          Get in touch
        </button>
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-[#F5F5F5] hover:text-[#D4AF37] transition-colors"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {menuOpen ? (
            <path d="M18 6L6 18M6 6l12 12"/>
          ) : (
            <path d="M3 6h18M3 12h18M3 18h18"/>
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0B0B0B]/98 backdrop-blur-md border-t border-[#D4AF37]/20 flex flex-col items-center gap-6 py-10 md:hidden">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-[#A1A1AA] text-lg font-medium hover:text-[#D4AF37] transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="text-[#0B0B0B] font-bold px-8 py-3 rounded-full text-base transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg,#D4AF37,#FACC15)' }}
          >
            Get in touch
          </button>
        </div>
      )}
    </nav>
  )
}
