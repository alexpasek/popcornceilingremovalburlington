import Image from "next/image";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";

export const revalidate = 86400;

export const metadata = {
  title: "Appleby Popcorn Ceiling Removal Burlington | Lakeview Smooth Ceilings",
  description:
    "Appleby Burlington popcorn ceiling removal with Level 5 skim coats, dust-controlled containment, and lake-humidity plans. Fast quotes, concierge communication, and interior painting add-ons.",
  alternates: {
    canonical: "/services/popcorn-ceiling-removal/burlington/appleby/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal Appleby Burlington",
    description:
      "Smooth ceiling specialists for Appleby lakeview homes, condos, and townhouses. HEPA sanding, pot-light coordination, and 24h paint-ready finishes.",
    url: "/services/popcorn-ceiling-removal/burlington/appleby/",
    type: "article",
  },
};

const heroHighlights = [
  "Lakeview dust-control",
  "Level 5 skim + raking light",
  "Pot-light & paint coordination",
];

const logistics = [
  {
    time: "7:45 AM",
    title: "Boardwalk arrival",
    detail:
      "Crew stages on Hampton Heath or Burloak, lays neoprene mats over pavers, and wraps railings before unloading.",
  },
  {
    time: "12:15 PM",
    title: "Humidity check",
    detail:
      "We measure lake humidity, swap to fast-set compounds if needed, and text you updated dry times for each room.",
  },
  {
    time: "4:30 PM",
    title: "Lake breeze cleanup",
    detail:
      "Containment comes down, floors vacuumed twice, and final pictures sent before you walk back in from the shore.",
  },
];

const galleryCards = [
  {
    src: "/photo/00008popcorn-ceiling-removal-burlington.JPG",
    title: "Appleby lakeview living room",
    copy: "Popcorn removed, skimmed, and sprayed bright white before sunset so the lake light bounced evenly.",
  },
  {
    src: "/photo/00021popcorn-ceiling-removal-burlington.JPG",
    title: "Condo hallway dust-free",
    copy: "Slim containment fits elevators, HEPA scrubbers roll quietly along carpeted corridors.",
  },
  {
    src: "/photo/00030popcorn-ceiling-removal-burlington.JPG",
    title: "Townhome kitchen + pot lights",
    copy: "Ceilings smoothed, pot-light layout drilled, and paint-ready before cabinets were delivered.",
  },
];

const seoBlocks = [
  {
    heading: "Appleby lakeview popcorn ceiling removal",
    copy: `
Appleby homeowners love natural light pouring in from the lake, but popcorn ceilings soak up that brightness. Our Appleby-first approach replaces textured ceilings with Level 5 smooth surfaces that reflect daylight and coordinate with coastal palettes. We build clear poly tunnels that keep salt air out, wrap stone patios before staging equipment, and control humidity with smart sensors during skim coats.

We also speak the language of Appleby condos near Lakeshore Road. Property managers expect quiet crews, HEPA filtration, and full documentation. We pre-book elevators, protect corridors, and deliver paint-ready ceilings in 24 hours for spaces under 400 sq ft. Each project gets a multimedia log-photos, humidity readings, and raking-light videos-so your concierge can confirm the halls stayed spotless.
    `,
  },
  {
    heading: "Popcorn ceiling removal Burlington-wide",
    copy: `
While our neighbors in Appleby love beach walks, we bring the same smooth ceiling expertise across Burlington. Compare our Appleby notes with recent work in 
<Link href="/services/popcorn-ceiling-removal/burlington/downtown-burlington/" className="text-blue-600 hover:underline">Downtown Burlington</Link>, 
<Link href="/services/popcorn-ceiling-removal/burlington/aldershot/" className="text-blue-600 hover:underline">Aldershot</Link>, and 
<Link href="/services/popcorn-ceiling-removal/burlington/headon-forest/" className="text-blue-600 hover:underline">Headon Forest</Link>. Internal linking ties every route back to this Appleby HQ, telling search engines that our Burlington service network is real, local, and constantly active.

We also coordinate with supporting services: 
<Link href="/services/drywall-installation/" className="text-blue-600 hover:underline">drywall installation</Link> for soffits, 
<Link href="/services/interior-painting/" className="text-blue-600 hover:underline">interior painting</Link> for coastal color palettes, and 
<Link href="/services/wallpaper-removal/" className="text-blue-600 hover:underline">wallpaper removal</Link> for accent walls. Mention them in your Appleby copy to keep topical authority high.
    `,
  },
  {
    heading: "SEO checklist for Appleby smooth ceilings",
    copy: `
Every Appleby landing page should weave in high-intent phrases like "popcorn ceiling removal Burlington", "Level 5 skim coat Appleby", "dust-free condo ceiling scraping", and "lakeview smooth ceilings". Use them naturally inside case studies, service explanations, and FAQs. Pepper in location cues-citing Burloak Drive, Hampton Heath Road, Lakeshore Road, and waterfront parks-so search engines tie your content to real Appleby addresses.

Remember internal linking. Reference nearby neighborhoods like 
<Link href="/services/popcorn-ceiling-removal/burlington/brant-hills/" className="text-blue-600 hover:underline">Brant Hills</Link> and 
<Link href="/services/popcorn-ceiling-removal/burlington/orchard/" className="text-blue-600 hover:underline">The Orchard</Link>, then link back to the master 
<Link href="/services/popcorn-ceiling-removal/" className="text-blue-600 hover:underline">Burlington popcorn removal page</Link>. Close each section with a CTA pointing to 
<Link href="/quote/" className="text-blue-600 hover:underline">/quote/</Link> or callouts to PHONE_NUMBER. This consistent structure boosts dwell time and anchors Appleby within the Burlington service map.
    `.replace("PHONE_NUMBER", PHONE_NUMBER),
  },
];

const faqList = [
  {
    q: "Can you refinish Appleby condos without dust entering shared hallways?",
    a: "Yes. We use zippered containment, foam-edged panels, and HEPA scrubbers that run quietly, plus we log every hallway photo for the concierge.",
  },
  {
    q: "How do you handle lake humidity?",
    a: "We monitor humidity all day, use fast-drying compounds, and run dehumidifiers when lake breezes spike moisture. We won't prime until readings are safe.",
  },
  {
    q: "Can you coordinate with waterfront renovations?",
    a: "Absolutely. We sync our timeline with kitchen installs, flooring deliveries, and painting crews so your waterfront renovation stays on track.",
  },
  {
    q: "Do you coordinate pot lights and paint colors?",
    a: "Absolutely. We'll mark pot-light layouts, pre-drill openings, and hand off to our interior painting team for beach-inspired color schemes.",
  },
  {
    q: "Can you work around vacation schedules?",
    a: "We offer concierge texting, photo recaps, and can run crews while you're at the beach, cottage, or out of town. Your home stays secure and clean.",
  },
];

const storySections = [
  {
    heading: "Lakewalk logistics and staging path",
    paragraphs: [
      "Appleby sidewalks get busy with sunrise walkers and cyclists headed toward Paletta Mansion. When we schedule popcorn ceiling removal Burlington homeowners expect us to keep that path clear. Our crew arrives early, parks on secondary streets like Hampton Heath or Spruce Avenue, rolls equipment on padded carts, and lays neoprene ramps over curbs so strollers and scooters can keep moving while we build containment inside. We photograph driveway access, text an arrival countdown, and label every doorway with color-coded signage so families, cleaners, and pet walkers know which rooms stay open. ",
      "Because Appleby streets meet Lakeshore at tight angles, we also keep a staging map for every block. That map shows where to position HEPA scrubbers, how to route vacuum hoses without crossing a neighbor's flower bed, and which entrances to use if a power-washing crew is on site. We replicate that process on cross-town runs to {LINK:Millcroft}Millcroft{/LINK} or {LINK:Tyandaga}Tyandaga{/LINK} so our Burlington popcorn ceiling removal plan feels identical no matter which neighborhood calls first.",
    ],
  },
  {
    heading: "Seasonal humidity plan for lakeside ceilings",
    paragraphs: [
      "Appleby's lake breeze changes daily. Warm mornings along Burloak can spike humidity past 70 percent, while spring winds drop temperatures fast. We chart those swings inside Notion and pair them with the compounds we load on each truck. When humidity is high we add accelerator packets, run dehumidifiers in hallways, and slow down our skim coat schedule so Level 5 finishes cure without ripples. On dry fall days we loosen the timeline so families can keep windows cracked while still getting a dust-controlled popcorn removal Burlington residents rave about.",
      "Humidity charts also inform how we coordinate with painters. If we see rain moving in from Oakville, we'll book our {LINK:Interior}interior painting{/LINK} crew for the following morning instead of the same afternoon. That buffer protects the bright whites popular in Appleby kitchens and keeps your finish warranty intact. We share the humidity log with every homeowner, so you know exactly why we pick certain drying times or primer windows.",
    ],
  },
  {
    heading: "Condo board expectations, documented",
    paragraphs: [
      "Appleby condos along Lakeshore Road have precise rules: elevator bookings, corridor protection, quiet hours, and documentation for security. Our popcorn ceiling removal Burlington concierge handles all of it. We send the board our WSIB certificate, liability insurance, material SDS sheets, and a schedule showing when HEPA machines turn on or off. If a concierge needs elevator mats or magnetic door sleeves we provide those too, and we upload hallway photos to a shared drive so they can verify we left zero dust.",
      "Inside each condo we build slim rainbow containment, vent negative air to the balcony, and cover fire sprinklers with approved shields. Residents appreciate that we finish smaller suites within 24 hours, meaning they can book the moving elevator once instead of twice. That same condo process works for {LINK:Downtown}Downtown Burlington{/LINK} towers, {LINK:Aldershot}Aldershot{/LINK} mid-rises, and lakefront rentals, reinforcing Appleby's connection to the broader Burlington network.",
    ],
  },
  {
    heading: "Full-service handoff so Appleby ceilings stay bright",
    paragraphs: [
      "Our Appleby ceiling makeover rarely ends with skim coats. Homeowners often request accent paint, wallpaper removal, new crown, or pot-light coordination. Because our popcorn ceiling removal Burlington crews sit under the same roof as our {LINK:Drywall}drywall installation{/LINK}, {LINK:Wallpaper}wallpaper removal{/LINK}, and {LINK:Interior}interior painting{/LINK} teams, we can bundle everything into one plan. That saves you from juggling contractors while you manage cottage weekends, kids' clubs, or marina schedules.",
      "After every Appleby project we compile a digital handoff: humidity readings, primer brands, sheen levels, and touch-up instructions. If you ever notice a mark from moving furniture or you add extra pot lights a year later, we can pull that record and match the finish instantly. That level of organization keeps our Appleby reviews glowing and helps Google see us as the Burlington authority on popcorn ceiling removal, Level 5 smooth coats, and dust-controlled renovations.",
    ],
  },
];

const placeholderLinks = {
  Millcroft: "/services/popcorn-ceiling-removal/burlington/millcroft/",
  Tyandaga: "/services/popcorn-ceiling-removal/burlington/tyandaga/",
  Interior: "/services/interior-painting/",
  Downtown: "/services/popcorn-ceiling-removal/burlington/downtown-burlington/",
  Aldershot: "/services/popcorn-ceiling-removal/burlington/aldershot/",
  Drywall: "/services/drywall-installation/",
  Wallpaper: "/services/wallpaper-removal/",
};

function convertPlaceholders(text) {
  let output = text;
  for (const [key, href] of Object.entries(placeholderLinks)) {
    const anchor = `<a href="${href}" class="text-blue-600 hover:underline">`;
    output = output.replaceAll(`{LINK:${key}}`, anchor);
  }
  return output.replaceAll("{/LINK}", "</a>");
}

function SeoBlock({ heading, copy }) {
  return (
    <article className="space-y-4 rounded-[32px] border border-slate-200 bg-white/90 p-6 shadow-lg">
      <h3 className="text-2xl font-bold text-slate-900">{heading}</h3>
      <div className="space-y-4 text-slate-700 leading-relaxed">
        {copy.split("\n").map(
          (paragraph) =>
            paragraph.trim() && (
              <p
                key={paragraph}
                dangerouslySetInnerHTML={{ __html: paragraph.trim() }}
              />
            )
        )}
      </div>
    </article>
  );
}

export default function ApplebyPage() {
  return (
    <div className="bg-gradient-to-b from-slate-100 via-white to-slate-200">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-40">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.4),_transparent_60%)]" />
        </div>
        <div className="relative container-x py-16 lg:py-24 space-y-10">
          <div className="flex flex-wrap gap-3">
            {["Appleby lakeview", "Popcorn ceiling removal Burlington", "Level 5 smooth in 24h"].map(
              (pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/80"
                >
                  {pill}
                </span>
              )
            )}
          </div>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Appleby popcorn ceiling removal with lake-level dust control
              </h1>
              <p className="text-lg text-white/80">
                We refinish Appleby ceilings with the same care you'd expect along Burloak and
                Lakeshore. Color-coded containment, HEPA scrubbers, humidity sensors, and Level 5
                skim coats bring modern elegance to townhomes, condos, and waterfront detachments.
                Rooms stay livable, resort-ready, and bright within a day.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-white/80">
                {heroHighlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/20 px-3 py-1"
                  >
                    {item}
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
                  Book Appleby walkthrough
                </Link>
              </div>
            </div>
            <div className="grid gap-6 rounded-[32px] border border-white/15 bg-white/5 p-6 shadow-2xl backdrop-blur">
              {logistics.map((item) => (
                <div key={item.title} className="flex flex-col gap-1 border-b border-white/10 pb-4 last:border-none last:pb-0">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
                      {item.time}
                    </span>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-sm text-white/80">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FORM AND STORY */}
      <section className="py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[0.9fr,1.1fr] items-start">
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900">Send Appleby photos</h2>
            <p className="text-sm text-slate-600 mb-4">
              Include square footage, ceiling height, painted vs. unpainted texture, and if
              contractors are scheduled. We'll reply same-day with scope, timeline, and Lake Ontario
              humidity precautions.
            </p>
            <QuoteForm />
          </div>
          <div className="space-y-5 text-slate-700">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-500">
              Case study
            </p>
            <h2 className="text-3xl font-bold text-slate-900">Lakeview condo glow-up</h2>
            <p>
              An Appleby condo owner needed smooth ceilings before listing their unit with a lake
              view. We booked the service elevator, taped the corridor, and built a slim containment
              tunnel from the lobby to the suite. Popcorn came down in a single afternoon, we skimmed
              twice, sanded with HEPA vacuums, and primed within 24 hours. The realtor called the
              finish "gallery-ready" and the listing sold above asking the following week.
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li>Condo board documentation with photos before, during, after</li>
              <li>Vent masks and window seals to block lake humidity gusts</li>
              <li>Painting add-on completed the day after primer dried</li>
            </ul>
            <p className="italic text-slate-600">
              "They finished before my stager arrived, and the ceilings bounced daylight perfectly."
              - K. Morgan, Appleby
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 bg-white/70">
        <div className="container-x space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900">
              Appleby smooth ceiling gallery
            </h2>
            <p className="text-slate-600">
              Color-drenched sunrise, bright noon light, and evening glow-our finishes stay
              consistent across every part of the day.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {galleryCards.map((card) => (
              <div key={card.title} className="rounded-[32px] border border-slate-200 bg-white shadow-lg">
                <div className="relative h-64 w-full border-b border-slate-100">
                  <Image
                    src={card.src}
                    alt={card.title}
                    fill
                    className="object-cover rounded-t-[32px]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 space-y-2 text-slate-700">
                  <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
                  <p>{card.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO BLOCKS */}
      <section className="py-16">
        <div className="container-x space-y-8">
          {seoBlocks.map((block) => (
            <SeoBlock key={block.heading} heading={block.heading} copy={block.copy} />
          ))}
        </div>
      </section>

      {/* STORY SECTIONS */}
      <section className="py-16 bg-gradient-to-br from-white to-slate-100">
        <div className="container-x space-y-8">
          {storySections.map((section) => (
            <article
              key={section.heading}
              className="rounded-[36px] border border-slate-200 bg-white p-6 shadow-lg space-y-4"
            >
              <h2 className="text-3xl font-bold text-slate-900">{section.heading}</h2>
              {section.paragraphs.map((paragraph, idx) => {
                return (
                  <p
                    key={idx}
                    className="text-slate-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: convertPlaceholders(paragraph) }}
                  />
                );
              })}
            </article>
          ))}
        </div>
      </section>

      {/* LOCAL SIGNALS */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Appleby signals we track</h2>
            <ul className="space-y-3 text-white/80">
              <li>Wind warnings over Lake Ontario that affect drying times</li>
              <li>Burloak marina deliveries interfering with parking</li>
              <li>Split-level HVAC systems needing double containment</li>
              <li>Pet-friendly schedules for homeowners walking the waterfront</li>
            </ul>
          </div>
          <div className="space-y-3 rounded-[32px] border border-white/15 bg-white/5 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">Internal link mix</p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <Link href="/services/popcorn-ceiling-removal/burlington/millcroft/" className="underline">
                Millcroft smooth ceiling
              </Link>
              <Link href="/services/popcorn-ceiling-removal/burlington/tyandaga/" className="underline">
                Tyandaga luxury finish
              </Link>
              <Link href="/services/popcorn-ceiling-removal/burlington/brant-hills/" className="underline">
                Brant Hills workflow
              </Link>
              <Link href="/services/popcorn-ceiling-removal/burlington/orchard/" className="underline">
                The Orchard rainbow plan
              </Link>
            </div>
            <p className="text-white/70">
              These links keep our Appleby page tied to the broader Burlington service map-exactly
              what search engines want to see.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="py-16 bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-4 rounded-[32px] border border-slate-200 bg-white p-6 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-900">Appleby popcorn removal FAQ</h2>
            <div className="space-y-3 text-slate-700">
              {faqList.map((faq) => (
                <div key={faq.q}>
                  <p className="font-semibold text-slate-900">{faq.q}</p>
                  <p className="text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-700 p-6 text-white shadow-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">
              Ready for smooth ceilings?
            </p>
            <h2 className="text-3xl font-bold">Book your Appleby popcorn ceiling removal</h2>
            <p className="text-white/80">
              Bedrooms wrap in 24 hours. Entire main floors in 2 to 3 days, including Level 5 skim,
              primer, and cleanup. We'll coordinate around your lakewalk schedule.
            </p>
            <p className="text-white/70">
              Heading out of town? We text daily photo recaps, humidity logs, and punch-list
              updates so you can monitor the work from cottage docks, office boardrooms, or Pearson
              departure gates. When you return, ceilings will already be bright, dust-free, and
              ready for the next phase of your Appleby renovation.
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
                className="btn-cta border border-white/60 text-white hover:bg-white/10"
              >
                Get Appleby quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
