import Image from "next/image";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";

export const revalidate = 86400;

const SLUG = "/services/popcorn-ceiling-removal/burlington/aldershot/";
const SERVICE = "Popcorn Ceiling Removal";
const CITY = "Aldershot";
const REGION = "Burlington, ON";
const BUSINESS_NAME = "Popcorn Ceiling Removal Burlington";

export const metadata = {
  title: "Popcorn Ceiling Removal Aldershot | Level 5 Smooth Ceilings",
  description:
    "Aldershot (Burlington) popcorn & stipple ceiling removal, Level 5 skim coating, drywall repairs, and ceiling painting. Dust-controlled setup, HEPA sanding, fast photo quotes.",
  alternates: { canonical: SLUG },
  openGraph: {
    title: "Popcorn Ceiling Removal Aldershot Burlington | Level 5 Finish",
    description:
      "Dust-contained popcorn/stipple removal + Level 5 skim coat and paint-ready ceilings for Aldershot homes and condos.",
    url: SLUG,
    type: "website",
  },
  robots: { index: true, follow: true },
};

const heroHighlights = [
  {
    title: "Test patch first",
    text: "We confirm scrape vs encapsulate (painted vs unpainted) before we commit to a method.",
  },
  {
    title: "Dust-controlled",
    text: "Poly containment, vent sealing, floor protection, HEPA extraction + scrubbers.",
  },
  {
    title: "Level 5 finish",
    text: "Multiple skim passes + raking-light checks so hallways don’t show striping.",
  },
  {
    title: "Repairs included",
    text: "Cracks, seams, stains, and pot-light patches handled properly before paint.",
  },
];

const whatIncluded = [
  "Full floor + work-area protection",
  "Vent sealing + containment (zipper doors where needed)",
  "Removal or encapsulation (based on test patch)",
  "Skim coat system to a smooth finish",
  "Vacuum-assisted HEPA sanding",
  "Priming (stain-block where needed)",
  "Detailed cleanup + walkthrough",
];

const processSteps = [
  {
    label: "01",
    title: "Prep & protection",
    text: "We protect floors/walls, seal vents, set containment, and stage tools so your Aldershot home stays livable during the work.",
  },
  {
    label: "02",
    title: "Removal or encapsulation",
    text: "We do a test patch: scrape unpainted popcorn/stipple when possible, or encapsulate painted texture, then build a true smoothing system.",
  },
  {
    label: "03",
    title: "Skim, sand, prime",
    text: "Multiple skim passes, vacuum-assisted sanding with HEPA extraction, stain-blocking when needed, and raking-light inspection.",
  },
  {
    label: "04",
    title: "Finish paint + cleanup",
    text: "Optional ceiling painting (spray or roller), detailed cleanup, and a final walkthrough so the ceiling reads bright and flat.",
  },
];

const timelineCards = [
  {
    title: "Single rooms",
    text: "Often faster turnaround. Dry time still matters, but bedrooms and smaller rooms are usually the quickest wins.",
  },
  {
    title: "Open-concept main floors",
    text: "Typically longer due to area size, containment staging, and drying cycles across large continuous ceilings.",
  },
  {
    title: "Older homes / heavy repairs",
    text: "Extra time may be needed for patches, stains, cracks, or painted texture that requires encapsulation.",
  },
];

const commonRepairs = [
  "Ceiling cracks and movement lines (reinforced when needed)",
  "Old patch edges that telegraph under paint",
  "Nail pops, loose corner tape, seam ridges",
  "Water stains (sealed with stain-block primer before paint)",
  "Pot-light conversions and cutouts (clean edges + blended skim)",
];

const pricingFactors = [
  "Painted vs unpainted texture (painted often needs encapsulation)",
  "Ceiling height, stairwells, and access (vaults, split-levels)",
  "Repairs needed (cracks, stains, old seams, prior patches)",
  "Number of rooms / open concept areas (containment staging)",
  "Finish level (true Level 5) + painting scope",
];

const prepChecklist = [
  "Clear small items from shelves and countertops (we wrap larger pieces).",
  "Tell us if the ceiling was painted (or if you’re unsure).",
  "Point out stains, cracks, or old patches you want invisible.",
  "If you’re doing floors later, mention it—scope can sometimes be staged.",
  "Send photos + room sizes + ceiling height for the fastest accurate quote.",
];

const serviceAreas = [
  "Aldershot East & West",
  "Plains Rd. corridor condos",
  "LaSalle / Bayview area",
  "Waterdown border",
  "North Burlington routes",
];

const faqList = [
  {
    q: "How fast can you quote Aldershot ceilings?",
    a: "Same-day photo estimates when you send room photos + sizes. We confirm details on-site before we lock in the schedule.",
  },
  {
    q: "Do you remove stipple / stucco ceiling textures too?",
    a: "Yes—popcorn, stipple, and other ceiling textures. The method depends on whether it’s painted and how bonded it is.",
  },
  {
    q: "What if the popcorn ceiling is painted?",
    a: "Painted texture often won’t scrape cleanly. In those cases we encapsulate and skim coat to reach a flat, modern finish.",
  },
  {
    q: "How do you control dust in occupied homes?",
    a: "Containment (poly walls + zipper doors), sealed vents, floor runners, and HEPA extraction. We also clean daily so the home stays usable.",
  },
  {
    q: "Do you work around condos near Plains Rd.?",
    a: "Yes. We coordinate elevator bookings, protect corridors, and use quieter setups during condo quiet hours when required.",
  },
  {
    q: "Can you fix cracks, water stains, and pot-light patches?",
    a: "Yes. We repair drywall properly, reinforce where needed, and seal stains before paint so the finished ceiling stays uniform.",
  },
  {
    q: "How long does it take?",
    a: "Smaller rooms are usually quicker. Open main floors take longer due to size and drying cycles. We’ll give a clear timeline with your quote.",
  },
  {
    q: "Do you paint the ceiling after skim coating?",
    a: "We can. Painting is recommended for a clean final look—especially after priming and stain-blocking where needed.",
  },
  {
    q: "Will my ceiling be truly smooth (Level 5)?",
    a: "If you choose Level 5, we apply multiple skim passes and inspect in raking light to remove lines that show under bright windows and hallway sightlines.",
  },
  {
    q: "How do I get the most accurate quote?",
    a: "Send photos of each room, approximate sizes, ceiling height (8ft/9ft/vault), and mention if it’s painted, stained, or cracked.",
  },
  {
    q: "What paint sheen do you recommend for ceilings?",
    a: "Most homeowners choose flat/matte ceiling paint for the most uniform look. We’ll recommend the best option for your lighting.",
  },
  {
    q: "Do I need to leave the house during sanding?",
    a: "Usually no. With containment + HEPA extraction, most families stay home—especially if we’re working room-by-room.",
  },
];

const review = {
  text: "“Ceilings look brand new. They contained dust across our main floor and left everything spotless.”",
  author: "— M. Clarke, Aldershot",
};

function SEOJsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "{BASE_URL}";
  const brand = process.env.NEXT_PUBLIC_BRAND_NAME || BUSINESS_NAME;
  const phone = process.env.NEXT_PUBLIC_PHONE || PHONE_NUMBER;

  const url = `${baseUrl}${SLUG}`;

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Popcorn Ceiling Removal",
        item: `${baseUrl}/services/popcorn-ceiling-removal/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Burlington",
        item: `${baseUrl}/services/popcorn-ceiling-removal/burlington/`,
      },
      { "@type": "ListItem", position: 4, name: "Aldershot", item: url },
    ],
  };

  const service = {
    "@type": "Service",
    name: `${SERVICE} in ${CITY}, ${REGION}`,
    serviceType: "Popcorn / Stipple Ceiling Removal and Skim Coating",
    areaServed: [
      { "@type": "AdministrativeArea", name: "Aldershot" },
      { "@type": "City", name: "Burlington" },
      { "@type": "AdministrativeArea", name: "Halton Region" },
      { "@type": "AdministrativeArea", name: "Ontario" },
    ],
    provider: {
      "@type": "LocalBusiness",
      name: brand,
      telephone: phone,
      url: `${baseUrl}/`,
    },
    url,
  };

  const faq = {
    "@type": "FAQPage",
    mainEntity: faqList.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [breadcrumb, service, faq],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function AldershotPage() {
  return (
    <div className="bg-gradient-to-b from-slate-900/5 via-white to-slate-50">
      <SEOJsonLd />

      <div className="container-x py-12 space-y-16">
        {/* HERO */}
        <section className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] items-start">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1 text-sm font-semibold text-red-700">
              Aldershot • Burlington • Popcorn / Stipple Ceiling Removal
            </p>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Popcorn Ceiling Removal in Aldershot, Burlington
            </h1>

            <p className="text-lg text-slate-700">
              Smooth, paint-ready ceilings for Aldershot bungalows,
              split-levels, and Plains Rd. condos. We contain dust, run HEPA
              extraction, fix cracks and patches properly, and finish ceilings
              to a clean Level 5 look that holds up under long hallway
              sightlines and bright bay-window light.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {heroHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={PHONE_HREF} className="btn-cta">
                📞 {PHONE_NUMBER}
              </a>
              <Link
                href="/quote/"
                className="btn-cta bg-slate-900 hover:bg-slate-800"
              >
                Get a Fast Quote
              </Link>
              <Link
                href="/services/popcorn-ceiling-removal/burlington/"
                className="btn-cta bg-white border border-slate-200 text-slate-900 hover:bg-slate-50"
              >
                Burlington page →
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/80 p-6">
              <h2 className="text-xl font-semibold text-slate-900">
                What’s included
              </h2>
              <ul className="mt-3 grid gap-2 text-slate-700 sm:grid-cols-2">
                {whatIncluded.map((x) => (
                  <li key={x}>• {x}</li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-slate-600">
                Want the “done-done” finish? Add ceiling painting (spray/roller)
                and optional wall touch-ups for a fully refreshed room.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-xl">
            <h2 className="text-2xl font-semibold text-slate-900">
              Send Project Photos
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Share room sizes, ceiling height, and whether the texture is
              painted—we&apos;ll reply with a Burlington estimate.
            </p>
            <QuoteForm />
            <p className="mt-3 text-xs text-slate-500">
              Tip: Include one photo with lights on + one in daylight—those
              reveal texture and patch lines clearly.
            </p>
          </div>
        </section>

        {/* IMAGE / PORTFOLIO */}
        <section className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-[0.3em] text-red-600">
              Local portfolio
            </p>
            <h2 className="text-3xl font-bold text-slate-900">
              Bright ceilings for Aldershot living rooms
            </h2>
            <p className="text-slate-700">
              This Burlington-area project combined popcorn ceiling removal,
              pot-light patching, and ceiling repainting. We staged containment
              and kept the main traffic route clean so the family could still
              use the kitchen while we worked.
            </p>
            <ul className="space-y-2 text-slate-700">
              <li>• Popcorn / stipple ceiling removal + smooth finish</li>
              <li>• Crack + seam repairs blended into a Level 5 surface</li>
              <li>• Stain-block primer + flat white ceiling paint</li>
            </ul>
            <p className="italic text-slate-500">{review.text}</p>
            <p className="text-slate-600">{review.author}</p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-slate-200 shadow-2xl">
            <Image
              src="/photo/00012popcorn-ceiling-removal-burlington.JPG"
              alt="Popcorn ceiling removal and smooth Level 5 finish in Aldershot Burlington living room"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </section>

        {/* PROCESS */}
        <section className="rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-2xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold tracking-[0.3em] text-red-600">
                Aldershot workflow
              </p>
              <h2 className="text-3xl font-bold text-slate-900">
                Popcorn removal process built for Burlington homes
              </h2>
            </div>
            <Link
              href="/our-process/"
              className="text-sm font-semibold text-red-600 hover:text-red-700"
            >
              View full process →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.label}
                className="rounded-2xl border border-slate-100 bg-gradient-to-b from-white to-slate-50 p-6 shadow-inner"
              >
                <p className="text-3xl font-bold text-red-600">{step.label}</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Timeline (what to expect)
              </h3>
              <div className="mt-4 grid gap-3">
                {timelineCards.map((c) => (
                  <div
                    key={c.title}
                    className="rounded-2xl border border-slate-200 bg-white p-4"
                  >
                    <p className="font-semibold text-slate-900">{c.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{c.text}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm text-slate-600">
                We’ll give a clear schedule after the test patch and scope
                confirmation.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Common ceiling repairs we handle
              </h3>
              <ul className="mt-4 space-y-2 text-slate-700">
                {commonRepairs.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-slate-600">
                Point out problem spots during the quote—our goal is zero
                “shadow lines” after paint.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-slate-900">
              Prep checklist for homeowners
            </h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              {prepChecklist.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* PRICING FACTORS + SERVICE AREAS */}
        <section className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl">
            <p className="text-sm font-semibold tracking-[0.3em] text-red-600">
              Pricing clarity
            </p>
            <h2 className="text-3xl font-bold text-slate-900">
              What affects popcorn ceiling removal cost in Aldershot
            </h2>
            <p className="mt-3 text-slate-700">
              Every ceiling is different—especially in older homes where paint
              layers, patches, and lighting can change the approach. These are
              the main factors we use to price accurately:
            </p>
            <ul className="mt-5 space-y-2 text-slate-700">
              {pricingFactors.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/quote/"
                className="btn-cta bg-red-600 hover:bg-red-700"
              >
                Get a Photo Quote
              </Link>
              <a
                href={PHONE_HREF}
                className="btn-cta bg-white border border-slate-200 text-slate-900 hover:bg-slate-50"
              >
                Call {PHONE_NUMBER}
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl">
            <p className="text-sm font-semibold tracking-[0.3em] text-red-600">
              Service areas
            </p>
            <h2 className="text-3xl font-bold text-slate-900">
              Serving Aldershot + nearby Burlington areas
            </h2>
            <p className="mt-3 text-slate-700">
              We’re a Burlington crew and regularly work in Aldershot homes and
              condos. If you’re near these areas, we’re likely already on your
              route.
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2 text-slate-700">
              {serviceAreas.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="font-semibold text-slate-900">Related services</h3>
              <p className="mt-2 text-sm text-slate-600">
                Need more than ceilings? Bundle work to reduce downtime and keep
                the finish consistent across the space.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/services/drywall-installation/"
                  className="text-sm font-semibold text-red-600 hover:text-red-700"
                >
                  Drywall installation →
                </Link>
                <Link
                  href="/services/interior-painting/"
                  className="text-sm font-semibold text-red-600 hover:text-red-700"
                >
                  Interior painting →
                </Link>
                <Link
                  href="/services/wallpaper-removal/"
                  className="text-sm font-semibold text-red-600 hover:text-red-700"
                >
                  Wallpaper removal →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* LOCAL SIGNALS + FAQ */}
        <section className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl">
            <p className="text-sm font-semibold tracking-[0.3em] text-red-600">
              Why Aldershot homeowners call us
            </p>
            <h2 className="text-3xl font-bold text-slate-900">
              Local details that matter
            </h2>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li>
                <strong>Hallway sightlines:</strong> split-levels and long
                corridors show every ridge—Level 5 + raking-light checks prevent
                striping.
              </li>
              <li>
                <strong>Plains Rd. condos:</strong> elevator bookings, corridor
                protection, and quieter HEPA setups to align with condo rules.
              </li>
              <li>
                <strong>Bright windows:</strong> daylight reveals flaws—our
                finishing is built for high-contrast lighting.
              </li>
              <li>
                <strong>Clean daily resets:</strong> we wrap up each day so
                rooms return to service nightly whenever possible.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl">
            <p className="text-sm font-semibold tracking-[0.3em] text-red-600">
              FAQ
            </p>
            <h2 className="text-3xl font-bold text-slate-900">
              Popcorn ceiling removal questions
            </h2>
            <div className="mt-6 space-y-4">
              {faqList.map((item) => (
                <div
                  key={item.q}
                  className="rounded-2xl border border-slate-200 bg-white p-4"
                >
                  <p className="font-semibold text-slate-900">{item.q}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-[32px] border border-slate-900/10 bg-slate-900 text-white p-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-white/70">
              Ready for smooth ceilings?
            </p>
            <h2 className="mt-2 text-3xl font-bold">
              Book your Aldershot popcorn ceiling removal
            </h2>
            <p className="mt-2 text-white/80">
              Dust-controlled workflow, repairs done right, and a clean Level 5
              finish that looks great under daylight and pot lights. Send photos
              for a fast quote, or call to talk through scope.
            </p>
          </div>
          <div className="flex flex-col gap-3 min-w-[250px]">
            <a
              href={PHONE_HREF}
              className="btn-cta bg-white text-slate-900 hover:bg-slate-100"
            >
              Call {PHONE_NUMBER}
            </a>
            <Link
              href="/quote/"
              className="btn-cta bg-red-600 hover:bg-red-700"
            >
              Send Photos
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
