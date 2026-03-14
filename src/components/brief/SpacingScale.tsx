const spacingScale = [
	{ token: "1", px: "4px", label: "xs" },
	{ token: "2", px: "8px", label: "sm" },
	{ token: "3", px: "12px", label: "" },
	{ token: "4", px: "16px", label: "md" },
	{ token: "5", px: "20px", label: "" },
	{ token: "6", px: "24px", label: "lg" },
	{ token: "8", px: "32px", label: "xl" },
	{ token: "10", px: "40px", label: "" },
	{ token: "12", px: "48px", label: "2xl" },
	{ token: "16", px: "64px", label: "3xl" },
	{ token: "20", px: "80px", label: "" },
	{ token: "24", px: "96px", label: "4xl" },
];

const radiiScale = [
	{ label: "none", value: "0px", class: "rounded-none" },
	{ label: "sm", value: "4px", class: "rounded-sm" },
	{ label: "md", value: "8px", class: "rounded-md" },
	{ label: "lg", value: "12px", class: "rounded-lg" },
	{ label: "xl", value: "16px", class: "rounded-xl" },
	{ label: "2xl", value: "20px", class: "rounded-2xl" },
	{ label: "3xl", value: "24px", class: "rounded-3xl" },
	{ label: "full", value: "9999px", class: "rounded-full" },
];

export function SpacingScale() {
	return (
		<div className="space-y-10">
			{/* Spacing */}
			<div>
				<h3 className="text-sm font-semibold text-violet-secondary uppercase tracking-wide mb-4">
					Spacing Scale
				</h3>
				<div className="bg-white rounded-2xl shadow-card p-6 space-y-3">
					{spacingScale.map((s) => (
						<div key={s.token} className="flex items-center gap-4">
							<div className="w-20 text-xs font-mono text-violet-muted text-right">
								<span className="text-violet-primary">t-{s.token}</span>
								{s.label && (
									<span className="text-grapefruit-400"> ({s.label})</span>
								)}
							</div>
							<div
								className="h-4 bg-grapefruit-400 rounded-sm flex-shrink-0"
								style={{ width: s.px }}
							/>
							<span className="text-xs text-violet-muted">{s.px}</span>
						</div>
					))}
				</div>
			</div>

			{/* Border Radius */}
			<div>
				<h3 className="text-sm font-semibold text-violet-secondary uppercase tracking-wide mb-4">
					Border Radius Scale
				</h3>
				<div className="flex flex-wrap gap-4">
					{radiiScale.map((r) => (
						<div key={r.label} className="flex flex-col items-center gap-2">
							<div
								className={`w-16 h-16 bg-grapefruit-100 border-2 border-grapefruit-300 ${r.class}`}
							/>
							<p className="text-xs font-mono text-violet-primary">{r.label}</p>
							<p className="text-xs text-violet-muted">{r.value}</p>
						</div>
					))}
				</div>
			</div>

			{/* Shadow Scale */}
			<div>
				<h3 className="text-sm font-semibold text-violet-secondary uppercase tracking-wide mb-4">
					Shadow Scale
				</h3>
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
					<div className="flex flex-col items-center gap-3">
						<div className="w-full h-24 bg-white rounded-2xl" />
						<p className="text-xs font-mono text-violet-primary">none</p>
					</div>
					<div className="flex flex-col items-center gap-3">
						<div className="w-full h-24 bg-white rounded-2xl shadow-card" />
						<p className="text-xs font-mono text-violet-primary">shadow-card</p>
					</div>
					<div className="flex flex-col items-center gap-3">
						<div className="w-full h-24 bg-white rounded-2xl shadow-elevated" />
						<p className="text-xs font-mono text-violet-primary">
							shadow-elevated
						</p>
					</div>
					<div className="flex flex-col items-center gap-3">
						<div
							className="w-full h-24 bg-white rounded-2xl"
							style={{ boxShadow: "0 0 20px rgba(255, 99, 71, 0.30)" }}
						/>
						<p className="text-xs font-mono text-violet-primary">shadow-glow</p>
					</div>
				</div>
			</div>
		</div>
	);
}
