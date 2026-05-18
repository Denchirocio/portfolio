import { useState } from "react";
import { Link } from "react-router";
import imgBannerBlog from "./Bannerblog.png";
import { posts } from "./posts";
import { ContactDrawer } from "../shared/ContactDrawer";

const imgSpeechBalloon = "https://www.figma.com/api/mcp/asset/3498e7d1-cf65-4c99-8b2c-54172ccb0d44";

function BlogCard({ post, isFirst }: { post: typeof posts[0]; isFirst: boolean }) {
  const inner = (
    <div className="flex flex-col gap-[16px] items-start shrink-0 w-[360px]">
      {/* Image + date row */}
      <div className="flex items-start justify-between w-full">
        {/* Rotated date */}
        <div className="flex h-[300px] items-center justify-center w-[19px] shrink-0">
          <div className="-rotate-90 flex-none">
            <p className="font-['Inter:Regular',sans-serif] font-semibold text-[14px] text-black whitespace-nowrap">
              {post.date}
            </p>
          </div>
        </div>

        {/* Thumbnail */}
        <div className={`relative shrink-0 size-[300px] border ${isFirst ? "border-[#dfa9ea]" : "border-black"} overflow-hidden`}>
          {post.image && (
            <img
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-80"
              src={post.image}
            />
          )}
          {/* First post overlay */}
          {isFirst && (
            <div className="absolute bg-white border border-black left-[80px] top-[50px] w-[180px] h-[180px] flex flex-col justify-center p-[16px]">
              <p className="font-['Inter:Regular',sans-serif] text-[20px] text-black leading-normal mb-[8px]">
                Yes, that's also
              </p>
              <p className="font-['Monomakh',sans-serif] text-[56px] text-black leading-none">
                UX.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-[12px] w-full">
        <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[22px] text-black leading-normal">
          {post.title}
        </h2>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[15px] text-[#7a7a7a] leading-normal">
          {post.description}
        </p>
      </div>
    </div>
  );

  return post.slug
    ? <Link to={`/blog/${post.slug}`} className="no-underline">{inner}</Link>
    : inner;
}

function Header({ onBannerClick }: { onBannerClick: () => void }) {
  return (
    <div className="bg-white fixed flex flex-col items-start left-0 top-0 w-full z-50">
      {/* Nav */}
      <div className="bg-white flex h-[80px] items-center justify-between px-[48px] shrink-0 w-full">
        <Link to="/" className="flex gap-[8px] items-center no-underline logo-link">
          <svg fill="none" viewBox="0 0 34 22" className="h-[22px] shrink-0 w-[34px] logo-star">
            <path d="M34 2.47042C20.0898 7.79276 17.9004 7.54971 11.7118 0C13.7777 9.61712 12.6273 11.5368 0 19.5296C13.9102 14.2072 16.0996 14.4503 22.2882 22C20.2223 12.3829 21.3727 10.4632 34 2.47042Z" fill="#FF6465" />
          </svg>
          <span className="font-['Kimochi:Regular',sans-serif] text-[20px] text-black whitespace-nowrap">My portfolio</span>
        </Link>
        <div className="flex gap-[24px] items-center">
          <Link to="/" className="font-['Inter:Regular',sans-serif] font-normal text-[20px] text-black no-underline hover:opacity-70 transition-opacity whitespace-nowrap">Home</Link>
          <Link to="/about" className="font-['Inter:Regular',sans-serif] font-normal text-[20px] text-black no-underline hover:opacity-70 transition-opacity whitespace-nowrap">About me</Link>
          <span className="font-['Inter:Bold',sans-serif] font-bold text-[20px] text-black whitespace-nowrap">Blog</span>
          <div className="flex gap-[8px] items-center">
            <a
              href="/CV- Denise Chiapin EN - Classic.pdf"
              download
              className="font-['Inter:Regular',sans-serif] font-normal text-[20px] text-black border border-black px-[16px] h-[44px] flex items-center rounded-[100px] whitespace-nowrap hover:bg-black hover:text-white transition-colors no-underline"
            >
              My CV
            </a>
            <div className="bg-black flex gap-[10px] items-center justify-center px-[16px] py-[10px] rounded-[100px] hover:bg-[#333333] transition-colors cursor-pointer">
              <img alt="" className="shrink-0 size-[24px]" src={imgSpeechBalloon} />
              <a href="https://www.linkedin.com/in/denisechiapin/?skipRedirect=true" target="_blank" className="font-['Inter:Regular',sans-serif] font-normal text-[20px] text-white whitespace-nowrap no-underline">
                See my profile!
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Banner */}
      <button onClick={onBannerClick} className="bg-[#f8f8f8] border-t border-b border-[#d6d1d1] flex h-[56px] items-center justify-center p-[10px] shrink-0 w-full cursor-pointer hover:bg-[#f0f0f0] transition-colors">
        <div className="flex gap-[2px] items-center">
          <div className="bg-[rgba(223,169,234,0.6)] flex h-[32px] items-center justify-center px-[8px] py-[4px]">
            <span className="font-['Monomakh',sans-serif] text-[24px] text-black leading-normal">I'm here</span>
          </div>
          <span className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black whitespace-nowrap">
            {` if you want to talk `}<span className="font-['Monomakh',sans-serif] text-[24px]">about UX...</span>
          </span>
          <div className="bg-[#ebfaaa] flex h-[32px] items-center justify-center px-[8px] py-[4px]">
            <span className="font-['Monomakh',sans-serif] text-[24px] text-black leading-normal whitespace-nowrap">Let's talk</span>
          </div>
          <span className="font-['Monomakh',sans-serif] text-[24px] text-black px-[6px]">→</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal italic text-[16px] text-black whitespace-nowrap">
            (For free, this is not a sales pitch)
          </span>
        </div>
      </button>
    </div>
  );
}

export default function Blog() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className="bg-[#f8f8f8] min-h-screen flex flex-col">
      <Header onBannerClick={() => setIsDrawerOpen(true)} />
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      {/* Space for fixed header (80px nav + 56px banner) */}
      <div className="h-[136px] shrink-0" />

      {/* Hero banner */}
      <img src={imgBannerBlog} alt="Blog banner" fetchPriority="high" decoding="async" className="w-full object-cover shrink-0" />

      {/* Blog posts grid */}
      <div className="flex-1 flex items-start justify-center gap-0 px-[80px] py-[60px]">
        {posts.map((post, i) => (
          <div key={post.id} className="flex items-stretch">
            <div className={(post as any).hidden ? "invisible w-[360px]" : ""}>
              {!(post as any).hidden && <BlogCard post={post} isFirst={i === 0} />}
            </div>
            {i < posts.length - 1 && (
              <div className="w-px bg-black mx-[16px] self-stretch" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
