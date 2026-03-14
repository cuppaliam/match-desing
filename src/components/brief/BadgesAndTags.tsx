const skillLevels = [
	{
		level: 1,
		label: "Beginner",
		bg: "#DCFCE7",
		text: "#15803D",
		border: "#BBF7D0",
	},
	{
		level: 2,
		label: "Novice",
		bg: "#D1FAE5",
		text: "#047857",
		border: "#A7F3D0",
	},
	{
		level: 3,
		label: "Rookie",
		bg: "#CFFAFE",
		text: "#0E7490",
		border: "#A5F3FC",
	},
	{
		level: 4,
		label: "Amateur",
		bg: "#DBEAFE",
		text: "#1D4ED8",
		border: "#BFDBFE",
	},
	{
		level: 5,
		label: "Intermediate",
		bg: "#EDE9FE",
		text: "#6D28D9",
		border: "#DDD6FE",
	},
	{
		level: 6,
		label: "Skilled",
		bg: "#F3E8FF",
		text: "#7E22CE",
		border: "#E9D5FF",
	},
	{
		level: 7,
		label: "Advanced",
		bg: "#FFF7ED",
		text: "#C2410C",
		border: "#FED7AA",
	},
	{
		level: 8,
		label: "Expert",
		bg: "#FEF3C7",
		text: "#B45309",
		border: "#FDE68A",
	},
	{
		level: 9,
		label: "Elite",
		bg: "#FFE4E6",
		text: "#BE123C",
		border: "#FECDD3",
	},
	{
		level: 10,
		label: "Top Player",
		bg: "#1E1830",
		text: "#FF6347",
		border: "#3D3560",
	},
];

const gameTypeTags = [
	{ label: "Competitive", selected: true },
	{ label: "Social", selected: false },
	{ label: "Casual", selected: false },
];

const matchTypeTags = [
	{ label: "Singles", selected: true },
	{ label: "Doubles", selected: false },
];

const lobbyStatuses = [
	{
		label: "Open",
		bg: "#DCFCE7",
		text: "#15803D",
		border: "#BBF7D0",
		dot: "#22C55E",
	},
	{
		label: "Almost Full",
		bg: "#FEF9C3",
		text: "#A16207",
		border: "#FDE68A",
		dot: "#F59E0B",
	},
	{
		label: "Full",
		bg: "#FFF2F0",
		text: "#9E2010",
		border: "#FFB4A8",
		dot: "#FF6347",
	},
];

const notificationSizes = [
	{ label: "Dot", content: null },
	{ label: "Count", content: "3" },
	{ label: "9+", content: "9+" },
];

export function BadgesAndTags() {
	return (
		<div className="space-y-10">
			{/* Skill Level Badges */}
			<div>
				<h3 className="text-sm font-semibold text-violet-secondary uppercase tracking-wide mb-4">
					Skill Level Badges (1–10)
				</h3>
				<div className="flex flex-wrap gap-2">
					{skillLevels.map((s) => (
						<span
							key={s.level}
							className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold border"
							style={{
								backgroundColor: s.bg,
								color: s.text,
								borderColor: s.border,
							}}
						>
							<span className="text-xs font-mono opacity-60">{s.level}</span>
							{s.label}
						</span>
					))}
				</div>
			</div>

			{/* Game Type */}
			<div>
				<h3 className="text-sm font-semibold text-violet-secondary uppercase tracking-wide mb-4">
					Game Type Tags
				</h3>
				<div className="flex gap-3">
					{gameTypeTags.map((tag) => (
						<div key={tag.label} className="flex flex-col items-center gap-2">
							<span
								className={`px-4 py-1.5 rounded-full text-sm font-medium border ${
									tag.selected
										? "bg-grapefruit-50 text-grapefruit-700 border-grapefruit-300"
										: "bg-white text-violet-secondary border-violet-border"
								}`}
							>
								{tag.label}
							</span>
							<span className="text-xs text-violet-muted">
								{tag.selected ? "Selected" : "Default"}
							</span>
						</div>
					))}
				</div>
			</div>

			{/* Match Type */}
			<div>
				<h3 className="text-sm font-semibold text-violet-secondary uppercase tracking-wide mb-4">
					Match Type Chips
				</h3>
				<div className="flex gap-3">
					{matchTypeTags.map((tag) => (
						<div key={tag.label} className="flex flex-col items-center gap-2">
							<span
								className={`px-4 py-1.5 rounded-full text-sm font-medium border ${
									tag.selected
										? "bg-violet-primary text-white border-violet-primary"
										: "bg-white text-violet-secondary border-violet-border"
								}`}
							>
								{tag.label}
							</span>
							<span className="text-xs text-violet-muted">
								{tag.selected ? "Selected" : "Default"}
							</span>
						</div>
					))}
				</div>
			</div>

			{/* Lobby Status */}
			<div>
				<h3 className="text-sm font-semibold text-violet-secondary uppercase tracking-wide mb-4">
					Lobby Status Badges
				</h3>
				<div className="flex gap-3">
					{lobbyStatuses.map((s) => (
						<span
							key={s.label}
							className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium border"
							style={{
								backgroundColor: s.bg,
								color: s.text,
								borderColor: s.border,
							}}
						>
							<span
								className="w-1.5 h-1.5 rounded-full flex-shrink-0"
								style={{ backgroundColor: s.dot }}
							/>
							{s.label}
						</span>
					))}
				</div>
			</div>

			{/* Notification Dots */}
			<div>
				<h3 className="text-sm font-semibold text-violet-secondary uppercase tracking-wide mb-4">
					Notification Indicators
				</h3>
				<div className="flex gap-8 items-end">
					{notificationSizes.map((n) => (
						<div key={n.label} className="flex flex-col items-center gap-3">
							<div className="relative w-10 h-10 bg-white border border-violet-border rounded-xl flex items-center justify-center shadow-card">
								<span className="text-violet-muted text-lg">🔔</span>
								{n.content === null ? (
									<span className="absolute top-1 right-1 w-2.5 h-2.5 bg-grapefruit-400 rounded-full border-2 border-white" />
								) : (
									<span className="absolute -top-1.5 -right-1.5 min-w-5 h-5 bg-grapefruit-400 rounded-full flex items-center justify-center text-white text-xs font-bold px-1">
										{n.content}
									</span>
								)}
							</div>
							<span className="text-xs text-violet-muted">{n.label}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
