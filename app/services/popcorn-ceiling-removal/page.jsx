import Link from "next/link";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";

export const revalidate = 86400;

export const metadata = {
  title: "Popcorn Ceiling Removal Burlington ON | #1 Rated 647-923-6784",
  description:
    "Top-rated popcorn ceiling removal Burlington. Level 5 smooth finish in 24h. Dust-controlled, HEPA sanding, 3-year warranty. Serving Aldershot, Millcroft, Tyandaga. Free quotes 647-923-6784.",
  alternates: { canonical: "/services/popcorn-ceiling-removal/" },
  openGraph: {
    title: "Popcorn Ceiling Removal Burlington ON | Level 5 Smooth 24h",
    description:
      "#1 Burlington popcorn ceiling removal. Dust-controlled Level 5 skim coat. Paint-ready 24h. HEPA dust control, WSIB insured. Free quote 647-923-6784.",
    url: "/services/popcorn-ceiling-removal/",
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
        name: "Popcorn Ceiling Removal Burlington",
        serviceType: [
          "Popcorn Ceiling Removal",
          "Ceiling Skim Coat Level 5",
          "Interior Painting",
          "Drywall Repair",
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
            name: "Is popcorn removal dust-controlled in Burlington?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We use plastic containment, floor & vent protection, HEPA vacuum sanding, and daily clean-ups so your Burlington home stays livable.",
            },
          },
          {
            "@type": "Question",
            name: "Do you deliver Level 5 smooth finish?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We skim-coat, feather seams, inspect under raking light, and re-touch for dead-flat ceilings ready for paint.",
            },
          },
          {
            "@type": "Question",
            name: "How fast can you quote a Burlington ceiling?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Same-day photo estimates by text or email. On-site visit locks final scope and schedule.",
            },
          },
          {
            "@type": "Question",
            name: "What if the popcorn is painted?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We test first. If scraping isn't safe, we encapsulate and skim to Level 5 for a smooth, uniform surface.",
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

const processSteps = [
  {
    step: "01",
    title: "Plan & Protect",
    summary:
      "Photo intake, scope review, and same-day scheduling. On-site we wrap floors, railings, vents and build containment so the house stays livable.",
    stat: "Poly containment + HEPA filtration",
  },
  {
    step: "02",
    title: "Smooth & Inspect",
    summary:
      "Scrape or encapsulate texture, stitch cracks, then apply Level 5 skim coats with vacuum-assisted sanding. We correct anything that flashes under daylight.",
    stat: "Level 5 skim + daylight inspection",
  },
  {
    step: "03",
    title: "Prime & Turnover",
    summary:
      "High-build primer, stain blocking if needed, and a detailed clean so ceilings are paint-ready within 24 hours. We review the finish with you before wrapping.",
    stat: "Paint-ready in 24 hours",
  },
];

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
              Burlington Specialists • Popcorn Ceiling Removal & Level 5 Skim
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Popcorn Ceiling Removal{" "}
              <span className="text-red-600">Burlington</span>
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Professional dust-controlled popcorn ceiling removal with Level 5
              smooth skim finishing. Serving Downtown Burlington, Aldershot,
              Millcroft, Tyandaga, Headon Forest and all Halton neighborhoods.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-red-500 flex-shrink-0" />
                <p className="text-slate-700">
                  <strong>Dust-controlled:</strong> Poly containment, HEPA
                  sanding, daily clean-ups
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-red-500 flex-shrink-0" />
                <p className="text-slate-700">
                  <strong>Level 5 finish:</strong> Skim-coat, feather,
                  raking-light inspection
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-red-500 flex-shrink-0" />
                <p className="text-slate-700">
                  <strong>Paint-ready in 24h:</strong> Prime, inspect, spotless
                  clean
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
                Burlington Ceiling Quote
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Fast estimate for popcorn removal, Level 5 skim & painting.
              </p>
              <form className="mt-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Ceiling Sq Ft
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 300"
                    className="mt-1 block w-full px-4 py-2 border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Project Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Painted? Water damage? Pot lights?"
                    className="mt-1 block w-full px-4 py-2 border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 shadow-lg transition"
                >
                  Send My Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BURLINGTON HOMEOWNERS CHOOSE US */}
      <section className="container-x py-12">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">
          Why Burlington Homeowners Choose Us
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">
              🏘️ Burlington Local
            </h3>
            <p className="mt-3 text-slate-700">
              We serve Downtown Burlington, Aldershot, Millcroft, Tyandaga,
              Headon Forest, Brant Hills and all neighborhoods in Halton Region.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">
              ✨ Level 5 Finish
            </h3>
            <p className="mt-3 text-slate-700">
              Dead-flat skim-coated ceilings inspected under raking light.
              Paint-ready in 24h for bedrooms and living rooms under 400 sq ft.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900">
              🛡️ Dust Control
            </h3>
            <p className="mt-3 text-slate-700">
              Poly containment, protected floors, HEPA vacuum sanding, vent
              masking, and daily clean-ups keep your home livable.
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
            Popcorn Ceiling Removal Portfolio
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Before & after transformations from Burlington neighborhoods. Level
            5 smooth finishes, paint-ready in 24h.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              location: "Downtown Burlington",
              service: "Popcorn Ceiling Removal",
              alt: "Popcorn ceiling removal Burlington Downtown - stucco texture removal Level 5 smooth finish before and after",
            },
            {
              location: "Aldershot",
              service: "Stucco Ceiling Removal",
              alt: "Stucco ceiling removal Burlington Aldershot - popcorn texture scraping dust-controlled HEPA sanding",
            },
            {
              location: "Millcroft",
              service: "Popcorn Ceiling Scraping",
              alt: "Popcorn ceiling scraping Burlington Millcroft - acoustic ceiling removal skim coat Level 5 finish",
            },
            {
              location: "Tyandaga",
              service: "Textured Ceiling Removal",
              alt: "Textured ceiling removal Burlington Tyandaga - popcorn stucco ceiling removal paint-ready smooth finish",
            },
          ].map((project, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={`/services/popcorn-ceiling-removal/${i + 1}.webp`}
                alt={project.alt}
                title={`${project.service} ${project.location} Burlington - Level 5 Smooth Finish`}
                className="w-full h-80 md:h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-xs uppercase tracking-wider text-red-400 font-semibold mb-1">
                  {project.location}
                </p>
                <p className="font-bold text-lg">
                  {project.service} Burlington
                </p>
                <p className="text-sm text-slate-200 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Dust-controlled removal • Level 5 skim coat • Paint-ready
                  finish
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-x py-12">
        <div className="rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-xl">
          <div className="flex flex-col gap-4 text-center">
            <p className="inline-flex items-center justify-center gap-2 self-center rounded-full bg-amber-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
              Burlington workflow
            </p>
            <h2 className="text-3xl font-bold text-slate-900">
              Our 24h Smooth Ceiling Process
            </h2>
            <p className="text-sm text-slate-600 max-w-3xl mx-auto">
              A clear, visual plan so you know exactly how we go from textured
              ceilings to Level 5 smooth within a day. Each phase is scheduled,
              photographed, and reviewed so you can follow along.
            </p>
          </div>

          <div className="relative mt-10">
            <div className="hidden md:block absolute top-1/2 left-12 right-12 h-px bg-gradient-to-r from-red-200 via-amber-200 to-red-200" />
            <div className="grid gap-6 md:grid-cols-3">
              {processSteps.map((step) => (
                <div
                  key={step.title}
                  className="relative rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white font-semibold text-lg shadow-lg">
                      {step.step}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Phase {step.step}
                      </p>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-700">{step.summary}</p>
                  <div className="mt-4 rounded-xl border border-red-100 bg-red-50/40 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-red-700">
                    {step.stat}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="text-sm text-slate-600">
              Daily SMS updates • Shared progress photos • Crew lead on-site
              start to finish
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={PHONE_HREF}
                className="btn-cta bg-red-600 text-white hover:bg-red-700"
              >
                📞 {PHONE_NUMBER}
              </a>
              <a
                href="/quote/"
                className="btn-cta border border-slate-200 text-red-600 hover:border-red-400"
              >
                Book my walkthrough
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BURLINGTON NEIGHBORHOODS */}
      <section className="container-x py-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          Popcorn Ceiling Removal in Burlington Neighborhoods
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
                Local popcorn ceiling removal, skim coat & painting
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LOCAL CONTENT */}
      <section className="container-x py-12">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Burlington & Aldershot Field Notes
          </h2>
          <div className="space-y-6 text-base leading-relaxed text-slate-700">
            <p>
              Burlington ceilings behave differently depending on how close you
              are to the lake. In Downtown, humidity from the waterfront
              saturates old plaster, so we run dehumidifiers overnight before
              priming and we stage our crews earlier in the morning to beat
              condo elevator rush hour. Tyandaga bungalows tend to have cedar
              beams that need paper masking, while Millcroft 1990s builds hide
              drywall seams under heavy knockdown texture. Documenting these
              patterns lets us quote accurately, set containment footprints fast,
              and keep traffic flowing even when families stay home during the
              project.
            </p>
            <p>
              Aldershot is our most requested pocket because homeowners there
              are juggling original stucco, crown profiles, and mid-century
              layouts that zigzag sightlines. When someone taps our{" "}
              <Link
                href="/services/popcorn-ceiling-removal/burlington/aldershot/"
                className="text-red-600 underline underline-offset-4"
              >
                Aldershot popcorn ceiling removal
              </Link>{" "}
              guide, they usually send photos showing painted texture hugging
              around curved hallways or low-slung beams. We reply with a markup
              that explains how we protect maple floors, disconnect century-old
              light boxes, and skim over patched plaster without flashing seams.
              Sharing these Aldershot-specific playbooks builds trust before we
              arrive and ensures the crew brings the right knives, dust walls,
              and six-foot ladders to maneuver those tight split-level stairs.
            </p>
            <p>
              Local insight also extends to logistics. In Brant Hills and Headon
              Forest we can stage our trailer right on the driveway and run
              vacuums through a window. In Aldershot&apos;s core, driveways are
              shorter, so we load compact negative-air units that squeeze
              through side-yard gates and we tape zipper doors to isolate the
              traffic zone between kitchen and back mudroom. When patios sit two
              steps below the main floor, we build a mini ramp so we are not
              scraping buckets across patio stone at six in the morning.
            </p>
            <p>
              Many Burlington homes are undergoing stacked renovations, so we
              coordinate with electricians handling pot lights or insulation
              crews re-blowing attic bays. In Millcroft we often remove popcorn
              while the homeowner waits on new cabinets, so we extend our
              containment over the kitchen boxes to stop overspray from landing
              on fresh shaker doors. In Aldershot, basements frequently have new
              egress windows, so we staple vent masks and keep dehumidifiers
              away from the trim paint that is still curing to avoid peeling
              corners during our sanding phase.
            </p>
            <p>
              Downtown condo runs require precise scheduling. Paletta
              Mansion-area towers limit booking windows to two hours for freight
              elevators, and many property managers insist on masonite along the
              entire lobby path. We preload our dollies with containment poles,
              HEPA sanders, and LED panel lights so we can roll everything
              upstairs in a single trip. Once inside, we create negative
              pressure by venting out a balcony slider, keep balcony doors
              latched to appease condo security, and log every clean-up photo so
              the concierge has documentation that hallways stayed spotless.
            </p>
            <p>
              The finish expectations inside Burlington dining rooms are high
              because natural light pours in from lake-facing bay windows. We
              use raking light at multiple angles and keep a detailed punch list
              in Notion with checkboxes for feathering around crown returns,
              tightening the joint along skylight wells, and touch-up sanding
              near pot light rings. Aldershot homes often have walnut built-ins
              or shiplap accent walls, so we cover furniture with breathable
              wraps and we vacuum every ledge before primer so dust doesn't fall
              onto freshly sprayed trim.
            </p>
            <p>
              A recent LaSalle Park project is a good example of how our
              Aldershot plans unfold. The homeowner submitted a request through
              our{" "}
              <Link
                href="/services/popcorn-ceiling-removal/burlington/aldershot/"
                className="text-red-600 underline underline-offset-4"
              >
                Aldershot smooth ceiling team
              </Link>{" "}
              form at 9 a.m., we replied with a same-day video call, and by
              evening she had a scope that listed scrape depth, skim passes,
              primer type, and optional hallway repaint. Because the ceilings
              had been painted twice, we shifted to an encapsulation skim method
              that saved her from demo noise. We still delivered a 24-hour
              turnaround by running two crews in staggered shifts and returning
              at 7 p.m. for the final vacuum.
            </p>
            <p>
              Our notes also cover smaller Aldershot detachments north of Plains
              Road where homeowners have rental suites downstairs. We schedule
              quiet sanding blocks during nap times, set up separate containment
              to keep tenants comfortable, and text picture updates so landlords
              can share progress with them. When there is only street parking,
              we bring a folding loading dock so we can unload HEPA vacuums
              without blocking bus stops. These little adjustments are the
              difference between a chaotic reno and a renovation that feels like
              a white-glove service.
            </p>
            <p>
              All of this local playbook content lives in the binder we bring to
              every meeting, and you can preview most of it online. Browse the{" "}
              <Link
                href="/services/popcorn-ceiling-removal/burlington/aldershot/"
                className="text-red-600 underline underline-offset-4"
              >
                Aldershot popcorn ceiling removal breakdown
              </Link>{" "}
              for neighborhood-specific FAQs, then compare it with our
              Burlington-wide plan above. When you&apos;re ready, send photos
              with square footage and ceiling height, and we will send back a
              day-by-day timeline that coordinates with your painters, movers,
              or kitchen deliveries. The more local data you share, the more
              precise we can be with prep, manpower, and cleanup.
            </p>
          </div>
        </div>
      </section>

      {/* LOCAL LINKS & SIGNALS */}
      <section className="container-x py-12">
        <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Burlington neighborhood routes & resources
          </h2>
          <p className="text-base text-slate-700">
            Google looks for tight topical clusters, so we built a Burlington-first link path that
            connects every neighborhood playbook with our main popcorn ceiling hub. Tap any area
            below to see street-specific logistics, photos, and project breakdowns, or jump to the
            supporting services we pair with smooth ceiling turnovers.
          </p>
          <div className="mt-6 space-y-5 text-slate-700">
            <p>
              <Link
                href="/services/popcorn-ceiling-removal/burlington/aldershot/"
                className="text-red-600 font-semibold underline underline-offset-4"
              >
                Aldershot popcorn ceiling removal
              </Link>{" "}
              covers LaSalle Park split-levels and condos off Plains Rd., with driveway staging tips
              for short lots. We reference it from every Halton quote so homeowners see photos of
              zipper doors, HEPA scrubbers, and how we coordinate with movers coming down Waterdown
              Rd.
            </p>
            <p>
              Renovating north of Upper Middle? Our{" "}
              <Link
                href="/services/popcorn-ceiling-removal/burlington/headon-forest/"
                className="text-red-600 font-semibold underline underline-offset-4"
              >
                Headon Forest guide
              </Link>{" "}
              focuses on vaulted great rooms off Walkers Line, stairs that need scaffold towers, and
              the bright wet-look photos inspired by Pot Light Kings. It links back here, plus to our{" "}
              <Link
                href="/services/interior-painting/"
                className="text-red-600 underline underline-offset-4"
              >
                Burlington ceiling painting
              </Link>{" "}
              page for homeowners booking colour-matched top coats.
            </p>
            <p>
              Millcroft, Tyandaga, and Appleby each have new subpages outlining driveway access,
              golf-course humidity, and condo board rules. Use{" "}
              <Link
                href="/services/popcorn-ceiling-removal/burlington/millcroft/"
                className="text-red-600 underline underline-offset-4"
              >
                Millcroft popcorn removal
              </Link>{" "}
              and{" "}
              <Link
                href="/services/popcorn-ceiling-removal/burlington/tyandaga/"
                className="text-red-600 underline underline-offset-4"
              >
                Tyandaga skim coat walkthrough
              </Link>{" "}
              to show how we keep golf-course mud out of foyers and run negative air through garage
              entries. Each post links back to{" "}
              <Link href="/services/drywall-installation/" className="text-red-600 underline">
                Burlington drywall repairs
              </Link>{" "}
              for larger crack stitching.
            </p>
            <p>
              Downtown condo requests tie into{" "}
              <Link
                href="/services/popcorn-ceiling-removal/burlington/downtown-burlington/"
                className="text-red-600 underline underline-offset-4"
              >
                our condo-ready workflow
              </Link>{" "}
              with elevator booking notes, while South Burlington leads get routed through{" "}
              <Link
                href="/services/popcorn-ceiling-removal/burlington/appleby/"
                className="text-red-600 underline underline-offset-4"
              >
                Appleby smooth ceiling
              </Link>{" "}
              to highlight Lakeview humidity prep. Internal links between these pages, plus this
              service hub, strengthen crawl depth and show Google the localized expertise your crew
              brings from Guelph Line to Burloak.
            </p>
          </div>
        </div>
      </section>

      {/* RAINBOW SEO TEMPLATE */}
      <section className="py-16 bg-slate-900">
        <div className="container-x space-y-8">
          <div className="text-center space-y-4">
            <p className="inline-flex rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.4em] text-white/80">
              Burlington rainbow template
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-amber-300 via-emerald-300 via-sky-300 to-violet-400">
                Popcorn ceiling removal Burlington SEO hub
              </span>
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto">
              A reusable block of Burlington-first copy you can drop anywhere—stacked with keywords,
              color-forward styling, and internal links to every neighbourhood.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4 text-white/80">
              <p>
                From downtown condos to The Orchard townhomes, Burlington homeowners search for{" "}
                <strong>popcorn ceiling removal Burlington</strong>,{" "}
                <strong>Level 5 skim Burlington</strong>, and{" "}
                <strong>dust free ceiling scraping Burlington</strong>. We answer every intent with
                internal links: visit{" "}
                <Link
                  href="/services/popcorn-ceiling-removal/burlington/tyandaga/"
                  className="underline decoration-pink-200"
                >
                  Tyandaga
                </Link>
                ,{" "}
                <Link
                  href="/services/popcorn-ceiling-removal/burlington/millcroft/"
                  className="underline decoration-amber-200"
                >
                  Millcroft
                </Link>
                ,{" "}
                <Link
                  href="/services/popcorn-ceiling-removal/burlington/orchard/"
                  className="underline decoration-emerald-200"
                >
                  The Orchard
                </Link>
                ,{" "}
                <Link
                  href="/services/popcorn-ceiling-removal/burlington/aldershot/"
                  className="underline decoration-sky-200"
                >
                  Aldershot
                </Link>{" "}
                or{" "}
                <Link
                  href="/services/popcorn-ceiling-removal/burlington/brant-hills/"
                  className="underline decoration-violet-200"
                >
                  Brant Hills
                </Link>
                . Each rainbow link tells search engines how our service footprint surrounds
                Burlington.
              </p>
              <p>
                Use this template for meta descriptions, landing sections, or social captions. Layer
                in supporting services like{" "}
                <Link href="/services/drywall-installation/" className="underline decoration-emerald-200">
                  drywall repairs
                </Link>{" "}
                and{" "}
                <Link href="/services/interior-painting/" className="underline decoration-rose-200">
                  ceiling painting
                </Link>{" "}
                so your topical authority beams across Google like a gradient.
              </p>
            </div>
            <div className="rounded-[32px] border border-white/15 bg-white/5 p-6 text-white/85 space-y-4">
              <h3 className="text-2xl font-semibold">Rainbow bullet recipe</h3>
              <ul className="space-y-3 text-sm">
                {[
                  "Add gradient text on the H2 to catch eyes.",
                  "Mention Burlington + popcorn ceiling removal every 60 words.",
                  "Link to at least three neighbourhood pages and two service pages.",
                  "Close with a call-to-action referencing PHONE_NUMBER or /quote/.",
                ].map((tip) => (
                  <li key={tip} className="flex gap-3">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-pink-400 via-emerald-300 to-violet-400 mt-2" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <a href={PHONE_HREF} className="btn-cta bg-white text-slate-900 hover:bg-slate-200">
                  📞 {PHONE_NUMBER}
                </a>
                <Link
                  href="/quote/"
                  className="btn-cta border border-white/50 text-white hover:bg-white/10"
                >
                  Get rainbow quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="container-x py-12">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">
              What's Included
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc pl-5">
              <li>Room isolation & floor protection</li>
              <li>Safe scrape or encapsulation</li>
              <li>Level 5 skim coat & HEPA sanding</li>
              <li>Stain-block primer</li>
              <li>Daily tidy-ups & final clean</li>
            </ul>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">
              Quality Controls
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc pl-5">
              <li>Raking-light inspection</li>
              <li>Feathered seams & true flats</li>
              <li>Surface readiness checks</li>
              <li>WSIB & $2M liability</li>
              <li>3-year workmanship warranty</li>
            </ul>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">
              Extras Available
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc pl-5">
              <li>Pot light installation</li>
              <li>Drywall repairs & patching</li>
              <li>Interior wall painting</li>
              <li>Wallpaper removal</li>
              <li>Colour consultation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          FAQ — Popcorn Ceiling Removal Burlington
        </h2>
        <div className="space-y-4">
          {[
            {
              q: "Can you finish a Burlington ceiling in 24 hours?",
              a: "Yes. Bedrooms and living rooms under 400 sq ft can be scraped, skimmed, sanded and primed within 24 hours with a two-person crew.",
            },
            {
              q: "Is the removal dust-controlled?",
              a: "Plastic containment, floor & vent protection, HEPA vacuum sanding, and daily clean-ups keep your Burlington home livable.",
            },
            {
              q: "What if the popcorn is painted?",
              a: "We test first. If scraping isn't safe, we encapsulate and apply a full Level 5 skim, then prime with stain-block.",
            },
            {
              q: "How fast can I get a quote?",
              a: "Same-day photo estimates by text or email. On-site visit locks final scope and schedule.",
            },
            {
              q: "Do you handle drywall repairs?",
              a: "Yes. Cracks, tape blisters, nail pops, and minor patches are repaired before we skim.",
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
                Ready for smooth ceilings?
              </p>
              <h2 className="mt-1 text-3xl font-bold">
                Schedule your Burlington ceiling removal today.
              </h2>
              <p className="mt-2 text-sm text-white/80">
                Fast quote, clear plan, paint-ready finish in 24h.
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
                Get free quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
