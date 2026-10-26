import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Building2,
  Home,
  Play,
  Instagram,
  Camera,
  Video,
  Shield,
  FileCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  Users,
} from "lucide-react";

// =====================================================
// FONTS & RESPONSIVE STYLES
// Poppins: headings and buttons
// Montserrat: body text
// =====================================================

const FONT_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

  .greenfield-projects-page {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  .greenfield-projects-page h1,
  .greenfield-projects-page h2,
  .greenfield-projects-page h3,
  .greenfield-projects-page button,
  .greenfield-projects-page .heading-font {
    font-family: 'Poppins', sans-serif;
  }

  @media (prefers-reduced-motion: reduce) {
    .greenfield-projects-page *,
    .greenfield-projects-page *::before,
    .greenfield-projects-page *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

// =====================================================
// HOOKS
// =====================================================

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function Reveal({ children, className = "", delay = 0, y = 30 }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transform: inView ? "translateY(0)" : `translateY(${y}px)`,
        opacity: inView ? 1 : 0,
      }}
    >
      {children}
    </div>
  );
}

// =====================================================
// DATA
// =====================================================

const INSTAGRAM_URL =
  "https://www.instagram.com/greenfield_developers_/?hl=en";

const projects = [
  {
    id: 1,
    name: "Crystal Gateway",
    location: "Sulur",
    type: "Plots",
    status: "Ready to Occupy",
    config: "1,200–2,400 sq.ft.",
    rera: "RERA Reg",
    href: "/project",
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1000",
    highlights: ["805 plots", "Cricket turf", "Clubhouse"],
  },
  {
    id: 2,
    name: "Crown City",
    location: "Kovilpalayam",
    type: "Plots",
    status: "Ongoing",
    config: "Multiple sizes",
    rera: "DTCP Approved",
    href: "/project",
    image:
      "https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=1000",
    highlights: ["30/40ft roads", "80% Loan", "Gated"],
  },
  {
    id: 3,
    name: "Silver City",
    location: "Karamadai Rd",
    type: "Plots",
    status: "Ongoing",
    config: "1.5 – 5 cents",
    rera: "DTCP Approved",
    href: "/project",
    image:
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1000",
    highlights: ["From ₹7.50L", "Tar roads", "24/7 security"],
  },
  {
    id: 4,
    name: "Fairland",
    location: "Ponnigoundapudur",
    type: "Plots",
    status: "Ongoing",
    config: "Multiple sizes",
    rera: "RERA Reg",
    href: "/project",
    image:
      "https://images.pexels.com/photos/2072473/pexels-photo-2072473.jpeg?auto=compress&cs=tinysrgb&w=1000",
    highlights: ["Shuttle court", "Commercial", "NH access"],
  },
  {
    id: 5,
    name: "Opal Garden IV",
    location: "Annur",
    type: "Plots",
    status: "Completed",
    config: "Multiple sizes",
    rera: "RERA Reg",
    href: "/project",
    image:
      "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1000",
    highlights: ["Gated access", "Play area", "Street lights"],
  },
  {
    id: 6,
    name: "Diamond Ave",
    location: "Pattanam",
    type: "Plots",
    status: "Ongoing",
    config: "TBA",
    rera: "Approval Pending",
    href: "/project",
    image:
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1000",
    highlights: ["Upcoming", "Pattanam", "Residential"],
  },
];

const statusFilters = [
  { key: "All", label: "All", icon: Building2 },
  { key: "Ongoing", label: "Ongoing", icon: Play },
  { key: "Completed", label: "Completed", icon: CheckCircle2 },
  { key: "Ready to Occupy", label: "Ready", icon: Home },
];

const instagramPosts = [
  {
    id: 1,
    href: INSTAGRAM_URL,
    caption: "Crystal Gateway drone walkthrough",
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=500",
    isReel: true,
  },
  {
    id: 2,
    href: INSTAGRAM_URL,
    caption: "Crown City — layout progress",
    image:
      "https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=500",
    isReel: false,
  },
  {
    id: 3,
    href: INSTAGRAM_URL,
    caption: "Silver City — boundary walls",
    image:
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=500",
    isReel: true,
  },
  {
    id: 4,
    href: INSTAGRAM_URL,
    caption: "Fairland — site update",
    image:
      "https://images.pexels.com/photos/2072473/pexels-photo-2072473.jpeg?auto=compress&cs=tinysrgb&w=500",
    isReel: false,
  },
  {
    id: 5,
    href: INSTAGRAM_URL,
    caption: "Opal Garden — street lighting",
    image:
      "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=500",
    isReel: true,
  },
  {
    id: 6,
    href: INSTAGRAM_URL,
    caption: "Diamond Ave — upcoming",
    image:
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=500",
    isReel: false,
  },
];

// =====================================================
// PROJECTS PAGE
// =====================================================

export default function Projects() {
  const pageRef = useRef(null);
  const [drift, setDrift] = useState({ x: 0, y: 0 });
  const [activeFilter, setActiveFilter] = useState("All");

  const handleMove = useCallback((e) => {
    const el = pageRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    setDrift({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  }, []);

  const handleLeave = useCallback(() => {
    setDrift({ x: 0, y: 0 });
  }, []);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.status === activeFilter);

  return (
    <main
      ref={pageRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="greenfield-projects-page relative w-full overflow-hidden bg-[#f7f8f5]"
    >
      <style>{FONT_STYLES}</style>

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#0a1f14] py-10 text-white sm:py-14 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div
          className="pointer-events-none absolute -left-20 -top-20 h-[220px] w-[220px] rounded-full bg-emerald-500/15 blur-[70px] sm:h-[300px] sm:w-[300px]"
          style={{
            transform: `translate3d(${drift.x * -20}px, ${drift.y * -20}px, 0)`,
          }}
        />

        <div
          className="pointer-events-none absolute -right-20 bottom-0 h-[260px] w-[260px] rounded-full bg-amber-500/10 blur-[80px] sm:h-[400px] sm:w-[400px]"
          style={{
            transform: `translate3d(${drift.x * 30}px, ${drift.y * 30}px, 0)`,
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-4 sm:px-8 lg:px-12 xl:px-16">
          <nav className="mb-5 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-200/70 sm:mb-8 sm:text-[10px]">
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>
            <span className="h-px w-4 bg-emerald-300/40 sm:w-6" />
            <span className="text-white">Projects</span>
          </nav>

          <div className="grid gap-7 md:gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <Reveal>
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 backdrop-blur sm:mb-6 sm:px-4 sm:py-2">
                  <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 sm:h-2 sm:w-2" />
                  </span>

                  <span className="heading-font text-[8px] font-black uppercase tracking-[0.12em] text-emerald-100 sm:text-[9px] sm:tracking-[0.2em]">
                    Premium Layouts · Coimbatore
                  </span>
                </div>

                <h1 className="heading-font text-3xl font-black leading-[1.05] tracking-tight sm:text-4xl md:text-6xl">
                  Our
                  <br />
                  <span className="bg-gradient-to-r from-emerald-300 via-emerald-200 to-amber-200 bg-clip-text text-transparent">
                    Signature
                  </span>
                  <br />
                  <span className="font-light italic text-emerald-100/90">
                    Communities.
                  </span>
                </h1>

                <p className="mt-4 max-w-xl text-xs font-medium leading-relaxed text-emerald-50/70 sm:mt-6 sm:text-sm">
                  Explore our RERA/DTCP-approved plotted communities across
                  Coimbatore. Verified, secure, and equipped for modern living.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="space-y-3 border-l-2 border-emerald-400/30 pl-4 sm:space-y-4 sm:pl-5">
                {[
                  {
                    label: "Ongoing",
                    value: projects.filter((p) => p.status === "Ongoing").length,
                  },
                  {
                    label: "Completed",
                    value: projects.filter((p) => p.status === "Completed").length,
                  },
                  {
                    label: "Ready",
                    value: projects.filter((p) => p.status === "Ready to Occupy").length,
                  },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="heading-font text-[9px] font-black uppercase tracking-[0.2em] text-emerald-300/70">
                      {item.label}
                    </p>
                    <p className="heading-font mt-0.5 text-lg font-black text-white sm:text-xl md:text-2xl">
                      {item.value} Projects
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          FILTER TABS
      ===================================================== */}

      <section className="relative -mt-5 sm:-mt-6 md:-mt-8">
        <div className="relative z-20 mx-auto w-full max-w-[1500px] px-3 sm:px-8 lg:px-12 xl:px-16">
          <Reveal>
            <div className="flex flex-wrap gap-1.5 rounded-xl border border-slate-200 bg-white p-2.5 shadow-lg sm:gap-3 sm:rounded-[2rem] sm:p-4">
              {statusFilters.map((filter) => {
                const Icon = filter.icon;

                const count =
                  filter.key === "All"
                    ? projects.length
                    : projects.filter((p) => p.status === filter.key).length;

                const isActive = activeFilter === filter.key;

                return (
                  <button
                    key={filter.key}
                    onClick={() => setActiveFilter(filter.key)}
                    className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-[8px] font-black uppercase tracking-[0.06em] transition-all duration-300 sm:gap-2.5 sm:rounded-2xl sm:px-5 sm:py-3 sm:text-[10px] sm:tracking-[0.12em] ${
                      isActive
                        ? "bg-emerald-950 text-white shadow-md shadow-emerald-950/20"
                        : "bg-slate-50 text-slate-600 hover:bg-emerald-50 hover:text-emerald-800"
                    }`}
                  >
                    <Icon className="h-3 w-3 sm:h-4 sm:w-4" />
                    {filter.label}
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[8px] sm:px-2 sm:text-[9px] ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-white text-slate-500"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          PROJECTS GRID
      ===================================================== */}

      <section className="py-9 sm:py-12 md:py-20">
        <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-8 lg:px-12 xl:px-16">
          <Reveal>
            <div className="mb-7 flex flex-wrap items-end justify-between gap-3 sm:mb-12 sm:gap-4">
              <div>
                <span className="heading-font text-[9px] font-black uppercase tracking-[0.2em] text-emerald-700 sm:text-[10px]">
                  Showing {filteredProjects.length} Projects
                </span>

                <h2 className="heading-font mt-2 text-xl font-black leading-tight tracking-tight text-slate-950 sm:mt-3 sm:text-3xl lg:text-4xl">
                  {activeFilter === "All"
                    ? "Verified Layouts"
                    : activeFilter === "Ongoing"
                    ? "Ongoing Projects"
                    : activeFilter === "Completed"
                    ? "Completed Projects"
                    : "Ready to Occupy"}
                </h2>
              </div>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-[9px] font-black uppercase tracking-[0.08em] text-slate-700 transition-all hover:border-emerald-300 hover:text-emerald-700 sm:px-5 sm:py-2.5 sm:text-[10px]"
              >
                <Instagram className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                Instagram
                <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </a>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3">
            {filteredProjects.map((project, idx) => (
              <Reveal key={project.id} delay={(idx % 3) * 60}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md sm:rounded-[1.5rem]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f14]/80 via-[#0a1f14]/10 to-transparent" />

                    {/* Status badge */}
                    <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 backdrop-blur sm:left-4 sm:top-4 sm:px-3 sm:py-1.5">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          project.status === "Ongoing"
                            ? "bg-amber-500"
                            : "bg-emerald-500"
                        }`}
                      />
                      <span className="heading-font text-[8px] font-black uppercase tracking-wider text-slate-800 sm:text-[9px]">
                        {project.status}
                      </span>
                    </div>

                    {/* Approval badge */}
                    <div className="absolute right-3 top-3 rounded-full border border-emerald-400/30 bg-emerald-950/80 px-2.5 py-1 backdrop-blur sm:right-4 sm:top-4 sm:px-3 sm:py-1.5">
                      <span className="heading-font text-[8px] font-black uppercase tracking-wider text-emerald-300 sm:text-[9px]">
                        {project.rera.split(" ")[0]}
                      </span>
                    </div>

                    {/* Location */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-white sm:bottom-4 sm:left-4 sm:right-4">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-emerald-300" />
                      <span className="text-[10px] font-bold sm:text-xs">
                        {project.location}
                      </span>
                    </div>
                  </div>

                  {/* Project details */}
                  <div className="flex h-full flex-col p-3.5 sm:p-4 md:p-5">
                    <span className="heading-font text-[9px] font-black uppercase tracking-[0.15em] text-emerald-700 sm:text-[10px]">
                      {project.type}
                    </span>

                    <h3 className="heading-font mt-1.5 text-lg font-black leading-tight tracking-tight text-slate-950 sm:mt-2 sm:text-2xl">
                      {project.name}
                    </h3>

                    <p className="mt-1 text-xs font-semibold text-slate-500 sm:mt-1.5">
                      {project.config}
                    </p>

                    {/* Highlights */}
                    <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4">
                      {project.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full border border-emerald-100 bg-emerald-50 px-2 py-1 text-[9px] font-bold text-emerald-800 sm:px-2.5 sm:text-[10px]"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3.5 sm:mt-5 sm:pt-4">
                      <Link
                        to={project.href}
                        className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-emerald-700 transition-colors hover:text-emerald-900 sm:text-[10px]"
                      >
                        View Details
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>

                      <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.name} on Instagram`}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
                      >
                        <Instagram className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          INSTAGRAM SECTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#0a1f14] py-10 text-white sm:py-16 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div
          className="pointer-events-none absolute -left-20 top-10 h-[220px] w-[220px] rounded-full bg-emerald-500/15 blur-[80px] sm:h-[300px] sm:w-[300px]"
          style={{
            transform: `translate3d(${drift.x * -30}px, ${drift.y * -30}px, 0)`,
          }}
        />

        <div
          className="pointer-events-none absolute -right-20 bottom-0 h-[260px] w-[260px] rounded-full bg-amber-500/10 blur-[90px] sm:h-[400px] sm:w-[400px]"
          style={{
            transform: `translate3d(${drift.x * 40}px, ${drift.y * 40}px, 0)`,
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="mb-8 grid gap-5 sm:mb-12 sm:gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <Reveal>
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 backdrop-blur sm:mb-5 sm:px-4 sm:py-2">
                  <Instagram className="h-3 w-3 text-emerald-300" />
                  <span className="heading-font text-[9px] font-black uppercase tracking-[0.15em] text-emerald-100 sm:text-[10px] sm:tracking-[0.2em]">
                    @greenfield_housing
                  </span>
                </div>

                <h2 className="heading-font text-2xl font-black leading-[1.05] tracking-tight sm:text-3xl md:text-5xl">
                  Follow Our
                  <br />
                  <span className="bg-gradient-to-r from-emerald-300 via-emerald-200 to-amber-200 bg-clip-text text-transparent">
                    Project Updates
                  </span>
                </h2>

                <p className="mt-4 max-w-xl text-xs font-medium leading-relaxed text-emerald-50/70 sm:mt-5 sm:text-sm">
                  From site development progress to community highlights —
                  follow our journey.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="flex flex-wrap gap-2 lg:justify-end">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-4 py-2.5 text-xs font-bold text-emerald-950 shadow-md shadow-emerald-500/20 transition-all hover:-translate-y-0.5 hover:shadow-emerald-500/40 sm:px-6 sm:py-3 sm:text-sm"
                >
                  <Instagram className="h-4 w-4" />
                  Follow Us
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Instagram post grid */}
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
            {instagramPosts.map((post, idx) => (
              <Reveal key={post.id} delay={idx * 50}>
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={post.caption}
                  className="group relative block aspect-square overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-md sm:rounded-2xl"
                >
                  <img
                    src={post.image}
                    alt={post.caption}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f14]/80 via-[#0a1f14]/20 to-transparent" />

                  {post.isReel && (
                    <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black/50 backdrop-blur sm:right-3 sm:top-3 sm:h-6 sm:w-6">
                      <Play className="h-2.5 w-2.5 fill-white text-white sm:h-3 sm:w-3" />
                    </div>
                  )}

                  <div className="absolute left-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black/50 backdrop-blur sm:left-3 sm:top-3 sm:h-6 sm:w-6">
                    {post.isReel ? (
                      <Video className="h-2.5 w-2.5 text-white sm:h-3 sm:w-3" />
                    ) : (
                      <Camera className="h-2.5 w-2.5 text-white sm:h-3 sm:w-3" />
                    )}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                    <p className="line-clamp-2 text-[9px] font-bold leading-tight text-white sm:text-[10px]">
                      {post.caption}
                    </p>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400 text-emerald-950 shadow-lg sm:h-10 sm:w-10">
                      <Instagram className="h-4 w-4" />
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS STRIP
      ===================================================== */}

      <section className="py-9 sm:py-12 md:py-20">
        <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-8 lg:px-12 xl:px-16">
          <Reveal>
            <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:rounded-3xl md:grid-cols-4">
              {[
                { value: "805+", label: "Plots in Gateway" },
                { value: "100%", label: "Approved" },
                { value: "3 Ac", label: "Cricket Turf" },
                { value: "24/7", label: "Security" },
              ].map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`relative p-4 text-center transition-all duration-300 hover:bg-emerald-50/50 sm:p-6 lg:p-8 ${
                    idx !== 3
                      ? "border-slate-100 max-md:even:border-l md:border-r"
                      : ""
                  } ${idx < 2 ? "border-b border-slate-100 md:border-b-0" : ""}`}
                >
                  <p className="heading-font text-2xl font-black leading-none tracking-tight text-emerald-700 sm:text-4xl lg:text-5xl">
                    {stat.value}
                  </p>

                  <p className="heading-font mt-2 text-[8px] font-black uppercase tracking-wider text-slate-800 sm:mt-3 sm:text-[10px] sm:tracking-[0.15em]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#0a1f14] py-10 text-white sm:py-16 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="pointer-events-none absolute left-1/2 top-0 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-[80px] sm:h-[400px] sm:w-[400px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-7 sm:gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <Reveal>
              <div>
                <span className="heading-font text-[9px] font-black uppercase tracking-[0.2em] text-emerald-300 sm:text-[10px]">
                  Ready to Begin?
                </span>

                <h2 className="heading-font mt-3 text-2xl font-black leading-[1.05] tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                  Find your plot
                  <br />
                  <span className="font-light italic text-emerald-300">
                    with Greenfield.
                  </span>
                </h2>

                <p className="mt-4 max-w-xl text-xs font-medium leading-relaxed text-emerald-50/70 sm:mt-5 sm:text-sm">
                  Whether you're looking for an investment-ready plot or a
                  space to build your dream home — our team will guide you.
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-4">
                  <a
                    href="tel:+917395864774"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-4 py-2.5 text-xs font-bold text-emerald-950 shadow-md transition-all hover:-translate-y-0.5 hover:bg-emerald-300 sm:gap-3 sm:px-6 sm:py-3 sm:text-sm"
                  >
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                    Call 7395864774
                  </a>

                  <a
                    href="https://wa.me/917395864774?text=Hi%2C%20I%27m%20interested%20in%20Greenfield%20Housing%20projects."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-bold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10 sm:gap-3 sm:px-6 sm:py-3 sm:text-sm"
                  >
                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                {[
                  { icon: Building2, value: "20+", label: "Projects" },
                  { icon: Users, value: "15K+", label: "Families" },
                  { icon: Shield, value: "RERA", label: "Registered" },
                  { icon: FileCheck, value: "DTCP", label: "Approved" },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="rounded-xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur transition-colors hover:border-emerald-400/30 hover:bg-white/[0.06] sm:rounded-2xl sm:p-5"
                    >
                      <Icon className="h-5 w-5 text-emerald-300 sm:h-6 sm:w-6" />

                      <p className="heading-font mt-2 text-xl font-black text-white sm:mt-4 sm:text-3xl">
                        {item.value}
                      </p>

                      <p className="heading-font mt-0.5 text-[8px] font-black uppercase tracking-[0.12em] text-emerald-200/70 sm:text-[10px] sm:tracking-[0.15em]">
                        {item.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
} 