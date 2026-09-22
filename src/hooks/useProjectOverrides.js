import { useState, useCallback } from 'react'

const KEY = 'shapak-project-overrides'

function read() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '{}')
  } catch (e) {
    return {}
  }
}

/**
 * Taslama üýtgeşmelerini brauzerde saklaýar (demo).
 * HAKYKY köp-ulanyjyly ulgam üçin muny backend ýa-da GitHub PR akymy bilen çalyşmaly.
 */
export function useProjectOverrides() {
  const [overrides, setOverrides] = useState(read)

  const saveOverride = useCallback((id, patch) => {
    setOverrides((prev) => {
      const next = { ...prev, [id]: { ...prev[id], ...patch } }
      try {
        localStorage.setItem(KEY, JSON.stringify(next))
      } catch (e) {}
      return next
    })
  }, [])

  const resetAll = useCallback(() => {
    try {
      localStorage.removeItem(KEY)
    } catch (e) {}
    setOverrides({})
  }, [])

  return { overrides, saveOverride, resetAll }
}
