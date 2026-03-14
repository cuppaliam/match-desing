import { Calendar, Clock, MapPin, Mic } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

function PhoneFrame({ children }: { children: React.ReactNode }) {
	return (
		<div
			className="w-[375px] mx-auto bg-violet-bg rounded-3xl overflow-hidden shadow-elevated border border-violet-border"
			style={{ minHeight: 600 }}
		>
			{children}
		</div>
	);
}

function MatchFoundModal() {
	return (
		<div className="relative">
			{/* Background blur overlay */}
			<div className="absolute inset-0 bg-violet-primary/40 rounded-3xl" />
			{/* Modal card */}
			<div className="relative mx-4 mt-16 bg-white rounded-3xl overflow-hidden shadow-elevated">
				{/* Header gradient with noise texture */}
				<div
					className="noise-overlay px-6 pt-8 pb-14 text-center"
					style={{ background: "linear-gradient(135deg, #FF6347, #C4341E)" }}
				>
					<p className="text-white/90 text-base font-bold mb-1 tracking-wide">
						Match Found!
					</p>
					<p className="text-white/60 text-xs mb-5">Your opponent is ready</p>
					{/* Overlapping avatars with celebration rings */}
					<div className="flex justify-center -space-x-4 mb-3">
						<div className="relative">
							<div className="absolute -inset-2 rounded-full bg-white/25 animate-ring-celebrate" />
							<Avatar className="w-16 h-16 ring-4 ring-white relative z-10">
								<AvatarFallback className="bg-grapefruit-100 text-grapefruit-700 text-lg font-bold">
									AT
								</AvatarFallback>
							</Avatar>
						</div>
						<div className="relative z-20 self-center">
							<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-grapefruit-500 text-xs font-black tracking-tighter shadow-card">
								VS
							</span>
						</div>
						<div className="relative">
							<div
								className="absolute -inset-2 rounded-full bg-white/25 animate-ring-celebrate"
								style={{ animationDelay: "1s" }}
							/>
							<Avatar className="w-16 h-16 ring-4 ring-white relative z-10">
								<AvatarFallback className="bg-violet-primary text-white text-lg font-bold">
									SK
								</AvatarFallback>
							</Avatar>
						</div>
					</div>
				</div>
				{/* Content */}
				<div className="px-6 py-5 -mt-6">
					<div className="bg-white rounded-2xl shadow-card p-4 mb-4">
						<h3 className="font-bold text-violet-primary text-lg mb-3">
							You've been matched!
						</h3>
						<div className="space-y-2">
							<div className="flex items-center gap-2 text-sm text-violet-secondary">
								<MapPin className="w-4 h-4 text-grapefruit-400 shrink-0" />
								Doncaster Recreation Centre, Court 3
							</div>
							<div className="flex items-center gap-2 text-sm text-violet-secondary">
								<Calendar className="w-4 h-4 text-grapefruit-400 shrink-0" />
								Saturday, 15 March 2026
							</div>
							<div className="flex items-center gap-2 text-sm text-violet-secondary">
								<Clock className="w-4 h-4 text-grapefruit-400 shrink-0" />
								9:00 AM – 10:00 AM
							</div>
						</div>
					</div>
					<div className="space-y-2">
						<Button className="w-full">View Lobby</Button>
						<Button variant="ghost" className="w-full text-violet-secondary">
							Dismiss
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

function ConfirmJoinSheet() {
	return (
		<div className="relative flex flex-col" style={{ minHeight: 560 }}>
			{/* Dimmed background */}
			<div className="flex-1 bg-violet-primary/20" />
			{/* Bottom sheet */}
			<div className="bg-white rounded-t-3xl px-5 pt-4 pb-8 shadow-elevated">
				{/* Drag handle */}
				<div className="w-10 h-1 bg-violet-border rounded-full mx-auto mb-5" />
				<h3 className="font-bold text-violet-primary text-lg mb-1">
					Confirm Join
				</h3>
				<p className="text-sm text-violet-muted mb-4">
					Review lobby details before joining
				</p>
				<div className="bg-violet-bg rounded-xl p-4 space-y-2 mb-4">
					<div className="flex justify-between text-sm">
						<span className="text-violet-muted">Host</span>
						<span className="text-violet-primary font-medium">Alex T.</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-violet-muted">Type</span>
						<span className="text-violet-primary font-medium">
							Competitive Singles
						</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-violet-muted">When</span>
						<span className="text-violet-primary font-medium">Sat 9:00 AM</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-violet-muted">Venue</span>
						<span className="text-violet-primary font-medium">Doncaster</span>
					</div>
				</div>
				<Button className="w-full">Confirm Join</Button>
			</div>
		</div>
	);
}

function VoiceTooltipPreview() {
	return (
		<div
			className="noise-overlay flex flex-col items-center justify-center"
			style={{
				minHeight: 560,
				background: "linear-gradient(180deg, #EEEAF5, #F8F7FB)",
			}}
		>
			<div className="relative flex flex-col items-center gap-4">
				{/* Tooltip */}
				<div className="bg-violet-primary text-white text-sm px-4 py-2.5 rounded-xl shadow-elevated relative">
					<span>Say "find doubles near Richmond"</span>
					<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-violet-primary" />
				</div>
				{/* Mic button with ambient glow rings */}
				<div className="relative flex items-center justify-center mt-2">
					{/* Outer ambient ring */}
					<div
						className="absolute w-32 h-32 rounded-full bg-grapefruit-400/10 animate-pulse"
					/>
					{/* Inner ring */}
					<div
						className="absolute w-24 h-24 rounded-full bg-grapefruit-400/15 animate-pulse"
						style={{ animationDelay: "0.5s" }}
					/>
					{/* Mic button */}
					<div
						className="w-20 h-20 rounded-full flex items-center justify-center text-white shadow-elevated relative z-10 transition-transform duration-200 hover:scale-105 active:scale-95"
						style={{
							background: "linear-gradient(135deg, #FF6347, #E84C30)",
							boxShadow: "0 0 40px rgba(255, 99, 71, 0.45)",
						}}
					>
						<Mic className="w-9 h-9" />
					</div>
				</div>
				<p className="text-sm text-violet-secondary mt-2">
					Tap &amp; speak to find matches
				</p>
			</div>
		</div>
	);
}

export function ModalsAndOverlays() {
	return (
		<div className="space-y-8">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div>
					<p className="text-xs font-semibold text-violet-muted uppercase tracking-wide mb-3">
						Match Found Modal
					</p>
					<PhoneFrame>
						<MatchFoundModal />
					</PhoneFrame>
				</div>
				<div>
					<p className="text-xs font-semibold text-violet-muted uppercase tracking-wide mb-3">
						Confirm Join Sheet
					</p>
					<PhoneFrame>
						<ConfirmJoinSheet />
					</PhoneFrame>
				</div>
				<div>
					<p className="text-xs font-semibold text-violet-muted uppercase tracking-wide mb-3">
						Voice Search Tooltip
					</p>
					<PhoneFrame>
						<VoiceTooltipPreview />
					</PhoneFrame>
				</div>
			</div>
		</div>
	);
}
