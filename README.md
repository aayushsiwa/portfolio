# Aayush's Portfolio

A personal developer portfolio built with **Next.js 16**, **Tailwind CSS v4**, and **Supabase** — featuring a fully functional admin dashboard to manage projects from the browser.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Database & Auth | Supabase |
| Validation | Zod v4 |
| Runtime | React 19 |

---

## Pages & Routes

| Route | Description |
|---|---|
| `/` | Home — hero section, about, projects grid, and contact |
| `/login` | Admin login form (email + password via Supabase Auth) |
| `/admin` | Protected admin dashboard (see below) |

The home page is a single scrollable page composed of four sections:

- **Hero** — introduction, LinkedIn, GitHub, resume and blog links.
- **About** — bio and skill icons (languages, frontend, backend, tools).
- **Projects** — cards fetched live from Supabase, featured projects marked with a ⭐.
- **Contact** — LinkedIn and email links.

---

## Admin Dashboard (`/admin`)

The admin route is protected by Next.js middleware. Any unauthenticated request to `/admin` is redirected to `/login` automatically.

Once logged in, the dashboard provides full CRUD management for projects.

### Features

- **Create a project** — fill in the form and submit. Fields include:
  - Title
  - Description (minimum 10 words)
  - GitHub repo URL — with `https://github.com/` shown as a fixed left-side prefix
  - Live URL *(optional)* — with `https://` prefix
  - Image URL — with `https://raw.githubusercontent.com/` prefix
  - Featured toggle (starred on the public site)
- **Live preview** — the project card updates in real time as you type.
- **Conflict detection** — duplicate title, GitHub URL, live URL, or image URL is flagged inline on every keystroke, before you can submit.
- **Edit a project** — click Edit on any card to load its data back into the form. Clicking Edit scrolls automatically to the top of the page. A Cancel button lets you exit edit mode without saving.
- **Delete a project** — a confirmation dialog shows the project name before deleting.
- **Featured badge** — projects with `featured: true` display a yellow ⭐ badge on their card.
- **Logout** — ends the Supabase session and redirects to `/login`.

---

## Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Set up environment variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Run the development server

```bash
pnpm dev
```

The app runs on [http://localhost:5178](http://localhost:5178).

### 4. Build for production

```bash
pnpm build
pnpm start
```

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Home page
│   ├── login/            # Login page
│   └── admin/            # Admin dashboard (middleware-protected)
├── components/
│   └── uiComponents/     # Card, Input, PrefixInput, Navbar, etc.
├── containers/
│   ├── CreateProject/    # Form + hooks for project CRUD
│   ├── Projects/         # Public projects grid
│   ├── About.tsx
│   ├── Contact.tsx
│   └── Home.tsx
├── lib/
│   └── supabase/         # Browser and server Supabase clients
├── types/
│   └── Project.ts        # Project and NewProject types
└── middleware.ts          # Auth guard for /admin routes
```
