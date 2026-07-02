# CLAUDE.md — UAE Filing Project Instructions

## Project Overview
UAE Filing is a premium full-stack Next.js web
application helping freelancers become legally
established in the UAE.

Three zones:
1. Public Marketing Website (lead generation)
2. Client Portal /portal (authenticated clients)
3. Admin Dashboard /admin (internal ops)

---

## Tech Stack
- Framework: Next.js 15 (App Router)
- Language: TypeScript (strict — no `any`)
- Styling: Tailwind CSS (semantic tokens only)
- Animation: Framer Motion + Lenis
- Backend: Supabase (PostgreSQL + Auth + Storage)
- Icons: Lucide React (24x24, 1.5px stroke)
- Email: Resend
- Communication: WhatsApp Business API
- Analytics: Google Analytics 4 + Microsoft Clarity
- Hosting: Vercel

---

## Documentation (Single Source of Truth)

ALWAYS reference these before writing any code
or copy. NEVER invent requirements.

### Design
- Colors, fonts, spacing, shadows, motion:
  docs/2-Design/Design-Tokens-and-Theme-Architecture.md
- Section layouts, components, interactions:
  docs/2-Design/Section-Contents-and-UI-Components.md
- All text, headlines, CTAs, error messages:
  docs/2-Design/UX-Copy-and-Microcopy-Framework.md
- Brand philosophy + visual inspiration:
  docs/2-Design/Design-References-and-Aesthetic-Goals.md

### Strategy
- Competitive positioning:
  docs/1-Strategy/Competitors-and-Positioning.md
- Organic funnel:
  docs/1-Strategy/Organic-User-Journey.md
- Paid funnel:
  docs/1-Strategy/Paid-User-Journey.md

### Engineering
- Full tech architecture:
  docs/3-Engineering/Tech-Stack-Architecture.md
- Routes + access control:
  docs/3-Engineering/System-Sitemap-and-Routing.md
- Database tables + RLS:
  docs/3-Engineering/Database-Schema.md
- Dev setup + git workflow:
  docs/3-Engineering/Developer-README.md

---

## Critical Rules — NEVER BREAK THESE

### Content
- NEVER change approved copy.
  All text must match UX-Copy-and-Microcopy-
  Framework.md verbatim.
- NEVER invent legal information, pricing,
  visa facts, or UAE government processes.
- Core brand headline is sacred:
  "You have the skill. We'll make it legal."

### Colors
Only use these tokens. Never introduce new hex:
- Primary Background: #FDFAF4
- Secondary Background: #FEFCF7
- Surface: #FFFFFF
- Soft Surface: #F3EEE3
- Primary Text: #180F09
- Secondary Text: #433830
- Muted Text: rgba(24,15,9,.65)
- Gold (Accent): #CF9A35
- Gold Hover: #B8862E
- Gold Soft: rgba(207,154,53,.12)
- Dark Obsidian: #180F09
  (Contact section + Footer background)
- Champagne: #F4EFE6
  (Pricing featured card background)

### Typography
- Headings: Playfair Display (weight 500/600/700)
- Body/UI: Inter (weight 400/500/600/700)
- Numbers/Code: JetBrains Mono
- NEVER use arbitrary font-family values.

### Tailwind
- NEVER use arbitrary values: bg-[#CF9A35]
- ALWAYS use semantic token classes mapped
  in tailwind.config.ts

### Spacing (8pt Grid)
- Section spacing: 160px desktop / 80px mobile
- Component: 48px large / 24px medium / 16px small
- Card gap: 24px

### Border Radius
- Small: 16px (tags, small cards)
- Medium: 24px (forms, cards)
- Large: 32px (feature containers)
- Pill: 999px (buttons, nav, tags)

### Motion
- Reveal: opacity 0→1, translateY 40px→0,
  scale 0.98→1, 800ms,
  cubic-bezier(0.16, 1, 0.3, 1)
- Hover: translateY(-8px), 200ms
- Hero float: translateY(-10px/+10px), 6s infinite
- ALWAYS add prefers-reduced-motion fallback

### Buttons
- Primary: Gold pill (#CF9A35, white text)
- Secondary: White pill (#FFFFFF, black text,
  soft shadow)
- Ghost: Transparent pill (1.5px border, no fill)

---

## WhatsApp Integration

Provider: WhatsApp Business API
File: src/lib/whatsapp/ (utility functions here)

### Trigger Points
Send WhatsApp notification when:
- Lead submits contact form → welcome message
- Application status changes → status update
- Licence issued → completion message
- 30 days before renewal → renewal reminder

### Message Templates (exact copy from SSOT)
Use these exact strings — do not paraphrase:

Application Received:
"Hello {{Name}}, We've received your application
and will begin processing it shortly."

Application Submitted:
"Hello {{Name}}, Your freelance licence
application has been submitted successfully."

Application Approved:
"Hello {{Name}}, Great news. Your application
has been approved."

Licence Issued:
"Hello {{Name}}, Your UAE freelance licence
has been issued successfully."

Renewal Notification:
"Hello {{Name}}, Your licence renewal date is
approaching. Please log in to your dashboard
for next steps."

### Floating WhatsApp Button (UI)
- Label: "Need Help?"
- Primary CTA: "Chat on WhatsApp"
- Secondary CTA: "Request a Callback"
- Position: Fixed, bottom-right
- aria-label must be set (icon-only button)
- Link: https://wa.me/{WHATSAPP_BUSINESS_NUMBER}
- Style: #1F7A52 (WhatsApp green), 60px circle,
  pulse animation (calm, not aggressive)

### Environment Variable
WHATSAPP_BUSINESS_NUMBER= (in .env.local)
WHATSAPP_API_TOKEN= (in .env.local, server-only,
NEVER expose to browser)

---

## Email Integration (Resend)

Provider: Resend
SDK: resend npm package
File: src/lib/email/ (utility functions here)
From address: Use verified domain sender

### Environment Variable
RESEND_API_KEY= (in .env.local, server-only,
NEVER prefix with NEXT_PUBLIC_)

### Email Trigger Points
All emails sent server-side only
(API routes or Server Actions — NEVER client):

1. Welcome Email
   Trigger: New user signs up / lead submitted
   Subject: "Welcome to UAE Filing"
   Body: Hi {{Name}}, Thank you for choosing
   UAE Filing. We're excited to help you
   establish your freelance career legally
   in the UAE. You can now track your
   application, upload documents, receive
   updates, and contact support.
   Let's get started.

2. Consultation Confirmation
   Trigger: Consultation booked
   Subject: "Your Consultation Has Been Confirmed"

3. Status Update
   Trigger: Admin updates application status
   Subject: "Your Application Status Has Been
   Updated"
   Body: Hi {{Name}}, Your application has
   moved to: {{Status}}. Log in to your
   dashboard for full details.

4. Document Ready
   Trigger: Document available in portal
   Subject: "Your Documents Are Ready"
   Body: Your documents are now available
   in your dashboard. Please log in to
   download them securely.

5. Renewal Reminder
   Trigger: 30 days before licence expiry
   Subject: "Your Licence Renewal Is Approaching"

### Implementation Pattern
// src/lib/email/send-welcome.ts
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendWelcomeEmail(
  name: string,
  email: string
) {
  await resend.emails.send({
    from: 'UAE Filing <hello@uaefiling.com>',
    to: email,
    subject: 'Welcome to UAE Filing',
    html: `...` // use approved copy above
  })
}

### Security Rules
- RESEND_API_KEY is server-only — never expose
- Always validate email format before sending
- Always wrap in try/catch — email failure
  must NOT break the main user flow
- Log failures silently, never show raw
  error to user
- User-facing error: "Something went wrong.
  Please try again." (from UX-Copy SSOT)

---

## Database (Supabase)

Tables (supabase/schema.sql):
- profiles (linked to auth.users)
- leads (contact form submissions)
- applications (licence process tracking)
- documents (file references)
- support_requests (client tickets)

RLS: Enabled on all tables.
Storage: Private buckets (signed URLs only).
Admin access: Via SUPABASE_SERVICE_ROLE_KEY
(server-only, NEVER expose to browser).

Supabase client:
- Browser: src/lib/supabase.ts (anon key)
- Server: src/lib/supabase/server.ts
  (service role for admin operations)

---

## Routing & Access Control

Public: / /services /professions /industries
       /pricing /faq /contact /thank-you
       /legal/*

Auth: /login /signup /forgot-password
      /reset-password

Client (authenticated): /portal/*
Admin (admin role only): /admin/*

Middleware: src/middleware.ts guards
/portal/* and /admin/* routes.
Unauthenticated → redirect to /login.

---

## Git Workflow
Branch naming:
- feature/* — new features
- bugfix/*  — bug fixes
- hotfix/*  — critical production fixes
- docs/*    — documentation updates

Commit format (Conventional Commits):
- feat: new feature
- fix: bug fix
- docs: documentation only
- refactor: no bug fix / no feature
- chore: build/tooling changes

Before every PR:
- pnpm typecheck (zero errors)
- pnpm lint (zero errors)
- pnpm build (successful)

---

## Checklist Before Any Code Change
- [ ] Did I check UX-Copy doc for exact text?
- [ ] Did I check Design-Tokens for colors?
- [ ] Did I use only approved hex values?
- [ ] Did I add prefers-reduced-motion fallback?
- [ ] Did I handle loading + error states?
- [ ] Does pnpm build pass?

