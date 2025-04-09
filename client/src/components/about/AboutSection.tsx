import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-orange-100/10 via-green-100/10 to-blue-100/10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4 items-center">
          <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
            <span className="bg-white text-primary text-sm uppercase font-semibold px-3 py-1 rounded-full font-heading">
              About Us
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mt-4 mb-6 text-neutral-800">
              The Story Behind Soles & Souls
            </h2>

            <div className="mb-8">
              <h3 className="font-heading font-bold text-xl mb-3">Our Vision</h3>
              <p className="text-neutral-700">
                To create a world where physical wellness and social responsibility go hand in hand, empowering communities to thrive in body, mind, and spirit.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="font-heading font-bold text-xl mb-3">Our Mission</h3>
              <p className="text-neutral-700">
                We organize initiatives that promote physical health while simultaneously addressing critical social needs, creating a dual impact that transforms both individuals and communities.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="font-heading font-bold text-xl mb-3">Behind the Name</h3>
              <p className="text-neutral-700">
                "Soles" represents our physical wellness initiatives—the movement of our feet in marathons and walkathons that carry us toward better health. "Souls" embodies our social mission—the compassion of our hearts as we reach out to uplift others.
              </p>
            </div>

            <Button asChild className="font-heading font-semibold uppercase tracking-wide bg-primary hover:bg-orange-600 text-white py-3 px-8 rounded-full transition transform hover:-translate-y-1 hover:shadow-md mt-4">
              <Link href="/about#team">
                Meet Our Team
              </Link>
            </Button>
          </div>

          <div className="w-full lg:w-1/2 px-4">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-heading font-bold text-2xl mb-6 text-center">Founder's Message</h3>

              <div className="flex items-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                  alt="Founder's portrait"
                  className="w-24 h-24 rounded-full object-cover mr-6"
                />
                <div>
                  <h4 className="font-heading font-bold text-lg">Priya Sharma</h4>
                  <p className="text-neutral-600">Founder & Executive Director</p>
                </div>
              </div>

              <blockquote className="text-neutral-700 italic border-l-4 border-primary pl-4 mb-6">
                "Soles & Souls began with a simple idea: that our physical health and our compassion for others are interconnected. When we run, walk, or cycle for a cause, we're not just improving our own wellbeing—we're creating positive change in our communities.
                <br /><br />
                Our journey started small, with a local marathon to support a children's hospital. Today, we've grown into a movement that spans multiple initiatives and touches thousands of lives. But our core belief remains the same: when we move with purpose, we heal not just ourselves, but the world around us."
              </blockquote>

              <div className="text-right">
                <svg className="h-12 inline-block" viewBox="0 0 200 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 10C20.1 10 12.1 15.7 12.1 23.9C12.1 28.3 14.4 32.1 18.2 34.5C16.3 35.4 14.6 36.7 13.2 38.2C11.8 39.7 10.7 41.5 10 43.4C13.3 42 17 41.3 21 41.3C31.5 41.3 40 35 40 27.1C40 17.8 31.2 10 30 10Z" fill="#FF7D3B"/>
                  <path d="M172.5 10C162.6 10 154.6 15.7 154.6 23.9C154.6 28.3 156.9 32.1 160.7 34.5C158.8 35.4 157.1 36.7 155.7 38.2C154.3 39.7 153.2 41.5 152.5 43.4C155.8 42 159.5 41.3 163.5 41.3C174 41.3 182.5 35 182.5 27.1C182.5 17.8 173.7 10 172.5 10Z" fill="#FF7D3B"/>
                  <path d="M60 39.7C63.6 39.7 67 38.1 69.5 35.4L69.9 39H77V3.80001L69.5 3.80001L69.5 18.7C67 16.3 63.6 14.9 60 14.9C50.9 14.9 44 22.8 44 32.8C44 42.3 50.9 39.7 60 39.7ZM63 22.9C67.9 22.9 70 27.1 70 32.1C70 37.1 67.9 41.2 63 41.2C58.2 41.2 56 37.1 56 32.1C56 27.2 58.2 22.9 63 22.9Z" fill="#FF7D3B"/>
                  <path d="M86 45.8L86 15.8L78.5 15.8L78.5 39L86 45.8Z" fill="#FF7D3B"/>
                  <path d="M82 3.5C78.9 3.5 77 5.8 77 8.30001C77 10.8 78.9 13.1 82 13.1C85.1 13.1 87 10.8 87 8.30001C87 5.8 85.1 3.5 82 3.5Z" fill="#FF7D3B"/>
                  <path d="M104.9 14.9C101.5 14.9 98.5 16.2 96.4 18.4L96 15.8L89 15.8L89 44.4L96.5 44.4L96.5 28.2C96.5 24.9 99 22.9 101.9 22.9C105 22.9 107.1 24.9 107.1 28.3L107.1 44.4L114.6 44.4L114.6 26.6C114.5 19.4 110.7 14.9 104.9 14.9Z" fill="#FF7D3B"/>
                  <path d="M145.5 36.5C144.6 36.5 143.9 36.8 143.3 37.3C142.7 37.8 142.4 38.4 142.4 39.2C142.4 39.9 142.7 40.6 143.3 41.1C143.9 41.6 144.6 41.9 145.5 41.9C146.3 41.9 147 41.6 147.7 41.1C148.2 40.6 148.5 39.9 148.5 39.2C148.5 38.4 148.2 37.8 147.7 37.3C147 36.8 146.3 36.5 145.5 36.5Z" fill="#FF7D3B"/>
                  <path d="M135.3 14.9C131.9 14.9 128.9 16.2 126.8 18.4L126.4 15.8L119.4 15.8L119.4 44.4L126.9 44.4L126.9 28.2C126.9 24.9 129.4 22.9 132.3 22.9C135.4 22.9 137.5 24.9 137.5 28.3L137.5 44.4L145 44.4L145 26.6C145 19.4 141.2 14.9 135.3 14.9Z" fill="#FF7D3B"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
