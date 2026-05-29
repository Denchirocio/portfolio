import { useSEO } from "../hooks/useSEO";
import { Link } from "react-router";

export default function NotFound() {
  useSEO({ title: "Page not found", description: "The page you're looking for doesn't exist." });
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-[24px] text-center">
      <p className="font-['EB_Garamond',serif] text-[120px] leading-none text-black font-normal">
        404
      </p>
      <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[24px] text-black mt-[16px] mb-[8px]">
        Page not found
      </h1>
      <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#7a7a7a] mb-[40px] max-w-[400px]">
        The page you're looking for doesn't exist or was moved somewhere else.
      </p>
      <Link
        to="/"
        onClick={() => window.scrollTo(0, 0)}
        className="bg-black text-white font-['Inter:Regular',sans-serif] font-normal text-[16px] px-[24px] py-[12px] rounded-[100px] no-underline hover:bg-[#333] transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
