import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const AppContext = createContext(null)

function readLang() {
  try {
    const saved = localStorage.getItem('shapak-lang')
    if (saved === 'tk' || saved === 'ru' || saved === 'en') return saved
  } catch (e) {}
  return 'tk'
}

function systemPrefersDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function AppProvider({ children }) {
  const [lang, setLangState] = useState(readLang)
  // Tema diňe ulanyjynyň enjam/brauzer sazlamasyndan (OS-den) alynýar — el bilen çalyşmak ýok.
  const [theme, setTheme] = useState(() => (systemPrefersDark() ? 'dark' : 'light'))

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang)
    try {
      localStorage.setItem('shapak-lang', lang)
    } catch (e) {}
  }, [lang])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  // Enjamyň temasy sahypa açykka üýtgese (mysal: sagat 20:00-da awtomatiki garaňky tema
  // ýakýan operasion sistemalar), sahypa-da şol pursat özi täzelenýär.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e) => setTheme(e.matches ? 'dark' : 'light')
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const setLang = useCallback((l) => setLangState(l), [])

  // t(entry) — dictionary obýektinden häzirki dili alýar
  const t = useCallback(
    (entry) => {
      if (!entry) return ''
      if (typeof entry === 'string') return entry
      return entry[lang] ?? entry.tk ?? ''
    },
    [lang]
  )

  return (
    <AppContext.Provider value={{ lang, setLang, theme, t }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used inside <AppProvider>')
  return ctx
}
