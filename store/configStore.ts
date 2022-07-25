import { configureStore, createSlice } from "@reduxjs/toolkit";
import attendingReducer from "./attendingSlice";

export const store = configureStore({
  reducer: {
    attending: attendingReducer,
    //auth: authReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
