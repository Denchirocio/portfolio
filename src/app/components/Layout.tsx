import { useState } from "react";
import { Outlet, useLocation } from "react-router";
import AppFooter from "./AppFooter";
import ScrollToTop from "./ScrollToTop";
import SiteHeader from "./SiteHeader";
import { ContactDrawer } from "../../imports/shared/ContactDrawer";

export default function Layout() {
  const location = useLocation();
  const isAbout = location.pathname === "/about";
  const isBlog = location.pathname.startsWith("/blog");
  const variant = isAbout || isBlog ? "contact" : "tagline";
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <SiteHeader variant={variant} onOpenContact={() => setIsDrawerOpen(true)} />
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      <main>
        <Outlet />
      </main>

      <AppFooter />
    </div>
  );
}
