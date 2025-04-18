import React from "react";
import { Users, Lightbulb, Shield, Clock } from "lucide-react";

const About = () => {
  return (
    <section className="bg-[#F9FAFB] py-20 " id="about">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            About <span className="text-[#2563EB]">InnoCollab</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are a dynamic team of tech enthusiasts dedicated to transforming
            your digital presence with cutting-edge technology and creative
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <div className="space-y-8">
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="flex justify-center">
                <Users className="w-20 h-20 text-gray-400" />
              </div>
              <h3 className="text-center mt-4 text-xl font-semibold">
                Our Talented Team
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-[#FF6B00] text-4xl font-bold">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-[#2563EB] text-4xl font-bold">10+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Transforming Ideas into Digital Reality
              </h3>
              <p className="text-gray-600 mb-4">
                Founded in 2020, InnoCollab has been at the forefront of digital
                innovation, providing comprehensive development solutions for
                businesses of all sizes. Our mission is to help organizations
                leverage technology to enhance their operations, reach wider
                audiences, and drive sustainable growth.
              </p>
              <p className="text-gray-600">
                What sets us apart is our commitment to quality, attention to
                detail, and our ability to understand and translate client
                requirements into functional, beautiful digital solutions. We
                believe in building long-term relationships with our clients,
                becoming their trusted technology partner.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Lightbulb className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <h4 className="font-semibold">Innovative Solutions</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Staying ahead of emerging technologies to deliver future-proof
                  solutions
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Users className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <h4 className="font-semibold">Expert Team</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Skilled developers, designers, and strategists with proven
                  expertise
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Shield className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <h4 className="font-semibold">Quality Assurance</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Rigorous testing and quality control in all our deliverables
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Clock className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <h4 className="font-semibold">Timely Delivery</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Committed to meeting deadlines without compromising quality
                </p>
              </div>
            </div>
{/* 
            <button className="bg-[#2563EB] text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
              Learn More About Us
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
