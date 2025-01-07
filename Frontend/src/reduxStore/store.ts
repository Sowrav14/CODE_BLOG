import { configureStore } from '@reduxjs/toolkit'
import HeaderSlice from './slices/blogwriter/header'
import bodySlice from './slices/blogwriter/body'

export const store = configureStore({
  reducer: {
    fixedContent : HeaderSlice,
    bodyContent : bodySlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch