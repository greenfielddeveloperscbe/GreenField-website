import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Leaf,
  MapPin,
  Trees,
  Building2,
  ShieldCheck,
  FileCheck,
  CheckCircle2,
} from "lucide-react";

/* =========================================================
   GOOGLE FONTS
   Poppins: Headings
   Montserrat: Body text, labels and buttons
========================================================= */

const FONT_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap');

  .greenfield-projects {
    font-family: 'Montserrat', sans-serif;
  }

  .greenfield-projects h1,
  .greenfield-projects h2,
  .greenfield-projects h3,
  .greenfield-projects h4 {
    font-family: 'Poppins', sans-serif;
  }

  .greenfield-projects a,
  .greenfield-projects button,
  .greenfield-projects p,
  .greenfield-projects span {
    font-family: 'Montserrat', sans-serif;
  }

  @media (max-width: 639px) {
    .greenfield-projects .project-section-header {
      margin-bottom: 1.5rem;
    }

    .greenfield-projects .project-featured-details {
      padding: 1.125rem;
    }

    .greenfield-projects .project-featured-image {
      min-height: 250px;
    }

    .greenfield-projects .project-stat {
      padding: 0.75rem;
      gap: 0.625rem;
    }

    .greenfield-projects .project-stat-icon {
      width: 2.25rem;
      height: 2.25rem;
    }

    .greenfield-projects .project-card-content {
      padding: 0.875rem;
    }

    .greenfield-projects .project-card-tags {
      gap: 0.375rem;
      margin-bottom: 0.875rem;
    }

    .greenfield-projects .project-bottom-cta {
      padding: 1.125rem;
    }

    .greenfield-projects .project-mobile-button {
      min-height: 42px;
      padding: 0.625rem 1rem;
      font-size: 10px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .greenfield-projects *,
    .greenfield-projects *::before,
    .greenfield-projects *::after {
      scroll-behavior: auto !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    category: "Featured",
    title: "Crystal Gateway",
    location: "Sulur, Coimbatore",
    description:
      "An 805-plot residential community featuring a 3-acre cricket turf, clubhouse, and premium amenities.",
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1400",
    tags: ["805 Plots", "RERA Registered"],
    status: "Ready Project",
    linkLabel: "Explore Gateway",
  },
  {
    category: "Gated Layout",
    title: "Crown City",
    location: "Kovilpalayam",
    description:
      "A residential layout with 30 ft and 40 ft blacktop roads and loan assistance options.",
    image:
      "https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=1000",
    tags: ["DTCP", "Gated Community"],
    status: "Ongoing",
  },
  {
    category: "Premium",
    title: "Fairland",
    location: "Ponnigoundapudur",
    description:
      "A residential development featuring an indoor shuttle court, turf court, and access to NH 544 and NH 948.",
    image:
      "https://images.pexels.com/photos/2072473/pexels-photo-2072473.jpeg?auto=compress&cs=tinysrgb&w=1000",
    tags: ["RERA", "Turf Court"],
    status: "Ongoing",
  },
  {
    category: "Investment",
    title: "Silver City",
    location: "Karamadai Road",
    description:
      "Residential plots ranging from 1.5 to 5 cents, with 24/7 security and pricing information available on enquiry.",
    image:
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1000",
    tags: ["Residential Plots", "Security"],
    status: "Ongoing",
  },
  {
    category: "Community",
    title: "Opal Garden Phase IV",
    location: "Annur Taluk",
    description:
      "A residential layout featuring gated access, CCTV, and a dedicated children's play area.",
    image:
      "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1000",
    tags: ["RERA", "Community Living"],
    status: "Completed",
  },
  {
    category: "Upcoming",
    title: "Diamond Avenue",
    location: "Pattanam",
    description:
      "An upcoming residential plot development in Pattanam. Contact our team for project updates and availability.",
    image:
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1000",
    tags: ["Residential Plots", "Pattanam"],
    status: "Upcoming",
  },
];

const stats = [
  {
    value: "805",
    label: "Plots at Crystal Gateway",
    icon: Building2,
  },
  {
    value: "RERA",
    label: "Project Registration",
    icon: FileCheck,
  },
  {
    value: "3 Acres",
    label: "Cricket Turf at Gateway",
    icon: Trees,
  },
  {
    value: "24/7",
    label: "Security at Select Projects",
    icon: ShieldCheck,
  },
];

const PHONE_NUMBER = "+917395864774";

const whatsappLink = (message) =>
  `https://wa.me/${PHONE_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(
    message
  )}`;

/* =========================================================
   REVEAL HOOK
========================================================= */

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px 40px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

/* =========================================================
   REVEAL WRAPPER
========================================================= */

function Reveal({ children, className = "", delay = 0 }) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 600ms ease ${delay}ms, transform 600ms ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* =========================================================
   EYEBROW
========================================================= */

function Eyebrow({ children, light = false }) {
  return (
    <div
      className={`mb-2.5 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] sm:mb-3 sm:text-[10px] sm:tracking-[0.18em] ${
        light ? "text-[#b8d5bc]" : "text-[#4d8b58]"
      }`}
    >
      <span className="h-px w-5 bg-current sm:w-6" />
      {children}
    </div>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={Math.min(index * 70, 210)} className="h-full">
      <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-[#dce8da] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#b8cfb5] hover:shadow-[0_18px_45px_rgba(23,59,33,0.09)] sm:rounded-2xl lg:rounded-3xl">
        {/* Project image */}
        <a
          href="/projects"
          aria-label={`Explore ${project.title}`}
          className="relative block aspect-[4/3] overflow-hidden bg-[#e8eee5] sm:aspect-[5/4]"
        >
          <img
            src={project.image}
            alt={`${project.title} residential development`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#102d19]/90 via-[#102d19]/10 to-transparent" />

          <span className="absolute left-3 top-3 rounded-full border border-white/30 bg-[#173b21]/70 px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-sm sm:left-4 sm:top-4 sm:px-3 sm:text-[9px]">
            {project.category}
          </span>

          <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-2 sm:inset-x-5 sm:bottom-5 sm:gap-3">
            <div className="min-w-0">
              <p className="mb-1.5 flex items-center gap-1.5 text-[10px] text-white/85 sm:mb-2 sm:text-xs">
                <MapPin size={12} className="shrink-0 sm:h-[13px] sm:w-[13px]" />
                <span>{project.location}</span>
              </p>

              <h3 className="text-lg font-semibold leading-tight text-white sm:text-xl lg:text-2xl">
                {project.title}
              </h3>
            </div>

            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#173b21] transition-transform duration-300 group-hover:rotate-45 sm:h-10 sm:w-10 lg:h-11 lg:w-11">
              <ArrowUpRight size={17} />
            </span>
          </div>
        </a>

        {/* Project details */}
        <div className="project-card-content flex flex-1 flex-col p-3.5 sm:p-5 lg:p-6">
          <div className="mb-2.5 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#718072] sm:mb-3 sm:text-[10px] sm:tracking-[0.12em]">
            <Leaf size={12} className="shrink-0 text-[#4d8b58]" />
            <span>{project.status}</span>
          </div>

          <p className="text-xs leading-5 text-[#687568] sm:text-sm sm:leading-6">
            {project.description}
          </p>

          <div className="mt-auto pt-4 sm:pt-5">
            <div className="project-card-tags mb-4 flex flex-wrap gap-1.5 sm:mb-5 sm:gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#dce8da] bg-[#f5f8f3] px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.06em] text-[#47704f] sm:px-3 sm:text-[9px] sm:tracking-[0.08em]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="/projects"
              className="inline-flex min-h-9 items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-[#173b21] transition-colors hover:text-[#4d8b58] sm:min-h-10 sm:gap-2 sm:text-xs sm:tracking-[0.1em]"
            >
              View Project
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

/* =========================================================
   MAIN PROJECT SECTION
========================================================= */

export default function BlogSectionClassic() {
  const featured = projects[0];
  const remaining = projects.slice(1);

  return (
    <section
      id="projects"
      className="greenfield-projects relative isolate overflow-hidden bg-[#f5f8f3] py-10 sm:py-14 md:py-18 lg:py-24"
    >
      <style>{FONT_STYLES}</style>

      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-10 -z-10 h-64 w-64 rounded-full bg-[#cfe2cf]/50 blur-[90px] sm:h-96 sm:w-96 sm:blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[35%] -z-10 h-72 w-72 rounded-full bg-[#dcebd8]/70 blur-[95px] sm:h-[450px] sm:w-[450px] sm:blur-[110px]"
      />

      <div className="mx-auto w-full max-w-[1440px] px-3.5 sm:px-6 lg:px-10 xl:px-14">
        {/* Section header */}
        <Reveal className="project-section-header mb-8 grid gap-4 sm:mb-10 sm:gap-6 md:mb-12 lg:mb-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4e3d1] bg-white px-3 py-1.5 sm:mb-5 sm:px-4 sm:py-2">
              <Leaf size={14} className="text-[#4d8b58]" />
              <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-[#3d6d47] sm:text-[10px] sm:tracking-[0.17em]">
                Greenfield Projects
              </span>
            </div>

            <h2 className="max-w-3xl text-[28px] font-semibold leading-[1.12] tracking-tight text-[#173b21] sm:text-4xl md:text-5xl lg:text-6xl">
              Layouts crafted for
              <span className="block text-[#4d8b58]">
                better living.
              </span>
            </h2>
          </div>

          <div className="max-w-xl lg:justify-self-end">
            <p className="text-xs leading-6 text-[#687568] sm:text-sm sm:leading-7 lg:text-base">
              Explore Greenfield residential communities across Coimbatore.
              Discover project locations, layouts, infrastructure, and
              amenities to help you choose a property that suits your needs.
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
              {[
                "Residential Plots",
                "Gated Communities",
                "Project Enquiries",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#d8e5d5] bg-white px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.05em] text-[#55705a] sm:px-4 sm:py-2 sm:text-[9px] sm:tracking-[0.08em]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Statistics */}
        <Reveal className="mb-9 grid grid-cols-2 overflow-hidden rounded-xl border border-[#dce8da] bg-white shadow-sm sm:mb-12 sm:rounded-2xl lg:mb-16 lg:grid-cols-4 lg:rounded-3xl">
          {stats.map(({ value, label, icon: Icon }, index) => (
            <div
              key={label}
              className={`project-stat flex min-w-0 items-center gap-2.5 p-3 sm:gap-4 sm:p-5 lg:p-6 ${
                index % 2 === 0 ? "border-r border-[#e8efe6]" : ""
              } ${
                index < 2 ? "border-b border-[#e8efe6] lg:border-b-0" : ""
              } ${
                index === 1 ? "lg:border-r" : ""
              } ${
                index === 3 ? "lg:border-r-0" : ""
              }`}
            >
              <span className="project-stat-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#edf5eb] text-[#4d8b58] sm:h-12 sm:w-12 sm:rounded-2xl">
                <Icon size={18} />
              </span>

              <div className="min-w-0">
                <p className="break-words text-base font-semibold leading-tight text-[#173b21] sm:text-2xl">
                  {value}
                </p>
                <p className="mt-1 text-[8px] font-semibold leading-4 text-[#718072] sm:text-[10px]">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </Reveal>

        {/* Featured project */}
        <Reveal className="mb-9 overflow-hidden rounded-xl bg-[#173b21] shadow-[0_20px_55px_rgba(23,59,33,0.12)] sm:mb-12 sm:rounded-2xl lg:mb-16 lg:rounded-3xl">
          <article className="grid min-w-0 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Featured image */}
            <a
              href="/projects"
              aria-label="Explore Crystal Gateway"
              className="project-featured-image group relative block min-h-[250px] overflow-hidden bg-[#244b2e] sm:min-h-[380px] lg:min-h-[520px]"
            >
              <img
                src={featured.image}
                alt={`${featured.title} residential project`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#102d19]/90 via-[#102d19]/15 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#102d19]/10 lg:to-[#173b21]/50" />

              <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-[#173b21]/60 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.1em] text-white backdrop-blur-sm sm:left-7 sm:top-7 sm:gap-2 sm:px-4 sm:py-2 sm:text-[9px] sm:tracking-[0.14em]">
                <Building2 size={13} />
                Signature Project
              </span>

              <div className="absolute bottom-5 left-4 right-4 sm:bottom-8 sm:left-7 sm:right-7 lg:bottom-10">
                <p className="mb-2 flex items-center gap-1.5 text-xs text-white/85 sm:mb-3 sm:gap-2 sm:text-sm">
                  <MapPin size={14} />
                  {featured.location}
                </p>

                <h2 className="text-2xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                  {featured.title}
                </h2>
              </div>
            </a>

            {/* Featured details */}
            <div className="project-featured-details flex min-w-0 flex-col justify-between p-4 sm:p-7 md:p-9 lg:p-10 xl:p-12">
              <div>
                <Eyebrow light>Premium Community</Eyebrow>

                <h3 className="max-w-lg text-xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
                  Designed around the way you want to live.
                </h3>

                <p className="mt-3 text-xs leading-6 text-[#c0d1c2] sm:mt-5 sm:text-base sm:leading-7">
                  {featured.description}
                </p>
              </div>

              <div className="mt-5 sm:mt-9">
                <div className="mb-4 grid grid-cols-2 gap-2 sm:mb-6 sm:gap-3">
                  {featured.tags.map((tag) => (
                    <div
                      key={tag}
                      className="flex min-h-12 items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.05] p-2.5 text-[10px] font-semibold text-[#d9e8da] sm:min-h-16 sm:gap-2 sm:rounded-xl sm:p-4 sm:text-xs"
                    >
                      <CheckCircle2
                        size={14}
                        className="shrink-0 text-[#b8d5bc]"
                      />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="/projects"
                  className="project-mobile-button inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[#173b21] transition-colors hover:bg-[#edf5eb] sm:min-h-12 sm:px-7 sm:py-3 sm:text-xs sm:tracking-[0.12em]"
                >
                  Explore Gateway
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Portfolio heading */}
        <Reveal className="mb-6 flex flex-col gap-3 sm:mb-9 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
          <div>
            <Eyebrow>Discover More</Eyebrow>

            <h3 className="text-xl font-semibold tracking-tight text-[#173b21] sm:text-3xl lg:text-4xl">
              Explore Our Portfolio.
            </h3>

            <p className="mt-2 max-w-xl text-xs leading-5 text-[#718072] sm:text-sm sm:leading-6">
              Browse more developments and find a location that matches your
              plans.
            </p>
          </div>

          <a
            href="/projects"
            className="inline-flex min-h-9 w-fit items-center gap-2 text-[10px] font-bold uppercase tracking-[0.08em] text-[#376944] transition-colors hover:text-[#173b21] sm:min-h-10 sm:text-xs sm:tracking-[0.1em]"
          >
            View All Projects
            <ArrowUpRight size={15} />
          </a>
        </Reveal>

        {/* Responsive project grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 xl:gap-7">
          {remaining.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal className="project-bottom-cta relative mt-9 overflow-hidden rounded-xl border border-[#d4e5d0] bg-[#e5f0e2] p-4 sm:mt-14 sm:rounded-2xl sm:p-8 md:p-10 lg:mt-20 lg:rounded-3xl lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 h-40 w-40 rounded-full border-[20px] border-white/30 sm:h-64 sm:w-64 sm:border-[35px]"
          />

          <div className="relative z-10 grid gap-5 sm:gap-6 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
            <div>
              <Eyebrow>Your Next Chapter</Eyebrow>

              <h3 className="max-w-3xl text-xl font-semibold leading-tight tracking-tight text-[#173b21] sm:text-3xl md:text-4xl lg:text-5xl">
                Find a plot that feels like it belongs to you.
              </h3>

              <p className="mt-3 max-w-2xl text-xs leading-6 text-[#607362] sm:mt-4 sm:text-sm sm:leading-7">
                Looking for your next property? Talk to our team about
                available projects, locations, and arranging a site visit.
              </p>
            </div>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3 lg:flex-col xl:flex-row">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="project-mobile-button inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#173b21] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#285b33] sm:min-h-12 sm:px-7 sm:text-xs sm:tracking-[0.1em]"
              >
                Call Our Team
                <ArrowUpRight size={16} />
              </a>

              <a
                href={whatsappLink(
                  "Hi Greenfield Housing, I would like to know more about your residential projects and arrange a site visit."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="project-mobile-button inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#c5d9c1] bg-white/70 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.08em] text-[#173b21] transition-colors hover:bg-white sm:min-h-12 sm:px-7 sm:text-xs sm:tracking-[0.1em]"
              >
                WhatsApp Enquiry
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}