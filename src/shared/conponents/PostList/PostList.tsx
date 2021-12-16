import React, { FunctionComponent, useCallback, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { RootState } from '../../../store/store';
import { fetchPosts } from '../../../store/ActionСreators';
import { Post } from '../../../store/models';
import MyPost from './MyPost';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const PostList: FunctionComponent = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { posts, isLoading, error } = useAppSelector(
    (state: RootState) => state.postReducer
  );
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  console.log(isLoading, posts, error);
  const onDeleteHandler = useCallback((id) => {
    console.log(id);
  }, []);
  return (
    <Grid container>
      {posts.map((post: Post) => (
        <Grid item xs={12} md={4} lg={3} key={post.id}>
          <MyPost post={post} onClick={() => onDeleteHandler} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PostList;
