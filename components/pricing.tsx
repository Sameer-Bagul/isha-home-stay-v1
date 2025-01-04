import { Check } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Monthly',
    price: '3,500',
    period: 'per month',
    description: "That's just ₹117 per day!",
    features: [
      'Washing Machine',
      'Refrigerator',
      'Electricity 24/7',
      'Kitchen Available for Breakfast',
      'Secure Living With CCTV',
    ],
  },
  {
    name: 'Annual',
    price: '41,000',
    period: 'per year',
    description: "That's just ₹3,416 per month!",
    features: [
      'Washing Machine',
      'Refrigerator',
      'Electricity 24/7',
      'Kitchen Available for Breakfast',
      'Secure Living With CCTV',
    ],
    popular: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Choose the plan that works best for you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative ${plan.popular ? 'border-orange-600 shadow-lg' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-orange-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                  Best Value
                </div>
              )}
              <CardHeader className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">₹{plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-orange-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-8 bg-orange-600 hover:bg-orange-700">
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}