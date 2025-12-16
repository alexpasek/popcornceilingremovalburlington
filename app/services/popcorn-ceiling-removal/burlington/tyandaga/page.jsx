// filepath: /Users/alex/Projects/popcorn-ceiling-removal-burlington/app/services/popcorn-ceiling-removal/burlington/tyandaga/page.jsx
import Link from "next/link";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";
import QuoteForm from "@/components/QuoteForm";

export const revalidate = 86400;

export const metadata = {
  title: "Popcorn Ceiling Removal Tyandaga Burlington | Modern Smooth Finishes",
  description:
    "Premium popcorn ceiling removal in Tyandaga, Burlington. Level 5 smooth finishes for modern homes. Dust-controlled, paint-ready in 24h. Free quotes 647-923-6784.",
  alternates: { canonical: "/services/popcorn-ceiling-removal/burlington/tyandaga/" },
  openGraph: {
    title: "Popcorn Ceiling Removal Tyandaga | Burlington's Premium Service",
    description:
      "Transform your Tyandaga home with professional popcorn ceiling removal. Level 5 smooth finish, dust-controlled, WSIB insured. Modern ceilings in 24h.",
    url: "/services/popcorn-ceiling-removal/burlington/tyandaga/",
    type: "article",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <div className="relative min-h-screen bg-slate-50">
      {/* HERO SECTION - Minimalist Architecture Style */}
      <section className="relative h-[85vh] overflow-hidden bg-slate-900">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/services/popcorn-ceiling-removal/1.webp"
            alt="Modern ceiling in Tyandaga Burlington home"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80" />
        </div>

        {/* Preview Badge */}
        <div className="absolute top-8 right-8 z-20">
          <div className="bg-white/90 backdrop-blur-sm px-6 py-2 text-sm text-slate-900 font-medium border border-slate-200">
            Preview of Tyandaga portfolio
          </div>
        </div>

        {/* Hero Content */}
        <div className="container-x relative h-full flex items-center justify-center z-10">
            <div className="text-center text-white max-w-5xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-amber-300 to-sky-400">
              POPCORN
              <br />
              <span className="text-white/90">CEILING REMOVAL</span><br/>
              <span className="text-white/90">BURLINGTON</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-violet-300">
              Creating spaces that inspire through thoughtful design and
              uncompromising quality
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
          <div className="flex flex-col items-center text-white/60 text-xs uppercase tracking-widest">
            <span className="mb-2" style={{ writingMode: "vertical-rl" }}>
              Scroll
            </span>
            <div className="w-px h-16 bg-white/30" />
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-x max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-slate-500 mb-4">
                Tyandaga, Burlington
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                Popcorn Ceiling Removal
                <br />
                <span className="text-slate-600">Modern Finishes</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Transform your Tyandaga home with our professional{" "}
                <strong>popcorn ceiling removal</strong> service. We specialize
                in creating perfectly smooth, modern ceilings that elevate your
                living spaces.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our dust-controlled process ensures your home remains clean
                throughout the transformation. Level 5 smooth finishes,
                paint-ready in 24 hours.
              </p>
            </div>
            <div>
              <div className="bg-slate-900 text-white p-8 lg:p-12">
                <h3 className="text-2xl font-bold mb-6">
                  Tyandaga Quick Quote
                </h3>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID - Minimalist */}
      <section className="py-20 bg-slate-50">
        <div className="container-x">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-slate-500 mb-4">
              Services
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              What We Do
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Popcorn Removal",
                desc: "Safe removal of textured ceilings with complete dust control and containment systems.",
              },
              {
                title: "Level 5 Smooth",
                desc: "Professional skim coating for perfectly flat, modern ceiling surfaces ready for paint.",
              },
              {
                title: "Ceiling Painting",
                desc: "Premium paint finishes with sharp lines and flawless coverage throughout your home.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group bg-white p-8 border border-slate-200 hover:border-transparent transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-pink-200 via-amber-200 to-sky-200" />
                <div className="relative text-6xl font-bold text-slate-200 mb-4">
                  0{i + 1}
                </div>
                <h3 className="relative text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="relative text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK SECTION - Project Showcase */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-x">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-slate-500 mb-4">
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Recent Tyandaga Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-2 max-w-7xl mx-auto">
            {[
              {
                title: "Tyandaga Estate Home",
                type: "Full Home Ceiling Removal",
                alt: "Popcorn ceiling removal Tyandaga Burlington estate home - Level 5 smooth finish",
              },
              {
                title: "Modern Family Home",
                type: "Living & Dining Ceilings",
                alt: "Tyandaga Burlington popcorn ceiling removal - modern family home smooth ceilings",
              },
              {
                title: "Contemporary Interior",
                type: "Open Concept Smoothing",
                alt: "Popcorn ceiling removal Tyandaga Burlington - contemporary open concept home",
              },
              {
                title: "Luxury Renovation",
                type: "Master Suite Transformation",
                alt: "Tyandaga Burlington luxury home popcorn ceiling removal - master bedroom smooth ceiling",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="group relative overflow-hidden aspect-[4/3] bg-slate-200"
              >
                <img
                  src={`/services/popcorn-ceiling-removal/${i + 1}.webp`}
                  alt={project.alt}
                  title={`${project.type} ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-amber-500/0 to-sky-500/0 group-hover:from-pink-500/40 group-hover:via-amber-500/40 group-hover:to-sky-500/40 transition-all duration-300" />
                <div className="absolute inset-0 flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white">
                    <p className="text-sm uppercase tracking-wider text-white/80 mb-2">
                      {project.type}
                    </p>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO CONTENT SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="container-x max-w-5xl">
          <div className="bg-white p-12 border border-slate-200">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Expert Popcorn Ceiling Removal in Tyandaga, Burlington
            </h2>

            <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
              <p>
                As Tyandaga's premier <strong>popcorn ceiling removal</strong>{" "}
                specialists, we bring modern elegance to Burlington's most
                distinguished neighborhood. Our team understands the high
                standards Tyandaga homeowners expect, and we deliver flawless{" "}
                <Link
                  href="/services/popcorn-ceiling-removal/"
                  className="text-slate-900 hover:underline font-semibold"
                >
                  popcorn ceiling removal services
                </Link>{" "}
                that transform your home's interior.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Professional Popcorn Ceiling Removal Tyandaga Residents Trust
              </h3>
              <p>
                Our <strong>Tyandaga popcorn ceiling removal</strong> service
                combines advanced techniques with meticulous attention to
                detail. We specialize in <strong>stucco ceiling removal</strong>
                , <strong>acoustic ceiling removal</strong>, and{" "}
                <strong>textured ceiling removal</strong> for homes throughout
                the Tyandaga area. Every project includes:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Dust-controlled popcorn ceiling removal</strong> with
                  HEPA filtration systems
                </li>
                <li>
                  <strong>Level 5 skim coating</strong> for perfectly smooth,
                  modern finishes
                </li>
                <li>
                  <strong>Ceiling texture removal</strong> and complete surface
                  preparation
                </li>
                <li>
                  <strong>Premium priming</strong> for paint-ready ceilings in
                  24 hours
                </li>
                <li>
                  <strong>Complete clean-up</strong> leaving your Tyandaga home
                  spotless
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Why Tyandaga Homeowners Choose Our Ceiling Removal Service
              </h3>
              <p>
                Tyandaga is known for its beautiful homes and discerning
                homeowners who appreciate quality craftsmanship. Our{" "}
                <strong>popcorn ceiling removal Burlington</strong> team has
                earned the trust of Tyandaga residents through consistent
                excellence, transparent pricing, and respect for your property.
                We also provide comprehensive
                <Link
                  href="/services/drywall-installation/"
                  className="text-slate-900 hover:underline font-semibold"
                >
                  {" "}
                  drywall finishing services
                </Link>{" "}
                and
                <Link
                  href="/services/interior-painting/"
                  className="text-slate-900 hover:underline font-semibold"
                >
                  {" "}
                  interior painting
                </Link>{" "}
                to complete your ceiling transformation.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Complete Ceiling Smoothing for Tyandaga Properties
              </h3>
              <p>
                From <strong>popcorn ceiling scraping</strong> to{" "}
                <strong>ceiling skim coating</strong>, we handle every aspect of
                your ceiling renovation. Our{" "}
                <strong>ceiling smoothing service</strong> transforms dated
                textured ceilings into sleek, modern surfaces that enhance your
                home's aesthetic and value. We serve the entire
                <Link
                  href="/services/popcorn-ceiling-removal/"
                  className="text-slate-900 hover:underline font-semibold"
                >
                  {" "}
                  Burlington area
                </Link>
                , including nearby neighborhoods like{" "}
                <Link
                  href="/services/popcorn-ceiling-removal/burlington/downtown-burlington/"
                  className="text-slate-900 hover:underline font-semibold"
                >
                  Downtown Burlington
                </Link>
                , Millcroft, and Aldershot.
              </p>

              <div className="bg-slate-50 border-2 border-slate-900 p-8 mt-8">
                <h4 className="text-xl font-bold text-slate-900 mb-4">
                  📍 Serving Tyandaga & All Burlington Neighborhoods
                </h4>
                <p className="text-slate-700 mb-4">
                  Professional <strong>popcorn ceiling removal</strong>{" "}
                  throughout Burlington, including Tyandaga, Headon Forest,
                  Brant Hills, The Orchard, Appleby, Palmer, and all surrounding
                  areas.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 transition"
                  >
                    Call {PHONE_NUMBER}
                  </a>
                  <Link
                    href="/quote/"
                    className="inline-flex items-center justify-center border-2 border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 font-bold px-8 py-4 transition"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Request Your Tyandaga Ceiling Removal Quote Today
              </h3>
              <p>
                Ready to modernize your Tyandaga home with professional{" "}
                <strong>popcorn ceiling removal</strong>? Contact Burlington's
                trusted ceiling specialists for a free, no-obligation quote. We
                provide transparent pricing, clear timelines, and exceptional
                workmanship backed by our comprehensive warranty. Call
                <a
                  href={PHONE_HREF}
                  className="text-slate-900 hover:underline font-bold"
                >
                  {" "}
                  {PHONE_NUMBER}
                </a>{" "}
                or
                <Link
                  href="/quote/"
                  className="text-slate-900 hover:underline font-semibold"
                >
                  {" "}
                  request a free online quote
                </Link>{" "}
                today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL SIGNALS + INTERNAL LINKS */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container-x max-w-6xl space-y-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] items-start">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.4em] text-white/70">
                Tyandaga field notes
              </p>
              <h2 className="text-4xl font-bold leading-tight">
                Routing ceilings between Kerns Road estates and Brant Street condos
              </h2>
              <p className="text-white/80">
                Tyandaga is one of Burlington's most varied neighborhoods—large detached homes off
                Kerns Road, split levels near Brant Street, and condo towers overlooking Tyandaga
                Golf Course. We track all of those floorplans in the same routing book we use for{" "}
                <Link
                  href="/services/popcorn-ceiling-removal/burlington/millcroft/"
                  className="underline decoration-white/40 hover:text-slate-200"
                >
                  Millcroft
                </Link>{" "}
                and{" "}
                <Link
                  href="/services/popcorn-ceiling-removal/burlington/brant-hills/"
                  className="underline decoration-white/40 hover:text-slate-200"
                >
                  Brant Hills
                </Link>{" "}
                so we always arrive with the right mix of ladders, HEPA vacuums, and skim tools.
              </p>
              <p className="text-white/80">
                When ceilings connect to crown or beams we bring the same craftsmen who handle{" "}
                <Link href="/services/drywall-installation/" className="underline decoration-white/40">
                  drywall installation & repairs
                </Link>
                , keeping seams tight along Tyandaga's tall, window-lined walls. Finishes get passed
                to our{" "}
                <Link href="/services/interior-painting/" className="underline decoration-white/40">
                  interior painting
                </Link>{" "}
                team so ceilings and adjoining bulkheads sit perfectly flat before colour coats go
                on.
              </p>
              <p className="text-white/80">
                We also cross-link each Tyandaga request to our other neighborhood playbooks, like{" "}
                <Link
                  href="/services/popcorn-ceiling-removal/burlington/aldershot/"
                  className="underline decoration-white/40"
                >
                  Aldershot
                </Link>{" "}
                for highrise logistics or{" "}
                <Link
                  href="/services/popcorn-ceiling-removal/burlington/orchard/"
                  className="underline decoration-white/40"
                >
                  The Orchard
                </Link>{" "}
                for new-build humidity control. Those internal links help homeowners compare scopes
                and show search engines the depth of Burlington coverage.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 space-y-4">
              <h3 className="text-2xl font-semibold">Tyandaga logistics snapshot</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-white/80">
                {[
                  { stat: "7:15 AM", label: "Typical arrival before Kerns Road traffic" },
                  { stat: "12 vents", label: "Average registers masked per main floor" },
                  { stat: "3 crews", label: "Burlington teams rotating between Tyandaga & Headon Forest" },
                  { stat: "18 photos", label: "Uploaded to the client dashboard each job" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 p-4">
                    <p className="text-3xl font-bold text-white">{item.stat}</p>
                    <p className="text-white/70">{item.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-white/70">
                Need wallpaper removed or trim adjusted while we're onsite? Pair this service with our{" "}
                <Link href="/services/wallpaper-removal/" className="underline decoration-white/40">
                  wallpaper removal
                </Link>{" "}
                crew and{" "}
                <Link href="/services/popcorn-ceiling-removal/burlington/downtown-burlington/" className="underline decoration-white/40">
                  Downtown Burlington team
                </Link>{" "}
                if you're coordinating multiple properties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-x max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-slate-500 mb-4">
                About
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                Burlington's Trusted Ceiling Specialists
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                We bring years of experience and a commitment to excellence to
                every Tyandaga project. Our team specializes in transforming
                dated textured ceilings into modern, smooth surfaces.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center font-bold">
                    01
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">
                      Dust-Controlled Process
                    </h3>
                    <p className="text-slate-600">
                      HEPA filtration and complete containment systems
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center font-bold">
                    02
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">
                      Level 5 Smooth Finish
                    </h3>
                    <p className="text-slate-600">
                      Professional skim coating for flawless results
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center font-bold">
                    03
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">
                      3-Year Warranty
                    </h3>
                    <p className="text-slate-600">
                      Fully insured with comprehensive coverage
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] bg-slate-200 overflow-hidden">
                <img
                  src="/services/popcorn-ceiling-removal/2.webp"
                  alt="Professional popcorn ceiling removal process in Tyandaga Burlington"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-slate-900 text-white p-8 max-w-xs">
                <p className="text-4xl font-bold mb-2">24h</p>
                <p className="text-sm uppercase tracking-wider">
                  Paint-ready finish
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA SECTION */}
      <section className="py-20 lg:py-32 bg-slate-900 text-white">
        <div className="container-x max-w-4xl text-center">
          <p className="text-sm uppercase tracking-widest text-slate-400 mb-4">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transform Your Tyandaga Ceiling Today
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Professional popcorn ceiling removal with Level 5 smooth finishes.
            Fast quotes, clean work, exceptional results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center bg-white hover:bg-slate-100 text-slate-900 font-bold px-8 py-4 transition"
            >
              Call {PHONE_NUMBER}
            </a>
            <Link
              href="/quote/"
              className="inline-flex items-center justify-center border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold px-8 py-4 transition"
            >
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
