import { AppDispatch } from './store';
import { Post } from './models';
import axios from 'axios';
import { postsSlice } from './reducers/PostSlice';

export const fetchPosts = (page: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(postsSlice.actions.postsFetching());
    const response = await axios.get<Post[]>(
      `https://jsonplaceholder.typicode.com/posts?_start=${page}&_limit=6`
    );
    dispatch(postsSlice.actions.postsFetchingSuccess(response.data));
  } catch (e: any) {
    dispatch(postsSlice.actions.postsFetchingFailure(e.message));
  }
};
