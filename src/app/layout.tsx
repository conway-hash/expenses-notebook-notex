import "./globals.css";

import type { Metadata } from "next";
import { Raleway, Inria_Sans } from 'next/font/google';

const raleway = Raleway({
  subsets: ["latin"],
  weight: ['400', '500', '700'],
});

const inriaSans = Inria_Sans({
  subsets: ["latin"],
  weight: ['300', '400', '700'],
});

export const metadata: Metadata = {
  title: "Notex - Notebook for expenses",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inriaSans.className}>
        {children}
      </body>
    </html>
  );
}
