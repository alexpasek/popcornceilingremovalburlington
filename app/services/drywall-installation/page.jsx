import Link from "next/link";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";
import QuoteForm from "@/components/QuoteForm";

export const revalidate = 86400;

export const metadata = {
  title: "Drywall Installation Burlington ON | Professional Finishing 24h",
  description:
    "Expert drywall installation Burlington. Level 5 smooth finishing, taping, mudding, repairs. Dust-controlled, paint-ready. Serving Aldershot, Millcroft, Tyandaga. Free quotes 647-923-6784.",
  alternates: { canonical: "/services/drywall-installation/" },
  openGraph: {
    title: "Drywall Installation Burlington | Level 5 Finish Same Day",
    description:
      "Professional Burlington drywall installation & finishing. Level 5 smooth, dust-controlled, WSIB insured. Paint-ready in 24h. Free quote 647-923-6784.",
    url: "/services/drywall-installation/",
    type: "article",
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Drywall Installation Burlington",
        serviceType: [
          "Drywall Installation",
          "Drywall Finishing",
          "Taping & Mudding",
          "Level 5 Skim Coat",
          "Drywall Repairs",
        ],
        areaServed: [
          "Burlington",
          "Oakville",
          "Hamilton",
          "Milton",
          "Mississauga",
        ],
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
            name: "Do you finish drywall to Level 5 in Burlington?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We skim-coat, feather seams, inspect under raking light, and prime for dead-flat paint-ready walls and ceilings.",
            },
          },
          {
            "@type": "Question",
            name: "Is drywall installation dust-controlled?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Plastic containment, floor protection, HEPA vacuum sanding, and daily clean-ups keep your Burlington home livable during work.",
            },
          },
          {
            "@type": "Question",
            name: "How fast can you install drywall in Burlington?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Standard rooms can be hung, taped, mudded and primed within 2-3 days depending on size and drying time.",
            },
          },
          {
            "@type": "Question",
            name: "Do you repair existing drywall damage?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Holes, cracks, water damage, tape blisters—we patch, skim, and blend to match surrounding surfaces.",
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

export default function Page() {
  return (
    <div className="bg-gradient-to-b from-slate-900/5 via-white to-slate-50">
      <JsonLd />

      {/* HERO + CONTACT FORM */}
      <section className="container-x py-12">
        <div className="grid gap-8 lg:grid-cols-[1.5fr,1fr] items-start">
          {/* Left: Hero */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1 text-sm font-semibold text-red-700 mb-4">
              Burlington Specialists • Drywall Installation & Level 5 Finishing
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Drywall Installation{" "}
              <span className="text-red-600">Burlington</span>
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Professional drywall hanging, taping, mudding and Level 5 smooth finishing. 
              Serving Downtown Burlington, Aldershot, Millcroft, Tyandaga, Headon Forest 
              and all Halton neighborhoods with dust-controlled installation and paint-ready results.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-red-500 flex-shrink-0" />
                <p className="text-slate-700">
                  <strong>Professional hanging:</strong> Proper layout, seam planning, corner beads
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-red-500 flex-shrink-0" />
                <p className="text-slate-700">
                  <strong>Level 5 finish:</strong> Skim-coat, feather, raking-light inspection
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-red-500 flex-shrink-0" />
                <p className="text-slate-700">
                  <strong>Dust-controlled:</strong> Containment, HEPA sanding, daily clean-ups
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-red-500 flex-shrink-0" />
                <p className="text-slate-700">
                  <strong>3-year warranty:</strong> WSIB & $2M liability insured
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
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

          {/* Right: Contact Form */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white border-2 border-red-600 rounded-2xl p-6 shadow-xl">
              <h2 className="text-2xl font-bold text-slate-900">
                Burlington Drywall Quote
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Fast estimate for drywall installation, finishing & repairs.
              </p>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container-x py-12">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">
          Why Burlington Homeowners Choose Our Drywall Service
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">
              🏘️ Burlington Local
            </h3>
            <p className="mt-3 text-slate-700">
              Expert drywall installation in Downtown Burlington, Aldershot, Millcroft, 
              Tyandaga, Headon Forest and all Halton Region neighborhoods.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">
              ✨ Level 5 Finish
            </h3>
            <p className="mt-3 text-slate-700">
              Professional taping, mudding and skim-coating for dead-flat surfaces. 
              Inspected under raking light before priming.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">
              🛡️ Clean & Professional
            </h3>
            <p className="mt-3 text-slate-700">
              Dust containment, protected floors, HEPA sanding, daily clean-ups. 
              WSIB insured with 3-year workmanship warranty.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="container-x py-16">
        <div className="text-center mb-10">
          <p className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1 text-sm font-semibold text-red-700 mb-3">
            Recent Burlington Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Drywall Installation Portfolio
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Professional drywall installation from Burlington neighborhoods. Level 5 finishes, paint-ready results.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <img
              src="/services/drywall/1.webp"
              alt="Drywall installation Burlington Downtown - Level 5 smooth finish taping mudding professional"
              title="Drywall Installation Downtown Burlington"
              className="w-full h-80 md:h-96 object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-xs uppercase tracking-wider text-red-400 font-semibold mb-1">
                Downtown Burlington
              </p>
              <p className="font-bold text-lg">Drywall Installation Burlington</p>
              <p className="text-sm text-slate-200 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Professional installation • Level 5 finish • Paint-ready
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-x py-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Our Drywall Services in Burlington
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "🔨",
              title: "New Drywall Installation",
              desc: "Professional hanging with proper seam planning, corner beads, and fastening for renovations, additions, and basements.",
            },
            {
              icon: "✨",
              title: "Level 5 Finishing",
              desc: "Full-surface skim coat, feathered seams, HEPA sanding, and raking-light inspection for dead-flat paint-ready walls.",
            },
            {
              icon: "🛠️",
              title: "Drywall Repairs",
              desc: "Fix holes, cracks, water damage, tape blisters, nail pops. We patch, skim and blend to match surrounding areas.",
            },
            {
              icon: "🎨",
              title: "Taping & Mudding",
              desc: "Multiple coats applied with precision. Joints feathered, corners crisp, ready for primer and paint.",
            },
            {
              icon: "🏠",
              title: "Ceiling Drywall",
              desc: "Smooth or textured ceiling installation. Level 5 skim coating available for modern flat ceiling finishes.",
            },
            {
              icon: "💧",
              title: "Water Damage Repair",
              desc: "Remove damaged sections, treat mold, install new drywall, match texture, prime with stain-block, paint-ready.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-slate-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BURLINGTON NEIGHBORHOODS */}
      <section className="container-x py-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          Drywall Installation in Burlington Neighborhoods
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
          ].map((area) => (
            <div
              key={area}
              className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:border-red-400 transition"
            >
              <p className="font-semibold text-slate-900">{area}</p>
              <p className="text-sm text-slate-600 mt-1">
                Professional drywall installation & finishing
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-x py-12">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Our Drywall Installation Process
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Measure & Plan",
                desc: "Accurate measurements, seam layout planning, material list and timeline confirmed.",
              },
              {
                step: "02",
                title: "Install & Hang",
                desc: "Professional hanging with proper fastening, corner beads, and seam planning for best finish.",
              },
              {
                step: "03",
                title: "Tape & Mud",
                desc: "Multiple coats applied, feathered and sanded. Level 5 skim coat for smooth walls.",
              },
              {
                step: "04",
                title: "Prime & Inspect",
                desc: "Stain-block primer, raking-light inspection, final touch-ups, paint-ready turnover.",
              },
            ].map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white font-bold text-lg shadow-lg mb-3">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-700">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          FAQ — Drywall Installation Burlington
        </h2>
        <div className="space-y-4">
          {[
            {
              q: "Do you finish drywall to Level 5 in Burlington?",
              a: "Yes. We skim-coat entire surfaces, feather seams, inspect under raking light, and prime for dead-flat paint-ready results.",
            },
            {
              q: "Is drywall installation dust-controlled?",
              a: "Plastic containment, floor protection, HEPA vacuum sanding, and daily clean-ups keep your Burlington home livable.",
            },
            {
              q: "How fast can you install drywall?",
              a: "Standard rooms: hung in 1 day, taped & mudded over 2-3 days (drying time), primed and ready for paint.",
            },
            {
              q: "Do you repair existing drywall damage?",
              a: "Yes. Holes, cracks, water damage, tape blisters—we patch, skim and blend to match surrounding surfaces.",
            },
            {
              q: "How fast can I get a quote?",
              a: "Same-day photo estimates by text or email. On-site visit locks final scope and schedule.",
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
                Ready for professional drywall?
              </p>
              <h2 className="mt-1 text-3xl font-bold">
                Schedule your Burlington drywall installation today.
              </h2>
              <p className="mt-2 text-sm text-white/80">
                Fast quote, clean work, paint-ready finish.
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
