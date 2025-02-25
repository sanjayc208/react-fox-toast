'use client';

import localFont from 'next/font/local';
import './globals.css';
import { ToastContainer } from 'react-fox-toast';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

// Define metadata
const metadata: any = {
  title: 'React Fox Toast',
  description:
    'React Fox Toast is a customizable and lightweight toast/notification library designed for React applications.',
  keywords:
    'toast, notification, fox, react-fox, fox-toast, react fox toast, react-fox-toast',
  author: 'Sanjay Rajeev',
  image: 'logo/fox4.png',
  url: 'https://react-fox-toast.com/',
  banner: 'https://react-fox-toast.com/rft-banner.jpg',
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

        {/* Open Graph */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:site_name" content="React Fox Toast" />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.banner} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.banner} />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="canonical" href={metadata.url} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          background: '#efefea',
        }}
      >
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
