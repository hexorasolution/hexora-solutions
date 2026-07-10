import { useSelector, useDispatch } from 'react-redux'
import { selectAuth, setCredentials, logout } from '../store/authSlice'
import api from '../services/api'
import toast from 'react-hot-toast'

export const useAuth = () => {
  const dispatch = useDispatch()
  const auth     = useSelector(selectAuth)

  const login = async (credentials, role = 'admin') => {
    try {
      const endpoint =
        role === 'client'   ? '/auth/client/login' :
        role === 'employee' ? '/auth/employee/login' :
                              '/auth/admin/login'

      const data = await api.post(endpoint, credentials)
      dispatch(setCredentials({ user: data.user, token: data.token }))
      toast.success(`Welcome back, ${data.user.name}!`)
      return { success: true }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed')
      return { success: false, error: error.response?.data?.message }
    }
  }

  const logoutUser = () => {
    dispatch(logout())
    toast.success('Logged out successfully')
  }

  return {
    ...auth,
    login,
    logout: logoutUser,
  }
}