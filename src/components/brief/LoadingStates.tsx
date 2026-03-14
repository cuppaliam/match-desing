import { Loader2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

function SkeletonLobbyCard() {
	return (
		<div className="bg-white rounded-2xl shadow-card p-4 space-y-3">
			<div className="flex items-center gap-3">
				<Skeleton className="w-9 h-9 rounded-full" />
				<div className="space-y-1.5 flex-1">
					<Skeleton className="h-3 w-24 rounded" />
					<Skeleton className="h-2.5 w-16 rounded" />
				</div>
				<Skeleton className="h-5 w-12 rounded-full" />
			</div>
			<Skeleton className="h-3 w-full rounded" />
			<Skeleton className="h-3 w-3/4 rounded" />
			<div className="flex gap-2">
				<Skeleton className="h-5 w-20 rounded-full" />
				<Skeleton className="h-5 w-16 rounded-full" />
			</div>
			<div className="flex gap-3">
				<Skeleton className="h-3 w-16 rounded" />
				<Skeleton className="h-3 w-14 rounded" />
				<Skeleton className="h-3 w-18 rounded" />
			</div>
			<Skeleton className="h-9 w-full rounded-lg" />
		</div>
	);
}

const spinnerVariants = [
	{ size: "w-4 h-4", label: "sm", color: "text-grapefruit-400" },
	{ size: "w-6 h-6", label: "md", color: "text-grapefruit-400" },
	{ size: "w-10 h-10", label: "lg", color: "text-grapefruit-400" },
	{ size: "w-6 h-6", label: "violet", color: "text-violet-secondary" },
	{ size: "w-6 h-6", label: "white", color: "text-white" },
];

export function LoadingStates() {
	return (
		<div className="space-y-10">
			{/* Skeleton Card */}
			<div>
				<h3 className="text-sm font-semibold text-violet-secondary uppercase tracking-wide mb-3">
					Skeleton LobbyCard
				</h3>
				<div className="max-w-sm">
					<SkeletonLobbyCard />
				</div>
			</div>

			{/* Skeleton Grid */}
			<div>
				<h3 className="text-sm font-semibold text-violet-secondary uppercase tracking-wide mb-3">
					Skeleton Grid — Discover Screen
				</h3>
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
					<SkeletonLobbyCard />
					<SkeletonLobbyCard />
					<SkeletonLobbyCard />
				</div>
			</div>

			{/* Spinners */}
			<div>
				<h3 className="text-sm font-semibold text-violet-secondary uppercase tracking-wide mb-3">
					Spinners
				</h3>
				<div className="flex items-end gap-6 bg-white rounded-2xl shadow-card p-6">
					{spinnerVariants.slice(0, 3).map(({ size, label, color }) => (
						<div key={label} className="flex flex-col items-center gap-2">
							<Loader2 className={`${size} ${color} animate-spin`} />
							<span className="text-xs text-violet-muted">{label}</span>
						</div>
					))}
					<div className="flex flex-col items-center gap-2">
						<Loader2 className="w-6 h-6 text-violet-secondary animate-spin" />
						<span className="text-xs text-violet-muted">violet</span>
					</div>
					<div className="flex flex-col items-center gap-2">
						<div className="w-10 h-10 rounded-full bg-violet-primary flex items-center justify-center">
							<Loader2 className="w-6 h-6 text-white animate-spin" />
						</div>
						<span className="text-xs text-violet-muted">white on dark</span>
					</div>
				</div>
			</div>

			{/* Progress bars */}
			<div>
				<h3 className="text-sm font-semibold text-violet-secondary uppercase tracking-wide mb-3">
					Progress Bars — Profile Completion
				</h3>
				<div className="bg-white rounded-2xl shadow-card p-6 space-y-4">
					{[
						{ label: "Just started", value: 25, color: "text-error" },
						{ label: "Getting there", value: 60, color: "text-warning" },
						{ label: "Complete!", value: 100, color: "text-success" },
					].map(({ label, value, color }) => (
						<div key={label} className="space-y-1.5">
							<div className="flex justify-between text-sm">
								<span className="text-violet-secondary">{label}</span>
								<span className={`font-semibold ${color}`}>{value}%</span>
							</div>
							<div className="w-full h-2 bg-violet-mid rounded-full overflow-hidden">
								<div
									className="h-full rounded-full transition-all"
									style={{
										width: `${value}%`,
										backgroundColor:
											value === 100
												? "#22C55E"
												: value >= 60
													? "#F59E0B"
													: "#EF4444",
									}}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
