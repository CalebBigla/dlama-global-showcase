# Dlama Global Showcase

Lovable Build Prompt — Dlama Global Homes

Copy everything below into Lovable as your project prompt.

Project Brief

Build a premium, high-end real estate web application for Dlama Global Homes, a global luxury property brand. The site should feel like it belongs to a 2026-era real estate company competing with the likes of Sotheby's Realty, Compass, and Knight Frank — cinematic, editorial, confident, and effortless to navigate. Every page must feel intentional: strong hierarchy, generous whitespace, balanced text-to-image ratio, and subtle motion that rewards scrolling rather than distracting from it.

This build is pages only — no dashboards, no auth flows, no backend admin panels. Focus entirely on the public-facing marketing and browsing experience.

Brand System

Name: Dlama Global Homes

Logotype: "DLAMA" in navy, "GLOBAL" in gold gradient, "HOMES" centered beneath in navy small-caps, with a minimalist gold skyline mark (two abstract towers) bridging the two words, resting on a thin horizontal line that fans out like a horizon.

Primary navy: #1B2A4A (use for headings, nav, footer backgrounds)

Gold gradient: #C9A85C → #8A6A2F (use for accents, CTAs, dividers, hover states, icons)

Neutral base: off-white #F7F7F5 and warm white #FFFFFF for backgrounds

Supporting neutral: charcoal #2B2B2B for body copy

Typography: a refined serif (e.g. "Playfair Display" or "Fraunces") for headlines to echo the logotype's classic feel, paired with a clean geometric sans-serif (e.g. "Inter" or "Manrope") for body copy, nav, and UI labels.

Motif: the skyline/horizon line from the logo should reappear subtly throughout the site — as section dividers, scroll progress indicators, or thin gold rules under headings — to tie every page back to the brand mark.

Design Principles to Enforce Throughout

Hierarchy first — one clear focal point per section; supporting content visibly secondary.

Balance — alternate full-bleed imagery sections with tighter text-column sections; never let a page feel top- or bottom-heavy.

Whitespace as luxury — generous padding, no cramped grids; let content breathe the way high-end property brochures do.

Photography-led — use large, high-quality real estate/architecture imagery (placeholder images from Unsplash: search terms like "luxury modern home," "architectural interior," "penthouse skyline") as the emotional core of most sections.

Motion with restraint — scroll-triggered fades/slides, parallax on hero imagery, smooth hover states on cards, animated counters for stats, subtle cursor-follow or magnetic buttons on primary CTAs. Nothing gimmicky — motion should feel like polish, not decoration.

Responsive-first — every layout must degrade gracefully to mobile with the same premium feel, not a cut-down version.

Global Elements

Navbar: transparent over hero, transitions to solid navy (or white with navy text) on scroll. Logo left, nav links center/right (Home, Properties, About, Services, Agents, Insights, Contact), gold-outlined "Book a Consultation" CTA button on the far right. Mobile: elegant full-screen overlay menu with staggered link animation.

Footer: navy background, gold skyline motif as a subtle background watermark, organized into columns (About, Quick Links, Featured Locations, Contact/Newsletter signup), social icons, and a bottom bar with copyright + legal links.

Buttons: primary = solid gold gradient with dark navy text, hover lightens/shifts gradient; secondary = navy outline, fills on hover.

Section dividers: thin gold horizon line matching the logo's fan motif, used to separate major sections instead of hard borders.

Pages to Build

1. Home

Hero: full-bleed video-style/parallax image of a striking property or skyline at golden hour, logo-centered overlay, headline ("Global Homes. Extraordinary Living."), subheadline, animated search bar (location, property type, price range) floating over the hero, scroll-cue indicator.

Stats strip: animated counters (Properties Sold, Countries, Years of Excellence, Client Satisfaction) on a navy background.

Featured Properties: horizontally scrollable or grid carousel of 4–6 premium listings as cards (image, price, location, beds/baths/sqft, save/heart icon, hover zoom on image).

Why Dlama Global: 3–4 column feature block (Global Reach, Curated Portfolio, White-Glove Service, Local Expertise) with icons and short copy.

Featured Locations: interactive image-grid or map-style section showcasing key cities/regions with hover overlays.

Testimonials: auto-advancing or swipeable carousel with client photo, quote, and rating.

Insights preview: 3 latest articles/market reports as cards linking to the Insights page.

CTA banner: full-width gold-gradient or navy section inviting users to book a consultation, with a strong closing line and button.

2. Properties (Listings)

Sticky filter bar: location, price range, property type, beds/baths, toggle for grid/map view — smooth collapse/expand animation.

Grid of property cards with lazy-loaded images, quick-view hover state (shows extra details or a "Quick View" modal trigger), pagination or infinite scroll.

Optional split-view: map on one side, listings on the other, synced on hover/click.

Sort controls: price, newest, most popular.

3. Property Detail

Hero gallery: large image carousel/lightbox with thumbnail strip, fullscreen view option.

Key details bar: price, address, beds/baths/sqft, status (For Sale/For Rent), save + share icons — sticky on scroll.

Description: editorial-style copy block with a pull-quote or highlight stat.

Feature list: icon grid (amenities, interior/exterior features).

Floor plan section: image or interactive tabbed view if multiple units.

Map/location block: embedded map with neighborhood highlights.

Agent contact card: agent photo, name, title, contact form/CTA ("Schedule a Tour," "Request Info").

Similar properties: carousel at the bottom.

4. About

Brand story hero: large imagery + narrative headline on company origin/mission.

Timeline or milestones section with scroll-triggered reveal animation.

Mission/Vision/Values: 3-column editorial layout.

Leadership/founders spotlight with portrait-style imagery.

Global presence map or badge strip (cities/countries served).

5. Services

Overview hero framing Dlama Global's service pillars (Buying, Selling, Property Management, Investment Advisory, Relocation/Concierge).

Alternating image/text sections per service (zig-zag layout) with icon accents and CTA per section.

Process/How It Works: numbered step timeline with subtle line-draw animation on scroll.

6. Agents / Team

Grid of agent cards: photo, name, title, specialty tags, hover reveals contact icons.

Filter by region/specialty.

Individual agent spotlight modal or page: bio, listings by that agent, testimonials, contact form.

7. Insights (Blog/Market Reports)

Featured article hero (large image + headline).

Category filter tabs (Market Trends, Buying Guides, Lifestyle, Global Spotlight).

Article grid/list with read-time, category tag, hover image zoom.

Newsletter signup block styled consistently with the footer's version.

8. Contact

Split layout: left = elegant contact form (name, email, phone, message, property interest dropdown) with soft validation animations; right = office locations list or embedded map, plus direct contact details (phone, email, WhatsApp).

Office hours / global offices as an accordion or tab component if multiple locations.

Closing CTA reinforcing the brand promise before the footer.

Interaction & Animation Notes for Lovable

Use scroll-triggered fade-up/slide-in for section entrances (stagger children for grids/cards).

Hero sections: subtle parallax on background image relative to scroll position.

Cards: image scale-up on hover (1.0 → 1.05), shadow lift, smooth transition (~300–400ms ease).

Buttons: magnetic/hover-fill effect using the gold gradient.

Numbers/stats: animate count-up when scrolled into view.

Page transitions: soft fade/slide between routes if feasible.

Loading states: skeleton loaders styled in navy/gold tones rather than generic gray, so even loading feels on-brand.

Deliverable Expectations

Build this as a fully responsive multi-page React app (Lovable default stack) with reusable components (Navbar, Footer, PropertyCard, AgentCard, TestimonialCard, SectionDivider, CTASection). Use placeholder real estate imagery and realistic dummy content (property names, prices, agent names, testimonials) so the app feels populated and real, not empty. Prioritize the Home, Properties, and Property Detail pages first for polish, then bring About, Services, Agents, Insights, and Contact to the same quality bar.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/47b6931c-05f7-4826-b63a-047c6ada0d0f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
