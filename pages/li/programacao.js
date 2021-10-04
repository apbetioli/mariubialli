import { Container, Grid, makeStyles } from "@material-ui/core";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontSize: "1rem",
    },
    grid: {
        paddingTop: 30,
        paddingBottom: 30,
    },
    centered: {
        alignSelf: "center",
        textAlign: "center",
        width: "100%",
    },
    justify: {
        textAlign: "justify",
    },
    card: {
        backgroundColor: "white",
        margin: '16px 16px',

    },
    cta: {
        textAlign: "center",
        width: "100%",
    },
    sectionCta: {
        marginBottom: 30,
        marginTop: 50,
    },
    sectionConteudo: {
        backgroundColor: "#ffe8ed",
        marginTop: 50,
    },
    sectionGreen: {
        marginTop: 50,
        marginBottom: 30,
        backgroundColor: "#6BFEDE",
    },
    sectionSobreMim: {
        backgroundColor: "#FE6B8B",
        color: "#FFF",
        marginTop: 50,
    },
    highlight: {
        backgroundColor: "#FE6B8B",
        color: "#FFF",
        fontStyle: "italic",
        fontWeight: "bold",
        paddingRight: 5,
    },
    highlightText: {
        color: "#FE6B8B",
        fontStyle: "italic",
        fontWeight: "bold",
    },
    heart: {
        color: "#FE6B8B",
        position: "relative",
        top: 5,
    },
    title: {
        marginTop: 40,
        marginBottom: 40
    },
    subtitle: {
        color: "gray",
        fontSize: "1.3em",
    },
    fotoCard: {
        maxHeight: 600,
    },
    fotoPerfil: {
        maxHeight: 300,
        maxWidth: "100%",
    },
    heading: {
        color: "#FE6B8B",
        fontWeight: "bold"
    },
    precoAviso: {
        color: "gray",
        fontSize: "0.8rem",
        marginBottom: 14,
    },
    foto: {
        maxWidth: "100%",
    },
    fotoTestemunho: {
        width: "100%",
    },
    check: {
        height: "1rem",
        width: "1rem",
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
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