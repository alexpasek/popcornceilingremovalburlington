"use client";
import { useEffect, useState } from "react";

function Stars({ value = 5, size = 18 }) {
  const full = Math.round(value ?? 5);
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={
            i < full
              ? "fill-amber-400 text-amber-400"
              : "fill-slate-200 text-slate-200"
          }
        >
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </span>
  );
}

function ReviewCard({ r }) {
  return (
    <div className="p-5 bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
      <div className="flex items-start gap-3">
        {r.profilePhotoUrl ? (
          <img
            src={r.profilePhotoUrl}
            alt={r.author}
            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex-shrink-0" />
        )}
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-slate-900">{r.author}</div>
          <div className="flex items-center gap-2 mt-1">
            <Stars value={r.rating} size={14} />
            <span className="text-xs text-slate-500">{r.time}</span>
          </div>
          {r.text && (
            <p className="mt-3 text-sm text-slate-700 leading-relaxed line-clamp-4">
              {r.text}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function GoogleReviewsWall() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Force Burlington place id (fallback)
  const placeId = process.env.NEXT_PUBLIC_BURLINGTON_PLACE_ID || "ChIJgbcp2yJhK4gRpTzm90fDtH8";

  useEffect(() => {
    setLoading(true);
    fetch(`/api/places?placeId=${encodeURIComponent(placeId)}`)
      .then((r) => r.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch(() => {
        setData(null);
        setLoading(false);
      });
  }, [placeId]);

  const writeUrl = `https://search.google.com/local/writereview?placeid=${placeId}`;
  const mapsUrl = `https://www.google.com/maps?place_id=${placeId}`;

  return (
    <section className="border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
      <div className="container-x py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Verified Google Reviews
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              What Burlington Homeowners Say
            </h2>
            <p className="mt-2 text-slate-600">
              Real reviews from our Burlington customers—smooth ceilings, paint-ready in 24h
            </p>
          </div>

          {!loading && data && (
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="text-right">
                <div className="flex items-center gap-2">
                  <Stars value={data.rating} size={20} />
                  <span className="text-2xl font-bold text-slate-900">
                    {data.rating?.toFixed(1)}
                  </span>
                </div>
                <div className="text-sm text-slate-600 mt-1">
                  {data.userRatingCount} reviews
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Reviews Grid */}
        {loading ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-48 bg-slate-100 border border-slate-200 animate-pulse"
              />
            ))}
          </div>
        ) : data?.reviews?.length ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data.reviews.map((r, i) => (
              <ReviewCard key={i} r={r} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white border border-slate-200">
            <p className="text-slate-600">
              Add <code className="px-2 py-1 bg-slate-100 text-sm">NEXT_PUBLIC_BURLINGTON_PLACE_ID</code> to{" "}
              <code className="px-2 py-1 bg-slate-100 text-sm">.env.local</code>
            </p>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={writeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600/60 transition"
          >
            Write a Review on Google
          </a>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border-2 border-slate-300 bg-white hover:bg-slate-50 text-slate-900 font-bold px-6 py-3 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 transition"
          >
            View on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
