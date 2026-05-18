import { Link } from "react-router";
import svgPaths from "./svg-pw6w0vxexd";
import imgCollage from "./collage.png";

const imgArrow    = "https://www.figma.com/api/mcp/asset/2d213072-a8b7-4020-8479-3c4520263fc9";
const imgSpeech   = "https://www.figma.com/api/mcp/asset/a645b18b-8179-4bc9-8a36-7ecf5437f76d";
const imgPencil   = "https://www.figma.com/api/mcp/asset/1d79fd68-05fb-4617-b97e-08b42c102af9";

/* ─────────────────────────────────────────────── Header */
function Header() {
  return (
    <div className="bg-white fixed flex flex-col items-start left-0 top-0 w-full z-50">
      {/* Nav row */}
      <div className="bg-white flex h-[80px] items-center justify-between px-[48px] shrink-0 w-full">
        <Link to="/" className="flex gap-[8px] items-center no-underline">
          <svg fill="none" viewBox="0 0 34 22" className="h-[22px] shrink-0 w-[34px]">
            <path d="M34 2.47042C20.0898 7.79276 17.9004 7.54971 11.7118 0C13.7777 9.61712 12.6273 11.5368 0 19.5296C13.9102 14.2072 16.0996 14.4503 22.2882 22C20.2223 12.3829 21.3727 10.4632 34 2.47042Z" fill="#FF6465" />
          </svg>
          <span className="font-['Kimochi:Regular',sans-serif] text-[20px] text-black whitespace-nowrap">My portfolio</span>
        </Link>
        <div className="flex gap-[24px] items-center">
          <Link to="/" className="font-['Inter:Regular',sans-serif] font-normal text-[20px] text-black no-underline hover:opacity-70 transition-opacity whitespace-nowrap">Home</Link>
          <span className="font-['Inter:Bold',sans-serif] font-bold text-[20px] text-black whitespace-nowrap">About me</span>
          <div className="flex gap-[8px] items-center">
            <a
              href="/CV- Denise Chiapin EN - Classic.pdf"
              download
              className="border border-black font-['Inter:Regular',sans-serif] font-normal text-[20px] text-black px-[16px] py-[6px] rounded-[100px] whitespace-nowrap hover:bg-black hover:text-white transition-colors no-underline"
            >
              My CV
            </a>
            <div className="bg-black border border-black flex gap-[10px] items-center justify-center px-[16px] py-[10px] rounded-[100px] hover:bg-[#333] transition-colors cursor-pointer">
              <div className="relative shrink-0 size-[24px]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p20986480} fill="white" stroke="white" strokeLinejoin="round" strokeMiterlimit="10" />
                  <path d={svgPaths.p2a5f0180} fill="#54646D" />
                  <path d={svgPaths.p29df600} fill="#54646D" />
                  <path d={svgPaths.p1e1ea9b0} fill="#54646D" />
                </svg>
              </div>
              <a href="https://www.linkedin.com/in/denisechiapin/?skipRedirect=true" target="_blank" className="font-['Inter:Regular',sans-serif] font-normal text-[20px] text-white whitespace-nowrap no-underline">
                See my profile!
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Green banner */}
      <div className="bg-[#ebfaaa] drop-shadow-[0px_4px_2px_rgba(159,159,159,0.25)] flex gap-[10px] h-[49px] items-center justify-center p-[10px] shrink-0 w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] text-[0px] text-black whitespace-nowrap">
          <span className="leading-[normal] text-[16px]">{` A`}</span>
          <span className="leading-[normal] text-[20px]">{` `}</span>
          <span className="font-['Monomakh',sans-serif] leading-[normal] text-[24px]">designer passionate</span>
          <span className="leading-[normal] text-[20px]">{` `}</span>
          <span className="leading-[normal] text-[16px]">about creating beautiful</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] text-[20px]">{` `}</span>
          <span className="font-['Monomakh',sans-serif] leading-[normal] text-[24px]">user friendly products</span>
        </p>
        <div className="overflow-clip relative shrink-0 size-[24px]">
          <div className="absolute inset-[0.99%_3.07%_3.08%_0.99%]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPencil} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────── Footer */
function Footer() {
  return (
    <div className="bg-white flex h-[80px] items-center justify-between px-[32px] w-full mt-[24px]">
      <div className="flex flex-col items-start p-[8px] w-[133px]">
        <div className="flex gap-[3px] items-end w-full">
          <span className="font-['Kimochi:Regular',sans-serif] leading-normal text-[20px] text-black whitespace-nowrap">Denchi</span>
          <div className="h-[22px] relative shrink-0 w-[34px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 22">
              <path d={svgPaths.p13c99900} fill="#FF6465" />
            </svg>
          </div>
        </div>
      </div>
      <a
        href="mailto:dn.chiapin@gmail.com?subject=Contact%20from%20your%20portfolio"
        target="_blank"
        className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black underline decoration-solid leading-normal"
      >
        Get in touch -
      </a>
    </div>
  );
}

/* ─────────────────────────────────────────────── Page */
export default function AboutMe() {
  return (
    <div className="bg-white flex flex-col min-h-screen" data-name="About me">
      <Header />

      {/* Main content — starts below fixed header (80px nav + 49px banner = 129px) */}
      <div className="flex items-center pt-[160px] w-full flex-1">
        {/* Left: collage — flush left, no margin */}
        <div className="shrink-0 w-[55%]">
          <img
            src={imgCollage}
            alt="About me collage"
            className="w-full object-contain"
          />
        </div>

        {/* Right: text */}
        <div className="flex flex-col gap-[24px] items-start pl-[60px] pr-[80px] shrink-0 flex-1">
          {/* Name */}
          <div className="flex flex-col gap-[16px] w-full">
            <div className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] text-[40px] text-black whitespace-nowrap">
              <span className="font-['Inter:Regular',sans-serif] font-normal">My name is</span>
              {` Denise Chiapin`}
            </div>
            {/* Nickname row */}
            <div className="flex gap-[16px] items-center w-full">
              <div className="font-['Inter:Regular',sans-serif] font-normal text-[24px] text-black whitespace-nowrap">
                But everybody calls me
              </div>
              <div className="h-0 relative shrink-0 w-[100px]">
                <div className="absolute inset-[-3.68px_-0.5%_-3.68px_-2.67%]">
                  <img alt="" className="block max-w-none size-full" src={imgArrow} />
                </div>
              </div>
              <div className="font-['Monomakh',sans-serif] leading-[normal] text-[40px] text-black whitespace-nowrap">
                Denchi
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="font-['Inter:Light',sans-serif] font-light leading-[0] text-[16px] text-black w-[493px] whitespace-pre-wrap">
            <p className="leading-[28px] mb-0">
              {`I've been working as a Designer for the past 6 years, mostly across fintech, SaaS and B2B/B2C products.`}
              <br /><br />
            </p>
            <p className="leading-[28px] mb-0">
              I love turning complex problems into simple, useful and human experiences, always getting involved in the full process — from research and flows to strategy and implementation.
              <br /><br />
            </p>
            <p className="leading-[28px]">
              Lately, I've been really into AI, automation and building smarter digital products. Also… yes, I'm slightly obsessed with Japan and learning Japanese 🇯🇵
            </p>
          </div>

          {/* CTA */}
          <a
            href="/carta-de-presentacion.pdf"
            download
            className="bg-black border border-black flex gap-[10px] items-center justify-center px-[16px] py-[10px] rounded-[100px] hover:bg-[#333333] transition-colors cursor-pointer no-underline"
          >
            <img alt="" className="relative shrink-0 size-[24px]" src={imgSpeech} />
            <span className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] text-[20px] text-white whitespace-nowrap">
              Read my cover letter
            </span>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
