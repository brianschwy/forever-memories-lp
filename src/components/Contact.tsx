import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

export const Contact = () => {
  const [contactMethod, setContactMethod] = useState("phone");

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
          <p className="text-gray-600 mt-4">
            Call us: (860) 331-9214
          </p>
        </div>

        <form className="max-w-xl mx-auto space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your full name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" placeholder="(123) 456-7890" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="photos">Estimated Number of Photos</Label>
            <Input id="photos" type="number" placeholder="100" />
          </div>

          <div className="space-y-2">
            <Label>Preferred Contact Method</Label>
            <RadioGroup defaultValue="phone" onValueChange={setContactMethod}>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="phone" id="r-phone" />
                  <Label htmlFor="r-phone">Phone</Label>
                </div>
              </div>
            </RadioGroup>
          </div>

          <Button className="w-full bg-navy hover:bg-navy-light text-white">
            Book Consultation
          </Button>
        </form>
      </div>
    </section>
  );
};