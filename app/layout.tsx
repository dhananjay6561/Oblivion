import type { Metadata } from "next";
import { Playfair_Display, Space_Mono, Inter } from "next/font/google";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://oblivion-collective.vercel.app";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Oblivion Collective | Creative Direction for Bold Brands",
    template: "%s | Oblivion Collective",
  },
  description:
    "Oblivion Collective is a creative studio for brands with sharp ambition. We design bold visual systems, narratives, and digital experiences that stand out.",
  keywords: [
    "Oblivion Collective",
    "creative agency",
    "creative direction",
    "brand strategy",
    "digital experiences",
    "visual identity",
    "portfolio website",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/favicon.ico" }],
  },
  openGraph: {
    title: "Oblivion Collective | Creative Direction for Bold Brands",
    description:
      "Brand strategy, creative direction, and digital storytelling for projects that need a distinct point of view.",
    url: "/",
    siteName: "Oblivion Collective",
    type: "website",
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Oblivion Collective" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oblivion Collective | Creative Direction for Bold Brands",
    description:
      "Brand strategy, creative direction, and digital storytelling for projects that need a distinct point of view.",
    images: ["/twitter-image"],
  },
  category: "design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Oblivion Collective",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.ico`,
    sameAs: [],
  };

  return (
    <html lang="en" className={`${playfair.variable} ${spaceMono.variable} ${inter.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
