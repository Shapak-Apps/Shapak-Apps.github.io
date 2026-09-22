import { useEffect, useRef, useState } from 'react'

/**
 * Ekrana girende 0-dan `target`-a çenli sanaýar.
 */
export function useCountUp(target, duration = 900) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      setValue(target)
      return
    }

    let raf
    const run = () => {
      let start = null
      const step = (ts) => {
        if (!start) start = ts
        const p = Math.min((ts - start) / duration, 1)
        setValue(Math.round(p * target))
        if (p < 1) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            run()
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.6 }
    )

    io.observe(el)
    return () => {
      io.disconnect()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [target, duration])

  return [ref, value]
}
