# Wave 2 — Home Page Agent Brief

**Your file:** `src/app/page.tsx`
**Route:** `/`
**Constraint:** Do not modify any other file. Only write `src/app/page.tsx`.

---

## Before you write any code

Read these files:

1. `src/app/globals.css` — color tokens, shadow tokens
2. `src/components/brief/CardShowcase.tsx` — LobbyCard design reference
3. `src/components/brief/NavigationShowcase.tsx` — tab filter pattern (pill tabs)
4. `src/components/brief/BadgesAndTags.tsx` — lobby status badge design
5. `src/components/brief/LoadingStates.tsx` — skeleton card pattern
6. `src/lib/mock-data.ts` — mockLobbies, mockPlayer (created by Wave 1)
7. `src/components/LobbyCard.tsx` — the shared LobbyCard component (created by Wave 1)
8. `src/components/SkillBadge.tsx` — skill badge component (created by Wave 1)

---

## Page: Home (`/`)

This is a `"use client"` page — it needs useState for the active filter tab.

### Layout overview

```
max-w-5xl mx-auto px-4

[Hero greeting]
[Filter tabs]
[Lobby card grid — 4 cards]
[Nearby venues section]
```

---

### Section 1: Hero greeting

A warm, personal header for the logged-in user.

```tsx
<section className="pt-6 pb-4">
  <p className="text-sm text-violet-muted">Good morning,</p>
  <h1 className="text-2xl font-display font-bold text-violet-primary">
    Alex Chen 👋
  </h1>
  <p className="text-sm text-violet-secondary mt-1">
    3 matches near Doncaster this weekend
  </p>
</section>
```

---

### Section 2: Filter tabs

Pill/segmented tab style — matches the "Pill/segmented variant" from NavigationShowcase.

State: `const [filter, setFilter] = useState<"all" | "competitive" | "social" | "casual">("all")`

```tsx
<div className="flex gap-2 mb-5 overflow-x-auto pb-1">
  {["All", "Competitive", "Social", "Casual"].map((label) => {
    const value = label.toLowerCase() as typeof filter;
    const active = filter === value;
    return (
      <button
        key={label}
        type="button"
        onClick={() => setFilter(value)}
        className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors whitespace-nowrap ${
          active
            ? "bg-grapefruit-400 border-grapefruit-500 text-white"
            : "bg-white border-violet-border text-violet-secondary hover:bg-violet-mid"
        }`}
      >
        {label}
      </button>
    );
  })}
</div>
```

Filter logic: show lobbies where `filter === "all"` OR `lobby.gameType.toLowerCase() === filter`.
Show the first 4 results (`.slice(0, 4)`).

---

### Section 3: Lobby card grid

Show 4 filtered lobbies in a responsive grid.

```tsx
<section className="mb-8">
  <div className="flex items-center justify-between mb-3">
    <h2 className="text-base font-display font-semibold text-violet-primary">
      Recommended for you
    </h2>
    <button type="button" className="text-sm text-grapefruit-400 font-medium hover:text-grapefruit-500">
      See all
    </button>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {filteredLobbies.map((lobby) => (
      <LobbyCard key={lobby.id} lobby={lobby} variant="standard" />
    ))}
  </div>
  {filteredLobbies.length === 0 && (
    <div className="text-center py-12">
      <p className="text-violet-muted text-sm">No lobbies match this filter.</p>
    </div>
  )}
</section>
```

---

### Section 4: Nearby venues

Show the 3 venues from `mockVenues`. Use the VenueCard design from CardShowcase.
Since VenueCard is not exported from LobbyCard.tsx, inline it here — it's a simple div.

```tsx
<section className="mb-8">
  <h2 className="text-base font-display font-semibold text-violet-primary mb-3">
    Nearby venues
  </h2>
  <div className="space-y-3">
    {mockVenues.map((venue) => (
      <div
        key={venue.id}
        className="bg-white rounded-2xl shadow-card p-4 flex items-start justify-between"
      >
        <div>
          <h4 className="font-semibold text-violet-primary text-sm">{venue.name}</h4>
          <p className="text-xs text-violet-muted mt-0.5">{venue.address}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="text-xs px-2 py-0.5 bg-violet-bg text-violet-secondary rounded-full border border-violet-border">
              {venue.courts} courts
            </span>
            <span className={`text-xs px-2 py-0.5 rounded-full border ${venue.open ? "bg-success/10 text-green-700 border-green-200" : "bg-violet-mid text-violet-muted border-violet-border"}`}>
              {venue.open ? "Open now" : "Closed"}
            </span>
            <span className="text-xs px-2 py-0.5 bg-violet-bg text-violet-secondary rounded-full border border-violet-border">
              {venue.distance}
            </span>
          </div>
        </div>
        <div className="w-10 h-10 rounded-xl bg-grapefruit-50 border border-grapefruit-100 flex items-center justify-center flex-shrink-0 ml-3">
          <MapPin className="w-4 h-4 text-grapefruit-400" />
        </div>
      </div>
    ))}
  </div>
</section>
```

---

## Imports

```tsx
"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { LobbyCard } from "@/components/LobbyCard";
import { mockLobbies, mockVenues } from "@/lib/mock-data";
```

---

## Formatting rules

- Tabs, double quotes, semicolons
- Do not modify any shared file — only `src/app/page.tsx`
