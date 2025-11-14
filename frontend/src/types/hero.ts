export interface StatItem {
	number: string;
	label: string;
}

export interface FloatingItem {
	top?: string;
	bottom?: string;
	left?: string;
	right?: string;
	size: string;
	color: string;
	opacity: string;
	delay: string;
}

export interface HeroSectionProps {
	STATS: StatItem[];
	FLOATING_ELEMENTS: FloatingItem[];
}
