import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
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
    <div className="bg-stone-100 text-slate-900">
      <JsonLd />
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="/home/1.webp"
            alt="Smooth finished ceiling in a Burlington home"
            className="h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,.94),rgba(15,23,42,.78)_46%,rgba(15,23,42,.35))]" />
        </div>
        <div className="container-x relative grid min-h-[760px] gap-10 py-14 lg:grid-cols-[1fr_430px] lg:items-center lg:py-20">
          <div className="max-w-3xl">
            <p className="inline-flex items-center border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/80 backdrop-blur">
              Burlington crew • Popcorn Ceiling Removal & Level 5 Skim
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-white md:text-7xl">
              Smooth ceilings for Burlington homes in 24 hours.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
              Dust-controlled popcorn ceiling removal, drywall repairs and ceiling painting by a local insured crew. Fast quotes, tidy protection and a written warranty on every job.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={PHONE_HREF} className="inline-flex items-center justify-center bg-red-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-red-700">
                {PHONE_NUMBER}
              </a>
              <a href="/quote/" className="inline-flex items-center justify-center border border-white/35 bg-white px-6 py-3 font-semibold text-red-600 transition hover:bg-stone-100">
                Book a site visit
              </a>
              <span className="text-sm text-white/65">Halton Region • 8am–6pm, 7 days a week</span>
            </div>
            <div className="mt-10 grid max-w-4xl grid-cols-2 gap-px overflow-hidden border border-white/15 bg-white/15 md:grid-cols-4">
              {highlightStats.map((stat) => (
                <div key={stat.label} className="bg-slate-950/55 p-5 backdrop-blur">
                  <div className="text-2xl font-semibold text-white">{stat.value}</div>
                  <div className="mt-1 text-sm leading-5 text-white/68">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <aside className="border border-white/12 bg-white p-5 text-slate-900 shadow-2xl lg:p-6">
            <div className="grid grid-cols-3 gap-2">
              {["/home/2.webp", "/home/3.webp", "/home/4.webp"].map((src) => (
                <img key={src} src={src} alt="" className="h-24 w-full object-cover" />
              ))}
            </div>
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-600">
                Fast local estimate
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-950">
                Get my Burlington quote
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Send photos + ceiling sizes. We reply with a labour-only range and confirmation call.
              </p>
              <QuoteForm />
              <p className="mt-4 border-t border-slate-200 pt-4 text-xs leading-5 text-slate-500">
                By submitting you agree to a quick follow-up call/text to review scope.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="container-x grid gap-px bg-slate-200 md:grid-cols-4">
          {[
            "Same-day photo estimates & site visits.",
            "Level 5 skim, prime & daylight inspection.",
            "Poly containment + HEPA extraction dust control.",
            "WSIB + $2M liability coverage.",
          ].map((item) => (
            <div key={item} className="bg-white px-5 py-5 text-sm font-medium text-slate-700">
              <span className="mr-3 inline-block h-2 w-2 bg-red-600" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-stone-100 py-16 lg:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
              Popcorn ceiling removal · Burlington
            </p>
            <h2 className="max-w-xl text-4xl font-semibold leading-tight text-slate-950">
              Popcorn ceiling removal Burlington:real Burlington ceilings going Level 5.
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700">
              {videoSeoCopy.map((copy, idx) => (
                <p key={idx}>{copy}</p>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {videoHighlights.map((point) => (
                <div key={point} className="border-l-4 border-red-600 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm">
                  {point}
                </div>
              ))}
            </div>
            <div className="border border-slate-200 bg-slate-950 p-5 text-white">
              <p className="text-xs uppercase tracking-[0.22em] text-white/55">Neighbourhood note</p>
              <p className="mt-2 text-sm leading-6 text-white/82">
                Shot between Guelph Line and Upper Middle. Tyandaga, Headon Forest and Roseland get the same quick setup—crew arrives at 8 AM, ceilings prime-ready by dusk.
              </p>
            </div>
          </div>
          <div className="relative min-h-[560px] overflow-hidden bg-slate-950 shadow-2xl">
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
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="bg-white p-4 text-slate-950 shadow-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Real Burlington ceiling removal
                </p>
                <p className="mt-1 max-w-sm text-base font-semibold">
                  Protection stays down; ceilings go paint-ready within a day.
                </p>
              </div>
              <div className="bg-red-600 px-4 py-3 text-sm font-semibold text-white shadow-xl">
                3 rooms · 24 hours · Level 5 finish
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">Our 3-phase plan</p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight text-slate-950">
                Burlington-friendly process, zero surprises.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                Daily updates, schedule check-ins and a clean turnover each night so you can keep living in the space while we work.
              </p>
            </div>
            <div className="grid gap-0 border border-slate-200 md:grid-cols-3">
              {processSteps.map((step, idx) => (
                <article key={step.title} className="border-slate-200 p-6 md:border-l md:first:border-l-0">
                  <div className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                    Step {idx + 1}
                  </div>
                  <h3 className="mt-8 text-xl font-semibold text-slate-950">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-300">Burlington context</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight">
              What we notice on local ceilings
            </h2>
            <div className="mt-8 grid gap-5 text-base leading-7 text-white/76">
              {postReviewCopy.map((copy, idx) => (
                <p key={idx} className="border-l border-white/20 pl-5">{copy}</p>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 text-slate-900 shadow-2xl">
            <h3 className="text-xl font-semibold">Local quick facts</h3>
            <ul className="mt-5 divide-y divide-slate-200 text-sm leading-6 text-slate-700">
              <li className="py-4">Most Burlington two-storey foyers are 18 ft high—we bring scaffold and wrap stairs to protect new railings.</li>
              <li className="py-4">Condos on Lakeshore require elevator booking forms—we complete them for you and carry materials in sealed bins.</li>
              <li className="py-4">Many Brant Hills homes have previous pot-light patches; we skim entire runs so you don’t see telegraphing.</li>
            </ul>
            <div className="mt-5 bg-stone-100 p-4 text-xs leading-5 text-slate-600">
              Need a permit? Burlington building services confirms no permit is required for cosmetic popcorn removal, but we can coordinate if insulation or framing gets replaced.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-16 lg:py-24">
        <div className="container-x grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="bg-white p-8 shadow-sm lg:p-10">
            <h2 className="text-3xl font-semibold text-slate-950">Local SEO-rich copy (for Google + homeowners)</h2>
            <div className="mt-6 columns-1 gap-10 space-y-5 text-base leading-7 text-slate-700 lg:columns-2">
              {seoParagraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </article>
          <aside className="bg-slate-950 p-8 text-white shadow-sm lg:p-10">
            <h3 className="text-2xl font-semibold">Burlington neighbourhoods</h3>
            <p className="mt-3 text-sm leading-6 text-white/68">
              We work in condos, bungalows and custom builds across:
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-px bg-white/15 text-sm">
              {burlingtonAreas.map((area) => (
                <li key={area} className="bg-slate-950 px-3 py-3 text-white/82">
                  {area}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
              Pricing Guide & authority flow
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-slate-950">
              Help homeowners choose the right ceiling scope before they book.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-7 text-slate-700">
              <p>
                The new pricing guide explains what changes popcorn ceiling removal cost in Burlington, what each finish level includes, and when a lower-cost removal makes sense versus a more complete skim coat package.
              </p>
              <p>
                It supports the main service page by answering pre-quote questions around painted popcorn, light repairs, skim coating, dust control, and the finish standard homeowners should expect before they commit.
              </p>
            </div>
            <ul className="mt-7 space-y-3 text-sm text-slate-700">
              <li className="border-l-4 border-red-600 bg-stone-100 px-4 py-3">Dust control and HEPA-assisted work are framed as standard trust signals, not optional upsells.</li>
              <li className="border-l-4 border-red-600 bg-stone-100 px-4 py-3">Option 2 is positioned as the budget sweet spot, while Options 3 and 4 pre-qualify smoother or painted-ceiling projects.</li>
              <li className="border-l-4 border-red-600 bg-stone-100 px-4 py-3">Every article card below routes users back to the main popcorn ceiling removal page or the quote form.</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services/popcorn-ceiling-removal/" className="btn-cta">
                Main service page
              </Link>
              <Link href="/quote/" className="btn-cta border border-slate-300 bg-white text-slate-950 hover:bg-stone-100">
                Get a quote
              </Link>
            </div>
          </div>

          <div className="grid gap-5">
            {featuredGuides.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group grid gap-0 overflow-hidden border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:grid-cols-[220px_1fr]"
              >
                <img
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  className="h-52 w-full object-cover md:h-full"
                  loading="lazy"
                />
                <div className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-red-600">
                    {post.category}
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold leading-snug text-slate-950 transition group-hover:text-red-600">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
                  <div className="mt-5 flex items-center gap-3 text-sm text-slate-500">
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-16 lg:py-24">
        <div className="container-x grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="text-3xl font-semibold text-slate-950">Local resources</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {resourceLinks.map((link) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 text-sm text-slate-700 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-lg font-semibold text-slate-950">{link.title}</div>
                <p className="mt-3 leading-6 text-slate-600">{link.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-semibold text-slate-950">FAQ — Popcorn ceiling removal Burlington</h2>
          </div>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950">
                  {faq.q}
                </summary>
                <p className="mt-3 text-sm leading-6 text-slate-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white lg:py-24">
        <div className="container-x">
          <div className="grid gap-8 border border-white/15 p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/55">
                Ready when you are
              </p>
              <h2 className="mt-3 text-4xl font-semibold">
                Let’s schedule your Burlington ceiling makeover.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-white/68">
                Fast quote, clear start/finish plan, and paint-ready ceilings that brighten every room.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={PHONE_HREF} className="inline-flex items-center justify-center bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700">
                {PHONE_NUMBER}
              </a>
              <a href="/quote/" className="inline-flex items-center justify-center bg-white px-6 py-3 font-semibold text-red-600 transition hover:bg-stone-100">
                Get a fast quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
