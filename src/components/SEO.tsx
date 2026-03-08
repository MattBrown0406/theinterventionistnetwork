import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  article?: {
    author?: string;
    publishedTime?: string;
  };
}

const BASE_URL = "https://theinterventionistnetwork.com";

const DEFAULT_OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/57ed7768-0c2d-41b5-8041-faa8e7f53e1e/id-preview-f2d64247--0aadcb95-54e1-425c-844a-1c75de9e4f26.lovable.app-1773007231761.png";

const SEO = ({ title, description, canonical, ogImage, ogType = "website", article }: SEOProps) => {
  const location = useLocation();
  const canonicalUrl = canonical || `${BASE_URL}${location.pathname}`;
  const fullTitle = title.includes("The Interventionist Network") ? title : `${title} — The Interventionist Network`;
  const imageUrl = ogImage || DEFAULT_OG_IMAGE;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", fullTitle, true);
    setMeta("og:description", description, true);
    setMeta("og:url", canonicalUrl, true);
    setMeta("og:type", ogType, true);
    setMeta("og:image", imageUrl, true);
    setMeta("twitter:image", imageUrl);

    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);

    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute("href", canonicalUrl);

    if (article) {
      if (article.author) setMeta("article:author", article.author, true);
      if (article.publishedTime) setMeta("article:published_time", article.publishedTime, true);
    }

    return () => {
      document.title = "The Interventionist Network — Trusted Interventionists. Zero Referral Fees.";
    };
  }, [fullTitle, description, canonicalUrl, ogImage, ogType, article]);

  return null;
};

export default SEO;
