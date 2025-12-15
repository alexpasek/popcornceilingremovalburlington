import Link from "next/link";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";
import { cities } from "@/data/cities";
import { ServiceCopy } from "@/components/LocalSEOCopy";

export const revalidate = 86400;

export const metadata = {
  title: "Interior Painting Burlington | Popcorn Ceiling Removal Burlington",
  description:
    "Modern interior painting for Burlington homes. Design-focused walls, ceilings and trim with dust-controlled prep, Level 5 smoothing and premium coatings.",
  alternates: { canonical: "/services/interior-painting/" },
  openGraph: {
    title: "Burlington Interior Painting — Popcorn Ceiling Removal Burlington",
    description:
      "Professional interior painting with Level 5 prep, sharp lines and premium coatings. Burlington-focused crew pairing paint projects with popcorn ceiling smoothing.",
    url: "/services/interior-painting/",
    type: "article",
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const areaServed = cities.map((c) => c.name);
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Interior Painting Burlington",
        serviceType: [
          "Interior Painting",
          "Ceiling Painting",
          "Trim & Doors Painting",
          "Level 5 Prep & Priming",
        ],
        areaServed,
        provider: {
          "@type": "LocalBusiness",
          name: "Popcorn Ceiling Removal Burlington",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "CAD",
          availability: "https://schema.org/InStock",
        },
        potentialAction: { "@type": "RequestQuoteAction", target: "/quote/" },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do you prep walls to Level 5?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We skim, sand with HEPA extraction, and inspect under raking light before painting so designer colours lay perfectly.",
            },
          },
          {
            "@type": "Question",
            name: "Can you paint ceilings and trim too?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. Ceilings, walls, baseboards, casings, doors, accent walls—finished with matching sheens and straight tapelines.",
            },
          },
          {
            "@type": "Question",
            name: "Is prep dust-controlled?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Containment, floor & vent protection, vacuum-sanding and tidy clean-ups so Burlington homes stay livable.",
            },
          },
          {
            "@type": "Question",
            name: "How fast is quoting?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Same-day photo estimate with on-site confirmation before scheduling.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const heroStats = [
  { label: "Rooms refreshed", value: "350+" },
  { label: "Condos repainted", value: "50+" },
  { label: "Popcorn + paint", value: "24h turnover" },
  { label: "Finish level", value: "Level 5" },
];

const paintPillars = [
  {
    title: "Design-friendly prep",
    copy:
      "We deliver glued, skimmed walls ready for designer whites and bold feature colours. Level 5 skim coat and daylight inspection keep surfaces flawless.",
    bullets: [
      "Level 5 skim & HEPA sanding",
      "Feathered seams, caulked trim",
      "Primer matched to finish coats",
    ],
  },
  {
    title: "Popcorn + paint pairing",
    copy:
      "Our crew can smooth ceilings and paint them in one mobilization. Popcorn removal, Level 5 skim, then premium ceiling flats or velvety sheens.",
    bullets: [
      "Dust containment + floor protection",
      "Ceiling + wall colour coordination",
      "Pot light or repair blending",
    ],
  },
  {
    title: "Condo + custom workflow",
    copy:
      "Elevator bookings, hallway protection, and daily tidy-ups keep Burlington condos and custom homes photo-ready while we repaint.",
    bullets: [
      "Quiet-hour friendly crew",
      "Daily SMS/photo updates",
      "Designer communication welcome",
    ],
  },
];

export default function Page() {
  const cityPills = cities.slice(0, 12);
  const images = ["/services/painting/1.webp"];

  return (
    <div className="bg-gradient-to-b from-slate-900/5 via-white to-slate-50">
      <div className="container-x py-12 space-y-16">
        <JsonLd />

        {/* HERO */}
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="space-y-5">
            <p className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1 text-sm font-semibold text-red-700">
              Popcorn Ceiling Removal Burlington • Interior Painting
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Interior painting, Level 5 prep, and smooth ceilings for Burlington homes.
            </h1>
            <p className="text-lg text-slate-700">
              Pair your popcorn ceiling removal with designer-level painting. We prep walls, ceilings, and trim, then apply premium coatings for modern Burlington spaces.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={PHONE_HREF} className="btn-cta">
                📞 {PHONE_NUMBER}
              </a>
              <Link href="/quote/" className="btn-cta">
                Book a site visit
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white p-4 text-center"
                >
                  <div className="text-2xl font-semibold text-slate-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] border border-slate-200 bg-white/90 p-6 shadow-xl">
            <img
              src={images[0]}
              alt="Burlington interior painting with smooth ceilings"
              className="w-full h-80 object-cover rounded-2xl"
              loading="lazy"
            />
            <p className="mt-4 text-sm text-slate-600">
              Serving Downtown Burlington, Aldershot, Millcroft, Tyandaga, Headon Forest, Brant Hills, The Orchard, Appleby.
            </p>
          </div>
        </section>

        {/* CITY PILLS */}
        <section className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {cityPills.map((c) => (
            <Link key={c.slug} href={`/${c.slug}/`} className="pill">
              {c.name}
            </Link>
          ))}
        </section>

        {/* PILLARS */}
        <section className="grid gap-6 lg:grid-cols-3">
          {paintPillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-amber-50/40 p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm text-slate-700">{pillar.copy}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {pillar.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-red-500" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        {/* SERVICE COPY */}
        <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
          <ServiceCopy
            city="Burlington"
            service="Interior Painting"
            pageUrl="https://popcorn-ceiling-removal-burlington.com/services/interior-painting/"
          />
        </section>

        {/* CTA */}
        <section className="rounded-3xl border border-red-600 bg-gradient-to-br from-red-700 to-red-500 p-8 text-white shadow-lg">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
                Ready for Burlington-bright interiors?
              </p>
              <h2 className="mt-1 text-3xl font-bold">
                Paint your home after popcorn removal.
              </h2>
              <p className="mt-2 text-sm text-white/80">
                Share photos, get a same-day estimate, and book a Level 5 prep + paint crew anywhere in Burlington.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={PHONE_HREF} className="btn-cta bg-white text-red-600">
                📞 {PHONE_NUMBER}
              </a>
              <Link href="/quote/" className="btn-cta bg-white text-red-600">
                Get my quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
