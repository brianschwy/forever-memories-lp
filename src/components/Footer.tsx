import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">Forever Photos</h3>
            <p className="text-gray-300">
              Professional photo digitization service, preserving your memories for generations to come.
            </p>
          </div>

          <div>
            <h4 className="font-playfair text-xl font-bold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone size={20} className="mr-2 text-gold" />
                <span>(310) 555-0123</span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2 text-gold" />
                <span>contact@foreverphotos.com</span>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="mr-2 text-gold" />
                <span>Los Angeles, CA</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-playfair text-xl font-bold mb-4">Service Area</h4>
            <p className="text-gray-300">
              Currently serving Los Angeles and surrounding areas including:
            </p>
            <ul className="mt-2 space-y-1 text-gray-300">
              <li>Beverly Hills</li>
              <li>Santa Monica</li>
              <li>Pasadena</li>
              <li>Long Beach</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Forever Photos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};