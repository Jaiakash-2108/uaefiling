# UAE Filing — UX Copy & Microcopy Framework

## Document Metadata & Governance

**Status:** Active – Single Source of Truth (SSOT)
**Version:** 1.0
**Owner:** Design Team
**Last Updated:** June 2026
**Review Cycle:** Quarterly

## Purpose

This document defines the communication system of UAE Filing.

It serves as the single source of truth for:
* Headlines
* Subheadlines
* CTA Buttons
* Forms
* Validation Messages
* Success States
* Error States
* Emails
* WhatsApp Notifications
* Client Portal Messages

The goal is to create a consistent voice across every touchpoint.

---

## Brand Voice

### Core Personality

UAE Filing should sound:
* Professional
* Helpful
* Clear
* Confident
* Human

**Not:**
* Salesy
* Pushy
* Corporate
* Legal Jargon
* Overly Casual

### Voice Principle

We simplify complexity.
Visitors should feel: *Someone is guiding me.*
Not: *Someone is selling to me.*

### Core Brand Statement

**Primary Message:**
> You have the skill. We'll make it legal.

This is the most important line in the brand.

### Copy Principles

* **Outcome-first writing:** Start sentences with the benefit or the goal, then explain the action. (e.g., "To download your licence, verify your identity" instead of "Verify your identity to download your licence.")
* **One idea per sentence:** Keep sentences focused to reduce cognitive load. If it has an "and" or a "but," consider making it two sentences.
* **Plain English:** Write the way people speak. Avoid complex vocabulary where simple words work just as well.
* **Confidence without hype:** State facts simply. Don't use exclamation marks or superlative adjectives (like "the best" or "revolutionary"). Let the process speak for itself.
* **Active voice:** The subject should perform the action. (e.g., "We will review your application" instead of "Your application will be reviewed by us.")
* **Consistency rules:** Always use the same term for the same concept. Don't switch between "licence" and "permit." It's always "licence."

### Reading Level Guidelines

* **Target reading level:** 6th to 8th-grade reading level.
* **Sentence length:** Max 15–20 words per sentence.
* **Paragraph length:** Max 2–3 sentences per paragraph.
* **Scan-friendly formatting:** Use bullet points, bold text for key terms, and clear headings. Users don't read; they scan.

### Tone Matrix

| Context | Primary Emotion | Tone Directive | Example |
| :--- | :--- | :--- | :--- |
| **Marketing Pages** | Inspirational, Clear | Confident, outcome-focused, simple. | "Get your UAE freelance licence in days, not weeks." |
| **Dashboard** | Organized, Informative | Direct, helpful, reassuring. | "Your documents are under review." |
| **Forms** | Helpful, Guiding | Instructional, unambiguous, polite. | "Enter your legal name as it appears on your passport." |
| **Emails** | Professional, Personal | Human, direct, structured. | "Hi Sarah, your application has been approved." |
| **WhatsApp** | Conversational, Quick | Brief, friendly, actionable. | "Hello! We've received your application. We'll update you here soon." |
| **Error Messages** | Calm, Helpful | Non-blaming, clear next steps. | "We couldn't process this file. Please upload a PDF under 5MB." |
| **Success Messages** | Reassuring | Positive, confirming, concise. | "Document uploaded successfully." |
| **Legal Content** | Trustworthy, Exact | Precise, uncompromising, clear. | "By proceeding, you agree to our Terms of Service." |

---

## Website Copy

*(For the visual layout of these sections, see [Section Contents & UI Components](./Section-Contents-and-UI-Components.md))*

### Hero Section

**Headline:**
> You have the skill. We'll make it legal.

**Subheadline:**
> Get your UAE freelance licence in days, not weeks.
> No sponsor. No office. No complications.

**Primary CTA:** `Get Your Licence`
**Secondary CTA:** `Check Eligibility`

**Trust Signals:**
* 500+ Freelancers Licensed
* 3-5 Working Days
* 0% Personal Income Tax
* Bank Setup Included

### Navigation

**Links:** Home, Services, Professions, Industries, Pricing, FAQ, Contact
**Navbar CTA:** `Get Started`

### Pain Points Section

**Headline:**
> The freelance dream is simple. The setup is not.

**Subheadline:**
> Traditional agencies are expensive, government portals are complex, and banking setup is filled with hidden roadblocks. We change that.

### Why UAE Filing Section

**Headline:**
> A premium legal advisor in your pocket.

**Subheadline:**
> We combine legal expertise with high-end technology, ensuring your licence is processed with complete speed, zero paperwork, and absolute cost transparency.

### Services Section

* **Freelance Licence:** Get legally licensed to work as a freelancer in the UAE.
* **Licence + Visa:** Secure your licence and residency process through one guided service.
* **Complete Setup:** A complete freelance setup experience from licensing to banking support.

### Professions Section

**Headline:**
> Tailored for digital professionals.

**Subheadline:**
> We support designers, developers, writers, marketers, and consultants. Select your activity and establish a legally recognized UAE freelance business.

### Industries Section

**Headline:**
> Officially licensed across global industries.

**Subheadline:**
> From technology and media to education and creative arts, get licensed under the correct economic sector with no operational friction.

### Process Section

* **Step 1:** `Choose Your Package` (Select the setup path that matches your goals.)
* **Step 2:** `Submit Documents` (Upload the required documents securely.)
* **Step 3:** `Application Processing` (We handle the paperwork and submission process.)
* **Step 4:** `Receive Your Licence` (Start operating legally in the UAE.)

### Pricing CTAs

* **Starter:** `Choose Starter`
* **Licence + Visa:** `Choose Licence + Visa`
* **Complete Setup:** `Choose Complete Setup`

### Testimonials Section

**Headline:**
> Backed by hundreds of successful freelancers.

**Subheadline:**
> Hear from digital professionals who bypassed the bureaucracy and launched their businesses in the UAE.

### FAQ Section

**Headline:** Questions, answered.
**Subheadline:** Everything you need to know before getting started.

### Contact Section

**Headline:** Let's make your freelance journey official.
**Subheadline:** Tell us about your situation and we'll guide you through the next steps.

### Footer

* **Tagline:** `You have the skill. We'll make it legal.`
* **Column Headers:** `Company`, `Services`, `Resources`, `Contact`, `Legal`

---

## Microcopy Standards

Every small piece of text should guide the user forward without friction.

* **Buttons:** Start with a strong verb. Describe exactly what happens when clicked. (e.g., `Save Changes`, `Submit Application`, `Download Licence`). Avoid vague labels like `Click Here` or `Submit`.
* **Labels:** Keep them short and descriptive. Usually 1-3 words. Use sentence case. (e.g., `Passport copy`).
* **Helper text:** Provide proactive guidance below form fields to prevent errors. (e.g., "Must be a clear color copy in PDF format.")
* **Tooltips:** Use only for highly specific clarification or to explain "Why do we need this?". Keep to one short sentence.
* **Placeholders:** Show an example of the expected input format. Do not use placeholders as a replacement for labels.
* **Validation:** Validations should trigger on blur (when the user leaves the field), not while they are typing.
* **Empty states:** Never leave a screen blank. Explain what goes here and how the user can populate it.

---

## Forms & Validation

### Form Labels & Placeholders

* **Full Name:** `Enter your full name`
* **Email Address:** `you@example.com`
* **WhatsApp Number:** `+971 XX XXX XXXX`
* **Profession:** `Select your profession`
* **Current Location:** (No specific placeholder)
* **Message:** `Tell us about your freelance goals`

**Form CTA:** `Get My Licence`

### Validation Messages

* **Required Field:** This field is required.
* **Invalid Email:** Please enter a valid email address.
* **Invalid Phone:** Please enter a valid WhatsApp number.

### Success & Error States

* **Form Submitted:** Thank you. We'll review your details and contact you shortly.
* **Consultation Booked:** Your consultation has been booked successfully.
* **Document Uploaded:** Your document has been uploaded successfully.
* **General Error:** Something went wrong. Please try again.
* **Upload Error:** We couldn't upload your file. Please try again.
* **Authentication Error:** Unable to verify your account. Please try again.

### Error Recovery Guidelines

Every error message must follow these rules:
* **Explain what happened:** Tell the user exactly what went wrong.
* **Explain what to do next:** Provide a clear, actionable solution.
* **Avoid technical jargon:** Don't expose system errors, codes, or developer terminology to the user.
* **Reduce user anxiety:** Be polite, calm, and reassuring. Never blame the user.

**Example:**
* *Bad:* "Error 500: Invalid file type."
* *Good:* "We couldn't upload this file. Please ensure it's a PDF or JPG under 5MB and try again."

---

## Authentication Copy

### Login Page

**Headline:**
> Access your dashboard.

* **Email field label:** `Email Address`
* **Password field label:** `Password`
* **Submit CTA:** `Log In`
* **Forgot password link text:** `Forgot password?`
* **Error message:** `Invalid credentials. Please check your email and password and try again.`

### Signup Page

**Headline:**
> Start your freelance setup.

* **Field labels:** Reuses `Full Name`, `Email Address`, and `WhatsApp Number` from the [Forms & Validation](#forms--validation) section.
* **Submit CTA:** `Create Account`
* **Terms acceptance microcopy:** `By creating an account, you agree to our Terms of Service and Privacy Policy.`

### Forgot Password Page

**Headline:**
> Reset your password.

* **Instruction text:** `Enter the email address associated with your account and we'll send you a recovery link.`
* **Submit CTA:** `Send Reset Link`
* **Success confirmation message:** `If an account exists for this email, we have sent a password reset link.`

### Reset Password Page

**Headline:**
> Choose a new password.

* **New password field label:** `New Password`
* **Confirm password field label:** `Confirm New Password`
* **Submit CTA:** `Update Password`
* **Success message:** `Your password has been reset successfully. You can now log in.`

---

## Client Dashboard Copy

**Google Login Button:** `Continue with Google`
**Portal Welcome:** `Welcome back.`
**Dashboard Title:** `Your UAE Filing Dashboard`

**Section Titles:**
* Application Status
* Documents
* Support
* Renewal Status

### Application Status Messages

* **Received:** Application Received (We've received your application and are reviewing your documents.)
* **Verified:** Documents Verified
* **Submitted:** Application Submitted
* **Review:** Under Review
* **Approved:** Application Approved
* **Issued:** Licence Issued

### Visa Tracking Messages

* **Medical:** Medical Exam Scheduled (Your medical examination has been booked. Please check your email for the location and preparation guidelines.)
* **Biometrics:** Biometrics Scheduled (Your biometrics appointment is confirmed. Please attend the designated center on your scheduled date.)
* **Approval:** Visa Under Review (Your residency visa application is being reviewed by the immigration department.)
* **Issued:** Visa Issued (Your UAE residency visa has been issued successfully.)

### Emirates ID Tracking Messages

* **Submitted:** ID Application Submitted (Your Emirates ID application has been submitted to the authorities.) <!-- TODO: confirm exact ID tracking stages with ops team -->
* **Biometrics:** Biometrics Captured (Your biometrics data has been successfully recorded and linked to your profile.) <!-- TODO: confirm exact ID tracking stages with ops team -->
* **Ready:** Card Ready (Your physical Emirates ID card is printed and ready for delivery.) <!-- TODO: confirm exact ID tracking stages with ops team -->

### Empty State Copy

Empty states are opportunities to guide the user. They must tell the user what the space is for and the action required.

* **No applications:** "You haven't started an application yet. Click 'Start Application' to begin."
* **No documents:** "No documents uploaded. We will let you know when documents are required."
* **No notifications:** "You're all caught up. There are no new notifications."
* **No messages:** "No messages yet. If you need help, reach out to our support team."
* **No search results:** "We couldn't find any results for that search. Try adjusting your terms."

### Loading State Copy

Keep loading messages specific so the user knows the system is working.

* **Forms:** "Saving details..."
* **Uploads:** "Uploading document..."
* **Dashboard:** "Loading your dashboard..."
* **Status updates:** "Refreshing status..."
* **Payments:** "Processing payment securely... Please don't close this window."

### Confirmation Dialog Patterns

Before destructive or significant actions, ask for clear confirmation.

* **Delete confirmation:**
  * Title: `Delete document?`
  * Body: `Are you sure you want to delete this document? This action cannot be undone.`
  * CTA: `Delete` / `Cancel`
* **Cancel confirmation:**
  * Title: `Cancel application?`
  * Body: `Are you sure you want to cancel your application? Your progress will be lost.`
  * CTA: `Yes, Cancel` / `Go Back`
* **Submit confirmation:**
  * Title: `Submit for review?`
  * Body: `Have you verified all your details? You won't be able to edit them once submitted.`
  * CTA: `Submit Application` / `Review Again`
* **Logout confirmation:**
  * Title: `Log out?`
  * Body: `Are you sure you want to log out of your dashboard?`
  * CTA: `Log Out` / `Cancel`

### Additional Portal Pages Copy

#### Messages Page
* **Page intro text:** `Review and respond to messages from your dedicated licensing agent.`
* **Empty state:** Reuses `No messages` from the [Empty State Copy](#empty-state-copy) section.

#### Renewal Center Page
* **Headline:**
  > Licence Renewal
* **Explanation text:** `Your freelance licence must be renewed annually to remain active. Review your renewal timeline and requirements below.`
* **CTA:** `Start Renewal Process`
* **Status: Renewal Upcoming:** `Renewal Upcoming (Your licence renewal window will open soon. We'll notify you when it's time to begin.)`
* **Status: Renewal Due:** `Renewal Due (Your licence renewal is due. Please start the process to avoid late fees or suspension.)`
* **Status: Renewal Complete:** `Renewal Complete (Thank you. Your licence has been renewed successfully for another year.)`

#### Profile Page
* **Headline:**
  > Your Profile
* **Section labels:**
  * Name: `Legal Name`
  * Email: `Email Address`
  * WhatsApp: `WhatsApp Number`
  * Profession: `Registered Profession`
* **Save confirmation message:** `Profile details updated successfully.`

---

## Communication Channels

### WhatsApp Support

* **Floating Button:** `Need Help?`
* **Primary CTA:** `Chat on WhatsApp`
* **Secondary CTA:** `Request a Callback`

### Support Ticket Copy

* **Form Headline:** `Create a Support Request`
* **Issue Type Label:** `Select Issue Type`
* **Issue Type Options:** `Document Issue` | `Application Status` | `Payment` | `Account Access` | `Other`
* **Description Label:** `Describe your issue`
* **Description Placeholder:** `Provide details about your request...`
* **Submit CTA:** `Submit Request`
* **Confirmation Message:** `Your support request has been submitted. Our team will review it and reply within 24 hours.`

### WhatsApp Notifications

* **Application Received:** Hello {{Name}}, We've received your application and will begin processing it shortly.
* **Application Submitted:** Hello {{Name}}, Your freelance licence application has been submitted successfully.
* **Application Approved:** Hello {{Name}}, Great news. Your application has been approved.
* **Licence Issued:** Hello {{Name}}, Your UAE freelance licence has been issued successfully.
* **Renewal Notification:** Hello {{Name}}, Your licence renewal date is approaching. Please log in to your dashboard for next steps.

### Email Templates

* **Welcome Email:** 
  * *Subject:* Welcome to UAE Filing
  * *Body:* Hi {{Name}}, Thank you for choosing UAE Filing. We're excited to help you establish your freelance career legally in the UAE. You can now track your application, upload documents, receive updates, and contact support. Let's get started.
* **Consultation Confirmation:** 
  * *Subject:* Your Consultation Has Been Confirmed
* **Status Update:** 
  * *Subject:* Your Application Status Has Been Updated
  * *Body:* Hi {{Name}}, Your application has moved to: {{Status}}. Log in to your dashboard for full details.
* **Document Ready:** 
  * *Subject:* Your Documents Are Ready
  * *Body:* Your documents are now available in your dashboard. Please log in to download them securely.
* **Renewal Reminder:** 
  * *Subject:* Your Licence Renewal Is Approaching

---

## CTA Writing Rules

**Primary CTA:** Always action-oriented. (Examples: Get Your Licence, Get Started, Book Consultation).
**Secondary CTA:** Always lower commitment. (Examples: Check Eligibility, Learn More, View Pricing).

**Always:**
* Short Sentences
* Clear Language
* Human Tone
* Outcome Focused

**Never Use:**
* Legal Jargon
* Corporate Buzzwords
* Long Paragraphs
* Aggressive Sales Copy

---

## Accessibility Writing Standards

Write for all users and all devices, including screen readers.

* **Descriptive button labels:** Avoid `Read More` or `Click Here`. Use `Read our Pricing Guide` or `Download Licence`. Screen reader users often tab between links and need context.
* **Link text rules:** Links should describe the destination. Ensure the linked text is meaningful on its own.
* **Heading clarity:** Keep headings hierarchical (H1, H2, H3) and descriptive. Do not skip heading levels just for styling purposes.
* **Screen reader friendliness:** Write alt text for functional images. Ensure form labels are programmatically associated with inputs.
* **Plain language:** Using simple, clear language helps users with cognitive disabilities and non-native speakers understand the content faster.

---

## Localization & Internationalization

Content should be ready for potential future localization, especially into Arabic.

* **Arabic translation readiness:** Write concise copy. Arabic text often expands up to 30% compared to English. Ensure UI components have room to breathe. Avoid text embedded in images.
* **Date formats:** Always use unambiguous formats. E.g., "12 Oct 2026" instead of "10/12/26".
* **Currency:** Always specify the currency explicitly. E.g., "AED 5,000".
* **Numbers:** Use standard numerals (1, 2, 3). For large numbers, use commas (1,000).
* **Phone numbers:** Always include the international dialling code in a standard format (e.g., `+971 50 123 4567`).
* **Avoiding idioms:** Avoid culturally specific slang, idioms, or metaphors that do not translate well (e.g., "hit it out of the park" or "piece of cake").

---

## AI Content Generation Guidelines

When AI assistants generate future copy, they must adhere strictly to these constraints:

* **Follow the brand voice:** Content must remain professional, helpful, clear, confident, and human.
* **Never invent legal information:** AI must only pull from approved source documentation. It cannot "hallucinate" or guess UAE laws, visa processes, or pricing.
* **Never promise approvals:** Use language like "We will review your application" instead of "We will approve your application."
* **Never exaggerate claims:** Stick to facts. Do not use hyperbolic marketing speak.
* **Always prioritize clarity over marketing:** If a choice must be made between being clever and being clear, the AI must choose clarity.

---

## Copy Governance

Keeping this document a living, accurate single source of truth.

* **Maintaining consistency:** All copy updates in the app or website must first be validated against these guidelines.
* **Reviewing new copy:** New significant content additions (new features, new email flows) must undergo a design and copy review to ensure tone alignment.
* **Avoiding duplicate messaging:** Always check the existing repository before creating new status messages or empty states. Reuse existing patterns wherever possible.
* **Updating documentation:** As the product evolves, update this framework. If a new error state or confirmation dialogue pattern is introduced, it must be documented here.

---

## Success Criteria

A successful copy system should make users feel: Informed, Guided, Confident, and Supported. The voice should consistently reinforce UAE Filing's role as a premium licensing advisor helping freelancers navigate the UAE licensing process with clarity and confidence.

---

## Related Documents
* [Section Contents & UI Components](./Section-Contents-and-UI-Components.md)
* [Design Tokens & Theme Architecture](./Design-Tokens-and-Theme-Architecture.md)
* [Organic User Journey](../1-Strategy/Organic-User-Journey.md)
* [Paid User Journey](../1-Strategy/Paid-User-Journey.md)