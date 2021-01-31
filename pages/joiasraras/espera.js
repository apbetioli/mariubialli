import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { default as React } from "react";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Wave from "../../components/Wave";

const useStyles = makeStyles((theme) => ({
  grid: {
    paddingTop: 50,
    paddingBottom: 50,
  },
  centered: {
    textAlign: "center",
    width: "100%",
  },
  justify: {
    textAlign: "justify",
  },
  whatsapp: {
    bottom: theme.spacing(2),
    backgroundColor: "#25d366",
    color: "white",
    position: "fixed",
    right: theme.spacing(2),
    zIndex: 10,
    "&:hover": {
      backgroundColor: "#075e54",
    }
  },
  fotoMeninas: {
    maxWidth: "100%",
  },
  wave: {
    //backgroundColor: "#FE6B8B",
    height: "50rem"
  },
  title: {
    color: "#FE6B8B"
  }
}));

export default function JoiasRarasEspera() {
  const classes = useStyles();
  return (
    <main className={classes.centered}>
      <Container maxWidth="sm">
        <img src={require("assets/img/banner2.jpg")} alt="" className={classes.fotoMeninas} />
        <p>
          Faça parte da lista de espera e seja avisada com antecedência
              para <b>APROVEITAR</b> a oferta exclusiva de lançamento que
              ficará disponível por <b>TEMPO LIMITADO</b>
        </p>
        <Form buttonText="Quero fazer parte da lista" tag="JOIASRARAS-ESPERA" redirectTo="/joiasraras/obrigado" />
      </Container>
      <Footer />
    </main>
  );
}
