import Link from "next/link";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";

const services = [
  {
    slug: "popcorn-ceiling-removal",
    title: "Popcorn Ceiling Removal",
    description:
      "Dust-controlled scraping or encapsulation, Level 5 skim, and prime/paint-ready ceilings across Burlington homes and condos.",
    image: "/services/popcorn-ceiling-removal/1.webp",
    alt: "Popcorn ceiling removal Burlington Level 5 smooth finish",
    features: [
      "Level 5 skim & daylight inspection",
      "Paint-ready in 24 hours",
      "Pot-light + repair blending",
    ],
  },
  {
    slug: "drywall-installation",
    title: "Drywall Installation",
    description:
      "Professional hanging, taping, mudding, and repairs for renovations and additions. Feathered seams, corner beads, and flawless finishing.",
    image: "/services/drywall/1.webp",
    alt: "Drywall installation Burlington Level 5 painting finish",
    features: [
      "Proper layout + seam planning",
      "Level 5 finishing + primer",
      "Dust-controlled HEPA sanding",
    ],
  },
  {
    slug: "interior-painting",
    title: "Interior Painting",
    description:
      "Design-forward interiors with premium coatings, perfect tapelines, and coordinated ceiling/wall palettes after popcorn removal.",
    image: "/services/painting/1.webp",
    alt: "Interior painting Burlington smooth walls",
    features: [
      "Level 5 prep for walls + ceilings",
      "Premium trim + wall coatings",
      "Condo-friendly workflow",
    ],
  },
  {
    slug: "wallpaper-removal",
    title: "Wallpaper & Texture Removal",
    description:
      "Glue-free walls ready for paint or new designer papers. Adhesive wash, Level 4/5 skim, and optional popcorn smoothing.",
    image: "/services/wallpaper-removal/1.webp",
    alt: "Wallpaper removal Burlington glue wash paint ready",
    features: [
      "Score, soak, lift, wash",
      "Level 4/5 skim + primer",
      "Pair with popcorn removal",
    ],
  },
];

export const metadata = {
  title: "Services — Popcorn Ceiling Removal Burlington",
  description:
    "Burlington-focused services: popcorn ceiling removal, drywall installation, interior painting, and wallpaper removal. Level 5 prep, dust control, and tidy crew.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="bg-gradient-to-b from-slate-900/5 via-white to-slate-50">
      <div className="container-x py-12 space-y-12">
        <header className="text-center space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1 text-sm font-semibold text-red-700">
            Popcorn Ceiling Removal Burlington • Services
          </p>
          <h1 className="text-4xl font-bold text-slate-900">
            Smooth ceilings, Level 5 walls, and flawless paint.
          </h1>
          <p className="text-slate-600 max-w-3xl mx-auto">
            One Burlington crew delivering popcorn ceiling removal, drywall finishing, interior painting, and wallpaper removal with dust control and designer-friendly prep.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={PHONE_HREF} className="btn-cta">
              📞 {PHONE_NUMBER}
            </a>
            <Link href="/quote/" className="btn-cta">
              Get my quote
            </Link>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-slate-900">
                  {service.title}
                </h2>
                <p className="text-sm text-slate-700">{service.description}</p>
                <div className="rounded-2xl overflow-hidden border">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="h-56 w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <ul className="text-sm text-slate-700 list-disc pl-5">
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link href={`/services/${service.slug}`} className="btn-cta">
                    Learn more
                  </Link>
                  <Link href="/quote/" className="btn-cta">
                    Book now
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
