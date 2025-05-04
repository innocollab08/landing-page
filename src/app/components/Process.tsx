"use client";

import React from "react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { Lightbulb, Calendar, Palette, Code, Rocket } from "lucide-react";
import Image from "next/image";
import idea from "../../../public/process/idea.gif";
import planning from "../../../public/process/consulting.gif";
import design from "../../../public/process/digital-art.gif";
import development from "../../../public/process/web-developer.gif";
import deployment from "../../../public/process/startup.gif";

const processSteps = [
  {
    title: "Idea Generation",
    description:
      "We start by understanding your vision and brainstorming innovative solutions that align with your business goals.",
    image: idea,
    icon: <Lightbulb className="w-6 h-6 text-[#FF6B00]" />,
  },
  {
    title: "Planning & Strategy",
    description:
      "Detailed planning and strategy development to ensure a clear roadmap for your project's success.",
    image: planning,
    icon: <Calendar className="w-6 h-6 text-[#FF6B00]" />,
  },
  {
    title: "Design & Prototyping",
    description:
      "Creating beautiful, user-friendly interfaces with modern design principles and interactive prototypes.",
    image: design,
    icon: <Palette className="w-6 h-6 text-[#FF6B00]" />,
  },
  {
    title: "Development",
    description:
      "Building robust, scalable solutions using cutting-edge technologies and best practices.",
    image: development,
    icon: <Code className="w-6 h-6 text-[#FF6B00]" />,
  },
  {
    title: "Deployment",
    description:
      "Seamless deployment and launch with thorough testing and optimization for performance.",
    image: deployment,
    icon: <Rocket className="w-6 h-6 text-[#FF6B00]" />,
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

        <div className="w-full max-w-4xl mx-auto">
          <BentoGrid className="gap-6">
            {processSteps.map((step, index) => (
              <BentoGridItem
                key={index}
                title={
                  <div className="flex items-center gap-2">
                    {step.icon}
                    <span className="text-lg font-semibold">{step.title}</span>
                  </div>
                }
                description={step.description}
                header={
                  <div
                    className={`w-full rounded-xl overflow-hidden ${
                      index === 3 ? "h-[250px]" : "h-[180px]"
                    }`}
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className={`object-contain ${index === 3 ? "p-4" : ""}`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                }
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
