import { motion } from 'framer-motion'


export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0B0B0B]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#F5F5F5]">About</h2>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-col gap-6"
      >
        <p className="leading-relaxed">
          I'm a recent B.Sc. Computer Science graduate with a strong foundation in core computer science concepts.
          I have hands-on experience building clean, responsive, and user-focused applications using modern technologies.
        </p>
        <p className="leading-relaxed">
          I bring a sharp eye for design, a focus on performance optimization, and a commitment to writing scalable and maintainable code. Whether it's a sleek pixel-art canvas or a secure full-stack dashboard, I care deeply about the user experience.
        </p>
        <p className="leading-relaxed">
          When I'm not coding, you can usually find me 🏋️ weightlifting, 🎮 gaming, or volunteering for beach cleanups around Mumbai!
        </p>
      </motion.div>
      
      {/* Optional aesthetic touch - minimal profile display inline if desired, else removed. Let's keep it minimal text-only as per Brittany Chiang */}
    </section>
  )
}
