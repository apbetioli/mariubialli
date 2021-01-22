import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import classnames from "classnames";

ColorButton.blue = {
    '--background-start': '#2196F3',
    '--background-end': '#21CBF3',
    '--box-shadow': 'rgba(33, 203, 243, .3)',
    '--box-shadow-hover': 'rgba(33, 203, 243, .6)',
};

ColorButton.youtube = {
    '--background-start': '#E62117',
    '--background-end': '#E62117',
    '--box-shadow': 'rgba(255, 105, 135, .3)',
    '--box-shadow-hover': 'rgba(255, 105, 135, .6)',
};

ColorButton.defaultStyle = {
    '--background-start': '#FE6BD4',
    '--background-end': '#FE956B',
    '--box-shadow': 'rgba(255, 105, 135, .3)',
    '--box-shadow-hover': 'rgba(255, 105, 135, .6)',
};

ColorButton.whatsapp = {
    '--background-start': '#25d366',
    '--background-end': '#25d366',
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
        boxShadow: '-8px 8px 0 0 var(--box-shadow)',
        color: 'white',
        fontWeight: 'bold',
        height: 72,
        padding: '0 30px',
        textAlign: 'center',
        '&:hover': {
            boxShadow: '-8px 8px 0 0 var(--box-shadow-hover)',
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
        style={ColorButton.defaultStyle}
        {...props}
        className={classnames(props.className, classes.button)}
    >
        {props.children}
    </Button>);
}

ColorButton.defaultProps = {
    size: "large"
};
