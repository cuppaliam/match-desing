# Match — Mockup Agent Guide

This project contains a complete design brief for a badminton matchmaking app.
The `.planning/mockup/` folder contains agent briefs that convert those design assets into
a working Next.js mockup — real pages with static mock data, no real backend.

---

## What is being built

| Route | Page |
|---|---|
| `/` | Home — recommended lobby cards |
| `/match` | Advanced match — simulated voice search + results |
| `/create` | Create lobby — form with mock submit |
| `/profile` | Edit profile + match history |
| `/payment` | Mock Stripe checkout (split fee) |

All pages use shared components and static mock data. No database, auth, payments, or external API calls.

---

## Execution order

### Wave 1 — Foundation (run first, alone)

**Brief:** `.planning/mockup/wave-1-foundation.md`

Sets up the shared shell that all pages depend on:
- Root layout with NavBar + BottomDock
- Shared components: `LobbyCard`, `SkillBadge`
- Static mock data in `src/lib/mock-data.ts`
- Stub pages for all routes (so nothing 404s while Wave 2 runs)

**Do not start Wave 2 until Wave 1 is complete.**

### Wave 2 — Pages (run all in parallel after Wave 1)

Each agent builds exactly one page file. They share no files, so they can run simultaneously.

| Brief | Route | File |
|---|---|---|
| `.planning/mockup/wave-2-home.md` | `/` | `src/app/page.tsx` |
| `.planning/mockup/wave-2-match.md` | `/match` | `src/app/match/page.tsx` |
| `.planning/mockup/wave-2-create.md` | `/create` | `src/app/create/page.tsx` |
| `.planning/mockup/wave-2-profile.md` | `/profile` | `src/app/profile/page.tsx` |
| `.planning/mockup/wave-2-payment.md` | `/payment` | `src/app/payment/page.tsx` |

---

## Design assets to reference

All brief components live in `src/components/brief/`. Agents must read these before coding:

| Component | File |
|---|---|
| LobbyCard, VenueCard | `src/components/brief/CardShowcase.tsx` |
| NavBar, BottomDock, Tabs | `src/components/brief/NavigationShowcase.tsx` |
| Form inputs, selects, day/time pickers, skill slider | `src/components/brief/FormElements.tsx` |
| Skill level badges, game type tags, lobby status | `src/components/brief/BadgesAndTags.tsx` |
| Match Found Modal, Confirm Join Sheet, Voice tooltip/mic | `src/components/brief/ModalsAndOverlays.tsx` |
| Skeleton cards, shuttlecock loader, spinners, progress bars | `src/components/brief/LoadingStates.tsx` |
| Empty states | `src/components/brief/EmptyStates.tsx` |
| Avatars | `src/components/brief/AvatarShowcase.tsx` |
| Color tokens, shadows, animations | `src/app/globals.css` |
| Primitive UI (Button, Input, Badge, etc.) | `src/components/ui/*.tsx` |

---

## Global rules (apply to every agent)

- **Formatting:** Biome — tabs (not spaces), double quotes
- **Imports:** use `@/` path aliases
- **Colors:** use design token classes (`text-grapefruit-400`, `bg-violet-bg`, etc.), not raw hex
- **Fonts:** headings use `font-display` (Plus Jakarta Sans); body uses default Geist Sans
- **No real API calls, no env vars, no external SDKs**
- **Do not modify shared files** — only your assigned page file
  - Exception: Wave 1 is allowed (and expected) to modify `src/app/layout.tsx` and `src/app/page.tsx`
- **Logged-in user:** mock player "Alex Chen" (skill 7, initials "AC") — always show as authenticated

---

## Verification checklist

After all waves complete, the app must satisfy:

- [ ] `npm run dev` starts without errors
- [ ] All 5 routes load without 404 or blank page
- [ ] NavBar renders on desktop; BottomDock renders on mobile
- [ ] Nav links route correctly via Next.js `<Link>`
- [ ] Home shows 4 lobby cards with real mock data
- [ ] Match page mic button runs through idle → listening → processing → results
- [ ] Create form shows validation and success feedback on submit
- [ ] Profile shows player info + 2 match history entries
- [ ] Payment shows split fee breakdown + mock card fields
