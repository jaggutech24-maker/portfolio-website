import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number       // 0 → 1, decreasing
  size: number
  hue: number        // slight hue variation around gold
}

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const mouse = useRef({ x: -999, y: -999 })
  const rafId = useRef<number>(0)
  const lastSpawn = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    // Size canvas to viewport
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Track mouse
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMove)

    // Animation loop
    const animate = (timestamp: number) => {
      // Spawn burst of particles every ~16 ms (≈60 fps)
      if (timestamp - lastSpawn.current > 16) {
        lastSpawn.current = timestamp
        const { x, y } = mouse.current
        if (x > 0) {
          const count = 3
          for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2
            const speed = Math.random() * 1.2 + 0.2
            particles.current.push({
              x,
              y,
              vx: Math.cos(angle) * speed,
              vy: Math.sin(angle) * speed - 0.5, // slight upward drift
              life: 1,
              size: Math.random() * 3.5 + 1,
              hue: 40 + Math.random() * 20, // gold range: hsl(40-60)
            })
          }
        }
      }

      // Clear with transparent fade for motion-blur glow effect
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update & draw particles
      particles.current = particles.current.filter((p) => {
        p.life -= 0.022          // fade speed
        if (p.life <= 0) return false

        p.x += p.vx
        p.y += p.vy
        p.vy += 0.015            // gentle gravity
        p.vx *= 0.96             // drag
        p.size *= 0.985          // shrink

        const alpha = p.life * p.life // quadratic falloff → stays bright longer
        const radius = Math.max(p.size, 0.5)

        // Outer glow
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * 3)
        grd.addColorStop(0, `hsla(${p.hue}, 100%, 65%, ${alpha * 0.6})`)
        grd.addColorStop(1, `hsla(${p.hue}, 100%, 45%, 0)`)
        ctx.beginPath()
        ctx.arc(p.x, p.y, radius * 3, 0, Math.PI * 2)
        ctx.fillStyle = grd
        ctx.fill()

        // Bright core
        ctx.beginPath()
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 100%, 85%, ${alpha})`
        ctx.fill()

        return true
      })

      rafId.current = requestAnimationFrame(animate)
    }

    rafId.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(rafId.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  )
}
