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
                            <EventAvailableIcon className={classes.heart} /><span> <b>18/10 - Aula 01</b> - Porque começar a criar e não depender mais de ninguém</span>
                        </p>
                        <p>
                            <EventAvailableIcon className={classes.heart} /><span> <b>20/10 - Aula 02</b> - Como vender todos os dias as suas criações</span>
                        </p>
                        <p>
                            <EventAvailableIcon className={classes.heart} /><span> <b>22/10 - Aula 03</b> - Conteúdo surpresa</span>
                        </p>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}