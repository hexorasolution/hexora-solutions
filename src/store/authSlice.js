import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user:    null,
    token:   localStorage.getItem('hexora-token') || null,
    isAuth:  false,
    loading: false,
    error:   null,
    role:    null,
  },
  reducers: {
    setCredentials: (state, action) => {
      state.user   = action.payload.user
      state.token  = action.payload.token
      state.isAuth = true
      state.role   = action.payload.user?.role
      localStorage.setItem('hexora-token', action.payload.token)
    },
    logout: (state) => {
      state.user   = null
      state.token  = null
      state.isAuth = false
      state.role   = null
      localStorage.removeItem('hexora-token')
    },
    setLoading: (state, action) => { state.loading = action.payload },
    setError:   (state, action) => { state.error   = action.payload },
  },
})

export const { setCredentials, logout, setLoading, setError } = authSlice.actions
export const selectAuth  = (state) => state.auth
export const selectUser  = (state) => state.auth.user
export const selectToken = (state) => state.auth.token
export const selectRole  = (state) => state.auth.role
export default authSlice.reducer