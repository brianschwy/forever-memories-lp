import { Shield, Home, Camera } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: Home,
      title: "In-Home Service",
      description: "Your photo albums and pictures never leave your home!",
    },
    {
      icon: Camera,
      title: "Professional Equipment",
      description: "High-quality scans safely handled by our team of experts",
    },
    {
      icon: Shield,
      title: "Secure & Simple",
      description: "Receive your digital files via USB, CD, or cloud storage",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center text-navy mb-16">
          Why Choose Forever Photos
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-6">
                <benefit.icon size={32} className="text-gold" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-navy mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};