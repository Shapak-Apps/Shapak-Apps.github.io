import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { pathname, hash } = useLocation()

  // sahypa çalşanda ýokaryk, ýa-da hash bar bolsa şol bölüme
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname, hash])

  return (
    <>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Header onMenuClick={() => setSidebarOpen((o) => !o)} sidebarOpen={sidebarOpen} />
      <main key={pathname} className="page-enter">
        {children}
      </main>
      <Footer />
    </>
  )
}
