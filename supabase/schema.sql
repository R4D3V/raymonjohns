-- ============================================================
-- RaymonJohns Shop — Supabase Schema
-- Run this entire file in the Supabase SQL Editor.
-- Dashboard → SQL Editor → New query → paste → Run
-- ============================================================

-- ── categories ───────────────────────────────────────────────
create table if not exists public.categories (
  id          uuid primary key default gen_random_uuid(),
  name        text not null unique,
  sort_order  integer not null default 0,
  created_at  timestamptz not null default now()
);

-- ── products ─────────────────────────────────────────────────
create table if not exists public.products (
  id               uuid primary key default gen_random_uuid(),
  slug             text not null unique,
  name             text not null,
  category         text not null,
  price            integer not null check (price >= 0),
  compare_at_price integer check (compare_at_price > 0),
  summary          text not null default '',
  description      text[] not null default '{}',
  specs            jsonb not null default '[]',
  features         text[] not null default '{}',
  stock            text not null default 'in-stock'
                     check (stock in ('in-stock', 'low-stock', 'preorder')),
  accent           text not null default 'blue'
                     check (accent in ('blue', 'coral', 'green', 'violet')),
  badge            text,
  sort_order       integer not null default 0,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);

-- ── auto-update updated_at ───────────────────────────────────
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_products_updated_at on public.products;
create trigger set_products_updated_at
  before update on public.products
  for each row execute function public.set_updated_at();

-- ── Row Level Security ────────────────────────────────────────
-- Public read access (the shop is public)
alter table public.products  enable row level security;
alter table public.categories enable row level security;

drop policy if exists "Public read products"   on public.products;
drop policy if exists "Public read categories" on public.categories;
drop policy if exists "Service role write products"    on public.products;
drop policy if exists "Service role write categories"  on public.categories;

create policy "Public read products"
  on public.products for select using (true);

create policy "Public read categories"
  on public.categories for select using (true);

-- Write access: the service-role key bypasses RLS by default, so these
-- policies are a safety net for any anon/authenticated writes that may
-- slip through. Adjust the role check to match your auth setup if needed.
create policy "Service role write products"
  on public.products
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

create policy "Service role write categories"
  on public.categories
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

-- ── product_images ──────────────────────────────────────────────
-- Stores up to 4 base64 images per product (position 0-3).
-- Run this block in Supabase SQL Editor if upgrading an existing project.
create table if not exists public.product_images (
  id           uuid primary key default gen_random_uuid(),
  product_slug text not null references public.products(slug) on delete cascade,
  position     smallint not null check (position between 0 and 3),
  data         text not null,   -- base64 data URI: "data:image/jpeg;base64,..."
  created_at   timestamptz not null default now(),
  unique (product_slug, position)
);

alter table public.product_images enable row level security;

drop policy if exists "Public read images"          on public.product_images;
drop policy if exists "Service role write images"   on public.product_images;

create policy "Public read images"
  on public.product_images for select using (true);

create policy "Service role write images"
  on public.product_images
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

-- ── Seed categories ───────────────────────────────────────────
-- Run the seed script (supabase/seed.sql) separately after this.
