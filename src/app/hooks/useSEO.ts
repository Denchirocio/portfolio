import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const BASE_TITLE = "Denise Chiapin — Product Designer";
const BASE_DESC = "Sr. Product Designer passionate about creating beautiful, user-friendly products. UX Research, UX/UI Design, and development.";
const BASE_IMAGE = "https://denchinonihongo.app/icon-512.png";
const BASE_URL = "https://denisechiapin.com";

function setMeta(name: string, content: string, isProperty = false) {
  const attr = isProperty ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function useSEO({ title, description, image, url }: SEOProps = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} — Denise Chiapin` : BASE_TITLE;
    const desc = description ?? BASE_DESC;
    const img = image ?? BASE_IMAGE;
    const pageUrl = url ?? BASE_URL;

    document.title = fullTitle;

    setMeta("description", desc);

    // Open Graph
    setMeta("og:title", fullTitle, true);
    setMeta("og:description", desc, true);
    setMeta("og:image", img, true);
    setMeta("og:url", pageUrl, true);
    setMeta("og:type", "website", true);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", desc);
    setMeta("twitter:image", img);
  }, [title, description, image, url]);
}
