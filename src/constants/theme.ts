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
            main: "rgba(10,36,180,0.98)",
            light: "#c67d90",
            dark: "#502e37",
        },
        warning: {
            main: "#d51818",
            light: "#ce9f5a",
            dark: "rgba(10,36,180,0.98)",
        },
        background: {
            default:"#192231",
            paper: "#eceeee",
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
