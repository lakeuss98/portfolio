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
  openGraph: {
    title: "André Ngongang - Développeur Web Front-end",
    description: "Portfolio d'André Ngongang, développeur web spécialisé en React, Next.js et TypeScript.",
    url: "https://andre-ngongang.fr", // Remplacez par votre nom de domaine
    siteName: "André Ngongang's Portfolio",
    images: [
      {
        url: 'moi.png', // Chemin vers votre image dans le dossier public
        width: 400,
        height: 400,
        alt: 'Photo de André Ngongang',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "André Ngongang - Développeur Web Front-end",
    description: "Portfolio d'André Ngongang, développeur web spécialisé en React, Next.js et TypeScript.",
    images: ['moi.png'], // Chemin vers votre image
  },
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
