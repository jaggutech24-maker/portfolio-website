export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0B0B0B] border-t border-[#D4AF37]/10 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row flex-wrap items-center justify-between gap-8 mb-10">

          {/* Logo */}
          <div className="flex flex-wrap items-center justify-center gap-3 cursor-pointer group" onClick={() => scrollTo('home')}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 group-hover:shadow-[0_0_14px_rgba(212,175,55,0.5)] transition-all duration-300"
              style={{ background: 'linear-gradient(135deg,#D4AF37,#FACC15)' }}>
              <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
                <path d="M10 0L12.5 7.5H20L14 12L16.5 20L10 15.5L3.5 20L6 12L0 7.5H7.5L10 0Z" fill="#0B0B0B"/>
              </svg>
            </div>
            <span className="text-[#F5F5F5] font-playfair font-bold text-lg tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300 whitespace-nowrap">
              JAYESH KUMAR PRAJAPATI
            </span>
          </div>

          {/* Nav Links */}
          <div className="flex gap-7">
            {[
              { id: 'about',    label: 'About' },
              { id: 'resume',   label: 'Resume' },
              { id: 'projects', label: 'Work'   },
              { id: 'contact',  label: 'Contact' },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-[#A1A1AA] text-sm hover:text-[#FACC15] transition-colors duration-300 font-inter"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            {[
              {
                href: 'mailto:jaggutech24@gmail.com',
                label: 'Email',
                icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>,
              },
              {
                href: 'https://lnk.ink/jayeshprajapati',
                label: 'LinkedIn',
                icon: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,
                target: '_blank',
              },
              {
                href: 'tel:+917822890807',
                label: 'Phone',
                icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.46-1.46a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>,
              },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target={s.target}
                rel={s.target ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 rounded-full border border-[#D4AF37]/20 flex items-center justify-center text-[#A1A1AA]
                  hover:border-[#D4AF37] hover:text-[#D4AF37] hover:shadow-[0_0_14px_rgba(212,175,55,0.3)] transition-all duration-300"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-[#D4AF37]/10 pt-7 text-center">
          <p className="text-[#A1A1AA]/50 text-sm font-inter tracking-wider">
            &copy; 2025 JAYESH KUMAR PRAJAPATI, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
