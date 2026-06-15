"use client";

import { CONTACT } from "@/app/config";

export default function StickyCTA() {
  return (
    <div id="sticky-cta" className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-slate-950/95 p-3 shadow-2xl backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={CONTACT.phoneHref}
          className="inline-flex items-center justify-center bg-white px-4 py-3 text-sm font-semibold text-slate-950"
        >
          Call
        </a>
        <a
          href="/quote/"
          className="inline-flex items-center justify-center bg-red-600 px-4 py-3 text-sm font-semibold text-white"
        >
          Get Quote
        </a>
      </div>
    </div>
  );
}
