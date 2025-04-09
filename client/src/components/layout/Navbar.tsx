import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { NavItem } from "@/lib/types";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { Menu, X, ChevronRight } from "lucide-react";

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
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById('mobile-menu');
      if (isMenuOpen && nav && !nav.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <span className={`transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-primary'}`}>
                <Logo />
              </span>
              <span className={`font-heading font-bold text-xl transition-colors duration-300 ml-2 ${
                scrolled ? 'text-neutral-800' : 'text-neutral-800'
              }`}>
                Soles & <span className="text-primary group-hover:text-blue-600 transition-colors">Souls</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              item.isButton ? (
                <Button 
                  key={index} 
                  asChild 
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 ml-4"
                >
                  <Link href={item.href} className="flex items-center font-medium">
                    {item.label}
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </Button>
              ) : (
                <Link
                  key={index}
                  href={item.href}
                  className={`relative px-3 py-2 rounded-md font-medium text-sm hover:text-primary transition-colors ${
                    location === item.href 
                      ? "text-primary after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-primary after:rounded-full" 
                      : scrolled ? "text-gray-700" : "text-gray-800"
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className={`rounded-full ${scrolled ? 'text-neutral-700' : 'text-neutral-800'}`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className={`md:hidden fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="font-heading font-bold text-xl text-neutral-800">
              Menu
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-neutral-500 hover:text-primary"
              aria-label="Close menu"
            >
              <X size={24} />
            </Button>
          </div>
          
          <div className="space-y-6">
            {navItems.map((item, index) => (
              item.isButton ? (
                <Button 
                  key={index} 
                  asChild 
                  className="w-full justify-start bg-primary hover:bg-primary/90"
                >
                  <Link href={item.href} className="flex items-center">
                    {item.label}
                    <ChevronRight size={16} className="ml-2" />
                  </Link>
                </Button>
              ) : (
                <Link
                  key={index}
                  href={item.href}
                  className={`flex items-center font-medium text-lg hover:text-primary transition-colors ${
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
      
      {/* Overlay */}
      <div 
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      />
    </nav>
  );
};

export default Navbar;
