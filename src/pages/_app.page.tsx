import type { AppProps } from "next/app";
import { Nunito_Sans } from "next/font/google";
import { globalStyles } from "@/styles/global";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { SessionProvider } from "next-auth/react";
import { BookModalContextProvider } from "@/contexts/BookModalContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import { DefaultSeo } from "next-seo";

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

        <BookModalContextProvider>
          {getLayout(
            <div className={nunito.className}>
              <Component {...pageProps} />
            </div>
          )}
        </BookModalContextProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
}
