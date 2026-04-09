import { useState } from 'react'

interface NavbarProps {
  activeSection: string
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  const navItems = [
    { id: 'about', label: 'About me' },
    { id: 'resume', label: 'Resume' },
    { id: 'projects', label: 'Work' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2d5a27] px-6 md:px-12 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 0L12.5 7.5H20L14 12L16.5 20L10 15.5L3.5 20L6 12L0 7.5H7.5L10 0Z" fill="#E8A020"/>
        </svg>
        <span className="text-white font-playfair font-bold text-xl tracking-wide">Jayesh Kumar Prajapati</span>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`text-sm font-medium transition-colors ${
              activeSection === item.id ? 'text-[#E8A020]' : 'text-white hover:text-[#E8A020]'
            }`}
          >
            {item.label}
          </button>
        ))}
        <button
          onClick={() => scrollTo('contact')}
          className="bg-[#E8A020] text-[#1a1a1a] font-semibold px-5 py-2 rounded-full text-sm hover:bg-[#d4911a] transition-colors"
        >
          Get in touch!
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white" 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {menuOpen ? (
            <path d="M18 6L6 18M6 6l12 12"/>
          ) : (
            <>
              <path d="M3 6h18M3 12h18M3 18h18"/>
            </>
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#2d5a27] flex flex-col items-center gap-6 py-8 md:hidden">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-white text-lg font-medium hover:text-[#E8A020] transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="bg-[#E8A020] text-[#1a1a1a] font-semibold px-6 py-3 rounded-full text-base hover:bg-[#d4911a] transition-colors"
          >
            Get in touch!
          </button>
        </div>
      )}
    </nav>
  )
}
