import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const facilities = [
  '24 x 7 Electricity',
  'Many near By Mess',
  'Kitchen available for Breakfast',
  '24 X 7 CCTV',
  'Washing Machine Available',
  'Refrigerator Available',
  'Terrace for amazing Views',
  '24 X 7 Hot Water Available',
  'Air Coolers are Available in Summers',
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Facilities</h2>
          <p className="text-xl text-gray-600">Everything you need for a comfortable stay</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="flex items-center gap-4 p-6">
                <Check className="h-6 w-6 text-orange-600 flex-shrink-0" />
                <p className="text-gray-700">{facility}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}