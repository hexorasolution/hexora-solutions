import { useState, useEffect } from 'react'

export const useWindowSize = () => {
  const [size, setSize] = useState({
    width:  typeof window !== 'undefined' ? window.innerWidth  : 1280,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  })

  useEffect(() => {
    const handler = () => setSize({ width: window.innerWidth, height: window.innerHeight })
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return {
    ...size,
    isMobile:  size.width < 576,
    isTablet:  size.width < 768,
    isLaptop:  size.width < 1024,
    isDesktop: size.width >= 1024,
  }
}