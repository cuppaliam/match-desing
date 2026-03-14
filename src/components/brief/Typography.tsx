import Image from "next/image";

const displaySpecimens = [
	{
		label: "Display",
		size: "text-5xl",
		weight: "font-bold",
		sample: "Find Your Match",
		note: "48px / Bold",
		font: "font-display",
	},
	{
		label: "H1",
		size: "text-4xl",
		weight: "font-bold",
		sample: "Badminton Lobbies Near You",
		note: "36px / Bold",
		font: "font-display",
	},
	{
		label: "H2",
		size: "text-3xl",
		weight: "font-semibold",
		sample: "Melbourne — Competitive",
		note: "30px / Semibold",
		font: "font-display",
	},
	{
		label: "H3",
		size: "text-2xl",
		weight: "font-semibold",
		sample: "Saturday Morning Singles",
		note: "24px / Semibold",
		font: "font-display",
	},
];

const bodySpecimens = [
	{
		label: "H4",
		size: "text-xl",
		weight: "font-semibold",
		sample: "Doncaster Recreation Centre",
		note: "20px / Semibold",
		font: "",
	},
	{
		label: "Body Large",
		size: "text-lg",
		weight: "font-normal",
		sample: "Join lobbies, meet players, and book courts across Melbourne.",
		note: "18px / Regular",
		font: "",
	},
	{
		label: "Body",
		size: "text-base",
		weight: "font-normal",
		sample:
			"Competitive singles match, intermediate level. 2 spots remaining. Court 3 available from 9am.",
		note: "16px / Regular",
		font: "",
	},
	{
		label: "Body Small",
		size: "text-sm",
		weight: "font-normal",
		sample: "Last active 3 minutes ago · Joined Jan 2026",
		note: "14px / Regular",
		font: "",
	},
	{
		label: "Label",
		size: "text-sm",
		weight: "font-medium",
		sample: "Skill Level · Game Type · Venue",
		note: "14px / Medium",
		font: "",
	},
	{
		label: "Caption",
		size: "text-xs",
		weight: "font-normal",
		sample: "2.1 km away · Open until 10pm · 3 courts available",
		note: "12px / Regular",
		font: "",
	},
	{
		label: "Code",
		size: "text-sm font-mono",
		weight: "",
		sample: "lobby_id: mel_2026_0314_comp_sngl",
		note: "Mono / 14px",
		font: "",
	},
];

export function Typography() {
	return (
		<div className="space-y-4">
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

			{/* Display typeface showcase */}
			<div className="bg-grapefruit-50 border border-grapefruit-200 rounded-2xl p-6">
				<div className="flex items-center justify-between mb-4">
					<p className="text-xs font-semibold uppercase tracking-widest text-grapefruit-500">
						Display — Plus Jakarta Sans
					</p>
					<span className="text-xs text-grapefruit-400 bg-grapefruit-100 px-2 py-0.5 rounded-full">
						Headings &amp; Brand Moments
					</span>
				</div>
				<p
					className="font-display font-bold text-5xl text-violet-primary leading-none mb-2"
					style={{ fontFamily: "var(--font-display)" }}
				>
					Find Your Match
				</p>
				<p
					className="font-display font-semibold text-2xl text-violet-secondary leading-snug"
					style={{ fontFamily: "var(--font-display)" }}
				>
					Badminton Lobbies Near You
				</p>
				<p className="text-xs text-grapefruit-500 mt-4">
					Display through H3 — rounds and warmth to emotional brand headlines.
					Body text uses Geist Sans for readability in UI contexts.
				</p>
			</div>

			{/* Display specimens */}
			<div className="bg-white rounded-2xl shadow-card overflow-hidden divide-y divide-violet-border">
				<div className="px-4 py-2 bg-violet-bg">
					<span className="text-xs font-semibold text-violet-secondary uppercase tracking-wide">
						Display &amp; Headings — Plus Jakarta Sans
					</span>
				</div>
				{displaySpecimens.map((s) => (
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
							style={{ fontFamily: "var(--font-display)" }}
						>
							{s.sample}
						</p>
					</div>
				))}
			</div>

			{/* Body specimens */}
			<div className="bg-white rounded-2xl shadow-card overflow-hidden divide-y divide-violet-border">
				<div className="px-4 py-2 bg-violet-bg">
					<span className="text-xs font-semibold text-violet-secondary uppercase tracking-wide">
						Body &amp; UI — Geist Sans
					</span>
				</div>
				{bodySpecimens.map((s) => (
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
			<div className="grid grid-cols-3 gap-3 mt-2">
				<div className="bg-grapefruit-400 rounded-xl p-4">
					<p
						className="text-white font-bold text-lg leading-tight"
						style={{ fontFamily: "var(--font-display)" }}
					>
						Primary on Grapefruit
					</p>
					<p className="text-white/80 text-sm mt-1">White text on #FF6347</p>
				</div>
				<div className="bg-violet-primary rounded-xl p-4">
					<p
						className="text-white font-bold text-lg leading-tight"
						style={{ fontFamily: "var(--font-display)" }}
					>
						Light on Dark
					</p>
					<p className="text-violet-muted text-sm mt-1">Muted on #1E1830</p>
				</div>
				<div className="bg-grapefruit-50 border border-grapefruit-200 rounded-xl p-4">
					<p
						className="text-grapefruit-700 font-bold text-lg leading-tight"
						style={{ fontFamily: "var(--font-display)" }}
					>
						Tinted Surface
					</p>
					<p className="text-grapefruit-500 text-sm mt-1">Brand text on tint</p>
				</div>
			</div>
		</div>
	);
}
