"use client";

import React from "react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { Lightbulb, Calendar, Palette, Code, Rocket } from "lucide-react";

const processSteps = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Idea Generation",
    description:
      "We start by understanding your vision and brainstorming innovative solutions that align with your business goals.",
    gradient: "from-blue-500 to-cyan-400",
    accent: "bg-blue-500",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Planning & Strategy",
    description:
      "Detailed planning and strategy development to ensure a clear roadmap for your project's success.",
    gradient: "from-orange-500 to-amber-400",
    accent: "bg-orange-500",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Design & Prototyping",
    description:
      "Creating beautiful, user-friendly interfaces with modern design principles and interactive prototypes.",
    gradient: "from-purple-500 to-pink-400",
    accent: "bg-purple-500",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Development",
    description:
      "Building robust, scalable solutions using cutting-edge technologies and best practices.",
    gradient: "from-green-500 to-emerald-400",
    accent: "bg-green-500",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Deployment",
    description:
      "Seamless deployment and launch with thorough testing and optimization for performance.",
    gradient: "from-red-500 to-rose-400",
    accent: "bg-red-500",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B00] to-orange-400">
            Our Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From concept to completion, we follow a proven process to deliver
            exceptional results.
          </p>
        </motion.div>

        <div className="w-full px-4">
          <BentoGrid>
            {processSteps.map((step, index) => (
              <BentoGridItem
                key={index}
                title={step.title}
                description={step.description}
                header={
                  <div
                    className={`h-full w-full rounded-xl bg-gradient-to-r ${step.gradient} p-4`}
                  >
                    <div className="flex items-center justify-center h-full">
                      {step.icon}
                    </div>
                  </div>
                }
                icon={step.icon}
                className={
                  index === 3
                    ? "md:col-span-2"
                    : index === 4
                    ? "md:col-span-1"
                    : ""
                }
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
};

export default Process;
