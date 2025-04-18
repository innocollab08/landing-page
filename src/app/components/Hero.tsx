// Hero.tsx
"use client";

import Image from "next/image";
import { Clock, ArrowDown } from "lucide-react";
import react from "../../../public/logos/react.png";
import nextjs from "../../../public/logos/next-js.png";
import node from "../../../public/logos/node.png";
import postgres from "../../../public/logos/postgres.png";
import flutter from "../../../public/logos/flutterflow.png";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-white via-blue-50/50 to-orange-50/30 relative overflow-hidden pt-24 pb-8">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-100 rounded-full -translate-x-1/2 blur-3xl opacity-30 animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl opacity-30 animate-pulse" style={{ animationDuration: '12s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-green-100 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-30 animate-pulse" style={{ animationDuration: '10s' }}></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="w-[90%] max-w-8xl mx-auto relative z-10 mt-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-6">
            <div>
              {/* <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
                Innovative Digital Solutions
              </div> */}
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                <span className="text-orange-500">Innovative</span> Solutions for
                <br />
                <span className="text-blue-500">Digital</span> Success
              </h1>
              <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed max-w-xl">
                At InnoCollab, we transform ideas into powerful digital
                experiences through expert web development, mobile apps, and AI
                solutions that deliver real business value.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("services")}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Explore Services
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105"
              >
                View Our Work
              </button>
            </div>

            <div className="pt-4 md:pt-6">
              <p className="text-gray-500 mb-4 font-medium">
                Technologies we work with:
              </p>
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white p-2 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-110">
                  <Image src={nextjs} alt="Next.js" className="object-contain" />
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white p-2 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-110">
                  <Image src={react} alt="React" className="object-contain" />
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white p-2 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-110">
                  <Image src={node} alt="Node.js" className="object-contain" />
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white p-2 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-110">
                  <Image src={postgres} alt="PostgreSQL" className="object-contain" />
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white p-2 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-110">
                  <Image src={flutter} alt="Flutter" className="object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Card */}
          <div className="md:w-[45%] flex flex-col items-center mt-8 md:mt-0">
            <div className="relative flex flex-col h-[320px] md:h-[380px] w-full transform hover:-rotate-2 transition-all duration-300">
              {/* Background Shapes with Animation */}
              <div className="bg-orange-500 opacity-80 w-16 h-16 md:w-24 md:h-24 rounded-2xl absolute -left-6 top-8 shadow-lg z-0 animate-pulse" style={{ animationDuration: '3s' }} />
              <div className="bg-blue-500 opacity-80 w-24 h-24 md:w-32 md:h-32 rounded-full absolute right-0 -bottom-6 shadow-lg z-0 animate-pulse" style={{ animationDuration: '4s' }} />
              <div className="bg-green-500 opacity-80 w-12 h-12 md:w-16 md:h-16 rotate-45 rounded-2xl absolute right-8 top-1/3 shadow-lg z-0 animate-pulse" style={{ animationDuration: '5s' }} />

              {/* Card with Glass Effect */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col h-full border border-white/20">
                {/* Top Gradient Header */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 md:p-10 flex justify-center items-center">
                  <Clock className="w-24 h-24 md:w-32 md:h-32 text-white drop-shadow-lg" />
                </div>

                {/* Content */}
                <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 flex flex-col gap-2 md:gap-3 flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                    Digital Innovation Center
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    We bring cutting-edge technologies together to craft
                    solutions that propel businesses forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-5 md:mt-5 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 border border-white/20 transform hover:scale-105">
            <h4 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">50+</h4>
            <p className="text-gray-600 font-medium text-sm md:text-base">Projects Completed</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 border border-white/20 transform hover:scale-105">
            <h4 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">15+</h4>
            <p className="text-gray-600 font-medium text-sm md:text-base">Expert Developers</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 border border-white/20 transform hover:scale-105">
            <h4 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">3+</h4>
            <p className="text-gray-600 font-medium text-sm md:text-base">Years Experience</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 border border-white/20 transform hover:scale-105">
            <h4 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">99%</h4>
            <p className="text-gray-600 font-medium text-sm md:text-base">Client Satisfaction</p>
          </div>
        </div>

        {/* Improved Scroll Indicator */}
        <div className="mt-8 md:mt-10 text-center pb-2">
          <p className="text-gray-500 mb-2 font-medium">
            Scroll to explore
          </p>
          <div className="w-10 h-16 md:w-12 md:h-20 border-2 border-gray-300 rounded-full mx-auto flex items-start justify-center p-2 relative">
            <ArrowDown className="text-orange-500 w-4 h-4 md:w-5 md:h-5 animate-bounce" style={{ animationDuration: '1.5s' }} />
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 h-6 w-px bg-gradient-to-b from-gray-300 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;