"use client";

import { useState } from "react";
import { MapPin, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SkillBadge } from "@/components/SkillBadge";
import { mockPlayer, mockMatchHistory } from "@/lib/mock-data";

type Tab = "profile" | "history";

export default function ProfilePage() {
	const [activeTab, setActiveTab] = useState<Tab>("profile");
	const [editing, setEditing] = useState(false);
	const [bio, setBio] = useState(mockPlayer.bio);
	const [suburb, setSuburb] = useState(mockPlayer.suburb);
	const [saveSuccess, setSaveSuccess] = useState(false);

	function handleSave() {
		setSaveSuccess(true);
		setEditing(false);
		setTimeout(() => setSaveSuccess(false), 3000);
	}

	return (
		<div className="max-w-lg mx-auto px-4">
			{/* Section 1: Player header card */}
			<section className="pt-6 pb-4">
				<div className="bg-white rounded-2xl shadow-card p-5">
					<div className="flex items-start gap-4">
						{/* Avatar */}
						<div className="relative flex-shrink-0">
							<div className="w-16 h-16 rounded-full bg-grapefruit-100 text-grapefruit-700 flex items-center justify-center text-xl font-bold font-display">
								{mockPlayer.initials}
							</div>
							<button
								type="button"
								className="absolute -bottom-0.5 -right-0.5 w-6 h-6 rounded-full bg-grapefruit-400 flex items-center justify-center shadow-card"
							>
								<Pencil className="w-3 h-3 text-white" />
							</button>
						</div>
						{/* Info */}
						<div className="flex-1 min-w-0">
							<div className="flex items-center gap-2 flex-wrap">
								<h1 className="text-lg font-display font-bold text-violet-primary">{mockPlayer.name}</h1>
								<SkillBadge level={mockPlayer.skill} showLabel />
							</div>
							<p className="text-sm text-violet-muted mt-0.5 flex items-center gap-1">
								<MapPin className="w-3.5 h-3.5" />
								{mockPlayer.suburb}
							</p>
						</div>
						{/* Edit button */}
						<button
							type="button"
							onClick={() => setEditing(!editing)}
							className="text-sm text-grapefruit-400 font-medium hover:text-grapefruit-500 flex-shrink-0"
						>
							{editing ? "Cancel" : "Edit"}
						</button>
					</div>

					{/* Profile completion bar */}
					<div className="mt-4 space-y-1.5">
						<div className="flex justify-between text-sm">
							<span className="text-violet-secondary">Profile completion</span>
							<span className="font-semibold text-warning">{mockPlayer.profileCompletion}%</span>
						</div>
						<div className="w-full h-2 bg-violet-mid rounded-full overflow-hidden">
							<div
								className="h-full rounded-full transition-all"
								style={{ width: `${mockPlayer.profileCompletion}%`, backgroundColor: "#F59E0B" }}
							/>
						</div>
						<p className="text-xs text-violet-muted">Add a photo to reach 100%</p>
					</div>
				</div>
			</section>

			{/* Section 2: Stats row */}
			<section className="mb-5">
				<div className="grid grid-cols-3 gap-3">
					{[
						{ label: "Matches", value: mockPlayer.stats.matchesPlayed },
						{ label: "Win Rate", value: `${mockPlayer.stats.winRate}%` },
						{ label: "Avg Rally", value: `${mockPlayer.stats.avgRallyLength}` },
					].map(({ label, value }) => (
						<div key={label} className="bg-white rounded-xl shadow-card p-3 text-center">
							<p className="text-xl font-display font-bold text-violet-primary">{value}</p>
							<p className="text-xs text-violet-muted mt-0.5">{label}</p>
						</div>
					))}
				</div>
			</section>

			{/* Section 3: Tab bar */}
			<div className="flex border-b border-violet-border mb-5">
				{([["profile", "Profile"], ["history", "Match History"]] as const).map(([id, label]) => (
					<button
						key={id}
						type="button"
						onClick={() => setActiveTab(id)}
						className={`px-4 py-2 text-sm font-medium -mb-px border-b-2 transition-colors ${
							activeTab === id
								? "border-grapefruit-400 text-grapefruit-400"
								: "border-transparent text-violet-muted hover:text-violet-primary"
						}`}
					>
						{label}
					</button>
				))}
			</div>

			{/* Section 4a: Profile tab */}
			{activeTab === "profile" && (
				<div>
					{saveSuccess && (
						<div className="bg-success/10 border border-green-200 rounded-xl px-4 py-2.5 mb-4 flex items-center gap-2">
							<span className="text-green-700 text-sm font-medium">Profile saved!</span>
						</div>
					)}

					{/* Bio */}
					<div className="py-3 border-b border-violet-border">
						<Label className="text-xs text-violet-muted mb-1 block">Bio</Label>
						{editing ? (
							<textarea
								className="w-full rounded-lg border border-violet-border px-3 py-2 text-sm text-violet-primary resize-none focus:outline-none focus:ring-2 focus:ring-grapefruit-400"
								rows={3}
								value={bio}
								onChange={(e) => setBio(e.target.value)}
							/>
						) : (
							<p className="text-sm text-violet-primary">{bio}</p>
						)}
					</div>

					{/* Suburb */}
					<div className="py-3 border-b border-violet-border">
						<Label className="text-xs text-violet-muted mb-1 block">Suburb</Label>
						{editing ? (
							<Input
								value={suburb}
								onChange={(e) => setSuburb(e.target.value)}
								className="text-sm"
							/>
						) : (
							<p className="text-sm text-violet-primary">{suburb}</p>
						)}
					</div>

					{/* Preferred match type */}
					<div className="py-3 border-b border-violet-border">
						<Label className="text-xs text-violet-muted mb-1 block">Preferred Match Type</Label>
						<p className="text-sm text-violet-primary">{mockPlayer.matchType}</p>
					</div>

					{/* Preferred time */}
					<div className="py-3 border-b border-violet-border">
						<Label className="text-xs text-violet-muted mb-1 block">Preferred Time</Label>
						<p className="text-sm text-violet-primary">{mockPlayer.preferredTime}</p>
					</div>

					{/* Skill level */}
					<div className="py-3 border-b border-violet-border">
						<Label className="text-xs text-violet-muted mb-1 block">Skill Level</Label>
						<SkillBadge level={mockPlayer.skill} showLabel />
					</div>

					{editing && (
						<Button onClick={handleSave} className="w-full mt-4">
							Save Changes
						</Button>
					)}
				</div>
			)}

			{/* Section 4b: Match history tab */}
			{activeTab === "history" && (
				<div>
					{mockMatchHistory.map((match) => (
						<div key={match.id} className="bg-white rounded-xl shadow-card p-4 flex items-start gap-3 mb-3">
							{/* Opponent avatar */}
							<div
								className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
									match.result === "win" ? "bg-success/15 text-green-700" : "bg-error/10 text-error"
								}`}
							>
								{match.opponentInitials}
							</div>
							{/* Details */}
							<div className="flex-1 min-w-0">
								<div className="flex items-center justify-between gap-2">
									<p className="text-sm font-semibold text-violet-primary">vs {match.opponent}</p>
									<span
										className={`text-xs font-bold px-2 py-0.5 rounded-full ${
											match.result === "win"
												? "bg-success/10 text-green-700"
												: "bg-error/10 text-error"
										}`}
									>
										{match.result === "win" ? "W" : "L"}
									</span>
								</div>
								<p className="text-xs text-violet-muted mt-0.5">{match.score}</p>
								<div className="flex items-center gap-3 mt-1.5 text-xs text-violet-muted">
									<span>{match.date}</span>
									<span>·</span>
									<span>{match.venue}</span>
									<span>·</span>
									<span>{match.matchType}</span>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
