import { Container, Grid, makeStyles } from "@material-ui/core";

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
    justify: {
        textAlign: "justify",
    },
    sectionSobreMim: {
        backgroundColor: "#FE6B8B",
        color: "#FFF",
        marginTop: 50,
    },
    fotoPerfil: {
        maxHeight: 300,
        maxWidth: "100%",
    },
    foto: {
        maxWidth: "100%",
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
                        <h3 className={classes.centered}>Mari Ubialli</h3>
                        <p>Sou apaixonada por artesanato em feltro e por ensinar.</p>
                        <p>Com mais de 1500 alunas em cursos pagos de feltro, meu objetivo é ensinar artesãs como ir do zero a 5k por mês criando peças exclusivas e seus próprios moldes em feltro, permitindo que vivam do que amam fazer.</p>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}
