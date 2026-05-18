import { Link } from "react-router";

const imgSpeechBalloon = "https://www.figma.com/api/mcp/asset/3498e7d1-cf65-4c99-8b2c-54172ccb0d44";
const imgCode     = "https://www.figma.com/api/mcp/asset/031012d6-90c1-450d-87eb-f108e54f58db";
const imgFigma    = "https://www.figma.com/api/mcp/asset/384df90a-5f9e-4439-b17c-ceeb5daf863b";
const imgOverload = "https://www.figma.com/api/mcp/asset/e4c4483c-7c70-4126-a6d8-bf4f5cc07fce";
const imgThumbsUp = "https://www.figma.com/api/mcp/asset/469a0aa4-32f5-4faf-a0cf-3bc38b7a40a6";
const imgPencil   = "https://www.figma.com/api/mcp/asset/53cb5f17-5374-4fa5-a627-18c7daf1a32f";
const imgImportant= "https://www.figma.com/api/mcp/asset/63aaa799-71ef-44c6-9127-b36a0a0a4eb7";
const imgPost1    = "https://www.figma.com/api/mcp/asset/74940caa-8a8d-43e9-8a99-5d28b420a4e1";

const posts = [
  {
    id: 1,
    date: "17/05/2026",
    image: imgPost1,
    overlay: true,
    title: "UX Design in Asia. Why is it so different?",
    description: "From Japan to the West, a look into why some interfaces that feel chaotic to us can represent innovation, efficiency and a completely natural experience for others.",
  },
  {
    id: 2,
    date: "DD/MM/AAAA",
    image: null,
    overlay: false,
    title: "Coming soon",
    description: "Stay tuned for more articles about UX, design systems and product thinking.",
  },
  {
    id: 3,
    date: "DD/MM/AAAA",
    image: null,
    overlay: false,
    title: "Coming soon",
    description: "Stay tuned for more articles about UX, design systems and product thinking.",
  },
];

function BlogCard({ post, isFirst }: { post: typeof posts[0]; isFirst: boolean }) {
  return (
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
                si, eso también es
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
}

function Header() {
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
          <span className="font-['Inter:Regular',sans-serif] font-normal italic text-[16px] text-black whitespace-nowrap">
            (For free, this is not a sales pitch)
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Blog() {
  return (
    <div className="bg-[#f8f8f8] min-h-screen flex flex-col">
      <Header />
      {/* Space for fixed header (80px nav + 56px banner) */}
      <div className="h-[136px] shrink-0" />

      {/* Hero black banner */}
      <div className="relative bg-black w-full h-[206px] shrink-0 overflow-hidden">
        {/* Floating stickers */}
        <img src={imgImportant} alt="" className="absolute left-[86px] top-[60px] h-[74px] w-[76px] rotate-[-19deg] object-contain" />
        <img src={imgCode}      alt="" className="absolute left-[205px] top-[40px] h-[53px] w-[69px] rotate-[22deg] object-contain" />
        <img src={imgFigma}     alt="" className="absolute left-[344px] top-[56px] h-[64px] w-[63px] rotate-[-15deg] object-contain" />
        <img src={imgOverload}  alt="" className="absolute left-[973px] top-[35px] h-[67px] w-[67px] rotate-[15deg] object-contain" />
        <img src={imgThumbsUp}  alt="" className="absolute left-[1127px] top-[60px] h-[61px] w-[49px] rotate-[-25deg] object-contain" />
        <img src={imgPencil}    alt="" className="absolute left-[1280px] top-[40px] h-[49px] w-[49px] object-contain" />

        {/* Badges */}
        <div className="absolute left-[246px] top-[100px] bg-[#ffabe7] px-[16px] py-[6px] rounded-[24px]">
          <span className="font-['Inter:Regular',sans-serif] font-semibold text-[14px] text-black">UX/UI</span>
        </div>
        <div className="absolute left-[996px] top-[108px] bg-[#c8e793] px-[16px] py-[6px] rounded-[24px]">
          <span className="font-['Inter:Regular',sans-serif] font-semibold text-[14px] text-black">PRODUCT</span>
        </div>
        <div className="absolute left-[1303px] top-[113px] bg-[#796ff1] px-[16px] py-[6px] rounded-[24px]">
          <span className="font-['Inter:Regular',sans-serif] font-semibold text-[14px] text-white">IA</span>
        </div>

        {/* Center text box with corner markers */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[28px] w-[430px] h-[150px]">
          {/* Corner squares */}
          <div className="absolute -left-[6px] -top-[6px] size-[12px] bg-black border border-white" />
          <div className="absolute -right-[6px] -top-[6px] size-[12px] bg-black border border-white" />
          <div className="absolute -left-[6px] -bottom-[6px] size-[12px] bg-black border border-white" />
          <div className="absolute -right-[6px] -bottom-[6px] size-[12px] bg-black border border-white" />
          {/* Top & bottom lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-white" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-white" />
          {/* Left & right lines */}
          <div className="absolute top-0 bottom-0 left-0 w-px bg-white" />
          <div className="absolute top-0 bottom-0 right-0 w-px bg-white" />
          {/* Text */}
          <div className="flex items-center justify-center h-full px-[24px]">
            <p className="font-['IBM_Plex_Mono',monospace] text-[22px] text-center leading-snug">
              <span className="text-[#ebfaaa]">Let's talk about some</span>
              <br />
              <span className="text-[#ebfaaa] font-bold">things togheter!</span>
            </p>
          </div>
        </div>
      </div>

      {/* Blog posts grid */}
      <div className="flex-1 flex items-start justify-center gap-0 px-[80px] py-[60px]">
        {posts.map((post, i) => (
          <div key={post.id} className="flex items-stretch">
            <BlogCard post={post} isFirst={i === 0} />
            {i < posts.length - 1 && (
              <div className="w-px bg-black mx-[16px] self-stretch" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
