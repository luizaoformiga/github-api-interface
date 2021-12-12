import type { AppProps } from "next/app";
import { ResetCSS } from "../global/resetCSS";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ResetCSS />
    </>
  );
}

export default MyApp;
