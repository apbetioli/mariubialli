import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import "../../assets/css/global.css";
import createEmotionCache from "../lib/createEmotionCache";
import * as fbq from "../lib/fpixel";
import theme from "../lib/theme";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache: EmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps: { session, ...pageProps },
  } = props;

  const router = useRouter();

  useEffect(() => {
    if (router.query.utm_source) {
      window.localStorage.removeItem("utm_source");
      window.localStorage.setItem(
        "utm_source",
        router.query.utm_source.toString()
      );
    }
  }, [router.query.utm_source]);

  useEffect(() => {
    const handleRouteChange = () => {
      console.log("Route changed");
      setTimeout(() => fbq.pageview(), 5000);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    setTimeout(() => fbq.pageview(), 0);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <SessionProvider session={session}>
            <Component {...pageProps} />
          </SessionProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}
