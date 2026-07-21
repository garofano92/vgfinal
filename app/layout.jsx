import "./globals.css";

const SITE_URL = "https://www.vgpersonaltraining.it";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "VG Personal Training Studio | Personal Trainer Frattamaggiore (Napoli)",
    template: "%s | VG Personal Training Studio",
  },
  description:
    "Studio di personal training privato a Frattamaggiore (Napoli). Massimo 2 persone per sessione, percorsi su misura e monitoraggio costante. Ricomposizione corporea e allenamento personalizzato.",
  keywords: [
    "personal trainer Frattamaggiore",
    "personal trainer Napoli",
    "studio personal training Frattamaggiore",
    "personal trainer individuale",
    "ricomposizione corporea Napoli",
    "allenamento personalizzato Napoli",
  ],
  authors: [{ name: "Vincenzo Garofano" }],
  creator: "VG Personal Training Studio",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: SITE_URL,
    siteName: "VG Personal Training Studio",
    title: "VG Personal Training Studio | Personal Trainer Frattamaggiore",
    description:
      "Studio privato di personal training a Frattamaggiore (Napoli). Massimo 2 persone, percorsi su misura, risultati reali.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "VG Personal Training Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VG Personal Training Studio | Personal Trainer Frattamaggiore",
    description: "Studio privato di personal training a Frattamaggiore (Napoli).",
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

// Schema.org — LocalBusiness / HealthClub (rich results)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: "VG Personal Training Studio",
  image: `${SITE_URL}/og.jpg`,
  "@id": SITE_URL,
  url: SITE_URL,
  founder: { "@type": "Person", name: "Vincenzo Garofano" },
  description:
    "Studio di personal training privato a Frattamaggiore (Napoli). Massimo 2 persone per sessione, allenamento personalizzato e ricomposizione corporea.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Corso Durante 170",
    addressLocality: "Frattamaggiore",
    addressRegion: "NA",
    addressCountry: "IT",
  },
  areaServed: ["Frattamaggiore", "Napoli"],
  priceRange: "€€€",
  knowsAbout: [
    "Personal training",
    "Ricomposizione corporea",
    "Allenamento personalizzato",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
