import "../styles/globals.css";
import { AppProps } from "next/app";
import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar();

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
