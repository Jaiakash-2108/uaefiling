# UAE Filing — Database Schema

## Document Metadata & Governance

**Status:** Incomplete / Draft
**Version:** 1.0
**Owner:** Engineering Lead
**Last Updated:** June 2026
**Review Cycle:** Quarterly

## Purpose

This document outlines the architecture, schemas, storage buckets, and security rules for the Supabase (PostgreSQL) backend.

> [!WARNING]
> **Implementation Status: Incomplete / Draft**
> The current business requirements establish the *need* for specific tables (e.g., users, leads, applications), but the exact column definitions, types, foreign key relationships, and RLS policies have NOT been fully finalized. 
> 
> The schemas below contain **assumed placeholders (marked as TODO)** that require final technical confirmation before production implementation. Do not infer or invent database structures not explicitly documented here.

---

## Authentication & Authorization

**Provider:** Supabase Auth
**Methods:** Email/Password, Google OAuth

When a user signs up (or logs in via Google), a record is generated in the system `auth.users` table. A trigger should automatically create a corresponding record in the public `profiles` table.

*(TODO: Document the exact Postgres trigger function for syncing `auth.users` to `public.profiles`)*.

*(TODO: Define the administrative authorization strategy. The team must evaluate and choose one of the following options for admin privileges: a dedicated `user_roles` table, Supabase Custom Claims, or Organization Membership).*

---

## Database Design Principles

To ensure consistency and maintainability, all tables must adhere to the following engineering principles:

* **Primary Keys:** Use `UUID` for all primary keys.
* **Timestamps:** Store all timestamps in `UTC`.
* **Row Level Security (RLS):** Must be enabled by default on all public tables.
* **Constraints:** Enforce data integrity with Foreign Key constraints.
* **Normalization:** Avoid duplicated data and normalize where appropriate.
* **Storage:** Prefer signed URLs for private file access.
* **Logic Separation:** Keep business logic outside the database where practical.

---

## Timestamp Conventions

As a design recommendation, every production table should eventually define the following timestamp columns:

* `created_at` (Timestamp, default to now())
* `updated_at` (Timestamp, updated via trigger)
* `deleted_at` (Optional Timestamp, for soft deletes where applicable)

---

## Entity Relationship Diagram (ERD) Overview

* **Profiles (1)** -> **(M) Applications** (A single client profile can have multiple application processes, e.g., renewal).
* **Applications (1)** -> **(1) Visa Tracking** (1-to-1 relationship linking an application to its visa process).
* **Applications (1)** -> **(1) Emirates ID Tracking**
* **Profiles (1)** -> **(M) Documents** (Client uploads their passport, visa, etc.).

*(TODO: Generate a Mermaid ERD diagram once the foreign keys are finalized).*

---

## Core Tables

### 1. `profiles`
*(Stores extended client information linked to auth.users)*
* `id` (UUID, Primary Key, Foreign Key to `auth.users.id`)
* `full_name` (Text)
* `phone_number` (Text)
* `profession` (Text, optional)
* `created_at` (Timestamp)
* *(TODO: Confirm additional fields like `current_location`)*

### 2. `leads`
*(Stores inquiries from the contact form)*
* `id` (UUID, Primary Key)
* `name` (Text)
* `email` (Text)
* `whatsapp` (Text)
* `profession` (Text)
* `visa_status` (Text)
* `lead_source` (Text)
* `created_at` (Timestamp)

### 3. `applications`
*(Core tracking for the freelance licence process)*
* `id` (UUID, Primary Key)
* `profile_id` (UUID, Foreign Key to `profiles.id`)
* `package_type` (Enum: 'Starter', 'Licence + Visa', 'Complete Setup')
* `status` (Enum placeholder: 'Application Received', 'Documents Verified', 'Submitted', 'Under Review', 'Approved', 'Licence Issued')
* `created_at` (Timestamp)
* `updated_at` (Timestamp)

*(TODO: The listed status values are examples, not final. The complete workflow must be confirmed with the UAE Filing operations team, as different Free Zones may require different application stages).*

### 4. `visa_tracking`
*(TODO: Confirm columns. Assumed relationship to applications.id. Status tracking for Medical, Biometrics, Approval, Issued).*

### 5. `emirates_id_tracking`
*(TODO: Confirm columns. Assumed relationship to applications.id).*

### 6. `documents`
*(Tracks files uploaded to Storage)*
* `id` (UUID, Primary Key)
* `profile_id` (UUID, Foreign Key to `profiles.id`)
* `document_type` (Enum: 'Passport', 'Visa', 'Emirates ID', 'Licence Files', 'Receipts', 'Certificates')
* `storage_path` (Text, reference to bucket path)
* `verified` (Boolean, default: false)
* `created_at` (Timestamp)

### 7. `support_requests`
*(Tracks client tickets)*
* `id` (UUID, Primary Key)
* `profile_id` (UUID, Foreign Key to `profiles.id`)
* `type` (Enum: 'Assistance', 'Callback')
* `status` (Text)
* `created_at` (Timestamp)

### Pending Tables (Future Considerations)
These are future considerations rather than planned implementations.
* `messages`
* `renewals`
* `notifications`
* `clients` *(TODO: Evaluate whether `profiles` should remain the single source of truth or whether a separate `clients` table is actually required).*

---

## Row Level Security (RLS) Policies

All tables must have RLS enabled to ensure strict privacy.

> [!CAUTION]
> **TODO: Explicit RLS policies must be written and tested.**
> * **Public Rules:** Leads table can allow `INSERT` from anonymous roles (for the contact form) but `SELECT` only by Admins.
> * **Client Rules:** `profiles`, `applications`, and `documents` must ONLY allow `SELECT` and `INSERT` if `auth.uid() = profile_id`.
> * **Admin Rules:** Admin dashboard users can `SELECT`, `UPDATE`, `INSERT` on all tables once the admin authorization strategy is finalized.

---

## Storage Buckets

Supabase Storage is used for securing sensitive client documents.

**Security Principle:** Sensitive documents should only be accessible via the Client Portal utilizing signed URLs. Do NOT make these buckets public.

*(TODO: The final bucket structure is subject to confirmation. The team must decide between using multiple specific buckets (e.g., `passport-files`, `visa-files`) or a single `client-documents` bucket containing logical folders).*

Possible Bucket Configurations:
* `passport-files` (Private)
* `visa-files` (Private)
* `licence-files` (Private)
* `emirates-id-files` (Private)
* `client-documents` (Private)

*(TODO: Define the RLS policies for storage bucket access once the structure is finalized).*

---

## Audit Logging (TODO)

Future implementations may include an audit log to record system events. These logs may capture:
* Login events
* Document uploads
* Application status changes
* Administrative actions

---

## Notification Architecture (TODO)

Future implementations may require a robust notification system. Possible notification channels include:
* Email
* WhatsApp
* In-App notifications

---

## Future Expansion

The schema should be designed anticipating the following additions without requiring heavy migrations:
* Stripe Subscription/Payment tracking.
* Automated WhatsApp log history.
* CRM internal note logging.

---

## Related Documents
* [Tech Stack Architecture](./Tech-Stack-Architecture.md)
* [System Sitemap & Routing](./System-Sitemap-and-Routing.md)
* [Developer README](./Developer-README.md)
