import { Separator } from "@/components/ui/separator";

interface BriefSectionProps {
	id: string;
	number: string;
	title: string;
	description?: string;
	children: React.ReactNode;
}

export function BriefSection({
	id,
	number,
	title,
	description,
	children,
}: BriefSectionProps) {
	return (
		<section id={id} className="scroll-mt-8">
			<div className="mb-8">
				<div className="flex items-center gap-3 mb-2">
					<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-grapefruit-400 text-white text-sm font-bold flex-shrink-0">
						{number}
					</span>
					<h2 className="text-2xl font-bold text-violet-primary" style={{ fontFamily: "var(--font-display)" }}>{title}</h2>
				</div>
				{description && (
					<p className="text-violet-muted text-sm ml-11">{description}</p>
				)}
			</div>
			<div>{children}</div>
			<Separator className="mt-16 bg-violet-border" />
		</section>
	);
}
