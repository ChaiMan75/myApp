import { useEffect } from "react";
import SoulsSection from "@/components/souls/SoulsSection";
import JoinSection from "@/components/join/JoinSection";
import Newsletter from "@/components/home/Newsletter";

const Souls = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      <div className="bg-gradient-to-br from-orange-100/10 via-green-100/10 to-blue-100/10 py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="bg-green-100 text-green-700 text-sm uppercase font-semibold px-3 py-1 rounded-full font-heading">
              Social Responsibility
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl mt-4 mb-6 text-neutral-800">
              Souls: Giving with Compassion
            </h1>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Our social responsibility initiatives aim to uplift lives and give back with compassion. From organ donation awareness to supporting Anganwadis, we're committed to healing souls through genuine care.
            </p>
          </div>
        </div>
      </div>
      
      <SoulsSection />
      <JoinSection />
      <Newsletter />
    </div>
  );
};

export default Souls;
