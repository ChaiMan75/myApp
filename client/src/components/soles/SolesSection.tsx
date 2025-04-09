import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { InitiativeCard } from "@/lib/types";

const initiatives: InitiativeCard[] = [
  {
    icon: "fas fa-running",
    title: "Marathons",
    description: "Annual and themed running events to promote fitness while supporting various causes.",
  },
  {
    icon: "fas fa-biking",
    title: "Cyclothons",
    description: "Group cycling events that promote eco-friendly transportation and cardiovascular health.",
  },
  {
    icon: "fas fa-walking",
    title: "Walkathons",
    description: "Inclusive walking events designed for all ages and abilities to promote movement.",
  },
  {
    icon: "fas fa-heartbeat",
    title: "Wellness Workshops",
    description: "Educational sessions on nutrition, fitness, and mental wellbeing for holistic health.",
  },
];

const SolesSection = () => {
  return (
    <section id="soles" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="bg-sky-100 text-primary text-sm uppercase font-semibold px-3 py-1 rounded-full font-heading">
            Wellness Activities
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mt-4 mb-4 text-neutral-800">
            Soles: Moving for Wellness
          </h2>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            Our "Soles" initiative promotes physical wellness through community-based movement activities that energize the body and uplift the spirit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {initiatives.map((initiative, index) => (
            <div key={index} className="bg-sky-50 rounded-lg p-6 text-center hover:shadow-md transition">
              <div className="bg-primary w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <i className={`${initiative.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">{initiative.title}</h3>
              <p className="text-neutral-700">{initiative.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-sky-100 rounded-lg overflow-hidden">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 p-8 lg:p-12">
                <span className="bg-white text-primary text-sm uppercase font-semibold px-3 py-1 rounded-full font-heading">
                  Success Story
                </span>
                <h3 className="font-heading font-bold text-2xl lg:text-3xl mt-4 mb-4 text-blue-700">
                  10,000 Steps for Education
                </h3>
                <p className="text-neutral-800 mb-6">
                  Our flagship walkathon event brought together over 2,000 participants who collectively walked 20 million steps to raise funds for underprivileged children's education.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="font-heading font-bold text-2xl text-primary">₹5.2L</p>
                    <p className="text-sm text-neutral-600">Funds Raised</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="font-heading font-bold text-2xl text-primary">2,000+</p>
                    <p className="text-sm text-neutral-600">Participants</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="font-heading font-bold text-2xl text-primary">320</p>
                    <p className="text-sm text-neutral-600">Children Supported</p>
                  </div>
                </div>
                <Link href="/impact" className="font-heading font-semibold text-blue-700 hover:text-primary transition">
                  Read the full story <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
              <div className="w-full lg:w-1/2 bg-cover bg-center h-80 lg:h-auto" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}>
                {/* Background image set via style */}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-primary hover:bg-sky-500 font-heading font-semibold uppercase tracking-wide rounded-full transition transform hover:-translate-y-1 hover:shadow-md">
            <Link href="/events">
              Join Our Next Event
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolesSection;
