import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ananya Patel',
    text: 'Staying at ISHA Home Stay has been an incredible experience. The facilities are top-notch and the community is very welcoming.',
  },
  {
    name: 'Riya Sharma',
    text: 'The location is perfect and the staff are extremely helpful. I feel safe and at home here.',
  },
  {
    name: 'Meera Joshi',
    text: 'ISHA Home Stay offers the best amenities and a very comfortable living environment. It\'s the perfect place for students and professionals alike.',
  },
  {
    name: 'Priya Singh',
    text: 'I love the sense of community here. Everyone is so friendly and supportive, it really feels like a second home.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Residents Say</h2>
          <p className="text-xl text-gray-600">Hear from our happy community</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <Quote className="h-8 w-8 text-orange-600" />
                <p className="text-gray-700">{testimonial.text}</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}