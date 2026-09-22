import { useEffect, useRef } from 'react'

/**
 * Element ekrana girende oňa `in` klasyny goşýar (scroll reveal animasiýasy).
 */
export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      el.classList.add('in')
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return ref
}
