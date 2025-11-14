import { ReactNode } from "react";

export interface FeatureItem {
	icon: ReactNode;
	title: string;
	description: string;
}

export interface FeaturesSectionProps {
	FEATURES: FeatureItem[];
}
