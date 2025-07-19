import React from "react";
import Script from "next/script";

import "../styles/globals.css";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body>{children}</body>
      <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "dd74b0fa2d8f4b24a7b5af1389f627e6"}'
      />
      </html>
  );
}
