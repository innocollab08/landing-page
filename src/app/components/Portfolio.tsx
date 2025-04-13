"use client";
import React, { useState } from "react";
import {
  Package,
  ShoppingBag,
  Code,
  Lightbulb,
  Smartphone,
  BarChart3,
  ArrowRight,
} from "lucide-react";

interface ProjectProps {
  title: string;
  category: string;
  description: string;
  tags: string[];
  color: string;
  icon: React.ReactNode;
}

interface FilterOption {
  name: string;
  id: string;
}

const Portfolio: React.FC = () => {
  const filterOptions: FilterOption[] = [
    { name: "All Projects", id: "all" },
    { name: "Web Development", id: "web" },
    { name: "Mobile Apps", id: "mobile" },
    { name: "Browser Extensions", id: "extension" },
    { name: "NPM Packages", id: "npm" },
  ];

  const [activeFilter, setActiveFilter] = useState<string>("all");

  const projects: ProjectProps[] = [
    {
      title: "NextAuth Login Package",
      category: "NPM",
      description:
        "A comprehensive authentication package for NextJS that provides ready-to-use login, signup, and middleware components.",
      tags: ["NextJS", "Auth", "NPM", "TypeScript"],
      color: "bg-blue-500",
      icon: <Package className="w-16 h-16 text-white" />,
    },
    {
      title: "Vembar Karupatti",
      category: "E-commerce",
      description:
        "A complete e-commerce solution for Vembar Karupatti, featuring product listings, secure checkout, and inventory management.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      color: "bg-green-500",
      icon: <ShoppingBag className="w-16 h-16 text-white" />,
    },
    {
      title: "SynonymFinder",
      category: "Extension",
      description:
        "A Chrome extension that helps users find synonyms for selected words, enhancing their writing experience.",
      tags: ["JavaScript", "Chrome API", "Dictionary API", "HTML/CSS"],
      color: "bg-orange-500",
      icon: <Code className="w-16 h-16 text-white" />,
    },
    {
      title: "SmartInventory AI",
      category: "AI/ML",
      description:
        "An intelligent inventory management system with predictive analytics to optimize stock levels and forecast sales.",
      tags: ["Python", "TensorFlow", "Django", "React"],
      color: "bg-purple-500",
      icon: <Lightbulb className="w-16 h-16 text-white" />,
    },
    {
      title: "TaskFlow",
      category: "Mobile App",
      description:
        "A feature-rich task management application that helps users organize, prioritize, and track their daily tasks.",
      tags: ["FlutterFlow", "Firebase", "iOS", "Android"],
      color: "bg-blue-500",
      icon: <Smartphone className="w-16 h-16 text-white" />,
    },
    {
      title: "InsightDash",
      category: "Dashboard",
      description:
        "A comprehensive analytics dashboard providing real-time business insights with customizable widgets and reports.",
      tags: ["Vue.js", "D3.js", "GraphQL", "Node.js"],
      color: "bg-red-500",
      icon: <BarChart3 className="w-16 h-16 text-white" />,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => {
          if (activeFilter === "web") return project.category === "E-commerce";
          if (activeFilter === "mobile")
            return project.category === "Mobile App";
          if (activeFilter === "extension")
            return project.category === "Extension";
          if (activeFilter === "npm") return project.category === "NPM";
          return false;
        });

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case "NPM":
        return "bg-blue-100 text-blue-800";
      case "E-commerce":
        return "bg-green-100 text-green-800";
      case "Extension":
        return "bg-orange-100 text-orange-800";
      case "AI/ML":
        return "bg-purple-100 text-purple-800";
      case "Mobile App":
        return "bg-blue-100 text-blue-800";
      case "Dashboard":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">
            Our <span className="text-green-500">Portfolio</span>
          </h2>
          <div className="flex justify-center mb-4">
            <div className="h-1 w-16 bg-orange-400 rounded"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our recent projects that showcase our
            expertise and innovative approach to digital solutions.
          </p>
        </div>

        {/* Filter Options */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setActiveFilter(option.id)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeFilter === option.id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {option.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100"
            >
              <div
                className={`${project.color} p-8 flex justify-center items-center`}
              >
                {project.icon}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <span
                    className={`text-xs px-2 py-1 rounded ${getCategoryBadgeClass(
                      project.category
                    )}`}
                  >
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-green-500 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-green-600 transition-colors">
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
