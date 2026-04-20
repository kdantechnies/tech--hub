import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Modern professional fonts
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import "./globals.css";

// 1. Configure the fonts for a Global Tech look
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. Comprehensive Metadata for SEO
export const metadata: Metadata = {
  title: "Jengatech | Future-Ready Tech Education & Enterprise Solutions",
  description: "Empowering Africa through elite technical education and intelligent digital engineering. Join Jengatech to master Software, AI, and Robotics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 3. Add data-scroll-behavior to satisfy the Next.js warning
    <html lang="en" data-scroll-behavior="smooth" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-[#0A0A0A] min-h-screen flex flex-col`}
      >
        {/* The Navbar stays on top across all pages */}
        <Navbar />

        {/* 
          - pt-20 ensures content doesn't hide behind the sticky Navbar.
          - flex-grow ensures the Footer stays at the bottom on short pages.
        */}
        <main className="flex-grow pt-20">
          {children}
        </main>

        {/* The Footer appears at the bottom of every page */}
        <Footer />
      </body>
    </html>
  );
}