import { Bell, House, Plus, Swords, User } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

function NavbarPreview() {
	return (
		<div className="bg-white shadow-card rounded-2xl overflow-hidden">
			<div className="flex items-center justify-between px-6 py-3 border-b border-violet-border">
				{/* Logo */}
				<Image src="/logo.svg" alt="Match" width={70} height={28} />
				{/* Nav links */}
				<nav className="hidden sm:flex items-center gap-6">
					{["Home", "Match", "Create", "Profile"].map((link, i) => (
						<a
							key={link}
							href="#"
							className={`text-sm font-medium transition-colors ${
								i === 0
									? "text-grapefruit-400"
									: "text-violet-secondary hover:text-violet-primary"
							}`}
						>
							{link}
						</a>
					))}
				</nav>
				{/* Right side */}
				<div className="flex items-center gap-3">
					<button
						type="button"
						className="relative w-8 h-8 flex items-center justify-center text-violet-secondary hover:text-violet-primary"
					>
						<Bell className="w-5 h-5" />
						<span className="absolute top-1 right-1 w-2 h-2 bg-grapefruit-400 rounded-full" />
					</button>
					<Avatar className="w-8 h-8">
						<AvatarFallback className="bg-grapefruit-100 text-grapefruit-700 text-xs font-semibold">
							LM
						</AvatarFallback>
					</Avatar>
				</div>
			</div>
		</div>
	);
}

function BottomDockPreview() {
	const tabs = [
		{ icon: House, label: "Home", active: true },
		{ icon: Swords, label: "Match", active: false },
		{ icon: Plus, label: "Create", active: false, featured: true },
		{ icon: Bell, label: "Alerts", active: false },
		{ icon: User, label: "Profile", active: false },
	];

	return (
		<div className="max-w-sm mx-auto">
			<div className="bg-white shadow-elevated rounded-2xl overflow-hidden">
				{/* Simulated phone screen */}
				<div className="h-32 bg-violet-bg flex items-center justify-center">
					<p className="text-violet-muted text-sm">App content...</p>
				</div>
				{/* Bottom dock */}
				<div className="flex items-center justify-around px-2 py-3 border-t border-violet-border">
					{tabs.map((tab) => (
						<button
							key={tab.label}
							type="button"
							className="flex flex-col items-center gap-1 flex-1"
						>
							{tab.featured ? (
								<div className="w-12 h-12 -mt-6 rounded-full bg-grapefruit-400 shadow-elevated flex items-center justify-center">
									<tab.icon className="w-6 h-6 text-white" />
								</div>
							) : (
								<tab.icon
									className={`w-5 h-5 ${tab.active ? "text-grapefruit-400" : "text-violet-muted"}`}
								/>
							)}
							<span
								className={`text-xs ${
									tab.active
										? "text-grapefruit-400 font-medium"
										: "text-violet-muted"
								} ${tab.featured ? "mt-1" : ""}`}
							>
								{tab.label}
							</span>
						</button>
					))}
				</div>
			</div>
		</div>
	);
}

function TabsPreview() {
	return (
		<div className="space-y-6">
			{/* Underline tabs */}
			<div>
				<p className="text-xs text-violet-muted mb-3">
					Underline variant — used in Profile
				</p>
				<div className="bg-white rounded-xl shadow-card p-4">
					<div className="flex border-b border-violet-border">
						{["Match History", "Upcoming", "Stats"].map((tab, i) => (
							<button
								key={tab}
								type="button"
								className={`px-4 py-2 text-sm font-medium -mb-px border-b-2 transition-colors ${
									i === 0
										? "border-grapefruit-400 text-grapefruit-400"
										: "border-transparent text-violet-muted hover:text-violet-primary"
								}`}
							>
								{tab}
							</button>
						))}
					</div>
				</div>
			</div>

			{/* Pill/segmented tabs */}
			<div>
				<p className="text-xs text-violet-muted mb-3">
					Pill/segmented variant — used on Home filter
				</p>
				<div className="bg-white rounded-xl shadow-card p-4">
					<Tabs defaultValue="nearby">
						<TabsList className="bg-violet-mid">
							<TabsTrigger
								value="nearby"
								className="data-[state=active]:bg-white data-[state=active]:text-violet-primary"
							>
								Nearby
							</TabsTrigger>
							<TabsTrigger
								value="competitive"
								className="data-[state=active]:bg-white data-[state=active]:text-violet-primary"
							>
								Competitive
							</TabsTrigger>
							<TabsTrigger
								value="social"
								className="data-[state=active]:bg-white data-[state=active]:text-violet-primary"
							>
								Social
							</TabsTrigger>
						</TabsList>
					</Tabs>
				</div>
			</div>
		</div>
	);
}

export function NavigationShowcase() {
	return (
		<div className="space-y-8">
			<div>
				<h3 className="text-sm font-semibold text-violet-secondary uppercase tracking-wide mb-3">
					Navbar — Desktop
				</h3>
				<NavbarPreview />
			</div>

			<div>
				<h3 className="text-sm font-semibold text-violet-secondary uppercase tracking-wide mb-3">
					Bottom Dock — Mobile
				</h3>
				<BottomDockPreview />
			</div>

			<div>
				<h3 className="text-sm font-semibold text-violet-secondary uppercase tracking-wide mb-3">
					Tab Patterns
				</h3>
				<TabsPreview />
			</div>
		</div>
	);
}
