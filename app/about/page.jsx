// app/about/page.jsx (Next.js App Router)

"use client";

import Link from "next/link";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";
import { useState } from "react";

const HERO_IMG = "/about/Popcorn-ceiling-removal-team.png";

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "/" },
          { "@type": "ListItem", position: 2, name: "About", item: "/about/" },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "/#business",
        name: "Popcorn Ceiling Removal Burlington",
        url: "/",
        image: HERO_IMG,
        telephone: PHONE_NUMBER,
        priceRange: "$$",
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
          "Mississauga",
          "Milton",
          "Etobicoke",
          "Grimsby",
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

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setTimeout(() => {
      setStatus("Thank you! We'll contact you within 24h.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-b from-white to-slate-50">
      <JsonLd />

      {/* HERO + CONTACT FORM */}
      <section className="container-x py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr,1fr] gap-8 items-start">
          {/* Left: Hero */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              About{" "}
              <span className="text-red-600">
                Popcorn Ceiling Removal Burlington
              </span>
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              We're Burlington's trusted local crew for{" "}
              <strong>dust-controlled popcorn ceiling removal</strong> with{" "}
              <strong>Level 5 smooth finishes</strong>. Serving Downtown
              Burlington, Aldershot, Millcroft, Tyandaga, Headon Forest, Brant
              Hills, and all of Halton Region.
            </p>
            <p className="mt-3 text-slate-700">
              <em>Containment first, quality always.</em> From plastic barriers
              and floor protection to careful skim coating and raking-light
              checks, we finish ceilings the way we'd want them in our own
              Burlington homes.
            </p>
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
            <figure className="mt-8 lg:hidden relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-red-400/10 via-rose-300/10 to-orange-400/10 blur-2xl rounded-3xl opacity-80"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={HERO_IMG}
                  alt="Burlington popcorn ceiling removal crew"
                  className="w-full object-cover"
                />
              </div>
            </figure>
          </div>

          {/* Right: Form */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white border-2 border-red-600 rounded-2xl p-6 shadow-xl">
              <h2 className="text-2xl font-bold text-slate-900">
                Get a Fast Quote
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Burlington's ceiling removal specialists
              </p>
              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
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
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
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
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="mt-1 block w-full px-4 py-2 border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your Burlington ceiling project..."
                    className="mt-1 block w-full px-4 py-2 border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 shadow-lg"
                >
                  Send Request
                </button>
                {status && (
                  <p className="text-sm text-center text-slate-600">{status}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container-x py-10">
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          Why Burlington Homeowners Choose Us
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">
              🏠 Burlington Local
            </h3>
            <p className="mt-2 text-slate-700">
              Serving Downtown, Aldershot, Millcroft, Tyandaga, Headon Forest,
              Brant Hills—we know Burlington neighborhoods.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">
              ✨ Level 5 Smooth
            </h3>
            <p className="mt-2 text-slate-700">
              Dead-flat, paint-ready ceilings with raking-light checks and HEPA
              sanding for a modern finish.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">
              🛡️ Dust-Controlled
            </h3>
            <p className="mt-2 text-slate-700">
              Plastic containment, protected floors, vent masking, and daily
              clean-ups keep your home tidy.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-x py-10">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900">
            Our Burlington Process
          </h2>
          <ol className="mt-6 space-y-3 text-slate-700 list-decimal pl-6">
            <li>
              <strong>Containment:</strong> Plastic barriers, floor protection,
              vent masking
            </li>
            <li>
              <strong>Test & Plan:</strong> Scrape test; encapsulate if painted
            </li>
            <li>
              <strong>Level 5 Skim:</strong> Dead-flat finish with raking-light
              checks
            </li>
            <li>
              <strong>HEPA Sand:</strong> Dust-managed sanding for clean
              surfaces
            </li>
            <li>
              <strong>Prime & Paint:</strong> Stain-block primer; optional
              finish coats
            </li>
            <li>
              <strong>Clean Handoff:</strong> Daily tidy-ups and final clean
            </li>
          </ol>
          <div className="mt-6 flex gap-3">
            <Link
              href="/our-process/"
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3"
            >
              See Full Process
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-10">
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white text-center shadow-xl">
          <h2 className="text-3xl font-bold">
            Ready for Smooth Burlington Ceilings?
          </h2>
          <p className="mt-3 text-lg">
            Fast quotes. Burlington-local crew. Paint-ready finishes.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a
              href={PHONE_HREF}
              className="bg-white text-red-600 hover:bg-slate-100 font-bold px-6 py-3"
            >
              📞 {PHONE_NUMBER}
            </a>
            <Link
              href="/quote/"
              className="bg-white text-red-600 hover:bg-slate-100 font-bold px-6 py-3"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
