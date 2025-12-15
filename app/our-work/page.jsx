import GalleryClient from "./GalleryClient";
import { galleryFilters, galleryPhotos } from "@/data/galleryPhotos";

export const metadata = {
  title: "Our Work Gallery — Popcorn Ceiling Removal Burlington",
  description:
    "Popcorn ceiling removal, drywall, wallpaper removal and interior painting across Burlington & Halton. Browse our local portfolio.",
};

export default function Page() {
  return (
    <div className="bg-gradient-to-b from-slate-900/5 via-white to-slate-50">
      <div className="mx-auto max-w-[1960px] px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1 text-sm font-semibold text-red-700 mb-3">
            Popcorn Ceiling Removal Burlington • Portfolio
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl text-slate-900">
            Burlington&apos;s gallery of popcorn ceiling removal, drywall
            installation, and interior painting wins.
          </h1>
          <p className="text-lg text-slate-700">
            Swipe through proven Burlington and Halton Region projects that rank
            for &ldquo;popcorn ceiling removal Burlington&rdquo;, "drywall
            installation Burlington", and "interior painting Burlington". Smooth
            ceilings, skim coating, and Level 5 finishes captured the moment we
            wrapped up each job.
          </p>
          <p className="text-base text-slate-600">
            From Roseland condos to Tyandaga custom homes, this gallery shows
            the Popcorn Ceiling Removal Burlington crew sanding, mudding,
            priming, and repainting ceilings that now help local homeowners sell
            for more.
          </p>
        </div>
        <div className="mt-12">
          <GalleryClient photos={galleryPhotos} filters={galleryFilters} />
        </div>
        <div className="mt-16 text-center text-sm text-slate-600">
          Need comparison sliders?{" "}
          <a
            href="/popcorn-ceiling-removal/"
            className="font-semibold text-red-600 hover:text-red-700 hover:underline"
          >
            Visit our popcorn ceiling removal service page
          </a>{" "}
          for detailed before & after shots.
        </div>
      </div>
    </div>
  );
}
