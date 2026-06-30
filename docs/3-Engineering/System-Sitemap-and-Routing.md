# UAE Filing — System Sitemap & Routing

## Document Metadata & Governance

**Status:** Active – Single Source of Truth (SSOT)
**Version:** 1.0
**Owner:** Engineering Lead
**Last Updated:** June 2026
**Review Cycle:** Quarterly

## Purpose

This document defines the complete information architecture and routing structure for UAE Filing.

It serves as the blueprint for:
* Website Structure
* Client Portal Structure
* Admin Dashboard Structure
* Next.js App Router Architecture
* Access Control

*(For UI layouts, refer to [Section Contents & UI Components](../2-Design/Section-Contents-and-UI-Components.md). For Database architecture, refer to [Database Schema](./Database-Schema.md)).*

---

## System Architecture Overview

Unlike traditional competitors who rely entirely on manual operations (Landing Page -> Contact Form -> Manual Operations), UAE Filing operates as a unified platform:

`Public Website -> Lead Generation -> Client Account Creation -> Client Portal -> Admin Dashboard -> Automated Communication`

---

## Access Control & Layout Groups

The routing structure is divided into three distinct access zones:

### 1. Public (Marketing)
* **Access:** Anonymous visitors.
* **Scope:** Public marketing pages, SEO pages, lead generation forms.

### 2. Client (Portal)
* **Access:** Authenticated Users (Clients).
* **Scope:** Own documents, own status, own messages. Protected by Supabase Auth and RLS policies.

### 3. Admin (Dashboard)
* **Access:** Authenticated Users (Admins only).
* **Scope:** All records, all clients, all documents, analytics, CRM.

---

## Middleware Architecture

The Next.js `middleware.ts` file acts as the primary gatekeeper for the routing architecture.

* **Purpose:** Intercepts requests to enforce route protection before rendering occurs.
* **Public Routes:** Permitted to pass through without session validation.
* **Portal Routes (`/portal/*`):** Middleware must verify an active, valid authentication session. Unauthenticated users are redirected to `/login`.
* **Admin Routes (`/admin/*`):** Middleware must verify both an active session AND administrative privileges. Unauthorized users are redirected to `/login` or a generic access denied page.

*(Note: The exact technical implementation of the authorization flow—e.g., how an admin is flagged—is a separate backend concern defined in the Database Schema).*

---

## Next.js App Router Architecture

The project strictly follows the Next.js App Router paradigm, utilizing Route Groups `(folder)` to share layouts without affecting the URL structure.

```text
app/
├── (auth)/
│   ├── login/
│   ├── signup/
│   ├── forgot-password/
│   └── reset-password/
│
├── (marketing)/
│   ├── page.tsx (Home: /)
│   ├── services/
│   ├── professions/
│   ├── industries/
│   ├── pricing/
│   ├── faq/
│   ├── contact/
│   └── legal/
│
├── (portal)/
│   └── portal/
│       ├── page.tsx (Dashboard: /portal)
│       └── ...
│
├── (admin)/
│   └── admin/
│       ├── page.tsx (Admin Home: /admin)
│       └── ...
│
└── api/
    ├── auth/
    ├── webhooks/
    ├── uploads/
    ├── notifications/
    └── payments/
```

### System Routes

Next.js provides special file conventions that must be implemented to handle system-level states across the app:

* **`loading.tsx`**: Defines the fallback UI (e.g., a skeleton or spinner) while the route content is streaming or fetching.
* **`error.tsx`**: Defines the Error Boundary UI to catch unexpected runtime errors and offer a "Try Again" recovery option.
* **`not-found.tsx`**: Defines the custom 404 page for unmatched routes or explicitly triggered 404s.

---

## Authentication Routes

These routes handle the user lifecycle for accessing the Client Portal and Admin Dashboard:

* **`/login`**: Existing user authentication.
* **`/signup`**: New user registration.
* **`/forgot-password`**: Initiate password recovery.
* **`/reset-password`**: Complete password recovery.

---

## Public Website Sitemap

**Home (`/`)**
Primary conversion page.

**Services (`/services`)**
Explain service offerings (Freelance Licence, Licence + Visa, Complete Setup, Renewals, Business Support).

**Professions (`/professions`)**
SEO + qualification. Targets broad professional groups.

**Individual Profession Page (`/professions/[slug]`)**
Target high-intent searches (e.g., `/professions/web-developer`).

**Industries (`/industries`)**
Industry-specific trust.

**Individual Industry Page (`/industries/[slug]`)**
Industry-specific SEO.

**Pricing (`/pricing`)**
Package comparison (Starter, Licence + Visa, Complete Setup).

**FAQ (`/faq`)**
Reduce objections.

**Contact (`/contact`)**
Lead capture form.

**Thank You (`/thank-you`)**
Confirmation page after successful lead form submission. Used for conversion tracking.

### Legal & Static Pages
* **`/legal/privacy-policy`**: Privacy Policy.
* **`/legal/terms-and-conditions`**: Terms & Conditions.
* **`/legal/cookie-policy`**: Cookie Policy.

---

## Client Portal Sitemap

**Dashboard (`/portal`)**
Central overview (Current Status, Recent Updates, Documents, Support).

**Application Status (`/portal/status`)**
Track licence progress timeline (Application Received -> Issued).

**Visa Tracking (`/portal/visa`)**
Track visa process (Medical, Biometrics, Approval, Issued).

**Emirates ID Tracking (`/portal/emirates-id`)**
Track ID progress.

**Documents (`/portal/documents`)**
Secure file access (Licence, Visa, Emirates ID, Receipts).

**Messages (`/portal/messages`)**
Communication history.

**Support (`/portal/support`)**
Client assistance (Create Request, WhatsApp Support, Request Callback).

**Renewal Center (`/portal/renewals`)**
Licence renewal management.

**Profile (`/portal/profile`)**
Account settings.

---

## Admin Dashboard Sitemap

**Admin Home (`/admin`)**
Operational overview widgets (Leads, Clients, Pending Actions).

**Lead Management (`/admin/leads`)**
Manage inquiries from the public contact form.

**Client Management (`/admin/clients`)**
Manage customers.

**Applications (`/admin/applications`)**
Track all submissions across all clients.

**Documents (`/admin/documents`)**
Manage uploaded files securely.

**Status Updates (`/admin/status`)**
Update client progress (triggers emails/WhatsApp).

**WhatsApp Center (`/admin/whatsapp`)**
Manage notifications.

**Email Center (`/admin/emails`)**
Email automation overview.

**Renewal Management (`/admin/renewals`)**
Track expiring licences.

**Analytics (`/admin/analytics`)**
Performance insights.

---

## API Route Organization

Next.js Route Handlers (`app/api/*`) should be logically grouped by domain. These represent architectural recommendations for the backend interface:

* **`/api/auth`**: Handlers for authentication edge cases, callbacks, or token exchanges.
* **`/api/webhooks`**: Ingress endpoints for external services (e.g., Stripe, Supabase database webhooks).
* **`/api/uploads`**: Secure endpoints for managing file streams to storage buckets.
* **`/api/notifications`**: Endpoints for triggering Resend emails or WhatsApp API messages.
* **`/api/payments`**: Endpoints managing payment intents and checkout sessions (Future expansion).

---

## Component Architecture Structure

Components are strictly organized by domain.

```text
components/
├── layout/
│   ├── Navbar
│   └── Footer
├── marketing/ (or 'sections')
│   ├── Hero
│   ├── Pricing
│   └── FAQ
├── portal/
│   ├── StatusTimeline
│   └── DocumentCenter
├── admin/
└── shared/ (or 'ui' for generic buttons, inputs)
```

## Lib Architecture

Centralized business logic and utility functions.

```text
lib/
├── supabase/
│   ├── client.ts
│   └── server.ts
├── auth/
├── whatsapp/
├── email/
├── analytics/
├── validations/ (Zod schemas)
└── utils/
```

## Engineering Conventions

To maintain a clean and scalable codebase, the following standard project directories are strongly recommended as architectural conventions:

* **`hooks/`**: Custom React hooks (e.g., `useUser`, `useUpload`).
* **`types/`**: Global TypeScript definitions and shared interfaces.
* **`constants/`**: Hardcoded configuration values, environment fallbacks, and static mappings.
* **`styles/`**: Global CSS files (e.g., `globals.css`) and Tailwind configurations.

*(Note: These are recommended organizational paradigms, not strictly mandatory structures).*

---

## Related Documents
* [Database Schema](./Database-Schema.md)
* [Tech Stack Architecture](./Tech-Stack-Architecture.md)
* [Section Contents & UI Components](../2-Design/Section-Contents-and-UI-Components.md)