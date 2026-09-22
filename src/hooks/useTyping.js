import { useEffect, useState } from 'react'

/**
 * Teksti harp-harp ýazýar. `text` üýtgände täzeden başlaýar (dil çalşanda).
 */
export function useTyping(text, speed = 26) {
  const [out, setOut] = useState('')

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setOut(text)
      return
    }

    setOut('')
    let i = 0
    let timer

    const step = () => {
      i += 1
      setOut(text.slice(0, i))
      if (i < text.length) timer = setTimeout(step, speed)
    }

    timer = setTimeout(step, speed)
    return () => clearTimeout(timer)
  }, [text, speed])

  return out
}
