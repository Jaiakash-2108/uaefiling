
# AGENTS.md — UAE Filing AI Agent Instructions

## Who reads this?
Antigravity, Cursor, Copilot, or any AI coding
agent working on this codebase.

---

## First: Read CLAUDE.md
All core project rules, tech stack, design tokens,
copy rules, WhatsApp integration, and email
integration are documented in CLAUDE.md.
Read it fully before making any changes.

---

## Non-negotiable Rules

1. NEVER change approved copy.
   Source of truth: docs/2-Design/
   UX-Copy-and-Microcopy-Framework.md

2. NEVER introduce new colors outside the
   defined token system.
   Source of truth: docs/2-Design/
   Design-Tokens-and-Theme-Architecture.md

3. NEVER use arbitrary Tailwind values.
   Use semantic token classes only.

4. NEVER expose secrets to the browser.
   RESEND_API_KEY, SUPABASE_SERVICE_ROLE_KEY,
   WHATSAPP_API_TOKEN — server-only always.

5. NEVER invent database columns, routes,
   or API endpoints not in the docs.

6. NEVER hallucinate UAE legal facts,
   visa processes, or pricing figures.

7. ALWAYS run pnpm build after changes.
   Zero TypeScript errors required.

8. ALWAYS handle loading + error states
   for every async operation.

9. ALWAYS add prefers-reduced-motion
   fallback for every animation.

10. ALWAYS use try/catch for email and
    WhatsApp sends — failures must never
    break the main user flow.

---

## When in doubt
Check /docs folder first.
If answer not there — ask the user.
Do NOT assume. Do NOT invent.
Mark unknowns with TODO comments.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->