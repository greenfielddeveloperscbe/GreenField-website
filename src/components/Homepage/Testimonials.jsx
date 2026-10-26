import React, { useState } from "react";

/* =========================================================
   GREENFIELD HOUSING INDIA — CUSTOMER TESTIMONIALS
   Poppins + Montserrat | Fully Responsive
========================================================= */

const testimonials = [
  {
    name: "Rajesh",
    location: "Coimbatore",
    project: "Maple",
    content:
      "I am fully satisfied with the apartment purchased from Greenfield. I really appreciate their professionalism and customer-friendly approach throughout the experience.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Sedhupathi",
    location: "Coimbatore",
    project: "Coral",
    content:
      "The management was very responsive and flexible. We were pleasantly surprised by how quickly they responded and how well they understood the changes we wanted for our dream home.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Vishal",
    location: "Coimbatore",
    project: "Pearl Park Avenue",
    content:
      "I was particularly impressed by the transparent way the management handled everything. The project was completed according to the specifications with excellent quality.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Gokul",
    location: "Kalapatti",
    project: "Maple",
    content:
      "The quality of construction, speed of delivery and efficient execution stood out. Communication was clear throughout the project, which gave us confidence at every stage.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "A. Karthik",
    location: "Sulur",
    project: "Crystal Gateway",
    content:
      "The layout approval process was entirely transparent, and seeing the 3-acre turf ground confirmed that the amenities are truly world-class.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "M. Kumar",
    location: "Karamadai Road",
    project: "Silver City",
    content:
      "Finding a fully DTCP approved plot with individual water connections and reliable tar roads made our investment decision easy and secure.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
  },
];

const Arrow = ({ direction = "right" }) => (
  <span aria-hidden="true" className="text-lg leading-none sm:text-xl">
    {direction === "right" ? "→" : "←"}
  </span>
);

function Stars({ rating = 5 }) {
  return (
    <div
      className="flex items-center gap-0.5 text-[#c69b50] sm:gap-1"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: rating }, (_, index) => (
        <span key={index} aria-hidden="true" className="text-xs sm:text-sm">
          ★
        </span>
      ))}

      <span className="ml-1 text-[9px] font-semibold tracking-[0.08em] text-[#777c70] sm:text-[10px] sm:tracking-[0.12em]">
        {rating}.0
      </span>
    </div>
  );
}

function CustomerAvatar({ testimonial, size = "normal" }) {
  return (
    <img
      src={testimonial.image}
      alt={`Portrait of ${testimonial.name}`}
      loading="lazy"
      className={`shrink-0 rounded-full object-cover ${
        size === "large"
          ? "h-11 w-11 sm:h-14 sm:w-14"
          : "h-9 w-9 sm:h-11 sm:w-11"
      }`}
    />
  );
}

function FeaturedTestimonial({
  testimonial,
  index,
  onPrevious,
  onNext,
}) {
  return (
    <div className="grid overflow-hidden rounded-sm bg-[#173c2b] text-white lg:grid-cols-[1.05fr_0.95fr]">
      {/* LEFT: CUSTOMER STORY */}
      <div className="relative flex min-h-[320px] flex-col justify-between p-5 sm:min-h-[360px] sm:p-8 md:p-10 lg:min-h-[390px] lg:p-12 xl:p-14">
        <div>
          <div className="mb-5 flex items-center gap-2.5 sm:mb-8 sm:gap-3">
            <span className="h-px w-6 bg-[#c9a566] sm:w-8" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#d8c49b] sm:text-[10px] sm:tracking-[0.22em]">
              Customer perspective
            </span>
          </div>

          <div
            aria-hidden="true"
            className="mb-2 font-serif text-5xl leading-none text-[#c9a566] sm:mb-3 sm:text-6xl"
          >
            “
          </div>

          <blockquote className="max-w-xl font-heading text-xl font-medium leading-relaxed tracking-[-0.025em] sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[34px]">
            {testimonial.content}
          </blockquote>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-5 sm:mt-10 sm:gap-5 sm:pt-6">
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <CustomerAvatar testimonial={testimonial} size="large" />

            <div className="min-w-0">
              <p className="truncate font-body text-xs font-semibold tracking-wide sm:text-sm">
                {testimonial.name}
              </p>

              <p className="mt-1 font-body text-[10px] text-white/60 sm:text-xs">
                {testimonial.location}
              </p>
            </div>
          </div>

          <div className="text-right">
            <p className="font-body text-[9px] uppercase tracking-[0.14em] text-white/50 sm:text-[10px] sm:tracking-[0.18em]">
              Project
            </p>

            <p className="mt-1 max-w-[145px] font-body text-xs font-medium text-[#e0c58f] sm:max-w-none sm:text-sm">
              {testimonial.project}
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT: FEATURED DETAILS */}
      <div className="relative flex min-h-[270px] flex-col justify-between bg-[#f5f2e9] p-5 text-[#203c2d] sm:min-h-[300px] sm:p-8 md:p-10 lg:p-10 xl:p-12">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-body text-[9px] font-semibold uppercase tracking-[0.15em] text-[#778171] sm:text-[10px] sm:tracking-[0.2em]">
              Shared experience
            </p>

            <div className="mt-3 sm:mt-4">
              <Stars rating={testimonial.rating} />
            </div>
          </div>

          <span className="font-heading text-4xl text-[#c9a566] sm:text-5xl">
            ”
          </span>
        </div>

        <div className="my-6 sm:my-8">
          <p className="font-heading text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl md:text-4xl">
            Built on trust.
            <br />
            Designed for life.
          </p>

          <p className="mt-4 max-w-sm font-body text-xs leading-6 text-[#6d756b] sm:mt-5 sm:text-sm sm:leading-7">
            Every home and layout begins with a decision that matters. We aim
            to make that journey clear, considered and customer-focused.
          </p>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-[#dcded3] pt-4 sm:pt-5">
          <p className="font-body text-[10px] text-[#6d756b] sm:text-xs">
            Story {String(index + 1).padStart(2, "0")} /{" "}
            {String(testimonials.length).padStart(2, "0")}
          </p>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={onPrevious}
              aria-label="Previous testimonial"
              className="flex h-9 w-9 items-center justify-center border border-[#cbd1c4] transition hover:border-[#173c2b] hover:bg-[#173c2b] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173c2b] sm:h-11 sm:w-11"
            >
              <Arrow direction="left" />
            </button>

            <button
              type="button"
              onClick={onNext}
              aria-label="Next testimonial"
              className="flex h-9 w-9 items-center justify-center bg-[#173c2b] text-white transition hover:bg-[#2e6044] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173c2b] sm:h-11 sm:w-11"
            >
              <Arrow />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial, number }) {
  return (
    <article className="group flex h-full flex-col border border-[#e4e5dc] bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-[#c5b184] hover:shadow-[0_16px_40px_rgba(23,60,43,0.07)] sm:p-6 lg:p-7">
      <div className="mb-4 flex items-start justify-between gap-3 sm:mb-6">
        <span className="font-heading text-3xl leading-none text-[#d4c39d] sm:text-4xl">
          “
        </span>

        <span className="max-w-[65%] border border-[#e3e4d9] px-2 py-1 text-right font-body text-[8px] font-semibold uppercase tracking-[0.08em] text-[#536c55] sm:px-3 sm:py-1.5 sm:text-[9px] sm:tracking-[0.14em]">
          {testimonial.project}
        </span>
      </div>

      <Stars rating={testimonial.rating} />

      <p className="mt-4 flex-1 font-heading text-sm leading-7 text-[#344537] sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">
        {testimonial.content}
      </p>

      <div className="mt-5 flex items-center gap-2.5 border-t border-[#ecece5] pt-4 sm:mt-7 sm:gap-3 sm:pt-5">
        <CustomerAvatar testimonial={testimonial} />

        <div className="min-w-0 flex-1">
          <h3 className="truncate font-body text-xs font-semibold text-[#173c2b] sm:text-sm">
            {testimonial.name}
          </h3>

          <p className="mt-1 font-body text-[10px] text-[#818579] sm:text-xs">
            {testimonial.location}
          </p>
        </div>

        <span className="font-body text-[10px] text-[#b49a65] sm:text-xs">
          {String(number).padStart(2, "0")}
        </span>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonials[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#faf9f5] py-10 sm:py-16 md:py-20 lg:py-24 xl:py-28"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap');

        #testimonials {
          font-family: 'Montserrat', sans-serif;
        }

        #testimonials .font-heading {
          font-family: 'Poppins', sans-serif;
        }

        #testimonials .font-body {
          font-family: 'Montserrat', sans-serif;
        }

        #testimonials button,
        #testimonials a {
          -webkit-tap-highlight-color: transparent;
        }

        @media (prefers-reduced-motion: reduce) {
          #testimonials *,
          #testimonials *::before,
          #testimonials *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -right-24 top-0 h-48 w-48 rounded-full bg-[#e8e6d8]/40 blur-3xl sm:h-72 sm:w-72" />

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14">
        {/* SECTION HEADER */}
        <div className="mb-7 flex flex-col gap-5 sm:mb-10 sm:gap-6 md:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-3 flex items-center gap-2.5 sm:mb-5 sm:gap-3">
              <span className="h-px w-7 bg-[#b99a5b] sm:w-9" />

              <span className="font-body text-[9px] font-semibold uppercase tracking-[0.14em] text-[#6c775f] sm:text-[10px] sm:tracking-[0.24em]">
                Words from our customers
              </span>
            </div>

            <h2 className="font-heading text-[29px] font-semibold leading-[1.2] tracking-[-0.04em] text-[#173c2b] min-[390px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              More than a property.
              <span className="mt-1.5 block text-[#8c784d] sm:mt-2">
                A place to belong.
              </span>
            </h2>

            <p className="mt-3 max-w-xl font-body text-xs leading-6 text-[#74786d] sm:mt-5 sm:text-sm sm:leading-7 md:text-base md:leading-8">
              Explore customer experiences with Greenfield Housing India,
              from communication and planning to the details that make a
              property feel right.
            </p>
          </div>

          <div className="flex items-center gap-3 border-l-2 border-[#c4a568] pl-3 sm:gap-4 sm:pl-4 lg:mb-1">
            <span className="font-heading text-3xl font-medium text-[#173c2b] sm:text-4xl">
              06
            </span>

            <div>
              <p className="font-body text-[9px] font-semibold uppercase tracking-[0.12em] text-[#173c2b] sm:text-[10px] sm:tracking-[0.16em]">
                Customer stories
              </p>

              <p className="mt-1 font-body text-[10px] text-[#85877b] sm:text-xs">
                Across our communities
              </p>
            </div>
          </div>
        </div>

        {/* FEATURED TESTIMONIAL */}
        <FeaturedTestimonial
          testimonial={activeTestimonial}
          index={activeIndex}
          onPrevious={showPrevious}
          onNext={showNext}
        />

        {/* CAROUSEL PAGINATION */}
        <div className="mb-10 mt-4 flex flex-wrap items-center justify-between gap-3 sm:mb-16 sm:mt-5 md:mb-20">
          <div className="flex items-center gap-1.5 sm:gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show testimonial from ${testimonial.name}`}
                aria-pressed={activeIndex === index}
                className={`h-1.5 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#173c2b] ${
                  activeIndex === index
                    ? "w-8 bg-[#173c2b] sm:w-10"
                    : "w-3 bg-[#d4d6ca] hover:bg-[#a9b09e] sm:w-4"
                }`}
              />
            ))}
          </div>

          <p className="font-body text-[8px] uppercase tracking-[0.1em] text-[#85877b] sm:text-[10px] sm:tracking-[0.16em]">
            Selected customer story
          </p>
        </div>

        {/* ALL TESTIMONIALS HEADER */}
        <div className="mb-5 flex flex-col justify-between gap-3 sm:mb-8 sm:gap-4 md:mb-10 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 font-body text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8c784d] sm:mb-3 sm:text-[10px] sm:tracking-[0.22em]">
              Customer experiences
            </p>

            <h3 className="font-heading text-2xl font-semibold tracking-[-0.03em] text-[#173c2b] sm:text-3xl md:text-4xl">
              Every story matters.
            </h3>
          </div>

          <p className="max-w-sm font-body text-xs leading-6 text-[#7c8075] sm:text-sm">
            A closer look at feedback shared across different projects and
            locations.
          </p>
        </div>

        {/* TESTIMONIAL CARDS */}
        <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 sm:gap-4 lg:gap-5 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              number={index + 1}
            />
          ))}
        </div>

        {/* BOTTOM BRAND STATEMENT */}
        <div className="mt-9 flex flex-col gap-4 border-t border-[#e4e3d9] pt-5 sm:mt-14 sm:gap-5 sm:pt-7 md:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-heading text-base font-medium leading-relaxed text-[#173c2b] sm:text-lg md:text-xl">
              Your next chapter starts with the right place.
            </p>

            <p className="mt-1.5 font-body text-[10px] leading-5 text-[#818579] sm:mt-2 sm:text-xs sm:leading-6">
              Discover residential developments by Greenfield Housing India.
            </p>
          </div>

          <a
            href="https://www.greenfieldhousingindia.com/"
            className="inline-flex min-h-10 w-fit items-center gap-3 border border-[#173c2b] px-4 py-2.5 font-body text-[9px] font-semibold uppercase tracking-[0.1em] text-[#173c2b] transition hover:bg-[#173c2b] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173c2b] sm:min-h-11 sm:gap-4 sm:px-5 sm:py-3 sm:text-[10px] sm:tracking-[0.16em]"
          >
            Explore Greenfield
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}