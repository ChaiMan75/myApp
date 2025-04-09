import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative pt-16 md:pt-24 pb-20 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-blue-50 to-white -z-10"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 z-10">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Heart size={18} className="text-primary mr-2" />
              <span className="text-primary font-medium">Wellness & Community Impact</span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight text-neutral-900">
              Run with <span className="text-primary">Purpose.</span><br />
              Heal with <span className="text-blue-600">Heart.</span>
            </h1>
            
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed max-w-xl">
              We bring together physical wellness and social responsibility through community initiatives.
              Join our movement to make a difference for both body and soul.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium tracking-wide rounded-lg shadow-lg shadow-primary/20 transition hover:shadow-xl hover:shadow-primary/30">
                <Link href="/contact#join" className="inline-flex items-center">
                  Join the Movement
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-2 border-primary/20 text-primary hover:bg-primary/5 hover:border-primary font-medium tracking-wide rounded-lg transition">
                <Link href="#learn">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 z-10">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-xl blur-md opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="People running together for a cause"
                className="relative rounded-xl shadow-2xl w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-xl p-4 max-w-xs">
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">5,200+ Lives Impacted</p>
                    <p className="text-xs text-gray-500">Through our initiatives</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
