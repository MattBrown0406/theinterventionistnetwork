/**
 * Convert a YouTube or Vimeo URL into a privacy-friendly embed URL.
 * Returns null for anything unrecognized so callers can simply skip rendering.
 */
export function getVideoEmbedUrl(url?: string | null): string | null {
  if (!url) return null;
  let parsed: URL;
  try {
    parsed = new URL(url.trim());
  } catch {
    return null;
  }
  const host = parsed.hostname.replace(/^www\./, "");

  // YouTube: watch?v=ID, youtu.be/ID, shorts/ID, embed/ID
  if (host === "youtube.com" || host === "m.youtube.com" || host === "youtube-nocookie.com" || host === "youtu.be") {
    let id = "";
    if (host === "youtu.be") {
      id = parsed.pathname.split("/")[1] || "";
    } else if (parsed.pathname.startsWith("/watch")) {
      id = parsed.searchParams.get("v") || "";
    } else {
      const parts = parsed.pathname.split("/").filter(Boolean); // shorts/ID, embed/ID, live/ID
      if (["shorts", "embed", "live", "v"].includes(parts[0]) && parts[1]) id = parts[1];
    }
    if (/^[A-Za-z0-9_-]{6,20}$/.test(id)) {
      return `https://www.youtube-nocookie.com/embed/${id}`;
    }
    return null;
  }

  // Vimeo: vimeo.com/12345678 or player.vimeo.com/video/12345678
  if (host === "vimeo.com" || host === "player.vimeo.com") {
    const match = parsed.pathname.match(/(\d{6,12})/);
    if (match) return `https://player.vimeo.com/video/${match[1]}`;
    return null;
  }

  return null;
}
