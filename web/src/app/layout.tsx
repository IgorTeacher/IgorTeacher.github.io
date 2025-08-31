import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Igor Ausiany - English & German Language Teacher",
  description: "Master English and German with certified teacher Igor Ausiany. Personalized online lessons from A1 to C1 levels. Free trial available.",
  keywords: "English teacher, German teacher, online language lessons, TESOL, CELTA, language learning",
  openGraph: {
    title: "Igor Ausiany - English & German Language Teacher",
    description: "Master English and German with certified teacher Igor Ausiany. Personalized online lessons from A1 to C1 levels.",
    type: "website",
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
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
