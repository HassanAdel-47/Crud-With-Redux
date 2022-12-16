import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    items: [],
  },
  reducers: {
    addPost: (state, action) => {
      state.items.push(action.payload);
    },
    deletePost: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    updatePost: function (state, action) {
      state.items.map((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
          item.desc = action.payload.desc;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPost, deletePost, updatePost } = postsSlice.actions;

export default postsSlice.reducer;
