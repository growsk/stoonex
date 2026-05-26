import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

const bebas = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#faf7f2",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Landscaping, Fencing, Paving & Wall Stone in Saskatoon`,
    template: `%s · ${site.name}`,
  },
  description:
    "Premium landscaping, fencing, paving stone, and wall stone in Saskatoon and central Saskatchewan. Composite decks, white vinyl fencing, paver driveways, and stone retaining walls — built by Stoonex Services.",
  keywords: [
    "Saskatoon landscaping",
    "Saskatoon fencing",
    "paving stone Saskatoon",
    "retaining walls Saskatoon",
    "vinyl fence installer Saskatoon",
    "composite deck Saskatoon",
    "artificial turf Saskatoon",
    "Warman landscaping",
    "Martensville fencing",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Crafted outdoor spaces in Saskatoon`,
    description:
      "Landscaping, fencing, paving stone, and wall stone — built to last on the prairies.",
    images: [{ url: "/projects/yard-evening-lights.jpg", width: 2000, height: 1500 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Crafted outdoor spaces in Saskatoon`,
    description:
      "Landscaping, fencing, paving stone, and wall stone — built to last on the prairies.",
    images: ["/projects/yard-evening-lights.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/favicon.ico" },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  url: site.url,
  telephone: `+1-${site.phone}`,
  email: site.email,
  image: `${site.url}/projects/yard-evening-lights.jpg`,
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.latitude,
    longitude: site.geo.longitude,
  },
  areaServed: [
    "Saskatoon",
    "Martensville",
    "Warman",
    "Osler",
    "Dalmeny",
    "Langham",
    "Asquith",
    "Vanscoy",
    "Delisle",
    "Aberdeen",
    "Clavet",
    "Allan",
    "Hague",
    "Borden",
    "Hepburn",
  ].map((n) => ({ "@type": "City", name: n })),
  openingHours: "Mo-Sa 08:00-19:00",
  founder: { "@type": "Person", name: "Stoonex Services" },
  sameAs: [site.altUrl],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Outdoor Construction Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landscaping" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fencing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Paving Stone" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wall Stone" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-CA"
      className={`${bebas.variable} ${instrument.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-cream text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Reveal />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
