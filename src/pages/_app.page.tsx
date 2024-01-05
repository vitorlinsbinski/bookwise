import type { AppProps } from "next/app";
import { Nunito_Sans } from "next/font/google";
import { globalStyles } from "@/styles/global";
import { ReactElement, ReactNode, useState } from "react";
import { NextPage } from "next";
import { SessionProvider } from "next-auth/react";
import { ApplicationContextProvider } from "@/contexts/ApplicationContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import { DefaultSeo } from "next-seo";
import { Router } from "next/router";
import { Loading } from "@/components/Loading";

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

  const [isLoading, setIsLoading] = useState(false);

  Router.events.on("routeChangeStart", () => {
    setIsLoading(true);
  });

  Router.events.on("routeChangeComplete", () => {
    setIsLoading(false);
  });

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <DefaultSeo
          openGraph={{
            type: "website",
            locale: "pt_BR",
            url: "https://bookwise.com.br",
            siteName: "Bookwise",
          }}
        />

        {isLoading && <Loading />}

        <ApplicationContextProvider>
          {getLayout(
            <div className={nunito.className}>
              <Component {...pageProps} />
            </div>
          )}
        </ApplicationContextProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
}
