import { motion } from 'framer-motion'
import moodbookImg from '../assets/images/moodbook.png'

interface Project {
  year: string;
  title: string;
  tech: string[];
  desc: string;
  github: string;
  liveDemo: string;
  image?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      year: '2024',
      title: 'MoodBook',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Framer Motion'],
      desc: 'A pixel-art based interactive experience to pick a secret mood and draw it out on an 8-bit canvas — solo or with friends. Features a custom canvas engine, procedural chiptune music, a dynamic timer, and a retro diary-inspired UI. Designed to feel cozy, playful, and nostalgic.',
      github: '#',
      liveDemo: 'https://moodbook-pixel-app.vercel.app/',
      image: moodbookImg
    },
    {
      year: '2024',
      title: 'Know Your Expense Tracker',
      tech: ['JavaScript', 'HTML', 'CSS'],
      desc: 'Designed and developed a mobile-responsive expense tracking application to help users manage personal finances. The project involved gathering functional requirements, creating a user-friendly interface, and implementing business logic for real-time calculations and data management.',
      github: '#',
      liveDemo: '#'
    },
    {
      year: '2024',
      title: 'Art Gallery Management System',
      tech: ['HTML', 'CSS', 'PHP', 'MySQL'],
      desc: 'Built a full-stack art gallery management system with features for gallery owners to manage artworks, exhibitions, and visitor records. Implemented secure database operations and a clean admin dashboard.',
      github: '#',
      liveDemo: '#'
    },
    {
      year: '2024',
      title: 'Sorting Visualizer',
      tech: ['React.js', 'Tailwind CSS'],
      desc: 'Interactive sorting algorithm visualizer built with React.js and Tailwind CSS. Supports multiple algorithms including Bubble Sort, Selection Sort, Merge Sort, and Quick Sort with real-time visual animation and speed control.',
      github: '#',
      liveDemo: '#'
    },
  ]

  return (
    <section id="projects" className="relative scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0B0B0B]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#F5F5F5]">Projects</h2>
      </div>

      <div className="group/list">
        {projects.map((proj, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: false, amount: 0.1 }}
            className="mb-12 group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[#D4AF37]/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            
            <div className="z-10 sm:col-span-2 relative mt-1">
              {proj.image ? (
                <img src={proj.image} alt={proj.title} className="rounded border-2 border-slate-200/10 transition group-hover:border-[#D4AF37]/30 sm:order-1 sm:translate-y-1 w-full aspect-video object-cover" />
              ) : (
                <div className="rounded border-2 border-slate-200/10 bg-slate-800/50 aspect-video w-full flex items-center justify-center text-xs text-[#A1A1AA] font-mono sm:translate-y-1">
                  {proj.year}
                </div>
              )}
            </div>
            
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-[#F5F5F5]">
                <div>
                  <a className="inline-flex items-baseline font-medium leading-tight text-[#F5F5F5] hover:text-[#D4AF37] focus-visible:text-[#D4AF37] group/link text-base" href={proj.liveDemo !== '#' ? proj.liveDemo : undefined} rel="noreferrer" target="_blank">
                    <span>{proj.title}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 focus-visible:-translate-y-1 focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                  </a>
                </div>
              </h3>
              <p className="mt-2 text-sm leading-normal text-[#A1A1AA]">{proj.desc}</p>
              
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                {proj.tech.map(t => (
                  <li key={t}>
                    <div className="flex items-center rounded-full bg-[#D4AF37]/10 px-3 py-1 text-xs font-medium leading-5 text-[#D4AF37]">
                      {t}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
