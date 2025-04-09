import { Link } from "wouter";
import { FooterSection, SocialLink, ContactInfo } from "@/lib/types";
import Logo from "./Logo";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone, ChevronRight, Heart } from "lucide-react";

const footerSections: FooterSection[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Soles (Wellness)", href: "/soles" },
      { label: "Souls (Social Responsibility)", href: "/souls" },
      { label: "Our Impact", href: "/impact" },
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Volunteer Opportunities", href: "/contact#volunteer" },
      { label: "Upcoming Events", href: "/events" },
      { label: "Make a Donation", href: "/contact#donate" },
      { label: "Partner With Us", href: "/contact#partner" },
      { label: "Sponsorship", href: "/contact#sponsor" },
    ],
  },
];

const socialLinks: SocialLink[] = [
  { platform: "Facebook", href: "#", icon: "facebook" },
  { platform: "Twitter", href: "#", icon: "twitter" },
  { platform: "Instagram", href: "#", icon: "instagram" },
  { platform: "LinkedIn", href: "#", icon: "linkedin" },
];

const contactInfo: ContactInfo[] = [
  {
    icon: "map",
    text: "123 Community Lane, Bengaluru, Karnataka 560001",
  },
  {
    icon: "mail",
    text: "contact@solesandsouls.org",
  },
  {
    icon: "phone",
    text: "+91 98765 43210",
  },
];

const getSocialIcon = (icon: string) => {
  switch (icon) {
    case "facebook":
      return <Facebook size={18} />;
    case "twitter":
      return <Twitter size={18} />;
    case "instagram":
      return <Instagram size={18} />;
    case "linkedin":
      return <Linkedin size={18} />;
    default:
      return null;
  }
};

const getContactIcon = (icon: string) => {
  switch (icon) {
    case "map":
      return <MapPin size={18} />;
    case "mail":
      return <Mail size={18} />;
    case "phone":
      return <Phone size={18} />;
    default:
      return null;
  }
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-neutral-900 to-neutral-950 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                <Logo />
              </span>
              <span className="font-heading font-bold text-xl ml-2">
                Soles & <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Souls</span>
              </span>
            </div>

            <p className="mb-8 text-neutral-300 leading-relaxed">
              We bring together physical wellness and social responsibility through community initiatives. Join our movement to make a difference for both body and soul.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-neutral-800 text-neutral-300 hover:bg-primary hover:text-white transition-all duration-300 group"
                  aria-label={link.platform}
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {getSocialIcon(link.icon)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-heading font-bold text-lg mb-6 text-white relative inline-block">
                {section.title}
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-neutral-300 hover:text-white flex items-center group"
                    >
                      <ChevronRight size={16} className="mr-2 text-primary opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white relative inline-block">
              Contact Information
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-neutral-800 mr-4 text-primary">
                    {getContactIcon(info.icon)}
                  </div>
                  <span className="text-neutral-300 pt-1">{info.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 text-sm">
            &copy; {new Date().getFullYear()} Soles & Souls. All rights reserved.
          </p>
          
          <div className="flex items-center text-neutral-400 text-sm">
            <Heart size={14} className="text-primary mr-2" />
            Made with passion for community wellness and social responsibility
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
