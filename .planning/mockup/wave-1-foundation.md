# Wave 1 — Foundation Agent Brief

You are building the shared foundation for a Next.js 15 mockup of a badminton matchmaking app.
No other agents can run until you finish. Be thorough — every shared file you create will be
imported by 5 page agents running in parallel after you.

---

## Before you write any code

Read these files in full:

1. `src/app/globals.css` — color tokens, shadow tokens, font variables, custom animations
2. `src/components/brief/CardShowcase.tsx` — LobbyCard implementation (you will extract this)
3. `src/components/brief/NavigationShowcase.tsx` — NavBar + BottomDock implementation (extract these)
4. `src/components/brief/BadgesAndTags.tsx` — skill level color data (exact hex values)
5. `src/app/layout.tsx` — current root layout (you will replace this)
6. `src/components/ui/button.tsx`, `src/components/ui/avatar.tsx` — primitive components

---

## Files to create or modify

### 1. `src/lib/mock-data.ts` — create new

Static data used by all pages. No exports named `default` — named exports only.

```ts
// Lobby status type
export type LobbyStatus = "open" | "almostFull" | "full";

export interface Lobby {
	id: string;
	host: string;
	hostInitials: string;
	skill: number;
	gameType: "Competitive" | "Social" | "Casual";
	matchType: "Singles" | "Doubles";
	day: string;
	time: string;
	players: string;
	playersCount: number;
	playersMax: number;
	venue: string;
	venueAddress: string;
	description: string;
	status: LobbyStatus;
	fee: number; // AUD per player
}

export interface Player {
	id: string;
	name: string;
	initials: string;
	skill: number;
	suburb: string;
	availableDays: string[];
	preferredTime: string;
	matchType: "Singles" | "Doubles";
	bio: string;
	profileCompletion: number;
	stats: { matchesPlayed: number; winRate: number; avgRallyLength: number };
}

export interface Venue {
	id: string;
	name: string;
	address: string;
	courts: number;
	distance: string;
	open: boolean;
}

export interface MatchHistory {
	id: string;
	opponent: string;
	opponentInitials: string;
	opponentSkill: number;
	result: "win" | "loss";
	score: string;
	date: string;
	venue: string;
	gameType: "Competitive" | "Social" | "Casual";
	matchType: "Singles" | "Doubles";
}

export const mockLobbies: Lobby[] = [
	{
		id: "1",
		host: "Alex T.",
		hostInitials: "AT",
		skill: 7,
		gameType: "Competitive",
		matchType: "Singles",
		day: "Saturday",
		time: "9:00 AM",
		players: "1 / 2",
		playersCount: 1,
		playersMax: 2,
		venue: "Doncaster",
		venueAddress: "1 Civic Place, Doncaster VIC 3108",
		description: "Competitive singles, intermediate. Looking for a solid rally partner.",
		status: "open",
		fee: 12,
	},
	{
		id: "2",
		host: "Priya M.",
		hostInitials: "PM",
		skill: 5,
		gameType: "Social",
		matchType: "Doubles",
		day: "Sunday",
		time: "2:00 PM",
		players: "3 / 4",
		playersCount: 3,
		playersMax: 4,
		venue: "Box Hill",
		venueAddress: "8-12 Carrington Rd, Box Hill VIC 3128",
		description: "Social doubles, all levels welcome. Kids friendly, relaxed pace.",
		status: "almostFull",
		fee: 8,
	},
	{
		id: "3",
		host: "Sam K.",
		hostInitials: "SK",
		skill: 9,
		gameType: "Competitive",
		matchType: "Singles",
		day: "Friday",
		time: "7:00 PM",
		players: "1 / 2",
		playersCount: 1,
		playersMax: 2,
		venue: "Glen Waverley",
		venueAddress: "Glen Waverley Sports Centre, 121 Kingsway VIC 3150",
		description: "High intensity competitive singles. Advanced players only.",
		status: "open",
		fee: 15,
	},
	{
		id: "4",
		host: "Jin L.",
		hostInitials: "JL",
		skill: 3,
		gameType: "Casual",
		matchType: "Doubles",
		day: "Tuesday",
		time: "6:30 PM",
		players: "2 / 4",
		playersCount: 2,
		playersMax: 4,
		venue: "Brunswick",
		venueAddress: "Brunswick Badminton Club, VIC 3056",
		description: "Casual hit-around, beginners welcome. No pressure, just fun!",
		status: "open",
		fee: 6,
	},
	{
		id: "5",
		host: "Mei W.",
		hostInitials: "MW",
		skill: 6,
		gameType: "Social",
		matchType: "Doubles",
		day: "Wednesday",
		time: "7:30 PM",
		players: "2 / 4",
		playersCount: 2,
		playersMax: 4,
		venue: "Doncaster",
		venueAddress: "1 Civic Place, Doncaster VIC 3108",
		description: "Mixed doubles, social game. Bring a partner or we'll pair you up.",
		status: "almostFull",
		fee: 10,
	},
	{
		id: "6",
		host: "Tom R.",
		hostInitials: "TR",
		skill: 8,
		gameType: "Competitive",
		matchType: "Doubles",
		day: "Saturday",
		time: "3:00 PM",
		players: "4 / 4",
		playersCount: 4,
		playersMax: 4,
		venue: "Box Hill",
		venueAddress: "8-12 Carrington Rd, Box Hill VIC 3128",
		description: "Competitive doubles. Already full — check back next week.",
		status: "full",
		fee: 12,
	},
];

export const mockPlayer: Player = {
	id: "me",
	name: "Alex Chen",
	initials: "AC",
	skill: 7,
	suburb: "Doncaster, VIC",
	availableDays: ["Sat", "Sun"],
	preferredTime: "Morning (6–12)",
	matchType: "Singles",
	bio: "Competitive singles player, intermediate level. Love fast rallies and long baseline exchanges.",
	profileCompletion: 85,
	stats: {
		matchesPlayed: 24,
		winRate: 63,
		avgRallyLength: 12,
	},
};

export const mockVenues: Venue[] = [
	{
		id: "v1",
		name: "Doncaster Recreation Centre",
		address: "1 Civic Place, Doncaster VIC 3108",
		courts: 6,
		distance: "2.1 km",
		open: true,
	},
	{
		id: "v2",
		name: "Box Hill Badminton Centre",
		address: "8-12 Carrington Rd, Box Hill VIC 3128",
		courts: 8,
		distance: "5.4 km",
		open: true,
	},
	{
		id: "v3",
		name: "Glen Waverley Sports Centre",
		address: "121 Kingsway, Glen Waverley VIC 3150",
		courts: 4,
		distance: "9.2 km",
		open: false,
	},
];

export const mockMatchHistory: MatchHistory[] = [
	{
		id: "mh1",
		opponent: "Sam K.",
		opponentInitials: "SK",
		opponentSkill: 9,
		result: "loss",
		score: "15–21, 18–21",
		date: "Sat 8 Mar 2026",
		venue: "Doncaster",
		gameType: "Competitive",
		matchType: "Singles",
	},
	{
		id: "mh2",
		opponent: "Priya M.",
		opponentInitials: "PM",
		opponentSkill: 5,
		result: "win",
		score: "21–14, 21–16",
		date: "Sun 1 Mar 2026",
		venue: "Box Hill",
		gameType: "Social",
		matchType: "Singles",
	},
];
```

---

### 2. `src/components/LobbyCard.tsx` — create new

Extract the `LobbyCard` component from `src/components/brief/CardShowcase.tsx` into a reusable
standalone component. Make all props required-with-defaults or use the `Lobby` type from mock-data.

**Interface — accept either a full `Lobby` object OR individual props:**

```tsx
import type { Lobby } from "@/lib/mock-data";

interface LobbyCardProps {
	lobby: Lobby;
	variant?: "standard" | "elevated" | "outlined" | "compact";
}
```

**Implementation notes:**
- Copy the `skillColors` and `gameTypeColors` maps exactly from CardShowcase
- Copy the full JSX structure exactly — do not simplify or redesign
- The compact variant uses `line-clamp-1` on description and a smaller Join button
- Export as named export: `export function LobbyCard(...)`

---

### 3. `src/components/SkillBadge.tsx` — create new

A standalone skill level badge component. Use the exact color data from `BadgesAndTags.tsx`.

```tsx
interface SkillBadgeProps {
	level: number; // 1–10
	showLabel?: boolean; // default false — shows "Lvl 7" when false, "7 Advanced" when true
	size?: "sm" | "md"; // default "sm"
}

export function SkillBadge({ level, showLabel = false, size = "sm" }: SkillBadgeProps) { ... }
```

Use inline `style` for the exact hex colors (bg, text, border) from BadgesAndTags — these are
not Tailwind token values, they're custom hex strings. The label names are:
1 Beginner, 2 Novice, 3 Rookie, 4 Amateur, 5 Intermediate, 6 Skilled, 7 Advanced,
8 Expert, 9 Elite, 10 Top Player.

---

### 4. `src/components/NavBar.tsx` — create new

Extract and productionise the `NavbarPreview` from `NavigationShowcase.tsx`.

**Key details:**
- Use Next.js `<Link>` (not `<a href="#">`) for all nav links
- Links: Home (`/`), Match (`/match`), Create (`/create`), Profile (`/profile`)
- Logo: `<Image src="/logo.svg" alt="Match" width={70} height={28} />`
- Active link detection: use `usePathname()` from `next/navigation` — active link gets `text-grapefruit-400`, others get `text-violet-secondary hover:text-violet-primary`
- Bell icon: static, with grapefruit dot (no real notifications)
- Avatar: shows mock player initials "AC" (`bg-grapefruit-100 text-grapefruit-700`)
- This is a `"use client"` component (needs `usePathname`)
- Hidden on mobile: wrap nav links in `hidden md:flex`
- The NavBar itself: `bg-white border-b border-violet-border sticky top-0 z-40`

Full structure:
```
<header className="bg-white border-b border-violet-border sticky top-0 z-40">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
    <Image src="/logo.svg" .../>
    <nav className="hidden md:flex items-center gap-6">
      {links}
    </nav>
    <div className="flex items-center gap-3">
      <BellButton />
      <Avatar />
    </div>
  </div>
</header>
```

---

### 5. `src/components/BottomDock.tsx` — create new

Extract and productionise the `BottomDockPreview` from `NavigationShowcase.tsx`.

**Key details:**
- Use Next.js `<Link>` for all tab links
- Tabs: Home (`/`), Match (`/match`), Create (`/create`), Alerts (no route — use `/`), Profile (`/profile`)
- Active detection via `usePathname()` — `"use client"` component
- Create tab is "featured": elevated grapefruit circle button, `-mt-5`, no active indicator dot
- Active non-featured tab: small `w-1 h-1` grapefruit dot above icon + `text-grapefruit-400` icon + `font-medium` label
- Dock container: `fixed bottom-0 left-0 right-0 z-40 pb-safe md:hidden`
  - Inner pill: `mx-3 mb-3 flex items-center justify-around px-2 py-2.5 bg-white/95 backdrop-blur-sm rounded-2xl shadow-elevated border border-violet-border/40`
- Icons: `House`, `Swords`, `Plus`, `Bell`, `User` from lucide-react

---

### 6. `src/app/layout.tsx` — replace existing

Update the root layout to include the NavBar and BottomDock. Keep the existing font setup
and `TooltipProvider` intact.

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NavBar } from "@/components/NavBar";
import { BottomDock } from "@/components/BottomDock";
import "./globals.css";

// ... same font vars as before ...

export const metadata: Metadata = {
	title: "Match",
	description: "Find your next badminton match in Melbourne",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} ${jakartaSans.variable} antialiased`}>
				<TooltipProvider>
					<NavBar />
					<main className="min-h-screen pb-24 md:pb-8">
						{children}
					</main>
					<BottomDock />
				</TooltipProvider>
			</body>
		</html>
	);
}
```

Note: `pb-24` on main gives space for the fixed BottomDock on mobile; `md:pb-8` reduces it on desktop.

---

### 7. `src/app/page.tsx` — replace existing (stub, Wave 2 will fill it in)

Remove the redirect. Replace with a minimal stub so the home route exists:

```tsx
export default function HomePage() {
	return (
		<div className="max-w-5xl mx-auto px-4 pt-6">
			<p className="text-violet-muted">Loading...</p>
		</div>
	);
}
```

Wave 2's home agent will replace this with the real home page.

---

### 8. Stub pages — create new (Wave 2 will replace content)

Create these files. Each is a minimal page component — just enough so the route doesn't 404.

**`src/app/match/page.tsx`:**
```tsx
export default function MatchPage() {
	return (
		<div className="max-w-5xl mx-auto px-4 pt-6">
			<p className="text-violet-muted">Match page coming soon...</p>
		</div>
	);
}
```

**`src/app/create/page.tsx`:**
```tsx
export default function CreatePage() {
	return (
		<div className="max-w-5xl mx-auto px-4 pt-6">
			<p className="text-violet-muted">Create page coming soon...</p>
		</div>
	);
}
```

**`src/app/profile/page.tsx`:**
```tsx
export default function ProfilePage() {
	return (
		<div className="max-w-5xl mx-auto px-4 pt-6">
			<p className="text-violet-muted">Profile page coming soon...</p>
		</div>
	);
}
```

**`src/app/payment/page.tsx`:**
```tsx
export default function PaymentPage() {
	return (
		<div className="max-w-5xl mx-auto px-4 pt-6">
			<p className="text-violet-muted">Payment page coming soon...</p>
		</div>
	);
}
```

---

## Formatting rules

- Indentation: **tabs** (not spaces)
- Strings: **double quotes**
- Semicolons: yes
- No trailing commas on last item in single-line constructs (Biome default)
- Run `npx biome check --write src/` after all files are created

---

## Verification

After completing Wave 1:

1. `npm run dev` — app starts, no TypeScript errors
2. Visit `http://localhost:3000` — see stub home page with NavBar
3. NavBar visible on desktop; BottomDock visible on mobile (or narrow window)
4. All routes `/`, `/match`, `/create`, `/profile`, `/payment` return a page (not 404)
5. Clicking nav links navigates without full reload

If any step fails, fix it before signalling Wave 2 can start.
