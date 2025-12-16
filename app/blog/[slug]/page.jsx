import Link from 'next/link';
import { posts } from '@/data/posts';

export function generateStaticParams(){ return posts.map(p=>({slug:p.slug})); }
export function generateMetadata({ params }){
  const post = posts.find(p=>p.slug===params.slug);
  return {
    title: post
      ? `${post.title} | Popcorn Ceiling Removal Burlington Blog`
      : "Popcorn Ceiling Removal Burlington Blog",
    description: post
      ? `${post.title} — insights from Popcorn Ceiling Removal Burlington.`
      : "Articles from Popcorn Ceiling Removal Burlington about smooth ceilings.",
  };
}

export default function Post({ params }){
  const post = posts.find(p=>p.slug===params.slug);
  if(!post){ return <div className='container-x py-10'><p>Not found</p></div>; }
  return(<div className='container-x py-10'>
    <nav className='text-sm text-gray-500 mb-6'><Link href='/blog/'>Blog</Link> / {post.title}</nav>
    <h1 className='text-3xl font-bold'>{post.title}</h1>
    <p className='text-sm text-gray-500 mt-1'>{post.date}</p>
    <div className='prose-custom mt-6 space-y-6'>
      {post.content.map((block,i)=>{
        if(typeof block === 'string'){
          return <p key={i}>{block}</p>;
        }
        if(block.type === 'text'){
          return <p key={i}>{block.value}</p>;
        }
        if(block.type === 'video'){
          return (
            <figure key={i} className='space-y-3'>
              <div className='relative w-full rounded-[32px] overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 shadow-[0_25px_60px_rgba(15,23,42,0.4)] aspect-[4/3]'>
                <video
                  className='h-full w-full object-cover'
                  controls
                  loop
                  muted
                  playsInline
                  poster={block.poster}
                >
                  <source src={block.src} type="video/mp4" />
                  <source src={block.src} type="video/quicktime" />
                  Your browser does not support the video tag.
                </video>
                <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent' />
              </div>
              {block.caption && (
                <figcaption className='text-sm text-gray-500'>{block.caption}</figcaption>
              )}
            </figure>
          );
        }
        return null;
      })}
    </div>
    <p className='mt-8'><Link className='btn-cta' href='/blog/'>Back to blog</Link></p>
  </div>);
}
