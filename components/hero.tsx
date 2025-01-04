import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-orange-50 to-white pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-gray-900">
              Experience the Best Living with a Secure Environment
            </h1>
            <p className="text-xl text-gray-600">
              Welcome to ISHA Home Stay, where comfort meets community. Enjoy premium living with modern amenities and a nurturing environment designed for your lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                Register Now
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px]">
            <Image
              src="/img/save.png"
              alt="Isha Home Stay"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}