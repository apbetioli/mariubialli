import { makeStyles } from "@material-ui/core";
import classnames from "classnames";
import React from "react";

const useStyles = makeStyles((theme) => ({
    wave: {
        backgroundColor: theme.palette.secondary.main,
        background: `url('/top-wave.webp')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        height: "25rem",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: -1
    },
}));

export default function Wave({ className }) {
    const classes = useStyles();

    return (
        <div className={classnames(className, classes.wave)}></div>
    );
}