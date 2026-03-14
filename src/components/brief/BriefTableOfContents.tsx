"use client";

import { useEffect, useState } from "react";

const sections = [
	{ id: "color-palette", number: "01", title: "Color Palette" },
	{ id: "typography", number: "02", title: "Typography" },
	{ id: "spacing", number: "03", title: "Spacing & Layout" },
	{ id: "buttons", number: "04", title: "Buttons" },
	{ id: "cards", number: "05", title: "Cards" },
	{ id: "navigation", number: "06", title: "Navigation" },
	{ id: "forms", number: "07", title: "Form Elements" },
	{ id: "badges", number: "08", title: "Badges & Tags" },
	{ id: "icons", number: "09", title: "Icons" },
	{ id: "avatars", number: "10", title: "Avatars" },
	{ id: "modals", number: "11", title: "Modals & Overlays" },
	{ id: "loading", number: "12", title: "Loading States" },
	{ id: "empty", number: "13", title: "Empty States" },
];

export function BriefTableOfContents() {
	const [activeId, setActiveId] = useState<string>("");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id);
					}
				}
			},
			{ rootMargin: "-20% 0% -60% 0%", threshold: 0 },
		);

		for (const section of sections) {
			const el = document.getElementById(section.id);
			if (el) observer.observe(el);
		}

		return () => observer.disconnect();
	}, []);

	const scrollTo = (id: string) => {
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<nav className="w-60 flex-shrink-0">
			<div className="sticky top-8">
				<p className="text-xs font-semibold uppercase tracking-widest text-violet-muted mb-4">
					Contents
				</p>
				<ul className="space-y-1">
					{sections.map((section) => (
						<li key={section.id}>
							<button
								type="button"
								onClick={() => scrollTo(section.id)}
								className={`w-full text-left flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-all ${
									activeId === section.id
										? "text-grapefruit-500 font-medium bg-grapefruit-50"
										: "text-violet-secondary hover:text-violet-primary hover:bg-violet-mid"
								}`}
							>
								<span className="text-xs font-mono w-5 opacity-50">
									{section.number}
								</span>
								{section.title}
							</button>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}
