import { Link } from "wouter";

const Introduction = () => {
  return (
    <section id="learn" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-neutral-800">Our Dual Spirit</h2>
          <p className="text-lg text-neutral-700 mb-10 leading-relaxed">
            The Soles and Souls initiative embodies the perfect balance between physical wellness and social responsibility.
            We believe that health and compassion go hand in hand to create meaningful change in our communities.
          </p>
        </div>

        <div className="flex flex-wrap -mx-4 mt-8">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="bg-neutral-100 rounded-lg p-8 h-full shadow-md hover:shadow-lg transition">
              <div className="flex items-center mb-6">
                <div className="bg-primary rounded-full p-3 mr-4">
                  <i className="fas fa-shoe-prints text-white text-2xl"></i>
                </div>
                <h3 className="font-heading font-bold text-2xl">Soles</h3>
              </div>
              <p className="text-neutral-700 mb-6">
                Our wellness activities promote physical health through community-based movement initiatives.
                From marathons to cyclothons, we encourage everyone to stay active while contributing to meaningful causes.
              </p>
              <Link href="/soles" className="inline-block font-heading font-semibold text-primary hover:text-orange-600">
                Discover our wellness activities <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-4">
            <div className="bg-neutral-100 rounded-lg p-8 h-full shadow-md hover:shadow-lg transition">
              <div className="flex items-center mb-6">
                <div className="bg-green-500 rounded-full p-3 mr-4">
                  <i className="fas fa-heart text-white text-2xl"></i>
                </div>
                <h3 className="font-heading font-bold text-2xl">Souls</h3>
              </div>
              <p className="text-neutral-700 mb-6">
                Our social responsibility initiatives aim to uplift lives and give back with compassion.
                From organ donation awareness to supporting Anganwadis, we're committed to healing souls through genuine care.
              </p>
              <Link href="/souls" className="inline-block font-heading font-semibold text-green-500 hover:text-green-600">
                Explore our impact initiatives <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
