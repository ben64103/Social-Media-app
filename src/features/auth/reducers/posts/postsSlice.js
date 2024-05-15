import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const userPostsUrl = "http://localhost:5000/api/posts";

export const getAllUserPosts = createAsyncThunk(
  "/posts/getAllUserPosts",
  async (_, thunkApi) => {
    try {
      const userId = thunkApi.getState().auth.user.user.id;
      const userToken = thunkApi.getState().auth.token;

      console.log(userId);

      const res = await axios.get(`${userPostsUrl}/${userId}`, {
        headers: { Authorization: `Bearer ${userToken}` },
      });
      console.log(`${userPostsUrl}/${userId}`);

      //   console.log(res.data);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data);
    }
  },
);

const postSlice = createSlice({
  name: "posts",
  initialState: { posts: [], error: null },
  reducers: {
    updatePost(state, action) {
      const updatedPost = action.payload;
      state.posts = state.posts.map((post) =>
        post._id === updatedPost._id ? updatedPost : post,
      );
    },
    updatePostComments(state, action) {
      const comment = action.payload;
      state.posts.push(comment);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUserPosts.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.posts = payload;
      })
      .addCase(getAllUserPosts.rejected, (state, { payload }) => {
        console.error(payload);
        state.err = payload;
      });
  },
});

export const { updatePost, updatePostComments } = postSlice.actions;

export default postSlice.reducer;
