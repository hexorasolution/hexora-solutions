import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    notifications: [],
    unreadCount:   0,
  },
  reducers: {
    addNotification: (state, action) => {
      state.notifications.unshift(action.payload)
      state.unreadCount += 1
    },
    markAllRead: (state) => {
      state.notifications = state.notifications.map(n => ({ ...n, read: true }))
      state.unreadCount   = 0
    },
    clearNotifications: (state) => {
      state.notifications = []
      state.unreadCount   = 0
    },
  },
})

export const { addNotification, markAllRead, clearNotifications } = notificationSlice.actions
export const selectNotifications = (state) => state.notification.notifications
export const selectUnreadCount   = (state) => state.notification.unreadCount
export default notificationSlice.reducer