import Image from "next/image";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";

export const revalidate = 86400;

export const metadata = {
  title: "Popcorn Ceiling Removal Aldershot | Burlington Smooth Ceiling Crew",
  description:
    "Aldershot Burlington specialists for popcorn ceiling removal, Level 5 skim coat, and ceiling painting. Dust-controlled workflow, HEPA sanding, and fast quotes.",
  alternates: { canonical: "/services/popcorn-ceiling-removal/burlington/aldershot/" },
  openGraph: {
    title: "Popcorn Ceiling Removal Aldershot Burlington",
    description:
      "Dust-contained popcorn ceiling scraping, Level 5 skim, and bright paint-ready finishes for Aldershot homes and condos.",
    url: "/services/popcorn-ceiling-removal/burlington/aldershot/",
    type: "article",
  },
};

const heroHighlights = [
  { title: "Dust-contained", text: "Poly containment, floor & vent protection, HEPA scrubbers." },
  { title: "Level 5 skim", text: "Multiple passes & daylight inspection for a flat, modern look." },
  { title: "Paint-ready", text: "High-build primer + stain blocking for crisp ceiling whites." },
];

const processSteps = [
  {
    label: "01",
    title: "Prep & protection",
    text: "Furniture wrap, hardwood runners, taped vents, and zipper doors so traffic can continue through Aldershot split-levels.",
  },
  {
    label: "02",
    title: "Removal or encapsulation",
    text: "Test patch, scrape unpainted ceilings, or encapsulate heavy paint before Level 5 skim coats and vacuum-assisted sanding.",
  },
  {
    label: "03",
    title: "Prime, inspect, paint",
    text: "Stain-block primer, raking-light inspection, touch-ups, and optional spray finish so spaces read bright under bay windows.",
  },
];

const faqList = [
  {
    q: "How fast can you quote Aldershot ceilings?",
    a: "Photo estimates same day—send room photos and sizes, then we confirm scope in person before scheduling.",
  },
  {
    q: "Do you work around condos near Plains Rd.?",
    a: "Yes. We book elevators, protect corridors, and use quiet tools during condo quiet hours.",
  },
  {
    q: "What about water stains or pot-light patches?",
    a: "We repair drywall, stitch cracks, add new pot-light cutouts, and skim until seams disappear before priming.",
  },
];

const review = {
  text: "“Ceilings look brand new. They contained dust across our main floor and left everything spotless.”",
  author: "— M. Clarke, Aldershot",
};

export default function AldershotPage() {
  return (
    <div className="bg-gradient-to-b from-slate-900/5 via-white to-slate-50">
      <div className="container-x py-12 space-y-16">
        {/* HERO */}
        <section className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] items-start">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1 text-sm font-semibold text-red-700">
              Aldershot • Popcorn Ceiling Removal Burlington
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Popcorn Ceiling Removal in Aldershot, Burlington
            </h1>
            <p className="text-lg text-slate-700">
              Smooth, paint-ready ceilings for Aldershot bungalows, lakeside condos, and mid-century homes. We keep traffic flowing, control dust with HEPA extraction, and deliver Level 5 skim coats that stand up to long hallway sightlines.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {heroHighlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={PHONE_HREF} className="btn-cta">
                📞 {PHONE_NUMBER}
              </a>
              <Link href="/quote/" className="btn-cta bg-slate-900 hover:bg-slate-800">
                Get a Fast Quote
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-xl">
            <h2 className="text-2xl font-semibold text-slate-900">Send Project Photos</h2>
            <p className="mt-2 text-sm text-slate-600">
              Share room sizes, ceiling height, and if texture is painted—we&apos;ll reply with a Burlington estimate.
            </p>
            <QuoteForm />
          </div>
        </section>

        {/* IMAGE */}
        <section className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-[0.3em] text-red-600">Local portfolio</p>
            <h2 className="text-3xl font-bold text-slate-900">Bright ceilings for Aldershot living rooms</h2>
            <p className="text-slate-700">
              This Burlington project combined popcorn removal, pot-light patching, and ceiling repainting. We staged containment from the garage entry so the family could keep using the kitchen while we skimmed the great room.
            </p>
            <ul className="space-y-2 text-slate-700">
              <li>• Level 5 skim coat across drywall + plaster seams</li>
              <li>• Stain-block primer to seal former water spots</li>
              <li>• Spray-applied flat white for a seamless finish</li>
            </ul>
            <p className="italic text-slate-500">{review.text}</p>
            <p className="text-slate-600">{review.author}</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-slate-200 shadow-2xl">
            <Image
              src="/photo/00012popcorn-ceiling-removal-burlington.JPG"
              alt="Popcorn ceiling removal and smooth finish in Aldershot Burlington living room"
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
              <p className="text-sm font-semibold tracking-[0.3em] text-red-600">Aldershot workflow</p>
              <h2 className="text-3xl font-bold text-slate-900">Popcorn removal process built for Burlington homes</h2>
            </div>
            <Link href="/our-process/" className="text-sm font-semibold text-red-600 hover:text-red-700">
              View full process →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.label} className="rounded-2xl border border-slate-100 bg-gradient-to-b from-white to-slate-50 p-6 shadow-inner">
                <p className="text-3xl font-bold text-red-600">{step.label}</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* LOCAL SIGNALS + FAQ */}
        <section className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl">
            <p className="text-sm font-semibold tracking-[0.3em] text-red-600">Why Aldershot homeowners call us</p>
            <h2 className="text-3xl font-bold text-slate-900">Local signals</h2>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li>
                <strong>Near Maple Ave:</strong> tight schedules around commuter hours; we stage tools offsite and wrap daily so rooms return to service nightly.
              </li>
              <li>
                <strong>Plains Rd. condos:</strong> elevator bookings, corridor mats, and quiet HEPA sanders to meet condo board rules.
              </li>
              <li>
                <strong>Bungalows & split-levels:</strong> we mask stairwell railings, seal vents, and inspect from bay windows where light reveals every flaw.
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl">
            <p className="text-sm font-semibold tracking-[0.3em] text-red-600">FAQ</p>
            <h2 className="text-3xl font-bold text-slate-900">Popcorn removal questions</h2>
            <div className="mt-6 space-y-4">
              {faqList.map((item) => (
                <div key={item.q}>
                  <p className="font-semibold text-slate-900">{item.q}</p>
                  <p className="text-sm text-slate-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-[32px] border border-slate-900/10 bg-slate-900 text-white p-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-white/70">Ready for smooth ceilings?</p>
            <h2 className="mt-2 text-3xl font-bold">Book your Aldershot popcorn ceiling removal</h2>
            <p className="mt-2 text-white/80">
              We turn around bedrooms in 24h and full main floors in 2–3 days, including Level 5 skim, priming, and cleanup.
            </p>
          </div>
          <div className="flex flex-col gap-3 min-w-[250px]">
            <a href={PHONE_HREF} className="btn-cta bg-white text-slate-900 hover:bg-slate-100">
              Call {PHONE_NUMBER}
            </a>
            <Link href="/quote/" className="btn-cta bg-red-600 hover:bg-red-700">
              Send Photos
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
