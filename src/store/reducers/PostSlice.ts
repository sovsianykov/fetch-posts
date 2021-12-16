import { Post, PostState } from '../models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: PostState = {
  posts: [],
  isLoading: false,
  error: ""
}

export const postsSlice = createSlice({
       name: 'post',
       initialState,
     reducers: {
         postsFetching(state) {
           state.isLoading = true;
         },
       postsFetchingSuccess(state,action: PayloadAction<Post[] >) {
         state.isLoading = false;
         state.error = '';
         state.posts = action.payload

       },
       postsFetchingFailure(state,action: PayloadAction<string>) {
         state.isLoading = false;
         state.error = action.payload

       }

     },




})

export default  postsSlice.reducer