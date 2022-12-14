import { configureStore } from '@reduxjs/toolkit'
import darkSlice from '../features/dark/darkSlice'
import likeSlice from '../features/like/likeSlice'
export const store = configureStore({
  reducer: {
    [darkSlice.name]:darkSlice.reducer,
    [likeSlice.name]:likeSlice.reducer,
  },
})
