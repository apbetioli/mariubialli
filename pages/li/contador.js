import { Container, Grid, makeStyles } from "@material-ui/core";
import Countdown from "react-countdown";

const useStyles = makeStyles((theme) => ({
    centered: {
        alignSelf: "center",
        textAlign: "center",
        width: "100%",
    },
    sectionSobreMim: {
        backgroundColor: "#000",
        color: "#FFF",
    },
    number: {
        fontSize: "1em",
        fontWeight: "bold"
    }
}));

const countdownRenderer = ({ days, hours, minutes, seconds, completed }, classes, props) => {
    if (completed) {
        return <h3>{props.gameover}</h3>;
    } else {
        return (
            <>
                {props.prefix &&
                    <h3>{props.prefix}</h3>
                }
                <p>
                    {days > 0 && <><span className={classes.number}>{days}</span> dia{days == 1 ? "" : "s"} </>}
                    {hours > 0 && <><span className={classes.number}>{hours}</span> hora{hours == 1 ? "" : "s"} </>}
                    {minutes > 0 && <><span className={classes.number}>{minutes}</span> minuto{minutes == 1 ? "" : "s"} </>}
                    <span className={classes.number}>{seconds}</span> segundos {" "}
                </p>
            </>
        );
    }
};

export default function Contador(props) {
    const classes = useStyles();

    return (
        <section className={classes.sectionSobreMim}>
            <Container maxWidth="md">
                <Grid container>
                    <Grid item xs={12} className={classes.centered}>
                        <Countdown
                            date={props.date}
                            renderer={(x) => countdownRenderer(x, classes, props)}
                        />
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

Contador.defaultProps = {
    date: new Date("2021-10-29 23:59:59"),
    prefix: "Faltam ",
    gameover: "O tempo acabou!"
}