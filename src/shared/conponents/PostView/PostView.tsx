import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useAppSelector } from '../../../hooks/redux';
import { RootState } from '../../../store/store';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import theme from '../../../constants/theme';

const useStyles = makeStyles(() => ({
  root: {
    width: '100vw',
    height: '100vh',
    background: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  linkBtn: {
    textDecoration: 'none',
    letterSpacing: 2.75,
  },
  circular: {
    margin: '30% 47%',
  },
}));

const PostView = () => {
  const classes = useStyles();
  const params = useParams();

  const { posts, isLoading } = useAppSelector(
    (state: RootState) => state.postReducer
  );
  if (params.id) {
    let postId: number = Number(params.id   || 1) -1;
    if (isLoading) {
      return <CircularProgress className={classes.circular} />;
    }


    const post = posts[postId];
    return (
      <Box className={classes.root}>
        <Typography variant='h4'>{post&&post.title}</Typography>
        <Typography variant='body1'>{post&&post.body}</Typography>
      </Box>
    );
  } else {
    return  <CircularProgress className={classes.circular} />;
  }

};

export default PostView;
