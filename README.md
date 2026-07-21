# VG Personal Training Studio

Sito premium one-page — **Next.js 14 (App Router) · React · lucide-react**.
Design system completo, copy professionale in italiano, SEO + Schema.org, pronto per Vercel.

## Avvio locale
```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy su Vercel
1. Carica la cartella su un repository GitHub.
2. Su vercel.com → **New Project** → importa il repo.
3. Framework rilevato automaticamente: **Next.js**. Premi **Deploy**.
4. Collega il dominio reale e sostituisci `SITE_URL` in `app/layout.jsx`, `app/sitemap.js`, `app/robots.js`.

## Struttura
```
vg-studio/
├─ app/
│  ├─ layout.jsx     → metadata SEO, Open Graph, JSON-LD (HealthClub)
│  ├─ page.jsx       → entry
│  ├─ globals.css    → design system completo (token, animazioni, responsive)
│  ├─ sitemap.js     → /sitemap.xml
│  └─ robots.js      → /robots.txt
├─ components/
│  └─ Site.jsx       → sito completo (client component)
└─ public/           → og.jpg, favicon, foto da inserire
```

## Design System
| Token            | Valore     | Uso                                  |
|------------------|------------|--------------------------------------|
| Nero Assoluto    | `#000000`  | Sfondo base                          |
| Nero Carbone     | `#111111`  | Sezioni alternate                    |
| Rosso Brand      | `#E62B00`  | SOLO CTA, hover, hairline, evidenza  |
| Bianco           | `#FFFFFF`  | Testo primario                       |
| Bianco Soft / mut| `#F5F5F5`  | Testo secondario                     |

- **Display:** Montserrat ExtraBold (uppercase, tracking stretto)
- **Body:** Inter
- **Firma visiva:** le *hairline rules* del logo diventano il sistema di etichette di sezione.

## Segnaposto da sostituire
- Foto studio (4), ritratto Vincenzo, foto prima/dopo, foto + testimonianze (Alex Garini, Luca Corrini)
- Video testimonianze, numero WhatsApp (`wa.me/39...`), handle Instagram, link Google Maps, P.IVA, `og.jpg`/favicon

> Le testimonianze dei volti noti sono lasciate come **segnaposto**: inserisci citazioni reali e autorizzate.
