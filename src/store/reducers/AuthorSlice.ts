import { Post, AuthorState, Author, PostState } from '../models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAuthors, fetchPosts } from '../thunks';

const initialState: AuthorState = {
  authors: [],
  isLoading: false,
  error: ""
}

export const authorsSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {

    builder.addCase(fetchAuthors.pending, (state: AuthorState) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAuthors.fulfilled, (state: AuthorState, action: PayloadAction<Author[]>) => {
      state.isLoading = false;
      state.error = '';
      state.authors = action.payload;
    });
    builder.addCase(fetchAuthors.rejected, (state: AuthorState) => {
      state.isLoading = false;
      state.error = 'something vent wrong';
    });

  },




})

export default  authorsSlice.reducer