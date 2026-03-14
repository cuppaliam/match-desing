import {
	AlertCircle,
	Bell,
	Calendar,
	Check,
	CheckCircle2,
	ChevronLeft,
	ChevronRight,
	Clock,
	Edit2,
	House,
	Loader2,
	MapPin,
	Menu,
	Mic,
	MicOff,
	Plus,
	Search,
	Send,
	Swords,
	Target,
	Trash2,
	Trophy,
	User,
	UserPlus,
	Users,
	Wifi,
	X,
	XCircle,
} from "lucide-react";
import Image from "next/image";

// Shuttlecock icon rendered from the brand SVG asset
function ShuttlecockIcon({ className }: { className?: string }) {
	return (
		<div className={`relative ${className}`}>
			<Image
				src="/shuttlecock.svg"
				alt="Shuttlecock"
				fill
				className="object-contain"
				style={{ filter: "invert(13%) sepia(23%) saturate(1200%) hue-rotate(223deg) brightness(50%) contrast(85%)" }}
			/>
		</div>
	);
}

const iconGroups = [
	{
		label: "App Actions",
		icons: [
			{ Icon: Plus, name: "Plus" },
			{ Icon: Search, name: "Search" },
			{ Icon: Mic, name: "Mic" },
			{ Icon: MicOff, name: "MicOff" },
			{ Icon: Send, name: "Send" },
			{ Icon: Edit2, name: "Edit2" },
			{ Icon: Trash2, name: "Trash2" },
			{ Icon: Check, name: "Check" },
			{ Icon: X, name: "X" },
		],
	},
	{
		label: "Navigation",
		icons: [
			{ Icon: House, name: "House" },
			{ Icon: Swords, name: "Swords" },
			{ Icon: Bell, name: "Bell" },
			{ Icon: User, name: "User" },
			{ Icon: ChevronLeft, name: "ChevronLeft" },
			{ Icon: ChevronRight, name: "ChevronRight" },
			{ Icon: Menu, name: "Menu" },
		],
	},
	{
		label: "Sports / Match",
		icons: [
			{ Icon: Users, name: "Users" },
			{ Icon: UserPlus, name: "UserPlus" },
			{ Icon: MapPin, name: "MapPin" },
			{ Icon: Calendar, name: "Calendar" },
			{ Icon: Clock, name: "Clock" },
			{ Icon: Trophy, name: "Trophy" },
			{ Icon: Target, name: "Target" },
		],
	},
	{
		label: "Status",
		icons: [
			{ Icon: CheckCircle2, name: "CheckCircle2" },
			{ Icon: XCircle, name: "XCircle" },
			{ Icon: AlertCircle, name: "AlertCircle" },
			{ Icon: Loader2, name: "Loader2" },
			{ Icon: Wifi, name: "Wifi" },
		],
	},
];

const sizes = [
	{ label: "16px", size: 16 },
	{ label: "20px", size: 20 },
	{ label: "24px", size: 24 },
	{ label: "32px", size: 32 },
];

export function IconShowcase() {
	return (
		<div className="space-y-8">
			{/* Shuttlecock brand icon callout */}
			<div className="bg-grapefruit-50 border border-grapefruit-200 rounded-2xl p-4 flex items-center gap-4">
				<div className="w-12 h-12 rounded-xl bg-white shadow-card flex items-center justify-center flex-shrink-0">
					<ShuttlecockIcon className="w-7 h-7" />
				</div>
				<div>
					<p className="text-sm font-semibold text-grapefruit-700">
						Shuttlecock — Brand Icon
					</p>
					<p className="text-xs text-grapefruit-500 mt-0.5">
						Sport-specific SVG asset. Used in hero decoration, empty states, and
						brand touchpoints. Drawn from{" "}
						<code className="font-mono text-xs">/public/shuttlecock.svg</code>
					</p>
				</div>
			</div>

			{iconGroups.map((group) => (
				<div key={group.label}>
					<h3 className="text-sm font-semibold text-violet-secondary uppercase tracking-wide mb-3">
						{group.label}
					</h3>
					<div className="flex flex-wrap gap-2">
						{group.icons.map(({ Icon, name }) => (
							<div
								key={name}
								className="flex flex-col items-center gap-1.5 bg-white rounded-xl shadow-card px-3 py-3 w-20 transition-colors hover:bg-violet-mid/40"
							>
								<Icon className="w-6 h-6 text-violet-primary" />
								<span className="text-xs text-violet-muted text-center leading-tight">
									{name}
								</span>
							</div>
						))}
					</div>
				</div>
			))}

			{/* Size scale */}
			<div>
				<h3 className="text-sm font-semibold text-violet-secondary uppercase tracking-wide mb-3">
					Icon Sizes
				</h3>
				<div className="flex items-end gap-6 bg-white rounded-2xl shadow-card p-6">
					{sizes.map(({ label, size }) => (
						<div key={label} className="flex flex-col items-center gap-2">
							<MapPin
								style={{ width: size, height: size }}
								className="text-grapefruit-400"
							/>
							<span className="text-xs text-violet-muted">{label}</span>
						</div>
					))}
				</div>
			</div>

			{/* Colour contexts */}
			<div>
				<h3 className="text-sm font-semibold text-violet-secondary uppercase tracking-wide mb-3">
					Colour Contexts
				</h3>
				<div className="flex gap-4">
					{[
						{ bg: "bg-white", color: "text-violet-primary", label: "On white" },
						{
							bg: "bg-grapefruit-400",
							color: "text-white",
							label: "On grapefruit",
						},
						{ bg: "bg-violet-primary", color: "text-white", label: "On dark" },
						{
							bg: "bg-violet-bg",
							color: "text-violet-secondary",
							label: "On bg",
						},
					].map(({ bg, color, label }) => (
						<div key={label} className="flex flex-col items-center gap-2">
							<div
								className={`w-12 h-12 rounded-xl ${bg} shadow-card flex items-center justify-center`}
							>
								<Trophy className={`w-6 h-6 ${color}`} />
							</div>
							<span className="text-xs text-violet-muted">{label}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
