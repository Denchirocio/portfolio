import { Outlet, Link, useLocation } from "react-router";
import AppFooter from "./AppFooter";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <header className="sticky top-0 z-50 bg-white border-b border-[#EBEBEB]">
        <div className="max-w-[1440px] mx-auto px-[80px] py-[24px]">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-[8px]">
              <div className="bg-[#FFCF3D] w-[24px] h-[24px] rounded-[4px]" />
              <span className="font-['Monomakh',sans-serif] font-bold text-[16px] text-black">
                my portfolio
              </span>
            </Link>

            <div className="flex items-center gap-[32px]">
              <Link
                to="/"
                className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black hover:opacity-70 transition-opacity"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black hover:opacity-70 transition-opacity"
              >
                About me
              </Link>
              <a
                href="/CV- Denise Chiapin EN - Classic.pdf"
                download
                className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black border border-black px-[16px] py-[6px] rounded-[100px] hover:bg-black hover:text-white transition-colors"
              >
                My CV
              </a>
              <a
                href="#"
                className="bg-black text-white px-[24px] py-[12px] rounded-[100px] font-['Inter:Regular',sans-serif] font-normal text-[16px] hover:bg-[#333] transition-colors"
              >
                See my profile!
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      {!isAbout && <AppFooter />}
    </div>
  );
}
