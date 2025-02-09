'use client';

import localFont from "next/font/local";
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
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="image" content={metadata.image} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}

        style={{
          background:'#efefea'
        }}
      >
        <ToastContainer />
        {children}
        {/* <ToastContainer 
        // spacing={100}
        // toastTypeTheming = {{
        //   success: {
        //     // style: {
        //     //   backgroundColor: 'blue',
        //     //   color: '#155E00',
        //     // },
        //     className: 'bg-blue-100', // Optional class name for custom styling
        //   },
        //   error: {
        //     style: {
        //       backgroundColor: 'green',
        //       color: '#B91C1C',
        //     },
        //     className: 'error-toast-class',
        //   },
        //   info: {
        //     style: {
        //       backgroundColor: '#white',
        //       color: '#1D4ED8',
        //     },
        //     className: 'info-toast-class',
        //   },
        //   custom: {
        //     style: {
        //       backgroundColor: 'yellow',
        //       color: '#6B7280',
        //     },
        //     className: 'custom-toast-class',
        //   },
        // }}
        /> */}
      </body>
    </html>
  );
}
