import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // html/body compute overflow-y: auto here (a side effect of overflow-x: hidden being
    // set without overflow-y), which makes body its own scroll container instead of the
    // window — window.scrollTo alone is a no-op, so reset all candidates explicitly.
    window.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
