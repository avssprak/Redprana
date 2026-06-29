import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    let cancelled = false
    const id = hash.slice(1)
    const scrollToElement = (attempts = 0) => {
      if (cancelled) return
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else if (attempts < 15) {
        setTimeout(() => scrollToElement(attempts + 1), 80)
      }
    }
    scrollToElement()
    return () => { cancelled = true }
  }, [pathname, hash])

  return null
}
