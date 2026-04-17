import { motion } from 'framer-motion'

export default function Hero({ activeSection }: { activeSection: string }) {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#resume' },
    { name: 'Projects', href: '#projects' },
  ]

  const scrollTo = (id: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const el = document.getElementById(id.replace('#', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-playfair font-black tracking-tight text-[#F5F5F5] sm:text-6xl"
        >
          Jayesh Prajapati
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-lg font-medium tracking-tight text-[#F5F5F5] sm:text-xl"
        >
          Frontend Developer
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 max-w-xs leading-relaxed text-[#A1A1AA] font-inter"
        >
          I build engaging, pixel-perfect, and modern digital web experiences with a focus on polished UI.
        </motion.p>

        {/* Navigation list */}
        <nav className="nav hidden lg:block mt-16">
          <ul className="w-max flex flex-col gap-4">
            {navItems.map((item, i) => {
              const isActive = activeSection === item.name.toLowerCase() || (activeSection === 'home' && i === 0)
              return (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                >
                  <a 
                    href={item.href} 
                    onClick={(e) => scrollTo(item.href, e)}
                    className="group flex items-center py-2"
                  >
                    <span 
                      className={`mr-4 h-px transition-all duration-300 ease-in-out ${
                        isActive ? 'w-16 bg-[#D4AF37]' : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-[#D4AF37]'
                      }`} 
                    />
                    <span 
                      className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                        isActive ? 'text-[#F5F5F5]' : 'text-slate-500 group-hover:text-[#F5F5F5]'
                      }`}
                    >
                      {item.name}
                    </span>
                  </a>
                </motion.li>
              )
            })}
          </ul>
        </nav>
      </div>

      {/* Social links */}
      <motion.ul 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 flex items-center gap-5"
      >
        <li>
          <a href="https://lnk.ink/jayeshprajapati" target="_blank" rel="noreferrer" className="block text-slate-400 hover:text-[#D4AF37] transition-colors">
            <span className="sr-only">LinkedIn</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
            </svg>
          </a>
        </li>
        <li>
          <a href="mailto:jaggutech24@gmail.com" className="block text-slate-400 hover:text-[#D4AF37] transition-colors">
            <span className="sr-only">Email</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </li>
      </motion.ul>
    </div>
  )
}
