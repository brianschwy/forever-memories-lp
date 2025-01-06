import { Button } from "@/components/ui/button";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { ContactFormData } from "./types";
import { FormField } from "./FormField";

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
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
      // Save to database
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            photos_count: parseInt(formData.photos_count),
          }
        ]);

      if (dbError) throw dbError;

      // Send notification using Supabase Edge Function
      const { error: notifyError } = await supabase.functions.invoke('notify-form-submission', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          photos_count: parseInt(formData.photos_count),
        },
      });

      if (notifyError) {
        console.error('Notification failed:', notifyError);
        throw notifyError;
      }

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
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
      <FormField
        id="name"
        label="Name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your full name"
      />

      <FormField
        id="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="your.email@example.com"
      />

      <FormField
        id="phone"
        label="Phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        placeholder="(123) 456-7890"
      />

      <FormField
        id="photos_count"
        label="Estimated Number of Photos"
        type="number"
        value={formData.photos_count}
        onChange={handleChange}
        placeholder="100"
      />

      <Button 
        type="submit" 
        className="w-full bg-navy hover:bg-navy-light text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Book Consultation"}
      </Button>
    </form>
  );
};