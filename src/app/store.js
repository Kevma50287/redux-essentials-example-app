import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'

// Import the reducer and add reducer to the Store
export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer
  }
})
