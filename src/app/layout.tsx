import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  title: "The Stave & Tie Co. — Built With Purpose | Kentucky Bourbon Barrel Pieces",
  description:
    "Handcrafted bourbon barrel pieces, made in Kentucky by a working firefighter. Custom barrel heads, stave coat racks, and flight boards — built one at a time.",
  openGraph: {
    title: "The Stave & Tie Co. — Built With Purpose",
    description:
      "Handcrafted bourbon barrel pieces from Kentucky. Made by a working fireman.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1f130a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-espresso text-parchment">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
