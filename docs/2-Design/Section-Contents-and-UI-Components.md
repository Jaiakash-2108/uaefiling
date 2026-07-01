# UAE Filing — Section Contents & UI Components

## Document Metadata & Governance

**Status:** Active – Single Source of Truth (SSOT)
**Version:** 1.0
**Owner:** Design Team
**Last Updated:** June 2026
**Review Cycle:** Quarterly

## Purpose

This document defines every section, component, interaction, and structural layout across the UAE Filing website.

This is the master architectural blueprint for UI/UX Design and Frontend Development. 
*Note: For exact string values, copywriting, and phrasing, refer to the [UX Copy & Microcopy Framework](./UX-Copy-and-Microcopy-Framework.md). For visual constants like colors, fonts, and shadow values, refer to the [Design Tokens & Theme Architecture](./Design-Tokens-and-Theme-Architecture.md).*

---

## UI Architecture & Layout System

To ensure a highly consistent and premium feel across all devices, the layout adheres to a strict responsive grid system:

* **Container Max Width:** `1280px` for optimal readability on ultra-wide screens. Content remains centered.
* **Responsive Breakpoints:** 
  * Mobile (default): `< 768px` (Vertical stacking, full-width cards).
  * Tablet: `768px - 1024px` (2-column grids).
  * Desktop: `> 1024px` (Standard 3-column grids, horizontal split layouts).
* **Grid System:** 12-column grid standard for all structural alignment.

---

## Component Architecture Standards

Components must be built for maximum reusability and scalability:

* **Composition over Inheritance:** UI components should wrap `children` to remain highly flexible.
* **Encapsulation:** Components must not rely on parent margins. Spacing between components must be handled by the parent layout container (e.g., using `gap` or Flexbox/Grid).
* **Prop Signatures:** Utilize standardized props for variations (e.g., `variant="primary" | "secondary" | "ghost"`).

---

## Component States

Every interactive component must account for the following standard states:

* **Default:** The baseline appearance.
* **Hover:** Distinct visual feedback (e.g., lift `translateY(-4px)` or background color shift).
* **Focus:** Triggered via keyboard navigation; must display a distinct focus ring.
* **Active (Pressed):** Scale down slightly (`scale(0.98)`) to mimic physical compression.
* **Disabled:** Reduced opacity (e.g., `50%`) with `cursor-not-allowed`.
* **Loading:** Display a skeleton loader or spinner. Buttons must preserve their width to prevent layout shifts.
* **Empty State:** For data-driven views (e.g., Client Portal document lists), display a well-designed empty illustration with a clear CTA to guide the user.
* **Error State:** High-contrast red feedback text with a clear, actionable resolution path.

---

## Accessibility (a11y) Guidelines

The UAE Filing platform must be usable by all clients:

* **Semantic HTML:** Use native `<button>`, `<a>`, `<header>`, `<main>`, and `<footer>` tags. Do not use `<div>` for interactive elements.
* **Focus States:** Every interactive element must have a clearly visible `:focus-visible` ring (e.g., a solid Gold ring with a slight offset). Never set `outline: none` without providing a custom focus state.
* **Keyboard Navigation:** All dropdowns, accordions (FAQ), and tabs must be fully navigable via `Tab`, `Enter`, `Space`, and Arrow keys.
* **ARIA Attributes:** Use `aria-expanded` on the FAQ accordion and `aria-label` for icon-only buttons (like the floating WhatsApp button).
* **Color Contrast:** All text (especially within forms, placeholders, and Ghost buttons) must meet WCAG AA contrast ratios (at least 4.5:1 for normal text).

---

## Interaction & Animation Patterns

Animations should feel premium and deliberate, never overwhelming:

* **Page Transitions:** Subtle fade-ins rather than aggressive slide-ins.
* **Scroll-Linked Reveals:** Staggered fade-up (`opacity: 0` to `opacity: 1`, `translateY: 20px` to `0`) as elements enter the viewport.
* **Micro-interactions:** Buttons and cards should respond instantly to user input (e.g., magnetic button hover effects or subtle border glow).

---

## Page Architecture

The homepage follows this chronological psychological journey:

1. Hero
2. Pain Points
3. Why UAE Filing
4. Services
5. Professions
6. Industries
7. Process
8. Pricing
9. Testimonials
10. FAQ
11. Contact
12. Footer

---

## Global Components

### Floating Navbar
* **Style:** Glassmorphism (Sticky, blur, rounded pill).
* **CTA:** Primary Gold Pill Button.

### Buttons
* **Primary:** Gold Pill Button.
* **Secondary:** Pill radius, Solid White (#FFFFFF), Black text, Soft shadow.
* **Ghost:** Transparent Pill, bordered.

### Forms & Cards
* **Forms:** Rounded inputs, large padding, subtle borders.
* **Cards:** White background, rounded corners, soft shadow, hover lift `translateY(-8px)`.

---

## Section Implementations

### 01 — Hero Section

**Layout:** Two-column split layout for main content, followed by a full-width bottom row.

**Left Content:**
* Eyebrow Badge (Contains a CSS-based Circular UAE Flag element)
* Headline
* Subheadline
* CTA Group (Primary & Ghost)

**Right Content (Hero Object):**
* **Component:** Floating UAE Freelance Licence Certificate.
* **Layout:** Contains a Top Header, a Center Image block (Photorealistic image of a professional freelancer in Dubai), and a Bottom Info block.
* **Purpose:** Tangible visual representation of the business service.
* **Animation:** Infinite float loop (`translateY(-10px)` to `translateY(+10px)` over 6s), hardware accelerated via `will-change: transform` to prevent browser lag.
* **Package Switcher:** Premium pill tabs below the card. Changes Price and Description with a crossfade (`AnimatePresence`) utilizing a fixed min-height container to eliminate layout shift (shaking).

**Bottom Row (Full Width):**
* **Trust Signals:** (No NOC needed, 0% income tax, Bank account included, 100% visa eligible) displayed in a single, perfectly spaced continuous row spanning the entire screen width underneath both left and right content.

### 02 — Pain Points Section

**Layout:** Full-width Horizontal Expanding Accordion Carousel (Desktop) & Vertical Grid (Mobile).
**Content Theme:** 10 Different Answers, Hidden Costs Shock, Wrong Activity Category, Agent Red Flags, Visa Confusion, Bank Rejection.
**Style:** Wide expanding cards (540px height) featuring premium background images with grayscale and gold tint overlay. High readability via white gradient overlays on active state. 
**Interaction:** Click to expand. Inactive cards collapse to 90px wide. Features a Windows 11 style static hover tooltip ("Click to expand") with a smooth ease-out popup animation upon mouse enter.
**Animation:** Staggered card reveal on scroll. Smooth layout transitions (500ms ease) between active and inactive states.

### 03 — Why UAE Filing

**Layout:** Three-column split layout (Left list, Center Image, Right list).
**Header:** Centered Title and description.
**Left Side:** "Typical Agent" problem list with strikethrough styling and red cross icons.
**Center:** Minimal workspace image with a floating "Start Free Consultation" CTA button and decorative circular outlines with parallax effect.
**Right Side:** "UAE Filing" solution list in a premium white card with gold checkmarks and a top gold gradient border.
**Animation:** Staggered list reveals and image scale-in.

### 04 — Statistics Section

**Layout:** 3-column grid integrated at the bottom of the "Why UAE Filing" section.
**Content Theme:** 3-5 Working days, 0% Tax, 500+ Freelancers.
**Style:** Minimalist style (No cards, no shadows, no icons). Numbers with prefix/suffix inline, separated by subtle vertical dividers (`|`).
**Animation:** Framer motion animated number counting (`useSpring`, `useTransform`).

### 05 — Services Section

**Layout:** Asymmetric "Layout Grid" / Bento Box layout on Desktop (4-column, 3-row grid with varying card spans, height `750px`). Stacks vertically on mobile (minimum card height `240px`).
**Cards & Spizing:**
- Freelance Licence: Spans 2 columns, 2 rows.
- Business Bank Account: Spans 1 column, 1 row.
- 2-Year Residence Visa: Spans 1 column, 1 row.
- Emirates ID: Spans 2 columns, 1 row. Uses a custom generated minimal card mockup image.
- Dedicated Advisor: Spans 2 columns, 1 row.
- Annual Renewal: Spans 2 columns, 1 row.
**Visual Style:** High-quality background images per card, subtle gold tint (`mix-blend-multiply`), dark gradient overlay. White typography overlay.
**Interactions:** On hover:
- Image scales up slightly (`scale-105` over `700ms`).
- Gradient overlay darkens.
- Title moves up.
- Description text slides up from the bottom (`translate-y-[120%]`) and fades in.
- Minimal top-right arrow icon indicator fades in.

### 06 — Professions Section

**Layout:** Centered static flex-wrap tag cloud layout with centered search input ("Search your profession...") and category tabs (All, Tech, Creative, Consulting, Wellness).
**Features:**
- Interactive search and category filter.
- Primary professions highlighted with a distinct gold border (`border-2 border-[#CF9A35]`) and bold text.
- Secondary professions styled as standard clean cards with subtle borders.
**Interactions:** Hovering over a tag pill scales it up slightly and lifts it (`hover:-translate-y-0.5`). Transitions on search query changes.

### 07 — Industries Section

**Layout:** Standard grid layout on Desktop (4-columns), Tablet (2-columns), and Mobile (1-column stack).
**Features:**
- Centered eyebrow header with Sparkles icon (`Industries We Serve`) in minimal gold style.
- Centered title in a single straight line: `Your sector. Fully covered.`
- 8 Industry Cards: Technology & Software, Creative & Media, Marketing & Advertising, Education & Training, Health & Wellness, Finance & Consulting, Construction & Real Estate, E-commerce & Retail.
**Style:** Minimalist pure white cards (`bg-[#FFFFFF]`) with ultra-thin soft borders (`border-[rgba(24,15,9,0.06)]`). No colored background boxes. Faint ambient drop shadows.
**Interactions:** Hovering over a card lifts it slightly (`hover:-translate-y-1`), transitions borders to a gold tint (`hover:border-[#CF9A35]/40`), scales up the icon (`scale-105`), and renders a soft shadow depth.

### 08 — Process Section

**Layout:** Interactive Stepper timeline layout on Desktop (horizontal timeline progress bar) and Mobile (vertical step indicator stack).
**Features:**
- Centered eyebrow header with Sparkles icon (`The Process`) in minimal gold style.
- Centered title in a single straight line: `Four simple steps. From confusion to done.`
- 4-Step Stepper indicators (1, 2, 3, 4) connected by a dynamic gold progress indicator line.
- Active details card: Displays subtitle, step name, and description in the left column; displays a customized list of deliverables with gold checkmarks in the right column.
- Interactive Navigation: Prev/Next buttons at the bottom.
**Style:** Minimalist styling with a cream/beige background canvas (`bg-[#FEFCF7]`). The details card is pure white (`bg-[#FFFFFF]`) with soft border and faint shadow.
**Interactions:** Selecting step badges updates the active progress line and renders details card via smooth Framer Motion height and fade transitions.

### 09 — Pricing Section

**Layout:** 3-column pricing card grid on Desktop, stacking vertically on Mobile.
**Features:**
- Centered eyebrow header with Sparkles icon (`Transparent Pricing`) in minimal gold style.
- Centered title in a single straight line: `No hidden fees. Ever.`
- Interactive Switcher Toggle: Switches pricing between "Pay in Full" and "4 Split Payments" (Tabby installments) with smooth blur transitions.
- 3 Plan Cards: Starter (AED 5,555 or AED 1,389/mo), Licence + Visa (Featured - AED 12,500 or AED 3,125/mo), and Complete Setup (AED 18,000 or AED 4,500/mo).
- Elevated Middle Card: Taller, with a black top badge (`★ RECOMMENDED`) and dark action button. Shorter cards use minimal grey background buttons.
- Details checklist with custom gold checkmark bullets in each card.
- Government licensing and free zone disclaimer note at the bottom.
**Style:** Minimalist white cards (`bg-[#FFFFFF]`) with thin grey borders (`border-[rgba(24,15,9,0.06)]`) and light shadows. The section background is pure white.

### 10 — Testimonials Section

**Layout:** Interactive Avatar Capsule Switcher block.
**Features:**
- Centered eyebrow header with Sparkles icon (`Client Success`) in minimal gold style.
- Centered title in a single straight line: `Built for freelancers, verified by freelancers.`
- 5 Gold Star icons above the review quote.
- Testimonial Quote: Large, elegant italic quote text that updates dynamically based on the active client.
- Switcher Pill Dock: A minimalist transparent inline switcher at the bottom.
  - Active item: Sleek black pill capsule (`bg-[#180F09]`) displaying the active profile picture, the client's name, and a gold checkmark icon for verification.
  - Inactive items: Circular profile pictures next to it with subtle borders and hover opacity animations.
**Style:** Minimalist styling with a beige background canvas (`bg-[#FEFCF7]`). The content card box is white (`bg-[#FFFFFF]`) with a thin border and soft ambient shadow.
**Interactions:** Clicking/hovering on inactive avatars smoothly transitions the active capsule position via Framer Motion layouts and fades/slides the new testimonial content.

### 11 — FAQ Section

**Layout:** Split 2-column layout.
**Left Column:**
- Pill Badge: `FAQ` with a thin border.
- Heading: `Everything you need to know.` in Serif font.
- Paragraph: Detailed summary about freelance licensing questions.
- Call-to-Action Button: White button with a thin border saying `Any questions? Reach out` with a gold phone icon.
**Right Column:**
- Accordion stack of 5 Q&A rows separated by thin grey dividers.
- Animated chevron icon indicators that rotate on click.
- Answers expand and collapse smoothly using Framer Motion heights.
**Style:** Minimalist style on pure white background (`bg-[#FFFFFF]`).

### 12 — Contact Section

**Layout:** Two-column layout.
**Style:** High contrast (Dark Obsidian background).
**Left Side:** Headline, Descriptive Paragraph, Trust Checkmarks.
**Right Side:** White Form Card containing inputs and a Gold CTA.

### 13 — Footer

**Layout:** Multi-column (Services, Company, Support).
**Style:** Dark Obsidian background, White text, Gold hover states.

---

## Application UI Integrations

### WhatsApp Integration
* **Placement:** Persistent Floating Button.

### Client Portal / Dashboard
*(Detailed Dashboard UI layouts are to be defined, but generally feature warm backgrounds, premium cards, and minimal complexity. Refer to Component States for empty/loading behaviors).*

---

## Success Criteria

Every section should answer a specific psychological question for the user (e.g., Hero -> "What is this?", FAQ -> "What if I still have concerns?").

When all sections work together, the website must feel like a premium advisory experience guiding freelancers toward legal establishment.

---

## Related Documents
* [UX Copy & Microcopy Framework](./UX-Copy-and-Microcopy-Framework.md)
* [Design Tokens & Theme Architecture](./Design-Tokens-and-Theme-Architecture.md)
* [Organic User Journey](../1-Strategy/Organic-User-Journey.md)
* [System Sitemap & Routing](../3-Engineering/System-Sitemap-and-Routing.md)