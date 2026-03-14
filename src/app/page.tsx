"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { LobbyCard } from "@/components/LobbyCard";
import { mockLobbies, mockVenues } from "@/lib/mock-data";

export default function HomePage() {
	const [filter, setFilter] = useState<"all" | "competitive" | "social" | "casual">("all");

	const filteredLobbies = mockLobbies
		.filter((lobby) => filter === "all" || lobby.gameType.toLowerCase() === filter)
		.slice(0, 4);

	return (
		<div className="max-w-5xl mx-auto px-4">
			{/* Section 1: Hero greeting */}
			<section className="pt-6 pb-4">
				<p className="text-sm text-violet-muted">Good morning,</p>
				<h1 className="text-2xl font-display font-bold text-violet-primary">
					Alex Chen 👋
				</h1>
				<p className="text-sm text-violet-secondary mt-1">
					3 matches near Doncaster this weekend
				</p>
			</section>

			{/* Section 2: Filter tabs */}
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

			{/* Section 3: Lobby card grid */}
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

			{/* Section 4: Nearby venues */}
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
		</div>
	);
}
