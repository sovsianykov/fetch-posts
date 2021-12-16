import React, { FunctionComponent, useCallback } from 'react';
import { PostsProps } from './models';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

const MyPost: FunctionComponent<PostsProps> = ({ post, onClick }) => {
  const onClickHandler =useCallback(() =>{
          onClick(post.id)
  },[])
  const classes = useStyles();
  return <Box sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography variant="h6" component="div">
        {post.title}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      </Typography>
      <Typography variant="body2">
        {post.body}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">read more</Button>
      <Button color='secondary' onClick={onClickHandler} size="small">Delete</Button>
      <Button color='info' onClick={onClickHandler} size="small">Update</Button>
    </CardActions>
  </Box>;
};

export default MyPost;
