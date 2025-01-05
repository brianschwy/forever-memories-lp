import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    contactElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "py-4"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-navy font-playfair text-2xl font-bold">Forever Photos</div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <a href="#process" className="text-navy hover:text-gold transition-colors">Process</a>
              <a href="#pricing" className="text-navy hover:text-gold transition-colors">Pricing</a>
            </nav>
            <Button 
              className="bg-navy hover:bg-navy-light text-white"
              onClick={scrollToContact}
            >
              Book Consultation
            </Button>
          </div>

          <button 
            className="md:hidden text-navy"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
            <nav className="flex flex-col space-y-4 px-4">
              <a href="#process" className="text-navy hover:text-gold transition-colors">Process</a>
              <a href="#pricing" className="text-navy hover:text-gold transition-colors">Pricing</a>
              <Button 
                className="bg-navy hover:bg-navy-light text-white w-full"
                onClick={scrollToContact}
              >
                Book Consultation
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};