// filepath: /Users/alex/Projects/popcorn-ceiling-removal-burlington/app/services/popcorn-ceiling-removal/burlington/downtown-burlington/page.jsx
import Link from "next/link";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";
import QuoteForm from "@/components/QuoteForm";

export const revalidate = 86400;

export const metadata = {
  title: "Popcorn Ceiling Removal Downtown Burlington | Level 5 Smooth",
  description:
    "Top-rated popcorn ceiling removal in Downtown Burlington. Level 5 smooth finish, dust-controlled, HEPA sanding. Condos, lofts, heritage homes. Free quotes 647-923-6784.",
  alternates: { canonical: "/services/popcorn-ceiling-removal/burlington/downtown-burlington/" },
  openGraph: {
    title: "Popcorn Ceiling Removal Downtown Burlington | Expert Service",
    description:
      "Professional popcorn ceiling removal for Downtown Burlington condos and homes. Level 5 finish, dust-controlled, paint-ready in 24h.",
    url: "/services/popcorn-ceiling-removal/burlington/downtown-burlington/",
    type: "article",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      {/* HERO SECTION - Dark Background with Pattern */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Decorative Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)'
          }} />
        </div>

        {/* Content Container */}
        <div className="container-x relative py-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] items-start">
            {/* Left: Hero Content */}
            <div className="relative z-10 text-white">
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-400 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400"></span>
                </span>
                Currently available for Downtown Burlington projects
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
                Professional
                <br />
                <span className="text-lime-400">Popcorn Ceiling</span>
                <br />
                Removal
              </h1>

              {/* Subheadline */}
              <p className="text-xl text-slate-300 mb-8 max-w-xl">
                Transform your Downtown Burlington home with Level 5 smooth ceilings. 
                Expert dust-controlled removal, premium finishes, paint-ready in 24h.
              </p>

              {/* Work Process Button */}
              <div className="flex items-center gap-4 mb-12">
                <button className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-3 text-white hover:bg-white/20 transition">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-400 text-slate-950">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                    </svg>
                  </div>
                  <span className="font-semibold">Our Work Process</span>
                </button>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col gap-4">
                <a 
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-3 text-white hover:text-lime-400 transition"
                >
                  <span className="text-sm font-semibold uppercase tracking-wider">Call Now</span>
                  <span className="text-2xl font-bold">{PHONE_NUMBER}</span>
                </a>
                
                <Link 
                  href="/quote/"
                  className="inline-flex items-center gap-2 text-lime-400 hover:text-lime-300 transition"
                >
                  <span className="font-semibold">Get Free Quote</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Social Links - Vertical */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 text-white/60">
                <a href="#" className="hover:text-lime-400 transition text-sm uppercase tracking-wider" style={{ writingMode: 'vertical-rl' }}>
                  Scroll
                </a>
                <div className="h-16 w-px bg-white/20 mx-auto" />
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:sticky lg:top-24">
              <div className="rounded-3xl border-2 border-lime-400/30 bg-slate-900/90 backdrop-blur-lg p-8 shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Downtown Burlington Quote
                </h2>
                <p className="text-sm text-slate-300 mb-6">
                  Fast estimate for popcorn removal & Level 5 finish
                </p>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>

        {/* Follow Me Section - Right Side */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 text-white/60">
          <span className="text-sm uppercase tracking-wider" style={{ writingMode: 'vertical-rl' }}>
            Follow Me
          </span>
          <div className="h-16 w-px bg-white/20 mx-auto" />
        </div>
      </section>

      {/* Services Ticker - Lime Green */}
      <section className="bg-lime-400 py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[
            "Level 5 Smooth Finish",
            "Dust-Controlled Removal",
            "HEPA Filtration",
            "Paint-Ready 24h",
            "Condo Specialists",
            "Heritage Homes",
            "3-Year Warranty",
            "WSIB Insured",
          ].concat([
            "Level 5 Smooth Finish",
            "Dust-Controlled Removal",
            "HEPA Filtration",
            "Paint-Ready 24h",
            "Condo Specialists",
            "Heritage Homes",
            "3-Year Warranty",
            "WSIB Insured",
          ]).map((service, i) => (
            <span key={i} className="mx-8 text-slate-950 font-bold text-lg flex items-center gap-3">
              <span className="text-2xl">✱</span> {service}
            </span>
          ))}
        </div>
      </section>

      {/* Why Choose Us - Light Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-x">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-lime-600 mb-3">
              Downtown Burlington Specialists
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Why Choose Our Service
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: "🏙️",
                title: "Downtown Expertise",
                desc: "We know Burlington condos, lofts, and heritage buildings. Elevator bookings, noise restrictions, tight schedules—handled.",
              },
              {
                icon: "✨",
                title: "Level 5 Smooth",
                desc: "Dead-flat skim-coated ceilings inspected under raking light. No shadows, no imperfections, paint-ready perfection.",
              },
              {
                icon: "🛡️",
                title: "Zero Mess Promise",
                desc: "HEPA dust control, plastic containment, protected floors. Your downtown unit stays spotless throughout the project.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative rounded-3xl border-2 border-slate-200 bg-gradient-to-b from-white to-slate-50 p-8 hover:border-lime-400 transition-all duration-300"
              >
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="h-8 w-8 rounded-full bg-lime-400 flex items-center justify-center">
                    <svg className="w-4 h-4 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO Content Section */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="container-x max-w-5xl">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Professional Popcorn Ceiling Removal in Downtown Burlington
            </h2>
            
            <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
              <p>
                When it comes to <strong>popcorn ceiling removal in Downtown Burlington</strong>, our team brings 
                unmatched expertise to condos, lofts, and heritage homes throughout the area. We understand the unique 
                challenges of working in downtown properties, from navigating condo board requirements to coordinating 
                elevator access and adhering to noise bylaws.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Expert Popcorn Ceiling Removal for Burlington Condos
              </h3>
              <p>
                Our <Link href="/services/popcorn-ceiling-removal/" className="text-lime-600 hover:text-lime-700 font-semibold underline">
                popcorn ceiling removal service</Link> is specifically tailored for Downtown Burlington's diverse property types. 
                Whether you own a waterfront condo, a heritage home near Brant Street, or a modern loft in the downtown core, 
                we deliver dust-controlled removal with <strong>Level 5 smooth finishes</strong> that transform dated textured 
                ceilings into modern, clean surfaces.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Serving All Downtown Burlington Neighborhoods
              </h3>
              <p>
                We proudly serve every corner of Downtown Burlington, including the <strong>Lakeshore condos</strong>, 
                Brant Street commercial-residential buildings, Spencer Smith Park area properties, and heritage homes 
                throughout the downtown core. Our <Link href="/services/popcorn-ceiling-removal/" className="text-lime-600 hover:text-lime-700 font-semibold underline">
                Burlington popcorn ceiling removal</Link> process includes:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Stucco ceiling removal</strong> with HEPA dust control systems</li>
                <li><strong>Acoustic ceiling removal</strong> for condos and apartments</li>
                <li><strong>Textured ceiling removal</strong> with zero-mess guarantee</li>
                <li><strong>Level 5 skim coating</strong> for perfectly smooth, paint-ready ceilings</li>
                <li><strong>Popcorn ceiling scraping</strong> for unpainted surfaces</li>
                <li><strong>Ceiling texture removal</strong> for dated orange peel and knockdown finishes</li>
              </ul>

              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Why Downtown Burlington Homeowners Choose Our Popcorn Ceiling Removal
              </h3>
              <p>
                As Burlington's leading <strong>popcorn ceiling removal specialists</strong>, we combine technical expertise 
                with respect for your property. Our dust-controlled process uses plastic containment barriers, HEPA filtration, 
                and professional-grade equipment to ensure your downtown unit remains clean throughout the project. We also 
                offer <Link href="/services/drywall-installation/" className="text-lime-600 hover:text-lime-700 font-semibold underline">
                drywall installation and finishing</Link> for any ceiling repairs needed after removal.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Complete Ceiling Renovation Services
              </h3>
              <p>
                Beyond popcorn ceiling removal, we provide complete ceiling renovation services for Downtown Burlington properties. 
                This includes <Link href="/services/interior-painting/" className="text-lime-600 hover:text-lime-700 font-semibold underline">
                interior painting</Link> to finish your newly smooth ceilings, drywall repairs for water damage or cracks, 
                and custom ceiling finishes for a truly modern look. Our <strong>ceiling smoothing services</strong> transform 
                outdated textured ceilings into sleek, contemporary surfaces that increase your property value.
              </p>

              <div className="bg-lime-50 border-2 border-lime-400 rounded-2xl p-6 mt-8">
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  📍 Serving Downtown Burlington & Nearby Areas
                </h4>
                <p className="text-slate-700">
                  We also provide expert popcorn ceiling removal in <Link href="/services/popcorn-ceiling-removal/" className="text-lime-600 hover:text-lime-700 font-semibold underline">
                  Aldershot</Link>, <Link href="/services/popcorn-ceiling-removal/" className="text-lime-600 hover:text-lime-700 font-semibold underline">
                  Millcroft</Link>, <Link href="/services/popcorn-ceiling-removal/" className="text-lime-600 hover:text-lime-700 font-semibold underline">
                  Tyandaga</Link>, and throughout <Link href="/services/popcorn-ceiling-removal/" className="text-lime-600 hover:text-lime-700 font-semibold underline">
                  Burlington, Ontario</Link>. Contact us for a free quote on your ceiling transformation project.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Get Your Free Popcorn Ceiling Removal Quote Today
              </h3>
              <p>
                Ready to transform your Downtown Burlington ceiling? Our <strong>popcorn ceiling removal Burlington</strong> team 
                provides same-day quotes and can schedule your project around your condo board requirements and building rules. 
                We're fully insured with WSIB coverage and $2M liability insurance, and every project includes our 3-year workmanship 
                warranty. Call <a href={PHONE_HREF} className="text-lime-600 hover:text-lime-700 font-bold">{PHONE_NUMBER}</a> or 
                request a <Link href="/quote/" className="text-lime-600 hover:text-lime-700 font-semibold underline">free online quote</Link> today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="container-x">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-lime-600 mb-3">
              Recent Projects
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Downtown Burlington Portfolio
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Level 5 smooth finishes in condos, lofts, and heritage homes across Downtown Burlington.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                location: "Lakeshore Condo",
                service: "Full Unit Popcorn Removal",
                alt: "Popcorn ceiling removal Downtown Burlington condo - Level 5 smooth finish",
              },
              {
                location: "Heritage House",
                service: "High Ceiling Smoothing",
                alt: "Downtown Burlington heritage home ceiling restoration - popcorn removal",
              },
              {
                location: "Modern Loft",
                service: "Open Concept Ceiling",
                alt: "Downtown Burlington loft popcorn ceiling removal - industrial modern finish",
              },
              {
                location: "Waterfront Unit",
                service: "3-Bedroom Transformation",
                alt: "Downtown Burlington waterfront condo ceiling removal - paint-ready finish",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={`/services/popcorn-ceiling-removal/${i + 1}.webp`}
                  alt={project.alt}
                  title={`${project.service} ${project.location} Downtown Burlington`}
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs uppercase tracking-wider text-lime-400 font-semibold mb-2">
                    {project.location}
                  </p>
                  <p className="font-bold text-2xl">{project.service}</p>
                  <p className="text-sm text-slate-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Level 5 smooth • Dust-controlled • Paint-ready
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Dark with Lime Accent */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-16 lg:py-24 relative overflow-hidden">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)'
          }} />
        </div>

        <div className="container-x relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-lime-400 mb-4">
              Ready to Transform Your Space?
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Schedule Your Downtown Burlington Ceiling Transformation
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Fast quote, clean work, Level 5 smooth finish. Paint-ready in 24h.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:scale-105"
              >
                <span className="mr-2">📞</span>
                {PHONE_NUMBER}
              </a>
              <Link
                href="/quote/"
                className="inline-flex items-center justify-center border-2 border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-slate-950 font-bold px-8 py-4 rounded-full transition-all hover:scale-105"
              >
                Get Free Quote
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-x max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">
            Downtown Burlington FAQ
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Do you work in downtown Burlington condos?",
                a: "Yes. We handle elevator bookings, comply with quiet hours, and protect hallways. We've worked in most major downtown buildings.",
              },
              {
                q: "How long does a typical condo unit take?",
                a: "A 2-bedroom condo can be completed in 1-2 days. We schedule around your availability and building rules.",
              },
              {
                q: "Is the work dust-controlled for condos?",
                a: "Absolutely. HEPA filtration, plastic containment, and daily clean-ups keep your unit and building spotless.",
              },
              {
                q: "Do you have insurance for condo work?",
                a: "Yes. WSIB coverage and $2M liability insurance. We can provide certificates for your property management.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 hover:border-lime-400 transition-colors"
              >
                <summary className="cursor-pointer font-bold text-lg text-slate-900 flex items-center justify-between">
                  {faq.q}
                  <span className="text-lime-400 group-open:rotate-180 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}