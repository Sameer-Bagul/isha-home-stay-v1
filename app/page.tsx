import Hero from '@/components/hero';
import Rooms from '@/components/rooms';
import Facilities from '@/components/facilities';
import Testimonials from '@/components/testimonials';
import Pricing from '@/components/pricing';
import Features from '@/components/features';
import CTA from '@/components/cta';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Rooms />
      <Facilities />
      <Testimonials />
      <Pricing />
      <Features />
      <CTA />
    </div>
  );
}