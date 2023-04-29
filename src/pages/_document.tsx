import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="scroll-smooth" lang="en">
      <Head>
        <title>Celebcheck</title>
      </Head>
      <body className=" scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#194E6A] scrollbar-thumb-rounded-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
