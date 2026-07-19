import { Mic } from "lucide-react";

/**
 * Cross-link to The Party Wreckers podcast, hosted by the network's founder.
 * Rendered at the end of blog posts.
 */
const PodcastCallout = () => (
  <div className="mt-10 rounded-2xl border border-border bg-warm-gray p-6 sm:flex sm:items-center sm:gap-5">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 sm:mb-0 sm:shrink-0">
      <Mic className="h-6 w-6 text-gold" />
    </div>
    <div className="flex-1">
      <p className="font-bold">Prefer to listen? The Party Wreckers Podcast</p>
      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
        Weekly conversations on addiction, intervention, and family recovery — enabling, boundaries, relapse, and
        what to do when love alone isn't moving the needle. Hosted by our founder, Matt Brown.
      </p>
    </div>
    <a
      href="https://partywreckers.com"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-block rounded-md bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground transition-opacity hover:opacity-90 sm:mt-0 sm:shrink-0"
    >
      Listen now
    </a>
  </div>
);

export default PodcastCallout;
