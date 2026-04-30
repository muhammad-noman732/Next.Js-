import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Js 16 Data fetching Pattern",
  description: "this is the next js fetching pattern",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.className} h-full initialized`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
