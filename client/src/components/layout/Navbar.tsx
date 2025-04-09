import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { NavItem } from "@/lib/types";
import { Button } from "@/components/ui/button";

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Soles", href: "/soles" },
  { label: "Souls", href: "/souls" },
  { label: "Our Impact", href: "/impact" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Join Us", href: "/contact#join", isButton: true },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`bg-white fixed w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="bg-primary rounded-full p-2 mr-2">
                <i className="fas fa-shoe-prints text-white text-xl"></i>
              </div>
              <span className="font-heading font-bold text-xl text-neutral-800">
                Soles & <span className="text-primary">Souls</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              item.isButton ? (
                <Button 
                  key={index} 
                  asChild 
                  className="bg-primary hover:bg-orange-600 transition font-heading"
                >
                  <Link href={item.href} onClick={closeMenu}>
                    {item.label}
                  </Link>
                </Button>
              ) : (
                <Link
                  key={index}
                  href={item.href}
                  onClick={closeMenu}
                  className={`font-heading font-medium hover:text-primary transition ${
                    location === item.href ? "text-primary" : "text-neutral-700"
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-neutral-700 hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300`}>
          <div className="px-2 pt-2 pb-4 space-y-3">
            {navItems.map((item, index) => (
              item.isButton ? (
                <Link
                  key={index}
                  href={item.href}
                  onClick={closeMenu}
                  className="block font-heading font-medium text-white bg-primary py-2 px-4 rounded-full text-center hover:bg-orange-600 transition"
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={index}
                  href={item.href}
                  onClick={closeMenu}
                  className={`block font-heading font-medium hover:text-primary transition p-2 ${
                    location === item.href ? "text-primary" : "text-neutral-700"
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
