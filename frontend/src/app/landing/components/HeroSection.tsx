'use client';

import { CTAButton } from '@/src/components/button/CTAButton';
import { FloatingElement } from '@/src/components/FloatingElement';
import { StatCard } from '@/src/components/StatsCard';
import { HeroSectionProps } from '@/src/types/hero';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const HeroSection: React.FC<HeroSectionProps> = ({ STATS, FLOATING_ELEMENTS }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Kelola Tugas Anda
            <span className="block gradient-text">Dengan Mudah</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">TodoTracker membantu Anda mengorganisir kehidupan sehari-hari dengan antarmuka yang beautiful dan intuitif.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <CTAButton className="px-10">Mulai Sekarang 🚀</CTAButton>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {STATS.map((stat, idx) => (
              <StatCard key={idx} number={stat.number} label={stat.label} />
            ))}
          </div>
        </div>
      </div>

      {mounted && FLOATING_ELEMENTS.map((el, idx) => <FloatingElement key={idx} {...el} />)}
    </section>
  );
};

export default HeroSection;
