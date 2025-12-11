import GalleryClient from "./GalleryClient";
import { galleryFilters, galleryPhotos } from "@/data/galleryPhotos";

export const metadata = {
  title: "Our Work Gallery — Wallpaper Removal Pro",
  description:
    "Popcorn ceiling removal, drywall, skim coating, wallpaper removal, and interior painting across the GTA + Halton. Browse the Modern Finish Crew gallery.",
};

export default function Page() {
  return (
    <div className="bg-slate-950 text-white">
      <div className="mx-auto max-w-[1960px] px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-white/60">
            Burlington Popcorn Ceiling Removal
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Burlington&apos;s gallery of popcorn ceiling removal, drywall
            installation, and interior painting wins.
          </h1>
          <p className="text-lg text-white/70">
            Swipe through proven Burlington and Halton Region projects that rank
            for &ldquo;popcorn ceiling removal Burlington&rdquo;, “drywall
            installation Burlington”, and “interior painting Burlington”.
            Smooth ceilings, skim coating, and Level 5 finishes captured the
            moment we wrapped up each job.
          </p>
          <p className="text-base text-white/60">
            From Roseland condos to Tyandaga custom homes, this gallery shows
            the Modern Finish Crew sanding, mudding, priming, and repainting
            ceilings that now help local homeowners sell for more.
          </p>
        </div>
        <div className="mt-12">
          <GalleryClient photos={galleryPhotos} filters={galleryFilters} />
        </div>
        <div className="mt-16 text-center text-sm text-white/60">
          Need comparison sliders?{" "}
          <a
            href="/popcorn-ceiling-removal/"
            className="font-semibold text-white hover:underline"
          >
            Visit our popcorn ceiling removal service page
          </a>{" "}
          for detailed before & after shots.
        </div>
      </div>
    </div>
  );
}
