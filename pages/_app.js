import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import "assets/css/global.css";
import theme from "assets/js/theme";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import * as fbq from '../lib/fpixel'

const handleRouteChange = () => {
  console.log('Route changed');
  setTimeout(() => fbq.pageview(), 1000)
}

export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  if (router.query.utm_source) {
    window.localStorage.removeItem("utm_source");
    window.localStorage.setItem("utm_source", router.query.utm_source);
  }

  useEffect(() => {
    fbq.pageview()

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const title = pageProps.title ? pageProps.title + " | " : "";
  return (
    <React.Fragment>
      <Head>
        <title>{title + "Mari Ubialli"}</title>
        <meta
          name="description"
          content="Gere renda extra vendendo suas bonecas de feltro"
        />
        <meta
          name="keywords"
          content="feltro, artesanato, costura, ponto caseado, ponto reto, ponto alinhavo, passo a passo, diy, moldes gratuitos, apostilas gratuitas, boneca de feltro, bonecas de feltro, renda extra"
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
  let initialProps = {
  };

  if (Component.getInitialProps) {
    initialProps = await Component.getInitialProps(ctx);
  }

  return {
    env: process.env.NODE_ENV,
    ...initialProps
  };
};
