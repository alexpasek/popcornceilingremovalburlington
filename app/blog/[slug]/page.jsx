import Link from "next/link";
import { posts } from "@/data/posts";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: "Article Not Found | Popcorn Ceiling Removal Burlington Blog",
      description: "Explore our articles about popcorn ceiling removal, drywall finishing, and interior painting in Burlington.",
    };
  }
  return {
    title: `${post.title} | Burlington Ceiling Experts Blog`,
    description: post.excerpt || `${post.title} — Expert insights from Burlington's popcorn ceiling removal specialists.`,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      type: "article",
      publishedTime: post.date,
      authors: ["Popcorn Ceiling Removal Burlington Team"],
    },
    alternates: {
      canonical: `/blog/${slug}/`,
    },
  };
}

export default async function Post({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="container-x py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Article Not Found</h1>
          <p className="text-slate-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/blog/" className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 shadow-lg transition">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt || post.title,
            datePublished: post.date,
            author: {
              "@type": "Organization",
              name: "Popcorn Ceiling Removal Burlington",
            },
            publisher: {
              "@type": "Organization",
              name: "Popcorn Ceiling Removal Burlington",
              logo: {
                "@type": "ImageObject",
                url: "https://popcorn-ceiling-removal-burlington.com/logo.png",
              },
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)'
          }} />
        </div>
        
        <div className="container-x relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/blog/" className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-semibold mb-6 transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            
            <div className="inline-flex items-center gap-2 rounded-full bg-red-500/20 border border-red-500/30 px-4 py-1 text-sm font-semibold text-red-400 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-400"></span>
              </span>
              {post.category || "Burlington Ceiling Tips"}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-slate-300">
              <time dateTime={post.date} className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </time>
              <span className="text-slate-400">•</span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readTime || "5 min read"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.image && (
        <section className="container-x -mt-16 relative z-20">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={post.image}
                alt={post.imageAlt || `${post.title} - Popcorn ceiling removal Burlington before and after transformation`}
                title={`${post.title} | Burlington Ceiling Experts`}
                className="w-full h-[400px] md:h-[500px] object-cover"
                loading="eager"
              />
              {post.imageCaption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6">
                  <p className="text-white text-sm">{post.imageCaption}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <article className="container-x py-16">
        <div className="max-w-4xl mx-auto">
          {/* Excerpt/Summary */}
          {post.excerpt && (
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-2xl mb-12">
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                {post.excerpt}
              </p>
            </div>
          )}

          {/* Main Content */}
          <div className="prose prose-lg prose-slate max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Related Services CTA */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-600 to-red-500 text-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-3">Need Popcorn Ceiling Removal?</h3>
              <p className="text-white/90 mb-6">
                Professional dust-controlled removal with Level 5 smooth finish. Paint-ready in 24h.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={PHONE_HREF} className="inline-flex items-center justify-center bg-white text-red-600 font-bold px-6 py-3 rounded-lg hover:bg-slate-100 transition">
                  📞 {PHONE_NUMBER}
                </a>
                <Link href="/services/popcorn-ceiling-removal/" className="inline-flex items-center justify-center border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-3">Burlington Service Areas</h3>
              <p className="text-slate-300 mb-6">
                We serve all Burlington neighborhoods with local crews.
              </p>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                {["Downtown", "Aldershot", "Millcroft", "Tyandaga", "Headon Forest", "Brant Hills"].map((area) => (
                  <li key={area} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                    {area}
                  </li>
                ))}
              </ul>
              <Link href="/services/popcorn-ceiling-removal/" className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-semibold mt-6 transition">
                View All Areas
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Author Box */}
          <div className="mt-16 bg-white border-2 border-slate-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-6">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 shadow-lg">
                PC
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  Popcorn Ceiling Removal Burlington Team
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Our Burlington-based team of ceiling specialists brings years of experience in popcorn ceiling removal, 
                  Level 5 finishing, and interior painting. We're dedicated to providing dust-controlled, professional 
                  service that transforms your home with minimal disruption.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="/about/" className="text-red-600 hover:text-red-700 font-semibold text-sm underline underline-offset-4">
                    About Our Team
                  </Link>
                  <Link href="/our-work/" className="text-red-600 hover:text-red-700 font-semibold text-sm underline underline-offset-4">
                    View Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {posts
                .filter((p) => p.slug !== post.slug)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}/`}
                    className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-red-400 transition-all duration-300"
                  >
                    {relatedPost.image && (
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.imageAlt || `${relatedPost.title} - Burlington ceiling removal article`}
                        className="w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    )}
                    <div className="text-xs uppercase tracking-wider text-red-600 font-semibold mb-2">
                      {relatedPost.category || "Burlington Tips"}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-red-600 transition">
                      {relatedPost.title}
                    </h4>
                    {relatedPost.excerpt && (
                      <p className="text-slate-600 text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    )}
                    <div className="mt-4 flex items-center gap-2 text-red-600 font-semibold text-sm">
                      Read More
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>

      {/* Final CTA */}
      <section className="container-x py-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Burlington Ceiling?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Get a free quote for professional popcorn ceiling removal with Level 5 smooth finish. 
            Local Burlington crew, dust-controlled, paint-ready in 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-lg shadow-lg transition-all hover:scale-105"
            >
              📞 Call {PHONE_NUMBER}
            </a>
            <Link
              href="/quote/"
              className="inline-flex items-center justify-center border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold px-8 py-4 rounded-lg transition-all hover:scale-105"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
