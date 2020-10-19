import "assets/css/global.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Fab from "@material-ui/core/Fab";
import { ThemeProvider } from "@material-ui/core/styles";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Head from "next/head";
import React from "react";
import theme from "assets/js/theme";
import Header from "components/Header";
import ScrollTop from "components/ScrollTop";

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Mari Ubialli - Artesanato Criativo</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />

        <Header />

        <Component {...pageProps} />

        <ScrollTop {...pageProps}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
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
