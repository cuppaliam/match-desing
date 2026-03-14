import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { Lobby } from "@/lib/mock-data";

interface LobbyCardProps {
	lobby: Lobby;
	variant?: "standard" | "elevated" | "outlined" | "compact";
}

// Full 10-level colour scale — matches BadgesAndTags for system consistency
const skillColors: Record<number, string> = {
	1: "bg-emerald-100 text-emerald-700",
	2: "bg-green-100 text-green-700",
	3: "bg-cyan-100 text-cyan-700",
	4: "bg-blue-100 text-blue-700",
	5: "bg-violet-100 text-violet-700",
	6: "bg-purple-100 text-purple-700",
	7: "bg-orange-100 text-orange-700",
	8: "bg-amber-100 text-amber-700",
	9: "bg-rose-100 text-rose-700",
	10: "bg-violet-primary text-grapefruit-400",
};

const gameTypeColors: Record<string, string> = {
	Competitive: "bg-grapefruit-50 text-grapefruit-700 border-grapefruit-200",
	Social: "bg-violet-bg text-violet-secondary border-violet-border",
	Casual: "bg-violet-mid text-violet-secondary border-violet-border",
};

export function LobbyCard({ lobby, variant = "standard" }: LobbyCardProps) {
	const {
		host,
		skill,
		gameType,
		matchType,
		day,
		time,
		players,
		venue,
		description,
	} = lobby;

	const wrapperClass = {
		standard:
			"bg-white rounded-2xl shadow-card p-4 transition-all duration-200 hover:shadow-elevated hover:-translate-y-0.5 cursor-pointer",
		elevated:
			"bg-white rounded-2xl shadow-elevated p-4 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer",
		outlined:
			"bg-white rounded-2xl border-2 border-grapefruit-200 p-4 transition-all duration-200 hover:shadow-elevated hover:-translate-y-0.5 cursor-pointer",
		compact:
			"bg-white rounded-xl shadow-card p-3 transition-colors duration-150 hover:bg-violet-mid/30 cursor-pointer",
	}[variant];

	const isCompact = variant === "compact";

	return (
		<div className={wrapperClass}>
			{/* Host row */}
			<div className="flex items-center justify-between mb-2">
				<div className="flex items-center gap-2">
					<Avatar className={isCompact ? "w-7 h-7" : "w-9 h-9"}>
						<AvatarFallback className="bg-grapefruit-100 text-grapefruit-700 text-xs font-semibold">
							{host.slice(0, 2)}
						</AvatarFallback>
					</Avatar>
					<div>
						<p
							className={`font-semibold text-violet-primary ${isCompact ? "text-xs" : "text-sm"}`}
						>
							{host}
						</p>
					</div>
				</div>
				<span
					className={`px-2 py-0.5 rounded-full text-xs font-semibold ${skillColors[skill] ?? "bg-violet-bg text-violet-secondary"}`}
				>
					Lvl {skill}
				</span>
			</div>

			{/* Description */}
			<p
				className={`text-violet-secondary mb-2 leading-snug ${isCompact ? "text-xs line-clamp-1" : "text-sm"}`}
			>
				{description}
			</p>

			{/* Tags */}
			<div className="flex flex-wrap gap-1.5 mb-3">
				<span
					className={`text-xs px-2 py-0.5 rounded-full border ${gameTypeColors[gameType]}`}
				>
					{gameType}
				</span>
				<span className="text-xs px-2 py-0.5 rounded-full bg-violet-bg text-violet-secondary border border-violet-border">
					{matchType}
				</span>
			</div>

			{/* Meta */}
			<div className="flex flex-wrap gap-3 text-xs text-violet-muted mb-3">
				<span className="flex items-center gap-1">
					<Calendar className="w-3 h-3" />
					{day}
				</span>
				<span className="flex items-center gap-1">
					<Clock className="w-3 h-3" />
					{time}
				</span>
				<span className="flex items-center gap-1">
					<MapPin className="w-3 h-3" />
					{venue}
				</span>
				<span className="flex items-center gap-1">
					<Users className="w-3 h-3" />
					{players}
				</span>
			</div>

			{/* CTA */}
			{!isCompact ? (
				<Button className="w-full text-sm h-9">Join Lobby</Button>
			) : (
				<Button className="w-full text-xs h-7" size="sm">
					Join
				</Button>
			)}
		</div>
	);
}
