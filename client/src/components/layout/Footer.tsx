import { Link } from "wouter";
import { FooterSection, SocialLink, ContactInfo } from "@/lib/types";

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
  { platform: "Facebook", href: "#", icon: "fab fa-facebook-f" },
  { platform: "Twitter", href: "#", icon: "fab fa-twitter" },
  { platform: "Instagram", href: "#", icon: "fab fa-instagram" },
  { platform: "LinkedIn", href: "#", icon: "fab fa-linkedin-in" },
];

const contactInfo: ContactInfo[] = [
  {
    icon: "fas fa-map-marker-alt",
    text: "123 Community Lane, Bengaluru, Karnataka 560001",
  },
  {
    icon: "fas fa-envelope",
    text: "contact@solesandsouls.org",
  },
  {
    icon: "fas fa-phone",
    text: "+91 98765 43210",
  },
];

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-primary rounded-full p-2 mr-2">
                <i className="fas fa-shoe-prints text-white text-xl"></i>
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Soles & <span className="text-primary">Souls</span>
              </span>
            </div>

            <p className="mb-6 text-neutral-300">
              Run with Purpose. Heal with Heart.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-neutral-300 hover:text-primary transition"
                  aria-label={link.platform}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index} className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
              <h4 className="font-heading font-bold text-lg mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-neutral-300 hover:text-primary transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
            <h4 className="font-heading font-bold text-lg mb-4">
              Contact Information
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start">
                  <i className={`${info.icon} mt-1 mr-3 text-primary`}></i>
                  <span>{info.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-8 pt-6 text-center text-neutral-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Soles & Souls. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
