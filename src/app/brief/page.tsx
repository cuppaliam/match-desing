import Image from "next/image";
import { AvatarShowcase } from "@/components/brief/AvatarShowcase";
import { BadgesAndTags } from "@/components/brief/BadgesAndTags";
import { BriefSection } from "@/components/brief/BriefSection";
import { BriefTableOfContents } from "@/components/brief/BriefTableOfContents";
import { ButtonShowcase } from "@/components/brief/ButtonShowcase";
import { CardShowcase } from "@/components/brief/CardShowcase";
import { ColorPalette } from "@/components/brief/ColorPalette";
import { EmptyStates } from "@/components/brief/EmptyStates";
import { FormElements } from "@/components/brief/FormElements";
import { IconShowcase } from "@/components/brief/IconShowcase";
import { LoadingStates } from "@/components/brief/LoadingStates";
import { ModalsAndOverlays } from "@/components/brief/ModalsAndOverlays";
import { NavigationShowcase } from "@/components/brief/NavigationShowcase";
import { SpacingScale } from "@/components/brief/SpacingScale";
import { Typography } from "@/components/brief/Typography";

export default function BriefPage() {
	return (
		<div>
			{/* Hero */}
			<div
				className="w-full flex items-center justify-center px-8 py-16"
				style={{
					background: "linear-gradient(135deg, #FF6347 0%, #C4341E 100%)",
					minHeight: 260,
				}}
			>
				<div className="text-center space-y-4">
					{/* Logo */}
					<div className="flex justify-center mb-2">
						<div className="bg-white/15 rounded-2xl px-6 py-3">
							<Image
								src="/logo.svg"
								alt="Match"
								width={180}
								height={64}
								className="invert brightness-200"
							/>
						</div>
					</div>
					{/* Version pill */}
					<div>
						<span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
							Design System v1.0
						</span>
					</div>
					{/* Subtitle */}
					<p className="text-white/90 text-base font-medium">
						Component Library & Design Brief — Badminton Matchmaking
					</p>
					{/* Meta pills */}
					<div className="flex items-center justify-center gap-2 flex-wrap">
						<span className="bg-white/15 text-white text-xs px-3 py-1 rounded-full border border-white/20">
							13 Sections
						</span>
						<span className="bg-white/15 text-white text-xs px-3 py-1 rounded-full border border-white/20">
							Next.js 15 + TW v4
						</span>
						<span className="bg-white/15 text-white text-xs px-3 py-1 rounded-full border border-white/20">
							Melbourne, AU
						</span>
					</div>
				</div>
			</div>

			{/* Body */}
			<div className="max-w-6xl mx-auto px-6 py-12">
				<div className="flex gap-12">
					{/* TOC sidebar */}
					<div className="hidden lg:block">
						<BriefTableOfContents />
					</div>

					{/* Content */}
					<div className="flex-1 min-w-0 space-y-16">
						<BriefSection
							id="color-palette"
							number="01"
							title="Color Palette"
							description="The visual foundation: Grapefruit as the primary accent, cool violet-grey for backgrounds, white surfaces for cards."
						>
							<ColorPalette />
						</BriefSection>

						<BriefSection
							id="typography"
							number="02"
							title="Typography"
							description="Geist Sans throughout, with the custom 'karen' wordmark for the Match brand."
						>
							<Typography />
						</BriefSection>

						<BriefSection
							id="spacing"
							number="03"
							title="Spacing & Layout"
							description="Tailwind's default spacing scale, border radius variants, and shadow tokens."
						>
							<SpacingScale />
						</BriefSection>

						<BriefSection
							id="buttons"
							number="04"
							title="Buttons"
							description="Four variants × three sizes, plus icon buttons and state variations."
						>
							<ButtonShowcase />
						</BriefSection>

						<BriefSection
							id="cards"
							number="05"
							title="Cards"
							description="LobbyCard is the hero component of the app — shown in all four variants plus the Venue Card."
						>
							<CardShowcase />
						</BriefSection>

						<BriefSection
							id="navigation"
							number="06"
							title="Navigation"
							description="Desktop navbar, mobile bottom dock with featured Create tab, and tab patterns."
						>
							<NavigationShowcase />
						</BriefSection>

						<BriefSection
							id="forms"
							number="07"
							title="Form Elements"
							description="Create Lobby form showcasing all element types with states."
						>
							<FormElements />
						</BriefSection>

						<BriefSection
							id="badges"
							number="08"
							title="Badges & Tags"
							description="Skill level badges (1–10 colour gradient), game type tags, match type chips, lobby status, and notification indicators."
						>
							<BadgesAndTags />
						</BriefSection>

						<BriefSection
							id="icons"
							number="09"
							title="Icons"
							description="Lucide icon library, grouped by category, shown at 4 sizes and in colour contexts."
						>
							<IconShowcase />
						</BriefSection>

						<BriefSection
							id="avatars"
							number="10"
							title="Avatars"
							description="Size scale, fallback states, status indicators, and the player queue stack."
						>
							<AvatarShowcase />
						</BriefSection>

						<BriefSection
							id="modals"
							number="11"
							title="Modals & Overlays"
							description="Match Found celebration modal, Confirm Join bottom sheet, and Voice Search tooltip — all in 375px phone frames."
						>
							<ModalsAndOverlays />
						</BriefSection>

						<BriefSection
							id="loading"
							number="12"
							title="Loading States"
							description="Skeleton cards, discovery grid skeleton, spinner variants, and profile completion progress."
						>
							<LoadingStates />
						</BriefSection>

						<BriefSection
							id="empty"
							number="13"
							title="Empty States"
							description="No Lobbies Found, No Match History, Queue Empty — each with icon, copy, and CTAs."
						>
							<EmptyStates />
						</BriefSection>

						{/* Footer */}
						<div className="pt-8 pb-4 text-center">
							<p className="text-xs text-violet-muted">
								Match Design System v1.0 · Melbourne, AU ·{" "}
								{new Date().getFullYear()}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
