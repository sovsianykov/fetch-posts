import React, { FunctionComponent, memo, useCallback } from 'react';
import { PostsProps } from './models';
import { Box, Button, CardActions, CardContent, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from '../../../constants/theme';
import { Link } from 'react-router-dom';
const useStyles = makeStyles(() =>({
  root: {
    width: 300,
  },
  paper: {
    background: theme.palette.background.paper,
    position:'relative',
    minHeight: 390
  },
  buttonBlock : {
    position:"absolute",
    bottom:10,
    left: 10

  }

}));

const MyPost: FunctionComponent<PostsProps> = ({ post,onClick }) => {
  const onClickHandler =useCallback(() =>{
          onClick(post.id)
  },[onClick, post.id])
  const classes = useStyles();
  return <Box sx={{ minWidth: 275 ,}}>
       <Paper className={classes.paper}>
         <CardContent>
           <Typography variant="h5" component="div">
             {post.title}
           </Typography>
           <Typography variant="subtitle1" component="div" color='text.secondary'>
            author: {post.user}
           </Typography>
           <Typography sx={{ fontSize: 14 }} color="text2" gutterBottom>
           </Typography>
           <Typography variant="body2">
             {post.body}
           </Typography>
         </CardContent>
         <CardActions className={classes.buttonBlock}>
           <Link to={`/posts/${post.id} `} >
           <Button size="small">more</Button>
             </Link>
           <Button color='warning' onClick={onClickHandler} size="small">Delete</Button>
           <Button color='success' onClick={() => null} size="small">Update</Button>
           <Button color='info' onClick={() => null} size="small">comment</Button>
         </CardActions>
       </Paper>
  </Box>;
};

export default memo(MyPost);
