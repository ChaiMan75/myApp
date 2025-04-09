import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import SolesSection from "@/components/soles/SolesSection";
import SoulsSection from "@/components/souls/SoulsSection";
import ImpactSection from "@/components/impact/ImpactSection";
import AboutSection from "@/components/about/AboutSection";
import Newsletter from "@/components/home/Newsletter";
import ContactSection from "@/components/contact/ContactSection";
import JoinSection from "@/components/join/JoinSection";
import { useEffect } from "react";

const Home = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Introduction />
      <UpcomingEvents />
      <SolesSection />
      <SoulsSection />
      <ImpactSection />
      <AboutSection />
      <Newsletter />
      <ContactSection />
      <JoinSection />
    </>
  );
};

export default Home;
