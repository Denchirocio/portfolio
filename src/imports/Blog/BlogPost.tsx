import { Link, useParams } from "react-router";
import { useState } from "react";
import { posts } from "./posts";
import imgFirma from "./firma.png";

function OtherNoteCard({ post }: { post: typeof posts[0] }) {
  return (
    <div className="flex flex-col gap-[13px] items-start shrink-0 w-full max-w-[300px] mx-auto">
      {/* Image + date row */}
      <div className="flex items-start justify-between w-full">
        {/* Rotated date */}
        <div className="flex h-[248px] items-center justify-center w-[16px] shrink-0">
          <div className="-rotate-90 flex-none">
            <p className="font-['Inter:Regular',sans-serif] font-semibold text-[13px] text-black whitespace-nowrap">{post.date || "DD.MM.AAAA"}</p>
          </div>
        </div>
        {/* Thumbnail */}
        <div className={`relative shrink-0 size-[248px] border overflow-hidden ${post.overlay ? "border-[#dfa9ea]" : "border-black"}`}>
          {post.image && <img loading="lazy" decoding="async" alt="" className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-110" src={post.image} />}
          {post.overlay && (
            <div className="absolute bg-white border border-black left-[68px] top-[41px] w-[165px] h-[165px] flex flex-col justify-center p-[12px]">
              <p className="font-['Inter:Regular',sans-serif] text-[15px] text-black leading-normal mb-[6px]">Yes, that's also</p>
              <p className="font-['EB_Garamond',serif] text-[48px] text-black leading-none">UX.</p>
            </div>
          )}
        </div>
      </div>
      {/* Text */}
      <div className="flex flex-col gap-[13px] w-full">
        <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[20px] text-black leading-normal">{post.title}</h3>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[#7a7a7a] leading-normal">{post.description}</p>
      </div>
    </div>
  );
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-['Inter:Regular',sans-serif] text-[20px] text-black">Post not found.</p>
      </div>
    );
  }

  const otherPosts = posts.filter((p) => p.slug && p.slug !== slug);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Hero image */}
      {post.banner && <img src={post.banner} alt={post.title} fetchPriority="high" decoding="async" className="w-full object-cover shrink-0" />}

      {/* Breadcrumb */}
      <div className="max-w-[780px] mx-auto px-[24px] sm:px-[40px] pt-[32px] w-full flex items-center gap-[8px]">
        <Link to="/blog" className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black no-underline hover:opacity-60 transition-opacity">‹ Blog</Link>
        <span className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black">/</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold text-[16px] text-black truncate">{post.title}</span>
      </div>

      {/* Article */}
      <div className="max-w-[780px] mx-auto px-[24px] sm:px-[40px] py-[32px] flex flex-col gap-[24px] flex-1">
        <div className="flex items-start justify-between gap-[16px]">
          <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[32px] text-black leading-normal">
            {post.title}
          </h1>
          <div className="relative shrink-0 mt-[8px]">
            <button
              onClick={handleShare}
              className="bg-transparent border-none cursor-pointer p-[4px] hover:opacity-60 transition-opacity"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
            </button>
            {copied && (
              <div className="absolute -top-[36px] left-1/2 -translate-x-1/2 bg-black text-white font-['Inter:Regular',sans-serif] font-normal text-[13px] px-[10px] py-[4px] rounded-[6px] whitespace-nowrap">
                Link copied!
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black" />
              </div>
            )}
          </div>
        </div>
        {post.body.map((paragraph, i) => (
          <p key={i} className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black leading-[1.8]">
            {paragraph}
          </p>
        ))}

        {/* Signature */}
        <div className="flex justify-end mt-[-64px]">
          <img src={imgFirma} alt="Denchi" className="h-[100px] object-contain" />
        </div>
      </div>

      {/* Other notes */}
      {otherPosts.length > 0 && (
        <div className="bg-[#f8f8f8] py-[60px]">
          <div className="max-w-[1186px] mx-auto px-[24px] sm:px-[48px] lg:px-[80px]">
            <h2 className="font-['EB_Garamond',serif] text-[40px] text-black mb-[32px]">Other notes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[32px] gap-y-[40px]">
              {otherPosts.map((p) => (
                <Link key={p.id} to={`/blog/${p.slug}`} className="no-underline group">
                  <OtherNoteCard post={p} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
