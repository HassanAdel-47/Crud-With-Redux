import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./postsSlice";

export const Store = configureStore({
  reducer: {
    posts: postsSlice,
  },
});
