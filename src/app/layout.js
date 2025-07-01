
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Color Shades Bharat - Empowering Innovation • Supporting Growth",
  description: "Color Shades Bharat offers innovative color solutions for various industries.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
    </html>
  );
}

