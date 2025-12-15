import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";
import Link from "next/link";

export const metadata = {
  title: "Popcorn Ceiling Removal Process Burlington | Step-by-Step Guide",
  description:
    "See how our Burlington popcorn ceiling removal process works. Dust-controlled 3-phase system: prep & protect, remove & skim Level 5, prime & inspect. Paint-ready in 24h. Free quotes.",
  alternates: { canonical: "/our-process/" },
};

const processPhases = [
  {
    phase: "01",
    title: "Initial Contact & Estimate",
    duration: "Same Day",
    steps: [
      {
        icon: "📱",
        title: "Photo Estimate",
        desc: "Text or email photos of your ceilings with room dimensions. We reply within hours with a labour-only range.",
      },
      {
        icon: "🏠",
        title: "On-Site Visit",
        desc: "Burlington crew inspects ceiling condition, measures exact sq ft, checks for asbestos (pre-1990), and locks final quote.",
      },
      {
        icon: "📋",
        title: "Written Scope",
        desc: "Clear document outlining what's included, timeline, payment terms, and warranty. You approve before we schedule.",
      },
    ],
  },
  {
    phase: "02",
    title: "Prep & Protection",
    duration: "Day 1 Morning",
    steps: [
      {
        icon: "🛡️",
        title: "Room Isolation",
        desc: "Plastic containment walls, zipper doors, floor protection, furniture wraps, and vent masking keep dust contained.",
      },
      {
        icon: "🪜",
        title: "Safety Setup",
        desc: "Scaffold for high ceilings, stair railings wrapped, HEPA air scrubbers positioned, and work zone clearly marked.",
      },
      {
        icon: "✅",
        title: "Pre-Work Checklist",
        desc: "Walk-through with homeowner, confirm scope, answer questions, and share crew contact for daily updates.",
      },
    ],
  },
  {
    phase: "03",
    title: "Removal & Skim Coat",
    duration: "Day 1 Afternoon",
    steps: [
      {
        icon: "🔨",
        title: "Popcorn Removal",
        desc: "Safe scraping or encapsulation (if painted). Warm water mist for unpainted texture, HEPA vacuum collection.",
      },
      {
        icon: "🛠️",
        title: "Drywall Repairs",
        desc: "Fix cracks, tape blisters, nail pops, and water damage. Stitching for settlement cracks, mesh for larger repairs.",
      },
      {
        icon: "✨",
        title: "Level 5 Skim Coat",
        desc: "Full-surface skim, feather seams, HEPA-assisted sanding. We re-skim any areas that flash under raking light.",
      },
    ],
  },
  {
    phase: "04",
    title: "Prime & Inspect",
    duration: "Day 2 Morning",
    steps: [
      {
        icon: "🎨",
        title: "Stain-Block Primer",
        desc: "High-build primer covers repairs, blocks old stains, and creates uniform surface for paint. Two coats if needed.",
      },
      {
        icon: "🔍",
        title: "Raking-Light Inspection",
        desc: "Crew lead checks ceilings under angled light to spot any imperfections. We correct before final sign-off.",
      },
      {
        icon: "🧹",
        title: "Deep Clean & Turnover",
        desc: "HEPA vacuum floors, wipe surfaces, remove all protection, and review finish with you. Paint-ready guaranteed.",
      },
    ],
  },
];

const workflowFeatures = [
  {
    icon: "📸",
    title: "Daily Progress Photos",
    desc: "SMS updates with photos at end of each day so you see exactly what's been completed.",
  },
  {
    icon: "🎯",
    title: "Dedicated Crew Lead",
    desc: "Same supervisor from quote to completion. Direct phone line for questions anytime.",
  },
  {
    icon: "⏱️",
    title: "24h Paint-Ready",
    desc: "Bedrooms & living rooms under 400 sq ft go from popcorn to smooth primer in one day.",
  },
  {
    icon: "🛡️",
    title: "3-Year Warranty",
    desc: "Written workmanship guarantee covering cracks, peeling, or visible seams caused by our labour.",
  },
];

export default function Page() {
  return (
    <div className="bg-gradient-to-b from-slate-900/5 via-white to-slate-50">
      {/* HERO */}
      <section className="container-x py-12">
        <div className="text-center max-w-4xl mx-auto">
          <p className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1 text-sm font-semibold text-red-700 mb-4">
            Burlington Process • Dust-Controlled • Level 5 Finish
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Popcorn Ceiling Removal Process{" "}
            <span className="text-red-600">Burlington</span>
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Our proven 4-phase system takes Burlington ceilings from textured to
            Level 5 smooth in 24 hours. Here's exactly how we deliver
            dust-controlled, paint-ready results every time.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 shadow-lg transition"
            >
              📞 {PHONE_NUMBER}
            </a>
            <Link
              href="/quote/"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 shadow-lg transition"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS PHASES */}
      <section className="container-x py-12">
        <div className="space-y-12">
          {processPhases.map((phase, idx) => (
            <div
              key={phase.phase}
              className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-lg"
            >
              {/* Phase Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white font-bold text-2xl shadow-lg">
                    {phase.phase}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Phase {phase.phase}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                      {phase.title}
                    </h2>
                  </div>
                </div>
                <div className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
                  ⏱️ {phase.duration}
                </div>
              </div>

              {/* Steps Grid */}
              <div className="grid gap-6 md:grid-cols-3">
                {phase.steps.map((step, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-5 hover:shadow-md transition"
                  >
                    <div className="text-4xl mb-3">{step.icon}</div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-700">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WORKFLOW FEATURES */}
      <section className="container-x py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Why Burlington Homeowners Trust Our Process
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Clear communication, clean work, and modern finishes that last.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {workflowFeatures.map((feature, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="text-5xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-700">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BURLINGTON NEIGHBORHOODS */}
      <section className="container-x py-12">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-amber-50 to-slate-50 p-8 shadow-md">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Serving Burlington Neighborhoods
          </h2>
          <p className="text-slate-700 mb-6">
            Our proven process works perfectly in condos, bungalows, and
            two-storey homes across all Burlington areas.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {[
              "Downtown Burlington",
              "Aldershot",
              "Millcroft",
              "Tyandaga",
              "Headon Forest",
              "Brant Hills",
              "The Orchard",
              "Roseland",
              "Shoreacres",
              "Appleby",
            ].map((area) => (
              <div
                key={area}
                className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm text-center text-slate-700 hover:border-red-400 transition"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="container-x py-12">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Typical Burlington Project Timeline
          </h2>
          <div className="space-y-4">
            {[
              {
                time: "Day 0",
                event: "Photo estimate sent within hours",
                icon: "📱",
              },
              {
                time: "Day 1-2",
                event: "On-site visit, written quote confirmed",
                icon: "🏠",
              },
              {
                time: "Week 1",
                event: "Scheduled start date confirmed via SMS",
                icon: "📅",
              },
              {
                time: "Day 1 (8am)",
                event: "Crew arrives, protection setup complete",
                icon: "🛡️",
              },
              {
                time: "Day 1 (12pm)",
                event: "Popcorn removal + repairs underway",
                icon: "🔨",
              },
              {
                time: "Day 1 (5pm)",
                event: "Level 5 skim coat complete, daily tidy-up",
                icon: "✨",
              },
              {
                time: "Day 2 (9am)",
                event: "Primer applied, raking-light inspection",
                icon: "🎨",
              },
              {
                time: "Day 2 (2pm)",
                event: "Final clean, walk-through, paint-ready",
                icon: "✅",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 pb-4 border-b border-slate-200 last:border-0"
              >
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div className="flex-1">
                  <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
                    {item.time}
                  </p>
                  <p className="text-slate-900 font-medium">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          Process FAQ — Burlington Popcorn Ceiling Removal
        </h2>
        <div className="space-y-4">
          {[
            {
              q: "Can I stay in my Burlington home during removal?",
              a: "Yes. Our containment system keeps dust in the work zone. Most families stay home and continue daily routines.",
            },
            {
              q: "How long does a typical bedroom take?",
              a: "A 12×12 bedroom goes from popcorn to primed in 6-8 hours with a 2-person crew.",
            },
            {
              q: "What if the popcorn is painted?",
              a: "We test first. If scraping risks damage, we encapsulate with compound and skim to Level 5 for a smooth finish.",
            },
            {
              q: "Do you need to see the ceiling before quoting?",
              a: "Photos + measurements give us a labour-only range. On-site visit locks final price and schedule.",
            },
            {
              q: "What's included in the 3-year warranty?",
              a: "Covers cracks, peeling, or visible seams caused by our workmanship. Excludes settling or impact damage.",
            },
          ].map((faq) => (
            <details
              key={faq.q}
              className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm"
            >
              <summary className="cursor-pointer font-semibold text-slate-900">
                {faq.q}
              </summary>
              <p className="mt-3 text-sm text-slate-700">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-x py-12">
        <div className="rounded-3xl border border-red-600 bg-gradient-to-br from-red-700 to-red-500 p-8 text-white shadow-lg">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
                Ready to start?
              </p>
              <h2 className="mt-1 text-3xl font-bold">
                Let's schedule your Burlington ceiling transformation.
              </h2>
              <p className="mt-2 text-sm text-white/80">
                Fast quote, clear timeline, paint-ready finish in 24h.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center bg-white text-red-600 font-bold px-6 py-3 rounded-lg shadow-lg ring-1 ring-white/30 hover:translate-y-[-1px] transition-transform"
              >
                📞 {PHONE_NUMBER}
              </a>
              <Link
                href="/quote/"
                className="inline-flex items-center justify-center bg-white text-red-600 font-bold px-6 py-3 rounded-lg shadow-2xl ring-1 ring-red-600/10 hover:scale-[1.02] transition-transform"
              >
                Get free quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
