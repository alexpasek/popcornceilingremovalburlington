import Image from "next/image";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";

export const revalidate = 86400;

export const metadata = {
  title: "Popcorn Ceiling Removal Headon Forest | Burlington Smooth Crew",
  description:
    "Headon Forest Burlington popcorn ceiling removal with Level 5 skim coats, HEPA sanding, and bright paint-ready finishes. Fast quotes, WSIB, fully insured.",
  alternates: {
    canonical: "/services/popcorn-ceiling-removal/burlington/headon-forest/",
  },
  openGraph: {
    title: "Headon Forest Popcorn Ceiling Removal Burlington",
    description:
      "Dust-controlled popcorn scraping, encapsulation, and ceiling painting for Headon Forest colonials and townhomes. Same-week scheduling and spotless turnover.",
    url: "/services/popcorn-ceiling-removal/burlington/headon-forest/",
    type: "article",
  },
};

const heroHighlights = [
  {
    title: "Level 5 skim",
    text: "Feather every seam for the long sightlines inside Headon Forest great rooms.",
  },
  {
    title: "Dust control",
    text: "Poly tunnels, zipper doors, and HEPA scrubbers keep traffic open.",
  },
  {
    title: "Paint-ready",
    text: "Prime, stain block, and touch-ups so ceilings read bright the next day.",
  },
];

const processSteps = [
  {
    label: "01",
    title: "Protect & prep",
    text: "Hardwood runners, staircase wrap, and HVAC taping so those open-concept main floors stay livable.",
  },
  {
    label: "02",
    title: "Remove or encapsulate",
    text: "Scrape unpainted texture or skim over heavy paint before Level 5 coats and vacuum sanding.",
  },
  {
    label: "03",
    title: "Prime, inspect, spray",
    text: "High-build primer, raking-light punch list, and optional spray finish to match new pot lights.",
  },
];

const faqList = [
  {
    q: "Can you finish a Headon Forest main floor in two days?",
    a: "Yes. We stage crews to work zones in sequence—kitchen, family room, then foyer—so you can keep using bedrooms while we skim.",
  },
  {
    q: "Do you work around pot light electricians?",
    a: "We coordinate with lighting crews, cut new openings, and skim patches so fixtures install after primer.",
  },
  {
    q: "What if ceilings have water stains from skylights?",
    a: "We cut out damaged drywall, re-tape seams, skim Level 5, and seal with shellac primer so stains never telegraph.",
  },
];

const review = {
  text: "“Our two-story foyer and family room went from dingy popcorn to magazine-ready flat ceilings. Crew cleaned nightly and the house never felt like a construction zone.”",
  author: "— L. Mitchell, Headon Forest off Upper Middle Rd.",
};

const galleryProjects = [
  {
    src: "/photo/00005popcorn-ceiling-removal-burlington.JPG",
    alt: "Bright smooth ceiling finish in Headon Forest Burlington family room",
  },
  {
    src: "/photo/00014popcorn-ceiling-removal-burlington.JPG",
    alt: "Dust-controlled popcorn ceiling scraping in Burlington Headon Forest home",
  },
  {
    src: "/photo/00032popcorn-ceiling-removal-burlington.JPG",
    alt: "Freshly primed ceiling reflecting light in Headon Forest kitchen",
  },
  {
    src: "/photo/00045popcorn-ceiling-removal-burlington.JPG",
    alt: "Level 5 skim coat under raking light inside Headon Forest split-level",
  },
];

export default function HeadonForestPage() {
  return (
    <div className="bg-gradient-to-b from-slate-900/5 via-white to-slate-50">
      <div className="container-x py-12 space-y-16">
        {/* HERO */}
        <section className="rounded-[40px] bg-gradient-to-br from-[#25637c] via-[#1b3c4a] to-slate-900 text-white p-8 md:p-12 shadow-[0_25px_70px_rgba(17,30,39,0.45)]">
          <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] items-start">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
                Headon Forest • Popcorn Ceiling Removal Burlington
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Smooth ceilings and bright lighting drama for Headon Forest
              </h1>
              <p className="text-base md:text-lg text-white/85">
                Inspired by the clean, luminous look of boutique pot light sites
                like Pot Light Kings, we bring the same crisp visuals to your
                ceilings: dust-contained removal, Level 5 skim coats, and spray
                finishes that keep natural light bouncing across great rooms,
                stairwells, and kitchens north of Upper Middle Road.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
                <span className="inline-flex items-center gap-1 text-base font-semibold text-white">
                  ★★★★★ 4.9/5
                </span>
                <span>87 Burlington homeowner reviews</span>
                <span className="inline-flex items-center rounded-full border border-white/30 px-3 py-1">
                  WSIB & $2M liability
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {heroHighlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/30 bg-white/10 p-4 shadow-lg backdrop-blur"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-white/80">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={PHONE_HREF} className="btn-cta bg-white text-slate-900 hover:bg-amber-100">
                  📞 {PHONE_NUMBER}
                </a>
                <Link
                  href="/quote/"
                  className="btn-cta border border-white/60 text-white hover:bg-white/10"
                >
                  Book a walkthrough
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/30 bg-white/95 p-6 text-slate-900 shadow-2xl">
              <h2 className="text-2xl font-semibold text-slate-900">
                Share Headon Forest project photos
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Add ceiling height, painted vs. unpainted texture, and if pot
                lights or beams are in play. We reply same-day with a scoped
                quote and schedule options.
              </p>
              <QuoteForm />
            </div>
          </div>
        </section>

        {/* IMAGE / REVIEW */}
        <section className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-[0.3em] text-red-600">
              Local portfolio
            </p>
            <h2 className="text-3xl font-bold text-slate-900">
              Family room & foyer brightening in Headon Forest
            </h2>
            <p className="text-slate-700">
              We recently wrapped a two-story foyer off Walkers Line plus an
              adjoining family room. Popcorn came down, seams were stitched,
              then we skimmed under raking light before spraying ceiling white
              to align with new trim work. Containment kept the kitchen usable
              and the crew reset furniture nightly.
            </p>
            <ul className="space-y-2 text-slate-700">
              <li>• Level 5 skim across drywall joins & tray ceilings</li>
              <li>• HEPA sanding + negative air exhausting through garage</li>
              <li>• Pot-light layout coordination with electrician</li>
            </ul>
            <p className="italic text-slate-500">{review.text}</p>
            <p className="text-slate-600">{review.author}</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-slate-200 shadow-2xl">
            <Image
              src="/photo/00005popcorn-ceiling-removal-burlington.JPG"
              alt="Popcorn ceiling removal and smooth finish inside a Headon Forest Burlington family room"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </section>

        {/* GALLERY */}
        <section className="rounded-[32px] bg-[#25637c] text-white p-8 shadow-[0_25px_60px_rgba(19,44,57,0.4)]">
          <div className="flex flex-col gap-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/70">
              Bright, wet-look finishes
            </p>
            <h2 className="text-3xl font-bold">Recent Headon Forest ceilings</h2>
            <p className="text-white/80">
              Fresh skim coats, newly primed ceilings, and glossy, bright photos
              to match the aesthetic you loved on Pot Light Kings.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {galleryProjects.map((project, idx) => (
              <div
                key={project.alt}
                className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/20 shadow-2xl"
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-left text-sm font-semibold">
                  {project.alt}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-2xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold tracking-[0.3em] text-red-600">
                Headon Forest workflow
              </p>
              <h2 className="text-3xl font-bold text-slate-900">
                Popcorn removal plan tuned for Burlington colonials
              </h2>
            </div>
            <Link
              href="/our-process/"
              className="text-sm font-semibold text-red-600 hover:text-red-700"
            >
              View full process →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
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
        </section>

        {/* LOCAL SIGNALS + FAQ */}
        <section className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl">
            <p className="text-sm font-semibold tracking-[0.3em] text-red-600">
              Why Headon Forest homeowners choose us
            </p>
            <h2 className="text-3xl font-bold text-slate-900">Local signals</h2>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li>
                <strong>Upper Middle Rd. traffic:</strong> we stage trucks on
                side streets and keep containment closed during school drop-off
                windows.
              </li>
              <li>
                <strong>Vaulted great rooms:</strong> bring extra bakers
                scaffolds, 12-foot skids, and LED panels to chase shadows.
              </li>
              <li>
                <strong>Townhomes near Cleaver Ave.:</strong> compact negative
                air machines fit through garage entries, and we map daily clean
                checkpoints so neighbors aren&apos;t disrupted.
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl">
            <p className="text-sm font-semibold tracking-[0.3em] text-red-600">
              FAQ
            </p>
            <h2 className="text-3xl font-bold text-slate-900">
              Headon Forest popcorn removal questions
            </h2>
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
            <p className="text-sm uppercase tracking-[0.4em] text-white/70">
              Ready for smooth ceilings?
            </p>
            <h2 className="mt-2 text-3xl font-bold">
              Book your Headon Forest popcorn ceiling removal
            </h2>
            <p className="mt-2 text-white/80">
              Bedrooms finish in a day, full main floors in 2–3 days with Level
              5 skim, primer, and spotless handover.
            </p>
          </div>
          <div className="flex flex-col gap-3 min-w-[250px]">
            <a
              href={PHONE_HREF}
              className="btn-cta bg-white text-slate-900 hover:bg-slate-100"
            >
              📞 {PHONE_NUMBER}
            </a>
            <Link
              href="/quote/"
              className="btn-cta border border-white/40 text-white hover:bg-white/10"
            >
              Get a Headon Forest quote
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
