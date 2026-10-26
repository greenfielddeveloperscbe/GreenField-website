
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import cubehero1 from "../../assests/team/herosection/cubehero1.webp";
import cubehero2 from "../../assests/team/herosection/cubehero2.webp";
import cubehero3 from "../../assests/team/herosection/cubehero3.webp";
import cubehero4 from "../../assests/team/herosection/cubehero4.webp";

const slides = [
  {
    id: 1,
    image: cubehero1,
    eyebrow: "WELCOME TO GREENFIELD HOUSING INDIA",
    title: "Find Your Perfect",
    highlight: "Place to Call Home",
    description:
      "Discover thoughtfully planned residential plots and premium properties designed to help you build your future with confidence.",
  },
  {
    id: 2,
    image: cubehero2,
    eyebrow: "A SMARTER WAY TO INVEST",
    title: "Invest Today.",
    highlight: "Build Tomorrow.",
    description:
      "Explore promising property investment opportunities with carefully planned layouts and a vision for lasting value.",
  },
  {
    id: 3,
    image: cubehero3,
    eyebrow: "DESIGNED AROUND YOUR FUTURE",
    title: "More Than Land,",
    highlight: "A Place to Belong",
    description:
      "Find the right space for your dream home in well-planned communities created with your family's future in mind.",
  },
  {
    id: 4,
    image: cubehero4,
    eyebrow: "YOUR FUTURE STARTS HERE",
    title: "Make Your Dream",
    highlight: "Address a Reality",
    description:
      "Take the next step towards owning your ideal property with Greenfield Housing India.",
  },
];

const stats = [
  { value: "6+", label: "Projects" },
  { value: "805+", label: "Plots" },
  { value: "100%", label: "Approved Layouts" },
  { value: "24/7", label: "Secure Communities" },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeSlide = slides[currentSlide];

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap');

        @keyframes heroReveal {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroImageZoom {
          from {
            transform: scale(1.06);
          }
          to {
            transform: scale(1);
          }
        }
      `}</style>

      <section
        className="relative isolate flex min-h-[680px] w-full items-center overflow-hidden bg-[#102b20] font-['Montserrat',sans-serif] sm:min-h-[740px] lg:min-h-[800px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Background images */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          >
            <img
              src={slide.image}
              alt=""
              className={`h-full w-full object-cover ${
                index === currentSlide ? "animate-[heroImageZoom_6.5s_ease-out]" : ""
              }`}
            />
          </div>
        ))}

        {/* Background overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081a13]/90 via-[#0b2118]/75 to-[#0b2118]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07160f]/75 via-transparent to-black/20" />

        {/* Decorative elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-28 top-1/4 h-64 w-64 rounded-full border border-[#e4c98d]/20 sm:h-96 sm:w-96" />
          <div className="absolute -left-16 top-[30%] h-48 w-48 rounded-full border border-[#e4c98d]/10 sm:h-72 sm:w-72" />
          <div className="absolute right-[8%] top-[18%] hidden h-32 w-32 rotate-45 border border-[#e4c98d]/20 lg:block" />
          <div className="absolute bottom-24 right-[12%] hidden h-16 w-16 rotate-45 border border-[#e4c98d]/20 lg:block" />
        </div>

        {/* Main content */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-24 text-center sm:px-8 sm:py-28 lg:px-12 mt-20">
          <div className="mx-auto w-full max-w-6xl">
            {/* Brand label */}
            <div
              className="mb-7 flex animate-[heroReveal_.7s_ease-out_both] items-center justify-center gap-3"
              key={`brand-${activeSlide.id}`}
            >
              <span className="h-px w-8 bg-[#e4c98d] sm:w-12" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#e4c98d] sm:text-xs sm:tracking-[0.3em]">
                Greenfield Housing India
              </span>
              <span className="h-px w-8 bg-[#e4c98d] sm:w-12" />
            </div>

            {/* Eyebrow */}
            <p
              key={`eyebrow-${activeSlide.id}`}
              className="mb-4 animate-[heroReveal_.7s_ease-out_both] text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75 sm:mb-5 sm:text-xs sm:tracking-[0.25em]"
            >
              {activeSlide.eyebrow}
            </p>

            {/* Heading - increased width */}
            <h1
              key={`heading-${activeSlide.id}`}
              className="mx-auto w-full max-w-5xl animate-[heroReveal_.7s_ease-out_both] font-['Poppins',sans-serif] text-[clamp(2.15rem,7vw,6rem)] font-semibold leading-[1.12] tracking-[-0.045em] text-white sm:leading-[1.06] lg:leading-[1.02]"
            >
              {activeSlide.title}
              <span className="mt-1 block font-medium text-[#e4c98d] sm:mt-2">
                {activeSlide.highlight}
              </span>
            </h1>

            {/* Description */}
            <p
              key={`description-${activeSlide.id}`}
              className="mx-auto mt-6 max-w-2xl animate-[heroReveal_.7s_ease-out_both] text-sm leading-7 text-white/80 sm:mt-7 sm:text-base sm:leading-8 lg:text-lg"
            >
              {activeSlide.description}
            </p>

            {/* CTA buttons */}
            <div
              key={`buttons-${activeSlide.id}`}
              className="mt-8 flex animate-[heroReveal_.7s_ease-out_both] flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
            >
              <Link
                to="/projects"
                className="inline-flex min-h-12 w-full max-w-xs items-center justify-center gap-3 rounded-sm bg-[#e4c98d] px-7 py-3.5 text-sm font-bold text-[#173324] transition duration-300 hover:bg-white hover:shadow-lg sm:w-auto sm:min-w-[190px]"
              >
                Explore Projects
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex min-h-12 w-full max-w-xs items-center justify-center gap-3 rounded-sm border border-white/50 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:border-[#e4c98d] hover:bg-white/10 sm:w-auto sm:min-w-[190px]"
              >
                Contact Us
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* Statistics */}
            <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-y-7 border-t border-white/20 pt-7 sm:mt-16 sm:grid-cols-4 sm:gap-y-0 sm:pt-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`px-2 text-center sm:px-4 ${
                    index !== 0 ? "sm:border-l sm:border-white/20" : ""
                  }`}
                >
                  <p className="font-['Poppins',sans-serif] text-2xl font-semibold tracking-tight text-[#e4c98d] sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-white/70 sm:text-xs sm:tracking-[0.15em]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Previous / next controls */}
        <div className="absolute bottom-7 right-5 z-20 flex items-center gap-3 sm:bottom-9 sm:right-10">
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Previous slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-black/15 text-xl text-white backdrop-blur-sm transition hover:border-[#e4c98d] hover:bg-[#e4c98d] hover:text-[#173324]"
          >
            ‹
          </button>

          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-[#e4c98d]"
                    : "w-3 bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goToNext}
            aria-label="Next slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-black/15 text-xl text-white backdrop-blur-sm transition hover:border-[#e4c98d] hover:bg-[#e4c98d] hover:text-[#173324]"
          >
            ›
          </button>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 h-1 w-full bg-white/10">
          <div
            key={currentSlide}
            className="h-full bg-[#e4c98d] transition-none"
            style={{
              width: "100%",
              transformOrigin: "left",
              animation: isPaused ? "none" : "heroProgress 6.5s linear",
            }}
          />
        </div>

        <style>{`
          @keyframes heroProgress {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
        `}</style>
      </section>
    </>
  );
};

export default Hero;
