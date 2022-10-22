import "../styles/globals.css";
import { AppProps } from "next/app";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart");

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
