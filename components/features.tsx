import { Shield, Users, Home, Snowflake } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Home,
    title: 'Comfortable Living',
    description: 'Experience cozy and well-furnished rooms designed for a comfortable stay.',
  },
  {
    icon: Shield,
    title: 'Safe and Secure',
    description: 'Our premises are equipped with 24/7 security and surveillance to ensure your safety.',
  },
  {
    icon: Users,
    title: 'Community Living',
    description: 'Join a vibrant community of like-minded individuals and make lifelong friends.',
  },
  {
    icon: Snowflake,
    title: 'Modern Amenities',
    description: 'Enjoy modern facilities including refrigerator, washing machine, and more.',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <feature.icon className="h-12 w-12 mx-auto text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}