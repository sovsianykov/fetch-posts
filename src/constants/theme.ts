import { createTheme } from "@mui/material";




const theme = createTheme({
    palette: {
        primary: {
            main: "#494E6B",
            light: "#5d6385",
            dark: "#2e3145",
            contrastText: "#222432",
        },
        secondary: {
            main: "#98878F",
            light: "#b6a1ab",
            dark: "#695b61",
            contrastText: "#5a4f57",
        },
        success: {
            main: "#985E6D",
            light: "#c67d90",
            dark: "#502e37",
        },
        warning: {
            main: "#192231",
            light: "#2e3e58",
            dark: "#090d12",
        },
        background: {
            default:"#192231",
            paper: "#98878F",
        },
       common: {
            black: "#000000",
            white:"#e0dede",
       }
    },




    typography: {
        fontFamily: 'Value Sans Pro, sans-serif'
    },
});

export default theme;
