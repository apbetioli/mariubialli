import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import classnames from "classnames";

const blue = {
    '--background-start': '#2196F3',
    '--background-end': '#21CBF3',
    '--box-shadow': 'rgba(33, 203, 243, .3)',
    '--box-shadow-hover': 'rgba(33, 203, 243, .6)',
};

const defaultStyle = {
    '--background-start': '#FE6B8B',
    '--background-end': '#FF8E53',
    '--box-shadow': 'rgba(255, 105, 135, .3)',
    '--box-shadow-hover': 'rgba(255, 105, 135, .6)',
};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    button: {
        background: 'linear-gradient(45deg, var(--background-start) 30%, var(--background-end) 90%)',
        borderRadius: 0,
        border: 0,
        color: 'white',
        height: 72,
        padding: '0 30px',
        boxShadow: '0 8px 0 0 var(--box-shadow)',
        '&:hover': {
            boxShadow: '0 8px 0 0 var(--box-shadow-hover)',
        },
        [theme.breakpoints.down("xs")]: {
            boxShadow: "none",
            width: "100%"
        },
    },
}));

export default function ColorButton(props) {

    const classes = useStyles();

    return (<Button
        variant="contained"
        {...props}
        className={classnames(props.className, classes.button)}
        style={defaultStyle}
    >
        {props.children}
    </Button>);

}

ColorButton.defaultProps = {
    href: "/",
    size: "large"
};
