import React, { FunctionComponent, useState } from 'react';
import { Box, Button } from '@mui/material';
import { PaginatorProps } from './models';
import { makeStyles } from '@mui/styles';
import theme from '../../../constants/theme';
const useStyles = makeStyles({
  root: {
    width: 360,
    borderRadius: 3,
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
    display:"flex",
     alignItems:"center" ,
    justifyContent:"space-between"

  },
});



const Paginator: FunctionComponent<PaginatorProps> = ({
  page,
  incrementPage,
  decrementPage,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Button onClick={decrementPage}>{'<'}</Button>
      <span>page {page / 6} </span>
      <Button onClick={incrementPage}>{'>'}</Button>
    </Box>
  );
};

export default Paginator;
