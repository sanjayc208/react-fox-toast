'use client';

import localFont from "next/font/local";
import Head from 'next/head';
import "./globals.css";
import { ToastContainer } from "react-fox-toast"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Define metadata
const metadata: any = {
  title: "react-fox-toast",
  description: "React Fox Toast is a customizable and lightweight toast/notification library designed for React applications.",
  keywords: "toast, notification, fox, react-fox, fox-toast, react fox toast, react-fox-toast",
  author: "Sanjay Rajeev",
  image: "logo/fox4.png",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="image" content={metadata.image} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:site_name" content='React Fox Toast'/>
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}

        style={{
          background:'#efefea'
        }}
      >
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
