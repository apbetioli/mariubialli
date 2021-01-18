import { Button, Container, Grid, Link, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: "center",
        backgroundColor: theme.palette.secondary.main,
        height: "100%",
        textAlign: "center",
        paddingTop: "30px",
        width: "100%",
    },
    button: {
        width: "100%",
    },
    logo: {
        height: "100px",
    },
}));

export default function Bio(props) {
    const classes = useStyles();
    return (
        <Container maxWidth="xl" className={classes.root}>
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
                    <Button
                        href="/apostilas"
                        variant="contained"
                        color="primary"
                        type="submit"
                        size="large"
                        className={classes.button}
                    >
                        Apostilas e moldes gratuitos
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        href="https://www.youtube.com/channel/UC8YxukVEnCQLNmbExz-ViAA?sub_confirmation=1"
                        variant="contained"
                        color="primary"
                        type="submit"
                        size="large"
                        className={classes.button}
                    >
                        Inscreva-se no YouTube
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        href="/"
                        variant="contained"
                        color="primary"
                        type="submit"
                        size="large"
                        className={classes.button}
                    >
                        Visite meu site
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}
