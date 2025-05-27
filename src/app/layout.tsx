import type { Metadata } from "next";
import { Dancing_Script, Comfortaa, Great_Vibes } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const dancingScript = Dancing_Script({
  variable: "--font-Dancing-Script",
  subsets: ["latin"],
});

const comfortaa = Comfortaa({
  variable: "--font-Comfortaa",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-Great-Vibes",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "wedding app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dancingScript.variable} ${greatVibes.variable} ${comfortaa.variable} antialiased`}
      >
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
