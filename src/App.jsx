import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { selectTheme } from './store/themeSlice'
import LoadingScreen from './components/common/LoadingScreen'

function App() {
  const theme = useSelector(selectTheme)

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      document.body.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.body.classList.remove('dark')
    }
  }, [theme])

  return <RouterProvider router={router} />
}

export default App