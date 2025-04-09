import { useEffect } from "react";
import ContactSection from "@/components/contact/ContactSection";
import JoinSection from "@/components/join/JoinSection";

const Contact = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if there's a hash in the URL and scroll to that section
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="pt-24">
      <div className="bg-gradient-to-br from-orange-100/10 via-green-100/10 to-blue-100/10 py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-neutral-800">
              Get In Touch
            </h1>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Have questions or want to get involved? We'd love to hear from you! Reach out to us or register as a volunteer to join our movement.
            </p>
          </div>
        </div>
      </div>
      
      <ContactSection />
      <JoinSection />
    </div>
  );
};

export default Contact;
