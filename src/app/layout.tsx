import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
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
  title: "The Stave & Tie Co. | Custom Bourbon Barrel Art & Stave Goods",
  description:
    "Custom barrel head art, reclaimed stave coat racks, and bourbon flight boards handcrafted one at a time with care, character, and lasting meaning.",
  openGraph: {
    title: "The Stave & Tie Co. | Custom Bourbon Barrel Art & Stave Goods",
    description:
      "Custom barrel head art, reclaimed stave coat racks, and bourbon flight boards handcrafted one at a time with care, character, and lasting meaning.",
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
      className={`${manrope.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-clip bg-espresso text-parchment">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
