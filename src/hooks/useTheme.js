import { useSelector, useDispatch } from 'react-redux'
import { selectTheme, toggleTheme, setTheme } from '../store/themeSlice'

export const useTheme = () => {
  const dispatch = useDispatch()
  const theme    = useSelector(selectTheme)

  return {
    theme,
    isDark:      theme === 'dark',
    isLight:     theme === 'light',
    toggleTheme: () => dispatch(toggleTheme()),
    setDark:     () => dispatch(setTheme('dark')),
    setLight:    () => dispatch(setTheme('light')),
  }
}