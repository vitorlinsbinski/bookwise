import { getCssText } from "@/styles/stitches.config";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,400;6..12,500;6..12,700&display=swap"
          rel="stylesheet"
        />

        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}></style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
