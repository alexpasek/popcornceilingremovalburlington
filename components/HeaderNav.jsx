"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";

/* Accent palette shared across nav + dropdown shells */
const ACCENT = {
  text: "text-slate-500",
  textStrong: "text-slate-900",
  ring: "ring-rose-500/25",
  border: "border-slate-200/80",
  linkHover: "hover:text-slate-900",
};

const SAFE_VW_PX = 24; // safe padding from viewport edges
const SERVICES_PANEL_W = 420; // narrow column for Services
const LOCATIONS_MEGA_W = 860; // roomy grid for Locations

/* ---------- Breadcrumb helpers ---------- */

/** Map slugs to pretty labels when we know them */
const SLUG_LABELS = {
  services: "Services",
  "popcorn-ceiling-removal": "Popcorn Ceiling Removal",
  popcorn: "Popcorn Ceiling Removal",
  "drywall-installation": "Drywall Installation",
  wallpaper: "Wallpaper Removal",
  "interior-painting": "Interior Painting",
  "our-work": "Our Work",
  "our-process": "Our Process",
  "service-areas": "Service Areas",
  contact: "Contact",
  blog: "Blog",

  // location hubs
  "popcorn-removal": "Popcorn Removal",

  // cities
  mississauga: "Mississauga",
  toronto: "Toronto",
  oakville: "Oakville",
  burlington: "Burlington",
  hamilton: "Hamilton",
  milton: "Milton",
  etobicoke: "Etobicoke",
  grimsby: "Grimsby",
  "st-catharines": "St. Catharines",
};

/** Fallback: turn "st-catharines" -> "St Catharines" (or use SLUG_LABELS if present) */
function labelFromSlug(slug) {
  if (SLUG_LABELS[slug]) return SLUG_LABELS[slug];
  return slug
    .split("-")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : ""))
    .join(" ");
}

/** Build breadcrumb items from pathname */
function buildCrumbs(pathname) {
  const parts = pathname.split("/").filter(Boolean);
  const crumbs = [{ href: "/", label: "Home" }];
  let acc = "";
  for (let i = 0; i < parts.length; i++) {
    acc += `/${parts[i]}`;
    const isLast = i === parts.length - 1;
    crumbs.push({
      href: acc + "/", // keep your trailing slash style
      label: labelFromSlug(decodeURIComponent(parts[i])),
      current: isLast,
    });
  }
  return crumbs;
}

/** JSON-LD for breadcrumbs */
function BreadcrumbJsonLd({ crumbs }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: c.label,
      item: c.href, // relative is OK; absolute even better if you set site URL
    })),
  };
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ---------- Header ---------- */

export default function HeaderNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const [showOnlyMenu, setShowOnlyMenu] = useState(false);
  const showOnlyMenuRef = useRef(false);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobileLocationsOpen(false);
  }, [pathname]);

  // show only the menu bar when the user scrolls past threshold (use hysteresis)
  useEffect(() => {
    let ticking = false;
    const ENTER = 200; // activate when scrolling past this
    const LEAVE = 50; // deactivate when above this
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY || window.pageYOffset;
          const next = showOnlyMenuRef.current ? y > LEAVE : y > ENTER;
          if (next !== showOnlyMenuRef.current) {
            showOnlyMenuRef.current = next;
            setShowOnlyMenu(next);
          }
          ticking = false;
        });
        ticking = true;
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const services = [
    {
      href: "/services/popcorn-ceiling-removal/",
      label: "Popcorn Ceiling Removal",
    },
    { href: "/services/drywall-installation/", label: "Drywall Installation" },
    { href: "/services/wallpaper-removal/", label: "Wallpaper Removal" },
    { href: "/services/interior-painting/", label: "Interior Painting" },
  ];

  const locations = [
    { href: "/popcorn-removal/mississauga/", label: "Mississauga" },
    { href: "/popcorn-ceiling-removal/toronto/", label: "Toronto" },
    { href: "/popcorn-ceiling-removal/oakville/", label: "Oakville" },
    { href: "/popcorn-ceiling-removal/burlington/", label: "Burlington" },
    { href: "/popcorn-ceiling-removal/hamilton/", label: "Hamilton" },
    { href: "/popcorn-ceiling-removal/milton/", label: "Milton" },
    { href: "/popcorn-ceiling-removal/etobicoke/", label: "Etobicoke" },
    { href: "/grimsby/", label: "Grimsby" },
    { href: "/st-catharines/", label: "St. Catharines" },
  ];

  const crumbs = buildCrumbs(pathname);

  return (
    <header className="sticky top-0 z-50 shadow-[0_25px_70px_rgba(15,23,42,0.25)]">
      {/* Announcement / reach strip */}
      <div
        className={[
          "bg-gradient-to-r from-slate-950 via-slate-900 to-rose-900 text-white text-[12px] sm:text-sm border-b border-white/10 transition duration-300 overflow-hidden",
          showOnlyMenu
            ? "h-0 opacity-0 pointer-events-none"
            : "h-auto opacity-100 pointer-events-auto",
        ].join(" ")}
      >
        <div className="container-x flex flex-wrap items-center gap-3 py-2">
          <div className="flex items-center gap-2 tracking-[0.28em] uppercase text-[10px] sm:text-[11px] text-white/70">
            <span className="text-base text-white/90">✦</span>
            Modern Finish Crew
          </div>
          <span className="flex items-center gap-2 text-white/80">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white/70"
            >
              <path
                d="M12 22s8-4.5 8-11A8 8 0 1 0 4 11c0 6.5 8 11 8 11z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="11" r="2.5" fill="currentColor" />
            </svg>
            Serving GTA + Halton Region
          </span>
          <div className="ml-auto flex items-center gap-3">
            <Link
              href="/our-work/"
              className="inline-flex items-center gap-1 text-white/90 hover:text-white"
            >
              Case Studies →
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-1 text-white/90 hover:text-white"
            >
              Concierge Team →
            </Link>
          </div>
        </div>
      </div>

      {/* Primary glass header */}
      <div className="border-b border-white/60 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/65 transition-all duration-300">
        <div className="container-x">
          {/* Brand block + CTAs + Hamburger (hide when showOnlyMenu) */}
          <div
            className={[
              "overflow-hidden transition-all duration-300",
              showOnlyMenu ? "h-0 opacity-0" : "h-auto opacity-100 py-4",
            ].join(" ")}
          >
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex flex-1 items-center gap-3 rounded-3xl p-1 pr-4 hover:bg-white/80 transition"
                title="Popcorn Ceiling Removal Burlington Ontario— Home"
              >
                <div className="h-20 w-20 md:h-24 md:w-24 rounded-2xl bg-gradient-to-br from-rose-500 via-orange-400 to-amber-300 p-[2px] shadow-[0_15px_35px_rgba(244,63,94,0.45)]">
                  <div className="h-full w-full rounded-[26px] bg-white flex items-center justify-center">
                    <img
                      src="/logo.png"
                      alt="Popcorn Ceiling Removal Burlington Ontario"
                      className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 object-contain"
                    />
                  </div>
                </div>
                <div className="flex flex-col min-w-0 sm:items-start items-center text-center sm:text-left">
                  <span className="text-lg md:text-2xl font-semibold text-slate-900 leading-tight">
                    Popcorn Ceiling Removal
                    <span className="block sm:inline"> Burlington</span>
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.4em] text-slate-500">
                    serving Burlington, Ontario
                  </span>
                  <span className="text-[12px] text-slate-500">
                    Smooth ceilings, paint-ready in 24h.
                  </span>
                </div>
              </Link>

              {/* Desktop/tablet CTAs */}
              <div className="hidden md:flex items-center gap-2 ml-auto">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 border-2 border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-md hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600/50 transition"
                  title="Call for a fast popcorn ceiling removal estimate"
                >
                  <span className="text-base">☎</span>
                  {PHONE_NUMBER}
                </a>
                <Link
                  href="/quote/"
                  className="inline-flex items-center gap-2 bg-red-600 px-5 py-2 text-sm font-bold text-white shadow-lg hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600/70 transition"
                  title="Get a free popcorn ceiling removal quote"
                >
                  Book Site Visit
                </Link>
              </div>

              {/* Mobile hamburger */}
              <button
                type="button"
                className="lg:hidden inline-flex items-center justify-center p-3 ring-1 ring-slate-200/80 shadow-sm bg-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600/50 ml-auto md:ml-3"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop nav */}
          <div
            className={[
              "hidden lg:flex items-center justify-between transition-all duration-300",
              showOnlyMenu ? "py-2" : "pb-4",
            ].join(" ")}
          >
            <nav
              className="flex items-center gap-1 text-[13px] tracking-[0.2em]"
              aria-label="Primary navigation"
            >
              <NavItem href="/" label="HOME" active={isActive("/")} />
              <NavItem
                href="/about/"
                label="ABOUT"
                active={isActive("/about/")}
              />

              {/* SERVICES */}
              <SmoothDropdown
                label="SERVICES"
                active={isActive("/services/")}
                align="left"
                widthPx={SERVICES_PANEL_W}
              >
                <Panel>
                  <div className="flex flex-col gap-2 max-h-[70vh] overflow-auto pr-1">
                    {services.map((s) => (
                      <MenuItemCard
                        key={s.href}
                        href={s.href}
                        label={s.label}
                      />
                    ))}
                  </div>
                  <PanelFooter>
                    <DropdownLink
                      href="/services/"
                      label="All Services →"
                      bold
                    />
                    <Link
                      href="/quote/"
                      className="inline-flex items-center px-4 py-2 bg-red-600 text-sm font-bold text-white hover:bg-red-700 transition"
                    >
                      Schedule Quote →
                    </Link>
                  </PanelFooter>
                </Panel>
              </SmoothDropdown>

              <NavItem
                href="/our-work/"
                label="OUR WORK"
                active={isActive("/our-work/")}
              />

              {/* LOCATIONS */}
              <SmoothDropdown
                label="LOCATIONS"
                active={
                  isActive("/service-areas/") ||
                  locations.some((l) => isActive(l.href))
                }
                align="left"
                widthPx={LOCATIONS_MEGA_W}
              >
                <Panel>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                    <DropdownLink
                      href="/service-areas/"
                      label="All Areas →"
                      bold
                    />
                    {locations.map((l) => (
                      <MenuItemCard
                        key={l.href}
                        href={l.href}
                        label={l.label}
                      />
                    ))}
                  </div>
                </Panel>
              </SmoothDropdown>

              <NavItem
                href="/our-process/"
                label="OUR PROCESS"
                active={isActive("/our-process/")}
              />
              <NavItem
                href="/contact/"
                label="CONTACT"
                active={isActive("/contact/")}
              />
            </nav>
          </div>
        </div>
      </div>

      {/* Breadcrumb ribbon */}
      {pathname !== "/" && (
        <>
          <BreadcrumbJsonLd crumbs={crumbs} />
          <div className="border-b border-slate-200 bg-slate-50/90 backdrop-blur">
            <nav
              aria-label="Breadcrumb"
              className="container-x py-1.5 text-[13px] leading-5 text-slate-500"
            >
              <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap">
                {crumbs.map((c, i) => {
                  const isLast = i === crumbs.length - 1;
                  return (
                    <div key={c.href} className="flex items-center shrink-0">
                      {i > 0 && <span className="mx-2 text-slate-400">/</span>}
                      {isLast ? (
                        <span
                          className="font-semibold text-slate-900"
                          aria-current="page"
                          title={c.label}
                        >
                          {c.label}
                        </span>
                      ) : (
                        <Link
                          href={c.href}
                          className="rounded px-1 text-rose-600 hover:text-rose-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/30"
                          title={c.label}
                        >
                          {c.label}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </nav>
          </div>
        </>
      )}

      {/* Mobile drawer */}
      <div
        className={[
          "lg:hidden border-b border-slate-900/40 bg-slate-950 text-white/90 backdrop-blur transition-[max-height] overflow-hidden",
          mobileOpen ? "max-h-[80vh]" : "max-h-0",
        ].join(" ")}
        aria-hidden={!mobileOpen}
      >
        <div className="container-x py-4 space-y-4">
          <div className="grid gap-2 text-base">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 bg-white/10 px-4 py-3 font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 hover:bg-white/15 transition"
            >
              <span className="text-base">☎</span>
              Call {PHONE_NUMBER}
            </a>
            <Link
              href="/quote/"
              className="inline-flex items-center justify-center bg-red-600 px-4 py-3 font-bold text-white shadow-lg hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition"
            >
              Book Site Visit
            </Link>
          </div>

          <nav className="space-y-1 text-[16px]" aria-label="Mobile">
            <MobileLink href="/" label="Home" active={isActive("/")} />
            <MobileLink
              href="/about/"
              label="About"
              active={isActive("/about/")}
            />
            <MobileDisclosure
              label="Services"
              open={mobileServicesOpen}
              setOpen={setMobileServicesOpen}
              items={[
                { href: "/services/", label: "All Services" },
                ...services,
              ]}
              isActive={(href) => isActive(href)}
            />
            <MobileLink
              href="/our-work/"
              label="Our Work"
              active={isActive("/our-work/")}
            />
            <MobileDisclosure
              label="Locations"
              open={mobileLocationsOpen}
              setOpen={setMobileLocationsOpen}
              items={[
                { href: "/service-areas/", label: "All Areas" },
                ...locations,
              ]}
              isActive={(href) => isActive(href)}
            />
            <MobileLink
              href="/our-process/"
              label="Our Process"
              active={isActive("/our-process/")}
            />
            <MobileLink
              href="/contact/"
              label="Contact"
              active={isActive("/contact/")}
            />
            <MobileLink
              href="/blog/"
              label="Blog"
              active={isActive("/blog/")}
            />
          </nav>
        </div>
      </div>
    </header>
  );
}

/* ----------------- Desktop helpers ----------------- */

function NavItem({ href, label, active }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={[
        "group relative px-3 py-2 rounded-full text-[11px] font-semibold tracking-[0.28em]",
        "transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/30",
        active ? ACCENT.textStrong : `${ACCENT.text} ${ACCENT.linkHover}`,
      ].join(" ")}
      title={label}
    >
      <span className="relative inline-block">
        {label}
        <span
          aria-hidden="true"
          className={[
            "absolute left-0 -bottom-1 h-1 w-full rounded-full bg-gradient-to-r from-rose-500 via-orange-400 to-amber-300 transition-transform duration-200 origin-left",
            active
              ? "scale-x-100 opacity-90"
              : "scale-x-0 opacity-0 group-hover:opacity-70 group-hover:scale-x-100",
          ].join(" ")}
        />
      </span>
    </Link>
  );
}

/* Right-anchored dropdown with hover intent and viewport clamp */
function SmoothDropdown({
  label,
  active,
  children,
  align = "right",
  widthPx = 860,
}) {
  const [open, setOpen] = useState(false);
  const openTimer = useRef(null);
  const closeTimer = useRef(null);

  const handleEnter = () => {
    clearTimeout(closeTimer.current);
    openTimer.current = setTimeout(() => setOpen(true), 80);
  };
  const handleLeave = () => {
    clearTimeout(openTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 110);
  };

  // right-anchored and constrained to viewport
  const style = {
    width: `${widthPx}px`,
    maxWidth: `calc(100vw - ${SAFE_VW_PX * 2}px)`,
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        className={[
          "group relative inline-flex items-center gap-2 px-3 py-2 rounded-full text-[11px] font-semibold tracking-[0.28em]",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/30 transition-colors",
          active || open
            ? ACCENT.textStrong
            : `${ACCENT.text} ${ACCENT.linkHover}`,
        ].join(" ")}
      >
        <span className="relative inline-block">
          {label}
          <span
            aria-hidden="true"
            className={[
              "absolute left-0 -bottom-1 h-1 w-full rounded-full bg-gradient-to-r from-rose-500 via-orange-400 to-amber-300 transition-transform duration-200 origin-left",
              active || open
                ? "scale-x-100 opacity-90"
                : "scale-x-0 opacity-0 group-hover:opacity-70 group-hover:scale-x-100",
            ].join(" ")}
          />
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          className={
            open ? "opacity-100 rotate-180 transition" : "opacity-70 transition"
          }
        >
          <path
            d="M7 10l5 5 5-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </button>

      <div
        className={[
          "absolute top-full mt-2 pt-1",
          align === "right" ? "right-0" : "left-0",
          "transition-all duration-150 ease-out will-change-transform",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-1 pointer-events-none",
        ].join(" ")}
        style={style}
        role="menu"
      >
        {children}
      </div>
    </div>
  );
}

/* Panel shell (shared by Services + Locations) */
function Panel({ children }) {
  return (
    <div
      className={`p-4 md:p-5 rounded-3xl border ${ACCENT.border} bg-white/95 shadow-[0_45px_85px_-45px_rgba(15,23,42,0.9)] ring-1 ${ACCENT.ring} min-w-[320px] backdrop-blur`}
    >
      <div className="h-1.5 w-16 rounded-full bg-gradient-to-r from-rose-500 via-orange-400 to-amber-300 mb-4" />
      {children}
    </div>
  );
}
function PanelFooter({ children }) {
  return (
    <div className="mt-3 flex items-center justify-between">{children}</div>
  );
}

/* Simple, high-contrast menu card (no icons, no blurbs) */
function MenuItemCard({ href, label }) {
  return (
    <Link
      href={href}
      title={label}
      aria-label={label}
      className={[
        "group p-4 rounded-2xl border bg-gradient-to-br from-white via-slate-50 to-white",
        ACCENT.border,
        "hover:-translate-y-0.5 hover:shadow-[0_25px_55px_-35px_rgba(15,23,42,0.8)]",
        "transition duration-200",
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="font-semibold text-slate-900 group-hover:text-rose-600">
            {label}
          </div>
          <p className="text-sm text-slate-500">View details →</p>
        </div>
        <span className="text-rose-500 opacity-0 group-hover:opacity-100 transition">
          ↗
        </span>
      </div>
    </Link>
  );
}

function DropdownLink({ href, label, bold }) {
  return (
    <Link
      href={href}
      role="menuitem"
      title={label}
      className={[
        "block px-3 py-2 rounded-2xl text-[15px] transition",
        bold ? "font-semibold text-slate-900" : ACCENT.text,
        `hover:bg-slate-100/70 ${ACCENT.linkHover} focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/30`,
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

/* ----------------- Mobile helpers ----------------- */

function MobileLink({ href, label, active }) {
  return (
    <Link
      href={href}
      className={[
        "block w-full px-4 py-3 font-medium transition",
        active
          ? "bg-white/15 text-white"
          : "text-white/80 hover:bg-white/5 hover:text-white",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

function MobileDisclosure({ label, open, setOpen, items, isActive }) {
  return (
    <div className="border border-white/10 bg-white/5">
      <button
        type="button"
        className="w-full flex items-center justify-between px-4 py-3 text-base font-medium"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{label}</span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          className={
            open ? "rotate-180 transition-transform" : "transition-transform"
          }
        >
          <path
            d="M7 10l5 5 5-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </button>
      <div
        className={
          open
            ? "max-h-96 overflow-hidden transition-[max-height] duration-300"
            : "max-h-0 overflow-hidden transition-[max-height] duration-300"
        }
      >
        <div className="p-2 pt-0 space-y-1">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "block px-3 py-2 text-[15px]",
                isActive(item.href)
                  ? "bg-white/15 text-white font-semibold"
                  : "text-white/80 hover:bg-white/5 hover:text-white",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
