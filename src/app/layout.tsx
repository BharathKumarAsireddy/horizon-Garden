import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { INSTAGRAM_URL, PHONE_TEL } from "@/lib/site-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://horizonsgardens.com"),
  title: {
    default: "Horizon Gardens | South Florida Landscape Supply Yard",
    template: "%s | Horizon Gardens",
  },
  description:
    "Horizon Gardens Inc. is a plant nursery and garden center located in Loxahatchee Groves, Florida, serving homeowners, landscapers, contractors and property owners throughout Palm Beach County. We offer a wide selection of landscape plants, flowers, annuals, topiaries, mulch, topsoil, sand, aggregate and landscape materials, along with professional landscaping services for residential and commercial properties.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Horizon Gardens",
    title: "Horizon Gardens | South Florida Landscape Supply Yard",
    description:
      "Plant nursery and garden center in Loxahatchee Groves, FL serving Palm Beach County with landscape plants, mulch, topsoil, sand, aggregate, and landscaping services.",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GardenStore",
  name: "Horizon Gardens",
  legalName: "Horizon Gardens Inc.",
  description: metadata.description,
  url: "https://horizonsgardens.com",
  telephone: `+1${PHONE_TEL}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "230 D Rd",
    addressLocality: "Loxahatchee Groves",
    addressRegion: "FL",
    postalCode: "33470",
    addressCountry: "US",
  },
  areaServed: "Palm Beach County, FL",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "07:30",
      closes: "16:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "15:00",
    },
  ],
  sameAs: [INSTAGRAM_URL],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
