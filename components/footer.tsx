import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-orange-600">ISHA Home Stay</h2>
          <address className="not-italic text-gray-600 space-y-2">
            <p className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              70, Arunkumar Vidya Nagar, Sakri Rd, Vidhya Vihar Colony, Dhule, Maharashtra 424001
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <a href="tel:+919876543210" className="hover:text-orange-600">+91 98765 43210</a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <a href="mailto:contact@ishahomestay.com" className="hover:text-orange-600">contact@ishahomestay.com</a>
            </p>
          </address>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            {['Rooms', 'Facilities', 'Pricing', 'Contact'].map((item) => (
              <li key={item}>
                <Link href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-orange-600">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.646905123456!2d74.7748913153168!3d20.90410797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd9d9f9a3b9e0b!2sIsha%20Girls%20PG!5e0!3m2!1sen!2sin!4v1633078471234!5m2!1sen!2sin"
            className="w-full h-48 rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    </footer>
  );
}