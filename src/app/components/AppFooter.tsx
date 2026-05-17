export default function AppFooter() {
  return (
    <footer className="bg-white px-[32px] py-[10px] h-[80px] flex items-center w-full">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-[3px] items-end">
          <span className="font-['Kimochi:Regular',sans-serif] text-[20px] text-black leading-normal">Denchi</span>
          <svg fill="none" viewBox="0 0 34 22" className="w-[34px] h-[22px]">
            <path d="M34 2.47042C20.0898 7.79276 17.9004 7.54971 11.7118 0C13.7777 9.61712 12.6273 11.5368 0 19.5296C13.9102 14.2072 16.0996 14.4503 22.2882 22C20.2223 12.3829 21.3727 10.4632 34 2.47042Z" fill="#FF6465" />
          </svg>
        </div>
        <a
          className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black underline decoration-solid"
          href="mailto:dn.chiapin@gmail.com?subject=Contact%20from%20your%20portfolio"
          target="_blank"
        >
          Get in touch -
        </a>
      </div>
    </footer>
  );
}
