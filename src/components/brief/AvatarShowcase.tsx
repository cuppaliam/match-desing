import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const sizes = [
	{ label: "xs", cls: "w-6 h-6", text: "text-xs" },
	{ label: "sm", cls: "w-8 h-8", text: "text-xs" },
	{ label: "md", cls: "w-10 h-10", text: "text-sm" },
	{ label: "lg", cls: "w-14 h-14", text: "text-base" },
	{ label: "xl", cls: "w-18 h-18", text: "text-lg" },
	{ label: "2xl", cls: "w-24 h-24", text: "text-2xl" },
];

const statusDots = [
	{ label: "Online", color: "bg-success", ring: "ring-white" },
	{ label: "In Game", color: "bg-grapefruit-400", ring: "ring-white" },
	{ label: "Offline", color: "bg-gray-400", ring: "ring-white" },
];

const stackUsers = ["AT", "PM", "SK", "JL", "MR"];

export function AvatarShowcase() {
	return (
		<div className="space-y-10">
			{/* Sizes */}
			<div>
				<h3 className="text-sm font-semibold text-violet-secondary uppercase tracking-wide mb-4">
					Sizes
				</h3>
				<div className="flex items-end gap-4 flex-wrap bg-white rounded-2xl shadow-card p-6">
					{sizes.map(({ label, cls, text }) => (
						<div key={label} className="flex flex-col items-center gap-2">
							<Avatar className={cls}>
								<AvatarFallback
									className={`bg-grapefruit-100 text-grapefruit-700 font-semibold ${text}`}
								>
									AT
								</AvatarFallback>
							</Avatar>
							<span className="text-xs text-violet-muted">{label}</span>
						</div>
					))}
				</div>
			</div>

			{/* Fallback states */}
			<div>
				<h3 className="text-sm font-semibold text-violet-secondary uppercase tracking-wide mb-4">
					Fallback States
				</h3>
				<div className="flex gap-6 bg-white rounded-2xl shadow-card p-6">
					{/* Loaded */}
					<div className="flex flex-col items-center gap-2">
						<Avatar className="w-12 h-12">
							<AvatarImage src="https://i.pravatar.cc/48?img=3" alt="User" />
							<AvatarFallback className="bg-grapefruit-100 text-grapefruit-700 font-semibold">
								AT
							</AvatarFallback>
						</Avatar>
						<span className="text-xs text-violet-muted">Loaded</span>
					</div>
					{/* Initials */}
					<div className="flex flex-col items-center gap-2">
						<Avatar className="w-12 h-12">
							<AvatarFallback className="bg-grapefruit-100 text-grapefruit-700 font-semibold">
								PM
							</AvatarFallback>
						</Avatar>
						<span className="text-xs text-violet-muted">Initials</span>
					</div>
					{/* Icon */}
					<div className="flex flex-col items-center gap-2">
						<Avatar className="w-12 h-12">
							<AvatarFallback className="bg-violet-bg text-violet-muted">
								<User className="w-5 h-5" />
							</AvatarFallback>
						</Avatar>
						<span className="text-xs text-violet-muted">Icon</span>
					</div>
					{/* Grapefruit variant */}
					<div className="flex flex-col items-center gap-2">
						<Avatar className="w-12 h-12">
							<AvatarFallback className="bg-grapefruit-400 text-white font-semibold">
								SK
							</AvatarFallback>
						</Avatar>
						<span className="text-xs text-violet-muted">Brand</span>
					</div>
					{/* Dark */}
					<div className="flex flex-col items-center gap-2">
						<Avatar className="w-12 h-12">
							<AvatarFallback className="bg-violet-primary text-white font-semibold">
								JL
							</AvatarFallback>
						</Avatar>
						<span className="text-xs text-violet-muted">Dark</span>
					</div>
				</div>
			</div>

			{/* Status Indicators */}
			<div>
				<h3 className="text-sm font-semibold text-violet-secondary uppercase tracking-wide mb-4">
					Status Indicators
				</h3>
				<div className="flex gap-6 bg-white rounded-2xl shadow-card p-6">
					{statusDots.map(({ label, color }) => (
						<div key={label} className="flex flex-col items-center gap-2">
							<div className="relative">
								<Avatar className="w-12 h-12">
									<AvatarFallback className="bg-grapefruit-100 text-grapefruit-700 font-semibold">
										AT
									</AvatarFallback>
								</Avatar>
								<span
									className={`absolute bottom-0.5 right-0.5 w-3 h-3 ${color} rounded-full ring-2 ring-white`}
								/>
							</div>
							<span className="text-xs text-violet-muted">{label}</span>
						</div>
					))}
				</div>
			</div>

			{/* Avatar Stack */}
			<div>
				<h3 className="text-sm font-semibold text-violet-secondary uppercase tracking-wide mb-4">
					Avatar Stack — Players in Queue
				</h3>
				<div className="bg-white rounded-2xl shadow-card p-6">
					<div className="flex items-center gap-3">
						<div className="flex -space-x-3">
							{stackUsers.map((initials, i) => (
								<Avatar
									key={initials}
									className="w-9 h-9 ring-2 ring-white"
									style={{ zIndex: stackUsers.length - i }}
								>
									<AvatarFallback className="bg-grapefruit-100 text-grapefruit-700 text-xs font-semibold">
										{initials}
									</AvatarFallback>
								</Avatar>
							))}
							<div
								className="w-9 h-9 rounded-full bg-violet-bg border-2 border-white ring-2 ring-white flex items-center justify-center text-xs font-semibold text-violet-secondary"
								style={{ zIndex: 0 }}
							>
								+12
							</div>
						</div>
						<div>
							<p className="text-sm font-medium text-violet-primary">
								17 players nearby
							</p>
							<p className="text-xs text-violet-muted">
								Skill 5–8 · Melbourne CBD
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
