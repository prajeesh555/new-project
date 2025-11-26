import React from "react";
import { staff } from "../data/mockData"; 
import { Award, Clock, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality First",
      description: "We use only the finest ingredients",
    },
    {
      icon: Clock,
      title: "Timeless Tradition",
      description: "Recipes passed down generations",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every dish crafted with passion",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-[#1a1a1a] texture-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-4">
            Our Story
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A journey of culinary passion and artisan craftsmanship
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-6">
              Crafting Excellence Since 2010
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              What began as a small artisan bakery has grown into a beloved
              culinary destination. Our passion for creating exceptional food
              experiences drives everything we do.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From our freshly baked breads to our gourmet creations, each
              item is crafted with meticulous attention to detail and the
              finest ingredients available.
            </p>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1667388969250-1c7220bf3f37"
              alt="Restaurant Interior"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-4">
              Our Values
            </h2>
            <div className="w-20 h-1 bg-[#D4724B] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[#D4724B]/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform transform hover:scale-110">
                  <value.icon className="w-10 h-10 text-[#D4724B]" />
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-4">
              Meet Our Team
            </h2>
            <div className="w-20 h-1 bg-[#D4724B] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {staff.map((member) => (
              <div key={member.id} className="group">
                <div className="relative h-80 rounded-lg overflow-hidden mb-6 shadow-xl">
                  <img
                    src={member.image || "https://via.placeholder.com/300x200?text=No+Image"}
                    alt={member.name || "Team member"}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-[#D4724B] font-medium mb-1">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.experience} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
