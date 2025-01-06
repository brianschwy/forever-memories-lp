import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const Contact = () => {
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

        <form className="max-w-xl mx-auto space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your full name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your.email@example.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" placeholder="(123) 456-7890" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="photos">Estimated Number of Photos</Label>
            <Input id="photos" type="number" placeholder="100" />
          </div>

          <Button className="w-full bg-navy hover:bg-navy-light text-white">
            Book Consultation
          </Button>
        </form>
      </div>
    </section>
  );
};