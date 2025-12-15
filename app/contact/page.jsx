// app/contact/page.tsx — Next.js App Router
import Link from "next/link";
import Image from "next/image";
import { CONTACT } from "@/app/config"; // { phoneHref, phoneNumber, email }
import QuoteForm from "@/components/QuoteForm";

export const revalidate = 86400;

const BRAND = "Popcorn Ceiling Removal Burlington";
const HERO_IMG = "/popcorn-ceilingremoval-burlington.PNG";

export const metadata = {
  title: `Contact — ${BRAND} | Level 5 Smooth Finishes`,
  description:
    "Contact Popcorn Ceiling Removal Burlington for dust-controlled popcorn ceiling removal (Level 5 smooth), drywall finishing, stucco ceiling removal, and ceiling painting. Fast estimates across Burlington, Oakville, Hamilton, Milton, and Halton Region.",
  keywords: [
    "popcorn ceiling removal",
    "ceiling smoothing",
    "Level 5 finish",
    "drywall finishing",
    "Burlington",
    "Oakville",
    "Hamilton",
    "Toronto",
    "Etobicoke",
    "Grimsby",
    "St. Catharines",
  ],
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: `Contact ${BRAND}`,
    description:
      "Local, insured crew specializing in popcorn ceiling removal with clean containment, Level 5 finishes, and on-time schedules.",
    url: "/contact/",
    type: "website",
    images: [{ url: HERO_IMG }],
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "/" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Contact",
            item: "/contact/",
          },
        ],
      },
      {
        "@type": "Organization",
        "@id": "/#org",
        name: BRAND,
        url: "/",
        email: CONTACT?.email || "info@popcornceilingremovalburlington.com",
        telephone: CONTACT?.phoneNumber || "+1 (647) 923-6784",
        sameAs: [],
      },
      {
        "@type": "LocalBusiness",
        "@id": "/#loc-burlington",
        name: `${BRAND}`,
        url: "/contact/",
        telephone: CONTACT?.phoneNumber || "+1 (647) 923-6784",
        email: CONTACT?.email || "info@popcornceilingremovalburlington.com",
        branchOf: { "@id": "/#org" },
        address: {
          "@type": "PostalAddress",
          streetAddress: "3321 Mainway",
          addressLocality: "Burlington",
          addressRegion: "ON",
          postalCode: "L7M 1A6",
          addressCountry: "CA",
        },
        areaServed: [
          "Burlington",
          "Oakville",
          "Hamilton",
          "Milton",
          "Mississauga",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "/#loc-stoney",
        name: `${BRAND} — Stoney Creek`,
        url: "/contact/",
        telephone: CONTACT?.phoneNumber || "+1 (647) 923-6784",
        email: CONTACT?.email || "info@popcornceilingremovalburlington.com",
        branchOf: { "@id": "/#org" },
        address: {
          "@type": "PostalAddress",
          streetAddress: "37 Dalegrove Crescent",
          addressLocality: "Stoney Creek",
          addressRegion: "ON",
          postalCode: "L8J 3R5",
          addressCountry: "CA",
        },
        areaServed: ["Hamilton", "Stoney Creek", "Grimsby", "St. Catharines"],
      },
      {
        "@type": "Service",
        name: "Popcorn Ceiling Removal & Ceiling Smoothing (Level 5)",
        serviceType: [
          "Popcorn Ceiling Removal",
          "Ceiling Smoothing",
          "Drywall Finishing",
        ],
        provider: { "@id": "/#org" },
        areaServed: [
          "Mississauga",
          "Toronto",
          "Oakville",
          "Burlington",
          "Hamilton",
          "Milton",
          "Etobicoke",
          "Grimsby",
          "St. Catharines",
        ],
      },
      {
        "@type": "ContactPage",
        name: `Contact ${BRAND}`,
        url: "/contact/",
        about: { "@id": "/#org" },
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

export default function ContactPage() {
  return (
    <div className="container-x py-10">
      <JsonLd />

      {/* CONTACT FORM FIRST */}
      <section className="mb-10 rounded-[32px] border border-red-100 bg-gradient-to-br from-rose-50 via-white to-amber-50/70 p-6 md:p-10 shadow-xl">
        <div className="grid gap-8 lg:grid-cols-[1fr,1.1fr] items-start">
          <div className="space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1 text-xs font-semibold text-red-700">
              Contact & Quotes
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
              Get a fast popcorn ceiling removal quote.
            </h1>
            <p className="text-sm text-slate-600">
              Share a few details and photos. We reply with labour-only
              ballparks and confirm a site visit for Burlington, Oakville,
              Mississauga, Hamilton, Milton and nearby cities.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 shadow">
                📸 Photo-friendly
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 shadow">
                🛠️ Level 5 skim
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 shadow">
                🧹 Dust-controlled
              </span>
            </div>
          </div>
          <div className="rounded-3xl border border-red-100 bg-white p-6 shadow-lg">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* HERO — copy + image */}
      <header className="rounded-[40px] border border-black/10 bg-white/90 shadow-[0_35px_90px_-35px_rgba(15,23,42,0.5)] overflow-hidden">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center p-6 md:p-10">
          <div className="order-2 lg:order-1 space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 text-blue-800 px-3 py-1 text-xs font-semibold ring-1 ring-blue-600/20">
              ⭐ Popcorn Ceiling Removal • Level 5 Smooth
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
              Contact <span className="text-rose-600">{BRAND}</span>
            </h1>
            <p className="mt-4 text-lg text-slate-800">
              Need <strong>popcorn ceiling removal</strong> that’s{" "}
              <strong>dust-controlled</strong> and finishes{" "}
              <strong>glass-smooth (Level 5)</strong>? Send a couple photos and
              room sizes for the fastest estimate. We also handle{" "}
              <strong>drywall finishing</strong>,{" "}
              <strong>wallpaper removal</strong>, and{" "}
              <strong>interior painting</strong>.
            </p>

            {/* Trust chips */}
            <ul className="mt-4 flex flex-wrap gap-2">
              <li className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 text-sm ring-1 ring-emerald-200">
                HEPA dust control
              </li>
              <li className="px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-sm ring-1 ring-amber-200">
                Level 5 finishing
              </li>
              <li className="px-3 py-1 rounded-full bg-purple-50 text-purple-900 text-sm ring-1 ring-purple-200">
                Insured • WSIB
              </li>
              <li className="px-3 py-1 rounded-full bg-sky-50 text-sky-900 text-sm ring-1 ring-sky-200">
                Clean & on-time
              </li>
            </ul>

            {/* Primary CTAs */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={CONTACT.phoneHref}
                className="btn-cta bg-red-600 hover:bg-red-700 text-white"
              >
                📞 {CONTACT.phoneNumber}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="btn-cta border border-red-200 text-red-700 hover:border-red-500"
              >
                ✉️ {CONTACT.email}
              </a>
              <Link
                href="/quote/"
                className="btn-cta bg-red-600 hover:bg-red-700 text-white"
              >
                Get My Quote
              </Link>
            </div>

            <p className="mt-3 text-sm text-slate-700">
              Serving Mississauga, Toronto, Oakville, Burlington, Hamilton,
              Milton, Etobicoke, Grimsby, St. Catharines.
            </p>
          </div>

          <figure className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 scale-95 rounded-[36px] bg-gradient-to-r from-rose-200/40 via-white to-amber-200/50 blur-3xl" />
            <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-2xl">
              <img
                src={HERO_IMG}
                alt="Popcorn ceiling removal Burlington"
                className="w-full object-cover"
                loading="eager"
              />
            </div>
          </figure>
        </div>
      </header>

      {/* ADDRESS INFORMATION — Burlington-first */}
      <section className="mt-10 grid grid-cols-1 gap-6">
        <div className="p-6 rounded-2xl bg-white ring-1 ring-blue-100 space-y-4">
          <h2 className="text-2xl font-semibold text-blue-900">
            Contact & Quotes
          </h2>
          <ul className="text-sm text-slate-700 space-y-2">
            <li>
              <Link className="text-blue-700 underline" href="/quote/">
                Get a Fast Quote
              </Link>
            </li>
            <li>
              <Link className="text-blue-700 underline" href="/our-work/">
                Before & After Gallery
              </Link>
            </li>
            <li>
              <Link className="text-blue-700 underline" href="/our-process/">
                Our 24h Smooth Ceiling Process
              </Link>
            </li>
            <li>
              <Link className="text-blue-700 underline" href="/contact/">
                Concierge Team
              </Link>
            </li>
            <li>
              <Link className="text-blue-700 underline" href="/service-areas/">
                All Service Areas
              </Link>
            </li>
          </ul>

          <div>
            <p className="text-sm font-semibold text-slate-900">
              3321 Mainway, Burlington, ON L7M 1A6
            </p>
            <p className="mt-1 text-sm text-slate-700">
              <a
                href="https://maps.google.com/?q=3321%20Mainway%2C%20Burlington%2C%20ON%20L7M%201A6"
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 underline"
              >
                Open in Google Maps
              </a>
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">🕘 Hours</p>
            <p className="text-sm text-slate-700">Mon–Sun: 8:00 AM – 6:00 PM</p>
          </div>

          <p className="text-sm text-slate-600">
            Burlington-first: Downtown, Aldershot, Millcroft, Tyandaga, Headon
            Forest, Brant Hills, The Orchard, Appleby.
          </p>
        </div>
      </section>

      {/* POPCORN CEILING REMOVAL — SEO/sales block */}
      <section className="mt-10 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-rose-50 via-white to-sky-50 ring-1 ring-slate-200">
        <h2 className="text-2xl font-semibold">
          Popcorn Ceiling Removal — GTA & Niagara
        </h2>
        <p className="mt-2 text-slate-700">
          We specialize in turning dated textured ceilings into{" "}
          <strong>smooth, modern ceilings</strong>. Our process uses{" "}
          <strong>containment</strong>, <strong>vent masking</strong>, and{" "}
          <strong>HEPA-assist sanding</strong>. Painted popcorn? We test first;
          if scraping risks damage, we{" "}
          <strong>encapsulate & Level 5 skim</strong>
          and finish paint on request.
        </p>
        <ul className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-slate-800">
          <li className="rounded-xl p-4 ring-1 ring-emerald-200 bg-emerald-50/60">
            ✅ Dust-controlled, family-friendly workflow
          </li>
          <li className="rounded-xl p-4 ring-1 ring-amber-200 bg-amber-50/60">
            ✅ True Level 5 flatness under raking light
          </li>
          <li className="rounded-xl p-4 ring-1 ring-purple-200 bg-purple-50/60">
            ✅ Respectful, insured crew • WSIB
          </li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/services/popcorn-ceiling-removal/"
            className="btn-cta bg-rose-600 hover:bg-rose-700 text-white"
          >
            Learn About Popcorn Removal
          </Link>
          <Link
            href="/our-work/"
            className="btn-cta bg-sky-600 hover:bg-sky-700 text-white"
          >
            See Before / After
          </Link>
        </div>
      </section>

   

      {/* LOCAL LINKS — Service → City (static URLs for SEO) */}
      <section className="mt-10 p-6 rounded-2xl bg-white ring-1 ring-slate-200">
        <h2 className="text-2xl font-semibold">Popular Service Areas</h2>
        <p className="mt-2 text-slate-700">
          Quick links to our local popcorn ceiling removal pages:
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {[
            "mississauga",
            "toronto",
            "oakville",
            "burlington",
            "hamilton",
            "milton",
            "etobicoke",
            "grimsby",
            "st-catharines",
          ].map((city) => (
            <li key={city}>
              <Link
                className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm"
                href={`/locations/popcorn-ceiling-removal-${city}`}
              >
                {city
                  .replaceAll("-", " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </Link>
            </li>
          ))}
        </ul>
      </section>

     
      {/* Mobile quick actions */}
      <div className="fixed bottom-4 right-4 z-40 flex gap-2 md:hidden">
        <a
          href={CONTACT.phoneHref}
          className="rounded-full px-4 py-3 shadow-lg bg-blue-600 text-white text-sm font-semibold"
        >
          Call
        </a>
        <Link
          href="/quote/"
          className="rounded-full px-4 py-3 shadow-lg bg-emerald-500 text-white text-sm font-semibold"
        >
          Quote
        </Link>
      </div>
    </div>
  );
}
