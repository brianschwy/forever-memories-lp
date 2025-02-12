import { MapPin, Phone } from "lucide-react";

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
                <Phone size={20} className="mr-2 text-gray-300" />
                <span>(860) 331-9214</span>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="mr-2 text-gray-300" />
                <span>Los Angeles, CA</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-playfair text-xl font-bold mb-4">Service Area</h4>
            <p className="text-gray-300">
              Proudly serving the greater Los Angeles area
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Forever Photos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};