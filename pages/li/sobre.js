import { Container, Grid, makeStyles } from "@material-ui/core";

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


export default function SobreMim() {
    const classes = useStyles();
    return (
        <section className={classes.sectionSobreMim}>
            <Container maxWidth="sm">
                <Grid container className={classes.grid} spacing={3}>
                    <Grid item className={classes.centered} md={6}>
                        <img className={classes.fotoPerfil} src={require("assets/img/perfil.webp")} alt="Mari Ubialli" />
                    </Grid>
                    <Grid item md={6} className={classes.justify}>
                        <h3 className={classes.centered}>Com quem você vai aprender?</h3>
                        <p>Prazer, sou Mari Ubialli. Sou apaixonada por artesanato em feltro e por ensinar.</p>
                        <p>Com mais de 1500 alunas em cursos, meu objetivo é ensinar artesãs como ir do zero a 5k por mês criando peças exclusivas e seus próprios moldes em feltro, permitindo que vivam do que amam fazer.</p>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}