# Supabase Setup Guide — RaymonJohns Shop

Follow these steps once. After this your products live in a real database —
add, edit, or delete from the admin panel and changes appear on the shop
within 60 seconds, no redeploy needed.

---

## Step 1 — Create a Supabase project

1. Go to https://supabase.com and sign in (free account is enough)
2. Click **New project**
3. Fill in:
   - **Name:** raymonjohns (or anything you like)
   - **Database password:** pick a strong one and save it somewhere safe
   - **Region:** choose the one closest to Uganda (Europe West is fine)
4. Click **Create new project** and wait ~2 minutes for it to spin up

---

## Step 2 — Run the schema

1. In your Supabase dashboard, click **SQL Editor** in the left sidebar
2. Click **New query**
3. Open the file `supabase/schema.sql` from this project
4. Paste the entire contents into the SQL editor
5. Click **Run** (green button, top right)
6. You should see "Success. No rows returned"

---

## Step 3 — Seed your products

1. Still in the SQL Editor, click **New query** again
2. Open the file `supabase/seed.sql` from this project
3. Paste the entire contents and click **Run**
4. You should see "Success. No rows returned" (inserts don't return rows)
5. To verify: click **Table Editor** in the sidebar → open **products** → you should see all 140 products

---

## Step 4 — Get your API keys

1. In your Supabase dashboard, go to **Settings** (gear icon, bottom left)
2. Click **API** under Configuration
3. You need three values:
   - **Project URL** — looks like `https://abcdefgh.supabase.co`
   - **anon / public key** — the long `eyJ...` string under "Project API keys"
   - **service_role key** — click "Reveal" to see it (keep this secret)

---

## Step 5 — Add environment variables

1. In your project root, copy the example file:
   ```
   cp .env.local.example .env.local
   ```
2. Open `.env.local` and fill in your three values:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://oepxizbxmcawcgzjrtyo.supabase.co
   NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_2awswENLeGeBMFZ6zlkR8g_i8hjAsWw
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
   ```
3. Save the file. **Never commit `.env.local` to git** — it's already in `.gitignore`

---

## Step 6 — Install packages and test locally

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000/shop — products should load from the database.
Open http://localhost:3000/admin/products — you should see the same list.

Try adding a product through the admin panel. It should appear on the shop
page within a few seconds (no page refresh needed if you navigate away and back).

---

## Step 7 — Deploy to Vercel (when ready)

Add the same three environment variables in your Vercel project:

1. Go to vercel.com → your project → **Settings** → **Environment Variables**
2. Add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
3. Redeploy once. After that, all product changes through the admin panel
   go live automatically — no more redeploying to update products.

---

## How it works after setup

| Action | What happens |
|---|---|
| Visit `/shop` | Server fetches products from Supabase, passes to ShopBrowser |
| Refresh `/shop` | Products shuffle into a new arrangement (client-side) |
| Admin adds a product | Saved to Supabase instantly, shop updates within 60s |
| Admin edits a product | Updated in Supabase, revalidation clears the cache |
| Admin deletes a product | Removed from Supabase, gone from shop on next load |

---

## Troubleshooting

**"Missing Supabase environment variables"**
→ Check `.env.local` exists in the project root and has all three keys.
→ Restart `pnpm dev` after editing `.env.local`.

**Products don't appear after seeding**
→ In the Supabase Table Editor, check the `products` table has rows.
→ Check the browser console and terminal for error messages.

**Admin saves but shop doesn't update**
→ The shop revalidates every 60 seconds. Wait a moment and hard-refresh.
→ In development, revalidation is instant.

**"new row violates row-level security policy"**
→ Your server action is using the anon key instead of the service role key.
→ Check `SUPABASE_SERVICE_ROLE_KEY` (not the anon key) is set correctly.
