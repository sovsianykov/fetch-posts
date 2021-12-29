import React, { FunctionComponent } from 'react';
import { Box } from '@mui/material';

const ErrorPage:FunctionComponent = () => {

  return (
    <Box style={{ height: "100vh", width:"100%", background:"#gray"}}>
      <h1> ERROR</h1>
    </Box>
  );
};

export default ErrorPage;