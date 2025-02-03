import { ContactForm } from "./contact/ContactForm";

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
        </div>

        <ContactForm />
      </div>
    </section>
  );
};