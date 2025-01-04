"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    source: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="cta" className="py-20 bg-orange-600">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white mb-12">
          <h2 className="text-4xl font-bold mb-4">Experience The Best Living Now!</h2>
          <p className="text-xl">We promise the best living with family-like atmosphere, with lots of love.</p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
          <div>
            <Input
              placeholder="Your Name"
              className="bg-white"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Your Email"
              className="bg-white"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <Select onValueChange={(value) => setFormData({ ...formData, source: value })}>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Where did you hear about us?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="friends">Friends and family</SelectItem>
              <SelectItem value="social">Social Media</SelectItem>
              <SelectItem value="search">Search Engine</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          <Button type="submit" className="w-full bg-white text-orange-600 hover:bg-orange-50">
            Register Now
          </Button>
        </form>
      </div>
    </section>
  );
}