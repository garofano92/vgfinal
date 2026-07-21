import CoachingOnline from "@/components/CoachingOnline";

const SITE_URL = "https://www.vgpersonaltrainingstudio.it";

export const metadata = {
  title: "Coaching Online | Personal Trainer Online in Italia",
  description:
    "Coaching online 1 a 1 con Vincenzo Garofano: scheda di allenamento personalizzata online, monitoraggio costante e supporto diretto. Ricomposizione corporea online, ovunque tu sia.",
  keywords: [
    "coaching online personal trainer",
    "personal trainer online Italia",
    "scheda allenamento personalizzata online",
    "coach fitness online",
    "ricomposizione corporea online",
  ],
  alternates: { canonical: "/coaching-online" },
  openGraph: {
    type: "article",
    locale: "it_IT",
    url: `${SITE_URL}/coaching-online`,
    siteName: "VG Personal Training Studio",
    title: "Coaching Online | Personal Trainer Online in Italia",
    description:
      "Percorso individuale, personalizzato e monitorato nel tempo. La stessa qualità dello studio, ovunque tu sia.",
    images: [{ url: "/og-coaching.jpg", width: 1200, height: 630, alt: "VG Coaching Online" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Coaching online di personal training",
  name: "VG Coaching Online",
  provider: {
    "@type": "HealthClub",
    name: "VG Personal Training Studio",
    founder: { "@type": "Person", name: "Vincenzo Garofano" },
  },
  areaServed: { "@type": "Country", name: "Italia" },
  description:
    "Coaching online individuale: programmazione personalizzata, monitoraggio costante, adattamenti continui e supporto diretto con il coach.",
  url: `${SITE_URL}/coaching-online`,
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CoachingOnline />
    </>
  );
}
