# Wave 2 — Create Lobby Page Agent Brief

**Your file:** `src/app/create/page.tsx`
**Route:** `/create`
**Constraint:** Do not modify any other file. Only write `src/app/create/page.tsx`.

---

## Before you write any code

Read these files:

1. `src/app/globals.css` — color tokens, shadow tokens
2. `src/components/brief/FormElements.tsx` — the full form design (copy this faithfully)
3. `src/components/brief/BadgesAndTags.tsx` — game type + match type tag styles
4. `src/components/ui/input.tsx`, `src/components/ui/label.tsx`, `src/components/ui/button.tsx`
5. `src/lib/mock-data.ts` — mockPlayer (for pre-filling skill level)

---

## Page: Create Lobby (`/create`)

This is a `"use client"` page. All form state is local React state.
On submit: no real API call — show an inline success banner instead.

---

## Form state

```tsx
const [gameType, setGameType] = useState<"Competitive" | "Social" | "Casual">("Competitive");
const [matchType, setMatchType] = useState<"Singles" | "Doubles">("Singles");
const [selectedDays, setSelectedDays] = useState<string[]>(["Sat", "Sun"]);
const [timeSlot, setTimeSlot] = useState("Morning (6–12)");
const [skillLevel, setSkillLevel] = useState(7);
const [description, setDescription] = useState("");
const [venue, setVenue] = useState("");
const [submitted, setSubmitted] = useState(false);
const [isSubmitting, setIsSubmitting] = useState(false);
```

**Submit handler:**
```tsx
function handleSubmit(e: React.FormEvent) {
	e.preventDefault();
	setIsSubmitting(true);
	setTimeout(() => {
		setIsSubmitting(false);
		setSubmitted(true);
	}, 1200);
}
```

**Day toggle helper:**
```tsx
function toggleDay(day: string) {
	setSelectedDays((prev) =>
		prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
	);
}
```

---

## Layout overview

```
max-w-lg mx-auto px-4

[Page header]
[Success banner — only when submitted]
[Form card]
```

---

### Section 1: Page header

```tsx
<section className="pt-6 pb-4">
  <h1 className="text-2xl font-display font-bold text-violet-primary">Create a Lobby</h1>
  <p className="text-sm text-violet-secondary mt-1">
    Post your game and let players find you
  </p>
</section>
```

---

### Section 2: Success banner (conditional)

Show only when `submitted === true`. Replace the form or show above it.

```tsx
{submitted && (
  <div className="bg-success/10 border border-green-200 rounded-xl px-4 py-3 mb-5 flex items-center gap-3">
    <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center flex-shrink-0">
      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <div>
      <p className="text-sm font-semibold text-green-700">Lobby created!</p>
      <p className="text-xs text-green-600">Players near Doncaster will be notified.</p>
    </div>
  </div>
)}
```

---

### Section 3: Form card

Wrap everything in `<form onSubmit={handleSubmit}>`. Use the card container from FormElements:
`<div className="bg-white rounded-2xl shadow-card p-6 space-y-6">`

#### Field: Description (text input)

```tsx
<div className="space-y-1.5">
  <Label htmlFor="description" className="text-sm font-medium text-violet-primary">
    Describe your lobby
  </Label>
  <Input
    id="description"
    placeholder="e.g. Competitive singles, 1hr session, intermediate level"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    className="border-violet-border text-violet-primary placeholder:text-violet-muted focus:border-grapefruit-400 focus:ring-grapefruit-400"
  />
  {description.length > 0 && description.length < 10 && (
    <p className="text-xs text-error">Description too short (min 10 characters)</p>
  )}
</div>
```

#### Field: Venue (select)

```tsx
<div className="space-y-1.5">
  <Label className="text-sm font-medium text-violet-primary">Venue</Label>
  <div className="relative">
    <select
      value={venue}
      onChange={(e) => setVenue(e.target.value)}
      className="w-full rounded-lg border border-violet-border bg-white px-3 py-2 pr-9 text-sm text-violet-primary appearance-none focus:outline-none focus:ring-2 focus:ring-grapefruit-400 focus:border-grapefruit-400 transition-colors hover:border-violet-secondary"
    >
      <option value="">Select a venue...</option>
      <option>Doncaster Recreation Centre</option>
      <option>Box Hill Badminton Centre</option>
      <option>Glen Waverley Sports Centre</option>
      <option>Brunswick Badminton Club</option>
    </select>
    <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-violet-muted pointer-events-none" />
  </div>
</div>
```

#### Field: Game Type (3-way select)

Use the `gameTypeTags` pill button pattern from FormElements:

```tsx
<div className="space-y-2">
  <Label className="text-sm font-medium text-violet-primary">Game Type</Label>
  <div className="flex gap-2">
    {(["Competitive", "Social", "Casual"] as const).map((type) => (
      <button
        key={type}
        type="button"
        onClick={() => setGameType(type)}
        className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
          gameType === type
            ? "bg-grapefruit-50 text-grapefruit-700 border-grapefruit-300"
            : "bg-white text-violet-secondary border-violet-border hover:bg-violet-mid"
        }`}
      >
        {type}
      </button>
    ))}
  </div>
</div>
```

#### Field: Match Type (toggle)

Segmented button, exact pattern from FormElements:

```tsx
<div className="space-y-2">
  <Label className="text-sm font-medium text-violet-primary">Match Type</Label>
  <div className="flex rounded-lg overflow-hidden border border-violet-border">
    {(["Singles", "Doubles"] as const).map((type) => (
      <button
        key={type}
        type="button"
        onClick={() => setMatchType(type)}
        className={`flex-1 py-2 text-sm font-medium transition-colors ${
          matchType === type
            ? "bg-grapefruit-400 text-white"
            : "bg-white text-violet-secondary hover:bg-violet-mid"
        }`}
      >
        {type}
      </button>
    ))}
  </div>
</div>
```

#### Field: Available Days (pill toggles)

```tsx
<div className="space-y-2">
  <Label className="text-sm font-medium text-violet-primary">Available Days</Label>
  <div className="flex flex-wrap gap-2">
    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
      <button
        key={day}
        type="button"
        onClick={() => toggleDay(day)}
        className={`px-3 py-1.5 rounded-full border text-sm font-medium transition-colors ${
          selectedDays.includes(day)
            ? "bg-grapefruit-400 border-grapefruit-500 text-white"
            : "bg-white border-violet-border text-violet-secondary hover:bg-violet-mid"
        }`}
      >
        {day}
      </button>
    ))}
  </div>
</div>
```

#### Field: Preferred Time (3 buttons)

```tsx
<div className="space-y-2">
  <Label className="text-sm font-medium text-violet-primary">Preferred Time</Label>
  <div className="grid grid-cols-3 gap-2">
    {["Morning (6–12)", "Afternoon (12–6)", "Night (6–11)"].map((slot) => (
      <button
        key={slot}
        type="button"
        onClick={() => setTimeSlot(slot)}
        className={`px-3 py-2 rounded-lg border text-xs font-medium leading-tight transition-colors ${
          timeSlot === slot
            ? "bg-grapefruit-400 border-grapefruit-500 text-white"
            : "bg-white border-violet-border text-violet-secondary hover:bg-violet-mid"
        }`}
      >
        {slot}
      </button>
    ))}
  </div>
</div>
```

#### Field: Skill Level (range slider)

```tsx
<div className="space-y-2">
  <div className="flex justify-between">
    <Label className="text-sm font-medium text-violet-primary">Skill Level</Label>
    <span className="text-sm font-semibold text-grapefruit-400">{skillLevel}</span>
  </div>
  <input
    type="range"
    min={1}
    max={10}
    value={skillLevel}
    onChange={(e) => setSkillLevel(Number(e.target.value))}
    className="w-full accent-grapefruit-400"
  />
  <div className="flex justify-between text-xs text-violet-muted">
    <span>1 — Beginner</span>
    <span>10 — Pro</span>
  </div>
</div>
```

#### Submit button

```tsx
<Button
  type="submit"
  className="w-full"
  disabled={isSubmitting || submitted}
>
  {isSubmitting ? (
    <>
      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
      Creating Lobby...
    </>
  ) : submitted ? (
    "Lobby Posted!"
  ) : (
    "Post Lobby"
  )}
</Button>
```

---

## Imports

```tsx
"use client";

import { useState } from "react";
import { ChevronDown, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
```

---

## Formatting rules

- Tabs, double quotes, semicolons
- Do not modify any shared file — only `src/app/create/page.tsx`
