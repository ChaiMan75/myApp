import { useEffect } from "react";
import SolesSection from "@/components/soles/SolesSection";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import Newsletter from "@/components/home/Newsletter";

const Soles = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      <div className="bg-gradient-to-br from-orange-100/10 via-green-100/10 to-blue-100/10 py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="bg-orange-100 text-orange-700 text-sm uppercase font-semibold px-3 py-1 rounded-full font-heading">
              Wellness Activities
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl mt-4 mb-6 text-neutral-800">
              Soles: Moving for Wellness
            </h1>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Our wellness activities promote physical health through community-based movement initiatives. From marathons to cyclothons, we encourage everyone to stay active while contributing to meaningful causes.
            </p>
          </div>
        </div>
      </div>
      
      <SolesSection />
      <UpcomingEvents />
      <Newsletter />
    </div>
  );
};

export default Soles;
