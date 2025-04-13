"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full border-b border-blue-100 relative z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <span className="text-orange-500">Inno</span>
          <span className="text-[#3B82F6]">Collab</span>
        </Link>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-orange-500">
            Home
          </Link>
          <Link
            href="/services"
            className="text-gray-700 hover:text-orange-500"
          >
            Services
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-orange-500">
            About
          </Link>
          <Link
            href="/portfolio"
            className="text-gray-700 hover:text-orange-500"
          >
            Portfolio
          </Link>
          <Link
            href="/products"
            className="text-gray-700 hover:text-orange-500"
          >
            Products
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-orange-500">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-orange-500">
            Contact
          </Link>
        </nav>

        {/* CTA Button - Desktop */}
        <Link
          href="/get-started"
          className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
        >
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        } md:hidden overflow-hidden`}
      >
        <nav className="flex flex-col py-4 px-6 space-y-4">
          <Link
            href="/"
            className="text-gray-700 hover:text-orange-500 py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-gray-700 hover:text-orange-500 py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-orange-500 py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/portfolio"
            className="text-gray-700 hover:text-orange-500 py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="/products"
            className="text-gray-700 hover:text-orange-500 py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/blog"
            className="text-gray-700 hover:text-orange-500 py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-orange-500 py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/get-started"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium transition-colors inline-block text-center mt-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
