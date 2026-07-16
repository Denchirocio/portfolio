import { ReactNode } from "react";
import { Link } from "react-router";

interface Badge {
  label: string;
  bg: string;
  color?: string;
}

interface OtherProjectCardProps {
  href: string;
  mockup: ReactNode;
  title: string;
  badges: Badge[];
  description: string;
  meta: string;
}

export default function OtherProjectCard({ href, mockup, title, badges, description, meta }: OtherProjectCardProps) {
  return (
    <Link
      to={href}
      onClick={() => window.scrollTo(0, 0)}
      className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full max-w-[366px] no-underline hover:-translate-y-2 hover:drop-shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer"
    >
      {mockup}
      <div className="content-stretch flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">{title}</p>
        {badges.map((badge, i) => (
          <div
            key={i}
            className="content-stretch flex h-[30px] items-center justify-center px-[16px] py-[10px] relative rounded-[24px] shrink-0"
            style={{ backgroundColor: badge.bg }}
          >
            <p
              className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] whitespace-nowrap"
              style={{ color: badge.color ?? "#000000" }}
            >
              {badge.label}
            </p>
          </div>
        ))}
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#7a7a7a] text-[16px] w-full">{description}</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-black w-full">{meta}</p>
    </Link>
  );
}
