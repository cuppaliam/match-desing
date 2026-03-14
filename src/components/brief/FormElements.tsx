import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const timeSlots = ["Morning (6–12)", "Afternoon (12–6)", "Night (6–11)"];

export function FormElements() {
	return (
		<div className="max-w-lg">
			<div className="bg-white rounded-2xl shadow-card p-6 space-y-6">
				<div>
					<h3 className="font-semibold text-violet-primary mb-1">
						Create a Lobby
					</h3>
					<p className="text-sm text-violet-muted">
						Fill in the details to post your lobby
					</p>
				</div>

				{/* Text input states */}
				<div>
					<h4 className="text-xs font-semibold text-violet-secondary uppercase tracking-wide mb-3">
						Text Input — States
					</h4>
					<div className="grid grid-cols-2 gap-3">
						<div className="space-y-1">
							<Label className="text-xs text-violet-secondary">Default</Label>
							<Input
								placeholder="Describe your lobby..."
								className="border-violet-border text-violet-primary placeholder:text-violet-muted"
							/>
						</div>
						<div className="space-y-1">
							<Label className="text-xs text-violet-secondary">Focus</Label>
							<Input
								defaultValue="Competitive singles, 1hr"
								className="border-grapefruit-400 ring-1 ring-grapefruit-400 text-violet-primary"
							/>
						</div>
						<div className="space-y-1">
							<Label className="text-xs text-error">Error</Label>
							<Input
								defaultValue="abc"
								className="border-error ring-1 ring-error text-violet-primary"
							/>
							<p className="text-xs text-error">
								Description too short (min 10 chars)
							</p>
						</div>
						<div className="space-y-1">
							<Label className="text-xs text-violet-muted">Disabled</Label>
							<Input
								disabled
								placeholder="Not available"
								className="bg-violet-mid border-violet-border text-violet-muted"
							/>
						</div>
					</div>
				</div>

				{/* Select */}
				<div className="space-y-1">
					<Label className="text-sm font-medium text-violet-primary">
						Game Type
					</Label>
					<div className="relative">
						<select className="w-full rounded-lg border border-violet-border bg-white px-3 py-2 text-sm text-violet-primary appearance-none focus:outline-none focus:ring-2 focus:ring-grapefruit-400 focus:border-grapefruit-400">
							<option>Competitive</option>
							<option>Social</option>
							<option>Casual</option>
						</select>
						<span className="absolute right-3 top-1/2 -translate-y-1/2 text-violet-muted pointer-events-none">
							▾
						</span>
					</div>
				</div>

				{/* Day picker */}
				<div className="space-y-2">
					<Label className="text-sm font-medium text-violet-primary">
						Available Days
					</Label>
					<div className="flex flex-wrap gap-2">
						{days.map((day, i) => (
							<label
								key={day}
								className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-sm cursor-pointer transition-colors ${
									i === 5 || i === 6
										? "bg-grapefruit-50 border-grapefruit-300 text-grapefruit-700"
										: "bg-white border-violet-border text-violet-secondary hover:bg-violet-mid"
								}`}
							>
								<Checkbox
									defaultChecked={i === 5 || i === 6}
									className="w-3.5 h-3.5 data-[state=checked]:bg-grapefruit-400 data-[state=checked]:border-grapefruit-400"
								/>
								{day}
							</label>
						))}
					</div>
				</div>

				{/* Time slot */}
				<div className="space-y-2">
					<Label className="text-sm font-medium text-violet-primary">
						Preferred Time
					</Label>
					<div className="grid grid-cols-3 gap-2">
						{timeSlots.map((slot, i) => (
							<label
								key={slot}
								className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm cursor-pointer transition-colors ${
									i === 0
										? "bg-grapefruit-50 border-grapefruit-300 text-grapefruit-700"
										: "bg-white border-violet-border text-violet-secondary hover:bg-violet-mid"
								}`}
							>
								<input
									type="radio"
									name="timeslot"
									defaultChecked={i === 0}
									className="accent-grapefruit-400"
								/>
								<span className="text-xs leading-tight">{slot}</span>
							</label>
						))}
					</div>
				</div>

				{/* Skill level */}
				<div className="space-y-2">
					<div className="flex justify-between">
						<Label className="text-sm font-medium text-violet-primary">
							Skill Level
						</Label>
						<span className="text-sm font-semibold text-grapefruit-400">7</span>
					</div>
					<input
						type="range"
						min={1}
						max={10}
						defaultValue={7}
						className="w-full accent-grapefruit-400"
					/>
					<div className="flex justify-between text-xs text-violet-muted">
						<span>1 — Beginner</span>
						<span>10 — Pro</span>
					</div>
				</div>

				{/* Match type toggle */}
				<div className="space-y-2">
					<Label className="text-sm font-medium text-violet-primary">
						Match Type
					</Label>
					<div className="flex rounded-lg overflow-hidden border border-violet-border">
						<button
							type="button"
							className="flex-1 py-2 text-sm font-medium bg-grapefruit-400 text-white"
						>
							Singles
						</button>
						<button
							type="button"
							className="flex-1 py-2 text-sm font-medium bg-white text-violet-secondary hover:bg-violet-mid"
						>
							Doubles
						</button>
					</div>
				</div>

				{/* Submit */}
				<Button
					className="w-full text-white"
					style={{ backgroundColor: "#FF6347" }}
					disabled
				>
					<Loader2 className="w-4 h-4 mr-2 animate-spin" />
					Creating Lobby...
				</Button>
			</div>
		</div>
	);
}
