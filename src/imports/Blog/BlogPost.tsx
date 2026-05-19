import { Link, useParams } from "react-router";
import { useState } from "react";
import { ContactDrawer } from "../shared/ContactDrawer";
import { posts } from "./posts";
import imgFirma from "./firma.png";

const imgSpeechBalloon = "https://www.figma.com/api/mcp/asset/3498e7d1-cf65-4c99-8b2c-54172ccb0d44";

function Header({ onBannerClick }: { onBannerClick: () => void }) {
  return (
    <div className="bg-white fixed flex flex-col items-start left-0 top-0 w-full z-50">
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
          <Link to="/blog" className="font-['Inter:Bold',sans-serif] font-bold text-[20px] text-black no-underline whitespace-nowrap">Blog</Link>
          <div className="flex gap-[8px] items-center">
            <a href="/CV- Denise Chiapin EN - Classic.pdf" download className="font-['Inter:Regular',sans-serif] font-normal text-[20px] text-black border border-black px-[16px] h-[44px] flex items-center rounded-[100px] whitespace-nowrap hover:bg-black hover:text-white transition-colors no-underline">My CV</a>
            <div className="bg-black content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative rounded-[100px] shrink-0 hover:bg-[#333333] transition-colors cursor-pointer">
              <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
              <div className="relative shrink-0 size-[24px]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24"><path d="M11.9344 1.51312C3.93562 1.55437 0.6975 5.72437 0.635625 10.9181C0.601875 13.8188 2.47125 16.3238 5.33625 17.8519C6.73312 18.84 5.07 22.0781 3.73875 22.905C3.73875 22.905 8.445 22.5844 9.7425 19.2675C10.4587 19.3725 11.1956 19.4269 11.9512 19.4269C18.1912 19.4269 23.2331 16.1119 23.2331 10.9181C23.2331 5.72437 20.01 1.47375 11.9344 1.51312Z" fill="white" stroke="white" strokeLinejoin="round" strokeMiterlimit="10" /><path d="M6.1125 12.1875C6.94093 12.1875 7.6125 11.5159 7.6125 10.6875C7.6125 9.85907 6.94093 9.1875 6.1125 9.1875C5.28407 9.1875 4.6125 9.85907 4.6125 10.6875C4.6125 11.5159 5.28407 12.1875 6.1125 12.1875Z" fill="#54646D" /><path d="M12.1125 12.1875C12.9409 12.1875 13.6125 11.5159 13.6125 10.6875C13.6125 9.85907 12.9409 9.1875 12.1125 9.1875C11.2841 9.1875 10.6125 9.85907 10.6125 10.6875C10.6125 11.5159 11.2841 12.1875 12.1125 12.1875Z" fill="#54646D" /><path d="M17.8875 12.1875C18.7159 12.1875 19.3875 11.5159 19.3875 10.6875C19.3875 9.85907 18.7159 9.1875 17.8875 9.1875C17.0591 9.1875 16.3875 9.85907 16.3875 10.6875C16.3875 11.5159 17.0591 12.1875 17.8875 12.1875Z" fill="#54646D" /></svg>
              </div>
              <a href="https://www.linkedin.com/in/denisechiapin/?skipRedirect=true" target="_blank" className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap no-underline">
                <p className="cursor-pointer leading-[normal]">See my profile!</p>
              </a>
            </div>
          </div>
        </div>
      </div>
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
          <span className="font-['Inter:Regular',sans-serif] font-normal italic text-[16px] text-black whitespace-nowrap">(For free, this is not a sales pitch)</span>
        </div>
      </button>
    </div>
  );
}

function OtherNoteCard({ post }: { post: typeof posts[0] }) {
  return (
    <div className="flex flex-col gap-[16px] items-start shrink-0 w-[360px]">
      <div className="flex items-start justify-between w-full">
        <div className="flex h-[200px] items-center justify-center w-[19px] shrink-0">
          <div className="-rotate-90 flex-none">
            <p className="font-['Inter:Regular',sans-serif] font-semibold text-[14px] text-black whitespace-nowrap">{post.date || "DD.MM.AAAA"}</p>
          </div>
        </div>
        <div className="relative shrink-0 border border-black overflow-hidden" style={{ width: 300, height: 200 }}>
          {post.image && <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-80" src={post.image} />}
        </div>
      </div>
      <div className="flex flex-col gap-[8px] w-full">
        <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[20px] text-black leading-normal">{post.title || "Coming soon"}</h3>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#7a7a7a] leading-normal">{post.description}</p>
      </div>
    </div>
  );
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
      <Header onBannerClick={() => setIsDrawerOpen(true)} />
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      <div className="h-[136px] shrink-0" />

      {/* Hero image */}
      {post.banner && <img src={post.banner} alt={post.title} fetchPriority="high" decoding="async" className="w-full object-cover shrink-0" />}

      {/* Breadcrumb */}
      <div className="max-w-[780px] mx-auto px-[40px] pt-[32px] w-full flex items-center gap-[8px]">
        <Link to="/blog" className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black no-underline hover:opacity-60 transition-opacity">‹ Blog</Link>
        <span className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black">/</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold text-[16px] text-black truncate">{post.title}</span>
      </div>

      {/* Article */}
      <div className="max-w-[780px] mx-auto px-[40px] py-[32px] flex flex-col gap-[24px] flex-1">
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
        <div className="bg-[#f8f8f8] px-[80px] py-[60px]">
          <h2 className="font-['Monomakh',sans-serif] text-[32px] text-black mb-[40px]">Other notes</h2>
          <div className="flex gap-0 items-start">
            {[...otherPosts, ...Array(Math.max(0, 3 - otherPosts.length)).fill(null)].map((p, i) => (
              <div key={i} className="flex items-stretch">
                {p
                  ? <Link to={`/blog/${p.slug}`} className="no-underline"><OtherNoteCard post={p} /></Link>
                  : <div className="w-[360px] h-[300px] invisible" />
                }
                {i < 2 && <div className="w-px bg-black mx-[16px] self-stretch" />}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="bg-white flex h-[80px] items-center justify-between px-[32px] w-full">
        <div className="flex gap-[3px] items-center p-[8px]">
          <span className="font-['Kimochi:Regular',sans-serif] leading-normal text-[20px] text-black whitespace-nowrap">Denchi</span>
          <svg fill="none" viewBox="0 0 34 22" className="w-[34px] h-[22px]">
            <path d="M34 2.47042C20.0898 7.79276 17.9004 7.54971 11.7118 0C13.7777 9.61712 12.6273 11.5368 0 19.5296C13.9102 14.2072 16.0996 14.4503 22.2882 22C20.2223 12.3829 21.3727 10.4632 34 2.47042Z" fill="#FF6465" />
          </svg>
        </div>
        <a href="mailto:dn.chiapin@gmail.com?subject=Contact%20from%20your%20portfolio" target="_blank" className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black underline decoration-solid leading-normal">
          Get in touch -
        </a>
      </div>
    </div>
  );
}
