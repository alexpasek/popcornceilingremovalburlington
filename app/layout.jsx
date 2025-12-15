import "./globals.css";
import Link from "next/link";
import StickyCTA from "@/components/StickyCTA";
import TrustBar from "@/components/TrustBar";
import LightboxGlobal from "@/components/LightboxGlobal";
import SEOJsonLd from "@/components/SEOJsonLd";
import { cities } from "@/data/cities";
import {
  BRAND_NAME,
  CONTACT,
  SERVICE_AREAS,
  PHONE_NUMBER,
  PHONE_HREF,
} from "./config";
import ReviewScroller from "@/components/ReviewScroller";
import HeaderNav from "@/components/HeaderNav"; // ✅ NEW
import Footer from "@/components/Footer";
export const metadata = {
  title: {
    default: "Popcorn Ceiling Removal Burlington | Smooth Ceilings in 24h",
    template: "%s | Popcorn Ceiling Removal Burlington",
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL ||
        "https://popcorn-ceiling-removal-burlington.com"
    ),
  },
  description:
    "Burlington-first crew for popcorn ceiling removal, drywall, wallpaper stripping, and interior painting. Dust-controlled, Level 5 smooth, photo quotes in hours.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        <SEOJsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <HeaderNav /> {/* ✅ use the client header */}
        <TrustBar />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCTA />
        <LightboxGlobal />
      </body>
    </html>
  );
}
