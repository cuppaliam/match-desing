"use client";

import { Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const navLinks = [
	{ label: "Home", href: "/" },
	{ label: "Match", href: "/match" },
	{ label: "Create", href: "/create" },
	{ label: "Profile", href: "/profile" },
];

export function NavBar() {
	const pathname = usePathname();

	return (
		<header className="bg-white border-b border-violet-border sticky top-0 z-40">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
				<Image src="/logo.svg" alt="Match" width={70} height={28} />
				<nav className="hidden md:flex items-center gap-6">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={`text-sm font-medium transition-colors ${
								pathname === link.href
									? "text-grapefruit-400"
									: "text-violet-secondary hover:text-violet-primary"
							}`}
						>
							{link.label}
						</Link>
					))}
				</nav>
				<div className="flex items-center gap-3">
					<button
						type="button"
						className="relative w-8 h-8 flex items-center justify-center text-violet-secondary hover:text-violet-primary transition-colors"
					>
						<Bell className="w-5 h-5" />
						<span className="absolute top-1 right-1 w-2 h-2 bg-grapefruit-400 rounded-full" />
					</button>
					<Avatar className="w-8 h-8">
						<AvatarFallback className="bg-grapefruit-100 text-grapefruit-700 text-xs font-semibold">
							AC
						</AvatarFallback>
					</Avatar>
				</div>
			</div>
		</header>
	);
}
