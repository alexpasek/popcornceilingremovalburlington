import Image from "next/image";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { PHONE_HREF } from "@/app/config";

export const revalidate = 86400;

export const metadata = {
  title: "Popcorn Ceiling Removal Brant Hills | Burlington Smooth Ceiling Crew",
  description:
    "Brant Hills popcorn ceiling removal with Level 5 skim coats, HEPA sanding, and bright paint-ready finishes. Local routes around Guelph Line & Upper Middle.",
  alternates: {
    canonical: "/services/popcorn-ceiling-removal/burlington/brant-hills/",
  },
  openGraph: {
    title: "Brant Hills Popcorn Ceiling Removal Burlington",
    description:
      "Dust-controlled popcorn removal, encapsulation, and ceiling repainting for Brant Hills split-levels and townhomes. Fast quotes, spotless turnover.",
    url: "/services/popcorn-ceiling-removal/burlington/brant-hills/",
    type: "article",
  },
};

const heroHighlights = [
  {
    title: "Level 5 skim",
    text: "True flats for long hallway sightlines in Brant Hills side-splits.",
  },
  {
    title: "Dust control",
    text: "Poly tunnels, zipper doors, HEPA scrubbers, and daily tidy-ups.",
  },
  {
    title: "Paint-ready",
    text: "Prime + touch-ups so ceilings glow under townhouse pot lights.",
  },
];

const processSteps = [
  {
    label: "01",
    title: "Protect & prep",
    text: "Wrap oak staircases, cover fireplaces, and set negative air exhausting to the driveway.",
  },
  {
    label: "02",
    title: "Remove / encapsulate",
    text: "Scrape unpainted texture or skim painted ceilings before vacuum sanding Level 5 coats.",
  },
  {
    label: "03",
    title: "Prime & review",
    text: "High-build primer, raking light inspection, and handover walk-through.",
  },
];

const FAQS = [
  {
    q: "Can you finish a Brant Hills bungalow in two days?",
    a: "Yes. Bedrooms and basements scoped under 800 sq ft are turned around with scrape, skim, sand, and prime within 24–36 hours.",
  },
  {
    q: "How do you keep dust away from my kitchen?",
    a: "We isolate rooms with zippered poly, run HEPA vacuums on every sander, and wipe surfaces nightly before removing containment.",
  },
  {
    q: "Do you handle drywall repairs in older homes?",
    a: "We stitch cracks, retape seams, replace bad drywall sheets, and tie everything into the skim coat so the finish is uniform.",
  },
];

const review = {
  text: "“We sent photos on Sunday, got a scoped quote that night, and by Wednesday our main floor ceilings were flat and bright. Zero mess left behind.”",
  author: "— J. Patel, Brant Hills near Cavendish Dr.",
};

const galleryImages = [
  {
    src: "/photo/00006popcorn-ceiling-removal-burlington.JPG",
    alt: "Smooth ceiling repaint under bright pot lights in Brant Hills Burlington",
  },
  {
    src: "/photo/00011popcorn-ceiling-removal-burlington.JPG",
    alt: "Dust-contained popcorn removal setup in Brant Hills split-level home",
  },
  {
    src: "/photo/00024popcorn-ceiling-removal-burlington.JPG",
    alt: "Level 5 skim coat drying under raking light in Brant Hills bungalow",
  },
  {
    src: "/photo/00033popcorn-ceiling-removal-burlington.JPG",
    alt: "Freshly primed smooth ceiling ready for paint in Brant Hills condo",
  },
];

export default function BrantHillsPage() {
  return (
    <div className="bg-gradient-to-b from-slate-900/5 via-white to-slate-50">
      <div className="container-x py-12 space-y-16">
        {/* HERO */}
        <section className="rounded-[40px] bg-gradient-to-br from-[#1f5f73] via-[#0f2f3c] to-slate-900 text-white p-8 md:p-12 shadow-[0_25px_70px_rgba(17,30,39,0.45)]">
          <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] items-start">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
                Brant Hills • Popcorn Ceiling Removal Burlington
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Smooth ceilings for Brant Hills side-splits & townhomes
              </h1>
              <p className="text-base md:text-lg text-white/85">
                Inspired by the clean, luminous look you see on AquaCrown&apos;s waterproofing
                showcase, we pair bright photography, gradients, and bold typography with our
                signature smooth ceiling workflow. Expect dust-contained removal, Level 5 skim
                coats, and spray finishes that make older Brant Hills layouts feel modern without
                forcing families out of the house.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
                <span className="inline-flex items-center gap-1 text-base font-semibold text-white">
                  ★★★★★ 4.9/5
                </span>
                <span>102 Burlington homeowner reviews</span>
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
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-100">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-white/80">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={PHONE_HREF} className="btn-cta bg-white text-slate-900 hover:bg-amber-100">
                  📞 (289) 427-5478
                </a>
                <Link
                  href="/quote/"
                  className="btn-cta border border-white/70 text-white hover:bg-white/10"
                >
                  Book a Brant Hills walkthrough
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/30 bg-white text-slate-900 p-6 shadow-2xl">
              <h2 className="text-2xl font-semibold text-slate-900">
                Share Brant Hills project photos
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Send ceiling height, painted vs. unpainted texture, and square footage. We respond
                the same day with scope, prep notes, and scheduling windows.
              </p>
              <QuoteForm />
            </div>
          </div>
        </section>
        {/* LOCAL STORY */}
        <section className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-[0.3em] text-red-600">
              Local portfolio
            </p>
            <h2 className="text-3xl font-bold text-slate-900">
              Brant Hills family room + basement modernization
            </h2>
            <p className="text-slate-700">
              We recently wrapped a Cavendish Dr. side-split that needed popcorn removal in the
              family room, office, and basement apartment. Containment stretched from the garage
              through the mudroom so tenants could keep using the side entrance. We skimmed around
              existing pot lights, coordinated with an electrician upgrading dimmers, and primed
              everything with a bright flat white. The homeowner stayed onsite, commuting along
              Guelph Line while we kept daily updates flowing.
            </p>
            <ul className="space-y-2 text-slate-700">
              <li>• Level 5 skim coat across drywall seams and plaster patches</li>
              <li>• HEPA sanding with negative air venting out the garage</li>
              <li>• Final spray finish timed around cabinet deliveries</li>
            </ul>
            <p className="italic text-slate-500">{review.text}</p>
            <p className="text-slate-600">{review.author}</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-slate-200 shadow-2xl">
            <Image
              src="/photo/00006popcorn-ceiling-removal-burlington.JPG"
              alt="Smooth popcorn ceiling removal and wet-look finish in a Brant Hills Burlington family room"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </section>

        {/* LOGISTICS + INTERNAL LINKS */}
        <section className="rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Brant Hills logistics, traffic windows & linked resources
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-slate-700">
            <p>
              Morning arrivals roll in from Guelph Line or Upper Middle, so we plan crew staging to
              avoid Brant Hills school drop-off traffic. When the driveway is busy, we mimic the{" "}
              <Link
                href="/services/popcorn-ceiling-removal/burlington/aldershot/"
                className="text-red-600 underline underline-offset-4"
              >
                Aldershot containment plan
              </Link>{" "}
              with slim negative-air machines that fit beside parked cars. We photograph every phase
              and load them into the same client portal we use for{" "}
              <Link
                href="/services/popcorn-ceiling-removal/burlington/downtown-burlington/"
                className="text-red-600 underline underline-offset-4"
              >
                Downtown condo runs
              </Link>
              , ensuring your realtor or designer can monitor progress from anywhere.
            </p>
            <p>
              Basement suites along Sherburne Rd. often share HVAC vents with the main floor. We tape
              off the mechanical room, install vent masks, and maintain separate containment so
              tenants can keep working from home. If you are coordinating waterproofing or drain work
              with{" "}
              <a
                href="https://aquacrown.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 underline underline-offset-4"
              >
                AquaCrown
              </a>
              , we sync schedules so their sump upgrades and our ceiling refinishing don&apos;t
              overlap in the same mudroom.
            </p>
            <p>
              We also keep the internal link structure tight: this Brant Hills page links back to the
              Burlington hub plus the{" "}
              <Link
                href="/services/interior-painting/"
                className="text-red-600 underline underline-offset-4"
              >
                Burlington interior painting team
              </Link>{" "}
              that sprays ceilings after we prime, and the{" "}
              <Link
                href="/services/drywall-installation/"
                className="text-red-600 underline underline-offset-4"
              >
                drywall repair crew
              </Link>{" "}
              who handles larger soffit rebuilds. Google understands the relationship between these
              routes, so your project benefits from a full-service Halton network instead of a
              one-off contractor.
            </p>
            <p>
              When a project spans neighborhoods, we route you to the matching resource. For example,
              families moving from Brant Hills to Tyandaga can review the{" "}
              <Link
                href="/services/popcorn-ceiling-removal/burlington/tyandaga/"
                className="text-red-600 underline underline-offset-4"
              >
                Tyandaga smooth ceiling guide
              </Link>{" "}
              for golf-course humidity notes, while southbound relocations toward Appleby get the{" "}
              <Link
                href="/services/popcorn-ceiling-removal/burlington/appleby/"
                className="text-red-600 underline underline-offset-4"
              >
                lake-adjacent prep checklist
              </Link>
              . Those cross-links help Google understand that we&apos;re not just a one-area crew
              but a Burlington-first operator with detailed notes for every pocket.
            </p>
            <p>
              Even if your next reno jumps to The Orchard or Millcroft, we mention that here so{" "}
              <Link
                href="/services/popcorn-ceiling-removal/burlington/orchard/"
                className="text-red-600 underline underline-offset-4"
              >
                Orchard homeowners
              </Link>{" "}
              see how Brant Hills lessons around attic insulation, bulkheads, and cold-air returns
              transfer across the city.
            </p>
          </div>
        </section>

        {/* GALLERY */}
        <section className="rounded-[32px] bg-[#1f5f73] text-white p-8 shadow-[0_25px_60px_rgba(12,44,57,0.4)]">
          <div className="flex flex-col gap-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/70">
              Wet-look results
            </p>
            <h2 className="text-3xl font-bold">Recent Brant Hills ceilings</h2>
            <p className="text-white/80">
              A gallery inspired by AquaCrown&apos;s bold gradients—showing bright, reflective
              ceilings ready for pot lights, crown, and fresh paint.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((img, i) => (
              <div
                key={img.alt}
                className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/20 shadow-2xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-left text-sm font-semibold">
                  {img.alt}
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
                Brant Hills workflow
              </p>
              <h2 className="text-3xl font-bold text-slate-900">
                Same structure we use in Aldershot, Tyandaga, and Millcroft
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
                <h3 className="mt-2 text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* LOCAL SIGNALS */}
        <section className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl">
            <p className="text-sm font-semibold tracking-[0.3em] text-red-600">
              Why Brant Hills homeowners pick us
            </p>
            <h2 className="text-3xl font-bold text-slate-900">Local signals & cues</h2>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li>
                <strong>Cavendish & Upper Middle:</strong> trucks park on side streets, and we run
                extension cords overhead so sidewalks stay clear for joggers heading to Brant Hills
                Park.
              </li>
              <li>
                <strong>Sheridan College commuters:</strong> we schedule loud sanding outside of
                exam weeks and keep work zones open for hybrid workers using basement offices.
              </li>
              <li>
                <strong>Townhomes off Brant St.:</strong> compact HEPA scrubbers and rolling carts
                so we can navigate narrow garages without touching finished drywall.
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl">
            <p className="text-sm font-semibold tracking-[0.3em] text-red-600">FAQ</p>
            <h2 className="text-3xl font-bold text-slate-900">Brant Hills popcorn removal FAQ</h2>
            <div className="mt-6 space-y-4">
              {FAQS.map((faq) => (
                <div key={faq.q}>
                  <p className="font-semibold text-slate-900">{faq.q}</p>
                  <p className="text-sm text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VISUAL DASHBOARD */}
        <section className="rounded-[40px] bg-gradient-to-r from-[#0f2f3c] via-[#1f5f73] to-[#3a9ab6] text-white p-8 shadow-[0_35px_80px_rgba(6,24,32,0.45)]">
          <div className="flex flex-col gap-4 text-center mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/70">
              Visual run sheet
            </p>
            <h2 className="text-3xl font-bold">Brant Hills at-a-glance</h2>
            <p className="text-white/80">
              Live stats, route maps, and image cards so you can picture the workflow before we
              unload a single ladder.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  stat: "24h",
                  label: "Typical bedroom turnover with scrape, skim & prime",
                },
                {
                  stat: "3 crews",
                  label: "Dedicated Burlington teams rotating between Guelph Line, Cavendish & Sherburne",
                },
                {
                  stat: "12 vents",
                  label: "Average HVAC registers masked on a two-story split-level",
                },
                {
                  stat: "18 photos",
                  label: "Uploaded per project to document containment & finish",
                },
              ].map((item) => (
                <div
                  key={item.stat}
                  className="rounded-3xl border border-white/30 bg-white/10 p-5 text-left shadow-lg backdrop-blur"
                >
                  <p className="text-3xl font-bold text-white">{item.stat}</p>
                  <p className="text-sm text-white/80">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-4">
              <div className="relative aspect-[5/3] overflow-hidden rounded-3xl border border-white/30 shadow-2xl">
                <Image
                  src="/photo/00014popcorn-ceiling-removal-burlington.JPG"
                  alt="Containment with translucent panels set up in Brant Hills living room"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-6 text-left">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70">Containment view</p>
                  <p className="text-lg font-semibold">Garage-to-family room zipper tunnel</p>
                </div>
              </div>
              <div className="relative aspect-[5/3] overflow-hidden rounded-3xl border border-white/30 shadow-2xl">
                <Image
                  src="/photo/00032popcorn-ceiling-removal-burlington.JPG"
                  alt="Close-up of Level 5 skim coat reflecting light in Brant Hills hallway"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-6 text-left">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70">Finish detail</p>
                  <p className="text-lg font-semibold">Level 5 skim before primer on Cavendish Dr.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LOCAL TEXT SECTION */}
        <section className="rounded-[36px] border border-slate-200 bg-gradient-to-br from-white to-slate-100 p-8 shadow-lg">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
                Field notes from Brant Hills routes
              </p>
              <h2 className="text-3xl font-bold text-slate-900">
                Local timing, prep, and cleanup cues from weekly runs
              </h2>
              <p className="text-slate-700">
                We drive Brant Hills every week, so the little details influence how we prep. Early
                morning drives along Guelph Line or Walkers Line tell us when garbage trucks block a
                crescent or when school buses idle at Brant Hills Public. We text ETA windows the
                night before, arrive after the first school rush, and set our quieter scraping tasks
                during times when neighbors work from home. Once containment is zipped, our lead logs
                milestones—scrape start, skim pass count, HEPA inspections—and uploads the timeline
                into the same client dashboard we share on Aldershot and Millcroft jobs.
              </p>
              <p className="text-slate-700">
                Many Brant Hills homeowners have stacked projects: AquaCrown waterproofing in the
                basement, kitchen cabinet deliveries, or garage door replacements. We map those
                trades on a shared calendar so negative-air hoses don&apos;t conflict with sump
                installers, and we wrap floors with slip-resistant runners so appliance dollies can
                roll through after we leave. That coordination is why many clients also hire us for{" "}
                <Link
                  href="/services/wallpaper-removal/"
                  className="text-red-600 underline underline-offset-4"
                >
                  wallpaper removal
                </Link>{" "}
                or{" "}
                <Link
                  href="/services/interior-painting/"
                  className="text-red-600 underline underline-offset-4"
                >
                  ceiling painting
                </Link>{" "}
                once the ceilings flash smooth.
              </p>
              <p className="text-slate-700">
                We also keep spare trim paint, stain block, and touch-up kits on the truck because
                older Brant Hills homes still have natural wood railings or paneled beams. When we
                set up at Cavendish or Sherburne we tape those areas carefully and document every
                surface in photos so the post-job report proves floors, furniture, and built-ins left
                exactly as we found them—just with brighter ceilings overhead.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 space-y-5 shadow-inner">
              <h3 className="text-xl font-semibold text-slate-900">Typical Brant Hills timeline</h3>
              {[
                {
                  time: "7:45 AM",
                  detail:
                    "Crew arrival, driveway staging check, and containment layout walk-through with homeowner.",
                },
                {
                  time: "9:00 AM",
                  detail:
                    "Scrape or skim kickoff, vents sealed, HEPA vacs running, photo upload #1 shared via text.",
                },
                {
                  time: "12:30 PM",
                  detail:
                    "Lunch while skim coat dries; we update you on pass counts and adjust sequence if electricians arrive.",
                },
                {
                  time: "3:00 PM",
                  detail:
                    "Final sanding, raking light inspection, punch-list detailing, and cleanup plan confirmation.",
                },
                {
                  time: "5:30 PM",
                  detail:
                    "Primer or final spray, floors mopped, containment removed, and end-of-day recap with next steps.",
                },
              ].map((item) => (
                <div
                  key={item.time}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <p className="text-sm font-semibold text-red-600">{item.time}</p>
                  <p className="text-sm text-slate-700">{item.detail}</p>
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
              Book your Brant Hills popcorn ceiling removal
            </h2>
            <p className="mt-2 text-white/80">
              Bedrooms finish in 24 hours, full main floors in 2–3 days with Level 5 skim, primer,
              and spotless turnover. We&apos;ll coordinate with painters, movers, or AquaCrown crews
              so schedules stay tight.
            </p>
          </div>
          <div className="flex flex-col gap-3 min-w-[250px]">
            <a
              href={PHONE_HREF}
              className="btn-cta bg-white text-slate-900 hover:bg-slate-100"
            >
              📞 (289) 427-5478
            </a>
            <Link
              href="/quote/"
              className="btn-cta border border-white/40 text-white hover:bg-white/10"
            >
              Get a Brant Hills quote
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
