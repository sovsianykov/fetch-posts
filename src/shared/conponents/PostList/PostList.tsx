import React, {
  FunctionComponent, memo,
  useCallback,
  useState,
} from 'react';
import { makeStyles } from '@mui/styles';
import { CircularProgress, Container, Grid } from '@mui/material';
import { useAppDispatch } from '../../../hooks/redux';
import { Post } from '../../../store/models';
import MyPost from './MyPost';
import Filters from '../Filters/Filters';
import theme from '../../../constants/theme';
import Paginator from './Paginator';
import { postsWithAuthors } from './utils';
import { deletePosts } from '../../../store/thunks';
import { useFetch } from '../../../hooks/useFetch';

const useStyles = makeStyles({
  root: {
    width: '100%',
    margin: `${theme.spacing(16)} auto`,
  },
  circular: {
    margin: '30% 47%',
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
  const { posts, isLoading, error, authors } = useFetch(page);

  const onDeleteHandler = useCallback((id) => {
    dispatch(deletePosts(id));
  }, []);

  if (isLoading) {
    return <CircularProgress className={classes.circular} />;
  }

  if (error) {
    return <h3>"something vent wrong!"</h3>;
  }

  return (
    <Container className={classes.root}>
      <Filters />
      <Paginator
        decrementPage={decrementPage}
        incrementPage={incrementPage}
        page={page}
      />
      <Grid container spacing={2}>
        {postsWithAuthors(posts, authors).map((post: Post) => (
          <Grid item xs={12} md={4} key={post.id}>
             <MyPost
               post={post}
               author={post.user}
               onClick={() => onDeleteHandler(post.id)}
             />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default memo(PostList);
