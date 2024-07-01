import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Hello world</title>
        {/* <meta
          property="og:image"
          content="http://localhost:3000/api/og"
        /> */}
          <meta
          property="og:image"
          content="https://img.freepik.com/free-photo/anime-style-character-space_23-2151134277.jpg?t=st=1719825547~exp=1719829147~hmac=6fa9ce7031501066d7e8ba8e2582b20644dec5fff6db8132664f45d61fd914b4&w=1800"
        />
        <meta property="og:title" content="Product Name" />
        <meta property="og:description" content="Buy this amazing product for only $99.99!" />
        <meta property="og:url" content="https://example.com/product-page-url" />
      </head>
      <body className={inter.className}>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
