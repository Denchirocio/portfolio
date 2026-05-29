import { Outlet, Link, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import AppFooter from "./AppFooter";
import ScrollToTop from "./ScrollToTop";

const headerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit:    { opacity: 0 },
};
const transition = { duration: 0.25, ease: "easeInOut" };

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";
  const isBlog = location.pathname.startsWith("/blog");

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <AnimatePresence>
        {!isAbout && !isBlog && (
          <motion.header
            key="layout-header"
            variants={headerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
            className="sticky top-0 z-50 bg-white border-b border-[#EBEBEB]"
          >
            <div className="max-w-[1440px] mx-auto px-[80px] py-[24px]">
              <nav className="flex items-center justify-between">
                <Link to="/" className="flex items-center gap-[8px] logo-link">
                  <svg fill="none" viewBox="0 0 34 22" className="w-[34px] h-[22px] logo-star">
                    <path d="M34 2.47042C20.0898 7.79276 17.9004 7.54971 11.7118 0C13.7777 9.61712 12.6273 11.5368 0 19.5296C13.9102 14.2072 16.0996 14.4503 22.2882 22C20.2223 12.3829 21.3727 10.4632 34 2.47042Z" fill="#FF6465" />
                  </svg>
                  <span className="font-['Monomakh',sans-serif] font-bold text-[16px] text-black">
                    my portfolio
                  </span>
                </Link>
                <div className="flex items-center gap-[32px]">
                  <Link to="/" className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black hover:opacity-70 transition-opacity">Home</Link>
                  <Link to="/about" className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black hover:opacity-70 transition-opacity">About me</Link>
                  <Link to="/blog" className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black hover:opacity-70 transition-opacity">Blog</Link>
                  <a href="/CV- Denise Chiapin EN - Classic.pdf" download className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-black border border-black px-[16px] py-[6px] rounded-[100px] hover:bg-black hover:text-white transition-colors">My CV</a>
                  <a href="#" className="bg-black text-white px-[24px] py-[12px] rounded-[100px] font-['Inter:Regular',sans-serif] font-normal text-[16px] hover:bg-[#333] transition-colors">See my profile!</a>
                </div>
              </nav>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      <main>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Outlet />
        </motion.div>
      </main>

      <AnimatePresence>
        {!isAbout && !isBlog && (
          <motion.div key="layout-footer" variants={headerVariants} initial="initial" animate="animate" exit="exit" transition={transition}>
            <AppFooter />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
