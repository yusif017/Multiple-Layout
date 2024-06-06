import { getLayout } from "@/helpers/getLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const Layout = getLayout(Component);
  return(
    <Layout>
  <Component {...pageProps} />
    </Layout>
  )
  ;
}
