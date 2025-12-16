import Image from "next/image";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";

export const revalidate = 86400;

export const metadata = {
  title: "The Orchard Popcorn Ceiling Removal | Rainbow Clean Ceilings Burlington",
  description:
    "Popcorn ceiling removal for The Orchard Burlington. Color-forward rainbow design, dust-controlled Level 5 skim coats, and fast concierge scheduling.",
  alternates: {
    canonical: "/services/popcorn-ceiling-removal/burlington/orchard/",
  },
  openGraph: {
    title: "The Orchard Popcorn Ceiling Removal Burlington",
    description:
      "Rainbow-inspired smooth ceiling service for The Orchard townhomes and detachments. HEPA sanding, concierge updates, interior painting coordination.",
    url: "/services/popcorn-ceiling-removal/burlington/orchard/",
    type: "article",
  },
};

const vibePills = [
  "Rainbow gradient dust control",
  "Level 5 skim + raking lights",
  "Townhome-friendly containment",
  "Concierge text updates",
];

const rainbowStripes = [
  { name: "Sunrise Living Rooms", color: "from-rose-400 to-orange-400" },
  { name: "Skyline Kitchens", color: "from-sky-400 to-cyan-400" },
  { name: "Garden Bedrooms", color: "from-emerald-400 to-lime-400" },
  { name: "Twilight Basements", color: "from-indigo-400 to-violet-400" },
];

const localLinks = [
  { label: "Millcroft smooth ceilings", href: "/services/popcorn-ceiling-removal/burlington/millcroft/" },
  { label: "Tyandaga luxury finish", href: "/services/popcorn-ceiling-removal/burlington/tyandaga/" },
  { label: "Interior painting team", href: "/services/interior-painting/" },
  { label: "Wallpaper removal crew", href: "/services/wallpaper-removal/" },
];

const faqList = [
  {
    q: "Do rainbow gradients mean colored paint on ceilings?",
    a: "No. The gradient styling is just our visual workflow. Ceilings finish in bright whites unless you request a specialty hue.",
  },
  {
    q: "Can you work in stacked townhomes with narrow entries?",
    a: "Yes. We use slim containment, foam bumpers, and compact HEPA scrubbers that roll through condo hallways without scuffing walls.",
  },
  {
    q: "How do you coordinate around kids or pets?",
    a: "We schedule start times after school drop-off, build rainbow-color-coded traffic lanes, and keep pets safe behind zipper doors.",
  },
];

export default function OrchardPage() {
  return (
    <div className="bg-slate-900 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[conic-gradient(at_top,_#ff5f6d,_#ffc371,_#47cf73,_#36cfc9,_#8458f5,_#ff5f6d)] opacity-30 blur-3xl" />
        </div>
        <div className="relative container-x py-20 md:py-28 space-y-10">
          <p className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2 text-sm uppercase tracking-[0.4em] text-white/70">
            The Orchard • Burlington
          </p>
          <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Rainbow-inspired popcorn ceiling removal for The Orchard
              </h1>
              <p className="text-lg text-white/80">
                The Orchard is colorful already—townhomes lined with apple and pear trees, new builds
                with bold accent walls, and families who love playful interiors. We built a rainbow
                workflow to match: color-coded containment, level-by-level playlists, and Level 5
                skim coats that make every room pop (without dust storms).
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-white/80">
                {vibePills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-white/30 px-4 py-1 uppercase tracking-wide"
                  >
                    {pill}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={PHONE_HREF}
                  className="btn-cta bg-white text-slate-900 hover:bg-slate-200"
                >
                  📞 {PHONE_NUMBER}
                </a>
                <Link
                  href="/quote/"
                  className="btn-cta border border-white/50 text-white hover:bg-white/10"
                >
                  Book Orchard walkthrough
                </Link>
              </div>
            </div>
            <div className="rounded-[30px] bg-white/10 p-6 shadow-2xl backdrop-blur">
              <h2 className="text-2xl font-semibold">Color-coded timeline</h2>
              <p className="text-sm text-white/70">
                Every phase gets its own color so you know what's happening at a glance.
              </p>
              <div className="mt-6 space-y-3">
                {rainbowStripes.map((stripe) => (
                  <div key={stripe.name} className="flex items-center gap-3">
                    <span
                      className={`h-2 w-16 rounded-full bg-gradient-to-r ${stripe.color}`}
                      aria-hidden
                    />
                    <p className="text-sm text-white/80">{stripe.name}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-4 text-sm text-white/70">
                Need multi-property coordination? We mirror this color system at{" "}
                <Link
                  href="/services/popcorn-ceiling-removal/burlington/downtown-burlington/"
                  className="underline"
                >
                  Downtown condos
                </Link>{" "}
                and{" "}
                <Link
                  href="/services/popcorn-ceiling-removal/burlington/headon-forest/"
                  className="underline"
                >
                  Headon Forest
                </Link>{" "}
                so moving between addresses stays easy on the eyes.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOSAIC */}
      <section className="bg-slate-950/60 py-20">
        <div className="container-x space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Prism workflow for Orchard townhomes & detachments
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Containment rainbow",
                copy: "Poly walls in bold hues mark traffic lanes so kids know where to walk (and where not to).",
              },
              {
                title: "Level 5 spectrum",
                copy: "We skim twice, sand with HEPA vacuums, then shine LED colors to catch shadows before primer.",
              },
              {
                title: "Concierge concierge",
                copy: "Playlists, photo dailies, and hex-coded reminders texted to your phone every few hours.",
              },
            ].map((card) => (
              <div key={card.title} className="rounded-[28px] border border-white/15 bg-white/5 p-6">
                <h3 className="text-2xl font-semibold">{card.title}</h3>
                <p className="text-white/80 mt-3">{card.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + STORY */}
      <section className="py-20 bg-gradient-to-br from-[#ff9770] via-[#fcb045] to-[#fd6585]">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div className="rounded-[32px] bg-white/10 border border-white/20 p-6 shadow-2xl backdrop-blur">
            <h3 className="text-2xl font-semibold">Send your Orchard photos</h3>
            <p className="text-sm text-white/75">
              Share square footage, ceiling height, painted vs. unpainted texture, and whether rooms
              connect to future accent colors. We'll reply with a day-by-day timeline and color-coded
              prep notes.
            </p>
            <QuoteForm />
          </div>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-white/70">
              Case study
            </p>
            <h2 className="text-3xl font-bold">Pastel kitchen + rainbow playroom</h2>
            <p className="text-white/85">
              A homeowner near Sutton Drive wanted smooth ceilings before repainting in soft pastels.
              We staged containment with bright panel edges, scraped popcorn overnight, and skimmed
              twice before sunrise. Kids loved watching the gradient lights while we sanded, and by
              evening the ceilings were primed pure white for the decorators to add blush, mint, and
              sky blue trims.
            </p>
            <ul className="space-y-2 text-white/80">
              <li>• Rainbow-coded containment: red for no entry, green for safe walkways</li>
              <li>• Pot-light layout aligned with pendant cluster over the island</li>
              <li>• Shared playlist matched to each room so kids knew the schedule</li>
            </ul>
            <p className="italic text-white/80">
              "They turned our house into a fun renovation experience and left zero glitter of dust."
              - M. Hughes, The Orchard
            </p>
          </div>
        </div>
      </section>

      {/* LOCAL LINKS */}
      <section className="py-20 bg-slate-950">
        <div className="container-x max-w-4xl text-center space-y-6">
          <h2 className="text-3xl font-bold">Connect the rainbow</h2>
          <p className="text-white/80">
            Compare color-forward ceilings with nearby neighborhoods and supporting services:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {localLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center rounded-full border border-white/20 px-5 py-2 text-sm hover:bg-white/10 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="py-20 bg-slate-900">
        <div className="container-x grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-6 rounded-[32px] border border-white/15 bg-white/5 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm uppercase tracking-[0.4em] text-white/70">FAQ</p>
            <h2 className="text-3xl font-bold">The Orchard popcorn removal questions</h2>
            <div className="space-y-4 text-white/85">
              {faqList.map((faq) => (
                <div key={faq.q}>
                  <p className="font-semibold text-white">{faq.q}</p>
                  <p className="text-sm text-white/80">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] border border-white/15 bg-white/5 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm uppercase tracking-[0.4em] text-white/70">
              Ready for rainbows?
            </p>
            <h2 className="text-3xl font-bold">Book your Orchard ceiling refresh</h2>
            <p className="text-white/80">
              Bedrooms finish in a day, main floors in 2 to 3 days, including Level 5 skim, primer,
              and cleanup.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={PHONE_HREF}
                className="btn-cta bg-white text-slate-900 hover:bg-slate-200"
              >
                📞 {PHONE_NUMBER}
              </a>
              <Link
                href="/quote/"
                className="btn-cta border border-white/50 text-white hover:bg-white/10"
              >
                Get Orchard quote
              </Link>
            </div>
            <p className="mt-4 text-sm text-white/70">
              Need multi-room painting? Pair this with{" "}
              <Link href="/services/interior-painting/" className="underline">
                Burlington interior painting
              </Link>{" "}
              or our{" "}
              <Link href="/services/popcorn-ceiling-removal/burlington/appleby/" className="underline">
                Appleby smooth ceiling
              </Link>{" "}
              team if you have a second property closer to the lake.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
