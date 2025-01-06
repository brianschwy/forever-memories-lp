import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 p-8 md:p-16 z-20 mt-20 md:mt-0">
        <h1 className="font-playfair text-4xl md:text-6xl font-bold text-navy mb-6 animate-fadeIn">
          Turning Physical Photos Into Forever Memories
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          Professional photo digitization service that preserves your precious memories without ever leaving your home.
        </p>
        <Button 
          onClick={scrollToContact}
          className="bg-gold hover:bg-gold-light text-white text-lg px-8 py-6 animate-fadeIn" 
          style={{ animationDelay: "0.4s" }}
        >
          Book Your Free Consultation
        </Button>
      </div>

      <div className="w-full md:w-1/2 h-[50vh] md:h-[80vh] relative">
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <img 
            src="/lovable-uploads/4bc29af1-b5d6-4426-a179-4d41b71e6f46.png" 
            alt="Family looking at digital photos together" 
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};