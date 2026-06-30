-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Function to automatically update 'updated_at' timestamps
create or replace function update_updated_at_column()
returns trigger as $$
begin
    new.updated_at = now();
    return new;
end;
$$ language 'plpgsql';

-- ======================================================
-- 1. Profiles Table
-- ======================================================
create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  full_name text,
  phone_number text,
  profession text,
  created_at timestamp with time zone default now() not null,
  updated_at timestamp with time zone default now() not null
);

-- Trigger to update 'updated_at' for profiles
create trigger update_profiles_updated_at
  before update on public.profiles
  for each row execute function update_updated_at_column();

-- Function and trigger to handle new user signup and create a profile automatically
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ======================================================
-- 2. Leads Table
-- ======================================================
create table public.leads (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  whatsapp text,
  profession text,
  visa_status text,
  lead_source text,
  created_at timestamp with time zone default now() not null
);

-- ======================================================
-- 3. Applications Table
-- ======================================================
create table public.applications (
  id uuid default uuid_generate_v4() primary key,
  profile_id uuid references public.profiles(id) on delete cascade not null,
  package_type text,
  status text default 'Application Received',
  created_at timestamp with time zone default now() not null,
  updated_at timestamp with time zone default now() not null
);

create trigger update_applications_updated_at
  before update on public.applications
  for each row execute function update_updated_at_column();

-- ======================================================
-- 4. Documents Table
-- ======================================================
create table public.documents (
  id uuid default uuid_generate_v4() primary key,
  profile_id uuid references public.profiles(id) on delete cascade not null,
  document_type text not null,
  storage_path text not null,
  verified boolean default false not null,
  created_at timestamp with time zone default now() not null,
  updated_at timestamp with time zone default now() not null
);

create trigger update_documents_updated_at
  before update on public.documents
  for each row execute function update_updated_at_column();

-- ======================================================
-- 5. Support Requests Table
-- ======================================================
create table public.support_requests (
  id uuid default uuid_generate_v4() primary key,
  profile_id uuid references public.profiles(id) on delete cascade not null,
  type text not null,
  description text,
  status text default 'Open',
  created_at timestamp with time zone default now() not null,
  updated_at timestamp with time zone default now() not null
);

create trigger update_support_requests_updated_at
  before update on public.support_requests
  for each row execute function update_updated_at_column();


-- ======================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ======================================================

-- Enable RLS on all tables
alter table public.profiles enable row level security;
alter table public.leads enable row level security;
alter table public.applications enable row level security;
alter table public.documents enable row level security;
alter table public.support_requests enable row level security;

-- ------------------------------------------------------
-- Leads Policies
-- ------------------------------------------------------
-- INSERT allowed for anon (contact form)
create policy "Allow anonymous inserts for leads" on public.leads for insert with check (true);
-- Note: No SELECT policy is created here for leads. 
-- This means NO regular user can select leads, effectively making it "Admin only" 
-- (Admins will bypass this using the Supabase Service Role Key).

-- ------------------------------------------------------
-- Profiles Policies
-- ------------------------------------------------------
create policy "Users can view own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);

-- ------------------------------------------------------
-- Applications Policies
-- ------------------------------------------------------
create policy "Users can view own applications" on public.applications for select using (auth.uid() = profile_id);
create policy "Users can insert own applications" on public.applications for insert with check (auth.uid() = profile_id);

-- ------------------------------------------------------
-- Documents Policies
-- ------------------------------------------------------
create policy "Users can view own documents" on public.documents for select using (auth.uid() = profile_id);
create policy "Users can insert own documents" on public.documents for insert with check (auth.uid() = profile_id);

-- ------------------------------------------------------
-- Support Requests Policies
-- ------------------------------------------------------
create policy "Users can view own support requests" on public.support_requests for select using (auth.uid() = profile_id);
create policy "Users can insert own support requests" on public.support_requests for insert with check (auth.uid() = profile_id);
