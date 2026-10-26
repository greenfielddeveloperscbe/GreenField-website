import React, { useMemo } from "react";

/* =========================================================
   COMMUNITY FEATURES & AMENITIES
   Poppins Headings | Montserrat Body
   Responsive Layout | Animated Amenities List
========================================================= */

const communityFeatures = [
  {
    number: "01",
    title: "Green Spaces",
    desc: "Landscaped gardens, parks, and roadside greenery.",
    accent: "from-emerald-50 to-white",
  },
  {
    number: "02",
    title: "Fitness & Sports",
    desc: "Outdoor gyms, 400m running tracks, and indoor shuttle courts.",
    accent: "from-sky-50 to-white",
  },
  {
    number: "03",
    title: "Recreation",
    desc: "Grand clubhouses, mini theatres, and a 3-acre cricket turf.",
    accent: "from-violet-50 to-white",
  },
  {
    number: "04",
    title: "Community Areas",
    desc: "Dedicated community halls and children's play areas.",
    accent: "from-amber-50 to-white",
  },
  {
    number: "05",
    title: "Infrastructure",
    desc: "Individual water lines, underground EB, and standard drainage.",
    accent: "from-cyan-50 to-white",
  },
  {
    number: "06",
    title: "Secure Layouts",
    desc: "24/7 security, CCTV, and fully enclosed compound walls.",
    accent: "from-rose-50 to-white",
  },
];

const scrollItems = [
  "Grand Clubhouse",
  "3-Acre Cricket Turf",
  "Outdoor Gym",
  "Mini Theatre",
  "Underground EB",
  "Blacktop Roads",
  "CCTV Surveillance",
  "Indoor Shuttle Court",
  "Rainwater Harvesting",
  "Landscaped Gardens",
  "Community Hall",
  "Children's Park",
];

const activeItems = new Set([
  "3-Acre Cricket Turf",
  "CCTV Surveillance",
  "Underground EB",
]);

function InfiniteScroll() {
  const duplicatedItems = useMemo(
    () => [...scrollItems, ...scrollItems],
    []
  );

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="community-page smooth-text-rendering text-slate-900">
      {/* Google Fonts and Animation Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap');

        .community-page {
          font-family: 'Montserrat', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        .community-page .font-poppins {
          font-family: 'Poppins', sans-serif;
        }

        .community-page .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }

        .vertical-scroll-mask {
          contain: layout paint;
          mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 12%,
            black 88%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 12%,
            black 88%,
            transparent 100%
          );
        }

        .vertical-scroll-track {
          display: flex;
          flex-direction: column;
          animation: amenitiesVerticalScroll 32s linear infinite;
          will-change: transform;
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
        }

        .vertical-scroll-item {
          line-height: 1.3;
          white-space: nowrap;
          backface-visibility: hidden;
        }

        @keyframes amenitiesVerticalScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(0, -50%, 0);
          }
        }

        .vertical-scroll-mask:hover .vertical-scroll-track {
          animation-play-state: paused;
        }

        @media (max-width: 639px) {
          .vertical-scroll-track {
            animation-duration: 28s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .community-page *,
          .community-page *::before,
          .community-page *::after {
            scroll-behavior: auto !important;
            animation: none !important;
            transition: none !important;
          }

          .vertical-scroll-track {
            transform: none;
          }
        }
      `}</style>

      {/* =====================================================
          COMMUNITY FEATURES SECTION
      ===================================================== */}
      <section
        id="community"
        className="relative w-full overflow-hidden bg-[#f7f8f5] py-10 sm:py-16 lg:py-24"
      >
        {/* Background accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-20 h-56 w-56 rounded-full bg-emerald-100/60 blur-[80px] sm:h-[320px] sm:w-[320px] sm:blur-[100px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-20 h-56 w-56 rounded-full bg-amber-100/50 blur-[80px] sm:h-[320px] sm:w-[320px] sm:blur-[100px]"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12 xl:px-16">
          {/* Section heading */}
          <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12 md:mb-16">
            <div className="mb-4 inline-flex items-center gap-2.5 sm:mb-5 sm:gap-3">
              <span className="h-px w-6 bg-[#b79a5b] sm:w-8" />

              <span className="font-montserrat text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-800 sm:text-xs sm:tracking-[0.24em]">
                Community Living
              </span>

              <span className="h-px w-6 bg-[#b79a5b] sm:w-8" />
            </div>

            <h2 className="font-poppins text-[27px] font-medium leading-[1.2] tracking-[-0.04em] text-slate-900 sm:text-4xl lg:text-5xl">
              Designed for a Better
              <span className="mt-1 block italic text-emerald-800 sm:mt-2">
                Everyday Life
              </span>
            </h2>

            <p className="mx-auto mt-3 max-w-2xl font-montserrat text-xs leading-6 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
              Secure, gated plotted developments featuring premium amenities,
              essential infrastructure, and welcoming social spaces.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
            {communityFeatures.map((feature) => (
              <article
                key={feature.title}
                className={`group relative overflow-hidden rounded-xl border border-slate-200/80 bg-gradient-to-br ${feature.accent} p-5 shadow-[0_4px_20px_rgba(15,23,42,0.025)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:rounded-2xl sm:p-7 lg:p-8`}
              >
                <div className="mb-5 flex items-center justify-between sm:mb-7">
                  <span className="font-montserrat text-[10px] font-semibold tracking-[0.16em] text-emerald-800/70 sm:text-xs sm:tracking-[0.18em]">
                    {feature.number}
                  </span>

                  <span className="h-px w-9 bg-[#c6ad78] transition-all duration-300 group-hover:w-16 sm:w-12 sm:group-hover:w-20" />
                </div>

                <h3 className="font-poppins text-lg font-medium tracking-[-0.025em] text-slate-900 sm:text-xl lg:text-2xl">
                  {feature.title}
                </h3>

                <p className="mt-2 max-w-sm font-montserrat text-xs leading-6 text-slate-600 sm:mt-3 sm:text-sm">
                  {feature.desc}
                </p>

                <div className="mt-5 h-px w-full bg-slate-200/80 sm:mt-7">
                  <div className="h-px w-0 bg-emerald-700 transition-all duration-500 group-hover:w-full" />
                </div>
              </article>
            ))}
          </div>

          {/* Explore Layouts CTA */}
          <div className="mt-7 text-center sm:mt-10 md:mt-14">
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="group inline-flex min-h-11 w-full max-w-xs items-center justify-center gap-4 border border-emerald-800 bg-emerald-800 px-5 py-3 font-montserrat text-[10px] font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:border-[#c6ad78] hover:bg-[#c6ad78] hover:text-slate-950 sm:min-h-12 sm:w-auto sm:max-w-none sm:gap-6 sm:px-9 sm:py-4 sm:text-xs sm:tracking-[0.15em]"
            >
              <span>Explore Layouts</span>

              <span
                aria-hidden="true"
                className="text-lg leading-none transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          VERIFIED LAYOUTS AND AMENITIES SECTION
      ===================================================== */}
      <section className="relative w-full overflow-hidden bg-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-8 px-4 sm:gap-12 sm:px-8 md:grid-cols-2 md:gap-14 lg:px-12 xl:px-16">
          {/* Left-side content */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="mb-4 inline-flex items-center gap-2.5 border-b border-emerald-200 pb-2.5 sm:mb-5 sm:gap-3 sm:pb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-700 sm:h-2 sm:w-2" />

              <span className="font-montserrat text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-800 sm:text-xs sm:tracking-[0.22em]">
                Verified Layouts
              </span>
            </div>

            <h2 className="max-w-xl font-poppins text-[27px] font-medium leading-[1.2] tracking-[-0.04em] text-slate-900 sm:text-4xl xl:text-5xl">
              Where
              <span className="italic text-emerald-800">
                {" "}Community{" "}
              </span>
              Thrives
            </h2>

            <p className="mt-3 max-w-md font-montserrat text-xs leading-6 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
              Our residential plots are presented with a focus on legal
              transparency, dependable infrastructure, and lifestyle facilities.
            </p>

            {/* Approval labels */}
            <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start sm:mt-7 sm:gap-2.5">
              <span className="border border-emerald-100 bg-emerald-50 px-3 py-2 font-montserrat text-[9px] font-bold uppercase tracking-[0.08em] text-emerald-900 sm:px-4 sm:py-2.5 sm:text-xs sm:tracking-[0.12em]">
                100% Approved
              </span>

              <span className="border border-slate-200 bg-slate-50 px-3 py-2 font-montserrat text-[9px] font-bold uppercase tracking-[0.08em] text-slate-700 sm:px-4 sm:py-2.5 sm:text-xs sm:tracking-[0.12em]">
                RERA Registered
              </span>

              <span className="border border-[#e7dcc2] bg-[#fbf8f0] px-3 py-2 font-montserrat text-[9px] font-bold uppercase tracking-[0.08em] text-[#80672f] sm:px-4 sm:py-2.5 sm:text-xs sm:tracking-[0.12em]">
                DTCP Layouts
              </span>
            </div>
          </div>

          {/* Right-side infinite vertical scroll */}
          <div className="vertical-scroll-mask relative h-[285px] w-full overflow-hidden border-y border-slate-200/80 bg-slate-50/60 px-4 sm:h-[340px] sm:px-8 lg:h-[400px]">
            <div className="vertical-scroll-track">
              {duplicatedItems.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className={`vertical-scroll-item flex items-center justify-between gap-3 border-b border-slate-200/70 py-3.5 transition-colors duration-300 sm:gap-4 sm:py-4 ${
                    activeItems.has(item)
                      ? "text-emerald-800"
                      : "text-slate-400 hover:text-emerald-700"
                  }`}
                >
                  <span className="font-poppins text-sm font-medium tracking-[-0.025em] sm:text-xl lg:text-2xl">
                    {item}
                  </span>

                  <span
                    aria-hidden="true"
                    className={`shrink-0 font-montserrat text-[8px] font-semibold tracking-[0.08em] sm:text-[10px] sm:tracking-[0.12em] ${
                      activeItems.has(item)
                        ? "text-[#b79a5b]"
                        : "text-slate-300"
                    }`}
                  >
                    {activeItems.has(item) ? "FEATURED" : "AMENITY"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default React.memo(InfiniteScroll);
