import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shivapigments.com"),
  title: "Shiva Pigments Private Limited",
  description:
    "Manufacturers and Exporters of Premium Phthalocyanine Blue Pigments — PB 15:0, PB 15:1 & Copper Phthalocyanine Crude",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Shiva Pigments Private Limited",
    description:
      "Manufacturers and Exporters of Premium Phthalocyanine Blue Pigments — PB 15:0, PB 15:1 & Copper Phthalocyanine Crude",
    images: [
      {
        url: "/opengraph.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiva Pigments Private Limited",
    description:
      "Manufacturers and Exporters of Premium Phthalocyanine Blue Pigments — PB 15:0, PB 15:1 & Copper Phthalocyanine Crude",
    images: ["/opengraph.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
