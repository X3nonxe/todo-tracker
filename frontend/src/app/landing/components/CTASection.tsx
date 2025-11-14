'use client';

import { CTAButton } from '@/src/components/button/CTAButton';
import { CTASectionProps } from '@/src/types/cta';

const CTASection: React.FC<CTASectionProps> = ({ title, subtitle, buttonLabel }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="white-card p-12 rounded-3xl shadow-2xl">
          <h2 className="text-4xl font-bold gradient-text mb-6">{title}</h2>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">{subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton className="px-10">{buttonLabel}</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
