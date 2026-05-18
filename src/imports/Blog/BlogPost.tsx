import { Link, useParams } from "react-router";
import { posts } from "./posts";
import imgBannerBlog from "./banner1.png";

const imgSpeechBalloon = "https://www.figma.com/api/mcp/asset/3498e7d1-cf65-4c99-8b2c-54172ccb0d44";

function Header() {
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
            <div className="bg-black flex gap-[10px] items-center justify-center px-[16px] py-[10px] rounded-[100px] hover:bg-[#333333] transition-colors cursor-pointer">
              <img alt="" className="shrink-0 size-[24px]" src={imgSpeechBalloon} />
              <a href="https://www.linkedin.com/in/denisechiapin/?skipRedirect=true" target="_blank" className="font-['Inter:Regular',sans-serif] font-normal text-[20px] text-white whitespace-nowrap no-underline">See my profile!</a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f8f8f8] border-t border-b border-[#d6d1d1] flex h-[56px] items-center justify-center p-[10px] shrink-0 w-full">
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
      </div>
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

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-['Inter:Regular',sans-serif] text-[20px] text-black">Post not found.</p>
      </div>
    );
  }

  const otherPosts = posts.filter((p) => p.slug && p.slug !== slug);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <div className="h-[136px] shrink-0" />

      {/* Hero image */}
      <div className="relative w-full overflow-hidden shrink-0" style={{ maxHeight: 260 }}>
        <img src={imgBannerBlog} alt={post.title} className="w-full object-cover" />
        {/* Centered title overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white border border-black px-[48px] py-[24px] text-center">
            <p className="font-['Inter:Regular',sans-serif] text-[32px] text-black leading-normal">
              Yes, that's also <span className="font-['Monomakh',sans-serif] text-[48px]">UX.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Article */}
      <div className="max-w-[780px] mx-auto px-[40px] py-[64px] flex flex-col gap-[24px] flex-1">
        <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[32px] text-black leading-normal">
          {post.title}
        </h1>
        {post.body.map((paragraph, i) => (
          <p key={i} className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black leading-[1.8]">
            {paragraph}
          </p>
        ))}

        {/* Signature */}
        <div className="flex justify-end mt-[24px]">
          <span className="font-['Kimochi:Regular',sans-serif] text-[40px] text-black">Denchi</span>
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
