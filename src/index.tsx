import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./constants/theme";
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

const store  = setupStore()

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
     <ThemeProvider theme={theme}>
       <App />
     </ThemeProvider>
   </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

