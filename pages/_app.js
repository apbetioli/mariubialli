import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import "assets/css/global.css";
import theme from "assets/js/theme";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function populateUtmSource() {
  const router = useRouter();
  useEffect(() => {
    if (router.query.utm_source) {
      window.localStorage.setItem("utm_source", router.query.utm_source);
    }
  });
}

export default function App({ Component, pageProps }) {
  populateUtmSource();

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
        <Component {...pageProps} />
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
