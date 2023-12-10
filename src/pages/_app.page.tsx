import type { AppProps } from "next/app";
import { Nunito, Nunito_Sans } from "next/font/google";
import { globalStyles } from "@/styles/global";
import DefaultLayout from "@/components/DefaultLayout";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

const nunito = Nunito_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

globalStyles();

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <div className={nunito.className}>
      <Component {...pageProps} />
    </div>
  );
}
