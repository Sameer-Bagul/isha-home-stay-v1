import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const roomImages = [
  { src: '/img/roomImages/1.png', alt: 'Spacious bedroom with modern furnishing' },
  { src: '/img/roomImages/2.png', alt: 'Comfortable study area' },
  { src: '/img/roomImages/3.png', alt: 'Well-lit room with natural sunlight' },
  { src: '/img/roomImages/4.png', alt: 'Modern bathroom facilities' },
  { src: '/img/roomImages/5.png', alt: 'Cozy living space' },
  { src: '/img/roomImages/6.png', alt: 'Clean and organized room' },
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Rooms</h2>
          <p className="text-xl text-gray-600">Discover comfort and luxury in every corner</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roomImages.map((room, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative h-64">
                  <Image
                    src={room.src}
                    alt={room.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}