import { Post, PostState } from '../models';
import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { deletePosts, fetchPosts } from '../thunks';

const initialState: PostState = {
  posts: [],
  isLoading: false,
  error: '',
};

export let postsSlice: Slice<PostState, {}>;
postsSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {

    builder.addCase(fetchPosts.pending, (state: PostState) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state: PostState, action: PayloadAction<Post[]>) => {
      state.isLoading = false;
      state.error = '';
      state.posts = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state: PostState) => {
      state.isLoading = false;
      state.error = 'something vent wrong';
    });
    builder.addCase(deletePosts.pending, (state: PostState) => {
      state.isLoading = true;
    });
    builder.addCase(deletePosts.fulfilled, (state: PostState, action: PayloadAction<number>) => {
      state.isLoading = false;
      state.error = '';
      state.posts = state.posts.filter((p:Post) => p.id !== action.payload);
    });
    builder.addCase(deletePosts.rejected, (state: PostState) => {
      state.isLoading = false;
      state.error = 'something vent wrong';
    });

  },
});

export default postsSlice.reducer;
