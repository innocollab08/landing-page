"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full pt-6">
      <header
        className={`w-[90%] max-w-7xl rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-xl py-2"
            : "bg-white/60 backdrop-blur-sm shadow-lg py-2.5"
        }`}
      >
        <div className="container mx-auto px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold">
              <span className="text-orange-500">Inno</span>
              <span className="text-blue-500">Collab</span>
            </span>
          </Link>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-12">
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-orange-500 font-medium transition-all"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-orange-500 font-medium transition-all"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-700 hover:text-orange-500 font-medium transition-all"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-orange-500 font-medium transition-all"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button - Desktop */}
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none z-50 bg-gray-100/70 p-2 rounded-full hover:bg-white/80 transition-all"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown - Fullscreen */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 transition-all duration-500 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden flex flex-col items-center justify-center`}
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-purple-600"></div>
        
        <nav className="flex flex-col items-center space-y-6 w-full px-6">
          {/* Reduced spacing from space-y-8 to space-y-6 */}
          <button
            onClick={() => scrollToSection("services")}
            className="text-gray-800 text-2xl font-medium hover:text-orange-500 transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-800 text-2xl font-medium hover:text-orange-500 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-gray-800 text-2xl font-medium hover:text-orange-500 transition-colors"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-800 text-2xl font-medium hover:text-orange-500 transition-colors"
          >
            Contact
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="mt-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Get Started
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;