import React, { FunctionComponent } from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import theme from '../../constants/theme';
const useStyles = makeStyles(() => ({
  root: {
    width:'100vw' ,
    height: '100vh',
    background: theme.palette.primary.dark,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  linkBtn: {
    textDecoration: 'none',
    letterSpacing: 2.75
  },
}));

const MainLayout: FunctionComponent = () => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Link to="/list" className={classes.linkBtn}>
        <Button variant='contained'  color='info'>ENTER</Button>
      </Link>
    </Box>
  );
};

export default MainLayout;
