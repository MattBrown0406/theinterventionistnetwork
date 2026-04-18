declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    plausible?: (eventName: string, options?: { props?: Record<string, unknown> }) => void;
  }
}

export const trackEvent = (eventName: string, props?: Record<string, unknown>) => {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, props ?? {});
  }

  if (typeof window.plausible === "function") {
    window.plausible(eventName, props ? { props } : undefined);
  }
};
