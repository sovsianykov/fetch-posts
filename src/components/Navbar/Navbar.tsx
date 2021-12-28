import React, {FunctionComponent} from 'react';
import {createStyles, makeStyles} from "@mui/styles";
import theme from "../../constants/theme";
import {AppBar, Typography} from "@mui/material";

const useStyles = makeStyles(() =>createStyles({
    root: {
        width: "100%",
        height: 100,
        background: theme.palette.background.default,
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.common.white,
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    logo : {
        marginLeft: "30px",
    }

}))




const Navbar:FunctionComponent = () => {
    const classes = useStyles()
    return (
        <AppBar className={classes.root}>
           <Typography variant='h3' color={theme.palette.common.white}
           className={classes.logo}
           >Test-Task</Typography>
        </AppBar>
    );
};

export default Navbar;