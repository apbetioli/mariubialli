import { Container, Grid, makeStyles, Paper } from "@material-ui/core";
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
    paper: {
        margin: 10,
        padding: 10
    }
}));

export default function Programacao() {
    const classes = useStyles();
    return (
        <section>
            <Container maxWidth="sm">
                <Grid container className={classes.grid}>
                    <Grid item xs={12}>
                        <h3 className={classes.centered}>Anote na sua agenda</h3>
                        <Paper className={classes.paper}>
                            <EventAvailableIcon className={classes.heart} /><span> <b>24/01</b> - Aula 01</span>
                        </Paper>
                        <Paper className={classes.paper}>
                            <EventAvailableIcon className={classes.heart} /><span> <b>26/01</b> - Aula 02</span>
                        </Paper>
                        <Paper className={classes.paper}>
                            <EventAvailableIcon className={classes.heart} /><span> <b>28/01</b> - Aula 03</span>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}