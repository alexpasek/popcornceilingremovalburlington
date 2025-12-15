import QuoteForm from "@/components/QuoteForm";

export const metadata = {
  title: "Get a Quote | Popcorn Ceiling Removal Burlington",
  description:
    "Request a fast quote from Popcorn Ceiling Removal Burlington for popcorn smoothing, drywall, wallpaper removal, and interior painting.",
};

export default function Page() {
  return (
    <div className="container-x py-10">
      <h1 className="text-3xl font-bold">Get a Quote</h1>
      <QuoteForm />
    </div>
  );
}
