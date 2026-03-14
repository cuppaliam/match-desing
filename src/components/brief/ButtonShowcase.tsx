import { Heart, Loader2, Mic, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ButtonShowcase() {
	return (
		<div className="space-y-8">
			{/* Variant × Size Grid */}
			<div className="bg-white rounded-2xl shadow-card p-6 overflow-x-auto">
				<table className="w-full">
					<thead>
						<tr>
							<th className="text-left text-xs font-semibold text-violet-muted uppercase tracking-wide pb-4 w-32">
								Variant
							</th>
							<th className="text-center text-xs font-semibold text-violet-muted uppercase tracking-wide pb-4">
								sm
							</th>
							<th className="text-center text-xs font-semibold text-violet-muted uppercase tracking-wide pb-4">
								md
							</th>
							<th className="text-center text-xs font-semibold text-violet-muted uppercase tracking-wide pb-4">
								lg
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-violet-border">
						{/* Primary */}
						<tr>
							<td className="py-4 text-sm font-medium text-violet-secondary">
								Primary
							</td>
							<td className="py-4 text-center">
								<Button size="sm">Join Lobby</Button>
							</td>
							<td className="py-4 text-center">
								<Button>Join Lobby</Button>
							</td>
							<td className="py-4 text-center">
								<Button size="lg">Join Lobby</Button>
							</td>
						</tr>
						{/* Secondary */}
						<tr>
							<td className="py-4 text-sm font-medium text-violet-secondary">
								Secondary
							</td>
							<td className="py-4 text-center">
								<Button
									size="sm"
									variant="outline"
									className="border-violet-border text-violet-secondary hover:bg-violet-mid"
								>
									View Details
								</Button>
							</td>
							<td className="py-4 text-center">
								<Button
									variant="outline"
									className="border-violet-border text-violet-secondary hover:bg-violet-mid"
								>
									View Details
								</Button>
							</td>
							<td className="py-4 text-center">
								<Button
									size="lg"
									variant="outline"
									className="border-violet-border text-violet-secondary hover:bg-violet-mid"
								>
									View Details
								</Button>
							</td>
						</tr>
						{/* Ghost */}
						<tr>
							<td className="py-4 text-sm font-medium text-violet-secondary">
								Ghost
							</td>
							<td className="py-4 text-center">
								<Button
									size="sm"
									variant="ghost"
									className="text-grapefruit-500 hover:bg-grapefruit-50"
								>
									See All
								</Button>
							</td>
							<td className="py-4 text-center">
								<Button
									variant="ghost"
									className="text-grapefruit-500 hover:bg-grapefruit-50"
								>
									See All
								</Button>
							</td>
							<td className="py-4 text-center">
								<Button
									size="lg"
									variant="ghost"
									className="text-grapefruit-500 hover:bg-grapefruit-50"
								>
									See All
								</Button>
							</td>
						</tr>
						{/* Destructive */}
						<tr>
							<td className="py-4 text-sm font-medium text-violet-secondary">
								Destructive
							</td>
							<td className="py-4 text-center">
								<Button size="sm" variant="destructive">
									Cancel
								</Button>
							</td>
							<td className="py-4 text-center">
								<Button variant="destructive">Cancel</Button>
							</td>
							<td className="py-4 text-center">
								<Button size="lg" variant="destructive">
									Cancel
								</Button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			{/* States Row */}
			<div>
				<h3 className="text-sm font-semibold text-violet-secondary uppercase tracking-wide mb-3">
					Primary — States
				</h3>
				<div className="flex flex-wrap gap-3 bg-white rounded-2xl shadow-card p-6">
					<div className="flex flex-col items-center gap-2">
						<Button>Default</Button>
						<span className="text-xs text-violet-muted">Default</span>
					</div>
					<div className="flex flex-col items-center gap-2">
						{/* Simulate hover state at rest */}
						<Button className="bg-grapefruit-500 text-white">Hover</Button>
						<span className="text-xs text-violet-muted">Hover</span>
					</div>
					<div className="flex flex-col items-center gap-2">
						<Button className="ring-2 ring-grapefruit-400 ring-offset-2">
							Focus
						</Button>
						<span className="text-xs text-violet-muted">Focus</span>
					</div>
					<div className="flex flex-col items-center gap-2">
						<Button disabled={false}>
							<Loader2 className="w-4 h-4 mr-2 animate-spin" />
							Loading
						</Button>
						<span className="text-xs text-violet-muted">Loading</span>
					</div>
					<div className="flex flex-col items-center gap-2">
						<Button disabled>Disabled</Button>
						<span className="text-xs text-violet-muted">Disabled</span>
					</div>
				</div>
			</div>

			{/* Icon Buttons */}
			<div>
				<h3 className="text-sm font-semibold text-violet-secondary uppercase tracking-wide mb-3">
					Icon Buttons
				</h3>
				<div className="flex flex-wrap gap-4 bg-white rounded-2xl shadow-card p-6">
					<div className="flex flex-col items-center gap-2">
						<button
							type="button"
							className="w-10 h-10 rounded-full bg-grapefruit-50 border border-grapefruit-200 flex items-center justify-center text-grapefruit-500 hover:bg-grapefruit-100 transition-colors"
						>
							<Heart className="w-5 h-5" />
						</button>
						<span className="text-xs text-violet-muted">Like</span>
					</div>
					<div className="flex flex-col items-center gap-2">
						<button
							type="button"
							className="w-10 h-10 rounded-full bg-violet-mid border border-violet-border flex items-center justify-center text-violet-secondary hover:bg-violet-bg transition-colors"
						>
							<X className="w-5 h-5" />
						</button>
						<span className="text-xs text-violet-muted">Pass</span>
					</div>
					<div className="flex flex-col items-center gap-2">
						<button
							type="button"
							className="w-14 h-14 rounded-full bg-grapefruit-400 flex items-center justify-center text-white hover:bg-grapefruit-500 transition-all duration-200 hover:scale-105"
							style={{ boxShadow: "0 0 24px rgba(255, 99, 71, 0.40)" }}
						>
							<Mic className="w-6 h-6" />
						</button>
						<span className="text-xs text-violet-muted">Voice Search</span>
					</div>
					<div className="flex flex-col items-center gap-2">
						<button
							type="button"
							className="w-12 h-12 rounded-full bg-grapefruit-400 flex items-center justify-center text-white hover:bg-grapefruit-500 transition-all duration-200 hover:scale-105 active:scale-95"
						>
							<Plus className="w-6 h-6" />
						</button>
						<span className="text-xs text-violet-muted">Create Lobby</span>
					</div>
				</div>
			</div>

			{/* Pill / full-width */}
			<div>
				<h3 className="text-sm font-semibold text-violet-secondary uppercase tracking-wide mb-3">
					Full-Width & Pill
				</h3>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white rounded-2xl shadow-card p-6">
					<Button className="w-full rounded-full">Find a Match</Button>
					<Button
						className="w-full rounded-full border-grapefruit-400 text-grapefruit-500 hover:bg-grapefruit-50"
						variant="outline"
					>
						Create a Lobby
					</Button>
				</div>
			</div>
		</div>
	);
}
