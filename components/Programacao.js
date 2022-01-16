import { Chip, Container, Grid, makeStyles, Paper } from "@material-ui/core";
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
                            <EventAvailableIcon className={classes.heart} /><b> 31/01 - Aula 1- Segunda</b>
                            <h4>Como lucrar com bonecas de feltro</h4>
                            <p>Nesta aula vamos falar sobre como ter lucro nas suas vendas e como medir isso.</p>
                        </Paper>
                        <Paper className={classes.paper}>
                            <EventAvailableIcon className={classes.heart} /><b> 02/02 - Aula 2 - Quarta</b>
                            <h4>Os 4 pilares da venda de bonecas</h4>
                            <p>A base, sem isso você não vai ter sucesso em ter vendas lucrativas e recorrentes.</p>
                        </Paper>
                        <Paper className={classes.paper}>
                            <EventAvailableIcon className={classes.heart} /><b> 04/02 - Aula 3 - Sexta</b>
                            <h4>Como expandir seus resultados e sua marca</h4>
                            <p>É hora de expandir. Você vai descobrir como ter resultados maiores e ser mais reconhecida.</p>
                        </Paper>
                        <Paper className={classes.paper}>
                            <EventAvailableIcon className={classes.heart} /><b> 06/02 - Aula 4 - Domingo 20h ao vivo</b>
                            <h4>Tema surpresa</h4>
                            <p>Para fechar a Minissérie Bonequeira de Feltro com chave de ouro, esta aula terá um tema surpresa e será ao vivo no domingo Às 20h. Não perca pois não terá gravação.</p>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}