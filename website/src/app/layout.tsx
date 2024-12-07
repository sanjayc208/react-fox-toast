'use client';

// import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ToastContainer} from "react-fox-toast"

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}

        style={{
          background:'#efefea'
        }}
      >
              {/* <Toaster /> */}

        {/* <CustomToast /> */}
        {/* <ToastProvider> */}
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
        {/* </ToastProvider> */}
      </body>
    </html>
  );
}
