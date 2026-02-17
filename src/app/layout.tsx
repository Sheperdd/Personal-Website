import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shane Edelstein",
  description: "Personal portfolio of a CS student and full stack developer.",
  openGraph: {
    title: "Shane Edelstein",
    description: "Personal portfolio of a CS student and full stack developer.",
    url: "https://shaneedelstein.com",
    siteName: "Shane Edelstein",
    images: [
      {
        url: "/website.png",
        width: 1200,
        height: 630,
        alt: "Shane Edelstein Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shane Edelstein",
    description: "Personal portfolio of a CS student and full stack developer.",
    images: ["/website.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
