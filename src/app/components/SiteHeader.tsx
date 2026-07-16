import { useState } from "react";
import { Link, useLocation } from "react-router";

const pencilPaths = {
  p20986480: "M11.9344 1.51312C3.93562 1.55437 0.6975 5.72437 0.635625 10.9181C0.601875 13.8188 2.47125 16.3238 5.33625 17.8519C6.73312 18.84 5.07 22.0781 3.73875 22.905C3.73875 22.905 8.445 22.5844 9.7425 19.2675C10.4587 19.3725 11.1956 19.4269 11.9512 19.4269C18.1912 19.4269 23.2331 16.1119 23.2331 10.9181C23.2331 5.72437 20.01 1.47375 11.9344 1.51312Z",
  p2a5f0180: "M6.1125 12.1875C6.94093 12.1875 7.6125 11.5159 7.6125 10.6875C7.6125 9.85907 6.94093 9.1875 6.1125 9.1875C5.28407 9.1875 4.6125 9.85907 4.6125 10.6875C4.6125 11.5159 5.28407 12.1875 6.1125 12.1875Z",
  p29df600: "M12.1125 12.1875C12.9409 12.1875 13.6125 11.5159 13.6125 10.6875C13.6125 9.85907 12.9409 9.1875 12.1125 9.1875C11.2841 9.1875 10.6125 9.85907 10.6125 10.6875C10.6125 11.5159 11.2841 12.1875 12.1125 12.1875Z",
  p1e1ea9b0: "M17.8875 12.1875C18.7159 12.1875 19.3875 11.5159 19.3875 10.6875C19.3875 9.85907 18.7159 9.1875 17.8875 9.1875C17.0591 9.1875 16.3875 9.85907 16.3875 10.6875C16.3875 11.5159 17.0591 12.1875 17.8875 12.1875Z",
  p10482c70: "M22.9869 22.0371L21.8282 18.9452L21.0313 16.8171C20.8513 16.2677 20.8176 16.0408 20.5119 15.7352L18.2957 13.5189L13.5219 18.2927L15.7401 20.5108C15.9219 20.6927 16.2707 20.8483 16.8201 21.0283L18.9482 21.8252L22.0401 22.9839C22.6232 23.1733 23.1763 22.6202 22.9869 22.0371Z",
  p931ce00: "M22.0401 22.9839L19.4788 22.0239C19.4788 22.0239 20.5363 21.9639 21.2507 21.2496C21.9651 20.5352 22.0269 19.4758 22.0269 19.4758L22.9869 22.0371C23.1763 22.6202 22.6232 23.1733 22.0401 22.9839Z",
  p3be89600: "M7.85756 3.08268L6.84318 6.69956L3.08568 7.85456L0.963182 5.73393C0.378182 5.14893 0.100682 3.98268 1.65131 2.43206L2.58693 1.49643C3.92756 0.155808 5.15193 0.375183 5.73693 0.960183L7.85756 3.08268Z",
  p1dd3c900: "M6.18693 8.13206L8.13131 6.18768L19.4244 17.4808C19.4244 17.4808 19.6551 18.4408 19.0682 19.0277C18.4813 19.6146 17.4801 19.4252 17.4801 19.4252L6.18693 8.13206Z",
  p25892900: "M4.77318 9.54581L15.7569 20.5296C17.5307 20.9158 17.4538 19.3989 17.4538 19.3989L6.18693 8.13206L4.77318 9.54581Z",
  p14926380: "M8.13318 6.18581L19.4001 17.4527C19.4001 17.4527 21.4288 17.4527 20.5007 15.7258L9.54693 4.77206L8.13318 6.18581Z",
  pe372b80: "M17.4369 19.6446L6.07256 8.28018L6.33693 8.01581L17.7744 19.4533L17.4801 19.4233L17.4369 19.6446Z",
  p9a0df00: "M19.4694 17.7902L7.28943 5.61018L7.55568 5.34581L19.6438 17.4339L19.4244 17.4789L19.4694 17.7902Z",
  pd831e00: "M9.54693 4.77206C9.54693 4.77206 8.52131 6.28893 7.67193 7.14768C6.04631 8.78643 4.77318 9.54581 4.77318 9.54581L5.10131 9.87393C5.56818 9.69206 6.76256 9.14643 7.95506 7.95581C9.15506 6.75581 9.72131 5.58393 9.91068 5.13581L9.54693 4.77206Z",
  p1fe27c00: "M4.16568 9.49331C4.27068 9.59831 4.41881 9.64518 4.56506 9.62081C4.56506 9.62081 6.10068 9.15206 7.62693 7.62581C9.15318 6.09956 9.65756 4.61268 9.65756 4.61268C9.68193 4.46643 9.63506 4.31643 9.53006 4.21143L7.92131 2.60268C7.85381 2.53518 7.76006 2.49956 7.66631 2.51081C7.63443 2.51456 7.60256 2.51831 7.56881 2.52393C7.44131 2.54268 7.34006 2.63643 7.30443 2.76018C7.30443 2.76018 6.56943 4.18518 5.35818 5.39456C4.14693 6.60393 2.66943 7.30893 2.66943 7.30893C2.54568 7.34268 2.45006 7.44206 2.43131 7.56956C2.43131 7.57143 2.43131 7.57143 2.43131 7.57331C2.41631 7.67456 2.45006 7.77581 2.52131 7.84706L4.16568 9.49331Z",
  pc4ff00: "M3.17267 3.17267C4.2732 2.07213 4.90122 0.915827 4.57538 0.589986C4.24954 0.264146 3.09323 0.89216 1.9927 1.9927C0.89216 3.09323 0.264146 4.24954 0.589987 4.57538C0.915827 4.90122 2.07213 4.2732 3.17267 3.17267Z",
  pb558880: "M7.56318 3.83831C6.94631 5.01956 5.93193 5.98893 4.72443 6.54956C4.64568 6.58518 4.53506 6.61143 4.48818 6.54018C4.45256 6.48393 4.48443 6.41268 4.52006 6.35643C4.67756 6.11268 4.89506 5.91581 5.10506 5.71518C5.65256 5.19018 6.15506 4.62018 6.60693 4.01268C6.83756 3.70331 7.05318 3.38456 7.25568 3.05643C7.36818 2.87643 7.56881 2.49581 7.82568 2.76393C8.04881 2.99456 7.68131 3.61143 7.56318 3.83831Z",
  p3694f500: "M6.86381 6.03768C6.81506 6.08831 6.76443 6.13893 6.74006 6.20456C6.71568 6.27018 6.72506 6.35456 6.78131 6.39581C6.82818 6.43143 6.89193 6.42768 6.95006 6.41831C7.27443 6.36768 7.56131 6.18393 7.81443 5.97768C8.36756 5.52956 8.83631 4.90706 8.88131 4.19643C8.88693 4.11206 8.88506 4.02393 8.84756 3.94893C8.60943 3.47831 8.10506 4.53018 8.00568 4.67831C7.67381 5.17143 7.27818 5.61393 6.86381 6.03768Z",
};

function PencilIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute inset-[0.99%_3.07%_3.08%_0.99%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.0248 23.0218">
          <g>
            <path d={pencilPaths.p10482c70} fill="#FFECB3" />
            <path d={pencilPaths.p931ce00} fill="#616161" />
            <path d={pencilPaths.p3be89600} fill="#EF5350" />
            <path d={pencilPaths.p1dd3c900} fill="#FFC107" />
            <path d={pencilPaths.p25892900} fill="#FFA000" />
            <path d={pencilPaths.p14926380} fill="#FDD835" />
            <path d={pencilPaths.pe372b80} fill="#D1762C" />
            <path d={pencilPaths.p9a0df00} fill="#F19534" />
            <path d={pencilPaths.pd831e00} fill="#4E342E" opacity="0.2" />
            <path d={pencilPaths.p1fe27c00} fill="#94D1E0" />
            <path d={pencilPaths.pc4ff00} fill="#FF8383" />
            <path d={pencilPaths.pb558880} fill="#B9E4EA" />
            <path d={pencilPaths.p3694f500} fill="#B9E4EA" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SpeechBalloonIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d={pencilPaths.p20986480} fill="white" stroke="white" strokeLinejoin="round" strokeMiterlimit="10" />
        <path d={pencilPaths.p2a5f0180} fill="#54646D" />
        <path d={pencilPaths.p29df600} fill="#54646D" />
        <path d={pencilPaths.p1e1ea9b0} fill="#54646D" />
      </svg>
    </div>
  );
}

function TaglineBanner() {
  return (
    <div className="hidden sm:block bg-[#ebfaaa] drop-shadow-[0px_4px_2px_rgba(159,159,159,0.25)] min-h-[49px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full py-[8px] px-[16px]">
        <div className="content-stretch flex gap-[10px] items-center justify-center flex-wrap text-center max-w-full min-w-0">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink text-[14px] sm:text-[16px] min-w-0">
            <span>{`A `}</span>
            <span className="font-['EB_Garamond',serif] text-[18px] sm:text-[24px]">designer passionate</span>
            <span>{` about creating beautiful `}</span>
            <span className="font-['EB_Garamond',serif] text-[18px] sm:text-[24px]">user friendly products</span>
          </p>
          <PencilIcon />
        </div>
      </div>
    </div>
  );
}

function ContactBanner({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#f8f8f8] border-t border-b border-[#d6d1d1] flex min-h-[56px] items-center justify-center p-[10px] shrink-0 w-full cursor-pointer hover:bg-[#f0f0f0] transition-colors"
    >
      <div className="flex gap-[2px] items-center flex-wrap justify-center text-center">
        <div className="bg-[rgba(223,169,234,0.6)] flex h-[32px] items-center justify-center px-[8px] py-[4px]">
          <span className="font-['EB_Garamond',serif] text-[20px] sm:text-[24px] text-black leading-normal">I'm here</span>
        </div>
        <span className="font-['Inter:Regular',sans-serif] font-normal text-[14px] sm:text-[16px] text-black whitespace-nowrap">
          {` if you want to talk `}<span className="font-['EB_Garamond',serif] text-[20px] sm:text-[24px]">about UX...</span>
        </span>
        <div className="bg-[#ebfaaa] flex h-[32px] items-center justify-center px-[8px] py-[4px]">
          <span className="font-['EB_Garamond',serif] text-[20px] sm:text-[24px] text-black leading-normal whitespace-nowrap">Let's talk</span>
        </div>
        <span className="font-['EB_Garamond',serif] text-[20px] sm:text-[24px] text-black px-[6px]">→</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal italic text-[14px] sm:text-[16px] text-black whitespace-nowrap">
          (For free, this is not a sales pitch)
        </span>
      </div>
    </button>
  );
}

function NavLinkItems({ onNavigate }: { onNavigate?: () => void }) {
  const location = useLocation();
  const linkClass = (path: string) =>
    `font-['Inter:Regular',sans-serif] ${location.pathname === path ? "font-bold" : "font-normal"} leading-[normal] no-underline not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap hover:opacity-70 transition-opacity`;

  return (
    <>
      <Link to="/" onClick={onNavigate} className={linkClass("/")}>Home</Link>
      <Link to="/about" onClick={onNavigate} className={linkClass("/about")}>About me</Link>
      <Link to="/blog" onClick={onNavigate} className={linkClass("/blog")}>Blog</Link>
    </>
  );
}

function NavCTAs({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex items-center gap-[8px]">
      <a
        href="/CV- Denise Chiapin EN - Classic.pdf"
        download
        onClick={onNavigate}
        className="font-['Inter:Regular',sans-serif] font-normal text-[20px] text-black border border-black px-[16px] h-[44px] flex items-center justify-center rounded-[100px] whitespace-nowrap no-underline hover:bg-black hover:text-white transition-colors"
      >
        My CV
      </a>
      <div className="bg-black content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[10px] relative rounded-[100px] shrink-0 hover:bg-[#333333] transition-colors cursor-pointer">
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
        <SpeechBalloonIcon />
        <a
          className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap no-underline"
          href="https://www.linkedin.com/in/denisechiapin/?skipRedirect=true"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onNavigate}
        >
          <p className="cursor-pointer leading-[normal]">See my profile!</p>
        </a>
      </div>
    </div>
  );
}

interface SiteHeaderProps {
  variant: "tagline" | "contact";
  onOpenContact: () => void;
}

export default function SiteHeader({ variant, onOpenContact }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white sticky top-0 left-0 w-full z-50 flex flex-col items-start">
      <div className="bg-white flex h-[80px] items-center justify-between px-[24px] md:px-[48px] shrink-0 w-full">
        <Link to="/" className="flex gap-[8px] items-center no-underline logo-link" onClick={() => setIsMenuOpen(false)}>
          <svg fill="none" viewBox="0 0 34 22" className="h-[22px] shrink-0 w-[34px] logo-star">
            <path d="M34 2.47042C20.0898 7.79276 17.9004 7.54971 11.7118 0C13.7777 9.61712 12.6273 11.5368 0 19.5296C13.9102 14.2072 16.0996 14.4503 22.2882 22C20.2223 12.3829 21.3727 10.4632 34 2.47042Z" fill="#FF6465" />
          </svg>
          <span className="font-['Kimochi:Regular',sans-serif] text-[20px] text-black whitespace-nowrap">My portfolio</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-[24px] items-center">
          <NavLinkItems />
          <NavCTAs />
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="md:hidden flex flex-col items-center justify-center gap-[5px] size-[40px] cursor-pointer bg-transparent border-none"
        >
          <span className={`block h-[2px] w-[24px] bg-black transition-transform ${isMenuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-[2px] w-[24px] bg-black transition-opacity ${isMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-[24px] bg-black transition-transform ${isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu panel */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-start gap-[16px] w-full px-[24px] pb-[24px] border-t border-[#ebebeb]">
          <div className="flex flex-col items-start gap-[16px] pt-[16px]">
            <NavLinkItems onNavigate={() => setIsMenuOpen(false)} />
          </div>
          <NavCTAs onNavigate={() => setIsMenuOpen(false)} />
        </div>
      )}

      {variant === "tagline" ? <TaglineBanner /> : <ContactBanner onClick={onOpenContact} />}
    </div>
  );
}
