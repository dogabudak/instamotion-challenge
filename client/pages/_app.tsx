import React from "react";
import { GlobalStyles } from "../styles/Globals";
import type { AppProps } from "next/app";
import "react-image-gallery/styles/css/image-gallery.css";

function InstamotionChallenge({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default InstamotionChallenge;
