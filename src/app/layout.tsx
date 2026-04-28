import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, Special_Elite, Allura } from "next/font/google";
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

const specialElite = Special_Elite({
  variable: "--font-special-elite",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "The Stave & Tie Co. — Atelier of Reclaimed Bourbon Barrel Wall Art | Kentucky",
  description:
    "A Kentucky atelier producing numbered, hand-engraved wall pieces from retired bourbon barrels. Each commission carved by a working firefighter — finished slow, made for one wall.",
  openGraph: {
    title: "The Stave & Tie Co. — Atelier of Reclaimed Bourbon Barrel Wall Art",
    description:
      "A Kentucky atelier. Numbered, made-to-commission. Reclaimed white oak from the bourbon trail.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#150c06",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${specialElite.variable} ${allura.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-espresso text-parchment">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
