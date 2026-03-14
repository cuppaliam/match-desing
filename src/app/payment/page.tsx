"use client";

import { useState } from "react";
import { Calendar, Lock, Loader2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { mockLobbies } from "@/lib/mock-data";

const lobby = mockLobbies[0];

export default function PaymentPage() {
	const [cardNumber, setCardNumber] = useState("");
	const [expiry, setExpiry] = useState("");
	const [cvc, setCvc] = useState("");
	const [name, setName] = useState("");
	const [isPaying, setIsPaying] = useState(false);
	const [paid, setPaid] = useState(false);

	function handlePay(e: React.FormEvent) {
		e.preventDefault();
		setIsPaying(true);
		setTimeout(() => {
			setIsPaying(false);
			setPaid(true);
		}, 1800);
	}

	return (
		<div className="max-w-sm mx-auto px-4">
			{/* Page header */}
			<section className="pt-6 pb-4">
				<h1 className="text-2xl font-display font-bold text-violet-primary">Checkout</h1>
				<p className="text-sm text-violet-secondary mt-1">
					Secure payment via Stripe
				</p>
			</section>

			{/* Lobby summary card */}
			<div className="bg-white rounded-2xl shadow-card p-4 mb-4">
				<div className="flex items-start justify-between">
					<div>
						<p className="text-xs text-violet-muted mb-0.5">Joining lobby</p>
						<h2 className="font-semibold text-violet-primary text-sm">
							{lobby.host} — {lobby.gameType} {lobby.matchType}
						</h2>
						<div className="flex items-center gap-3 mt-2 text-xs text-violet-muted">
							<span className="flex items-center gap-1">
								<Calendar className="w-3 h-3" />
								{lobby.day}, {lobby.time}
							</span>
							<span className="flex items-center gap-1">
								<MapPin className="w-3 h-3" />
								{lobby.venue}
							</span>
						</div>
					</div>
					<span className="text-lg font-bold text-grapefruit-400 flex-shrink-0 ml-3">
						${lobby.fee.toFixed(2)}
					</span>
				</div>
			</div>

			{/* Fee breakdown card */}
			<div className="bg-violet-bg rounded-xl p-4 mb-4 space-y-2">
				<p className="text-xs font-semibold text-violet-secondary uppercase tracking-wide mb-1">
					Fee breakdown
				</p>
				{[
					{ label: "Court hire (split 2 ways)", amount: `$${lobby.fee.toFixed(2)}` },
					{ label: "Service fee (10%)", amount: "$1.20" },
				].map(({ label, amount }) => (
					<div key={label} className="flex justify-between text-sm">
						<span className="text-violet-secondary">{label}</span>
						<span className="text-violet-primary font-medium">{amount}</span>
					</div>
				))}
				<div className="pt-2 border-t border-violet-border flex justify-between">
					<span className="text-sm font-semibold text-violet-primary">Total</span>
					<span className="text-sm font-bold text-grapefruit-400">AUD $13.20</span>
				</div>
			</div>

			{/* Payment form */}
			<form onSubmit={handlePay}>
				<div className="bg-white rounded-2xl shadow-card p-5 space-y-4 mb-4">
					<div className="flex items-center gap-2 mb-1">
						<Lock className="w-4 h-4 text-violet-muted" />
						<p className="text-xs text-violet-muted">Powered by Stripe — test mode</p>
					</div>

					{/* Card number */}
					<div className="space-y-1.5">
						<Label className="text-sm font-medium text-violet-primary">Card number</Label>
						<div className="relative">
							<Input
								placeholder="1234 5678 9012 3456"
								value={cardNumber}
								onChange={(e) => setCardNumber(e.target.value)}
								maxLength={19}
								className="border-violet-border text-violet-primary placeholder:text-violet-muted pr-12"
							/>
							{/* Card brand placeholder */}
							<div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
								<div className="w-6 h-4 rounded bg-violet-mid" />
								<div className="w-6 h-4 rounded bg-violet-mid" />
							</div>
						</div>
					</div>

					{/* Expiry + CVC row */}
					<div className="grid grid-cols-2 gap-3">
						<div className="space-y-1.5">
							<Label className="text-sm font-medium text-violet-primary">Expiry</Label>
							<Input
								placeholder="MM / YY"
								value={expiry}
								onChange={(e) => setExpiry(e.target.value)}
								maxLength={7}
								className="border-violet-border text-violet-primary placeholder:text-violet-muted"
							/>
						</div>
						<div className="space-y-1.5">
							<Label className="text-sm font-medium text-violet-primary">CVC</Label>
							<Input
								placeholder="123"
								value={cvc}
								onChange={(e) => setCvc(e.target.value)}
								maxLength={3}
								className="border-violet-border text-violet-primary placeholder:text-violet-muted"
							/>
						</div>
					</div>

					{/* Cardholder name */}
					<div className="space-y-1.5">
						<Label className="text-sm font-medium text-violet-primary">Name on card</Label>
						<Input
							placeholder="Alex Chen"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="border-violet-border text-violet-primary placeholder:text-violet-muted"
						/>
					</div>
				</div>

				{/* Pay button / success state */}
				{paid ? (
					<div className="bg-success/10 border border-green-200 rounded-xl px-4 py-4 text-center">
						<p className="text-green-700 font-semibold text-base">Payment confirmed!</p>
						<p className="text-green-600 text-sm mt-0.5">You've joined the lobby. See you Saturday!</p>
					</div>
				) : (
					<Button type="submit" className="w-full h-12 text-base" disabled={isPaying}>
						{isPaying ? (
							<>
								<Loader2 className="w-4 h-4 mr-2 animate-spin" />
								Processing...
							</>
						) : (
							"Pay AUD $13.20"
						)}
					</Button>
				)}

				<p className="text-xs text-violet-muted text-center mt-3">
					This is a mockup — no real charge will occur.
				</p>
			</form>
		</div>
	);
}
