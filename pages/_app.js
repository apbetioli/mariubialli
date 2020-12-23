import CssBaseline from "@material-ui/core/CssBaseline";
import Fab from "@material-ui/core/Fab";
import { ThemeProvider } from "@material-ui/core/styles";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import "assets/css/global.css";
import theme from "assets/js/theme";
import Footer from "components/Footer";
import Header from "components/Header";
import ScrollTop from "components/ScrollTop";
import Head from "next/head";
import React from "react";

export default function App({ Component, pageProps }) {
  const title = pageProps.title ? pageProps.title + " | " : "";
  return (
    <React.Fragment>
      <Head>
        <title>{title + "Mari Ubialli - Artesanato Criativo"}</title>
        <meta
          name="description"
          content="Aprenda comigo tudo sobre artesanato em feltro e criação de apostilas de moldes. Baixe apostilas de moldes gratuitas prontas para confecção."
        />
        <meta
          name="keywords"
          content="feltro, artesanato, costura, ponto caseado, ponto reto, ponto alinhavo, passo a passo, diy, moldes gratuitos, apostilas gratuitas"
        />
        <meta name="robots" content="index,follow"></meta>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Header />

        <Component {...pageProps} />

        <ScrollTop {...pageProps}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>

        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

export const getInitialProps = async ({ Component, router, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};
