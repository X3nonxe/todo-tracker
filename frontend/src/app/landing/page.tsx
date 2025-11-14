import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import CTASection from './components/CTASection';
import Footer from '@/src/components/Footer';

import { FEATURES } from '@/src/constants/feature';
import { STATS } from '@/src/constants/stats';
import { FLOATING_ELEMENTS } from '@/src/constants/float';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-rose-50 to-fuchsia-50">
      <Navbar />

      <HeroSection STATS={STATS} FLOATING_ELEMENTS={FLOATING_ELEMENTS} />

      <FeaturesSection FEATURES={FEATURES} />

      <CTASection title="Siap Menjadi Lebih Produktif?" subtitle="Bergabung dengan ribuan pengguna yang sudah meningkatkan produktivitas mereka dengan TodoTracker" buttonLabel="🎉 Mulai Sekarang" />

      <Footer />
    </div>
  );
}
