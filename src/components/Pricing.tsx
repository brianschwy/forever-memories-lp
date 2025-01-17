import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Pricing = () => {
  const commonFeatures = [
    "High-resolution scans",
    "Professional digital organization",
    "Cloud storage access",
    "USB and CD delivery of files",
  ];

  const plans = [
    {
      name: "Starter Collection",
      photos: 100,
      pricePerPhoto: 0.60,
      description: "Perfect for small collections",
      features: commonFeatures,
    },
    {
      name: "Family Collection",
      photos: 500,
      pricePerPhoto: 0.55,
      description: "Most popular",
      features: commonFeatures,
    },
    {
      name: "Heritage Collection",
      photos: "1000+",
      pricePerPhoto: 0.50,
      description: "Best value for larger collections",
      features: commonFeatures,
    },
  ];

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    contactElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center text-navy mb-16">
          Service Packages
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-playfair font-bold text-navy mb-4">
                {plan.name}
              </h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-navy">${plan.pricePerPhoto.toFixed(2)}</span>
                <span className="text-gray-600"> per photo</span>
                <p className="text-sm text-gray-500 mt-2">Up to {plan.photos} photos</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center">
                    <Check size={20} className="text-gold mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full bg-navy hover:bg-navy-light text-white"
                onClick={scrollToContact}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};