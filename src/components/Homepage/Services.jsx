import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* =========================================================
   GREENFIELD HOUSING INDIA
   Responsive Project Portfolio
   Poppins Headings | Montserrat Body
========================================================= */

/* -------------------- Tilt Effect -------------------- */

function Tilt({ children, className = "", max = 5, scale = 1.005 }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  const handleMove = useCallback(
    (event) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      setStyle({
        transform: `perspective(1200px) rotateX(${(0.5 - y) * max * 1.5}deg) rotateY(${(x - 0.5) * max * 1.5}deg) scale(${scale})`,
      });
    },
    [max, scale]
  );

  const handleLeave = useCallback(() => {
    setStyle({
      transform: "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)",
    });
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`relative transition-transform duration-300 ease-out ${className}`}
      style={{ ...style, transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}

/* -------------------- Scroll Reveal -------------------- */

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function Reveal({ children, className = "", delay = 0 }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* -------------------- Project Data -------------------- */

const projectFilters = [
  { name: "Ongoing", href: "/project", detail: "01" },
  { name: "Completed", href: "/project", detail: "02" },
  { name: "Ready", href: "/project", detail: "03" },
];

const featuredProjects = [
  {
    id: "01",
    name: "Crystal Gateway",
    location: "Sulur, Coimbatore",
    type: "Residential Plots",
    tags: ["805 Plots", "Ready"],
    href: "/project",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
    meta: ["RERA: TN11//Layout/0360/2025"],
  },
  {
    id: "02",
    name: "Crown City",
    location: "Kovilpalayam",
    type: "Plotted Community",
    tags: ["DTCP", "Gated"],
    href: "/project",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
    meta: ["Loan up to 80%"],
  },
  {
    id: "03",
    name: "Silver City",
    location: "Karamadai Road",
    type: "Plotted Development",
    tags: ["From ₹7.50L", "DTCP"],
    href: "/project",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
    meta: ["1.5 to 5 cents"],
  },
  {
    id: "04",
    name: "Fairland",
    location: "Ponnigoundapudur",
    type: "Premium Plots",
    tags: ["Turf Court", "Commercial"],
    href: "/project",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    meta: ["TN/11/Layout/1405/2023"],
  },
  {
    id: "05",
    name: "Opal Garden IV",
    location: "Annur Taluk",
    type: "Gated Township",
    tags: ["RERA", "9.75L / cent"],
    href: "/project",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80&w=800",
    meta: ["Gated Access"],
  },
  {
    id: "06",
    name: "Diamond Avenue",
    location: "Pattanam",
    type: "Upcoming Layout",
    tags: ["Upcoming", "Pattanam"],
    href: "/project",
    image:
      "https://images.unsplash.com/photo-1628611225249-6c11760c6d7a?auto=format&fit=crop&q=80&w=800",
    meta: ["Details TBA"],
  },
];

const highlightProject = {
  name: "Crystal Gateway",
  location: "Sulur, Coimbatore",
  rera: "TN11//Layout/0360/2025",
  approval: "Layout 74/2024",
  totalPlots: "805 plots",
  plotSizes: "1,200 - 2,400 sq.ft.",
  href: "/project",
  image:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
  amenities: [
    "Entrance Arch",
    "CCTV Surveillance",
    "Tar Roads",
    "EB Cables",
    "Water Connection",
    "Standard Drainage",
    "Kids Play Area",
    "Outdoor Gym",
    "Turf Court",
    "Cricket Ground",
    "Running Track",
    "Grand Clubhouse",
    "Mini Theatre",
  ],
  nearby: [
    { name: "L&T Bypass", dist: "2 km" },
    { name: "KMCH Hospital", dist: "3 km" },
    { name: "RVS Institute", dist: "4 km" },
    { name: "Airport", dist: "10 km" },
  ],
};

const communityFeatures = [
  { number: "01", label: "Landscaped gardens" },
  { number: "02", label: "Outdoor gymnasiums" },
  { number: "03", label: "All-weather turf courts" },
  { number: "04", label: "Community halls" },
  { number: "05", label: "24/7 CCTV surveillance" },
  { number: "06", label: "Secure gated entries" },
];

/* =========================================================
   MAIN PROJECTS COMPONENT
========================================================= */

export default function Projects() {
  const sectionRef = useRef(null);
  const [drift, setDrift] = useState({ x: 0, y: 0 });

  const handleMove = useCallback((event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const element = sectionRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();

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
      id="projects"
      ref={sectionRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="projects-section relative w-full overflow-hidden bg-[#f8f8f5] py-10 text-slate-800 antialiased sm:py-16 md:py-20 lg:py-24"
    >
      {/* Font and responsive motion styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap');

        .projects-section {
          font-family: 'Montserrat', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        .projects-section .font-poppins {
          font-family: 'Poppins', sans-serif;
        }

        .projects-section .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }

        @media (max-width: 639px) {
          .projects-section .project-tilt {
            transform: none !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .projects-section *,
          .projects-section *::before,
          .projects-section *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      {/* Subtle architectural grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#052e16 1px, transparent 1px), linear-gradient(90deg, #052e16 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-16 h-64 w-64 rounded-full bg-emerald-200/25 blur-[90px] transition-transform duration-500 ease-out sm:-left-10 sm:top-20 sm:h-96 sm:w-96 sm:blur-[120px]"
        style={{
          transform: `translate3d(${drift.x * 24}px, ${drift.y * 24}px, 0)`,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Portfolio header */}
        <Reveal className="border-b border-slate-200/90 pb-7 sm:pb-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-8">
            <div className="min-w-0">
              <div className="inline-flex items-center gap-2.5 border border-slate-200 bg-white px-3 py-2 sm:gap-3">
                <span className="h-2 w-2 shrink-0 bg-[#b79a5b]" />
                <span className="font-montserrat text-[9px] font-bold uppercase tracking-[0.16em] text-emerald-900 sm:text-xs sm:tracking-[0.22em]">
                  Project Portfolio
                </span>
              </div>

              <h2 className="font-poppins mt-4 max-w-4xl text-[30px] font-medium leading-[1.15] tracking-[-0.04em] text-slate-900 sm:mt-5 sm:text-4xl lg:text-5xl">
                Thoughtfully Designed
                <span className="block italic text-emerald-800">
                  Communities.
                </span>
              </h2>

              <p className="font-montserrat mt-3 max-w-3xl text-xs leading-6 text-slate-600 sm:mt-4 sm:text-sm sm:leading-7 md:text-base">
                Explore premium RERA and DTCP-approved plotted developments
                across Coimbatore.
              </p>
            </div>

            {/* Project category links */}
            <div className="flex flex-wrap gap-2">
              {projectFilters.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="group inline-flex min-h-10 items-center gap-2 border border-slate-200 bg-white px-3 py-2.5 font-montserrat text-[11px] font-semibold text-slate-800 transition-colors hover:border-emerald-800 hover:text-emerald-800 sm:gap-3 sm:px-4 sm:py-3 sm:text-xs"
                >
                  <span className="font-montserrat text-[9px] tracking-widest text-[#b79a5b] sm:text-[10px]">
                    {item.detail}
                  </span>
                  <span>{item.name}</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Signature project listing */}
        <Reveal
          delay={100}
          className="mb-5 mt-8 flex flex-col justify-between gap-3 border-b border-slate-200/90 pb-4 sm:mb-8 sm:mt-14 sm:flex-row sm:items-end sm:gap-4"
        >
          <div>
            <h3 className="font-poppins text-xl font-medium text-slate-900 sm:text-3xl">
              Signature Plotted Homes
            </h3>
            <p className="font-montserrat mt-1.5 text-xs leading-5 text-slate-500 sm:mt-2 sm:text-sm">
              Approved layouts built with sustainable infrastructure.
            </p>
          </div>

          <Link
            to="/allprojects"
            className="group inline-flex items-center gap-3 self-start font-montserrat text-[10px] font-bold uppercase tracking-[0.1em] text-emerald-900 transition-colors hover:text-[#9a7c3e] sm:self-auto sm:text-xs sm:tracking-[0.12em]"
          >
            <span>View All Projects</span>
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </Reveal>

        {/* Responsive project cards */}
        <div className="mb-12 grid grid-cols-1 gap-4 sm:mb-16 sm:grid-cols-2 sm:gap-5 lg:mb-20 lg:grid-cols-3 2xl:grid-cols-6">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 40} className="h-full">
              <Tilt className="project-tilt h-full">
                <Link
                  to={project.href}
                  className="group flex h-full flex-col overflow-hidden border border-slate-200/90 bg-white transition-all duration-300 hover:border-emerald-800/40 hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)]"
                >
                  {/* Project image */}
                  <div className="relative h-48 w-full overflow-hidden border-b border-slate-100 bg-slate-100 sm:h-52 lg:h-48">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-slate-950/10" />

                    <span className="font-poppins absolute right-3 top-2 text-2xl font-medium tracking-tight text-white/65 sm:right-4 sm:top-3 sm:text-3xl">
                      {project.id}
                    </span>

                    <span className="font-montserrat absolute left-2.5 top-2.5 max-w-[85%] truncate border border-white/60 bg-white/95 px-2 py-1.5 text-[8px] font-bold uppercase tracking-[0.08em] text-slate-900 sm:left-3 sm:top-3 sm:px-2.5 sm:text-[9px] sm:tracking-[0.12em]">
                      {project.type}
                    </span>

                    <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white sm:left-3.5">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#e4c98d]" />
                      <span className="font-montserrat text-[10px] font-medium sm:text-xs">
                        {project.location}
                      </span>
                    </div>
                  </div>

                  {/* Project details */}
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <div className="mb-3 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-montserrat border border-slate-200 bg-slate-50 px-2 py-1 text-[8px] font-bold uppercase tracking-[0.08em] text-slate-700 sm:text-[9px] sm:tracking-[0.1em]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h4 className="font-poppins text-lg font-medium leading-snug tracking-tight text-slate-900 transition-colors group-hover:text-emerald-800 sm:text-xl">
                      {project.name}
                    </h4>

                    {project.meta && (
                      <div className="font-montserrat mt-2 flex flex-wrap gap-2 text-[10px] leading-5 text-slate-500 sm:mt-3 sm:text-[11px]">
                        {project.meta.map((meta) => (
                          <span key={meta}>{meta}</span>
                        ))}
                      </div>
                    )}

                    <div className="font-montserrat mt-auto flex items-center justify-between gap-2 border-t border-slate-100 pt-4 text-[9px] font-bold uppercase tracking-[0.08em] text-emerald-900 sm:pt-5 sm:text-[10px] sm:tracking-[0.12em]">
                      <span>Explore Layout</span>
                      <span
                        aria-hidden="true"
                        className="text-base transition-transform duration-200 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </Tilt>
            </Reveal>
          ))}
        </div>

        {/* Featured project spotlight */}
        <Reveal className="mb-12 sm:mb-16 lg:mb-20">
          <div className="overflow-hidden border border-slate-200 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="p-4 sm:p-8 lg:col-span-7 lg:p-12">
                <div className="inline-flex items-center gap-2.5 border-b border-[#e7dcc2] pb-2.5 sm:gap-3 sm:pb-3">
                  <span className="h-2 w-2 bg-[#b79a5b]" />
                  <span className="font-montserrat text-[9px] font-bold uppercase tracking-[0.16em] text-emerald-900 sm:text-[10px] sm:tracking-[0.2em]">
                    Flagship Project
                  </span>
                </div>

                <h3 className="font-poppins mt-4 text-2xl font-medium tracking-[-0.035em] text-slate-900 sm:mt-5 sm:text-4xl">
                  {highlightProject.name}
                </h3>

                <p className="font-montserrat mt-3 flex items-center gap-2 text-xs text-slate-600 sm:text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#b79a5b]" />
                  {highlightProject.location}
                </p>

                {/* Project specifications */}
                <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-7 sm:grid-cols-3 sm:gap-3">
                  {[
                    {
                      label: "Approval",
                      value: highlightProject.approval,
                    },
                    {
                      label: "Total Capacity",
                      value: highlightProject.totalPlots,
                    },
                    {
                      label: "Unit Sizes",
                      value: highlightProject.plotSizes,
                    },
                  ].map((spec) => (
                    <div
                      key={spec.label}
                      className="min-w-0 border border-slate-200 bg-[#fafaf8] p-3 sm:p-4"
                    >
                      <span className="font-montserrat text-[8px] font-bold uppercase tracking-[0.1em] text-slate-500 sm:text-[9px] sm:tracking-[0.14em]">
                        {spec.label}
                      </span>
                      <p className="font-montserrat mt-1.5 break-words text-[10px] font-semibold leading-5 text-slate-900 sm:mt-2 sm:text-xs">
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Amenity list */}
                <div className="mt-5 sm:mt-7">
                  <span className="font-montserrat text-[9px] font-bold uppercase tracking-[0.12em] text-slate-700 sm:text-[10px] sm:tracking-[0.15em]">
                    Included Community Amenities
                  </span>

                  <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                    {highlightProject.amenities.map((item) => (
                      <span
                        key={item}
                        className="font-montserrat border border-slate-200 bg-white px-2.5 py-1.5 text-[10px] text-slate-600 sm:px-3 sm:py-2 sm:text-[11px]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 sm:mt-8">
                  <Link
                    to={highlightProject.href}
                    className="group inline-flex min-h-11 w-full items-center justify-center gap-4 bg-emerald-900 px-4 py-3 font-montserrat text-[9px] font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#b79a5b] hover:text-slate-950 sm:min-h-12 sm:w-auto sm:justify-start sm:gap-5 sm:px-6 sm:py-4 sm:text-[10px] sm:tracking-[0.14em]"
                  >
                    <span>View Project Details</span>
                    <span
                      aria-hidden="true"
                      className="text-base transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>

              {/* Location and connectivity */}
              <div className="relative min-h-[320px] overflow-hidden bg-slate-100 sm:min-h-[400px] lg:col-span-5">
                <img
                  src={highlightProject.image}
                  alt={`${highlightProject.name} residential development`}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071b13]/95 via-[#071b13]/65 to-[#071b13]/10" />

                <div className="relative flex h-full min-h-[320px] flex-col justify-end p-4 sm:min-h-[400px] sm:p-8">
                  <span className="font-montserrat mb-3 text-[9px] font-bold uppercase tracking-[0.16em] text-[#e4c98d] sm:mb-4 sm:text-[10px] sm:tracking-[0.2em]">
                    Strategic Proximity
                  </span>

                  <h4 className="font-poppins mb-4 text-xl font-medium text-white sm:mb-5 sm:text-3xl">
                    Well-connected living.
                  </h4>

                  <div className="space-y-2">
                    {highlightProject.nearby.map((place) => (
                      <div
                        key={place.name}
                        className="flex items-center justify-between gap-3 border border-white/15 bg-black/20 px-3 py-2.5 backdrop-blur-sm sm:gap-4 sm:px-4 sm:py-3"
                      >
                        <span className="font-montserrat text-[11px] text-white/85 sm:text-xs">
                          {place.name}
                        </span>
                        <span className="font-montserrat shrink-0 text-[11px] font-semibold text-[#e4c98d] sm:text-xs">
                          {place.dist}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p className="font-montserrat mt-3 border-l-2 border-[#b79a5b] pl-3 text-[10px] leading-5 text-white/80 sm:mt-4 sm:text-xs sm:leading-6">
                    Approval reference: {highlightProject.rera}. Verify current
                    approval and project details before purchase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Community amenities panel */}
        <Reveal>
          <div className="relative overflow-hidden bg-[#071b13] p-4 text-white sm:p-8 lg:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-700/20 blur-[80px] sm:h-72 sm:w-72 sm:blur-[100px]"
            />

            <div className="relative grid grid-cols-1 items-center gap-7 sm:gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <span className="font-montserrat text-[9px] font-bold uppercase tracking-[0.18em] text-[#e4c98d] sm:text-[10px] sm:tracking-[0.22em]">
                  Sustainable Planning
                </span>

                <h3 className="font-poppins mt-3 text-2xl font-medium leading-tight tracking-[-0.03em] text-white sm:mt-4 sm:text-4xl">
                  Designed for More Than Just Living.
                </h3>

                <p className="font-montserrat mt-3 max-w-lg text-xs leading-6 text-white/70 sm:mt-4 sm:text-sm sm:leading-7">
                  Every community is thoughtfully designed with green spaces,
                  wellness zones, and practical layout features to support
                  everyday living.
                </p>

                <div className="mt-5 sm:mt-7">
                  <Link
                    to="/community"
                    className="group inline-flex min-h-11 w-full items-center justify-center gap-4 bg-[#e4c98d] px-4 py-3 font-montserrat text-[9px] font-bold uppercase tracking-[0.1em] text-[#102117] transition-colors hover:bg-white sm:min-h-12 sm:w-auto sm:justify-start sm:gap-5 sm:px-6 sm:py-4 sm:text-[10px] sm:tracking-[0.14em]"
                  >
                    <span>Explore Community</span>
                    <span
                      aria-hidden="true"
                      className="text-base transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>

              {/* Amenity tiles */}
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:col-span-7">
                {communityFeatures.map((item) => (
                  <div
                    key={item.label}
                    className="group min-h-[105px] border border-white/10 bg-white/[0.035] p-3 transition-colors hover:border-[#b79a5b]/70 hover:bg-white/[0.07] sm:min-h-[118px] sm:p-5"
                  >
                    <span className="font-montserrat text-[9px] font-semibold tracking-[0.14em] text-[#b79a5b] sm:text-[10px] sm:tracking-[0.18em]">
                      {item.number}
                    </span>

                    <span className="font-poppins mt-3 block text-xs font-medium leading-5 text-white/90 sm:mt-5 sm:text-sm sm:leading-6">
                      {item.label}
                    </span>

                    <div className="mt-3 h-px w-7 bg-white/20 transition-all duration-300 group-hover:w-12 group-hover:bg-[#b79a5b] sm:mt-4 sm:w-8 sm:group-hover:w-14" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
