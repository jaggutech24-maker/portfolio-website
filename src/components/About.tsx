import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import profileImg from '../assets/images/profile.jpg'

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (contentRef.current) {
      gsap.fromTo(contentRef.current,
        { 
          opacity: 0, 
          y: 50,
          rotationX: 10,
          transformPerspective: 1000
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            end: "top 30%",
            toggleActions: "play reverse play reverse",
            scrub: 1,
          }
        }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section id="about" className="relative scroll-mt-24" ref={sectionRef}>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0B0B0B]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#F5F5F5]">About</h2>
      </div>

      <div 
        ref={contentRef}
        className="flex flex-col md:flex-row-reverse gap-10 items-start"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Profile Image (Right Aligned on Tablet+) */}
        <div className="shrink-0 w-32 h-32 md:w-36 md:h-36 rounded-full md:rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-[0_0_20px_rgba(212,175,55,0.1)] relative group self-center md:self-start md:mt-2">
          <div className="absolute inset-0 bg-[#D4AF37]/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none mix-blend-multiply"></div>
          <img 
            src={profileImg} 
            alt="Jayesh Kumar Prajapati" 
            className="w-full h-full object-cover object-[center_15%] grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-6 w-full">
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
        </div>
      </div>
    </section>
  )
}
