import { useState, type ReactNode } from "react";
import { Link } from "react-router";
import imgBanner from "./Banner.png";
import FadeIn from "../../app/components/FadeIn";
import svgPaths from "./svg-ek4j21yj9u";
import imgWireframe1 from "./483d2b5fb9135af80493b63eb9d11b5a20e88c06.png";
import imgAccesibility1 from "./8560324619c7e6225750fc6c0ac0844adc4fb439.png";
import imgHeart11 from "./2ad3e126c6e02b076954455f2601d7adfba66175.png";
import imgJoystick1 from "./98976392e11ade73f201e56d7b60392f89f281e3.png";
import imgRectangle2 from "./a59a754abc17170c3439ff7dc85a16e5503ddb80.png";
import imgRectangle3 from "./3c02e76a688120a3f55c7c6d42881902b6c378ed.png";
import imgRectangle4 from "./d5ed68bd0967246ce849d44538ce6c3524e9ddde.png";
import imgRectangle6 from "./4fdfe813fda517a1ae897d9aee28c140791d9525.png";
import imgDenchiLaptop from "./denchi/laptop-screen.png";
import imgDenchiPhone from "./denchi/phone-screen.png";

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#e9f7ba] col-1 ml-0 mt-0 relative rounded-[14px] row-1 size-[36px] sm:size-[64px]" />
      <div className="col-1 ml-[6px] mt-[6px] sm:ml-[12px] sm:mt-[12px] relative row-1 size-[24px] sm:size-[40px]" data-name="accesibility 1">
        <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAccesibility1} />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#c7d4fd] col-1 ml-0 mt-0 relative rounded-[14px] row-1 size-[36px] sm:size-[64px]" />
      <div className="col-1 ml-[6px] mt-[6px] sm:ml-[12px] sm:mt-[12px] relative row-1 size-[24px] sm:size-[40px]" data-name="heart (1) 1">
        <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeart11} />
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#eecdff] col-1 ml-0 mt-0 relative rounded-[14px] row-1 size-[36px] sm:size-[64px]" />
      <div className="col-1 ml-[6px] mt-[6px] sm:ml-[12px] sm:mt-[12px] relative row-1 size-[24px] sm:size-[40px]" data-name="joystick 1">
        <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgJoystick1} />
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="relative shrink-0 size-[36px] sm:size-[64px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="Group 8">
          <rect fill="var(--fill-0, white)" height="64" id="Rectangle 7" rx="14" width="64" x="8.90344e-06" />
          <path d={svgPaths.p13e6acf0} fill="var(--fill-0, #88BEEF)" id="Rectangle 8" />
          <path d={svgPaths.p1f4d8e00} fill="var(--fill-0, #88BEEF)" id="Rectangle 9" />
          <circle cx="32" cy="32" fill="var(--fill-0, #FFCF3D)" id="Ellipse 7" r="12" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="relative shrink-0 size-[36px] sm:size-[64px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="Group 6">
          <rect fill="var(--fill-0, white)" height="63" id="Rectangle 7" rx="13.5" stroke="var(--stroke-0, #EBEBEB)" width="63" x="0.5" y="0.5" />
          <circle cx="32" cy="32" fill="var(--fill-0, #FF6465)" id="Ellipse 7" r="14.5" stroke="var(--stroke-0, #EBEBEB)" />
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  const [isHovered, setIsHovered] = useState(false);

  const wave = (i: number) => ({
    animation: isHovered
      ? `wave-icon 0.7s ease-in-out ${i * 110}ms infinite`
      : 'none',
    display: 'inline-flex' as const,
    alignItems: 'center' as const,
  });

  return (
    <div
      className="content-stretch flex flex-nowrap gap-[8px] sm:gap-[16px] items-center justify-center sm:justify-start relative shrink-0 w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={wave(0)}>
        <div className="relative shrink-0 size-[36px] sm:size-[64px]" data-name="wireframe 1">
          <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWireframe1} />
        </div>
      </div>
      <div style={wave(1)}><Group2 /></div>
      <div style={wave(2)}><Group3 /></div>
      <div style={wave(3)}><Group4 /></div>
      <div style={wave(4)}><Group7 /></div>
      <div style={wave(5)}><Group5 /></div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-center sm:items-start relative shrink-0 w-full md:w-[541px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-black w-full text-[28px] sm:text-[60px] text-center sm:text-left">I’m Denise, hello !</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex h-[26px] sm:h-[30px] items-center justify-center px-[12px] sm:px-[16px] py-[6px] sm:py-[10px] relative rounded-[24px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#595959] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#595959] text-[12px] sm:text-[14px] whitespace-nowrap">PRODUCT DESIGNER</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex h-[26px] sm:h-[30px] items-center justify-center px-[12px] sm:px-[16px] py-[6px] sm:py-[10px] relative rounded-[24px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#595959] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#595959] text-[12px] sm:text-[14px] whitespace-nowrap">ACCESSIBILITY</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex h-[26px] sm:h-[30px] items-center justify-center px-[12px] sm:px-[16px] py-[6px] sm:py-[10px] relative rounded-[24px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#595959] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#595959] text-[12px] sm:text-[14px] whitespace-nowrap">UX RESEARCH</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex h-[26px] sm:h-[30px] items-center justify-center px-[12px] sm:px-[16px] py-[6px] sm:py-[10px] relative rounded-[24px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#595959] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#595959] text-[12px] sm:text-[14px] whitespace-nowrap">GAMER</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-wrap gap-[8px] items-center justify-center sm:justify-start relative shrink-0 w-full">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Badge">
        <Frame />
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="Badge">
        <Frame1 />
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="Badge">
        <Frame2 />
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="Badge">
        <Frame4 />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex h-[26px] sm:h-[30px] items-center justify-center px-[12px] sm:px-[16px] py-[6px] sm:py-[10px] relative rounded-[24px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#595959] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#595959] text-[12px] sm:text-[14px] whitespace-nowrap">日本語を勉強しています</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center sm:justify-start relative shrink-0 w-full">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Badge">
        <Frame6 />
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center sm:items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame5 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center sm:items-start justify-center relative shrink-0 w-full">
      <Frame9 />
      <Frame20 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] sm:text-[16px] text-black w-full">My name is Denise, but my friends call me Denchi. I’m a Sr. Product Designer with strong experience in research and user experience. Over the past six years, I’ve focused on understanding products, users, and how they interact—helping organizations align user needs with business goals through thoughtful design.</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex min-h-[95px] items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame10 />
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame11 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col items-start p-[16px] relative rounded-[8px] shrink-0 w-full md:w-[541px]">
      <div aria-hidden="true" className="absolute border border-[#c9c9c9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame58 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col md:flex-row md:items-center justify-between gap-[24px] md:gap-[80px] relative shrink-0 w-full">
      <Frame57 />
      <Frame59 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] sm:gap-[24px] items-start mt-[32px] sm:mt-[72px] relative shrink-0 w-full">
      <Frame22 />
      <Frame12 />
    </div>
  );
}

function Group6() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[28.2px] place-items-start relative row-1">
      <div className="border-[0.762px] border-black border-solid col-1 h-[198.176px] ml-[15.24px] mt-0 relative rounded-tl-[6.098px] rounded-tr-[6.098px] row-1 w-[304.886px]" />
      <div className="col-1 h-[182.169px] ml-[22.87px] mt-[7.62px] pointer-events-none relative rounded-tl-[6.098px] rounded-tr-[6.098px] row-1 w-[288.879px]">
        <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover rounded-tl-[6.098px] rounded-tr-[6.098px] size-full" src={imgRectangle2} />
        <div aria-hidden="true" className="absolute border-[0.762px] border-black border-solid inset-0 rounded-tl-[6.098px] rounded-tr-[6.098px]" />
      </div>
      <div className="border-[0.762px] border-black border-solid col-1 h-[12.195px] ml-0 mt-[197.41px] relative row-1 w-[335.375px]" />
      <div className="col-1 h-[4.573px] ml-0 mt-[208.85px] relative row-1 w-[335.375px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335.375 4.57329">
          <path d={svgPaths.p3fa02f00} id="Rectangle 5" stroke="var(--stroke-0, black)" strokeWidth="0.762215" />
        </svg>
      </div>
      <div className="border-[0.762px] border-black border-solid col-1 h-[5.336px] ml-[144.82px] mt-[197.41px] relative rounded-bl-[152.443px] rounded-br-[152.443px] row-1 w-[45.733px]" />
    </div>
  );
}

function Group11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-[254.58px] ml-[3.81px] mt-0 relative row-1 w-[326.228px]">
        <div className="absolute inset-[-8.98%_-7.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 371.961 300.313">
            <g filter="url(#filter0_f_1_4778)" id="Ellipse 12">
              <ellipse cx="185.98" cy="150.156" fill="var(--fill-0, white)" fillOpacity="0.3" rx="163.114" ry="127.29" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="300.313" id="filter0_f_1_4778" width="371.961" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_4778" stdDeviation="11.4332" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Group6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#c8e793] content-stretch flex h-[26px] sm:h-[30px] items-center justify-center px-[12px] sm:px-[16px] py-[6px] sm:py-[10px] relative rounded-[24px] shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] sm:text-[14px] text-black whitespace-nowrap">FINANCE</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Badge">
        <Frame7 />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#796ff1] content-stretch flex h-[26px] sm:h-[30px] items-center justify-center px-[12px] sm:px-[16px] py-[6px] sm:py-[10px] relative rounded-[24px] shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] sm:text-[14px] text-white whitespace-nowrap">IA</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#688cf8] content-stretch flex h-[26px] sm:h-[30px] items-center justify-center px-[12px] sm:px-[16px] py-[6px] sm:py-[10px] relative rounded-[24px] shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] sm:text-[14px] text-white whitespace-nowrap">UX/UI</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame14 />
      <div className="content-stretch flex items-center relative shrink-0" data-name="Badge">
        <Frame8 />
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="Badge">
        <Frame15 />
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Title">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[20px] sm:text-[24px] text-black whitespace-nowrap">Payana</p>
      <Frame48 />
    </div>
  );
}

function Group8() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[28.2px] place-items-start relative row-1">
      <div className="border-[0.762px] border-black border-solid col-1 h-[198.176px] ml-[15.24px] mt-0 relative rounded-tl-[6.098px] rounded-tr-[6.098px] row-1 w-[304.886px]" />
      <div className="col-1 h-[182.169px] ml-[22.87px] mt-[7.62px] pointer-events-none relative rounded-tl-[6.098px] rounded-tr-[6.098px] row-1 w-[288.879px]">
        <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover rounded-tl-[6.098px] rounded-tr-[6.098px] size-full" src={imgRectangle3} />
        <div aria-hidden="true" className="absolute border-[0.762px] border-black border-solid inset-0 rounded-tl-[6.098px] rounded-tr-[6.098px]" />
      </div>
      <div className="border-[0.762px] border-black border-solid col-1 h-[12.195px] ml-0 mt-[197.41px] relative row-1 w-[335.375px]" />
      <div className="col-1 h-[4.573px] ml-0 mt-[208.85px] relative row-1 w-[335.375px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335.375 4.57329">
          <path d={svgPaths.p3fa02f00} id="Rectangle 5" stroke="var(--stroke-0, black)" strokeWidth="0.762215" />
        </svg>
      </div>
      <div className="border-[0.762px] border-black border-solid col-1 h-[5.336px] ml-[144.82px] mt-[197.41px] relative rounded-bl-[152.443px] rounded-br-[152.443px] row-1 w-[45.733px]" />
    </div>
  );
}

function Group12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-[254.58px] ml-[3.81px] mt-0 relative row-1 w-[326.228px]">
        <div className="absolute inset-[-8.98%_-7.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 371.961 300.313">
            <g filter="url(#filter0_f_1_4760)" id="Ellipse 12">
              <ellipse cx="185.98" cy="150.156" fill="var(--fill-0, white)" fillOpacity="0.6" rx="163.114" ry="127.29" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="300.313" id="filter0_f_1_4760" width="371.961" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_4760" stdDeviation="11.4332" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Group8 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#796ff1] content-stretch flex h-[26px] sm:h-[30px] items-center justify-center px-[12px] sm:px-[16px] py-[6px] sm:py-[10px] relative rounded-[24px] shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] sm:text-[14px] text-white whitespace-nowrap">IA</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#688cf8] content-stretch flex h-[26px] sm:h-[30px] items-center justify-center px-[12px] sm:px-[16px] py-[6px] sm:py-[10px] relative rounded-[24px] shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] sm:text-[14px] text-white whitespace-nowrap">UX/UI</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Badge">
        <Frame16 />
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="Badge">
        <Frame17 />
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Title">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[20px] sm:text-[24px] text-black whitespace-nowrap">Chatty</p>
      <Frame47 />
    </div>
  );
}

function MockupScale({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-[280px] h-[227px] overflow-hidden sm:w-auto sm:h-auto sm:overflow-visible">
      <div className="absolute top-0 left-0 origin-top-left scale-[0.755] sm:static sm:scale-100">
        {children}
      </div>
    </div>
  );
}

function ProjectCard() {
  return (
    <Link to="/chatty" onClick={() => window.scrollTo(0, 0)} className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full max-w-[366px] no-underline hover:-translate-y-2 hover:drop-shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer" data-name="Project card">
      <MockupScale><Group12 /></MockupScale>
      <Title1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] sm:text-[16px] w-full">Improved Chatty through a user-centered redesign, focusing on usability, clarity, and seamless interactions.</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] sm:text-[14px] text-black w-full">Freelance · 2025</p>
    </Link>
  );
}

function Group9() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[28.2px] place-items-start relative row-1">
      <div className="border-[0.762px] border-black border-solid col-1 h-[198.176px] ml-[15.24px] mt-0 relative rounded-tl-[6.098px] rounded-tr-[6.098px] row-1 w-[304.886px]" />
      <div className="col-1 h-[182.169px] ml-[22.87px] mt-[7.62px] pointer-events-none relative rounded-tl-[6.098px] rounded-tr-[6.098px] row-1 w-[288.879px]">
        <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover rounded-tl-[6.098px] rounded-tr-[6.098px] size-full" src={imgRectangle4} />
        <div aria-hidden="true" className="absolute border-[0.762px] border-black border-solid inset-0 rounded-tl-[6.098px] rounded-tr-[6.098px]" />
      </div>
      <div className="border-[0.762px] border-black border-solid col-1 h-[12.195px] ml-0 mt-[197.41px] relative row-1 w-[335.375px]" />
      <div className="col-1 h-[4.573px] ml-0 mt-[208.85px] relative row-1 w-[335.375px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335.375 4.57329">
          <path d={svgPaths.p3fa02f00} id="Rectangle 5" stroke="var(--stroke-0, black)" strokeWidth="0.762215" />
        </svg>
      </div>
      <div className="border-[0.762px] border-black border-solid col-1 h-[5.336px] ml-[144.82px] mt-[197.41px] relative rounded-bl-[152.443px] rounded-br-[152.443px] row-1 w-[45.733px]" />
    </div>
  );
}

function Group13() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-[254.58px] ml-[3.81px] mt-0 relative row-1 w-[326.228px]">
        <div className="absolute inset-[-8.98%_-7.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 371.961 300.313">
            <g filter="url(#filter0_f_1_4724)" id="Ellipse 12">
              <ellipse cx="185.98" cy="150.156" fill="var(--fill-0, white)" fillOpacity="0.3" rx="163.114" ry="127.29" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="300.313" id="filter0_f_1_4724" width="371.961" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_4724" stdDeviation="11.4332" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Group9 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#ffabe7] content-stretch flex h-[26px] sm:h-[30px] items-center justify-center px-[12px] sm:px-[16px] py-[6px] sm:py-[10px] relative rounded-[24px] shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] sm:text-[14px] text-black whitespace-nowrap">CASE STUDY</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Badge">
        <Frame19 />
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-[#688cf8] content-stretch flex h-[26px] sm:h-[30px] items-center justify-center px-[12px] sm:px-[16px] py-[6px] sm:py-[10px] relative rounded-[24px] shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] sm:text-[14px] text-white whitespace-nowrap">Accessibility</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Badge">
        <Frame26 />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame25 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Title">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[20px] sm:text-[24px] text-black whitespace-nowrap">Bookup</p>
      <Frame18 />
      <Frame24 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px] sm:gap-[42px] items-start relative shrink-0 w-full">
      {/* 1. Denchi */}
      <FadeIn delay={0} className="shrink-0 w-full max-w-[366px]">
        <Link to="/denchi" onClick={() => window.scrollTo(0, 0)} className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full max-w-[366px] no-underline hover:-translate-y-2 hover:drop-shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer" data-name="Denchi">
          <MockupScale><DenchiMockup /></MockupScale>
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Title">
            <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[20px] sm:text-[24px] text-black whitespace-nowrap">DenchiNoNihongo</p>
            <div className="content-stretch flex items-center relative shrink-0">
              <div className="bg-[#688cf8] content-stretch flex h-[26px] sm:h-[30px] items-center justify-center px-[12px] sm:px-[16px] py-[6px] sm:py-[10px] relative rounded-[24px] shrink-0">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] sm:text-[14px] text-white whitespace-nowrap">CLAUDE</p>
              </div>
            </div>
            <div className="content-stretch flex items-center relative shrink-0">
              <div className="bg-[#c8e793] content-stretch flex h-[26px] sm:h-[30px] items-center justify-center px-[12px] sm:px-[16px] py-[6px] sm:py-[10px] relative rounded-[24px] shrink-0">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] sm:text-[14px] text-black whitespace-nowrap">IA</p>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] sm:text-[16px] w-full">Designed and developed DenchiNoNihongo, a mobile-first Japanese learning PWA.</p>
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] sm:text-[14px] text-black w-full">Real project · 2026</p>
        </Link>
      </FadeIn>
      {/* 2. Payana */}
      <FadeIn delay={0.15} className="shrink-0 w-full max-w-[366px]">
        <Link to="/payana" onClick={() => window.scrollTo(0, 0)} className="content-stretch flex flex-col gap-[16px] items-center relative w-full no-underline hover:-translate-y-2 hover:drop-shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer" data-name="Component 6">
          <MockupScale><Group11 /></MockupScale>
          <Title />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] sm:text-[16px] w-full">Led the redesign of the Payana app, optimizing core user flows to simplify financial management and improve usability.</p>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] sm:text-[14px] text-black w-full">Client Project · 2025</p>
        </Link>
      </FadeIn>
      {/* 3. Chatty */}
      <FadeIn delay={0.3} className="shrink-0 w-full max-w-[366px]">
        <div className="content-stretch flex flex-col items-center relative w-full" data-name="Component 6">
          <ProjectCard />
        </div>
      </FadeIn>
      {/* 4. Bookup */}
      <FadeIn delay={0.45} className="shrink-0 w-full max-w-[366px]">
        <Link to="/bookup" onClick={() => window.scrollTo(0, 0)} className="content-stretch flex flex-col gap-[16px] items-center relative w-full no-underline hover:-translate-y-2 hover:drop-shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer" data-name="Component 7">
          <MockupScale><Group13 /></MockupScale>
          <Title2 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] sm:text-[16px] w-full">Designed an accessibility-focused experience for an online bookstore, improving navigation and usability for diverse users.</p>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] sm:text-[14px] text-black w-full">UTN Project · 2022</p>
        </Link>
      </FadeIn>
      {/* 5. Gruya */}
      <FadeIn delay={0.6} className="shrink-0 w-full max-w-[366px]">
        <Link to="/gruya" onClick={() => window.scrollTo(0, 0)} className="content-stretch flex flex-col gap-[16px] items-center relative w-full no-underline hover:-translate-y-2 hover:drop-shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer" data-name="Component 9">
          <MockupScale><Group14 /></MockupScale>
          <Title3 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] sm:text-[16px] w-full">Designed Gruya, a meeting room booking app for a challenge, creating intuitive flows and a seamless user experience.</p>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] sm:text-[14px] text-black w-full">Case Study · 2022</p>
        </Link>
      </FadeIn>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame13 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame21 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <p className="font-['EB_Garamond',serif] leading-[normal] not-italic relative shrink-0 text-[28px] sm:text-[40px] text-black whitespace-nowrap">Featured projects</p>
      <Frame46 />
    </div>
  );
}

function Group1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[109.69px] mt-0 place-items-start relative row-1">
      <div className="col-1 h-[202.288px] ml-[5.52px] mt-[7.36px] pointer-events-none relative rounded-[14.712px] row-1 w-[103.903px]">
        <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover rounded-[14.712px] size-full" src={imgRectangle6} />
        <div aria-hidden="true" className="absolute border-[0.919px] border-black border-solid inset-0 rounded-[14.712px]" />
      </div>
      <div className="border-[0.919px] border-black border-solid col-1 h-[217px] ml-0 mt-0 relative rounded-[14.712px] row-1 w-[115.856px]" />
    </div>
  );
}

function Group10() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[18px] place-items-start relative row-1">
      <div className="border-[0.762px] border-black border-solid col-1 h-[198.176px] ml-[15.24px] mt-[10.2px] relative rounded-tl-[6.098px] rounded-tr-[6.098px] row-1 w-[304.886px]" />
      <div className="bg-[#6c52b7] border-[0.762px] border-black border-solid col-1 h-[182.169px] ml-[22.87px] mt-[17.82px] relative rounded-tl-[6.098px] rounded-tr-[6.098px] row-1 w-[288.879px]" />
      <Group1 />
      <div className="border-[0.762px] border-black border-solid col-1 h-[12.195px] ml-0 mt-[207.62px] relative row-1 w-[335.375px]" />
      <div className="col-1 h-[4.573px] ml-0 mt-[219.05px] relative row-1 w-[335.375px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335.375 4.57329">
          <path d={svgPaths.p3fa02f00} id="Rectangle 5" stroke="var(--stroke-0, black)" strokeWidth="0.762215" />
        </svg>
      </div>
      <div className="border-[0.762px] border-black border-solid col-1 h-[5.336px] ml-[144.82px] mt-[207.62px] relative rounded-bl-[152.443px] rounded-br-[152.443px] row-1 w-[45.733px]" />
    </div>
  );
}

function Group14() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-[254.58px] ml-[3.81px] mt-0 relative row-1 w-[326.228px]">
        <div className="absolute inset-[-8.98%_-7.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 371.961 300.313">
            <g filter="url(#filter0_f_1_4778)" id="Ellipse 12">
              <ellipse cx="185.98" cy="150.156" fill="var(--fill-0, white)" fillOpacity="0.3" rx="163.114" ry="127.29" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="300.313" id="filter0_f_1_4778" width="371.961" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_4778" stdDeviation="11.4332" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Group10 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[#ffabe7] content-stretch flex h-[26px] sm:h-[30px] items-center justify-center px-[12px] sm:px-[16px] py-[6px] sm:py-[10px] relative rounded-[24px] shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] sm:text-[14px] text-black whitespace-nowrap">CASE STUDY</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Badge">
        <Frame30 />
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-[#796ff1] content-stretch flex h-[26px] sm:h-[30px] items-center justify-center px-[12px] sm:px-[16px] py-[6px] sm:py-[10px] relative rounded-[24px] shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] sm:text-[14px] text-white whitespace-nowrap">PERSONAL</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Badge">
        <Frame32 />
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame29 />
      <Frame31 />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Title">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[20px] sm:text-[24px] text-black whitespace-nowrap">Gruya</p>
      <Frame50 />
    </div>
  );
}

function DenchiLaptopContent() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[18px] place-items-start relative row-1">
      <div className="border-[0.762px] border-black border-solid col-1 h-[198.176px] ml-[15.24px] mt-[10.2px] relative rounded-tl-[6.098px] rounded-tr-[6.098px] row-1 w-[304.886px]" />
      <div className="border-[0.762px] border-black border-solid col-1 h-[182.169px] ml-[22.87px] mt-[17.82px] relative rounded-tl-[6.098px] rounded-tr-[6.098px] row-1 w-[288.879px]">
        <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[6.098px] rounded-tr-[6.098px] size-full" src={imgDenchiLaptop} />
      </div>
      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[109.69px] mt-0 place-items-start relative row-1">
        <div className="border-[0.919px] border-black border-solid col-1 h-[202.288px] ml-[5.52px] mt-[7.36px] relative rounded-[14.712px] row-1 w-[103.903px]">
          <img loading="lazy" decoding="async" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14.712px] size-full" src={imgDenchiPhone} />
        </div>
        <div className="border-[0.919px] border-black border-solid col-1 h-[217px] ml-0 mt-0 relative rounded-[14.712px] row-1 w-[115.856px]" />
      </div>
      <div className="border-[0.762px] border-black border-solid col-1 h-[12.195px] ml-0 mt-[207.62px] relative row-1 w-[335.375px]" />
      <div className="col-1 h-[4.573px] ml-0 mt-[219.05px] relative row-1 w-[335.375px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335.375 4.57329">
          <path d={svgPaths.p3fa02f00} id="Rectangle 5" stroke="var(--stroke-0, black)" strokeWidth="0.762215" />
        </svg>
      </div>
      <div className="border-[0.762px] border-black border-solid col-1 h-[5.336px] ml-[144.82px] mt-[207.62px] relative rounded-bl-[152.443px] rounded-br-[152.443px] row-1 w-[45.733px]" />
    </div>
  );
}

function DenchiMockup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-[254.58px] ml-[3.81px] mt-0 relative row-1 w-[326.228px]">
        <div className="absolute inset-[-8.98%_-7.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 371.961 300.313">
            <g filter="url(#filter_denchi_home)">
              <ellipse cx="185.98" cy="150.156" fill="white" fillOpacity="0.3" rx="163.114" ry="127.29" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="300.313" id="filter_denchi_home" width="371.961" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_denchi_home" stdDeviation="11.4332" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <DenchiLaptopContent />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start relative shrink-0 w-full">
      <Frame60 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#ebfaaa] text-[0px] w-[352px]">
        <span className="leading-[normal] text-[24px]">God designs means never</span>
        <span className="leading-[normal] text-[24px]">
          <br aria-hidden="true" />
        </span>
        <span className="leading-[normal] text-[24px]">{`have to say `}</span>
        <span className="font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] text-[24px]">“click here”</span>
      </p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-[30px] mt-[34px] p-[10px] relative row-1 w-[372px]">
      <Frame54 />
    </div>
  );
}

function Group19() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame55 />
      <div className="col-1 h-0 ml-0 mt-[24px] relative row-1 w-[431px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 431 1">
            <line id="Line 1" stroke="var(--stroke-0, white)" x2="431" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="col-1 h-0 ml-0 mt-[126px] relative row-1 w-[431px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 431 1">
            <line id="Line 1" stroke="var(--stroke-0, white)" x2="431" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="col-1 flex h-[150px] items-center justify-center ml-[24px] mt-0 relative row-1 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[150px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 1">
                <line id="Line 3" stroke="var(--stroke-0, white)" x2="150" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[150px] items-center justify-center ml-[410px] mt-0 relative row-1 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[150px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 1">
                <line id="Line 3" stroke="var(--stroke-0, white)" x2="150" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black border border-solid border-white col-1 ml-[18px] mt-[18px] relative row-1 size-[12px]" />
      <div className="bg-black border border-solid border-white col-1 ml-[18px] mt-[120px] relative row-1 size-[12px]" />
      <div className="bg-black border border-solid border-white col-1 ml-[404px] mt-[120px] relative row-1 size-[12px]" />
      <div className="bg-black border border-solid border-white col-1 ml-[404px] mt-[18px] relative row-1 size-[12px]" />
    </div>
  );
}

function Pills() {
  return <div className="absolute h-[30px] left-[925px] top-[94px] w-[72px]" data-name="pills" />;
}

function Frame33() {
  return (
    <div className="bg-[#ffabe7] content-stretch flex h-[26px] sm:h-[30px] items-center justify-center px-[12px] sm:px-[16px] py-[6px] sm:py-[10px] relative rounded-[24px] shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] sm:text-[14px] text-black whitespace-nowrap">PRODUCT DESIGNER</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-[#c8e793] content-stretch flex h-[26px] sm:h-[30px] items-center justify-center px-[12px] sm:px-[16px] py-[6px] sm:py-[10px] relative rounded-[24px] shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] sm:text-[14px] text-black whitespace-nowrap">ACCESSIBILITY</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[#ff9564] content-stretch flex h-[26px] sm:h-[30px] items-center justify-center px-[12px] sm:px-[16px] py-[6px] sm:py-[10px] relative rounded-[24px] shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] sm:text-[14px] text-black whitespace-nowrap">UX RESEARCH</p>
    </div>
  );
}

function ThoughtBubble() {
  return (
    <div className="absolute inset-[8.86%_3.8%]" data-name="Thought Bubble">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139.895 53.481">
        <g id="Thought Bubble">
          <path d={svgPaths.p2e9a6680} fill="var(--fill-0, white)" id="Union" />
          <path clipRule="evenodd" d={svgPaths.pb674240} fill="var(--fill-0, #333333)" fillRule="evenodd" id="Union (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function OtLogo() {
  return (
    <div className="absolute inset-[17.07%_47.92%_58.08%_42.21%]" data-name="OT Logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9483 16.1482">
        <g id="OT Logo">
          <g id="OT Logo_2">
            <path d={svgPaths.p3ae87470} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p2bf65980} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p2f9f7f00} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p24593a00} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p2fedf500} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p1626cf80} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p25b0cd80} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p18259270} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p3dfd300} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p2f81ecf0} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.pbd97300} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p753500} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p15b47900} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p2e4c6fc0} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p71d27f2} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p1cfee940} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p3ef1c480} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p3295fc00} fill="var(--fill-0, #333333)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute inset-[34.28%_6.85%_29.85%_7.89%]" data-name="Text">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 129.096 23.3156">
        <g id="Text">
          <path d={svgPaths.p9c95480} fill="var(--fill-0, #333333)" id="T" />
          <path d={svgPaths.p2c434700} fill="var(--fill-0, #333333)" id="H" />
          <path clipRule="evenodd" d={svgPaths.p1d1b4d00} fill="var(--fill-0, #333333)" fillRule="evenodd" id="O" />
          <path clipRule="evenodd" d={svgPaths.p90f6b00} fill="var(--fill-0, #333333)" fillRule="evenodd" id="U" />
          <path d={svgPaths.p84ab300} fill="var(--fill-0, #333333)" id="G" />
          <path d={svgPaths.p3f591600} fill="var(--fill-0, #333333)" id="H_2" />
          <path d={svgPaths.p1a9cb800} fill="var(--fill-0, #333333)" id="T_2" />
          <path d={svgPaths.p2ab91280} fill="var(--fill-0, #333333)" id="S" />
          <g id="?">
            <path d={svgPaths.p3d695080} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.pc75d680} fill="var(--fill-0, #333333)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function OutlineThoughts({ className }: { className?: string }) {
  return (
    <div className={className || "h-[65px] relative w-[151.414px]"} data-name="Outline / Thoughts">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 151.414 65">
        <path d={svgPaths.pa249f00} fill="var(--fill-0, #AF71FE)" id="Outline" />
      </svg>
      <ThoughtBubble />
      <OtLogo />
      <Text />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute inset-[32.61%_17.74%_32.61%_17.76%]" data-name="Text">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92.7859 27.1919">
        <g id="Text">
          <g id="Vibes">
            <path d={svgPaths.p3dd0ee00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p27cf3c00} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p2ef1a080} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path d={svgPaths.p51f5c80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2bdc9580} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function OtLogo1() {
  return (
    <div className="absolute inset-[15.33%_23.53%_64.08%_64.84%]" data-name="OT Logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7255 16.1014">
        <g id="OT Logo">
          <g id="OT Logo_2">
            <path d={svgPaths.pb65e000} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p322d980} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p1ec6d400} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p3f14a500} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p34daf300} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.pee71200} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p2da7bb80} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p18ba59c0} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p3eccdf0} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p139def80} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p1bd73980} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p1ff33980} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p2d531800} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p42ffd00} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p2a64da00} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p15218900} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p1844b800} fill="var(--fill-0, #333333)" />
            <path d={svgPaths.p273e5a0} fill="var(--fill-0, #333333)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function FillVibes({ className }: { className?: string }) {
  return (
    <div className={className || "h-[78.182px] relative w-[143.836px]"} data-name="Fill / Vibes">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143.836 78.1822">
        <g id="Rainbow">
          <path d={svgPaths.p387bb000} fill="var(--fill-0, #FF5E71)" id="Red" />
          <path clipRule="evenodd" d={svgPaths.p1f098a80} fill="var(--fill-0, #FFD600)" fillRule="evenodd" id="Yellow" />
          <path clipRule="evenodd" d={svgPaths.p21a0c700} fill="var(--fill-0, #2678F4)" fillRule="evenodd" id="Blue" />
          <path clipRule="evenodd" d={svgPaths.p2150ee00} fill="var(--fill-0, #12D778)" fillRule="evenodd" id="Green" />
          <path clipRule="evenodd" d={svgPaths.p7a47100} fill="var(--fill-0, #AF71FE)" fillRule="evenodd" id="Purple" />
        </g>
      </svg>
      <Text1 />
      <OtLogo1 />
    </div>
  );
}

function SpeechBalloon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="speech_balloon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="speech_balloon">
          <path d={svgPaths.p20986480} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeMiterlimit="10" />
          <g id="Group">
            <path d={svgPaths.p2a5f0180} fill="var(--fill-0, white)" id="Vector_2" />
            <path d={svgPaths.p29df600} fill="var(--fill-0, white)" id="Vector_3" />
            <path d={svgPaths.p1e1ea9b0} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
      <SpeechBalloon />
      <a className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap" href="https://wa.me/5491126231993" target="_blank">
        <p className="cursor-pointer leading-[normal]">Let´s talk!</p>
      </a>
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute content-stretch flex items-start left-[977px] top-[203px]">
      <Frame37 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-[#796ff1] content-stretch flex h-[26px] sm:h-[30px] items-center justify-center px-[12px] sm:px-[16px] py-[6px] sm:py-[10px] relative rounded-[24px] shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] sm:text-[14px] text-white whitespace-nowrap">UX/UI</p>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-[14.3%_13.39%_0.09%_3.41%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.7589 59.9278">
        <g id="Group 422">
          <mask height="60" id="mask0_1_4697" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="46" x="0" y="0">
            <path d={svgPaths.p29c02e80} fill="var(--fill-0, #C4C4C4)" id="Vector" />
          </mask>
          <g mask="url(#mask0_1_4697)">
            <g id="Vector_2">
              <path d={svgPaths.p399aa680} fill="#C8E793" />
              <path d={svgPaths.p2793b000} fill="#C8E793" />
              <path d={svgPaths.p1f0ba980} fill="#C8E793" />
              <path d={svgPaths.p227d8f00} fill="#C8E793" />
              <path d={svgPaths.p294e7700} fill="#C8E793" />
              <path d={svgPaths.p3d847600} fill="#C8E793" />
              <path d={svgPaths.p27898770} fill="#C8E793" />
              <path d={svgPaths.pea73900} fill="#C8E793" />
              <path d={svgPaths.p22784a00} fill="#C8E793" />
              <path d={svgPaths.p2ce25b00} fill="#C8E793" />
              <path d={svgPaths.p4146f00} fill="#C8E793" />
              <path d={svgPaths.p87ffe80} fill="#C8E793" />
              <path d={svgPaths.p16804400} fill="#C8E793" />
              <path d={svgPaths.p3331fef0} fill="#C8E793" />
              <path d={svgPaths.p11d99c72} fill="#C8E793" />
              <path d={svgPaths.p1a88a700} fill="#C8E793" />
              <path d={svgPaths.pada85f0} fill="#C8E793" />
              <path d={svgPaths.pc094a00} fill="#C8E793" />
              <path d={svgPaths.p31d6b500} fill="#C8E793" />
              <path d={svgPaths.p16ea8f00} fill="#C8E793" />
              <path d={svgPaths.pc589f80} fill="#C8E793" />
              <path d={svgPaths.p483f900} fill="#C8E793" />
              <path d={svgPaths.p21b6b100} fill="#C8E793" />
              <path d={svgPaths.p16888d00} fill="#C8E793" />
              <path d={svgPaths.p31e35f00} fill="#C8E793" />
              <path d={svgPaths.p28d52440} fill="#C8E793" />
              <path d={svgPaths.p2ded9880} fill="#C8E793" />
              <path d={svgPaths.p10c0b600} fill="#C8E793" />
              <path d={svgPaths.p1f1a6800} fill="#C8E793" />
              <path d={svgPaths.p25fcfb00} fill="#C8E793" />
              <path d={svgPaths.p1de2c500} fill="#C8E793" />
              <path d={svgPaths.p3de7d900} fill="#C8E793" />
              <path d={svgPaths.p7673980} fill="#C8E793" />
              <path d={svgPaths.p3d852900} fill="#C8E793" />
              <path d={svgPaths.p12a01f80} fill="#C8E793" />
              <path d={svgPaths.p15e52980} fill="#C8E793" />
              <path d={svgPaths.p397cab00} fill="#C8E793" />
              <path d={svgPaths.pd1c3cb0} fill="#C8E793" />
              <path d={svgPaths.p3ac6ec80} fill="#C8E793" />
              <path d={svgPaths.p28c316b0} fill="#C8E793" />
              <path d={svgPaths.pd395200} fill="#C8E793" />
              <path d={svgPaths.p2af1bf00} fill="#C8E793" />
              <path d={svgPaths.p3c9c8680} fill="#C8E793" />
              <path d={svgPaths.pf755380} fill="#C8E793" />
              <path d={svgPaths.p17f0671} fill="#C8E793" />
              <path d={svgPaths.p18d72300} fill="#C8E793" />
              <path d={svgPaths.p1d9f0f00} fill="#C8E793" />
              <path d={svgPaths.p799ab00} fill="#C8E793" />
              <path d={svgPaths.p2dece900} fill="#C8E793" />
              <path d={svgPaths.p1c5a0c10} fill="#C8E793" />
              <path d={svgPaths.p37a4e800} fill="#C8E793" />
              <path d={svgPaths.p30324700} fill="#C8E793" />
              <path d={svgPaths.p20afbc00} fill="#C8E793" />
              <path d={svgPaths.p113d1b00} fill="#C8E793" />
              <path d={svgPaths.p3f462900} fill="#C8E793" />
              <path d={svgPaths.p11152c00} fill="#C8E793" />
              <path d={svgPaths.p26ede40} fill="#C8E793" />
              <path d={svgPaths.p177cbe00} fill="#C8E793" />
              <path d={svgPaths.p2b46fa40} fill="#C8E793" />
              <path d={svgPaths.p10736a00} fill="#C8E793" />
              <path d={svgPaths.pb47bd00} fill="#C8E793" />
              <path d={svgPaths.p18798600} fill="#C8E793" />
              <path d={svgPaths.p132d6600} fill="#C8E793" />
              <path d={svgPaths.p20e1b00} fill="#C8E793" />
              <path d={svgPaths.p2f94d980} fill="#C8E793" />
              <path d={svgPaths.pd4a1e80} fill="#C8E793" />
              <path d={svgPaths.p17bf2600} fill="#C8E793" />
              <path d={svgPaths.peb3b700} fill="#C8E793" />
              <path d={svgPaths.p17434500} fill="#C8E793" />
              <path d={svgPaths.p3126cb40} fill="#C8E793" />
              <path d={svgPaths.p209ef100} fill="#C8E793" />
              <path d={svgPaths.p24161880} fill="#C8E793" />
              <path d={svgPaths.p18501900} fill="#C8E793" />
              <path d={svgPaths.p29a42c80} fill="#C8E793" />
              <path d={svgPaths.pedb2e00} fill="#C8E793" />
              <path d={svgPaths.p2af0be30} fill="#C8E793" />
              <path d={svgPaths.p208a700} fill="#C8E793" />
              <path d={svgPaths.p8bd5600} fill="#C8E793" />
              <path d={svgPaths.p5bb7200} fill="#C8E793" />
              <path d={svgPaths.p1bc07e00} fill="#C8E793" />
              <path d={svgPaths.p11c2c00} fill="#C8E793" />
              <path d={svgPaths.p3f097e80} fill="#C8E793" />
              <path d={svgPaths.p320842c0} fill="#C8E793" />
              <path d={svgPaths.p23343180} fill="#C8E793" />
              <path d={svgPaths.p2f50b980} fill="#C8E793" />
              <path d={svgPaths.p42ee480} fill="#C8E793" />
              <path d={svgPaths.p131e6300} fill="#C8E793" />
              <path d={svgPaths.p2442c120} fill="#C8E793" />
              <path d={svgPaths.p1a4eec40} fill="#C8E793" />
              <path d={svgPaths.p1719c780} fill="#C8E793" />
              <path d={svgPaths.p276ee600} fill="#C8E793" />
              <path d={svgPaths.p32231f00} fill="#C8E793" />
              <path d={svgPaths.p34a01600} fill="#C8E793" />
              <path d={svgPaths.p208ed270} fill="#C8E793" />
              <path d={svgPaths.p589f680} fill="#C8E793" />
              <path d={svgPaths.p3c0f7600} fill="#C8E793" />
              <path d={svgPaths.p2a99b500} fill="#C8E793" />
              <path d={svgPaths.p13142980} fill="#C8E793" />
              <path d={svgPaths.p16892ef0} fill="#C8E793" />
              <path d={svgPaths.p26d4ab00} fill="#C8E793" />
              <path d={svgPaths.p248fb780} fill="#C8E793" />
              <path d={svgPaths.p728b500} fill="#C8E793" />
              <path d={svgPaths.p2bd382f0} fill="#C8E793" />
              <path d={svgPaths.p11819e80} fill="#C8E793" />
              <path d={svgPaths.p7805500} fill="#C8E793" />
              <path d={svgPaths.p1338f000} fill="#C8E793" />
              <path d={svgPaths.p1632c340} fill="#C8E793" />
              <path d={svgPaths.p2ab49af0} fill="#C8E793" />
              <path d={svgPaths.p389f3980} fill="#C8E793" />
              <path d={svgPaths.p2e28da00} fill="#C8E793" />
              <path d={svgPaths.p566d200} fill="#C8E793" />
              <path d={svgPaths.p3086a700} fill="#C8E793" />
              <path d={svgPaths.p1fc01772} fill="#C8E793" />
              <path d={svgPaths.p2259d670} fill="#C8E793" />
              <path d={svgPaths.p5b04300} fill="#C8E793" />
              <path d={svgPaths.p20eec200} fill="#C8E793" />
              <path d={svgPaths.p2b2d6470} fill="#C8E793" />
              <path d={svgPaths.p139a6600} fill="#C8E793" />
              <path d={svgPaths.p2fe8fb40} fill="#C8E793" />
              <path d={svgPaths.pfed8c00} fill="#C8E793" />
              <path d={svgPaths.p20550500} fill="#C8E793" />
              <path d={svgPaths.p3f475980} fill="#C8E793" />
              <path d={svgPaths.p2f854200} fill="#C8E793" />
              <path d={svgPaths.p27f70a00} fill="#C8E793" />
              <path d={svgPaths.p34119470} fill="#C8E793" />
              <path d={svgPaths.p39558b00} fill="#C8E793" />
              <path d={svgPaths.p341d6360} fill="#C8E793" />
              <path d={svgPaths.p76f6700} fill="#C8E793" />
              <path d={svgPaths.pd62c0} fill="#C8E793" />
              <path d={svgPaths.p18093800} fill="#C8E793" />
              <path d={svgPaths.p3da82480} fill="#C8E793" />
              <path d={svgPaths.p3fa3c980} fill="#C8E793" />
              <path d={svgPaths.p2bdb8100} fill="#C8E793" />
              <path d={svgPaths.p25d3ab80} fill="#C8E793" />
              <path d={svgPaths.p9299640} fill="#C8E793" />
              <path d={svgPaths.p1882300} fill="#C8E793" />
              <path d={svgPaths.p219579f0} fill="#C8E793" />
              <path d={svgPaths.p33661f00} fill="#C8E793" />
              <path d={svgPaths.pf324400} fill="#C8E793" />
              <path d={svgPaths.pacfa800} fill="#C8E793" />
              <path d={svgPaths.pcc4b900} fill="#C8E793" />
              <path d={svgPaths.p335a6680} fill="#C8E793" />
              <path d={svgPaths.p15063d00} fill="#C8E793" />
              <path d={svgPaths.pa3e3500} fill="#C8E793" />
              <path d={svgPaths.p6314300} fill="#C8E793" />
              <path d={svgPaths.p378b1300} fill="#C8E793" />
              <path d={svgPaths.p8798700} fill="#C8E793" />
              <path d={svgPaths.p17ef9a00} fill="#C8E793" />
              <path d={svgPaths.p22b6cb00} fill="#C8E793" />
              <path d={svgPaths.pd2e3980} fill="#C8E793" />
              <path d={svgPaths.p1518e900} fill="#C8E793" />
              <path d={svgPaths.p3b610000} fill="#C8E793" />
              <path d={svgPaths.p3f141a00} fill="#C8E793" />
              <path d={svgPaths.p37fafe00} fill="#C8E793" />
              <path d={svgPaths.p3f50b900} fill="#C8E793" />
              <path d={svgPaths.p107b2980} fill="#C8E793" />
              <path d={svgPaths.p464f900} fill="#C8E793" />
              <path d={svgPaths.p2f90200} fill="#C8E793" />
              <path d={svgPaths.p292cba00} fill="#C8E793" />
              <path d={svgPaths.p292ab600} fill="#C8E793" />
              <path d={svgPaths.p33204990} fill="#C8E793" />
              <path d={svgPaths.p2c801a00} fill="#C8E793" />
              <path d={svgPaths.p2afab660} fill="#C8E793" />
              <path d={svgPaths.p374aee80} fill="#C8E793" />
              <path d={svgPaths.pe2d700} fill="#C8E793" />
              <path d={svgPaths.pd10ab00} fill="#C8E793" />
              <path d={svgPaths.p26b2700} fill="#C8E793" />
              <path d={svgPaths.p262d2700} fill="#C8E793" />
              <path d={svgPaths.p31c0380} fill="#C8E793" />
              <path d={svgPaths.p1a992e00} fill="#C8E793" />
              <path d={svgPaths.p2e1f4680} fill="#C8E793" />
              <path d={svgPaths.p1e93ad80} fill="#C8E793" />
              <path d={svgPaths.p3d1a24c0} fill="#C8E793" />
              <path d={svgPaths.p34a6a80} fill="#C8E793" />
              <path d={svgPaths.pa2fd500} fill="#C8E793" />
              <path d={svgPaths.p62a2e80} fill="#C8E793" />
              <path d={svgPaths.p2c7d9c00} fill="#C8E793" />
              <path d={svgPaths.p3e211500} fill="#C8E793" />
              <path d={svgPaths.p3d00a900} fill="#C8E793" />
              <path d={svgPaths.p12851920} fill="#C8E793" />
              <path d={svgPaths.pa63e000} fill="#C8E793" />
              <path d={svgPaths.p2a87b880} fill="#C8E793" />
              <path d={svgPaths.p12e0ad00} fill="#C8E793" />
              <path d={svgPaths.p16930500} fill="#C8E793" />
              <path d={svgPaths.p3b653300} fill="#C8E793" />
              <path d={svgPaths.p27c80c80} fill="#C8E793" />
              <path d={svgPaths.pee6aa80} fill="#C8E793" />
              <path d={svgPaths.p1ad33b00} fill="#C8E793" />
              <path d={svgPaths.p18946280} fill="#C8E793" />
              <path d={svgPaths.p3bd84600} fill="#C8E793" />
              <path d={svgPaths.p275bd400} fill="#C8E793" />
              <path d={svgPaths.p38fc9b00} fill="#C8E793" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute inset-[19.69%_50.46%_56.55%_16.51%]">
      <div className="absolute inset-[-9.99%_0_-13.15%_-4.76%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.4524 14.0448">
          <g id="Group 121">
            <path d={svgPaths.p9b4e280} id="Vector 208" stroke="var(--stroke-0, #2DE09E)" strokeWidth="3" />
            <path d="M11.0502 12.5448H21.4524" id="Vector 209" stroke="var(--stroke-0, #2DE09E)" strokeWidth="3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute inset-[10.71%_16.06%_83.33%_64.68%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.945 2.85714">
        <g id="Group 406">
          <ellipse cx="10.5229" cy="1.42857" fill="var(--fill-0, #FF4C4C)" id="Ellipse 92" rx="1.42202" ry="1.42857" />
          <ellipse cx="5.97248" cy="1.42857" fill="var(--fill-0, #FFDB5C)" id="Ellipse 93" rx="1.42202" ry="1.42857" />
          <ellipse cx="1.42202" cy="1.42857" fill="var(--fill-0, #2DE09E)" id="Ellipse 94" rx="1.42202" ry="1.42857" />
        </g>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[59.52%_19.27%_26.19%_14.68%]">
      <div className="absolute bg-[#238d66] inset-[59.52%_19.27%_36.9%_14.68%]" />
      <div className="absolute bg-[#238d66] inset-[70.24%_64.85%_26.19%_14.68%]" />
    </div>
  );
}

function Banner() {
  return (
    <img
      src={imgBanner}
      alt="Banner"
      fetchPriority="high"
      decoding="async"
      className="hidden sm:block rounded-[16px] shrink-0 w-full object-cover"
      style={{ maxWidth: "1186px" }}
    />
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] sm:gap-[120px] items-start relative shrink-0 w-full">
      <Frame65 />
      <Banner />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] sm:gap-[120px] items-start relative shrink-0 w-full">
      <FadeIn>
        <Frame23 />
      </FadeIn>
      <FadeIn delay={0.15}>
        <Frame56 />
      </FadeIn>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center mx-auto mt-[24px] sm:mt-[40px] mb-[48px] sm:mb-[80px] relative w-full max-w-[1186px] px-[16px] sm:px-[24px] lg:px-0">
      <Frame61 />
    </div>
  );
}






function Frame44() {
  return (
    <Link to="/" className="content-stretch flex gap-[8px] items-center relative shrink-0 no-underline logo-link">
      <svg fill="none" viewBox="0 0 34 22" className="w-[34px] h-[22px] shrink-0 logo-star">
        <path d="M34 2.47042C20.0898 7.79276 17.9004 7.54971 11.7118 0C13.7777 9.61712 12.6273 11.5368 0 19.5296C13.9102 14.2072 16.0996 14.4503 22.2882 22C20.2223 12.3829 21.3727 10.4632 34 2.47042Z" fill="#FF6465" />
      </svg>
      <p className="font-['Kimochi:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">My portfolio</p>
    </Link>
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

function Frame52() {
  return (
    <div className="bg-black content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative rounded-[100px] shrink-0 hover:bg-[#333333] transition-colors cursor-pointer">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
      <SpeechBalloon1 />
      <a href="https://www.linkedin.com/in/denisechiapin/?skipRedirect=true" target="_blank" className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap no-underline">
        <p className="cursor-pointer leading-[normal]">See my profile!</p>
      </a>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame52 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <span className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap cursor-default">Home</span>
      <Link to="/about" className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap no-underline hover:opacity-70 transition-opacity">About me</Link>
      <Link to="/blog" className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap no-underline hover:opacity-70 transition-opacity">Blog</Link>
      <div className="flex items-center gap-[8px]">
        <a
          href="/CV- Denise Chiapin EN - Classic.pdf"
          download
          className="font-['Inter:Regular',sans-serif] font-normal text-[20px] text-black border border-black px-[16px] h-[44px] flex items-center rounded-[100px] whitespace-nowrap hover:bg-black hover:text-white transition-colors"
        >
          My CV
        </a>
        <Frame51 />
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame44 />
      <Frame45 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-white h-[80px] relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[48px] py-[10px] relative size-full">
          <Frame43 />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[0.99%_3.07%_3.08%_0.99%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.0248 23.0218">
        <g id="Group">
          <path d={svgPaths.p10482c70} fill="var(--fill-0, #FFECB3)" id="Vector" />
          <g id="Group_2">
            <g id="Vector_2" />
            <g id="Vector_3" />
          </g>
          <path d={svgPaths.p931ce00} fill="var(--fill-0, #616161)" id="Vector_4" />
          <path d={svgPaths.p3be89600} fill="var(--fill-0, #EF5350)" id="Vector_5" />
          <path d={svgPaths.p1dd3c900} fill="var(--fill-0, #FFC107)" id="Vector_6" />
          <path d={svgPaths.p25892900} fill="var(--fill-0, #FFA000)" id="Vector_7" />
          <path d={svgPaths.p14926380} fill="var(--fill-0, #FDD835)" id="Vector_8" />
          <g id="Group_3">
            <path d={svgPaths.pe372b80} fill="var(--fill-0, #D1762C)" id="Vector_9" />
          </g>
          <g id="Group_4">
            <path d={svgPaths.p9a0df00} fill="var(--fill-0, #F19534)" id="Vector_10" />
          </g>
          <path d={svgPaths.pd831e00} fill="var(--fill-0, #4E342E)" id="Vector_11" opacity="0.2" />
          <path d={svgPaths.p1fe27c00} fill="var(--fill-0, #94D1E0)" id="Vector_12" />
          <path d={svgPaths.pc4ff00} fill="var(--fill-0, #FF8383)" id="Vector_13" />
          <path d={svgPaths.pb558880} fill="var(--fill-0, #B9E4EA)" id="Vector_14" />
          <path d={svgPaths.p3694f500} fill="var(--fill-0, #B9E4EA)" id="Vector_15" />
        </g>
      </svg>
    </div>
  );
}

function Pencil() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="pencil2">
      <Group />
    </div>
  );
}

function Frame53() {
  return (
    <div className="bg-[#ebfaaa] drop-shadow-[0px_4px_2px_rgba(159,159,159,0.25)] h-[49px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center p-[10px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[0px] text-black whitespace-nowrap">
            <span className="leading-[normal] text-[16px]">{` A`}</span>
            <span className="leading-[normal] text-[20px]">{` `}</span>
            <span className="font-['EB_Garamond',serif] leading-[normal] text-[24px]">designer passionate</span>
            <span className="leading-[normal] text-[20px]">{` `}</span>
            <span className="leading-[normal] text-[16px]">about creating beautifu</span>
            <span className="leading-[normal] text-[20px]">l</span>
            <span className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] text-[20px]">{` `}</span>
            <span className="font-['EB_Garamond',serif] leading-[normal] text-[24px]">user friendly products</span>
          </p>
          <Pencil />
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-white content-stretch fixed flex flex-col items-start left-0 top-0 w-full z-50">
      <Frame40 />
      <Frame53 />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white flex flex-col relative" data-name="Home">
      <Frame41 />
    </div>
  );
}