import { useEffect, useState } from 'react'

export default function CursorTrail() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 })

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(212,175,55,0.06), transparent 80%)`,
      }}
    />
  )
}
