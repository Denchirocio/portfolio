import { Link } from "react-router";
import FadeIn from "../../app/components/FadeIn";
import svgPaths from "./svg-pw6w0vxexd";
import imgCollage from "./collage.png";

function Frame31() {
  return (
    <div className="content-stretch flex gap-[3px] items-end relative shrink-0 w-full">
      <p className="font-['Kimochi:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">Denchi</p>
      <div className="h-[22px] relative shrink-0 w-[34px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 22">
          <path d={svgPaths.p13c99900} fill="var(--fill-0, #FF6465)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-start p-[8px] relative shrink-0 w-[133px]">
      <Frame31 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame32 />
      <a
        className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap"
        href="mailto:dn.chiapin@gmail.com?subject=Contact%20from%20your%20portfolio"
        target="_blank"
      >
        <p className="cursor-pointer decoration-solid leading-[normal] underline">Get in touch -</p>
      </a>
    </div>
  );
}

function Footer() {
  return (
    <div className="fixed bottom-0 left-0 bg-white flex flex-col h-[80px] items-start justify-center px-[32px] py-[10px] w-screen z-40" data-name="Footer">
      <Frame16 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[668.5px]">
      <svg fill="none" viewBox="0 0 34 22" className="w-[34px] h-[22px] shrink-0">
        <path d="M34 2.47042C20.0898 7.79276 17.9004 7.54971 11.7118 0C13.7777 9.61712 12.6273 11.5368 0 19.5296C13.9102 14.2072 16.0996 14.4503 22.2882 22C20.2223 12.3829 21.3727 10.4632 34 2.47042Z" fill="#FF6465" />
      </svg>
      <p className="font-['Kimochi:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">My portfolio</p>
    </div>
  );
}

function SpeechBalloon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="speech_balloon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="speech_balloon">
          <path d={svgPaths.p20986480} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinejoin="round" strokeMiterlimit="10" />
          <g id="Group">
            <path d={svgPaths.p2a5f0180} fill="var(--fill-0, #54646D)" id="Vector_2" />
            <path d={svgPaths.p29df600} fill="var(--fill-0, #54646D)" id="Vector_3" />
            <path d={svgPaths.p1e1ea9b0} fill="var(--fill-0, #54646D)" id="Vector_4" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-black content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative rounded-[100px] shrink-0 hover:bg-[#333333] transition-colors cursor-pointer">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
      <SpeechBalloon1 />
      <a className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap" href="https://www.linkedin.com/in/denisechiapin/?skipRedirect=true" target="_blank">
        <p className="cursor-pointer leading-[normal]">See my profile!</p>
      </a>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame10 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Link to="/" className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] no-underline not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap hover:opacity-70 transition-opacity">Home</Link>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">About me</p>
      <div className="flex items-center gap-[8px]">
        <a
          href="/CV- Denise Chiapin EN - Classic.pdf"
          download
          className="font-['Inter:Regular',sans-serif] font-normal text-[20px] text-black border border-black px-[16px] py-[6px] rounded-[100px] whitespace-nowrap hover:bg-black hover:text-white transition-colors"
        >
          My CV
        </a>
        <Frame18 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white h-[80px] relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[48px] py-[10px] relative size-full">
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-white content-stretch fixed flex flex-col items-start left-0 top-0 w-full z-50">
      <Frame6 />
    </div>
  );
}

const figmaAssets = {
  arrow:  "https://www.figma.com/api/mcp/asset/13f6fbc3-909d-4c0f-9a61-2f97ddf6e104",
  speech: "https://www.figma.com/api/mcp/asset/fbebd055-cbe8-4cc9-8e7a-b9f6b10a59b5",
};

export default function AboutMe() {
  return (
    <div className="bg-white relative min-h-screen" data-name="About me">
      <Frame26 />
      <Footer />

      <FadeIn>
        <div className="flex items-center gap-[40px] mt-[160px] pl-0 pr-[48px] w-full 2xl:max-w-[1186px] 2xl:mx-auto 2xl:pr-0">
          {/* Left: collage */}
          <img src={imgCollage} alt="About me collage" className="w-[680px] object-contain shrink-0" />

          {/* Right: text content */}
          <div className="flex flex-col items-start pl-[40px] pr-[80px] py-[10px] relative w-[520px] shrink-0">
            <FadeIn delay={0.2}>
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                  <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-end leading-[0] not-italic relative shrink-0 text-[40px] text-black whitespace-nowrap">
                    <p>
                      <span className="font-['Inter:Regular',sans-serif] font-normal leading-[normal]">My name is</span>
                      <span className="leading-[normal]">{` Denise Chiapin`}</span>
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-black whitespace-nowrap">
                      <p className="text-[24px]">
                        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[normal]">But everybody calls me</span>
                      </p>
                    </div>
                    <div className="h-0 relative shrink-0 w-[100px]">
                      <div className="absolute inset-[-3.68px_-0.5%_-3.68px_-2.67%]">
                        <img alt="" className="block max-w-none size-full" src={figmaAssets.arrow} />
                      </div>
                    </div>
                    <div className="flex flex-col font-['Monomakh',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[40px] text-black whitespace-nowrap">
                      <p className="leading-[normal]">Denchi</p>
                    </div>
                  </div>
                </div>
                <div className="font-['Inter:Light',sans-serif] font-light leading-[0] not-italic relative shrink-0 text-[16px] text-black w-full whitespace-pre-wrap">
                  <p className="leading-[28px] mb-0">
                    {`I've been working as a Designer for the past 6 years, mostly across fintech, SaaS and B2B/B2C products.`}
                    <br /><br />
                  </p>
                  <p className="leading-[28px] mb-0">
                    I love turning complex problems into simple, useful and human experiences, always getting involved in the full process — from research and flows to strategy and implementation.
                    <br /><br />
                  </p>
                  <p className="leading-[28px]">Lately, I've been really into AI, automation and building smarter digital products. Also… yes, I'm slightly obsessed with Japan and learning Japanese 🇯🇵</p>
                </div>
                <div className="content-stretch flex items-start relative shrink-0">
                  <a
                    href="/carta-de-presentacion.pdf"
                    download
                    className="bg-black border border-black content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative rounded-[100px] shrink-0 hover:bg-[#333333] transition-colors cursor-pointer"
                  >
                    <img alt="" className="relative shrink-0 size-[24px]" src={figmaAssets.speech} />
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">
                      Read my cover letter
                    </p>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
