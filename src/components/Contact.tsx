import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    photos_count: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            photos_count: parseInt(formData.photos_count),
          }
        ]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your consultation request has been submitted. We'll contact you soon!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        photos_count: "",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy mb-6">
            Schedule Your Free Consultation
          </h2>
          <p className="text-gray-600">
            Let's discuss your photo collection and create a personalized digitization plan.
          </p>
          <p className="text-gray-600 mt-4">
            Proudly serving the Greater Los Angeles area.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input 
              id="name" 
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name" 
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com" 
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input 
              id="phone" 
              type="tel" 
              value={formData.phone}
              onChange={handleChange}
              placeholder="(123) 456-7890" 
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="photos_count">Estimated Number of Photos</Label>
            <Input 
              id="photos_count" 
              type="number" 
              value={formData.photos_count}
              onChange={handleChange}
              placeholder="100" 
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-navy hover:bg-navy-light text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Book Consultation"}
          </Button>
        </form>
      </div>
    </section>
  );
};