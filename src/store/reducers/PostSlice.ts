import { Post, PostState } from '../models';
import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { fetchPosts } from '../thunks';

const initialState: PostState = {
  posts: [],
  isLoading: false,
  error: '',
};

export let postsSlice: Slice<PostState, {}, string>;
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

  },
});

export default postsSlice.reducer;
