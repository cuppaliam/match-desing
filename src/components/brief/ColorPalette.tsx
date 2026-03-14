const grapefruitScale = [
	{
		token: "grapefruit-50",
		hex: "#FFF2F0",
		usage: "Tint backgrounds, tag fills",
	},
	{
		token: "grapefruit-100",
		hex: "#FFD9D4",
		usage: "Hover states, subtle highlights",
	},
	{
		token: "grapefruit-200",
		hex: "#FFB4A8",
		usage: "Borders on tinted elements",
	},
	{ token: "grapefruit-300", hex: "#FF8B79", usage: "Disabled primary" },
	{
		token: "grapefruit-400",
		hex: "#FF6347",
		usage: "Primary CTA — main brand color",
	},
	{ token: "grapefruit-500", hex: "#E84C30", usage: "Primary hover" },
	{ token: "grapefruit-600", hex: "#C4341E", usage: "Active/pressed" },
	{ token: "grapefruit-700", hex: "#9E2010", usage: "Dark text on light bg" },
	{ token: "grapefruit-800", hex: "#7A1208", usage: "Deep accent" },
	{ token: "grapefruit-900", hex: "#570800", usage: "Darkest" },
];

const neutralScale = [
	{ token: "violet-bg", hex: "#EEEAF5", usage: "Page background start" },
	{ token: "violet-mid", hex: "#F4F2F8", usage: "Page background mid" },
	{ token: "violet-light", hex: "#F8F7FB", usage: "Page background end" },
	{ token: "violet-border", hex: "#E2DDF0", usage: "Card borders, dividers" },
	{ token: "violet-muted", hex: "#8B85A0", usage: "Placeholder text" },
	{ token: "violet-secondary", hex: "#5C5471", usage: "Secondary text" },
	{
		token: "violet-primary",
		hex: "#1E1830",
		usage: "Primary text (near black)",
	},
];

const semanticColors = [
	{ token: "success", hex: "#22C55E", usage: "Online, Matched, Confirmed" },
	{ token: "warning", hex: "#F59E0B", usage: "Almost Full, Pending" },
	{ token: "error", hex: "#EF4444", usage: "Cancelled, Error" },
];

function SwatchStrip({ colors }: { colors: typeof grapefruitScale }) {
	return (
		<div className="flex rounded-xl overflow-hidden shadow-card mb-2">
			{colors.map((c) => (
				<div
					key={c.token}
					className="flex-1 min-w-0 h-20"
					style={{ backgroundColor: c.hex }}
				/>
			))}
		</div>
	);
}

function SwatchGrid({
	colors,
}: {
	colors: typeof neutralScale | typeof semanticColors;
}) {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
			{colors.map((c) => (
				<div
					key={c.token}
					className="bg-white rounded-xl shadow-card overflow-hidden"
				>
					<div className="h-16" style={{ backgroundColor: c.hex }} />
					<div className="p-2">
						<p className="text-xs font-mono font-semibold text-violet-primary truncate">
							{c.token}
						</p>
						<p className="text-xs text-violet-muted">{c.hex}</p>
					</div>
				</div>
			))}
		</div>
	);
}

export function ColorPalette() {
	return (
		<div className="space-y-10">
			{/* Grapefruit Scale */}
			<div>
				<h3 className="text-sm font-semibold text-violet-secondary uppercase tracking-wide mb-4">
					Grapefruit Scale — Primary
				</h3>
				<SwatchStrip colors={grapefruitScale} />
				<div className="grid grid-cols-5 sm:grid-cols-10 gap-1 mt-1">
					{grapefruitScale.map((c) => (
						<div key={c.token} className="text-center">
							<p className="text-xs font-mono text-violet-muted">{c.hex}</p>
						</div>
					))}
				</div>
				<div className="mt-4 grid grid-cols-2 sm:grid-cols-5 gap-3">
					{grapefruitScale.slice(3, 8).map((c) => (
						<div
							key={c.token}
							className="bg-white rounded-xl shadow-card overflow-hidden"
						>
							<div className="h-12" style={{ backgroundColor: c.hex }} />
							<div className="p-2">
								<p className="text-xs font-mono font-semibold text-violet-primary">
									{c.token}
								</p>
								<p className="text-xs text-violet-muted leading-tight">
									{c.usage}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Cool Neutrals */}
			<div>
				<h3 className="text-sm font-semibold text-violet-secondary uppercase tracking-wide mb-4">
					Cool Violet-Grey Neutrals
				</h3>
				<SwatchGrid colors={neutralScale} />
			</div>

			{/* Semantic */}
			<div>
				<h3 className="text-sm font-semibold text-violet-secondary uppercase tracking-wide mb-4">
					Semantic Colors
				</h3>
				<div className="flex gap-4">
					{semanticColors.map((c) => (
						<div
							key={c.token}
							className="bg-white rounded-xl shadow-card overflow-hidden flex-1"
						>
							<div className="h-16" style={{ backgroundColor: c.hex }} />
							<div className="p-3">
								<p className="text-xs font-mono font-semibold text-violet-primary">
									{c.token}
								</p>
								<p className="text-xs text-violet-muted">{c.hex}</p>
								<p className="text-xs text-violet-secondary mt-1">{c.usage}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
