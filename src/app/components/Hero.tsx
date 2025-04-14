"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-[#F9FAFB] py-16 md:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-36 h-36 bg-blue-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-80"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-green-100 rounded-full translate-x-1/4 translate-y-1/4 opacity-60"></div>
      <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-orange-100 rounded-full opacity-70 -z-10x "></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Content */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-orange-500">Innovative</span> Solutions for
              <br />
              <span className="text-blue-500">Digital</span> Success
            </h1>
            <p className="text-gray-600 mb-8">
              At InnoCollab, we transform ideas into powerful digital
              experiences through expert web development, mobile apps, and AI
              solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Explore Services
              </Link>
              <Link
                href="/portfolio"
                className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-md font-medium transition-colors"
              >
                View Our Work
              </Link>
            </div>

            <div className="mt-12">
              <p className="text-sm text-gray-500 mb-4">
                Technologies we work with:
              </p>
              <div className="flex items-center gap-6">
                {/* Replace with actual tech logos */}
                <div className="w-8 h-8 bg-blue-100 flex items-center justify-center rounded">
                  <span className="text-blue-500 text-xs">AWS</span>
                </div>
                <div className="w-8 h-8 bg-blue-100 flex items-center justify-center rounded">
                  <span className="text-blue-500 text-xs">React</span>
                </div>
                <div className="w-8 h-8 bg-blue-100 flex items-center justify-center rounded">
                  <span className="text-blue-500 text-xs">Node</span>
                </div>
                <div className="w-8 h-8 bg-blue-100 flex items-center justify-center rounded">
                  <span className="text-blue-500 text-xs">Vue</span>
                </div>
                <div className="w-8 h-8 bg-blue-100 flex items-center justify-center rounded">
                  <span className="text-blue-500 text-xs">Next</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Card */}
          <div className="md:w-1/2 flex flex-col items-center">
            <div className="relative flex flex-col h-[356px] max-w-[512px]">
              {/* Background Shadows */}
              <div className="bg-orange-500 opacity-80 w-24 h-24 rounded-lg absolute -left-10 top-10 shadow-md z-0" />
              <div className="bg-blue-500 opacity-80 w-32 h-32 rounded-full absolute right-0 -bottom-10 shadow-md z-0" />
              <div className="bg-green-500 opacity-80 w-16 h-16 rotate-45 rounded-lg absolute right-2 top-1/2 -translate-y-[13.25px] shadow-md z-0" />

              {/* Card */}
              <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden z-10 flex flex-col">
                {/* Top Gradient Header */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 flex justify-center items-center shadow-md">
                  <Clock className="w-40 h-40 text-white" />
                </div>

                {/* Content */}
                <div className="bg-white p-6 flex flex-col gap-2">
                  <h3 className="text-gray-800 text-xl font-bold">
                    Digital Innovation Center
                  </h3>
                  <p className="text-gray-600 text-base leading-6">
                    We bring cutting-edge technologies together to craft <br />
                    solutions that propel businesses forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats - Now positioned in center */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto ">
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <h4 className="text-2xl font-bold text-orange-500">50+</h4>
            <p className="text-gray-600 text-sm">Projects Completed</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <h4 className="text-2xl font-bold text-orange-500">15+</h4>
            <p className="text-gray-600 text-sm">Expert Developers</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <h4 className="text-2xl font-bold text-orange-500">3+</h4>
            <p className="text-gray-600 text-sm">Years Experience</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <h4 className="text-2xl font-bold text-orange-500">99%</h4>
            <p className="text-gray-600 text-sm">Client Satisfaction</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-400 mb-2">Scroll to explore</p>
          <div className="w-8 h-12 border border-gray-300 rounded-full mx-auto flex items-center justify-center">
            <div className="w-1.5 h-3 bg-orange-500 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
