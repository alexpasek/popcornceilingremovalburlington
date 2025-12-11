export default function TrustBar() {
  return (
    <div className="border-b border-slate-200 bg-gradient-to-r from-white via-slate-50 to-white">
      <div className="container-x py-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="text-2xl">🏆</span>
            <div>
              <div className="text-sm font-bold text-slate-900">
                Burlington's Trusted Team
              </div>
              <div className="text-xs text-slate-600">Since 2005</div>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="text-2xl">✓</span>
            <div>
              <div className="text-sm font-bold text-slate-900">
                Fully Insured
              </div>
              <div className="text-xs text-slate-600">HEPA dust control</div>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="text-2xl">🛡️</span>
            <div>
              <div className="text-sm font-bold text-slate-900">
                3-Year Warranty
              </div>
              <div className="text-xs text-slate-600">Paint-ready finish</div>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="text-2xl">📍</span>
            <div>
              <div className="text-sm font-bold text-slate-900">
                Serving Burlington
              </div>
              <div className="text-xs text-slate-600">
                All neighborhoods + GTA
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
