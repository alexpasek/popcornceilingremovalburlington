import Image from "next/image";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";

export const revalidate = 86400;

export const metadata = {
  title: "Millcroft Popcorn Ceiling Removal | Golf Course Smooth Ceilings",
  description:
    "Millcroft Burlington popcorn ceiling removal, Level 5 skim coats, and paint-ready finishes. Golf-course humidity plans, pot-light layouts, and real-time photo updates.",
  alternates: {
    canonical: "/services/popcorn-ceiling-removal/burlington/millcroft/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal Millcroft Burlington",
    description:
      "Dust-contained popcorn removal built for Millcroft detached homes, townhouses, and condos. HEPA sanding, golf-course humidity plans, and concierge communication.",
    url: "/services/popcorn-ceiling-removal/burlington/millcroft/",
    type: "article",
  },
};

const milestoneTimeline = [
  {
    label: "Hole 1 • 7:30 AM",
    detail: "Crew arrives via Upper Middle, turf mats down so golf-course lawns stay pristine.",
  },
  {
    label: "Hole 5 • 10:15 AM",
    detail: "Scrape/skim underway, pot-light layout confirmed, first photo set texted to you.",
  },
  {
    label: "Hole 12 • 2:45 PM",
    detail: "Raking-light inspection, touch-ups, and humidity readings logged.",
  },
  {
    label: "Clubhouse Finish • 5:30 PM",
    detail: "Primer sprayed, floors swept, report sent with before/after carousel.",
  },
];

const serviceTiles = [
  {
    title: "Humidity smart",
    copy: "We monitor Millcroft's pond-side humidity and add longer dry times or dehumidifiers when needed.",
  },
  {
    title: "Golf-lock logistics",
    copy: "Crew staging respects tee time traffic; we tuck vans on side streets so driveways stay open.",
  },
  {
    title: "Concierge updates",
    copy: "Dedicated project chat for homeowners traveling or using the clubhouse while we work.",
  },
];

const gallery = [
  {
    src: "/photo/00018popcorn-ceiling-removal-burlington.JPG",
    alt: "Millcroft great room smooth ceiling with pot lights",
    caption: "Great room skim coat + pot light layout",
  },
  {
    src: "/photo/00023popcorn-ceiling-removal-burlington.JPG",
    alt: "Millcroft kitchen ceiling containment with zipper wall",
    caption: "Kitchen containment along golf-course patio doors",
  },
  {
    src: "/photo/00029popcorn-ceiling-removal-burlington.JPG",
    alt: "Millcroft townhouse hallway Level 5 skim under raking light",
    caption: "Townhouse hallway Level 5 skim under raking light",
  },
];

const faqs = [
  {
    q: "How do you handle Millcroft golf-course humidity?",
    a: "We track humidity every two hours, stage dehumidifiers, and extend fan time before primer so finishes stay smooth.",
  },
  {
    q: "Can you work while we're using the clubhouse?",
    a: "Yes. We send photo/text updates so you can enjoy a round or dinner while we manage containment and cleanup.",
  },
  {
    q: "Do you coordinate pot lights or crown?",
    a: "We align with electricians, pre-drill fixtures, and hand off smooth ceilings ready for crown or cove lighting.",
  },
];

export default function MillcroftPage() {
  return (
    <div className="bg-[#040c12] text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="bg-[radial-gradient(circle_at_top,_#1d3b50,_transparent_60%)] h-full" />
        </div>
        <div className="relative container-x py-16 space-y-16">
          {/* HERO */}
          <section className="grid gap-10 lg:grid-cols-[1.3fr,0.7fr] items-start">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">
                Millcroft • Popcorn Ceiling Removal Burlington
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Bright ceilings for Millcroft fairway homes
              </h1>
              <p className="text-lg text-white/80">
                We mix Millcroft golf-course logistics with a premium smooth ceiling process: dust
                tunnels that respect oak floors, Level 5 skim coats inspected under raking light, and
                concierge-level updates. Whether you back onto a fairway or a pond, we keep windows
                sealed, protect turf, and finish ceilings before your next tee time.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-white/80">
                <span className="inline-flex items-center gap-1 text-base font-semibold text-white">
                  ★★★★★ 4.9/5
                </span>
                <span>Millcroft preferred smooth ceiling crew</span>
                <span className="inline-flex items-center rounded-full border border-white/30 px-3 py-1">
                  WSIB • $2M liability • HO-6 ready
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {serviceTiles.map((tile) => (
                  <div
                    key={tile.title}
                    className="rounded-3xl border border-white/20 bg-white/10 p-5 shadow-lg backdrop-blur"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200">
                      {tile.title}
                    </p>
                    <p className="mt-2 text-sm text-white/85">{tile.copy}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={PHONE_HREF}
                  className="btn-cta bg-emerald-400 text-slate-900 hover:bg-emerald-300"
                >
                  📞 {PHONE_NUMBER}
                </a>
                <Link
                  href="/quote/"
                  className="btn-cta border border-white/50 text-white hover:bg-white/10"
                >
                  Book Millcroft walkthrough
                </Link>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <h2 className="text-2xl font-semibold">Millcroft timeline</h2>
              <p className="text-sm text-white/70">
                Mapped to golf-course pace of play so your project never interrupts a tee time.
              </p>
              <div className="mt-6 space-y-4">
                {milestoneTimeline.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm"
                  >
                    <p className="font-semibold text-emerald-200">{item.label}</p>
                    <p className="text-white/80 mt-1">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FORM + STORY */}
          <section className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <h3 className="text-2xl font-semibold">Share your Millcroft project</h3>
              <p className="text-sm text-white/70">
                Add ceiling height, painted vs. unpainted texture, and whether you back onto a
                fairway or pond. We respond the same day with scope, pot-light layout ideas, and
                schedule options.
              </p>
              <QuoteForm />
            </div>
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">
                Recent Millcroft run
              </p>
              <h2 className="text-3xl font-bold">Kitchen + sunroom glow-up on Sarazen Dr.</h2>
              <p className="text-white/80">
                A homeowner renovating their kitchen wanted the sunroom ceiling to match new
                millwork. We built a zippered tunnel from the garage to the cooktop wall, scraped
   	     the painted popcorn, skimmed twice, and sanded with HEPA vacs before sunrise the next day.
                While they played nine holes, we primed and shot a satin finish so the room felt like
                a gallery when they returned.
              </p>
              <ul className="space-y-2 text-white/80">
                <li>• Golf cart kept accessible thanks to driveway mats & slim equipment</li>
                <li>• Pot-light spacing aligned with new island, pre-drilled for electrician</li>
                <li>• Photo dashboard shared hourly for traveling homeowners</li>
              </ul>
              <p className="italic text-white/70">
                "The ceilings match our cabinetry sheen, and the crew left zero dust on the wide-plank
                floors." - R. Bennett, Millcroft
              </p>
            </div>
          </section>

          {/* GALLERY */}
          <section className="rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <h2 className="text-3xl font-bold mb-6">Visual scorecard</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {gallery.map((item) => (
                <div
                  key={item.alt}
                  className="group relative overflow-hidden rounded-[28px] border border-white/15"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={640}
                    height={480}
                    className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 text-sm font-semibold">
                    {item.caption}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* LOCAL SIGNALS + FAQ */}
          <section className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">
                Local signals
              </p>
              <h2 className="text-3xl font-bold">Why Millcroft homeowners call us</h2>
              <ul className="space-y-4 text-white/80">
                <li>
                  <strong>Golf-course etiquette:</strong> trucks staged on side streets, no blocking
                  cart paths, and discrete containment that doesn't scare wildlife near the ponds.
                </li>
                <li>
                  <strong>Sunroom skylights:</strong> we skim up into wells, pull humidity readings,
                  and seal skylight frames before priming.
                </li>
                <li>
                  <strong>Clubhouse coordination:</strong> we share a daily run sheet so you can plan
                  workouts or dinners while we handle the heavy lifting.
                </li>
              </ul>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                Need more inspiration? Compare with{" "}
                <Link
                  href="/services/popcorn-ceiling-removal/burlington/tyandaga/"
                  className="text-emerald-200 underline underline-offset-4"
                >
                  Tyandaga smooth ceilings
                </Link>{" "}
                or plan your trim upgrades via our{" "}
                <Link
                  href="/services/interior-painting/"
                  className="text-emerald-200 underline underline-offset-4"
                >
                  Burlington interior painting team
                </Link>
                .
              </div>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">
                FAQ
              </p>
              <h2 className="text-3xl font-bold">Millcroft popcorn removal questions</h2>
              <div className="mt-6 space-y-4 text-white/80">
                {faqs.map((faq) => (
                  <div key={faq.q}>
                    <p className="font-semibold text-white">{faq.q}</p>
                    <p className="text-sm text-white/80">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-[36px] border border-emerald-400 bg-emerald-400/10 p-8 text-white shadow-2xl">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-200">
                  Ready for new ceilings?
                </p>
                <h2 className="text-3xl font-bold">Millcroft popcorn ceiling removal & painting</h2>
                <p className="text-sm text-white/80 mt-2">
                  Bedrooms finish in 24 hours, main floors in 2–3 days, including Level 5 skim,
                  primer, and cleanup. We align with electricians, wallpaper removal, or{" "}
                  <Link
                    href="/services/drywall-installation/"
                    className="text-emerald-200 underline underline-offset-4"
                  >
                    drywall repairs
                  </Link>{" "}
                  if needed.
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
                  className="btn-cta border border-white/50 text-white hover:bg-white/10"
                >
                  Get Millcroft quote
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
