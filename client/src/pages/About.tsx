import { useEffect } from "react";
import AboutSection from "@/components/about/AboutSection";
import Newsletter from "@/components/home/Newsletter";

const About = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      <div className="bg-gradient-to-br from-orange-100/10 via-green-100/10 to-blue-100/10 py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-neutral-800">
              About Soles & Souls
            </h1>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Learn about our journey, mission, and the passionate team driving our initiatives to create positive impact through wellness and social responsibility.
            </p>
          </div>
        </div>
      </div>
      
      <AboutSection />
      <Newsletter />
    </div>
  );
};

export default About;
