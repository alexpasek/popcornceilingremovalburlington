import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import ReviewScroller from "@/components/ReviewScroller";
import { posts } from "@/data/posts";
import { PHONE_HREF, PHONE_NUMBER } from "./config";

export const revalidate = 86400;

export const metadata = {
  title: "Popcorn Ceiling Removal Burlington | Smooth Ceilings in 24h",
  description:
    "Local Burlington crew for popcorn ceiling removal, Level 5 skim coating, drywall repairs and ceiling painting. Dust control, fast quotes and written warranty.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Popcorn Ceiling Removal Burlington — Level 5 Finish",
    description:
      "Burlington specialists for popcorn ceiling scraping, skim coat repairs, drywall finishing and ceiling painting. Photo quote in hours, paint-ready in 24h.",
    url: "/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const base =
    process.env.NEXT_PUBLIC_BASE_URL || "https://popcorn-ceiling-removal-burlington.com";
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${base}/#business`,
        name: "Popcorn Ceiling Removal Burlington",
        url: base,
        telephone: PHONE_NUMBER,
        areaServed: [
          "Burlington",
          "Oakville",
          "Hamilton",
          "Milton",
          "Mississauga",
        ],
        image: `${base}/og.webp`,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "3321 Mainway",
          addressLocality: "Burlington",
          addressRegion: "ON",
          postalCode: "L7M 1A6",
          addressCountry: "CA",
        },
        description:
          "Dust-controlled popcorn ceiling removal, Level 5 skim coat, drywall repair and ceiling painting for Burlington homes.",
      },
      {
        "@type": "Service",
        name: "Popcorn Ceiling Removal & Level 5 Skim Coat",
        serviceType: [
          "Popcorn Ceiling Removal",
          "Ceiling Skim Coating",
          "Drywall & Plaster Repairs",
          "Interior Painting",
        ],
        areaServed: "Burlington, Ontario",
        provider: { "@id": `${base}/#business` },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can you finish a typical Burlington ceiling in 24 hours?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Bedrooms and living rooms under 400 sq ft can be scraped, skimmed, sanded and primed within 24 hours with a two-person crew.",
            },
          },
          {
            "@type": "Question",
            name: "Do you handle painted popcorn or plaster?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We test a small area, score heavy paint and skim over plaster seams to keep the surface smooth before priming.",
            },
          },
          {
            "@type": "Question",
            name: "How do you control dust?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Poly containment, floor & vent protection, vacuum-assist sanding and HEPA air scrubbers keep Burlington homes livable during work.",
            },
          },
          {
            "@type": "Question",
            name: "What is the warranty?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Three-year workmanship warranty covering cracks, peeling or visible seams caused by our labour.",
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

const highlightStats = [
  { value: "580+", label: "Halton ceilings smoothed" },
  { value: "24h", label: "Bedrooms & living rooms paint-ready" },
  { value: "Level 5", label: "Skim coat and daylight check" },
  { value: "Solid Work", label: " local Burlington crew" },
];

const processSteps = [
  {
    title: "Prep & protection",
    text: "Furniture wrap, floor/rail coverings, vent masking and pressure-fit containment so dust stays put.",
  },
  {
    title: "Removal + skim coat",
    text: "Texture removal, repairs, Level 5 skim and vacuum-assisted sanding. We re-skim spots that flash under daylight.",
  },
  {
    title: "Prime, inspect, clean",
    text: "High-build primer, raking-light inspection, punch-list fixes and spotless clean-up ready for paint crews or ours.",
  },
];

const burlingtonAreas = [
  "Downtown Burlington",
  "Aldershot",
  "Tyandaga",
  "Brant Hills",
  "Headon Forest",
  "Millcroft",
  "The Orchard",
  "Tansley",
  "Roseland",
  "Shoreacres",
  "Elizabeth Gardens",
  "Mountainside",
  "Palmer",
  "Alton Village",
];

const resourceLinks = [
  {
    title: "Building permits & inspections",
    url: "https://www.burlington.ca/en/building-and-renovating/building-permits.aspx",
    desc: "City of Burlington guidelines for ceiling/drywall permits and inspections.",
  },
  {
    title: "Halton Waste Management",
    url: "https://www.halton.ca/for-residents/recycling-waste/halton-waste-management-site",
    desc: "Local disposal site info for texture or drywall debris, adhesives and primers.",
  },
  {
    title: "Local paint & supply shops",
    url: "https://www.benjaminmoore.com/en-ca/store-locator/10007338/burlington-paint-decorating",
    desc: "Benjamin Moore Burlington Paint & Decorating plus Sherwin-Williams on Fairview.",
  },
];

const faqs = [
  {
    q: "Can you start with just photos?",
    a: "Yes. Text us ceiling measurements + photos for a labour-only range. We confirm scope on-site before work begins.",
  },
  {
    q: "Do you work on evenings or weekends?",
    a: "We book daytime 8am–6pm but can stage multi-day projects so rooms go back into service nightly when requested.",
  },
  {
    q: "What about painted popcorn or plaster swirls?",
    a: "We score or skim over heavy paint, spray warm water where safe, then skim to Level 5 so plaster blends with drywall.",
  },
  {
    q: "Is asbestos testing required?",
    a: "If the ceiling predates the 1990s we recommend a lab test before disturbance. We can refer Burlington labs.",
  },
];

const seoParagraphs = [
  "Popcorn Ceiling Removal Burlington is a local crew focused on Halton Region ceilings. We prep rooms with plastic containment, protect floors and vents, and use HEPA extraction so your family can stay home during the project.",
  "Most Burlington bungalows and two-storey homes mix drywall and plaster. We skim both substrates to the same Level 5 finish so raking light down the hallway stays even, even if pot lights were recently added.",
  "Need more than scraping? We handle drywall board replacement, settlement crack stitching, framing adjustments, and stain blocking before paint to restore ceilings after water damage or renovations.",
  "Our team works across Aldershot, Tyandaga, Millcroft, Headon Forest, The Orchard, and downtown condos with elevator bookings. Expect a schedule-confirming text the day before, a written scope, and photo updates.",
];

const videoHighlights = [
  "HEPA vacuum sanding keeps rooms livable",
  "Level 5 skim coat blends drywall + plaster",
  "Raking-light inspection before we wrap",
  "Floor + furniture protection stays down until final clean",
];

const videoSeoCopy = [
  "Popcorn ceiling removal in Burlington starts with dust control: poly containment, floor wrap and vent masks so families in Aldershot or Millcroft can keep living at home.",
  "After scraping, we skim every seam to Level 5 so raking sunlight off Lake Ontario doesn’t flash old tape lines. The video shows that final skim and sanding pass.",
  "Once primed, ceilings are paint-ready within 24 hours, letting Burlington homeowners jump right into colour coats without calling another crew.",
];

const postReviewCopy = [
  "Heritage pockets in Roseland and Shoreacres often hide plaster crowns around beams—we skim these to the same sheen as newer drywall so sunlight off the lake doesn’t highlight seams.",
  "Tyandaga splits and Millcroft two-storeys usually have double-height foyers. We bring adjustable scaffold and cover railings so the work wraps in a day without scuffs.",
  "Downtown Burlington condos need elevator bookings and quiet hours. We stage material in bins, protect hallways, and finish ceilings in 1–2 visits to minimize board meetings and concierge check-ins.",
];

const featuredGuideSlugs = [
  "burlington-popcorn-ceiling-removal-pricing-guide",
  "painted-popcorn-ceilings-burlington-neighborhood-guide",
  "level-4-vs-level-5-ceilings-burlington-ontario",
];

export default function Page() {
  const featuredGuides = featuredGuideSlugs
    .map((slug) => posts.find((post) => post.slug === slug))
    .filter(Boolean);

  return (
    <div className="bg-gradient-to-b from-slate-900/5 via-white to-slate-50">
      <JsonLd />
      <div className="container-x py-12 space-y-16">
        {/* Hero + contact form */}
        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-start rounded-[32px] border border-red-100 bg-gradient-to-br from-rose-50 via-white to-amber-50/70 p-8 shadow-xl">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1 text-sm font-semibold text-red-700">
              Burlington crew • Popcorn Ceiling Removal & Level 5 Skim
            </p>
            <div>
              <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                Smooth ceilings for Burlington homes in 24 hours.
              </h1>
              <p className="mt-4 text-lg text-slate-700">
                Dust-controlled popcorn ceiling removal, drywall repairs and ceiling painting by a local insured crew. Fast quotes, tidy protection and a written warranty on every job.
              </p>
            </div>
            <ul className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-red-500" />
                Same-day photo estimates & site visits.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-red-500" />
                Level 5 skim, prime & daylight inspection.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-red-500" />
                Poly containment + HEPA extraction dust control.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-red-500" />
                WSIB + $2M liability coverage.
              </li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <a href={PHONE_HREF} className="btn-cta text-base">
                📞 {PHONE_NUMBER}
              </a>
              <a href="/quote/" className="btn-cta text-base">
                Book a site visit
              </a>
              <div className="text-sm text-slate-500">
                Halton Region • 8am–6pm, 7 days a week
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {highlightStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
                >
                  <div className="text-2xl font-semibold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-red-100 bg-white/90 p-6 shadow-2xl backdrop-blur">
            <h2 className="text-2xl font-semibold text-slate-900">
              Get my Burlington quote
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Send photos + ceiling sizes. We reply with a labour-only range and confirmation call.
            </p>
            <QuoteForm />
            <p className="mt-4 text-xs text-slate-500">
              By submitting you agree to a quick follow-up call/text to review scope.
            </p>
          </div>
        </section>

        {/* Video proof */}
        <section className="grid gap-8 lg:grid-cols-2 lg:items-stretch rounded-[32px] border border-slate-200 bg-white p-8 shadow-2xl">
          <div className="order-1 space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-100 to-amber-100 px-4 py-1 text-sm font-semibold text-amber-800">
              Popcorn ceiling removal · Burlington
            </p>
            <h2 className="text-3xl font-bold text-slate-900">
            Popcorn ceiling removal Burlington:real Burlington ceilings going Level 5.
            </h2>
            <div className="space-y-4 text-sm text-slate-700">
              {videoSeoCopy.map((copy, idx) => (
                <p key={idx}>{copy}</p>
              ))}
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              {videoHighlights.map((point) => (
                <li key={point} className="flex items-start gap-2 rounded-2xl bg-gradient-to-r from-rose-50 to-white px-4 py-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-red-500" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="rounded-2xl border border-slate-200 bg-slate-900/90 p-4 text-white shadow-lg">
              <p className="text-xs uppercase tracking-wide text-white/70">Neighbourhood note</p>
              <p className="mt-1 text-sm">
                Shot between Guelph Line and Upper Middle. Tyandaga, Headon Forest and Roseland get the same quick setup—crew arrives at 8 AM, ceilings prime-ready by dusk.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={PHONE_HREF} className="btn-cta border border-red-200 bg-white text-red-600">
                📞 {PHONE_NUMBER}
              </a>
              <a href="/quote/" className="btn-cta bg-gradient-to-r from-red-600 to-amber-500 text-white">
                Book my walkthrough
              </a>
            </div>
          </div>
          <div className="order-2 relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-900/90 shadow-2xl h-full min-h-[320px] max-h-[920px]">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/video/IMG_1470.mov"
              poster="/home/1.webp"
              autoPlay
              loop
              muted
              playsInline
              controls
            >
              Your browser does not support the video tag.
            </video>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
            <div className="absolute top-4 left-4 rounded-2xl bg-white/90 p-4 text-slate-900 shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Real Burlington ceiling removal
              </p>
              <p className="text-base font-semibold">
                Protection stays down; ceilings go paint-ready within a day.
              </p>
            </div>
            <div className="absolute bottom-4 right-4 rounded-2xl bg-gradient-to-br from-red-500 to-amber-400 p-4 text-sm font-semibold text-white shadow-xl">
              3 rooms · 24 hours · Level 5 finish
            </div>
          </div>
        </section>

        {/* Local proof after reviews */}
        <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-amber-50 to-slate-50 p-6 shadow-lg">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-red-600">Burlington context</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">What we notice on local ceilings</h2>
              <div className="mt-4 space-y-4 text-sm text-slate-700">
                {postReviewCopy.map((copy, idx) => (
                  <p key={idx}>{copy}</p>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-inner">
              <h3 className="text-lg font-semibold text-slate-900">Local quick facts</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-red-500" />
                  Most Burlington two-storey foyers are 18 ft high—we bring scaffold and wrap stairs to protect new railings.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-red-500" />
                  Condos on Lakeshore require elevator booking forms—we complete them for you and carry materials in sealed bins.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-red-500" />
                  Many Brant Hills homes have previous pot-light patches; we skim entire runs so you don’t see telegraphing.
                </li>
              </ul>
              <div className="mt-4 rounded-2xl border border-red-100 bg-gradient-to-r from-rose-50 to-white p-4 text-xs text-slate-600">
                Need a permit? Burlington building services confirms no permit is required for cosmetic popcorn removal, but we can coordinate if insulation or framing gets replaced.
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-amber-50 to-slate-50 p-8 shadow-lg">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
                Our 3-phase plan
              </p>
              <h2 className="text-3xl font-bold text-slate-900">
                Burlington-friendly process, zero surprises.
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-xl">
              Daily updates, schedule check-ins and a clean turnover each night so you can keep living in the space while we work.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {processSteps.map((step, idx) => (
              <article key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-inner">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Step {idx + 1}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* SEO copy & neighbourhood grid */}
        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-md">
            <h2 className="text-2xl font-bold text-slate-900">Local SEO-rich copy (for Google + homeowners)</h2>
            <div className="mt-4 space-y-4 text-sm text-slate-700">
              {seoParagraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-amber-50/60 p-6 shadow-md">
            <h3 className="text-xl font-semibold text-slate-900">Burlington neighbourhoods</h3>
            <p className="mt-2 text-sm text-slate-600">
              We work in condos, bungalows and custom builds across:
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-700">
              {burlingtonAreas.map((area) => (
                <li key={area} className="rounded-full bg-slate-100 px-3 py-1">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-rose-50/40 to-amber-50/70 p-6 shadow-lg">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
                Pricing Guide & authority flow
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Help homeowners choose the right ceiling scope before they book.
              </h2>
              <p className="mt-4 text-sm text-slate-700">
                The new pricing guide explains what changes popcorn ceiling removal cost in Burlington, what each finish level includes, and when a lower-cost removal makes sense versus a more complete skim coat package.
              </p>
              <p className="mt-4 text-sm text-slate-700">
                It supports the main service page by answering pre-quote questions around painted popcorn, light repairs, skim coating, dust control, and the finish standard homeowners should expect before they commit.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-3 rounded-2xl bg-white/80 px-4 py-3 shadow-sm">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-red-500" />
                  Dust control and HEPA-assisted work are framed as standard trust signals, not optional upsells.
                </li>
                <li className="flex items-start gap-3 rounded-2xl bg-white/80 px-4 py-3 shadow-sm">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-red-500" />
                  Option 2 is positioned as the budget sweet spot, while Options 3 and 4 pre-qualify smoother or painted-ceiling projects.
                </li>
                <li className="flex items-start gap-3 rounded-2xl bg-white/80 px-4 py-3 shadow-sm">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-red-500" />
                  Every article card below routes users back to the main popcorn ceiling removal page or the quote form.
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/services/popcorn-ceiling-removal/"
                  className="btn-cta bg-gradient-to-r from-red-600 to-red-500 text-white"
                >
                  Main service page
                </Link>
                <Link
                  href="/quote/"
                  className="btn-cta border border-red-200 bg-white text-red-600"
                >
                  Get a quote
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              {featuredGuides.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  className="group rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-red-300 hover:shadow-lg"
                >
                  <div className="flex flex-col gap-4 md:flex-row">
                    <img
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      className="h-32 w-full rounded-2xl object-cover md:w-44"
                      loading="lazy"
                    />
                    <div className="flex-1">
                      <div className="text-xs font-semibold uppercase tracking-wide text-red-600">
                        {post.category}
                      </div>
                      <h3 className="mt-2 text-xl font-semibold text-slate-900 transition group-hover:text-red-600">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-md">
          <h2 className="text-2xl font-bold text-slate-900">Local resources</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {resourceLinks.map((link) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-100 p-5 text-sm text-slate-700 transition hover:border-red-400"
              >
                <div className="text-base font-semibold text-slate-900">{link.title}</div>
                <p className="mt-2 text-sm text-slate-600">{link.desc}</p>
              </a>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-amber-50/70 p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900">FAQ — Popcorn ceiling removal Burlington</h2>
          <div className="mt-4 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <summary className="cursor-pointer text-lg font-semibold text-slate-900">
                  {faq.q}
                </summary>
                <p className="mt-2 text-sm text-slate-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="rounded-3xl border border-red-600 bg-gradient-to-br from-red-700 to-red-500 p-8 text-white shadow-lg">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
                Ready when you are
              </p>
              <h2 className="mt-1 text-3xl font-bold">
                Let’s schedule your Burlington ceiling makeover.
              </h2>
              <p className="mt-2 text-sm text-white/80 max-w-xl">
                Fast quote, clear start/finish plan, and paint-ready ceilings that brighten every room.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center bg-white text-red-600 font-bold px-6 py-3 rounded-lg shadow-lg ring-1 ring-white/30 hover:translate-y-[-1px] transition-transform"
              >
                📞 {PHONE_NUMBER}
              </a>
              <a
                href="/quote/"
                className="inline-flex items-center justify-center bg-white text-red-600 font-bold px-6 py-3 rounded-lg shadow-2xl ring-1 ring-red-600/10 hover:scale-[1.02] transition-transform"
              >
                Get a fast quote
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
