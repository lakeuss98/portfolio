import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import * as React from "react"

import { NavBar } from "@/components/custum/navbar";
import { Footer } from "@/components/custum/footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "André Ngongang - Développeur Web Front-end",
  description: "Portfolio d'André Ngongang, développeur web spécialisé en React, Next.js et TypeScript.",
  icons:"moi.png"
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col w-full bg-[url('../../public/simple_pratice.jpeg')] bg-cover flex-grow min-h-screen ">
        <NavBar/>
        { 
        children
        }
        <Footer/>
        </div>
       
      </body>
    </html>
  );
}
