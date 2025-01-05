import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center relative pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-transparent z-10"></div>
      
      <div className="w-full md:w-1/2 p-8 md:p-16 z-20">
        <h1 className="font-playfair text-4xl md:text-6xl font-bold text-navy mb-6 animate-fadeIn">
          Turning Physical Photos Into Forever Memories
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          Professional photo digitization service that preserves your precious memories without ever leaving your home.
        </p>
        <Button 
          onClick={scrollToConsultation}
          className="bg-gold hover:bg-gold-light text-white text-lg px-8 py-6 animate-fadeIn" 
          style={{ animationDelay: "0.4s" }}
        >
          Book Your Free Consultation
        </Button>
      </div>

      <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/4bc29af1-b5d6-4426-a179-4d41b71e6f46.png" 
            alt="Family looking at digital photos together" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};