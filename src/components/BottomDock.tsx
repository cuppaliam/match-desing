"use client";

import { Bell, House, Plus, Swords, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
	{ icon: House, label: "Home", href: "/" },
	{ icon: Swords, label: "Match", href: "/match" },
	{ icon: Plus, label: "Create", href: "/create", featured: true },
	{ icon: Bell, label: "Alerts", href: "/" },
	{ icon: User, label: "Profile", href: "/profile" },
];

export function BottomDock() {
	const pathname = usePathname();

	return (
		<div className="fixed bottom-0 left-0 right-0 z-40 pb-safe md:hidden">
			<div className="mx-3 mb-3 flex items-center justify-around px-2 py-2.5 bg-white/95 backdrop-blur-sm rounded-2xl shadow-elevated border border-violet-border/40">
				{tabs.map((tab) => {
					const isActive = pathname === tab.href && !tab.featured;
					return (
						<Link
							key={tab.label}
							href={tab.href}
							className="flex flex-col items-center gap-1 flex-1"
						>
							{tab.featured ? (
								<div className="w-11 h-11 -mt-5 rounded-full bg-grapefruit-400 shadow-elevated flex items-center justify-center transition-all duration-200 hover:bg-grapefruit-500 hover:scale-105 active:scale-95">
									<tab.icon className="w-5 h-5 text-white" />
								</div>
							) : (
								<div className="relative flex items-center justify-center">
									{isActive && (
										<div className="absolute -top-2 w-1 h-1 rounded-full bg-grapefruit-400" />
									)}
									<tab.icon
										className={`w-5 h-5 transition-colors duration-150 ${isActive ? "text-grapefruit-400" : "text-violet-muted"}`}
									/>
								</div>
							)}
							<span
								className={`text-xs ${
									isActive
										? "text-grapefruit-400 font-medium"
										: "text-violet-muted"
								} ${tab.featured ? "mt-1" : ""}`}
							>
								{tab.label}
							</span>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
