import { motion } from 'framer-motion'

export default function Resume() {
  const experiences = [
    {
      year: 'Aug 2025 - Jan 2026',
      title: 'Graphic Designer',
      company: 'Premium Peti',
      desc: 'Designed visually compelling graphics and branding materials for digital and print platforms, including social media creatives, packaging, and promotional campaigns. Collaborated with the marketing team to maintain consistent brand identity across all channels. Improved audience engagement by creating eye-catching designs, contributing to increased customer interaction and brand visibility.',
      tags: ['Design', 'Branding', 'Social Media', 'Packaging']
    },
    {
      year: 'Jan 2024 - Jul 2025',
      title: 'Social Media Manager & Field Volunteer',
      company: 'NGO',
      desc: 'Led beach cleanup drives promoting environmental awareness. Managed and created content for NGO\'s Instagram and Facebook pages.',
      tags: ['Leadership', 'Social Media Management', 'Event Planning']
    }
  ]

  const educations = [
    {
      year: 'Aug 2022 - Aug 2025',
      title: 'B.Sc. in Computer Science',
      company: 'Thakurramnarayan College of Arts & Commerce',
      desc: 'Graduated with a CGPA of 8.8. Studied core computer science concepts, software engineering, and web development fundamentals.',
    },
    {
      year: 'Jul 2020 - May 2022',
      title: 'HSC',
      company: 'Matruchhaya College of Science & Commerce',
      desc: 'Completed Higher Secondary Certificate with 71.50%.',
    }
  ]

  return (
    <section id="resume" className="relative scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0B0B0B]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#F5F5F5]">Experience</h2>
      </div>

      <div className="group/list">
        {experiences.map((exp, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: false, amount: 0.1 }}
            className="mb-12 group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[#D4AF37]/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
              {exp.year}
            </header>
            
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-[#F5F5F5]">
                <div>
                  <a className="inline-flex items-baseline font-medium leading-tight text-[#F5F5F5] hover:text-[#D4AF37] focus-visible:text-[#D4AF37] group/link text-base" href="#" rel="noreferrer" target="_blank">
                    <span>{exp.title} · <span className="inline-block">{exp.company}</span></span>
                  </a>
                </div>
              </h3>
              <p className="mt-2 text-sm leading-normal text-[#A1A1AA]">{exp.desc}</p>
              
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tags used">
                {exp.tags.map(tag => (
                  <li key={tag}>
                    <div className="flex items-center rounded-full bg-[#D4AF37]/10 px-3 py-1 text-xs font-medium leading-5 text-[#D4AF37]">
                      {tag}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education section mapped similarly */}
       <div className="sticky top-0 z-20 mt-12 -mx-6 mb-4 w-screen bg-[#0B0B0B]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#F5F5F5]">Education</h2>
      </div>

       <div className="group/list mt-8">
        {educations.map((edu, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: false, amount: 0.1 }}
            className="mb-12 group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[#D4AF37]/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
              {edu.year}
            </header>
            
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-[#F5F5F5]">
                {edu.title} · {edu.company}
              </h3>
              <p className="mt-2 text-sm leading-normal text-[#A1A1AA]">{edu.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}
