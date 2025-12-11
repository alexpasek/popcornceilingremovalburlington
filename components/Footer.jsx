"use client";
// components/Footer.jsx
import { usePathname } from "next/navigation";
import GoogleReviewsWall from "./GoogleReviewsWall";
import { SERVICE_AREAS, PHONE_HREF, PHONE_NUMBER } from "@/app/config";
import GoogleReviewsMulti from "./GoogleReviewsMulti";
export default function Footer() {
  const pathname = usePathname();
  const galleryTheme = pathname?.startsWith("/our-work");
  const palette = galleryTheme
    ? {
        footerShell: "border-slate-800 bg-slate-950 text-white",
        innerWrap: "border-slate-800 bg-gradient-to-b from-slate-950/70 to-slate-900",
        textStrong: "text-white",
        textMuted: "text-white/70",
        textSoft: "text-white/60",
        linkHover: "hover:text-white",
        panelBorder: "border-slate-800",
      }
    : {
        footerShell: "border-slate-200 bg-white text-slate-900",
        innerWrap: "border-slate-200 bg-gradient-to-b from-white to-slate-50",
        textStrong: "text-slate-900",
        textMuted: "text-slate-700",
        textSoft: "text-slate-600",
        linkHover: "hover:text-slate-900",
        panelBorder: "border-slate-200",
      };
  return (
    <footer
      className={`mt-16 border-t ${palette.footerShell}`}
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* Real Google Reviews */}
      <GoogleReviewsWall />

      {/* Modern footer */}
      <div className={`border-t ${palette.innerWrap}`}>
        <div className="container-x py-10">
          {/* Brand + CTA */}
          <div
            className={`flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b ${palette.panelBorder}`}
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-rose-500 via-orange-400 to-amber-300 p-[2px] shadow-lg">
                <div
                  className={`h-full w-full rounded-[14px] ${
                    galleryTheme ? "bg-slate-950" : "bg-white"
                  } flex items-center justify-center`}
                >
                  <img
                    src="/logo.png"
                    alt="Popcorn Ceiling Removal Burlington"
                    className="h-8 w-8 object-contain"
                  />
                </div>
              </div>
              <div className="min-w-0">
                <div className={`text-lg font-semibold truncate ${palette.textStrong}`}>
                  Popcorn Ceiling Removal Burlington
                </div>
                <div className={`text-sm truncate ${palette.textSoft}`}>
                  Smooth, paint-ready ceilings in 24h
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600/60"
              >
                📞 {PHONE_NUMBER}
              </a>
              <a
                href="/quote/"
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600/60"
              >
                Book Site Visit
              </a>
            </div>
          </div>

          {/* Burlington-focused columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
            {/* Burlington Services */}
            <div>
              <div className={`font-semibold ${palette.textStrong}`}>Burlington Services</div>
              <ul className={`mt-3 space-y-2 text-sm ${palette.textMuted}`}>
                <li><a href="/popcorn-ceiling-removal/burlington/" className={palette.linkHover}>Popcorn Ceiling Removal in Burlington</a></li>
                <li><a href="/services/popcorn-ceiling-removal/" className={palette.linkHover}>Popcorn Removal (GTA & Halton)</a></li>
                <li><a href="/services/interior-painting/" className={palette.linkHover}>Ceiling Painting in Burlington</a></li>
                <li><a href="/services/drywall-installation/" className={palette.linkHover}>Drywall & Patching in Burlington</a></li>
                <li><a href="/services/wallpaper-removal/" className={palette.linkHover}>Wallpaper Removal in Burlington</a></li>
              </ul>
              <p className={`mt-3 text-sm ${palette.textSoft}`}>Local Burlington specialists for ceiling painting, drywall patching and wallpaper removal—fast quotes and paint‑ready finishes.</p>
            </div>

            {/* Neighbourhoods we serve */}
            <div>
              <div className={`font-semibold ${palette.textStrong}`}>
                Neighbourhoods we serve
              </div>
              <ul className={`mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm ${palette.textMuted}`}>
                <li>
                  <a
                    href="/popcorn-ceiling-removal/burlington/"
                    className={palette.linkHover}
                  >
                    Downtown Burlington
                  </a>
                </li>
                <li>
                  <a
                    href="/popcorn-ceiling-removal/burlington/"
                    className={palette.linkHover}
                  >
                    Aldershot
                  </a>
                </li>
                <li>
                  <a
                    href="/popcorn-ceiling-removal/burlington/"
                    className={palette.linkHover}
                  >
                    Tyandaga
                  </a>
                </li>
                <li>
                  <a
                    href="/popcorn-ceiling-removal/burlington/"
                    className={palette.linkHover}
                  >
                    Headon Forest
                  </a>
                </li>
                <li>
                  <a
                    href="/popcorn-ceiling-removal/burlington/"
                    className={palette.linkHover}
                  >
                    Millcroft
                  </a>
                </li>
                <li>
                  <a
                    href="/popcorn-ceiling-removal/burlington/"
                    className={palette.linkHover}
                  >
                    Brant Hills
                  </a>
                </li>
                <li>
                  <a
                    href="/popcorn-ceiling-removal/burlington/"
                    className={palette.linkHover}
                  >
                    The Orchard
                  </a>
                </li>
                <li>
                  <a
                    href="/popcorn-ceiling-removal/burlington/"
                    className={palette.linkHover}
                  >
                    Appleby
                  </a>
                </li>
              </ul>
              <p className={`mt-4 text-sm ${palette.textSoft}`}>
                Also serving: Oakville · Hamilton · Mississauga · Etobicoke ·
                Milton · Grimsby · North York
              </p>
            </div>

            {/* Contact & Quotes */}
            <div>
              <div className={`font-semibold ${palette.textStrong}`}>Contact & Quotes</div>
              <ul className={`mt-3 space-y-2 text-sm ${palette.textMuted}`}>
                <li>
                  <a
                    href="/quote/"
                    className={palette.linkHover}
                  >
                    Get a Fast Quote
                  </a>
                </li>
                <li>
                  <a
                    href="/our-work/"
                    className={palette.linkHover}
                  >
                    Before & After Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="/our-process/"
                    className={palette.linkHover}
                  >
                    Our 24h Smooth Ceiling Process
                  </a>
                </li>
                <li>
                  <a
                    href="/contact/"
                    className={palette.linkHover}
                  >
                    Concierge Team
                  </a>
                </li>
                <li>
                  <a
                    href="/service-areas/"
                    className={palette.linkHover}
                  >
                    All Service Areas
                  </a>
                </li>
              </ul>

              {/* Location + Hours */}
              <div
                className="mt-5"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <address className={`mt-2 not-italic text-sm ${palette.textMuted}`}>
                  <a
                    className="block hover:underline"
                    href="https://maps.google.com/?q=3321+Mainway,+Burlington,+ON+L7M+1A6"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open address in Google Maps"
                  >
                    <span itemProp="streetAddress">3321 Mainway</span>,{" "}
                    <span itemProp="addressLocality">Burlington</span>,{" "}
                    <span itemProp="addressRegion">ON</span>{" "}
                    <span itemProp="postalCode">L7M 1A6</span>
                  </a>
                  <meta itemProp="addressCountry" content="CA" />
                </address>
                <div
                  className={`mt-3 text-sm ${palette.textMuted}`}
                  itemProp="openingHoursSpecification"
                >
                  <div className={`font-medium ${palette.textStrong}`}>🕘 Hours</div>
                  <meta itemProp="opens" content="08:00" />
                  <meta itemProp="closes" content="18:00" />
                  <p itemProp="openingHours">Mon–Sun: 8:00 AM – 6:00 PM</p>
                </div>
                <p className={`mt-3 text-sm ${palette.textSoft}`}>
                  Burlington-first: Downtown, Aldershot, Millcroft, Tyandaga,
                  Headon Forest, Brant Hills, The Orchard, Appleby.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className={`flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-6 border-t ${palette.panelBorder}`}
          >
            <p className={`text-sm ${palette.textSoft}`}>
              © {new Date().getFullYear()} Popcorn Ceiling Removal Burlington.
              Smooth, paint-ready ceilings—local Burlington crew.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-500 text-white font-bold px-4 py-2 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600/60"
              >
                Call {PHONE_NUMBER}
              </a>
              <a
                href="/quote/"
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-500 text-white font-bold px-4 py-2 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600/60"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Social buttons (unchanged) ---------- */
function SocialButtons({
  instagram,
  facebook,
  size = 56,
  icon = 24,
  gap = 10,
  variant = "solid",
  className = "",
}) {
  const btnBase =
    "inline-flex items-center justify-center rounded-full border transition-transform duration-200 will-change-transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_12px_28px_-14px_rgba(0,0,0,0.45),_0_2px_6px_rgba(0,0,0,0.08)] border-black/10 text-white";

  const igBg =
    variant === "gradient"
      ? "conic-gradient(from 210deg, #f58529, #dd2a7b, #8134af, #515bd4, #f58529)"
      : "#E1306C";
  const fbBg = "#1877F2";

  return (
    <ul className={`flex ${className}`} style={{ gap }}>
      <li>
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className={btnBase}
          style={{
            width: size,
            height: size,
            background: igBg,
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,.35), inset 0 -1px 0 rgba(0,0,0,.12), 0 18px 36px -16px rgba(0,0,0,.35), 0 6px 12px rgba(0,0,0,.12)",
          }}
        >
          <InstagramIcon style={{ width: icon, height: icon }} />
        </a>
      </li>
      <li>
        <a
          href={facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className={btnBase}
          style={{
            width: size,
            height: size,
            background: fbBg,
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,.35), inset 0 -1px 0 rgba(0,0,0,.12), 0 18px 36px -16px rgba(0,0,0,.35), 0 6px 12px rgba(0,0,0,.12)",
          }}
        >
          <FacebookIcon style={{ width: icon, height: icon }} />
        </a>
      </li>
    </ul>
  );
}

/* ---------- Inline SVGs ---------- */
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6-1.5a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"
      />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M22 12.06C22 6.49 17.52 2 11.94 2S2 6.49 2 12.06C2 17.08 5.66 21.21 10.44 22v-6.97H8.25v-2.9h2.19V9.7c0-2.17 1.29-3.36 3.27-3.36.95 0 1.95.17 1.95.17v2.14h-1.1c-1.09 0-1.43.68-1.43 1.38v1.99h2.5l-.4 2.9h-2.1V22C18.34 21.21 22 17.08 22 12.06z"
      />
    </svg>
  );
}
