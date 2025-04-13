import React from "react";
import {
  Monitor,
  Smartphone,
  Brain,
  ShoppingCart,
  Chrome,
  Package,
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
  },
];

export const Services = () => {
  return (
    <section className="py-20">
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
            <div
              key={index}
              className={`${service.color} rounded-xl p-6 transition-transform hover:-translate-y-1`}
            >
              <div
                className={`${service.iconBg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {service.description}
              </p>
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
              <button
                className={`${service.learnMoreColor} text-sm font-medium hover:underline`}
              >
                Learn More →
              </button>
            </div>
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
