import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postsSlice'

// Import the reducer and add reducer to the Store
export default configureStore({
  reducer: {
    posts: postsReducer
  }
})
