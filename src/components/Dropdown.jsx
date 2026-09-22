import { useState, useRef, useEffect } from 'react'

export default function Dropdown({
  trigger,
  children,
  align = 'right',
  triggerClassName = 'px-3 py-2',
  menuClassName = 'min-w-[180px]',
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const onDocClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="true"
        aria-expanded={open}
        className={`flex items-center gap-2 border border-rule rounded-full font-bold cursor-pointer transition-colors hover:border-ray ${triggerClassName}`}
      >
        {trigger}
        <svg
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          className={`w-3 h-3 transition-transform duration-200 shrink-0 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M2.5 4.5 6 8l3.5-3.5" />
        </svg>
      </button>

      <div
        role="menu"
        className={`absolute top-[calc(100%+10px)] ${align === 'right' ? 'right-0' : 'left-0'} ${menuClassName} bg-bg border border-rule rounded-2xl p-2 z-50 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.28)] origin-top transition-[opacity,transform] duration-200 ${
          open
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 -translate-y-1.5 scale-[0.98] pointer-events-none'
        }`}
      >
        {typeof children === 'function' ? children(() => setOpen(false)) : children}
      </div>
    </div>
  )
}

export function DropdownItem({ children, active, onClick }) {
  return (
    <button
      type="button"
      role="menuitemradio"
      aria-checked={active}
      onClick={onClick}
      className={`w-full flex items-center justify-between gap-2.5 px-2.5 py-2.5 rounded-lg text-sm font-semibold cursor-pointer transition-colors hover:bg-surface ${
        active ? 'text-ray' : 'text-ink'
      }`}
    >
      <span>{children}</span>
      <svg
        viewBox="0 0 12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className={`w-3.5 h-3.5 ${active ? 'opacity-100' : 'opacity-0'}`}
      >
        <path d="M2 6l3 3 5-6" />
      </svg>
    </button>
  )
}
