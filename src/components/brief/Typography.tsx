import Image from "next/image";

const specimens = [
	{
		label: "Display",
		size: "text-5xl",
		weight: "font-bold",
		sample: "Find Your Match",
		note: "48px / Bold",
	},
	{
		label: "H1",
		size: "text-4xl",
		weight: "font-bold",
		sample: "Badminton Lobbies Near You",
		note: "36px / Bold",
	},
	{
		label: "H2",
		size: "text-3xl",
		weight: "font-semibold",
		sample: "Melbourne — Competitive",
		note: "30px / Semibold",
	},
	{
		label: "H3",
		size: "text-2xl",
		weight: "font-semibold",
		sample: "Saturday Morning Singles",
		note: "24px / Semibold",
	},
	{
		label: "H4",
		size: "text-xl",
		weight: "font-semibold",
		sample: "Doncaster Recreation Centre",
		note: "20px / Semibold",
	},
	{
		label: "Body Large",
		size: "text-lg",
		weight: "font-normal",
		sample: "Join lobbies, meet players, and book courts across Melbourne.",
		note: "18px / Regular",
	},
	{
		label: "Body",
		size: "text-base",
		weight: "font-normal",
		sample:
			"Competitive singles match, intermediate level. 2 spots remaining. Court 3 available from 9am.",
		note: "16px / Regular",
	},
	{
		label: "Body Small",
		size: "text-sm",
		weight: "font-normal",
		sample: "Last active 3 minutes ago · Joined Jan 2026",
		note: "14px / Regular",
	},
	{
		label: "Label",
		size: "text-sm",
		weight: "font-medium",
		sample: "Skill Level · Game Type · Venue",
		note: "14px / Medium",
	},
	{
		label: "Caption",
		size: "text-xs",
		weight: "font-normal",
		sample: "2.1 km away · Open until 10pm · 3 courts available",
		note: "12px / Regular",
	},
	{
		label: "Code",
		size: "text-sm font-mono",
		weight: "",
		sample: "lobby_id: mel_2026_0314_comp_sngl",
		note: "Mono / 14px",
	},
];

export function Typography() {
	return (
		<div className="space-y-2">
			{/* Logo wordmark specimen */}
			<div className="bg-white rounded-2xl shadow-card p-6 flex items-center justify-between">
				<div>
					<p className="text-xs font-semibold uppercase tracking-widest text-violet-muted mb-2">
						Wordmark — "karen" font
					</p>
					<Image
						src="/logo.svg"
						alt="Match logo"
						width={160}
						height={60}
						className="block"
					/>
				</div>
				<p className="text-xs text-violet-muted max-w-48 text-right">
					Custom SVG wordmark. Used in hero, navbar, and brand touchpoints.
				</p>
			</div>

			{/* Type specimens */}
			<div className="bg-white rounded-2xl shadow-card overflow-hidden divide-y divide-violet-border">
				{specimens.map((s) => (
					<div key={s.label} className="px-6 py-4 flex items-baseline gap-6">
						<div className="w-24 flex-shrink-0">
							<span className="text-xs font-mono text-violet-muted">
								{s.label}
							</span>
							<br />
							<span className="text-xs text-violet-muted opacity-60">
								{s.note}
							</span>
						</div>
						<p
							className={`${s.size} ${s.weight} text-violet-primary leading-tight flex-1`}
						>
							{s.sample}
						</p>
					</div>
				))}
			</div>

			{/* Colour pairings */}
			<div className="grid grid-cols-3 gap-3 mt-4">
				<div className="bg-grapefruit-400 rounded-xl p-4">
					<p className="text-white font-bold text-lg">Primary on Grapefruit</p>
					<p className="text-white/80 text-sm mt-1">White text on #FF6347</p>
				</div>
				<div className="bg-violet-primary rounded-xl p-4">
					<p className="text-white font-bold text-lg">Light on Dark</p>
					<p className="text-violet-muted text-sm mt-1">Muted on #1E1830</p>
				</div>
				<div className="bg-grapefruit-50 border border-grapefruit-200 rounded-xl p-4">
					<p className="text-grapefruit-700 font-bold text-lg">
						Tinted Surface
					</p>
					<p className="text-grapefruit-500 text-sm mt-1">Brand text on tint</p>
				</div>
			</div>
		</div>
	);
}
