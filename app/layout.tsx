import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Poppins, Inclusive_Sans, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { AosInit } from "@/components/aos-init";
import SmoothScroll from "@/components/SmoothScroll";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inclusiveSans = Inclusive_Sans({
  variable: "--font-inclusive-sans",
  subsets: ["latin"],
  weight: ["400"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Eazzy — Your Home, Expertly Taken Care Of",
  description:
    "Everything your home needs from repairs and maintenance to everyday care, delivered by verified professionals you can trust.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inclusiveSans.variable} ${instrumentSans.variable} bg-background`}>
      <body className="font-sans antialiased">
        <AosInit />
        <SmoothScroll />
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
