"use client";

import { useState } from "react";
import { Mic } from "lucide-react";
import { LobbyCard } from "@/components/LobbyCard";
import { mockLobbies } from "@/lib/mock-data";

type VoiceState = "idle" | "listening" | "processing" | "results";

const competitiveLobbies = mockLobbies.filter(
	(l) => l.gameType === "Competitive" && l.matchType === "Singles",
);

export default function MatchPage() {
	const [voiceState, setVoiceState] = useState<VoiceState>("idle");
	const [query, setQuery] = useState("");

	function handleMicTap() {
		setVoiceState("listening");
		setTimeout(() => {
			setQuery("competitive singles near Doncaster, skill 6–8");
			setVoiceState("processing");
			setTimeout(() => {
				setVoiceState("results");
			}, 1500);
		}, 2000);
	}

	function handleReset() {
		setVoiceState("idle");
		setQuery("");
	}

	return (
		<div className="max-w-lg mx-auto px-4">
			{/* Section 1: Page header */}
			<section className="pt-6 pb-4">
				<h1 className="text-2xl font-display font-bold text-violet-primary">Find a Match</h1>
				<p className="text-sm text-violet-secondary mt-1">
					Tap the mic and describe what you're looking for
				</p>
			</section>

			{/* Section 2: Voice search area */}
			<div
				className="noise-overlay rounded-3xl mb-6 overflow-hidden"
				style={{ background: "linear-gradient(180deg, #EEEAF5, #F8F7FB)", minHeight: 320 }}
			>
				<div className="flex flex-col items-center justify-center py-12 px-6 gap-5">
					{voiceState === "idle" && (
						<>
							{/* Tooltip */}
							<div className="bg-violet-primary text-white text-sm px-4 py-2.5 rounded-xl shadow-elevated relative">
								<span>Say "find doubles near Richmond"</span>
								<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-violet-primary" />
							</div>
							{/* Mic button */}
							<button type="button" onClick={handleMicTap} className="relative flex items-center justify-center mt-2">
								<div className="absolute w-32 h-32 rounded-full bg-grapefruit-400/10 animate-pulse" />
								<div className="absolute w-24 h-24 rounded-full bg-grapefruit-400/15 animate-pulse" style={{ animationDelay: "0.5s" }} />
								<div
									className="w-20 h-20 rounded-full flex items-center justify-center text-white shadow-elevated relative z-10 transition-transform hover:scale-105 active:scale-95"
									style={{ background: "linear-gradient(135deg, #FF6347, #E84C30)", boxShadow: "0 0 40px rgba(255, 99, 71, 0.45)" }}
								>
									<Mic className="w-9 h-9" />
								</div>
							</button>
							<p className="text-sm text-violet-secondary">Tap &amp; speak to find matches</p>
						</>
					)}

					{voiceState === "listening" && (
						<>
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 rounded-full bg-error animate-pulse" />
								<span className="text-sm font-medium text-violet-primary">Listening...</span>
							</div>
							<button type="button" className="relative flex items-center justify-center">
								<div className="absolute w-36 h-36 rounded-full bg-grapefruit-400/20 animate-pulse" />
								<div className="absolute w-28 h-28 rounded-full bg-grapefruit-400/25 animate-pulse" style={{ animationDelay: "0.3s" }} />
								<div
									className="w-20 h-20 rounded-full flex items-center justify-center text-white shadow-elevated relative z-10"
									style={{ background: "linear-gradient(135deg, #FF6347, #E84C30)", boxShadow: "0 0 60px rgba(255, 99, 71, 0.6)" }}
								>
									<Mic className="w-9 h-9" />
								</div>
							</button>
							<p className="text-sm text-violet-secondary animate-pulse">Speak now...</p>
						</>
					)}

					{voiceState === "processing" && (
						<>
							{/* Inline ShuttlecockBounce */}
							<div className="relative flex justify-center" style={{ width: 80, height: 128 }}>
								<div style={{
									width: 48, height: 48,
									backgroundColor: "#FF6347",
									maskImage: "url(/shuttlecock.svg)",
									WebkitMaskImage: "url(/shuttlecock.svg)",
									maskSize: "contain", WebkitMaskSize: "contain",
									maskRepeat: "no-repeat", WebkitMaskRepeat: "no-repeat",
									maskPosition: "center", WebkitMaskPosition: "center",
									animation: "shuttle-fly 1.4s ease-in-out infinite",
								}} />
								<div
									className="absolute rounded-full bg-grapefruit-400/30"
									style={{ bottom: 8, left: 0, right: 0, margin: "0 auto", width: 36, height: 5, transformOrigin: "center", animation: "shuttle-shadow 1.4s ease-in-out infinite" }}
								/>
							</div>
							{/* Detected query */}
							{query && (
								<div className="bg-white rounded-xl shadow-card px-4 py-2.5 max-w-xs text-center">
									<p className="text-xs text-violet-muted mb-0.5">Searching for</p>
									<p className="text-sm text-violet-primary font-medium">"{query}"</p>
								</div>
							)}
							<p className="text-sm text-violet-muted animate-pulse">Finding your match...</p>
						</>
					)}

					{voiceState === "results" && (
						<>
							<div className="bg-white rounded-xl shadow-card px-4 py-3 flex items-center gap-3 w-full max-w-sm">
								<div className="w-8 h-8 rounded-full bg-grapefruit-50 flex items-center justify-center flex-shrink-0">
									<Mic className="w-4 h-4 text-grapefruit-400" />
								</div>
								<div className="flex-1 min-w-0">
									<p className="text-xs text-violet-muted">Searched for</p>
									<p className="text-sm text-violet-primary font-medium truncate">"{query}"</p>
								</div>
								<button
									type="button"
									onClick={handleReset}
									className="text-xs text-grapefruit-400 font-medium hover:text-grapefruit-500 flex-shrink-0"
								>
									Clear
								</button>
							</div>
						</>
					)}
				</div>
			</div>

			{/* Section 3: Results */}
			{voiceState === "results" && (
				<section>
					<div className="flex items-center justify-between mb-3">
						<h2 className="text-base font-display font-semibold text-violet-primary">
							2 matches found
						</h2>
						<span className="text-xs text-violet-muted">Competitive · Singles</span>
					</div>
					<div className="space-y-3">
						{competitiveLobbies.map((lobby) => (
							<LobbyCard key={lobby.id} lobby={lobby} variant="standard" />
						))}
					</div>
				</section>
			)}
		</div>
	);
}
