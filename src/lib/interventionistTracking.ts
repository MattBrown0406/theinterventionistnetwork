import { supabase } from "@/integrations/supabase/client";
import { trackEvent } from "@/lib/analytics";

type ClickType = "card_profile" | "card_match" | "profile_match" | "profile_phone" | "profile_email" | "profile_website";

type TrackInterventionistClickArgs = {
  interventionistId: string;
  slug: string;
  clickType: ClickType;
  sourcePath?: string;
};

export const trackInterventionistClick = async ({
  interventionistId,
  slug,
  clickType,
  sourcePath,
}: TrackInterventionistClickArgs) => {
  trackEvent("interventionist_click", {
    interventionist_slug: slug,
    click_type: clickType,
    source_path: sourcePath || window.location.pathname,
  });

  try {
    await supabase.from("interventionist_click_events").insert({
      interventionist_id: interventionistId,
      slug,
      click_type: clickType,
      source_path: sourcePath || window.location.pathname,
      user_agent: navigator.userAgent,
      referrer: document.referrer || null,
    });
  } catch (error) {
    console.error("Failed to record interventionist click", error);
  }
};
