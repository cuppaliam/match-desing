import { Swords, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
	primaryCta: string;
	secondaryCta?: string;
}

function EmptyStateCard({
	icon,
	title,
	description,
	primaryCta,
	secondaryCta,
}: EmptyStateCardProps) {
	return (
		<div className="bg-violet-bg rounded-2xl p-8 flex flex-col items-center text-center">
			<div className="w-20 h-20 rounded-full bg-white shadow-card flex items-center justify-center mb-4">
				{icon}
			</div>
			<h3 className="font-semibold text-violet-primary text-lg mb-2">
				{title}
			</h3>
			<p className="text-violet-muted text-sm leading-relaxed mb-6 max-w-xs">
				{description}
			</p>
			<div className="flex flex-col gap-2 w-full max-w-48">
				<Button
					className="w-full text-white"
					style={{ backgroundColor: "#FF6347" }}
				>
					{primaryCta}
				</Button>
				{secondaryCta && (
					<Button
						variant="outline"
						className="w-full border-violet-border text-violet-secondary hover:bg-white"
					>
						{secondaryCta}
					</Button>
				)}
			</div>
		</div>
	);
}

export function EmptyStates() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
			<EmptyStateCard
				icon={<Swords className="w-10 h-10 text-gray-300" />}
				title="No lobbies found"
				description="Try adjusting your filters or create a new lobby to get the game started."
				primaryCta="Create Lobby"
				secondaryCta="Clear Filters"
			/>
			<EmptyStateCard
				icon={<Trophy className="w-10 h-10 text-gray-300" />}
				title="No matches yet"
				description="Your match history is empty. Join a lobby to play your first game and track your progress."
				primaryCta="Find a Lobby"
			/>
			<EmptyStateCard
				icon={<Users className="w-10 h-10 text-gray-300" />}
				title="Queue is empty"
				description="No players nearby match your skill level. Try expanding your range or a different time slot."
				primaryCta="Expand Range"
				secondaryCta="Change Time"
			/>
		</div>
	);
}
