import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import theme from '../../../constants/theme';
import { Search } from '@mui/icons-material';

const useStyles = makeStyles({
  root: {
    border: `1px solid #CCC`,
    borderRadius: 3,
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
    display:"flex",

  },
});

const Filters = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <FormControl>
        <InputLabel htmlFor="name">search</InputLabel>
        <Input id="name" aria-describedby="name" />
        <FormHelperText id="name">type text for search</FormHelperText>
      </FormControl>
      <Button color='warning'>x</Button>
    </Box>
  );
};

export default Filters;