import { Card, CardContent, CardMedia, Container, Fab, Grid, Hidden, Link, SvgIcon } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import { WhatsApp } from "@material-ui/icons";
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import { default as React } from "react";
import ColorButton from "../components/ColorButton";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cta: {
    width: "100%",
    textAlign: "center"
  },
  wave: {
    backgroundColor: theme.palette.secondary.main,
    background: `url('/top-wave.webp')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    height: "35rem",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: -1
  },
  grid: {
    paddingTop: 50,
    paddingBottom: 50,
  },
  centered: {
    textAlign: "center",
  },
  justify: {
    textAlign: "justify",
  },
  video: {
    position: "absolute",
    left: 0,
    height: "100%",
    top: 0,
    width: "100%",
  },
  videoWrapper: {
    height: 0,
    marginTop: 25,
    marginBottom: 25,
    position: "relative",
    paddingBottom: "56.25%",
  },
  whatsapp: {
    color: "white",
    backgroundColor: "#25d366",
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 10,
    "&:hover": {
      backgroundColor: "#075e54",
    }
  },
  card: {
    margin: '16px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function JoiasRarasPerpetuo(props) {
  const classes = useStyles();
  const rocks = [
    { title: "Esmeralda", image: require("assets/img/esmeralda.jpg"), description: "De acordo com a mitologia indiana, o nome foi traduzido do sânscrito simbolizando “o verde que cresce nas coisas” e é impossível dissociá-lo do sentido de joia preciosa. Há quem diga também que a palavra possa ter origem grega, e neste caso quer dizer “clarão”, “raio” ou “relâmpago”. E olha que curiosidade: de tão famosa, sabe-se que a pedra era a preferida da Cleópatra no Egito Antigo. Inclusive, foi descoberta lá uma mina de esmeralda, e os registros mostram que ela já era comercializada em períodos muito remotos, por volta de 4000 AC." },
    { title: "Rubi", image: require("assets/img/rubi.jpg"), description: "Vitória, coragem e sucesso são as principais pretensões de quem anda com a joia pertinho de si! O nome curto e delicado deriva do latim “ruber”, que quer dizer “vermelho” ou “corada” – mas claro que a preciosidade é uma característica associada ao termo, especialmente se considerarmos que a pedra está entre as mais desejadas das joalherias e mais populares entre os colecionadores." },
    { title: "Ágata", image: require("assets/img/safira.jpg"), description: "Muito usada como amuleto, a pedra ágata é uma variedade do quartzo e é conhecida pelo seu poder de equilíbrio energético, cura espiritual e também associada à vitalidade. Só por essas características já dá vontade de chamar a sua filha assim, né? Mas o significado do nome em si traz mais qualidades positivas, já que deriva de uma palavra grega que significa “bondosa” ou “aquela que é muito gentil”." },
    { title: "Cristal", image: require("assets/img/esmeralda.jpg"), description: "Encontrados em vários formatos e cores, os cristais são utilizados como itens decorativos, mas também em terapias alternativas e meditações desde a Antiguidade. Sobre a origem do nome, é possível identificar duas: ele pode vir do grego “krystallos”, que quer dizer “gelo” ou “pureza”, ou então do escocês, que remete “àquela que guarda Cristo dentro de si”." },
    { title: "Jade", image: require("assets/img/rubi.jpg"), description: "A pedra jade é valorizada por sua beleza e também pelas propriedades de proteção e boa sorte – e por isso funciona como um poderoso amuleto para ter sempre por perto! Como as anteriores, também acredita-se na sua capacidade de trazer benefícios para o corpo físico e espiritual, o que faz com que seja idolatrada pelos povos do Oriente e possua alto valor comercial." },
    { title: "Safira", image: require("assets/img/safira.jpg"), description: "De um tom azul profundo e suntuoso, a safira tem se tornado símbolo de luxo e realeza, ainda mais depois de aparecer no anel com diamantes usado por Diana, a Princesa de Gales, e em seguida herdado por Kate Middleton. O nome feminino ainda possui uma série de significados marcantes, como “aquela que é bela”, em sua tradução hebraica, e “o preferido de Saturno”, ao considerarmos a palavra grega." },
    { title: "Blenda", image: require("assets/img/esmeralda.jpg"), description: "Também conhecida como esfalerita ou “pedra da magia”, ela é usada em terapias e rituais espirituais com o objetivo de purificar e proteger a pessoa contra energias negativas." },
  ];

  return (
    <>
      <div>
        <div className={classes.wave}></div>
        <Container>
          <Grid className={classes.grid} spacing={3} >
            <Grid item md={6}>
              <h1>Estas lindas bonecas irão iluminar sua vida</h1>
              <p></p>

              <div className={classes.videoWrapper}>
                <iframe
                  className={classes.video}
                  src="https://www.youtube.com/embed/VnDLmAIthHw?rel=0"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>

              <ColorButton href="/checkout">
                Sim! Quero iluminar minha vida!
              </ColorButton>

            </Grid>
          </Grid>
        </Container>
      </div>

      <div className={classes.secondaryTail}>
        <Container>
          <Grid className={classes.grid} spacing={3}>
            <Grid item className={classes.centered} xs={12}>
              <h1>Coleção Joias Raras</h1>
              <p>
                Comece hoje a confeccionar estas lindas bonecas.
                São 7 jóias raras que irão iluminar o seu ambiente.
            </p>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div>
        <Container>
          <Grid className={classes.grid} spacing={3}>
            <Grid item className={classes.centered} xs={12}>
              <h1>Peças que você irá criar</h1>
              <p>
                Comece hoje a confeccionar estas lindas bonecas.
                São 7 jóias raras que irão iluminar o seu ambiente.
            </p>
            </Grid>
            <Hidden xsDown>
              <Grid item className={classes.centered} xs={12}>
                <Timeline align="alternate">
                  {rocks.map((rock) => (
                    <TimelineItem>
                      <TimelineOppositeContent>
                        <Paper elevation={0} className={classes.paper}>
                          <Typography gutterBottom variant="h5" component="h2">
                            {rock.title}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            {rock.description}
                          </Typography>
                        </Paper>
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot>
                          <SvgIcon color={rock.dotColor}>
                            <svg viewBox="0 0 24 20">
                              <path fill="currentColor" d="M16,9H19L14,16M10,9H14L12,17M5,9H8L10,16M15,4H17L19,7H16M11,4H13L14,7H10M7,4H9L8,7H5M6,2L2,8L12,22L22,8L18,2H6Z" />
                            </svg>
                          </SvgIcon>
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Card className={classes.root}>
                          <CardMedia
                            component="img"
                            alt={rock.title}
                            height="300"
                            image={rock.image}
                            title={rock.title}
                          />
                        </Card>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </Grid>
            </Hidden>
            <Hidden smUp>
              {rocks.map((rock) => (
                <Grid item xs={12} sm={4} spacing={3}>
                  <Card raised={true} className={classes.card}>
                    <CardMedia
                      component="img"
                      alt={rock.title}
                      height="300"
                      image={rock.image}
                      title={rock.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2" className={classes.centered}   >
                        {rock.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p" className={classes.justify} >
                        {rock.description}
                      </Typography>
                    </CardContent>
                  </Card>

                </Grid>
              ))}
            </Hidden>
            <Grid item className={classes.centered} xs={12}>
              <ColorButton href="/checkout">
                Sim! Quero criar estas lindas peças!
              </ColorButton>
            </Grid>
          </Grid>
        </Container>
      </div>

      <Link target="_blank" rel="noopener" href="https://api.whatsapp.com/send?phone=5544999114058&text=Oi!%20Gostaria%20de%20tirar%20minhas%20d%C3%BAvidas%20sobre%20a%20Cole%C3%A7%C3%A3o%20J%C3%B3ias%20Raras.">
        <Fab className={classes.whatsapp} color="green" size="medium" aria-label="Contate-nos por whatsapp">
          <WhatsApp />
        </Fab>
      </Link>
      <Footer />
    </>
  );
}
