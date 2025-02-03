import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
      pricePerPhoto: 0.50,
      description: "Perfect for small collections",
      features: commonFeatures,
    },
    {
      name: "Family Collection",
      photos: 500,
      pricePerPhoto: 0.40,
      description: "Most popular",
      features: commonFeatures,
      savings: "Save 20%"
    },
    {
      name: "Heritage Collection",
      photos: "1000+",
      pricePerPhoto: 0.30,
      description: "Best value for larger collections",
      features: commonFeatures,
      savings: "Save 40%"
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
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 relative"
            >
              {plan.savings && (
                <Badge 
                  className="absolute -top-3 -right-3 bg-gold hover:bg-gold text-white px-4 py-1 text-sm font-semibold"
                >
                  {plan.savings}
                </Badge>
              )}
              <h3 className="text-2xl font-playfair font-bold text-navy mb-4">
                {plan.name}
              </h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-navy">${plan.pricePerPhoto.toFixed(2)}</span>
                <span className="text-gray-600"> per photo</span>
                <p className="text-lg font-semibold text-gold mt-2 border-2 border-gold rounded-md p-2 text-center">
                  Up to {plan.photos} photos
                </p>
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