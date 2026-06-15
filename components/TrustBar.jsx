const trustItems = [
  { label: "Burlington's Trusted Team", detail: "Since 2005" },
  { label: "Fully Insured", detail: "HEPA dust control" },
  { label: "3-Year Warranty", detail: "Paint-ready finish" },
  { label: "Serving Burlington", detail: "All neighborhoods + GTA" },
];

export default function TrustBar() {
  return (
    <div className="border-b border-slate-200 bg-white">
      <div className="container-x">
        <div className="grid divide-y divide-slate-200 md:grid-cols-4 md:divide-x md:divide-y-0">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-3 py-4 md:px-5">
              <span className="h-2.5 w-2.5 bg-teal-700" />
              <div>
                <div className="text-sm font-semibold text-slate-950">
                  {item.label}
                </div>
                <div className="text-xs text-slate-500">{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
