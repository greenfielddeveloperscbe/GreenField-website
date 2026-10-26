import React, { useCallback, useRef, useState } from "react";

// =====================================================
// GREENFIELD HOUSING INDIA — PROJECT PORTFOLIO
// Poppins + Montserrat | Responsive | Mobile Optimized
// =====================================================

const projects = [
  {
    name: "Diamond Avenue",
    location: "Pattanam",
    status: "Ongoing",
    href: "https://www.greenfieldhousingindia.com/diamond-avenue",
    img: "https://static.wixstatic.com/media/60b717_8876632975b4438cb1f3f5c0df7bca6d~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Diamond%20avenue_1_5x.jpg",
  },
  {
    name: "Crown City",
    location: "Kovilpalayam",
    status: "Ongoing",
    href: "https://www.greenfieldhousingindia.com/crowncity",
    img: "https://static.wixstatic.com/media/60b717_8876632975b4438cb1f3f5c0df7bca6d~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Diamond%20avenue_1_5x.jpg",
  },
  {
    name: "Silver City",
    location: "Karamadai Road",
    status: "Ongoing",
    href: "https://www.greenfieldhousingindia.com/silvercity",
    img: "https://static.wixstatic.com/media/60b717_005782c45b6c4b59ae38e1242078eb0e~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/lavender_1_5x.jpg",
  },
  {
    name: "Fairland",
    location: "Ponnigoundapudur",
    status: "Ongoing",
    href: "https://www.greenfieldhousingindia.com/fairland",
    img: "https://static.wixstatic.com/media/60b717_7c54df718952421c9cc582783fe5aabf~mv2.jpg/v1/fill/w_980,h_735,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Emerald--3-.jpg",
  },
  {
    name: "Opal Garden IV",
    location: "Annur Taluk",
    status: "Completed",
    href: "https://www.greenfieldhousingindia.com/opal-garden",
    img: "https://static.wixstatic.com/media/60b717_819b9b411b5d45668b6c4c1ab30d8a6a~mv2.jpg/v1/fill/w_980,h_669,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/01%20(1).jpg",
  },
  {
    name: "Crystal Gateway",
    location: "Sulur",
    status: "Ready to Occupy",
    href: "https://www.greenfieldhousingindia.com/crystalgateway",
    img: "https://static.wixstatic.com/media/60b717_e3458c6e980748a88ced46d2c367e603~mv2.jpg/v1/fill/w_980,h_549,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled-1-04_edited.jpg",
  },
];

const statusOptions = [
  "All",
  "Ongoing",
  "Completed",
  "Ready to Occupy",
];

const stats = [
  { value: "805", label: "Plots at Crystal Gateway" },
  { value: "3 Ac", label: "Cricket Turf" },
  { value: "24/7", label: "Security at select projects" },
  { value: "6", label: "Featured Developments" },
];

const statusStyles = {
  Ongoing: "border-[#d7bd80]/50 bg-[#f8f0df] text-[#80612c]",
  Completed: "border-emerald-800/15 bg-emerald-50 text-emerald-800",
  "Ready to Occupy":
    "border-emerald-800/15 bg-emerald-50 text-emerald-800",
};

// =====================================================
// REUSABLE STATUS BADGE
// =====================================================

function StatusBadge({ status, overlay = false }) {
  return (
    <span
      className={`inline-flex w-fit items-center border px-2 py-1.5 font-body text-[8px] font-bold uppercase tracking-[0.08em] sm:px-3 sm:py-2 sm:text-[9px] sm:tracking-[0.13em] ${
        overlay
          ? "border-white/60 bg-white/95 text-slate-900"
          : statusStyles[status]
      }`}
    >
      {status}
    </span>
  );
}

// =====================================================
// PROJECT CARD
// =====================================================

function ProjectCard({ project, index }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#b79a5b]/70 hover:shadow-[0_20px_50px_rgba(15,23,42,0.09)]">
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full flex-col"
        aria-label={`View ${project.name} project details`}
      >
        <div className="relative h-48 overflow-hidden bg-slate-100 min-[420px]:h-52 sm:h-60 lg:h-64">
          <img
            src={project.img}
            alt={`${project.name} residential development at ${project.location}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#071b13]/80 via-transparent to-black/10" />

          <div className="absolute left-3 right-3 top-3 flex items-start justify-between gap-2 sm:left-4 sm:right-4 sm:top-4">
            <StatusBadge status={project.status} overlay />

            <span className="font-heading text-xl font-medium text-white/90 sm:text-3xl">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4">
            <span className="font-body text-[8px] font-bold uppercase tracking-[0.14em] text-[#e4c98d] sm:text-[9px] sm:tracking-[0.2em]">
              Greenfield Housing India
            </span>

            <p className="mt-1.5 flex items-center gap-2 font-body text-[11px] font-medium text-white sm:text-xs">
              <span className="h-1.5 w-1.5 shrink-0 bg-[#e4c98d]" />
              {project.location}
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
          <h3 className="font-heading text-xl font-semibold leading-tight tracking-tight text-slate-900 transition-colors group-hover:text-emerald-800 sm:text-2xl">
            {project.name}
          </h3>

          <p className="mt-2 font-body text-xs leading-6 text-slate-500 sm:mt-3 sm:text-sm">
            Explore our residential development in {project.location}.
          </p>

          <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-4 mt-5 sm:mt-6 sm:pt-5">
            <span className="font-body text-[8px] font-bold uppercase tracking-[0.1em] text-slate-500 sm:text-[9px] sm:tracking-[0.14em]">
              Project Details
            </span>

            <span
              aria-hidden="true"
              className="flex h-8 w-8 shrink-0 items-center justify-center border border-slate-200 font-body text-base text-emerald-900 transition-all duration-300 group-hover:border-emerald-900 group-hover:bg-emerald-900 group-hover:text-white sm:h-9 sm:w-9 sm:text-lg"
            >
              ↗
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}

// =====================================================
// MAIN PORTFOLIO
// =====================================================

export default function Work() {
  const [activeStatus, setActiveStatus] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const [drift, setDrift] = useState({ x: 0, y: 0 });

  const filteredProjects =
    activeStatus === "All"
      ? projects
      : projects.filter((project) => project.status === activeStatus);

  // Keep the featured project within the currently filtered list.
  const safeIndex = Math.min(
    currentIndex,
    Math.max(filteredProjects.length - 1, 0)
  );

  const currentProject = filteredProjects[safeIndex];

  const nextSlide = useCallback(() => {
    setCurrentIndex((previous) =>
      previous >= filteredProjects.length - 1 ? 0 : previous + 1
    );
  }, [filteredProjects.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((previous) =>
      previous <= 0 ? filteredProjects.length - 1 : previous - 1
    );
  }, [filteredProjects.length]);

  const selectStatus = (status) => {
    setActiveStatus(status);
    setCurrentIndex(0);
  };

  const handleMove = useCallback((event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const element = sectionRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    setDrift({
      x: (event.clientX - rect.left) / rect.width - 0.5,
      y: (event.clientY - rect.top) / rect.height - 0.5,
    });
  }, []);

  const handleLeave = useCallback(() => {
    setDrift({ x: 0, y: 0 });
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="work-section relative w-full overflow-hidden bg-[#f8f8f5] py-10 text-slate-800 antialiased sm:py-14 md:py-20 lg:py-24"
    >
      {/* FONT STYLES + ACCESSIBILITY */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap');

        .work-section {
          font-family: 'Montserrat', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        .work-section .font-heading {
          font-family: 'Poppins', sans-serif;
        }

        .work-section .font-body {
          font-family: 'Montserrat', sans-serif;
        }

        .work-section button,
        .work-section a {
          -webkit-tap-highlight-color: transparent;
        }

        @media (prefers-reduced-motion: reduce) {
          .work-section *,
          .work-section *::before,
          .work-section *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      {/* ARCHITECTURAL GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#052e16 1px, transparent 1px), linear-gradient(90deg, #052e16 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* AMBIENT BACKGROUND ACCENTS */}
      <div
        className="pointer-events-none absolute -left-20 top-10 h-48 w-48 rounded-full bg-emerald-200/25 blur-[90px] transition-transform duration-500 sm:h-80 sm:w-80 sm:blur-[110px]"
        style={{
          transform: `translate3d(${-drift.x * 20}px, ${-drift.y * 20}px, 0)`,
        }}
      />

      <div
        className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-amber-100/50 blur-[90px] transition-transform duration-500 sm:h-80 sm:w-80 sm:blur-[110px]"
        style={{
          transform: `translate3d(${drift.x * 20}px, ${drift.y * 20}px, 0)`,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 min-[420px]:px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="mb-7 flex flex-col gap-5 border-b border-slate-200 pb-6 sm:mb-10 sm:gap-6 sm:pb-9 md:mb-12 md:pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 border border-slate-200 bg-white px-2.5 py-1.5 sm:gap-3 sm:px-3 sm:py-2">
              <span className="h-1.5 w-1.5 bg-[#b79a5b] sm:h-2 sm:w-2" />

              <span className="font-body text-[9px] font-bold uppercase tracking-[0.14em] text-emerald-950 sm:text-xs sm:tracking-[0.22em]">
                Our Portfolio
              </span>
            </div>

            <h2 className="mt-4 font-heading text-[29px] font-semibold leading-[1.2] tracking-[-0.045em] text-slate-900 min-[420px]:text-3xl sm:mt-5 sm:text-4xl md:text-5xl lg:text-6xl">
              Signature Layouts,
              <span className="mt-1 block text-emerald-800 sm:mt-0 sm:block sm:italic">
                Developed with Care.
              </span>
            </h2>

            <p className="mt-3 max-w-2xl font-body text-xs leading-6 text-slate-600 sm:mt-5 sm:text-sm sm:leading-7 md:text-base md:leading-8">
              Explore Greenfield Housing India’s residential plotted
              developments across the Coimbatore region. Find a project that
              aligns with your plans, location preferences, and lifestyle.
            </p>
          </div>

          <a
            href="https://www.greenfieldhousingindia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-10 items-center justify-between gap-4 self-start border border-slate-300 bg-white px-4 py-2.5 font-body text-[9px] font-bold uppercase tracking-[0.1em] text-slate-800 transition-colors hover:border-emerald-900 hover:text-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-900 sm:min-h-12 sm:gap-5 sm:px-5 sm:py-3 sm:text-[10px] sm:tracking-[0.14em] lg:self-auto"
          >
            <span>Visit Official Website</span>
            <span
              aria-hidden="true"
              className="text-base transition-transform group-hover:translate-x-1"
            >
              ↗
            </span>
          </a>
        </div>

        {/* =================================================
            STATUS FILTERS
        ================================================= */}

        <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:gap-4 md:mb-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="font-body text-[9px] font-bold uppercase tracking-[0.15em] text-[#9b7d43] sm:text-[10px] sm:tracking-[0.18em]">
              Browse by status
            </span>

            <p className="mt-1 font-body text-xs leading-5 text-slate-500 sm:text-sm">
              Select a category to narrow your search.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {statusOptions.map((status) => {
              const count =
                status === "All"
                  ? projects.length
                  : projects.filter((project) => project.status === status)
                      .length;

              const active = activeStatus === status;

              return (
                <button
                  key={status}
                  type="button"
                  onClick={() => selectStatus(status)}
                  aria-pressed={active}
                  className={`inline-flex min-h-9 items-center gap-1.5 border px-2.5 py-2 font-body text-[9px] font-bold uppercase tracking-[0.04em] transition-colors sm:min-h-10 sm:gap-2 sm:px-4 sm:text-[10px] sm:tracking-[0.1em] md:text-xs ${
                    active
                      ? "border-emerald-900 bg-emerald-900 text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:border-[#b79a5b] hover:text-emerald-900"
                  }`}
                >
                  <span>{status}</span>

                  <span
                    className={`text-[9px] ${
                      active ? "text-[#e4c98d]" : "text-slate-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* =================================================
            FEATURED PROJECT SLIDER
        ================================================= */}

        {currentProject && (
          <div className="mb-10 border border-slate-200 bg-white p-3 min-[420px]:p-4 sm:mb-14 sm:p-6 lg:mb-16 lg:p-8">
            <div className="mb-4 flex flex-col gap-3 border-b border-slate-200 pb-4 sm:mb-5 sm:gap-4 sm:pb-5 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="font-body text-[9px] font-bold uppercase tracking-[0.15em] text-[#9b7d43] sm:text-[10px] sm:tracking-[0.2em]">
                  Featured Showcase
                </span>

                <h3 className="mt-2 font-heading text-xl font-semibold leading-tight text-slate-900 sm:text-2xl md:text-3xl">
                  Discover Your Next Address.
                </h3>

                <p className="mt-1.5 font-body text-[11px] text-slate-500 sm:mt-2 sm:text-xs">
                  Project {String(safeIndex + 1).padStart(2, "0")} of{" "}
                  {String(filteredProjects.length).padStart(2, "0")}
                </p>
              </div>

              <div className="flex gap-2 self-start md:self-auto">
                <button
                  type="button"
                  onClick={prevSlide}
                  disabled={filteredProjects.length <= 1}
                  aria-label="Previous project"
                  className="flex h-9 w-9 items-center justify-center border border-slate-200 bg-white text-slate-800 transition-colors hover:border-emerald-900 hover:bg-emerald-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 sm:h-11 sm:w-11"
                >
                  <span aria-hidden="true" className="text-lg sm:text-xl">
                    ←
                  </span>
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  disabled={filteredProjects.length <= 1}
                  aria-label="Next project"
                  className="flex h-9 w-9 items-center justify-center bg-emerald-900 text-white transition-colors hover:bg-[#b79a5b] hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-40 sm:h-11 sm:w-11"
                >
                  <span aria-hidden="true" className="text-lg sm:text-xl">
                    →
                  </span>
                </button>
              </div>
            </div>

            <div
              key={currentProject.name}
              className="grid grid-cols-1 overflow-hidden border border-slate-200 bg-[#fafaf8] lg:grid-cols-12"
            >
              {/* FEATURED IMAGE */}
              <div className="relative min-h-[230px] overflow-hidden bg-slate-100 min-[420px]:min-h-[270px] sm:min-h-[360px] md:min-h-[400px] lg:col-span-7 lg:min-h-[500px]">
                <img
                  src={currentProject.img}
                  alt={`${currentProject.name} project in ${currentProject.location}`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071b13]/75 via-transparent to-black/10" />

                <div className="absolute left-3 top-3 sm:left-6 sm:top-6">
                  <StatusBadge status={currentProject.status} overlay />
                </div>

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8">
                  <span className="font-body text-[8px] font-bold uppercase tracking-[0.14em] text-[#e4c98d] sm:text-[10px] sm:tracking-[0.2em]">
                    Greenfield Housing India
                  </span>

                  <h4 className="mt-1.5 font-heading text-2xl font-semibold leading-tight text-white min-[420px]:text-3xl sm:mt-2 sm:text-4xl lg:text-5xl">
                    {currentProject.name}
                  </h4>

                  <p className="mt-2 flex items-center gap-2 font-body text-xs text-white/90 sm:mt-3 sm:text-sm">
                    <span className="h-1.5 w-1.5 bg-[#e4c98d]" />
                    {currentProject.location}
                  </p>
                </div>
              </div>

              {/* PROJECT INFORMATION */}
              <div className="flex min-w-0 flex-col justify-center p-4 min-[420px]:p-5 sm:p-7 md:p-9 lg:col-span-5 lg:p-10">
                <span className="font-body text-[9px] font-bold uppercase tracking-[0.15em] text-[#9b7d43] sm:text-[10px] sm:tracking-[0.2em]">
                  Project Overview
                </span>

                <h4 className="mt-2 font-heading text-2xl font-semibold leading-tight text-slate-900 sm:mt-4 sm:text-3xl">
                  {currentProject.name}
                </h4>

                <p className="mt-3 font-body text-xs leading-6 text-slate-600 sm:mt-4 sm:text-sm sm:leading-7">
                  Explore the residential development at{" "}
                  {currentProject.location}. Contact the Greenfield Housing
                  India team to confirm current availability, pricing,
                  documentation, and site-visit arrangements.
                </p>

                <div className="mt-5 border-y border-slate-200 py-3 sm:mt-7 sm:py-4">
                  <div className="flex items-start justify-between gap-3 py-2">
                    <span className="font-body text-[11px] text-slate-500 sm:text-xs">
                      Project location
                    </span>

                    <span className="text-right font-body text-[11px] font-semibold text-slate-900 sm:text-xs">
                      {currentProject.location}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-3 py-2">
                    <span className="font-body text-[11px] text-slate-500 sm:text-xs">
                      Project status
                    </span>

                    <StatusBadge status={currentProject.status} />
                  </div>
                </div>

                <a
                  href={currentProject.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 inline-flex min-h-11 items-center justify-between gap-3 bg-emerald-900 px-4 py-3 font-body text-[9px] font-bold uppercase tracking-[0.09em] text-white transition-colors hover:bg-[#b79a5b] hover:text-slate-950 sm:mt-7 sm:min-h-12 sm:gap-4 sm:px-5 sm:py-4 sm:text-[10px] sm:tracking-[0.14em]"
                >
                  <span>View Project Details</span>

                  <span
                    aria-hidden="true"
                    className="text-base transition-transform group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </a>

                {/* SLIDER PROGRESS */}
                <div className="mt-5 flex items-center gap-1.5 sm:mt-7 sm:gap-2">
                  {filteredProjects.map((project, index) => (
                    <button
                      key={project.name}
                      type="button"
                      onClick={() => setCurrentIndex(index)}
                      aria-label={`Show ${project.name}`}
                      aria-pressed={safeIndex === index}
                      className={`h-1 transition-all duration-300 ${
                        safeIndex === index
                          ? "w-8 bg-[#b79a5b] sm:w-10"
                          : "w-3 bg-slate-300 hover:bg-slate-500 sm:w-4"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================
            ALL PROJECTS GRID
        ================================================= */}

        <div className="mb-5 flex flex-col gap-2 border-b border-slate-200 pb-4 sm:mb-8 sm:gap-3 sm:pb-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-body text-[9px] font-bold uppercase tracking-[0.15em] text-[#9b7d43] sm:text-[10px] sm:tracking-[0.2em]">
              Complete Collection
            </span>

            <h3 className="mt-1.5 font-heading text-2xl font-semibold text-slate-900 sm:mt-2 sm:text-3xl md:text-4xl">
              Explore Our Projects.
            </h3>
          </div>

          <p className="font-body text-[11px] text-slate-500 sm:text-xs">
            Showing {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "development" : "developments"}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={projects.findIndex((item) => item.name === project.name)}
            />
          ))}
        </div>

        {/* =================================================
            COMPANY STATS
        ================================================= */}

        <div className="mt-10 border border-slate-200 bg-white p-3 min-[420px]:p-4 sm:mt-16 sm:p-6 lg:mt-20 lg:p-8">
          <div className="mb-4 border-b border-slate-200 pb-4 text-center sm:mb-6 sm:pb-5">
            <span className="font-body text-[9px] font-bold uppercase tracking-[0.15em] text-[#9b7d43] sm:text-[10px] sm:tracking-[0.2em]">
              At a Glance
            </span>

            <h3 className="mt-1.5 font-heading text-xl font-semibold leading-tight text-slate-900 sm:mt-2 sm:text-2xl md:text-3xl">
              A Portfolio Built Around Community.
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group border border-slate-200 bg-[#fafaf8] p-3 text-center transition-colors hover:border-[#b79a5b] min-[420px]:p-4 sm:p-6 lg:p-7"
              >
                <span className="font-body text-[9px] font-bold uppercase tracking-[0.12em] text-[#9b7d43] sm:text-[10px] sm:tracking-[0.15em]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-2 font-heading text-2xl font-semibold tracking-tight text-emerald-900 min-[420px]:text-3xl sm:mt-3 sm:text-4xl lg:text-5xl">
                  {stat.value}
                </p>

                <p className="mt-2 font-body text-[8px] font-bold uppercase leading-4 tracking-[0.06em] text-slate-500 sm:mt-3 sm:text-[10px] sm:leading-5 sm:tracking-[0.12em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-center font-body text-[9px] leading-5 text-slate-400 sm:mt-5 sm:text-[10px]">
            Project status, amenities, and availability may change. Confirm
            current details with the developer before making a purchase
            decision.
          </p>
        </div>

        {/* =================================================
            ENQUIRY BANNER
        ================================================= */}

        <div className="relative mt-8 overflow-hidden bg-[#071b13] p-5 text-white min-[420px]:p-6 sm:mt-12 sm:p-9 lg:mt-16 lg:p-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />

          <div className="relative flex flex-col gap-5 sm:gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <span className="font-body text-[9px] font-bold uppercase tracking-[0.15em] text-[#e4c98d] sm:text-[10px] sm:tracking-[0.2em]">
                Your Next Step
              </span>

              <h3 className="mt-2.5 font-heading text-2xl font-semibold leading-tight text-white sm:mt-4 sm:text-3xl md:text-4xl">
                Let’s Find a Place for Your Future.
              </h3>

              <p className="mt-3 font-body text-xs leading-6 text-white/65 sm:text-sm sm:leading-7">
                Speak with our team for project details, current availability,
                pricing, and guided site visits across Coimbatore.
              </p>
            </div>

            <div className="flex w-full flex-col gap-2.5 min-[420px]:flex-row sm:gap-3 lg:w-auto lg:shrink-0">
              <a
                href="tel:+917395864774"
                className="inline-flex min-h-11 flex-1 items-center justify-center gap-3 bg-[#e4c98d] px-4 py-3 font-body text-[9px] font-bold uppercase tracking-[0.08em] text-[#102117] transition-colors hover:bg-white sm:min-h-12 sm:gap-4 sm:px-6 sm:py-4 sm:text-[10px] sm:tracking-[0.13em]"
              >
                <span>Call Our Team</span>
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="https://wa.me/917395864774?text=Hi%2C%20I%27m%20interested%20in%20your%20residential%20plot%20projects."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 flex-1 items-center justify-center gap-3 border border-white/25 bg-white/5 px-4 py-3 font-body text-[9px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:border-[#e4c98d] hover:bg-white/10 sm:min-h-12 sm:gap-4 sm:px-6 sm:py-4 sm:text-[10px] sm:tracking-[0.13em]"
              >
                <span>WhatsApp Enquiry</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}