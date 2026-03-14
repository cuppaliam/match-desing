import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { BottomDock } from "@/components/BottomDock";
import { NavBar } from "@/components/NavBar";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const jakartaSans = Plus_Jakarta_Sans({
	variable: "--font-jakarta",
	subsets: ["latin"],
	weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
	title: "Match",
	description: "Find your next badminton match in Melbourne",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${jakartaSans.variable} antialiased`}
			>
				<TooltipProvider>
					<NavBar />
					<main className="min-h-screen pb-24 md:pb-8">{children}</main>
					<BottomDock />
				</TooltipProvider>
			</body>
		</html>
	);
}
