import { Container, Grid, Link, makeStyles } from "@material-ui/core";
import React from "react";
import ColorButton from "../components/ColorButton";
import Wave from "../components/wave";

const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: "center",
        height: "100%",
        textAlign: "center",
        paddingTop: 30,
        width: "100%",
    },
    button: {
        width: "100%",
    },
    logo: {
        height: "80px",
    }
}));

export default function Bio(props) {
    const classes = useStyles();
    return (
        <Container maxWidth="xl" className={classes.root}>
            <Wave />
            <Grid
                container
                spacing={3}
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={12}>
                    <Link className={classes.logoWrapper} href="https://instagram.com/mariubialli">
                        <img className={classes.logo} src="/logo.png" alt="" />
                    </Link>
                </Grid>
                <Grid item xs={12}>
                    <ColorButton
                        href="/apostilas"
                        className={classes.button}
                    >
                        Apostilas e moldes gratuitos
                    </ColorButton>
                </Grid>
                <Grid item xs={12}>
                    <ColorButton
                        href="https://www.youtube.com/channel/UC8YxukVEnCQLNmbExz-ViAA?sub_confirmation=1"
                        className={classes.button}
                    >
                        Inscreva-se no YouTube
                    </ColorButton>
                </Grid>
                <Grid item xs={12}>
                    <ColorButton
                        href="/"
                        className={classes.button}
                    >
                        Visite meu site
                    </ColorButton>
                </Grid>
            </Grid>
        </Container>
    );
}
