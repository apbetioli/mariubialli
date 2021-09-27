import { Card, CardContent, Container, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, Paper } from "@material-ui/core";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import { CheckBox } from "@material-ui/icons";
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HttpsIcon from '@material-ui/icons/Https';
import garantia from 'assets/img/garantia.png';
import agata from 'assets/img/jr/agata.webp';
import ametista from 'assets/img/jr/ametista.webp';
import angelita from 'assets/img/jr/angelita.webp';
import banner from 'assets/img/jr/banner.webp';
import esmeralda from 'assets/img/jr/esmeralda.webp';
import jade from 'assets/img/jr/jade.webp';
import planilha from 'assets/img/jr/planilha.webp';
import minis from 'assets/img/jr/premium0.webp';
import ursinhas from 'assets/img/jr/premium2.webp';
import mobile from 'assets/img/jr/premium3.webp';
import guirlanda from 'assets/img/jr/premium4.webp';
import pergolado from 'assets/img/jr/premium5.webp';
import price from 'assets/img/jr/price.webp';
import rose from 'assets/img/jr/rose.webp';
import rubi from 'assets/img/jr/rubi.webp';
import t25 from 'assets/img/jr/testemunho25.webp';
import t26 from 'assets/img/jr/testemunho26.webp';
import t29 from 'assets/img/jr/testemunho29.webp';
import t33 from 'assets/img/jr/testemunho33.webp';
import t34 from 'assets/img/jr/testemunho34.webp';
import t35 from 'assets/img/jr/testemunho35.webp';
import t36 from 'assets/img/jr/testemunho36.webp';
import t37 from 'assets/img/jr/testemunho37.webp';
import apostila from 'assets/img/jr/topic_apostila.webp';
import perfil from 'assets/img/perfil.webp';
import tudoIsso from 'assets/img/tudoisso.webp';
import Head from "next/head";
import Image from 'next/image';
import { useRouter } from "next/router";
import { default as React } from "react";
import BotaoWhats from "../../components/BotaoWhats";
import ColorButton from "../../components/ColorButton";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import ScrollTo from "../../components/ScrollTo";






const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontSize: "1rem",
  },
  cta: {
    textAlign: "center",
    width: "100%",
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
  video: {
    left: 0,
    height: "100%",
    position: "absolute",
    top: 0,
    width: "100%",
  },
  videoWrapper: {
    height: 0,
    marginTop: 25,
    marginBottom: 25,
    paddingBottom: "56.25%",
    position: "relative",
  },
  card: {
    backgroundColor: "white",
    margin: '16px 16px',
  },
  cardMedia: {
  },
  section: {
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
  highlightGreen: {
    backgroundColor: "#6BFEDE",
    color: "gray",
    fontStyle: "italic",
    fontWeight: "bold",
    paddingRight: 5,
  },
  sectionWhats: {
    backgroundColor: "#25d366",
    color: "white",
  },
  heart: {
    color: "#FE6B8B",
    position: "relative",
    top: 5,
  },
  wave: {
    height: "55rem"
  },
  title: {
    fontSize: "2em",
    fontStyle: "italic",
    fontWeight: "bold",
  },
  subtitle: {
    color: "gray",
    fontSize: "1.3em",
  },
  fotoPerfil: {
    maxHeight: 300,
    maxWidth: "100%",
  },
  heading: {
    color: "#FE6B8B",
    fontWeight: "bold"
  },
  preco: {
    maxWidth: 600,
    width: "100%",
    marginBottom: 15,
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

const dolls = [
  { title: "Esmeralda", color: "#6BFEDE", image: esmeralda, description: "Esmeralda é um símbolo da verdade e do amor. Ela é cheia de esperança, atitude e muuuuuito sábia. Além disso, é sonhadora e intuitiva💚" },
  { title: "Rose", color: "#FE6B8B", image: rose, description: "Rose, também conhecida como Rose Quartz, tem muito estilo, é decidida e promove o amor incondicional.\n\nCom amor podemos todas as coisas, tudo torna-se possível💖" },
  { title: "Jade", color: "#6BFEDE", image: jade, description: "Jade é uma menina super amiga, brincalhona e extrovertida. É considerada a pedra da sorte, prosperidade e amizade🤗" },
  { title: "Ágata", color: "#6BFEDE", image: agata, description: "Ágata é forte e corajosa, se aceita como é de verdade! Tem uma energia super positiva e as pessoas ao seu redor se contagiam com a sua felicidade😆" },
  { title: "Ametista", color: "#6BFEDE", image: ametista, description: "Ametista parece frágil né? Pois é aí que você se engana. Ela é delicada, porém forte e tem uma paz interior que te eleva a alma🧘‍♀️" },
  { title: "Angelita", color: "#FE6B8B", image: angelita, description: "Angelita é suuuuper especial, comunicativa e verdadeira. Não perde a esperança mesmo em momentos difícies, pois acredita que dias melhores virão. Ela é a alegria da casa, a alegria da vida todinha da mamãe e do papai, ela é uma verdadeira super heroína🌹" },
  { title: "Rubi", color: "#FE6B8B", image: rubi, description: "Rubi protege as pessoas que ama e tem uma energia infinita! Leva felicidade e paixão em seu coração, e adora ajudar o próximo🌼" },
];

const projetos = [
  { title: "Ursinhas", color: "#FE6B8B", image: ursinhas, width: 400, height: 400, description: "E agora as bonecas tem companhia, essa ursinha suuuuper fofinha vai ajudar a compor nossos novos projetos🥰" },
  { title: "Mobile", color: "#6BFEDE", image: mobile, width: 400, height: 499, description: "Aprenda comigo a montar esse mobile de berço maravilhoso para decorar e entreter a bebê🌼" },
  { title: "Guirlanda", color: "#FE6B8B", image: guirlanda, width: 400, height: 400, description: "Sem falar nessa guirlanda super especial. Você vai aprender a customizar o nome que quiser e algumas técnicas extras. Imagina ela de porta maternidade🌹" },
  { title: "Pergolado", color: "#6BFEDE", image: pergolado, width: 400, height: 474, description: "E a cereja do bolo: o Pergolado. Essa peça é única e nunca vi nada parecido. A inspiração veio de um sonho e vou mostrar em detalhes como fazer. Além disso as bonecas também são diferentes, pois elas dobram as pernas e podem sentar no balanço🍒" },
];

const testemunhos = [
  { url: t25, width: 318, height: 58 },
  { url: t26, width: 318, height: 88 },
  { url: t29, width: 635, height: 200 },
  { url: t33, width: 468, height: 86 },
  { url: t34, width: 542, height: 76 },
  { url: t35, width: 458, height: 107 },
  { url: t36, width: 458, height: 92 },
  { url: t37, width: 532, height: 55 }
]

const faqs = [
  { pergunta: "Quando começa o curso?", resposta: "O curso começa assim que você se inscrever. Todas as aulas já estão gravadas e todas as apostilas de moldes estão disponíveis para baixar." },
  { pergunta: "Quando vou receber o curso?", resposta: "O acesso a sua área de membros é enviado automaticamente após a confirmação de seu pagamento. Se você realizar o pagamento por cartão de crédito ou PIX, você receberá os dados de acesso em até 10 minutos. Caso o pagamento seja por boleto bancário a confirmação bancária pode levar até 72 horas." },
  { pergunta: "Como vou receber o curso?", resposta: "O curso é enviado ao email cadastrado na compra. Certifique-se que o email está correto para não haver problemas na hora da entrega." },
  { pergunta: "Sou iniciante, vou conseguir fazer?", resposta: "Sim. O curso pensado especialmente para quem é iniciante e aborda tudo o que você precisa saber para criar as bonecas com perfeição. E possui um módulo exclusivo com as principais técnicas que você precisa conhecer." },
  { pergunta: "Não tenho máquina de costura. É um problema?", resposta: "Não. Vou te ensinar a confeccionar tudo à mão. A máquina de costura é opcional." },
  { pergunta: "O curso é online?", resposta: "Sim, o curso é 100% online em vídeo com mais de 50 aulas. Tudo bem explicado passo a passo para não ter dúvidas." },
  { pergunta: "Por quanto tempo vou poder assistir as aulas?", resposta: "Pelo tempo que quiser. O curso é vitalício. Uma vez seu, é seu pra sempre." },
  { pergunta: "Que tamanho ficam as bonecas depois de prontas?", resposta: "As que ficam em pé têm em média 28cm e as mini com 20cm. Podendo variar conforme o tipo de cabelo." },
  { pergunta: "Os materiais estão inclusos?", resposta: "Não, os materiais para confecção devem ser adquiridos à parte no local de sua preferência. E também temos uma loja virtual com tudo o que você precisa para não ter que perder tempo procurando!" },
  { pergunta: "O valor é único ou é mensalidade?", resposta: "Este valor é único. Você paga uma vez só e tem acesso a tudo isso sem prazo de validade." },
  { pergunta: "Quais são as formas de pagamento?", resposta: "Você pode pagar com cartão de crédito em até 12x ou à vista com PIX." },
];

const buttonStyle = ColorButton.primary;

function CTA(props) {
  const classes = useStyles();
  return (
    <ScrollTo target="#pricing">
      <ColorButton className={classes.cta} style={buttonStyle}>
        {props.children}
      </ColorButton>
    </ScrollTo>
  );
}

function CheckoutButton({ children, variant }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let checkoutURL = "https://pay.hotmart.com/B46628840G?checkoutMode=10"
  const router = useRouter()

  if (router.query.off)
    checkoutURL += "&off=" + router.query.off

  if (router.query.hideBillet)
    checkoutURL += "&hideBillet=" + router.query.hideBillet

  if (variant != undefined)
    checkoutURL += "&src=" + variant

  if (router.query.utm_source)
    checkoutURL += "&utm_source=" + router.query.utm_source

  if (router.query.utm_medium)
    checkoutURL += "&utm_medium=" + router.query.utm_medium

  if (router.query.utm_campaign)
    checkoutURL += "&utm_campaign=" + router.query.utm_campaign

  if (router.query.utm_content)
    checkoutURL += "&utm_content=" + router.query.utm_content

  if (router.query.utm_term)
    checkoutURL += "&utm_term=" + router.query.utm_term

  return (
    <>
      <ColorButton className={classes.cta} onClick={handleClickOpen} style={ColorButton.whatsapp}>
        {children}
      </ColorButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          Inscreva-se
          <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Form buttonText="Continuar" tag="JOIASRARAS-CHECKOUT" redirectTo={checkoutURL}
            emailPlaceholder="Seu email de acesso ao curso" checkout={true} buttonStyle={ColorButton.whatsapp} showName={true} showPhone={true} >
          </Form>
          <p className={classes.justify}>
            <Typography variant="body2" color="textSecondary" component="span">
              <i className={classes.heart}><HttpsIcon /></i> Compra segura. Você será redirecionada para a Hotmart para concluir o pagamento.
            </Typography>
          </p>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </>
  );
}

function Bonecas() {
  const classes = useStyles();
  return (
    <section>
      <Container maxWidth="md">
        <Grid container className={classes.grid}>
          <Grid item className={classes.centered} xs={12}>
            <h2>Elas têm <span className={classes.highlight}>personalidade</span></h2>
            <p>
              Seus nomes têm significado e são inspirados em pedras preciosas.
            </p>
            <p>
              Me diz, qual é sua preferida?
            </p>
          </Grid>

          {dolls.map((doll) => (
            <Grid container item xs={12} sm={6} md={6} spacing={0} key={doll.title}>
              <Card raised={true} className={classes.card}>
                <Image
                  alt={doll.title}
                  src={doll.image}
                  className={classes.cardMedia}
                  layout="responsive"
                  width={424}
                  height={640}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className={classes.centered}   >
                    <span className={classes.highlight}>{doll.title}</span>
                  </Typography>
                  <Typography color="textSecondary" component="p" className={classes.justify} >
                    {doll.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

function Promessa() {
  const classes = useStyles();
  return (
    <>
      <section>
        <Container maxWidth="md">
          <Grid item>
            <Image src={banner} layout="responsive" width={800} height={394} alt="" className={classes.foto} />
          </Grid>
          <Grid className={classes.centered}>
            <Grid item>
              <h2>São <span className={classes.highlightText}>7 joias raras</span> para você confeccionar, personalizar e vender</h2>
            </Grid>

            <Grid item>
              <p className={classes.subtitle}>Um curso <span className={classes.highlightText}>diferenciado</span> com lindas bonecas para vender, dar de presente ou passar o tempo fazendo o que você ama!</p>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}

function DedoNaFerida() {
  const classes = useStyles();
  return (
    <section className={classes.sectionConteudo}>
      <div className={classes.grid}>
        <Container maxWidth="md">
          <Grid>
            <Grid item className={classes.centered}>
              <h2 className={classes.centered}>Este curso é <span className={classes.highlight}>especialmente para você</span> que ...</h2>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="sm">
          <Grid>
            <Grid item>
              <p>
                <i><FavoriteIcon className={classes.heart} /> </i>quer iniciar na arte do feltro
              </p>
              <p>
                <i><FavoriteIcon className={classes.heart} /> </i>quer um curso detalhado com um ótimo suporte para tirar dúvidas
              </p>
              <p>
                <i><FavoriteIcon className={classes.heart} /> </i>quer se diferenciar no mercado com técnicas que vão além do feltro
              </p>
              <p>
                <i><FavoriteIcon className={classes.heart} /> </i>quer uma nova fonte de renda
              </p>
              <p>
                <i><FavoriteIcon className={classes.heart} /> </i>quer desenvolver novas habilidades e descobrir novas paixões
              </p>
              <p>
                <i><FavoriteIcon className={classes.heart} /> </i>quer uma atividade para reduzir o stress do dia-a-dia
              </p>

            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="md">
          <Grid >
            <Grid item className={classes.centered}>
              <CTA>
                Sim, este curso é para mim!
              </CTA>
            </Grid>
          </Grid>
        </Container>
      </div>
    </section>
  );
}

function ConteudoPremium() {
  const classes = useStyles();
  return (
    <section>
      <Container maxWidth="sm">
        <Grid container className={classes.grid}>
          <Grid item className={classes.centered} xs={12}>
            <h2>E ainda <span className={classes.highlight}>tem mais!</span></h2>

            <p>Além da opção das 7 bonecas que param em pé, você também terá uma versão menor delas com 20cm e com o pézinho adaptado para compor vários outros projetos!</p>
            <p>São muito fofas não acha?💖</p>

            <Paper elevation={5}>
              <Image src={minis} layout="responsive" width={546} height={640} alt="" className={classes.foto} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

function BonusProjetos() {
  const classes = useStyles();
  return (
    <section>
      <Container maxWidth="md">
        <Grid container className={classes.grid}>
          <Grid item className={classes.centered} xs={12}>
            <h2>E não podem faltar <span className={classes.highlight}>VÁRIOS BÔNUS!</span></h2>
            <p>Você receberá de brinde vários projetos exclusivos para compor com as bonecas.</p>
          </Grid>

          {projetos.map((deliverable) => (
            <Grid container item xs={12} md={6} spacing={0} key={deliverable.title}>
              <Card raised={true} className={classes.card}>
                <Image
                  alt={deliverable.title}
                  src={deliverable.image}
                  title={deliverable.title}
                  className={classes.fotoCard}
                  layout="responsive"
                  width={deliverable.width}
                  height={deliverable.height}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3" className={classes.centered}   >
                    Bônus: <span className={classes.highlight}>{deliverable.title}</span>
                  </Typography>
                  <Typography color="textSecondary" component="p" className={classes.justify} >
                    {deliverable.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}

        </Grid>
      </Container>
    </section>
  );
}


function Bonus() {
  const classes = useStyles();
  return (
    <section className={classes.sectionConteudo}>
      <Container maxWidth="md">
        <Grid container className={classes.grid} spacing={3}>
          <Grid item className={classes.centered} xs={12} md={6}>
            <Image src={planilha} layout="responsive" width={300} height={211} alt="" className={classes.foto} />
          </Grid>
          <Grid item xs={12} md={6}>
            <h2 className={classes.centered}><span className={classes.highlight}>Bônus Extra:</span> Planilha de precificação</h2>
            <p>
              Você terá acesso a uma aula de precificação e poderá baixar uma planilha para calcular o custo certinho da sua boneca. Já com dados de material usado preenchidos para cada boneca. Vai facilitar muito o seu trabalho e você poderá calcular de forma correta e ter lucro nas suas vendas!
            </p>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

function Conteudo() {
  const classes = useStyles();
  return (
    <section className={classes.sectionConteudo}>
      <Container maxWidth="sm">
        <Grid container className={classes.grid}>
          <Grid item >
            <h2 className={classes.centered}>O que você <span className={classes.highlight}>vai aprender?</span></h2>
            <p>
              <CheckBox className={classes.heart} /><span> Riscar e cortar os moldes</span>
            </p>
            <p>
              <CheckBox className={classes.heart} /><span> Confeccionar com o feltro, principais pontos, enchimento</span>
            </p>
            <p>
              <CheckBox className={classes.heart} /><span> Como fazer as bonecas pararem em pé</span>
            </p>
            <p>
              <CheckBox className={classes.heart} /><span> Passo a passo detalhado de cada boneca em vídeo nos mínimos detalhes</span>
            </p>
            <p>
              <CheckBox className={classes.heart} /><span> E não precisa de máquina, é tudo feito à mão. Pronta pra começar?</span>
            </p>
            <CTA>
              Estou pronta para começar
            </CTA>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

function AcessoImediato() {
  const classes = useStyles();
  return (
    <section>
      <Container maxWidth="md">
        <Grid container className={classes.grid} spacing={3}>
          <Grid item className={classes.centered} xs={12} md={6}>
            <Image src={apostila} layout="responsive" width={283} height={400} alt="" className={classes.foto} />
          </Grid>
          <Grid item xs={12} md={6}>
            <h2 className={classes.centered}>Entre agora e tenha <span className={classes.highlight}>acesso imediato</span></h2>
            <p>
              Após a confirmação do pagamento você terá acesso imediato a:
            </p>
            <p>
              <FavoriteIcon className={classes.heart} /><span> Mais de 5 horas de conteúdo divido em mais de 50 aulas</span>
            </p>
            <p>
              <FavoriteIcon className={classes.heart} /><span> Apostila digital de moldes das 7 bonecas que param em pé</span>
            </p>
            <p>
              <FavoriteIcon className={classes.heart} /><span> Apostila digital de moldes das 7 bonecas mini, ursinha, mobile, guirlanda e pergolado</span>
            </p>
            <p>
              <FavoriteIcon className={classes.heart} /><span> Lista de materiais completa e para cada boneca e projeto</span>
            </p>
            <p>
              <FavoriteIcon className={classes.heart} /><span> Planilha de precificação com aula explicativa para que você obtenha lucro nas suas vendas.</span>
            </p>
            <p>
              <FavoriteIcon className={classes.heart} /><span> Suporte por email e WhatsApp</span>
            </p>
            <p>
              <FavoriteIcon className={classes.heart} /><span> Grupo no telegram</span>
            </p>
            <p>
              <FavoriteIcon className={classes.heart} /><span> Módulo exclusivo para iniciantes</span>
            </p>
            <p>
              <FavoriteIcon className={classes.heart} /><span> Acesso vitalício</span>
            </p>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

function Preco({ variant }) {
  const classes = useStyles();
  return (
    <section className={classes.sectionGreen}>
      <div id="pricing" />
      <Container maxWidth="md">
        <Grid container className={classes.grid} spacing={3}>
          <Grid item className={classes.centered} xs={12} md={6}>
            <Image src={tudoIsso} layout="responsive" width={500} height={200} alt="" className={classes.preco} />
          </Grid>
          <Grid item className={classes.centered} xs={12} md={6}>
            <Image src={price} layout="responsive" width={400} height={160} alt="" className={classes.preco} />
            <div className={classes.precoAviso}></div>
            <CheckoutButton variant={variant}>
              Quero me inscrever agora
            </CheckoutButton>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

function Garantia() {
  const classes = useStyles();
  return (
    <section>
      <Container maxWidth="md">
        <Grid container className={classes.grid} spacing={3}>
          <Grid item className={classes.centered} xs={12} md={6}>
            <Image src={garantia} layout="responsive" width={298} height={251} alt="Garantia de 7 dias" />
          </Grid>
          <Grid item xs={12} md={6} className={classes.justify}>
            <h2 className={classes.centered}>Você tem 7 dias de <span className={classes.highlight}>garantia incondicional</span></h2>
            <p>Você terá acesso imediato a todas as aulas e a todas as apostilas de moldes.
              Se por qualquer motivo você não ficar satisfeita, basta enviar um email e você receberá 100% do valor investido de volta. Simples assim.</p>
            <CheckoutButton>
              Quero me inscrever sem riscos
            </CheckoutButton>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

function Depoimento() {
  const classes = useStyles();
  return (
    <section className={classes.sectionConteudo}>
      <Container maxWidth="md">
        <Grid container className={classes.grid} spacing={3}>
          <Grid item xs={12} md={6} className={classes.justify}>
            <h2 className={classes.centered}>Ela começou como hobby e não para de vender</h2>
            <p>Uma história de superação. Veja os melhores momentos desta conversa com a Silvana Zadra, só 3 minutinhos:</p>
          </Grid>
          <Grid item className={classes.centered} xs={12} md={6}>
            <div className={classes.videoWrapper}>
              <iframe
                loading="lazy"
                className={classes.video}
                src={"https://www.youtube.com/embed/ccuA_fBH4U8?rel=0"}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

function SobreMim() {
  const classes = useStyles();
  return (
    <section className={classes.sectionSobreMim}>
      <Container maxWidth="md">
        <Grid container className={classes.grid} spacing={3}>
          <Grid item className={classes.centered} md={6}>
            <Image className={classes.fotoPerfil} src={perfil} layout="responsive" width={512} height={512} alt="Mari Ubialli" />
          </Grid>
          <Grid item md={6} className={classes.justify}>
            <h2 className={classes.centered}>Com quem você vai aprender?</h2>
            <p>Muito prazer, eu sou Mari Ubialli</p>
            <p>Amo artesanato em feltro, coisas fofas e criativas!</p>
            <p>Conheci o feltro quando estava grávida do meu filho em 2018, me apaixonei na mesma hora e comecei a produzir muitas fofuras.</p>
            <p>Essas bonecas não são apenas bonecas para mim. Elas são a prova de que podemos conseguir fazer algo quando queremos, que podemos superar nossos medos e inseguranças e transformá-los em algo lindo e precioso.</p>
            <p>Quero compartilhar meu aprendizado, e ajudar mais pessoas a conhecerem, se apaixonarem e viverem desse artesanato maravilhoso!</p>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

function FAQs() {
  const classes = useStyles();
  return (
    <section className={classes.sectionFaq}>
      <Container maxWidth="md">
        <Grid container className={classes.grid} spacing={3}>
          <Grid item xs={12}>
            <h2 className={classes.centered}>Dúvidas frequentes</h2>
            {faqs.map((faq, index) => (
              <Accordion key={"id" + index} defaultExpanded={false}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={"panel" + index + "-content"}
                  id={"panel" + index + "-header"}
                >
                  <Typography className={classes.heading} component="h2">{faq.pergunta}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={classes.justify} color="textSecondary" >{faq.resposta}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

function DuvidasWhats() {
  const classes = useStyles();
  return (
    <section>
      <Container maxWidth="md">
        <Grid container className={classes.grid} spacing={3}>
          <Grid item className={classes.centered} xs={12}>
            <h2>Ainda tem dúvidas? Fale conosco no WhatsApp</h2>
            <BotaoWhats float={false} />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

function Testemunhos3() {
  const classes = useStyles();
  return (
    <section>
      <Container maxWidth="sm" className={classes.centered}>
        <Grid container className={classes.grid} spacing={1}>
          <Grid item className={classes.centered} xs={12}>
            <h2>Venha fazer parte deste grupo de <span className={classes.highlight}>mais de 1300 artesãs encantadas</span></h2>
          </Grid>
          {testemunhos.map((t, index) => (
            <Grid item className={classes.centered} xs={12} key={"t" + index}>
              <Paper elevation={3}>
                <Image src={t.url} layout="responsive" width={t.width} height={t.height} alt="Testemunho" className={classes.fotoTestemunho} />
              </Paper>
            </Grid>
          ))}
          <Grid item className={classes.centered} xs={12}>
            <p>
              <CheckoutButton>
                Quero fazer parte deste grupo
              </CheckoutButton>
            </p>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default function JoiasRarasVendas({ variant }) {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <Head>
        <title>Joias Raras - Curso de Bonecas em Feltro</title>
        <meta
          name="description"
          content="São 7 lindas bonecas para você confeccionar, personalizar e vender."
        />
        <meta
          name="keywords"
          content="feltro, artesanato, costura, ponto caseado, ponto reto, ponto alinhavo, passo a passo, diy, moldes gratuitos, apostilas gratuitas, bonecas, boneca em feltro"
        />
        <meta name="robots" content="index,nofollow"></meta>
      </Head>

      <Promessa />
      <DedoNaFerida />
      <Bonecas />
      <ConteudoPremium />
      <Conteudo />
      <BonusProjetos />
      <Bonus />
      <AcessoImediato />
      <Preco variant={variant} />
      <Garantia />
      <Depoimento />
      <Testemunhos3 />
      <SobreMim />
      <FAQs />
      <DuvidasWhats />
      <Preco variant={variant} />
      <Footer />
    </main>
  );
}
