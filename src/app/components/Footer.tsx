"use client";
import React from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Github,
  Youtube,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-[#FF6B00]">Inno</span>
              <span className="text-[#2563EB]">Collab</span>
            </Link>
            <p className="text-sm text-gray-400">
              Transforming innovative ideas into powerful digital solutions. We
              help businesses grow through cutting-edge technology and expert
              development services.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Github, href: "#" },
                { icon: Youtube, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="hover:text-white transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Products", href: "/products" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-[#FF6B00] transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 text-[#FF6B00]" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                { name: "Website Development", href: "/services/web" },
                { name: "Mobile App Development", href: "/services/mobile" },
                { name: "AI/ML Solutions", href: "/services/ai-ml" },
                { name: "E-Commerce Development", href: "/services/ecommerce" },
                { name: "Browser Extensions", href: "/services/extensions" },
                { name: "NPM Packages", href: "/services/npm" },
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-[#2563EB] transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 text-[#2563EB]" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Contact Information
            </h3>
            <div className="space-y-4">
              <p className="text-sm">
                123 Innovation Street, Tech Park,
                <br />
                Bangalore, India 560001
              </p>
              <p className="text-sm">info@innocollab.com</p>
              <p className="text-sm">+91 98765 43210</p>

              {/* Newsletter */}
              <div className="mt-6">
                <h4 className="text-white font-semibold mb-2">
                  Subscribe to Our Newsletter
                </h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
                  />
                  <button className="bg-[#2563EB] p-2 rounded-lg hover:bg-blue-600 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2023 InnoCollab. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="hover:text-white transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
