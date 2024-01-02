import type { AppProps } from "next/app";
import { Nunito_Sans } from "next/font/google";
import { globalStyles } from "@/styles/global";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { SessionProvider } from "next-auth/react";

const nunito = Nunito_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

globalStyles();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SessionProvider session={session}>
      {getLayout(
        <div className={nunito.className}>
          <Component {...pageProps} />
        </div>
      )}
    </SessionProvider>
  );
}
