"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const HERO_COPY = {
  title: "Burlington crews • popcorn removal • drywall • paint",
  body: "Level 5 popcorn ceiling removal Burlington homeowners search for, plus drywall installation, skim coating, and interior painting — all completed by our Halton-based Modern Finish Crew.",
  cta: { label: "Book Burlington site visit", href: "/quote/" },
  phone: { label: "Call or text 289-428-1663", href: "tel:2894281663" },
};

export default function GalleryClient({ photos, filters }) {
  const [active, setActive] = useState(filters[0]?.value || "all");
  const filtered = useMemo(() => {
    if (active === "all") return photos;
    return photos.filter((photo) => photo.category === active);
  }, [active, photos]);
  const labelLookup = useMemo(() => {
    return filters.reduce((acc, filter) => {
      acc[filter.value] = filter.label;
      return acc;
    }, {});
  }, [filters]);

  return (
    <section className="space-y-8">
      <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
        {filters.map((filter) => {
          const count =
            filter.value === "all"
              ? photos.length
              : photos.filter((p) => p.category === filter.value).length;
          const isActive = active === filter.value;
          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActive(filter.value)}
              className={[
                "rounded-full border px-4 py-2 font-semibold transition",
                isActive
                  ? "border-white bg-white text-black shadow-[0_10px_40px_rgba(15,23,42,0.3)]"
                  : "border-white/30 text-white/80 hover:border-white/60 hover:text-white",
              ].join(" ")}
            >
              <span>{filter.label}</span>
              <span className="ml-2 rounded-full bg-white/15 px-2 py-0.5 text-[11px] font-medium">
                {count}
              </span>
            </button>
          );
        })}
      </div>
      <div
        className="grid auto-rows-[240px] gap-4 sm:auto-rows-[300px] sm:grid-cols-2 xl:auto-rows-[320px] xl:grid-cols-3 2xl:grid-cols-4"
        data-lightbox-scope
      >
        <article className="relative col-span-1 row-span-3 flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 px-6 pb-12 pt-16 text-white shadow-[0_35px_120px_rgba(0,0,0,0.45)] sm:col-span-2 lg:row-span-2 lg:pt-20">
          <div className="absolute inset-0 opacity-30">
            <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(244,114,182,0.28),transparent),radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.25),transparent)]" />
          </div>
          <div className="relative mt-auto space-y-6 text-center lg:text-left">
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/20 bg-white/5 p-4 text-left lg:flex-row">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-rose-500 via-orange-400 to-amber-300 p-[2px] shadow-lg">
                  <div className="flex h-full w-full items-center justify-center rounded-[18px] bg-slate-950">
                    <img
                      src="/logo.png"
                      alt="Modern Finish Crew logo"
                      className="h-9 w-9 object-contain"
                    />
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-sm uppercase tracking-[0.4em] text-white/70">
                    Modern Finish Crew
                  </p>
                  <p className="text-base font-semibold text-white">
                    Burlington popcorn ceiling team
                  </p>
                </div>
              </div>
              <p className="text-sm text-white/70 lg:max-w-sm">
                Trusted for Halton condos, semi-detached flips, and Tyandaga
                custom homes.
              </p>
            </div>
            <h2 className="text-2xl font-semibold leading-snug sm:text-3xl">
              {HERO_COPY.title}
            </h2>
            <p className="text-white/80">{HERO_COPY.body}</p>
            <ul className="grid gap-3 text-sm text-white/80 sm:grid-cols-2">
              {[
                "Popcorn ceiling removal Burlington & Oakville",
                "Level 5 drywall finishing + framing",
                "Sherwin-Williams interior painting",
                "Fast Halton-area site visits",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2"
                >
                  <span className="text-lg">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={HERO_COPY.cta.href}
                className="flex-1 rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-black transition hover:translate-y-[1px]"
              >
                {HERO_COPY.cta.label}
              </Link>
              <a
                href={HERO_COPY.phone.href}
                className="flex-1 rounded-full border border-white/40 px-5 py-3 text-center text-sm font-semibold text-white/90 transition hover:border-white hover:text-white"
              >
                {HERO_COPY.phone.label}
              </a>
            </div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">
              GTA • Halton • Hamilton
            </p>
          </div>
        </article>

        {filtered.map((photo, index) => {
          const colSpan =
            photo.cols === 2 ? "sm:col-span-2" : "sm:col-span-1";
          const rowSpan =
            photo.rows === 2 ? "sm:row-span-2" : "sm:row-span-1";
          return (
            <figure
              key={photo.id}
              className={[
                "group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 shadow-[0_20px_80px_rgba(2,6,23,0.55)]",
                colSpan,
                rowSpan,
              ].join(" ")}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw"
                className="h-full w-full object-cover brightness-90 transition duration-500 group-hover:scale-105 group-hover:brightness-110"
                priority={index < 4}
                data-lightbox="true"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 text-white">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                  {labelLookup[photo.category] || photo.category}
                </p>
                <p className="text-base font-semibold">{photo.title}</p>
                <p className="text-sm text-white/70">{photo.location}</p>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
