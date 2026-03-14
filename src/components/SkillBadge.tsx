interface SkillBadgeProps {
	level: number; // 1–10
	showLabel?: boolean; // default false — shows "Lvl 7" when false, "7 Advanced" when true
	size?: "sm" | "md"; // default "sm"
}

const skillLevels: Record<
	number,
	{ label: string; bg: string; text: string; border: string }
> = {
	1: { label: "Beginner", bg: "#DCFCE7", text: "#15803D", border: "#BBF7D0" },
	2: { label: "Novice", bg: "#D1FAE5", text: "#047857", border: "#A7F3D0" },
	3: { label: "Rookie", bg: "#CFFAFE", text: "#0E7490", border: "#A5F3FC" },
	4: { label: "Amateur", bg: "#DBEAFE", text: "#1D4ED8", border: "#BFDBFE" },
	5: {
		label: "Intermediate",
		bg: "#EDE9FE",
		text: "#6D28D9",
		border: "#DDD6FE",
	},
	6: { label: "Skilled", bg: "#F3E8FF", text: "#7E22CE", border: "#E9D5FF" },
	7: { label: "Advanced", bg: "#FFF7ED", text: "#C2410C", border: "#FED7AA" },
	8: { label: "Expert", bg: "#FEF3C7", text: "#B45309", border: "#FDE68A" },
	9: { label: "Elite", bg: "#FFE4E6", text: "#BE123C", border: "#FECDD3" },
	10: {
		label: "Top Player",
		bg: "#1E1830",
		text: "#FF6347",
		border: "#3D3560",
	},
};

export function SkillBadge({
	level,
	showLabel = false,
	size = "sm",
}: SkillBadgeProps) {
	const colors = skillLevels[level] ?? skillLevels[1];
	const sizeClass = size === "md" ? "px-3 py-1 text-sm" : "px-2 py-0.5 text-xs";

	return (
		<span
			className={`inline-flex items-center gap-1 rounded-full font-semibold border ${sizeClass}`}
			style={{
				backgroundColor: colors.bg,
				color: colors.text,
				borderColor: colors.border,
			}}
		>
			{showLabel ? `${level} ${colors.label}` : `Lvl ${level}`}
		</span>
	);
}
