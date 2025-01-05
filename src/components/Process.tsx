import { Calendar, Home, Camera, Cloud } from "lucide-react";

export const Process = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Book a Free Consultation",
      description: "Schedule a time that works for you",
    },
    {
      icon: Home,
      title: "We Visit Your Home",
      description: "Our professionals come to you",
    },
    {
      icon: Camera,
      title: "Professional Scanning",
      description: "High-quality digitization process",
    },
    {
      icon: Cloud,
      title: "Secure Digital Delivery",
      description: "Access your memories anywhere",
    },
  ];

  return (
    <section id="process" className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-16">
          Our Process
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-block p-4 bg-navy-light rounded-full mb-6">
                <step.icon size={32} className="text-gold" />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-4">
                {step.title}
              </h3>
              <p className="text-gray-300">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 w-1/4 h-px bg-gold-light"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};