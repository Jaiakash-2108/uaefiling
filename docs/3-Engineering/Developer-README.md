# UAE Filing — Developer README

## Document Metadata & Governance

**Status:** Active – Single Source of Truth (SSOT)
**Version:** 1.0
**Owner:** Engineering Lead
**Last Updated:** June 2026
**Review Cycle:** Quarterly

## Project Overview

UAE Filing is a premium, full-stack Next.js web application designed to help freelancers become legally established in the UAE. The platform serves as a lead generation marketing site, an applicant tracking dashboard (Admin), and a secure portal (Client) where users can upload documents and track their application status.

---

## Tech Stack Overview

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Motion & Animation:** Framer Motion, Lenis
* **Backend & Database:** Supabase (PostgreSQL)
* **Authentication:** Supabase Auth (Email + Google OAuth)
* **Emails:** Resend
* **Hosting:** Vercel

*(See [Tech Stack Architecture](./Tech-Stack-Architecture.md) for full architectural justifications).*

---

## System Requirements & Prerequisites

Ensure your development environment meets the following requirements before starting:

* **Supported OS:** Windows, macOS, Linux
* **Node.js:** v22 LTS (Required)
* **Package Manager:** `pnpm`
* **Version Control:** Git
* **Recommended Browsers:** Google Chrome, Safari, Firefox (Latest versions)

### Recommended VS Code Extensions
To maintain code quality and consistency, we recommend installing the following VS Code extensions:
* **ESLint:** Enforces JavaScript/TypeScript linting rules.
* **Prettier:** Enforces code formatting.
* **Tailwind CSS IntelliSense:** Provides autocomplete and linting for Tailwind classes.
* **Error Lens:** Highlights errors and warnings inline.
* **GitLens:** Supercharges Git capabilities within VS Code.

---

## Installation & Local Development

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd uaefiling
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Environment Setup:**
   Duplicate the example environment file and fill in your keys:
   ```bash
   cp .env.example .env.local
   ```
   *(See the Environment Variables section below for details).*

4. **Start the development server:**
   ```bash
   pnpm dev
   ```
   The application will be available at `http://localhost:3000`.

---

## Available Scripts

The project includes several built-in scripts to assist with development:

* **`pnpm dev`**: Starts the local development server.
* **`pnpm build`**: Compiles the application for production deployment.
* **`pnpm lint`**: Runs ESLint to catch syntax and stylistic errors.
* **`pnpm typecheck`**: Runs the TypeScript compiler to ensure strict type safety without emitting files.
* **`pnpm format`**: Formats all codebase files using Prettier.

---

## Developer Checklist

Before beginning any local development task, ensure you have completed the following:

- [ ] Node v22 LTS and `pnpm` are installed.
- [ ] VS Code extensions (ESLint, Prettier, Tailwind) are installed and active.
- [ ] Local dependencies are up-to-date (`pnpm install`).
- [ ] `.env.local` is fully configured with required API keys.
- [ ] `pnpm typecheck` and `pnpm lint` pass on the `main` branch.

---

## Environment Variables (.env.example)

The following environment variables are required for the application to function. 

### Security Best Practices
> [!CAUTION]
> **Never commit secrets to version control.** 
> * Do not commit `.env.local`.
> * Keys prefixed with `NEXT_PUBLIC_` are intentionally exposed to the browser.
> * Keep all other keys (e.g., Supabase service role keys, Resend API keys, JWT secrets) strictly secret. Exposing the Service Role key will allow attackers to bypass Row Level Security entirely.

```env
# ==========================================
# SUPABASE
# ==========================================
# Description: Required to connect to the Supabase Postgres DB.
# Example: https://xxxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_URL=

# Description: Public anonymous key for client-side Supabase operations.
# Example: eyJhb...
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Description: (Optional/Admin) Service role key to bypass RLS in edge functions or admin scripts.
# WARNING: NEVER expose this to the frontend.
SUPABASE_SERVICE_ROLE_KEY=

# ==========================================
# AUTHENTICATION (Google OAuth)
# ==========================================
# Description: Required for "Continue with Google" flow in the Portal.
# Configured in GCP console.
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# ==========================================
# EMAIL (Resend)
# ==========================================
# Description: API Key to trigger transactional emails.
# Example: re_xxxxxxx
RESEND_API_KEY=

# ==========================================
# ANALYTICS (Optional for Local Dev)
# ==========================================
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_CLARITY_PROJECT_ID=
```

---

## Build & Deployment

**Production Build:**
```bash
pnpm build
```

**Deployment:**
The project is configured for seamless deployment on **Vercel**. 
1. Connect the GitHub repository to a Vercel project.
2. Add all production Environment Variables in the Vercel dashboard.
3. Vercel automatically deploys pushes to the `main` branch.

### Deployment Checklist

Before approving a production deployment, verify the following:
- [ ] The build succeeds (`pnpm build`).
- [ ] Zero linting errors exist (`pnpm lint`).
- [ ] Zero TypeScript errors exist (`pnpm typecheck`).
- [ ] All production environment variables are correctly populated in the Vercel dashboard.
- [ ] The production Supabase instance has Row Level Security (RLS) properly enabled.

---

## Folder Structure

The project follows the standard Next.js App Router paradigm. 

*(For a complete breakdown of routing and the `app/` directory, refer to [System Sitemap & Routing](./System-Sitemap-and-Routing.md)).*

---

## Coding Standards & Guidelines

* **Strict TypeScript:** Do not use `any`. Always define proper types or interfaces.
* **Component Styling:** Use Tailwind utility classes. For complex layouts, refer to the [Design Tokens](../2-Design/Design-Tokens-and-Theme-Architecture.md).
* **Copywriting:** Do not hardcode raw copy variations. Reference the [UX Copy Framework](../2-Design/UX-Copy-and-Microcopy-Framework.md).
* **Animations:** Wrap complex animated components in "use client" directives since Framer Motion requires browser APIs.

---

## Git Workflow & Conventions

The project enforces strict branch naming and conventional commits.

### Branch Naming
* `feature/*`: For new features (e.g., `feature/client-dashboard`)
* `bugfix/*`: For non-critical bug fixes (e.g., `bugfix/login-form-validation`)
* `hotfix/*`: For critical production fixes (e.g., `hotfix/stripe-webhook-crash`)
* `docs/*`: For documentation updates (e.g., `docs/api-routes`)

### Conventional Commits
All commits should follow the Conventional Commits specification:
* `feat:` A new feature.
* `fix:` A bug fix.
* `docs:` Documentation only changes.
* `refactor:` A code change that neither fixes a bug nor adds a feature.
* `chore:` Changes to the build process or auxiliary tools.
* `test:` Adding missing tests or correcting existing tests.

**Workflow Steps:**
1. Create a branch: `git checkout -b feature/your-feature-name`
2. Commit your changes: `git commit -m "feat: description of changes"`
3. Push the branch: `git push origin feature/your-feature-name`
4. Open a Pull Request against `main`.

---

## Testing Roadmap (TODO)

A comprehensive testing strategy is planned for future implementation. The targeted architecture will include:
* **Unit Testing:** Validating individual utility functions, hooks, and Zod schemas (using Jest or Vitest).
* **Integration Testing:** Testing API route handlers and database queries.
* **End-to-End (E2E) Testing:** Automating the core user flows (Lead submission, Portal login, Document upload) using Playwright or Cypress.

---

## Troubleshooting

* **Build fails on Vercel but works locally:** Check for TypeScript type errors or missing environment variables in the Vercel dashboard.
* **Supabase connection issues:** Ensure your IP isn't blocked by Supabase network restrictions, and verify that your `NEXT_PUBLIC_SUPABASE_URL` is correct.

---

## Related Documents
* [Tech Stack Architecture](./Tech-Stack-Architecture.md)
* [Database Schema](./Database-Schema.md)
* [System Sitemap & Routing](./System-Sitemap-and-Routing.md)
