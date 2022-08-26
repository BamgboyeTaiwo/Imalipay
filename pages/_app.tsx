import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import Head from "next/head";
import Layout from "../layout/main";

function MyApp({ Component, pageProps }: AppProps) {
  // const Layout = Component.layout || (({ children }: any) => <>{children}</>);
  let wind;

  useEffect(() => {
    if (typeof window === "undefined") {
      wind = true;
    } else {
      wind = false;
    }

  }, [])
  

  return (
    <>
      {wind === true ? (
        <></>
      ) : (
        <React.Fragment>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <title>Imalipay </title>
            {/* <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script> */}
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </React.Fragment>
      )}
    </>
  );

  // <Component {...pageProps} />
}

export default MyApp;
