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
        innerWrap:
          "border-slate-800 bg-gradient-to-b from-slate-950/70 to-slate-900",
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
              <div className="min-w-0">
                <div
                  className={`text-lg font-semibold truncate ${palette.textStrong}`}
                >
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
                {PHONE_NUMBER}
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
              <div className={`font-semibold ${palette.textStrong}`}>
                Burlington Services
              </div>
              <ul className={`mt-3 space-y-2 text-sm ${palette.textMuted}`}>
                <li>
                  <a
                    href="/services/popcorn-ceiling-removal/burlington/aldershot/"
                    className={palette.linkHover}
                  >
                    Popcorn Ceiling Removal in Burlington
                  </a>
                </li>
                <li>
                  <a
                    href="/services/popcorn-ceiling-removal/"
                    className={palette.linkHover}
                  >
                    Popcorn Removal (GTA & Halton)
                  </a>
                </li>
                <li>
                  <a
                    href="/services/interior-painting/"
                    className={palette.linkHover}
                  >
                    Ceiling Painting in Burlington
                  </a>
                </li>
                <li>
                  <a
                    href="/services/drywall-installation/"
                    className={palette.linkHover}
                  >
                    Drywall & Patching in Burlington
                  </a>
                </li>
                <li>
                  <a
                    href="/services/wallpaper-removal/"
                    className={palette.linkHover}
                  >
                    Wallpaper Removal in Burlington
                  </a>
                </li>
              </ul>
              <p className={`mt-3 text-sm ${palette.textSoft}`}>
                Local Burlington specialists for ceiling painting, drywall
                patching and wallpaper removal—fast quotes and paint‑ready
                finishes.
              </p>
            </div>

            {/* Neighbourhoods we serve */}
            <div>
              <div className={`font-semibold ${palette.textStrong}`}>
                Neighbourhoods we serve
              </div>
              <ul
                className={`mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm ${palette.textMuted}`}
              >
                <li>
                  <a
                    href="/services/popcorn-ceiling-removal/burlington/downtown-burlington/"
                    className={palette.linkHover}
                  >
                    Downtown Burlington
                  </a>
                </li>
                <li>
                  <a
                    href="/services/popcorn-ceiling-removal/burlington/aldershot/"
                    className={palette.linkHover}
                  >
                    Aldershot
                  </a>
                </li>
                <li>
                  <a
                    href="/services/popcorn-ceiling-removal/burlington/tyandaga/"
                    className={palette.linkHover}
                  >
                    Tyandaga
                  </a>
                </li>
                <li>
                  <a
                    href="/services/popcorn-ceiling-removal/burlington/headon-forest/"
                    className={palette.linkHover}
                  >
                    Headon Forest
                  </a>
                </li>
                <li>
                  <a
                    href="/services/popcorn-ceiling-removal/burlington/millcroft/"
                    className={palette.linkHover}
                  >
                    Millcroft
                  </a>
                </li>
                <li>
                  <a
                    href="/services/popcorn-ceiling-removal/burlington/brant-hills/"
                    className={palette.linkHover}
                  >
                    Brant Hills
                  </a>
                </li>
                <li>
                  <a
                    href="/services/popcorn-ceiling-removal/burlington/orchard/"
                    className={palette.linkHover}
                  >
                    The Orchard
                  </a>
                </li>
                <li>
                  <a
                    href="/services/popcorn-ceiling-removal/burlington/appleby/"
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
              <div className={`font-semibold ${palette.textStrong}`}>
                Contact & Quotes
              </div>
              <ul className={`mt-3 space-y-2 text-sm ${palette.textMuted}`}>
                <li>
                  <a href="/quote/" className={palette.linkHover}>
                    Get a Fast Quote
                  </a>
                </li>
                <li>
                  <a href="/our-work/" className={palette.linkHover}>
                    Before & After Gallery
                  </a>
                </li>
                <li>
                  <a href="/our-process/" className={palette.linkHover}>
                    Our 24h Smooth Ceiling Process
                  </a>
                </li>
                <li>
                  <a href="/contact/" className={palette.linkHover}>
                    Concierge Team
                  </a>
                </li>
                <li>
                  <a href="/service-areas/" className={palette.linkHover}>
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
                <address
                  className={`mt-2 not-italic text-sm ${palette.textMuted}`}
                >
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
                  <div className={`font-medium ${palette.textStrong}`}>
                    🕘 Hours
                  </div>
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
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <p className={`text-sm ${palette.textSoft}`}>
                © {new Date().getFullYear()} Popcorn Ceiling Removal Burlington.
                Smooth, paint-ready ceilings—local Burlington crew.
              </p>

              {/* Social Media Links */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/yourhandle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="group relative inline-flex items-center justify-center w-10 h-10 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                  }}
                >
                  <svg
                    className="w-5 h-5 text-white relative z-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61585173755274"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                  className="group relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#1877F2] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-5 h-5 text-white relative z-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-700/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600/60 transition-all"
              >
                Call {PHONE_NUMBER}
              </a>
              <a
                href="/quote/"
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600/60 transition-all"
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
