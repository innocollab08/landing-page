"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";
import {
  Monitor,
  Brain,
  ShoppingCart,
  Chrome,
  Package,
  X as CloseIcon,
  ChevronDown,
} from "lucide-react";

const serviceData = [
  {
    icon: <Brain className="w-8 h-8 text-[#2563EB]" />,
    title: "Agents as a Service",
    description:
      "Build and deploy AI-powered agents and automated workflows to streamline business processes and enhance productivity.",
    features: [
      "Custom AI Agents",
      "Workflow Automation",
      "Process Optimization",
      "Integration Services",
      "Real-time Monitoring",
      "Scalable Solutions",
    ],
    color: "bg-blue-50",
    iconBg: "bg-blue-100",
    learnMoreColor: "text-[#2563EB]",
    content: () => (
      <div className="space-y-4">
        <p>
          Transform your business operations with intelligent AI agents and
          automated workflows that handle complex tasks efficiently.
        </p>
        <ul className="list-disc pl-4 space-y-2">
          <li>Custom AI agent development</li>
          <li>Workflow automation and optimization</li>
          <li>Process integration and orchestration</li>
          <li>Real-time monitoring and analytics</li>
          <li>Scalable deployment solutions</li>
          <li>Continuous improvement and updates</li>
        </ul>
      </div>
    ),
  },
  {
    icon: <Monitor className="w-8 h-8 text-[#FF6B00]" />,
    title: "Web & Mobile Development",
    description:
      "Full-stack development solutions for web and mobile platforms, delivering seamless digital experiences across all devices.",
    features: [
      "Responsive Web Development",
      "Cross-Platform Mobile Apps",
      "Progressive Web Apps (PWA)",
      "API Development & Integration",
      "Performance Optimization",
      "App Store Deployment",
    ],
    color: "bg-orange-50",
    iconBg: "bg-orange-100",
    learnMoreColor: "text-[#FF6B00]",
    content: () => (
      <div className="space-y-4">
        <p>
          Our comprehensive web and mobile development services combine
          cutting-edge technology with user-centric design to create engaging
          digital experiences across all platforms.
        </p>
        <ul className="list-disc pl-4 space-y-2">
          <li>Custom WordPress and Next.js development</li>
          <li>React Native and Flutter mobile apps</li>
          <li>Mobile-first responsive design approach</li>
          <li>Cross-platform development solutions</li>
          <li>Performance optimization and SEO</li>
          <li>App store optimization and deployment</li>
          <li>Secure payment gateway integration</li>
          <li>Real-time data synchronization</li>
        </ul>
      </div>
    ),
  },
  {
    icon: <Brain className="w-8 h-8 text-[#10B981]" />,
    title: "AI/ML Solutions",
    description:
      "Custom artificial intelligence and machine learning solutions to automate processes and extract valuable insights from your data.",
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Custom ML Models",
      "Data Analysis",
      "AI Integration",
    ],
    color: "bg-green-50",
    iconBg: "bg-green-100",
    learnMoreColor: "text-[#10B981]",
    content: () => (
      <div className="space-y-4">
        <p>
          Leverage the power of AI and machine learning to transform your
          business operations and decision-making processes.
        </p>
        <ul className="list-disc pl-4 space-y-2">
          <li>Custom ML model development</li>
          <li>Natural Language Processing (NLP)</li>
          <li>Computer Vision solutions</li>
          <li>Predictive analytics</li>
          <li>AI-powered automation</li>
          <li>Data analysis and visualization</li>
        </ul>
      </div>
    ),
  },
  {
    icon: <ShoppingCart className="w-8 h-8 text-[#9333EA]" />,
    title: "E-Commerce Solutions",
    description:
      "Custom online shopping marketplaces with secure payment processing, inventory management, and customer analytics.",
    features: [
      "Shopping Cart Development",
      "Payment Gateway Integration",
      "Inventory Management",
      "Customer Analytics",
      "Mobile Commerce",
      "Multi-vendor Support",
    ],
    color: "bg-purple-50",
    iconBg: "bg-purple-100",
    learnMoreColor: "text-[#9333EA]",
    content: () => (
      <div className="space-y-4">
        <p>
          Build and scale your online store with our comprehensive e-commerce
          solutions designed for modern retail.
        </p>
        <ul className="list-disc pl-4 space-y-2">
          <li>Custom e-commerce platform development</li>
          <li>Shopping cart and checkout optimization</li>
          <li>Payment gateway integration</li>
          <li>Inventory management systems</li>
          <li>Customer analytics and reporting</li>
          <li>Mobile commerce solutions</li>
        </ul>
      </div>
    ),
  },
  {
    icon: <Chrome className="w-8 h-8 text-[#EAB308]" />,
    title: "Browser Extensions",
    description:
      "Custom browser extensions and add-ons to enhance browsing experience and extend functionality for specific use cases.",
    features: [
      "Chrome Extensions",
      "Firefox Add-ons",
      "Cross-Browser Compatibility",
      "API Integration",
      "Security Features",
      "Performance Optimization",
    ],
    color: "bg-yellow-50",
    iconBg: "bg-yellow-100",
    learnMoreColor: "text-[#EAB308]",
    content: () => (
      <div className="space-y-4">
        <p>
          Extend browser functionality with custom extensions that streamline
          workflows and enhance productivity.
        </p>
        <ul className="list-disc pl-4 space-y-2">
          <li>Chrome extension development</li>
          <li>Firefox add-on creation</li>
          <li>Cross-browser compatibility</li>
          <li>API integration</li>
          <li>Security and performance optimization</li>
          <li>Extension store deployment</li>
        </ul>
      </div>
    ),
  },
  {
    icon: <Package className="w-8 h-8 text-[#EC4899]" />,
    title: "NPM Packages",
    description:
      "Custom NPM packages to streamline development workflows and provide reusable components for efficient coding.",
    features: [
      "Authentication Packages",
      "Utility Libraries",
      "React/Next.js Components",
      "TypeScript Support",
      "Documentation",
      "Version Management",
    ],
    color: "bg-pink-50",
    iconBg: "bg-pink-100",
    learnMoreColor: "text-[#EC4899]",
    content: () => (
      <div className="space-y-4">
        <p>
          Develop and maintain high-quality NPM packages that solve common
          development challenges.
        </p>
        <ul className="list-disc pl-4 space-y-2">
          <li>Custom package development</li>
          <li>React component libraries</li>
          <li>Utility function packages</li>
          <li>Package documentation</li>
          <li>Version management</li>
          <li>Continuous integration setup</li>
        </ul>
      </div>
    ),
  },
];

export const Services = () => {
  const [active, setActive] = useState<(typeof serviceData)[number] | null>(
    null
  );
  const [expandedServices, setExpandedServices] = useState<Set<string>>(
    new Set()
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const toggleExpand = (title: string) => {
    setExpandedServices((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(title)) {
        newSet.delete(title);
      } else {
        newSet.add(title);
      }
      return newSet;
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 relative " id="services">
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="flex absolute top-4 right-4 items-center justify-center bg-white rounded-full h-8 w-8 shadow-lg"
              onClick={() => setActive(null)}
            >
              <CloseIcon className="w-4 h-4" />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`w-full max-w-[600px] h-full md:h-fit md:max-h-[90%] flex flex-col ${active.color} sm:rounded-3xl overflow-hidden`}
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    layoutId={`icon-${active.title}-${id}`}
                    className={`${active.iconBg} w-12 h-12 rounded-lg flex items-center justify-center shrink-0`}
                  >
                    {active.icon}
                  </motion.div>
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="text-xl font-semibold mb-2"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-gray-600"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 overflow-auto max-h-[400px] pr-4"
                  style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "#CBD5E1 transparent",
                  }}
                >
                  {active.content()}
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Our <span className="text-[#FF6B00]">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We deliver cutting-edge solutions tailored to your business needs,
            helping you navigate the digital landscape with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service) => (
            <motion.div
              layoutId={`card-${service.title}-${id}`}
              key={service.title}
              onClick={() => setActive(service)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`${service.color} rounded-xl p-6 transition-all hover:shadow-lg cursor-pointer`}
            >
              <motion.div
                layoutId={`icon-${service.title}-${id}`}
                className={`${service.iconBg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
              >
                {service.icon}
              </motion.div>
              <motion.h3
                layoutId={`title-${service.title}-${id}`}
                className="text-xl font-semibold mb-3"
              >
                {service.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${service.description}-${id}`}
                className="text-gray-600 text-sm mb-4"
              >
                {service.description}
              </motion.p>
              <motion.ul
                layout
                className="space-y-2 mb-4"
                transition={{ duration: 0.3 }}
              >
                {service.features
                  .slice(0, expandedServices.has(service.title) ? undefined : 3)
                  .map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>
                      {feature}
                    </motion.li>
                  ))}
              </motion.ul>
              {service.features.length > 3 && (
                <motion.button
                  layout
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleExpand(service.title);
                  }}
                  className={`flex items-center gap-1 text-sm font-medium ${service.learnMoreColor} hover:opacity-80 transition-opacity`}
                >
                  {expandedServices.has(service.title)
                    ? "Show Less"
                    : "Read More"}
                  <motion.div
                    animate={{
                      rotate: expandedServices.has(service.title) ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <motion.button
          onClick={() => scrollToSection("contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FF6B00] text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#FF8533] transition-colors shadow-lg hover:shadow-xl"
          >
            Get a Free Consultation
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Services;
