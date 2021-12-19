import React, { FunctionComponent, useCallback } from 'react';
import { PostsProps } from './models';
import { Box, Button, Card, CardActions, CardContent, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from '../../../constants/theme';
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

const MyPost: FunctionComponent<PostsProps> = ({ post, onClick,author }) => {
  const onClickHandler =useCallback(() =>{
          onClick(post.id)
  },[])
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
           <Button size="small">more</Button>
           <Button color='warning' onClick={onClickHandler} size="small">Delete</Button>
           <Button color='success' onClick={onClickHandler} size="small">Update</Button>
           <Button color='info' onClick={onClickHandler} size="small">comment</Button>
         </CardActions>
       </Paper>
  </Box>;
};

export default MyPost;
