interface BeforeAfterPairProps {
  beforeImg: string;
  beforeAlt: string;
  afterImg: string;
  afterAlt: string;
}

export default function BeforeAfterPair({ beforeImg, beforeAlt, afterImg, afterAlt }: BeforeAfterPairProps) {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between gap-[24px] relative shrink-0 w-full">
      <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full md:w-[560px]">
        <div className="bg-[#ff6465] content-stretch flex h-[30px] items-center justify-center px-[16px] py-[10px] relative rounded-[24px] shrink-0">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">BEFORE</p>
        </div>
        <img loading="lazy" decoding="async" alt={beforeAlt} className="w-full h-auto rounded-[4px]" src={beforeImg} />
      </div>
      <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full md:w-[560px]">
        <div className="bg-[#c8e793] content-stretch flex h-[30px] items-center justify-center px-[16px] py-[10px] relative rounded-[24px] shrink-0">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">AFTER</p>
        </div>
        <img loading="lazy" decoding="async" alt={afterAlt} className="w-full h-auto rounded-[4px]" src={afterImg} />
      </div>
    </div>
  );
}
