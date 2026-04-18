# The Interventionist Network Launch QA Checklist

## Core conversion paths
- [ ] Homepage primary CTA opens `/help`
- [ ] Homepage secondary CTA opens `/find`
- [ ] `/help` form submits successfully
- [ ] `/contact` form submits successfully
- [ ] `/apply` form creates Square checkout successfully
- [ ] Floating contact form submits successfully
- [ ] Phone click works from homepage/help/contact/profile pages

## Directory and profile flow
- [ ] `/find` search filters by name, state, specialty, and keyword as expected
- [ ] Active filter chips appear and can be removed individually
- [ ] Clear-all filters resets the directory cleanly
- [ ] No-results state offers a useful next step
- [ ] Interventionist card click opens correct profile
- [ ] Interventionist card request-match click opens `/help?interventionist=...`
- [ ] Interventionist profile request-match CTA works
- [ ] Interventionist profile phone/email/website links work

## Tracking and admin
- [ ] Help/contact/apply conversion events fire without console errors
- [ ] Interventionist click tracking inserts successfully
- [ ] Admin login works
- [ ] Admin click analytics tab loads and shows data

## SEO and trust
- [ ] Homepage title/description/canonical look correct
- [ ] `/find`, `/help`, `/about`, `/faq`, and state pages have correct titles and canonicals
- [ ] `robots.txt` loads
- [ ] `sitemap.xml` loads and includes main pages/state pages
- [ ] OG image preview looks acceptable on homepage and core pages

## Mobile and presentation
- [ ] Homepage hero and CTA stack cleanly on mobile
- [ ] `/find` filters are usable on mobile
- [ ] Cards look consistent across homepage and directory
- [ ] Help/contact forms are easy to complete on mobile
- [ ] No obvious spacing/alignment issues on main pages

## Basic performance sanity
- [ ] Homepage loads without broken assets
- [ ] `/find` and profile pages load without console errors
- [ ] Forms submit without visible JS/runtime errors

## Final pre-launch sanity
- [ ] Test with real phone number/email on one family form
- [ ] Confirm follow-up inbox receives the lead
- [ ] Confirm admin can still edit interventionists
- [ ] Confirm latest production deploy matches GitHub main
