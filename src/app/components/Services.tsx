"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";
import {
  Monitor,
  Smartphone,
  Brain,
  ShoppingCart,
  Chrome,
  Package,
  X as CloseIcon,
} from "lucide-react";

const serviceData = [
  {
    icon: <Monitor className="w-8 h-8 text-[#FF6B00]" />,
    title: "Website Development",
    description:
      "Custom-designed, responsive websites optimized for performance, SEO, and user experience across all devices.",
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Content Management Systems",
    ],
    color: "bg-orange-50",
    iconBg: "bg-orange-100",
    learnMoreColor: "text-[#FF6B00]",
    content: () => (
      <div className="space-y-4">
        <p>
          Our website development services combine cutting-edge technology with
          user-centric design to create engaging digital experiences.
        </p>
        <ul className="list-disc pl-4 space-y-2">
          <li>Custom WordPress and Next.js development</li>
          <li>Mobile-first responsive design approach</li>
          <li>Performance optimization and SEO best practices</li>
          <li>Secure payment gateway integration</li>
          <li>Content Management System (CMS) setup</li>
          <li>Website maintenance and support</li>
        </ul>
      </div>
    ),
  },
  {
    icon: <Smartphone className="w-8 h-8 text-[#2563EB]" />,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications built with FlutterFlow, delivering native-like performance with a single codebase.",
    features: [
      "FlutterFlow Development",
      "Cross-Platform Solutions",
      "App Store Deployment",
    ],
    color: "bg-blue-50",
    iconBg: "bg-blue-100",
    learnMoreColor: "text-[#2563EB]",
    content: () => (
      <div className="space-y-4">
        <p>
          We create powerful, scalable mobile applications that provide seamless
          user experiences across all platforms.
        </p>
        <ul className="list-disc pl-4 space-y-2">
          <li>Native iOS and Android development</li>
          <li>Cross-platform development with Flutter</li>
          <li>Real-time data synchronization</li>
          <li>Push notification integration</li>
          <li>App store optimization</li>
          <li>Ongoing maintenance and updates</li>
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
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <section className="py-20 relative">
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.05 },
              }}
              className="flex absolute top-4 right-4 items-center justify-center bg-white rounded-full h-8 w-8 shadow-lg"
              onClick={() => setActive(null)}
            >
              <CloseIcon className="w-4 h-4" />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
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
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
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
          {serviceData.map((service, index) => (
            <motion.div
              layoutId={`card-${service.title}-${id}`}
              key={service.title}
              onClick={() => setActive(service)}
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
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <button className="bg-[#FF6B00] text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#FF8533] transition-colors shadow-lg hover:shadow-xl">
            Get a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
