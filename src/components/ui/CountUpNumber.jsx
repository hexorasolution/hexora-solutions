import { useEffect, useRef, useState } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const CountUpNumber = ({
  end,
  duration  = 2000,
  prefix    = '',
  suffix    = '',
  decimals  = 0,
  className = '',
}) => {
  const [count, setCount]     = useState(0)
  const [started, setStarted] = useState(false)
  const { ref, isVisible }    = useScrollAnimation()

  useEffect(() => {
    if (!isVisible || started) return
    setStarted(true)

    const startTime  = performance.now()
    const startValue = 0

    const animate = (currentTime) => {
      const elapsed  = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function
      const eased = 1 - Math.pow(1 - progress, 4)
      const current = startValue + (end - startValue) * eased

      setCount(parseFloat(current.toFixed(decimals)))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration, decimals, started])

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export default CountUpNumber