"use client";
import "./globals.css";
import "highlight.js/styles/github.css";

import { Analytics } from "@vercel/analytics/react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased font-body leading-7 text-body bg-white">
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
