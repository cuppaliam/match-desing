import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface LobbyCardProps {
	variant?: "standard" | "elevated" | "outlined" | "compact";
	host?: string;
	skill?: number;
	gameType?: "Competitive" | "Social" | "Casual";
	matchType?: "Singles" | "Doubles";
	day?: string;
	time?: string;
	players?: string;
	venue?: string;
	description?: string;
}

const skillColors: Record<number, string> = {
	3: "bg-green-100 text-green-700",
	5: "bg-blue-100 text-blue-700",
	7: "bg-orange-100 text-orange-700",
	9: "bg-purple-100 text-purple-700",
};

const gameTypeColors: Record<string, string> = {
	Competitive: "bg-grapefruit-50 text-grapefruit-700 border-grapefruit-200",
	Social: "bg-violet-bg text-violet-secondary border-violet-border",
	Casual: "bg-gray-100 text-gray-600 border-gray-200",
};

function LobbyCard({
	variant = "standard",
	host = "Alex T.",
	skill = 7,
	gameType = "Competitive",
	matchType = "Singles",
	day = "Saturday",
	time = "9:00 AM",
	players = "1 / 2",
	venue = "Doncaster",
	description = "Competitive singles, intermediate. Looking for a solid rally partner.",
}: LobbyCardProps) {
	const wrapperClass = {
		standard: "bg-white rounded-2xl shadow-card p-4",
		elevated: "bg-white rounded-2xl shadow-elevated p-4",
		outlined: "bg-white rounded-2xl border-2 border-grapefruit-200 p-4",
		compact: "bg-white rounded-xl shadow-card p-3",
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
					className={`px-2 py-0.5 rounded-full text-xs font-semibold ${skillColors[skill] ?? "bg-gray-100 text-gray-600"}`}
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
			<div
				className={`flex flex-wrap gap-3 text-violet-muted mb-3 ${isCompact ? "text-xs" : "text-xs"}`}
			>
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
				<Button
					className="w-full text-white text-sm h-9"
					style={{ backgroundColor: "#FF6347" }}
				>
					Join Lobby
				</Button>
			) : (
				<Button
					className="w-full text-white text-xs h-7"
					style={{ backgroundColor: "#FF6347" }}
					size="sm"
				>
					Join
				</Button>
			)}
		</div>
	);
}

function VenueCard() {
	return (
		<div className="bg-white rounded-2xl shadow-card p-4">
			<div className="flex items-start justify-between">
				<div>
					<h4 className="font-semibold text-violet-primary">
						Doncaster Recreation Centre
					</h4>
					<p className="text-sm text-violet-muted mt-0.5">
						1 Civic Place, Doncaster VIC 3108
					</p>
					<div className="flex gap-2 mt-2">
						<span className="text-xs px-2 py-0.5 bg-violet-bg text-violet-secondary rounded-full border border-violet-border">
							6 courts
						</span>
						<span className="text-xs px-2 py-0.5 bg-success/10 text-green-700 rounded-full border border-green-200">
							Open now
						</span>
						<span className="text-xs px-2 py-0.5 bg-violet-bg text-violet-secondary rounded-full border border-violet-border">
							2.1 km away
						</span>
					</div>
				</div>
				<div className="w-12 h-12 rounded-xl bg-violet-bg flex items-center justify-center flex-shrink-0">
					<MapPin className="w-5 h-5 text-grapefruit-400" />
				</div>
			</div>
		</div>
	);
}

export function CardShowcase() {
	return (
		<div className="space-y-8">
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<div>
					<p className="text-xs font-semibold text-violet-muted uppercase tracking-wide mb-2">
						Standard
					</p>
					<LobbyCard variant="standard" />
				</div>
				<div>
					<p className="text-xs font-semibold text-violet-muted uppercase tracking-wide mb-2">
						Elevated
					</p>
					<LobbyCard
						variant="elevated"
						host="Priya M."
						skill={5}
						gameType="Social"
						matchType="Doubles"
						day="Sunday"
						time="2:00 PM"
						players="3 / 4"
						venue="Box Hill"
						description="Social doubles, all levels welcome. Kids friendly, relaxed pace."
					/>
				</div>
				<div>
					<p className="text-xs font-semibold text-violet-muted uppercase tracking-wide mb-2">
						Outlined
					</p>
					<LobbyCard
						variant="outlined"
						host="Sam K."
						skill={9}
						gameType="Competitive"
						matchType="Singles"
						day="Friday"
						time="7:00 PM"
						players="1 / 2"
						venue="Glen Waverley"
						description="High intensity competitive singles. Advanced players only."
					/>
				</div>
				<div>
					<p className="text-xs font-semibold text-violet-muted uppercase tracking-wide mb-2">
						Compact — list view
					</p>
					<div className="space-y-2">
						<LobbyCard variant="compact" />
						<LobbyCard
							variant="compact"
							host="Jin L."
							skill={3}
							gameType="Casual"
							matchType="Doubles"
							day="Tuesday"
							time="6:30 PM"
							players="2 / 4"
							venue="Brunswick"
							description="Casual hit-around, beginners welcome."
						/>
					</div>
				</div>
			</div>

			{/* Venue Card */}
			<div>
				<p className="text-xs font-semibold text-violet-muted uppercase tracking-wide mb-2">
					Venue Card
				</p>
				<VenueCard />
			</div>
		</div>
	);
}
