import { useEffect } from "react";
import ImpactSection from "@/components/impact/ImpactSection";
import Newsletter from "@/components/home/Newsletter";

const Impact = () => {
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
              Our Impact
            </h1>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Through the dedication of our volunteers and partners, we've touched thousands of lives across our communities. Here's how we're making a difference.
            </p>
          </div>
        </div>
      </div>
      
      <ImpactSection />
      <Newsletter />
    </div>
  );
};

export default Impact;
