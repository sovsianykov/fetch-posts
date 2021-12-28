import { useAppDispatch, useAppSelector } from './redux';
import { RootState } from '../store/store';
import { useEffect } from 'react';
import { fetchAuthors, fetchPosts } from '../store/thunks';


export  const useFetch = (page = 200) => {
  const dispatch = useAppDispatch();
  const { posts, isLoading, error } = useAppSelector(
    (state: RootState) => state.postReducer
  );
  const { authors } = useAppSelector((state: RootState) => state.authorReducer);
  useEffect(() => {
    dispatch(fetchPosts(page));
    dispatch(fetchAuthors());
  }, [dispatch, page]);
  return { posts, isLoading, error ,authors   }
}