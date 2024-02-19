import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main/>
        <NextScript/>
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "dd74b0fa2d8f4b24a7b5af1389f627e6"}'></script>
      </body>
    </Html>
  );
}
