import React, { useState, useEffect } from "react";
import { ArrowRight, Target } from "lucide-react";

const BANNER_DATA = [
  {
    id: 1,
    page: "home",
    title: "National Service Scheme — GEC Patan",
    subtitle: "Not Me, But You",
    description:
      "NSS GEC Patan is dedicated to developing student leadership, social responsibility, community welfare and national service through various activities conducted throughout the academic year.",
    button_text: "Explore Activities",
    image_url:
      "https://images.unsplash.com/photo-1551892589-865f69869476?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt_text: "NSS GEC Patan Students Group Photo",
  },
  {
    id: 2,
    page: "home",
    title: "Community Service & Social Activities",
    subtitle: "Serving Society with Purpose",
    description:
      "Various NSS activities including cleanliness drives, tree plantation, blood donation camps, awareness programs.",
    button_text: "View Activity Reports",
    image_url:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&q=80",
    alt_text: "Students participating in NSS activity",
  },
  {
    id: 3,
    page: "home",
    title: "Building Future Leaders",
    subtitle: "Official Records & Documentation",
    description:
      "Access verified NSS annual reports, event documentation and submitted records.",
    button_text: "Download Reports",
    image_url:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200&q=80",
    alt_text: "NSS report presentation",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Filter banners for "home" page only
  const homeBanners = BANNER_DATA.filter((banner) => banner.page === "home");

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % homeBanners.length);
        setIsTransitioning(false);
      }, 800);
    }, 3000);

    return () => clearInterval(interval);
  }, [homeBanners.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Background Image Slider Layer */}
      {/* Background Image Slider Layer */}
<div className="absolute inset-0 z-0 pointer-events-none select-none">
  {homeBanners.map((banner, index) => (
    <div
      key={banner.id}
      className="absolute inset-0 transition-opacity duration-[900ms] ease-out will-change-transform"
      style={{

        /* Smooth opacity fade */
        opacity: currentIndex === index ? 0.28 : 0,

        /* Image */
        backgroundImage: `url(${banner.image_url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        /* Soft blur + atmospheric look */
        filter: "blur(2px) brightness(0.92)",

        /* Prevent jitter on mobile */
        transform: "scale(1.04)"
      }}
    />
  ))}
</div>


      {/* Gradient Overlay - preserves original hero-gradient */}
      <div
        className="absolute inset-0 z-[1]"
      />

      {/* Decorative Elements - Original */}
      <div className="absolute inset-0 overflow-hidden z-[2]">
        <div
          className="absolute top-1/4 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"
          style={{
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl"
          style={{
            animation: "float 6s ease-in-out infinite",
            animationDelay: "2s",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
      </div>

      {/* Content - Original Structure Preserved */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 mb-8"
            style={{
              animation: "fadeUp 0.8s ease-out forwards",
              opacity: 0,
            }}
          >
            <Target className="w-4 h-4" />
            <span className="text-sm font-medium">National Service Scheme</span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            style={{
              fontFamily: "Georgia, serif",
              animation: "fadeUp 0.8s ease-out 0.1s forwards",
              opacity: 0,
            }}
          >
            NSS Unit
            <span className="block text-orange-400 mt-2">GEC Patan</span>
          </h1>

          {/* Tagline */}
          <p
            className="text-xl md:text-2xl text-white/80 italic mb-4"
            style={{
              fontFamily: "Georgia, serif",
              animation: "fadeUp 0.8s ease-out 0.2s forwards",
              opacity: 0,
            }}
          >
            "Not Me But You"
          </p>

          {/* Description */}
          <p
            className="text-lg text-white/70 max-w-2xl mx-auto mb-10"
            style={{
              animation: "fadeUp 0.8s ease-out 0.3s forwards",
              opacity: 0,
            }}
          >
            Empowering students to serve the nation through community
            development, social service, and nation building activities.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{
              animation: "fadeUp 0.8s ease-out 0.4s forwards",
              opacity: 0,
            }}
          >
            <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 w-full sm:w-auto">
              Explore Activities
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 w-full sm:w-auto">
              Meet Our Volunteers
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        style={{
          animation: "bounce 2s ease-in-out infinite",
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-2.5 bg-orange-400 rounded-full" />
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          50% {
            transform: translateY(-10px) translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
