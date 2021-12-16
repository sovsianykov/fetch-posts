import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Grid, Pagination } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { RootState } from '../../../store/store';
import { fetchPosts } from '../../../store/ActionСreators';
import { Post } from '../../../store/models';
import MyPost from './MyPost';
import Filters from '../Filters/Filters';
import theme from '../../../constants/theme';
import Paginator from './Paginator';

const useStyles = makeStyles({
  root: {
    width: '100%',
    margin: `${theme.spacing(16)} auto`,
  },
});

const PostList: FunctionComponent = () => {
  const [page, setPage] = useState<number>(0);
  const incrementPage = () => {
    if (page + 6 < 200) {
      setPage((page) => page + 6);
    }
  };
  const decrementPage = () => {
    if (page > 5) {
      setPage((page) => page - 6);
    }
  };
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { posts, isLoading, error } = useAppSelector(
    (state: RootState) => state.postReducer
  );
  useEffect(() => {
    dispatch(fetchPosts(page));
  }, [dispatch, page]);
  console.log(isLoading, posts, error);
  const onDeleteHandler = useCallback((id) => {
    console.log(id);
  }, []);
  return (
    <Container className={classes.root}>
      <Filters />
      <Paginator
        decrementPage={decrementPage}
        incrementPage={incrementPage}
        page={page}
      />
      <Grid container spacing={2}>
        {posts.map((post: Post) => (
          <Grid item xs={12} md={4} key={post.id}>
            <MyPost post={post} onClick={() => onDeleteHandler} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PostList;
