import { Container, Grid, makeStyles } from "@material-ui/core";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

const useStyles = makeStyles((theme) => ({
    grid: {
        paddingTop: 30,
        paddingBottom: 30,
    },
    centered: {
        alignSelf: "center",
        textAlign: "center",
        width: "100%",
    },
    heart: {
        color: "#FE6B8B",
        position: "relative",
        top: 5,
    },
}));

export default function Programacao() {
    const classes = useStyles();
    return (
        <section>
            <Container maxWidth="sm">
                <Grid container className={classes.grid}>
                    <Grid item xs={12}>
                        <h3 className={classes.centered}>Anote na sua agenda</h3>
                        <p>
                            <EventAvailableIcon className={classes.heart} /><span> <b>24/01</b> - Aula 01</span>
                        </p>
                        <p>
                            <EventAvailableIcon className={classes.heart} /><span> <b>26/01</b> - Aula 02</span>
                        </p>
                        <p>
                            <EventAvailableIcon className={classes.heart} /><span> <b>28/01</b> - Aula 03</span>
                        </p>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}