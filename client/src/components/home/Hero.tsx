import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 bg-gradient-to-br from-sky-100/20 via-blue-100/10 to-sky-200/20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4 text-neutral-800">
              Run with <span className="text-primary">Purpose.</span><br />
              Heal with <span className="text-blue-500">Heart.</span>
            </h1>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              We bring together physical wellness and social responsibility through community initiatives.
              Join our movement to make a difference for both body and soul.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-sky-500 text-white font-heading tracking-wide uppercase font-semibold rounded-full transition transform hover:-translate-y-1 hover:shadow-md">
                <Link href="/contact#join">
                  Join the Movement
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-heading tracking-wide uppercase font-semibold rounded-full transition transform hover:-translate-y-1 hover:shadow-md">
                <Link href="#learn">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="People running together for a cause"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
