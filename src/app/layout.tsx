import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Caveat } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/shared/json-ld";
import { SplashLoader } from "@/components/ui/splash-loader";
import { siteMeta } from "@/lib/constants/metadata";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: siteMeta.home.title,
  description: siteMeta.home.description,
  metadataBase: new URL("https://www.jumanisurfschool.com"),
  openGraph: {
    type: "website",
    siteName: "Jumani Surf School",
    title: siteMeta.home.title,
    description: siteMeta.home.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${dmSans.variable} ${caveat.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <JsonLd />
        <SplashLoader />
      </body>
    </html>
  );
}
