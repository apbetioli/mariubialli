import { Container, Grid, makeStyles } from "@material-ui/core";
import Countdown from "react-countdown";

const useStyles = makeStyles((theme) => ({
    centered: {
        alignSelf: "center",
        textAlign: "center",
        width: "100%",
    },
    sectionSobreMim: {
        backgroundColor: "#FE6B8B",
        color: "#FFF",
    },
    number: {
        fontSize: "1em",
        fontWeight: "bold"
    }
}));

const countdownRenderer = ({ days, hours, minutes, seconds, completed, end }, classes) => {
    if (completed) {
        return <p>{end}</p>;
    } else {
        return (
            <p><span className={classes.number}>{days}</span> dias <span className={classes.number}>{hours}</span> horas <span className={classes.number}>{minutes}</span> minutos <span className={classes.number}>{seconds}</span> segundos</p>
        );
    }
};

export default function Contador({ title, date }) {
    const classes = useStyles();
    return (
        <section className={classes.sectionSobreMim}>
            <Container maxWidth="sm">
                <Grid container>
                    <Grid item xs={12} className={classes.centered}>
                        <h3>{title}</h3>
                        <Countdown
                            date={date}
                            renderer={(props) => countdownRenderer(props, classes)}
                        />
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

Contador.defaultProps = {
    date: new Date("2021-10-29 23:59:59"),
    title: "A maratona começa em",
    end: "O tempo acabou!"
}