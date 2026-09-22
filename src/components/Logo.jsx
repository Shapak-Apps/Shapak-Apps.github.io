import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export default function Logo({ onClick, className = '', imgClassName = 'h-6' }) {
  const { theme } = useApp()

  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="şapak."
      className={`flex items-center shrink-0 ${className}`}
    >
      <img
        src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
        alt="şapak."
        className={`w-auto ${imgClassName}`}
      />
    </Link>
  )
}
