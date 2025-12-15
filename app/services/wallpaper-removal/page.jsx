// app/services/wallpaper-removal/page.jsx
import Link from "next/link";
import { CONTACT } from "@/app/config";
import { cities } from "@/data/cities";
import { ServiceCopy } from "@/components/LocalSEOCopy";

export const metadata = {
  title: "Wallpaper & Popcorn Removal Burlington | Glue-Free, Level 5 Smooth",
  description:
    "Burlington wallpaper removal and popcorn ceiling smoothing. Full adhesive wash, Level 5 skim, HEPA dust control and design-ready primer for modern interiors.",
};

const PAGE_URL =
  "https://wallpaper-final.pages.dev/services/wallpaper-removal/"; // set your custom domain when ready
const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";
const phoneNumber = (CONTACT && CONTACT.phoneNumber) || "(647) 923-6784";

const heroStats = [
  { label: "Rooms refreshed", value: "420+" },
  { label: "Condos in Burlington", value: "65+" },
  { label: "Popcorn + wallpaper", value: "1–2 days" },
  { label: "Finish level", value: "Level 5" },
];

const servicePillars = [
  {
    title: "Wallpaper removal + design-ready skim",
    copy:
      "Score, steam or enzyme-lift even vinyl/grasscloth papers, remove backing, and wash adhesive until the water runs clear so designer paints bond perfectly.",
    bullets: [
      "Glue wash (no flashing)",
      "Level 4/5 skim & HEPA sanding",
      "Stain-block primer for bold colour",
    ],
  },
  {
    title: "Popcorn ceiling removal pairing",
    copy:
      "Brighten ceilings while walls are open. We scrape or encapsulate texture, Level 5 skim, and leave ceilings paint-ready within 24h.",
    bullets: [
      "Containment + floor protection",
      "Raking-light inspection",
      "Optional ceiling paint finish",
    ],
  },
  {
    title: "Condo + custom-home workflow",
    copy:
      "Elevator bookings, corridor protection, quiet-hour sanding, and daily tidy-ups keep Burlington condos and custom builds tidy during the refresh.",
    bullets: [
      "Elevator + concierge coordination",
      "Daily SMS/photo updates",
      "WSIB + $2M liability",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Prep & protect",
    text:
      "Poly containment, floor & railing wrap, vent masking, and labeled hardware so everything returns exactly as found.",
  },
  {
    step: "02",
    title: "Lift & wash",
    text:
      "Score seams, steam or enzyme soften, remove facing/backing, then wash adhesive until the surface is bondable.",
  },
  {
    step: "03",
    title: "Skim & smooth",
    text:
      "Repair seams, Level 4/5 skim, vacuum-assisted sanding, and daylight inspection to catch telegraphing before primer.",
  },
  {
    step: "04",
    title: "Prime & finish",
    text:
      "High-build primer, stain blocking where needed, and optional paint or limewash so designers can install new palettes immediately.",
  },
];

const designNotes = [
  {
    title: "Neutral gallery walls",
    copy:
      "Glue-free skim coats take designer whites and gallery lighting without flashing seams—ideal for condo feature walls and main-floor art displays.",
  },
  {
    title: "Statement ceilings",
    copy:
      "Pair wallpaper removal with popcorn smoothing and satin ceiling paint so light reflects evenly across open-concept spaces.",
  },
  {
    title: "Texture swap",
    copy:
      "Replace dated paper with limewash or specialty plaster. We deliver a seamless canvas so premium finishes don’t telegraph old seams.",
  },
];

export default function Page() {
  const images = Array.from(
    { length: 6 },
    (_, i) => `/services/wallpaper-removal/${i + 1}.webp`
  );

  const topCities = [
    "toronto",
    "mississauga",
    "oakville",
    "burlington",
    "hamilton",
    "milton",
  ];
  const cityLinks = cities.filter((c) => topCities.includes(c.slug));

  return (
    <div className="bg-gradient-to-b from-slate-900/5 via-white to-slate-50">
      <div className="container-x py-12 space-y-16">
        {/* HERO */}
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="space-y-5">
            <p className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1 text-sm font-semibold text-red-700">
              Burlington • Wallpaper + Popcorn Removal
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Wallpaper removal & popcorn smoothing for Burlington interiors.
            </h1>
            <p className="text-lg text-slate-700">
              Adhesive-free walls and smooth ceilings ready for paint, limewash,
              or new designer papers. We prep Burlington homes and condos with
              Level 5 skim, HEPA dust control, and concierge-friendly workflows.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={phoneHref} className="btn-cta">
                📞 {phoneNumber}
              </a>
              <Link href="/quote/" className="btn-cta">
                Book a site visit
              </Link>
            </div>
          </div>
          <div className="rounded-[32px] border border-slate-200 bg-white/90 p-6 shadow-xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 p-4 text-center"
                >
                  <div className="text-2xl font-semibold text-slate-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Serving Downtown Burlington, Aldershot, Millcroft, Tyandaga,
              Headon Forest, Brant Hills, The Orchard, Appleby.
            </p>
          </div>
        </section>

        {/* SERVICE PILLARS */}
        <section className="grid gap-6 lg:grid-cols-3">
          {servicePillars.map((pillar) => (
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

        {/* GALLERY */}
        <section id="proof">
          <div className="flex flex-col gap-3 text-center mb-6">
            <p className="inline-flex items-center gap-2 self-center rounded-full bg-slate-900 text-white px-4 py-1 text-xs font-semibold uppercase tracking-wide">
              Burlington transformations
            </p>
            <h2 className="text-3xl font-bold text-slate-900">
              Wallpaper + popcorn removal before & afters
            </h2>
            <p className="text-sm text-slate-600 max-w-3xl mx-auto">
              Downtown condos, Aldershot living rooms, Millcroft foyers—glue-free
              walls and smooth ceilings ready for any palette.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, i) => (
              <div
                key={src}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 shadow-lg"
              >
                <img
                  src={src}
                  alt={`Burlington wallpaper removal project ${i + 1}`}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-xs uppercase tracking-wide text-amber-300">
                    {
                      [
                        "Downtown Burlington",
                        "Aldershot",
                        "Millcroft",
                        "Tyandaga",
                        "Headon Forest",
                        "Brant Hills",
                      ][i % 6]
                    }
                  </p>
                  <p className="text-lg font-semibold">
                    Wallpaper & popcorn removal
                  </p>
                  <p className="text-sm text-slate-100">
                    Adhesive wash · Level 5 skim · Prime & paint-ready
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section
          id="process"
          className="rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <p className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
              Visual process
            </p>
            <h2 className="text-3xl font-bold text-slate-900">
              How we go from dated paper to a smooth Burlington canvas
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-red-600 text-white flex items-center justify-center font-semibold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-slate-700">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DESIGN NOTES */}
        <section className="grid gap-6 lg:grid-cols-3">
          {designNotes.map((note) => (
            <article
              key={note.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {note.title}
              </h3>
              <p className="mt-3 text-sm text-slate-700">{note.copy}</p>
            </article>
          ))}
        </section>

        {/* SERVICE AREAS */}
        <section className="rounded-[32px] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Wallpaper + popcorn removal across Burlington & GTA
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Elevator-friendly workflow for condos and tidy setups for detached homes.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {cityLinks.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}/`}
                className="pill"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </section>

        {/* SEO COPY */}
        <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
          <ServiceCopy
            city="Burlington"
            service="Wallpaper Removal & Popcorn Smoothing"
            pageUrl={PAGE_URL}
          />
        </section>

        {/* CTA */}
        <section className="rounded-3xl border border-red-600 bg-gradient-to-br from-red-700 to-red-500 p-8 text-white shadow-lg">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
                Ready for a fresh Burlington palette?
              </p>
              <h2 className="mt-1 text-3xl font-bold">
                Book wallpaper + popcorn removal.
              </h2>
              <p className="mt-2 text-sm text-white/80">
                We’ll prep your space for new paint, limewash or designer wallcoverings—glue-free and dust-controlled.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={phoneHref} className="btn-cta bg-white text-red-600">
                📞 {phoneNumber}
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
