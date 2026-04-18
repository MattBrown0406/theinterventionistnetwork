import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SchemaProps {
  type: "Organization" | "WebSite" | "WebPage" | "LocalBusiness" | "ProfessionalService" | "BreadcrumbList" | "Article" | "FAQPage";
  data: Record<string, unknown>;
}

const SchemaMarkup = ({ type, data }: SchemaProps) => {
  const location = useLocation();

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = `schema-${type}-${location.pathname}`;
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": type,
      ...data,
    });

    const existing = document.getElementById(script.id);
    if (existing) existing.remove();
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(script.id);
      if (el) el.remove();
    };
  }, [type, data, location.pathname]);

  return null;
};

export default SchemaMarkup;
