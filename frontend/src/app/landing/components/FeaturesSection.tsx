'use client';

import { FeatureCard } from "@/src/components/FeatureCard";
import { FeaturesSectionProps } from "@/src/types/feature";


const FeaturesSection: React.FC<FeaturesSectionProps> = ({ FEATURES }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Fitur Unggulan</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Semua yang Anda butuhkan untuk mengelola tugas dengan efektif dan stylish</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
