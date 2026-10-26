import React, { useCallback, useEffect, useRef, useState } from "react";
import AboutImage from "../../assests/team/herosection/cubehero3.webp";

const coreValues = [
  {
    num: "01",
    title: "Integrity",
    desc: "Delivering officially approved layouts and maintaining clear legal standards.",
    keyword: "TRANSPARENCY",
  },
  {
    num: "02",
    title: "Innovation",
    desc: "Integrating modern amenities like underground cables and extensive sports facilities.",
    keyword: "MODERN PLANNING",
  },
  {
    num: "03",
    title: "Sustainability",
    desc: "Prioritizing green living with landscaped gardens and rainwater harvesting systems.",
    keyword: "GREEN LIVING",
  },
  {
    num: "04",
    title: "Community Focus",
    desc: "Building gated environments with security and dedicated spaces for families.",
    keyword: "BETTER LIFESTYLE",
  },
];

const highlights = [
  {
    number: "01",
    title: "Premium Plots",
    desc: "Residential plots ranging from 1.5 cents up to 2,400 sq.ft.",
  },
  {
    number: "02",
    title: "Community Scale",
    desc: "Expansive developments, including the 805-plot Crystal Gateway.",
  },
  {
    number: "03",
    title: "Strategic Locations",
    desc: "Developments across Coimbatore areas like Sulur, Annur, and Kovilpalayam.",
  },
];

const milestones = [
  {
    tag: "SULUR",
    title: "Crystal Gateway",
    desc: "805 plots with a 3-acre cricket turf and grand clubhouse.",
    status: "Flagship Development",
  },
  {
    tag: "PONNIGOUNDAPUDUR",
    title: "Fairland",
    desc: "Gated community with an indoor shuttle court and commercial complex.",
    status: "Residential Community",
  },
  {
    tag: "ANNUR",
    title: "Opal Garden IV",
    desc: "RERA-registered layout with street lighting and park access.",
    status: "Registered Layout",
  },
  {
    tag: "KOVILPALAYAM",
    title: "Crown City",
    desc: "DTCP-approved layout on Sathy Main Road with 30ft and 40ft roads.",
    status: "Approved Layout",
  },
  {
    tag: "KARAMADAI ROAD",
    title: "Silver City",
    desc: "Residential plots with individual water pipelines, from ₹7.50L.",
    status: "Plotted Development",
  },
  {
    tag: "PATTANAM",
    title: "Diamond Avenue",
    desc: "Upcoming residential plotted development project.",
    status: "Upcoming Development",
  },
];

const legalItems = [
  {
    number: "01",
    title: "RERA Registration",
    subtitle: "Project registration references",
    details: [
      "Crystal Gateway: TN11//Layout/0360/2025",
      "Opal Garden IV: TNRERA/11/LO/3358/2026",
      "Fairland: TN/11/Layout/1405/2023",
    ],
  },
  {
    number: "02",
    title: "DTCP Approvals",
    subtitle: "Layout approval references",
    details: [
      "Silver City: Layout No. 58/2025",
      "Crown City: Official Approved Layout",
      "Fairland: Approved DTCP Layout",
    ],
  },
  {
    number: "03",
    title: "Banking Assistance",
    subtitle: "Financing support",
    details: [
      "Loan assistance may be available up to 80%, subject to lender eligibility and approval.",
      "Confirm title documents, project approvals, and loan eligibility before purchase.",
    ],
  },
];

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    if (typeof IntersectionObserver === "undefined") {
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
        inView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}) {
  return (
    <div className="mb-6 flex flex-col gap-3 border-b border-slate-200 pb-5 sm:mb-8 sm:flex-row sm:items-end sm:justify-between sm:gap-5 sm:pb-6">
      <div className="min-w-0">
        <span
          className={`font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.18em] sm:text-[11px] sm:tracking-[0.2em] ${
            light ? "text-[#e4c98d]" : "text-[#9b7d43]"
          }`}
        >
          {eyebrow}
        </span>

        <h2
          className={`mt-2 font-['Poppins',sans-serif] text-2xl font-semibold leading-tight tracking-[-0.035em] sm:mt-3 sm:text-3xl lg:text-4xl ${
            light ? "text-white" : "text-slate-900"
          }`}
        >
          {title}
        </h2>
      </div>

      {description && (
        <p
          className={`max-w-lg font-['Montserrat',sans-serif] text-xs leading-5 sm:text-sm sm:leading-6 ${
            light ? "text-white/65" : "text-slate-500"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const [drift, setDrift] = useState({ x: 0, y: 0 });

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleSectionMove = useCallback((event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const element = sectionRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();

    setDrift({
      x: (event.clientX - rect.left) / rect.width - 0.5,
      y: (event.clientY - rect.top) / rect.height - 0.5,
    });
  }, []);

  const handleSectionLeave = useCallback(() => {
    setDrift({ x: 0, y: 0 });
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      onMouseMove={handleSectionMove}
      onMouseLeave={handleSectionLeave}
      className="about-section relative w-full overflow-hidden bg-[#f8f8f5] py-9 text-slate-800 antialiased sm:py-12 md:py-16 lg:py-20"
    >
      {/* Architectural Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#052e16 1px, transparent 1px), linear-gradient(90deg, #052e16 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-emerald-200/25 blur-[100px] transition-transform duration-500 ease-out sm:h-96 sm:w-96"
        style={{
          transform: `translate3d(${drift.x * 18}px, ${drift.y * 18}px, 0)`,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-3 sm:px-6 md:px-10 lg:px-14 xl:px-20">
        {/* Company Header */}
        <Reveal className="border-b border-slate-200/90 pb-7 sm:pb-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 border border-slate-200 bg-white px-2.5 py-2 sm:gap-3 sm:px-3">
                <span className="h-1.5 w-1.5 bg-[#b79a5b] sm:h-2 sm:w-2" />

                <span className="font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.14em] text-emerald-950 sm:text-[11px] sm:tracking-[0.2em]">
                  About Greenfield Housing India
                </span>
              </div>

              <h1 className="mt-4 font-['Poppins',sans-serif] text-[clamp(1.8rem,5vw,3.75rem)] font-semibold leading-[1.15] tracking-[-0.045em] text-slate-900 sm:mt-5">
                We Build Communities,
                <span className="block text-emerald-800">
                  Not Just Layouts.
                </span>
              </h1>

              <p className="mt-4 max-w-3xl font-['Montserrat',sans-serif] text-xs leading-6 text-slate-600 sm:mt-5 sm:text-sm sm:leading-7">
                We develop residential plotted communities across the greater
                Coimbatore region, bringing together thoughtful planning,
                essential infrastructure, and a commitment to transparent
                property development.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3 lg:w-[400px] lg:shrink-0">
              <div className="border border-slate-200 bg-white p-4 sm:p-5">
                <span className="font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.15em] text-[#9b7d43] sm:text-[10px]">
                  Regional Presence
                </span>

                <p className="mt-2 font-['Poppins',sans-serif] text-lg font-semibold text-slate-900 sm:mt-3 sm:text-xl">
                  Coimbatore
                </p>

                <p className="mt-1.5 font-['Montserrat',sans-serif] text-[11px] leading-5 text-slate-500 sm:text-xs sm:leading-6">
                  Sulur, Annur, S.S. Kulam and Kovilpalayam
                </p>
              </div>

              <div className="border border-slate-200 bg-white p-4 sm:p-5">
                <span className="font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.15em] text-[#9b7d43] sm:text-[10px]">
                  Development Focus
                </span>

                <p className="mt-2 font-['Poppins',sans-serif] text-lg font-semibold text-slate-900 sm:mt-3 sm:text-xl">
                  Planned Living
                </p>

                <p className="mt-1.5 font-['Montserrat',sans-serif] text-[11px] leading-5 text-slate-500 sm:text-xs sm:leading-6">
                  Residential layouts, infrastructure and community amenities
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Company Story */}
        <Reveal delay={60} className="my-7 sm:my-10 md:my-14">
          <div className="overflow-hidden border border-slate-200 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="relative min-h-[260px] overflow-hidden border-b border-slate-200 bg-slate-100 sm:min-h-[360px] lg:col-span-5 lg:min-h-[560px] lg:border-b-0 lg:border-r">
                <img
                  src={AboutImage}
                  alt="Greenfield Housing India residential communities"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071b13]/85 via-transparent to-[#071b13]/10" />

                <div className="absolute left-3 top-3 border border-white/50 bg-white/95 px-2.5 py-2 sm:left-5 sm:top-5 sm:px-3">
                  <span className="font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.15em] text-slate-900">
                    Our Approach
                  </span>
                </div>

                <div className="absolute bottom-5 left-4 right-4 sm:bottom-8 sm:left-8">
                  <span className="font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.15em] text-[#e4c98d] sm:text-[10px] sm:tracking-[0.2em]">
                    Planning · Infrastructure · Community
                  </span>

                  <h2 className="mt-2 max-w-md font-['Poppins',sans-serif] text-2xl font-semibold leading-tight text-white sm:mt-3 sm:text-3xl lg:text-4xl">
                    A better foundation for everyday living.
                  </h2>
                </div>
              </div>

              <div className="flex flex-col justify-center p-4 sm:p-7 md:p-9 lg:col-span-7 lg:p-10 xl:p-12">
                <span className="font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.16em] text-emerald-800 sm:text-xs sm:tracking-[0.2em]">
                  Our Genesis & Practice
                </span>

                <h2 className="mt-3 font-['Poppins',sans-serif] text-2xl font-semibold leading-tight tracking-[-0.035em] text-slate-900 sm:mt-4 sm:text-3xl lg:text-4xl">
                  Transforming Open Land into Planned Neighbourhoods.
                </h2>

                <p className="mt-4 font-['Montserrat',sans-serif] text-xs leading-6 text-slate-600 sm:mt-5 sm:text-sm sm:leading-7">
                  Our approach to residential development focuses on combining
                  practical planning with infrastructure designed to support
                  everyday needs. This includes road networks, individual water
                  distribution, underground cabling, and stormwater drainage.
                </p>

                <p className="mt-3 font-['Montserrat',sans-serif] text-xs leading-6 text-slate-600 sm:mt-4 sm:text-sm sm:leading-7">
                  From the 805-plot Crystal Gateway development in Sulur to the
                  gated community concept at Fairland in Ponnigoundapudur, our
                  portfolio reflects a focus on planned spaces, community
                  amenities, and residential convenience.
                </p>

                <div className="mt-5 grid grid-cols-1 gap-2.5 sm:mt-7 sm:grid-cols-3 sm:gap-3">
                  {highlights.map((item) => (
                    <div
                      key={item.title}
                      className="group border border-slate-200 bg-[#fafaf8] p-3.5 transition-colors hover:border-[#b79a5b] hover:bg-white sm:p-4"
                    >
                      <span className="font-['Montserrat',sans-serif] text-[9px] font-bold tracking-[0.16em] text-[#9b7d43]">
                        {item.number}
                      </span>

                      <h3 className="mt-2 font-['Poppins',sans-serif] text-base font-semibold text-slate-900 sm:mt-3 sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 font-['Montserrat',sans-serif] text-[11px] leading-5 text-slate-500 sm:mt-2 sm:text-xs sm:leading-6">
                        {item.desc}
                      </p>

                      <div className="mt-3 h-px w-7 bg-[#b79a5b] transition-all duration-300 group-hover:w-full sm:mt-4" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-slate-200 bg-[#fafaf8] p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 sm:py-5">
              <p className="font-['Montserrat',sans-serif] text-xs leading-5 text-slate-600 sm:max-w-xl sm:text-sm sm:leading-6">
                Arrange a site visit to understand the layout, infrastructure,
                and available plots.
              </p>

              <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
                <button
                  type="button"
                  onClick={() => scrollToSection("about-projects")}
                  className="inline-flex min-h-10 items-center justify-center gap-3 bg-emerald-900 px-4 py-2.5 font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#b79a5b] hover:text-slate-950 sm:min-h-11 sm:gap-4 sm:px-5 sm:text-[10px] sm:tracking-[0.14em]"
                >
                  <span>Explore Developments</span>
                  <span aria-hidden="true">→</span>
                </button>

                <a
                  href="tel:+917395864774"
                  className="inline-flex min-h-10 items-center justify-center gap-3 border border-slate-300 bg-white px-4 py-2.5 font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.1em] text-slate-800 transition-colors hover:border-emerald-900 hover:text-emerald-900 sm:min-h-11 sm:px-5 sm:text-[10px] sm:tracking-[0.14em]"
                >
                  Call Our Team
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Mission and Vision */}
        <div className="mb-9 grid grid-cols-1 gap-3 sm:mb-12 sm:gap-5 lg:mb-14 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col justify-between border border-slate-200 bg-white p-5 sm:p-7 lg:p-9">
              <div>
                <span className="font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.16em] text-[#9b7d43] sm:text-[10px] sm:tracking-[0.2em]">
                  01 / Our Mission
                </span>

                <h3 className="mt-3 font-['Poppins',sans-serif] text-2xl font-semibold leading-tight text-slate-900 sm:mt-5 sm:text-3xl">
                  Reliable Masterplans Built for Practical Living.
                </h3>

                <p className="mt-3 font-['Montserrat',sans-serif] text-xs leading-6 text-slate-600 sm:mt-4 sm:text-sm sm:leading-7">
                  To develop residential communities with considered
                  infrastructure, including 30ft to 40ft roads, stormwater
                  channels, and utility networks that support day-to-day living.
                </p>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-4 sm:mt-7 sm:pt-5">
                <span className="font-['Montserrat',sans-serif] text-[11px] text-slate-500 sm:text-xs">
                  Infrastructure planning
                </span>

                <span className="font-['Montserrat',sans-serif] text-[11px] font-bold text-emerald-900 sm:text-xs">
                  30 FT — 40 FT Roads
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={70}>
            <div className="flex h-full flex-col justify-between border border-slate-200 bg-[#071b13] p-5 text-white sm:p-7 lg:p-9">
              <div>
                <span className="font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.16em] text-[#e4c98d] sm:text-[10px] sm:tracking-[0.2em]">
                  02 / Our Vision
                </span>

                <h3 className="mt-3 font-['Poppins',sans-serif] text-2xl font-semibold leading-tight text-white sm:mt-5 sm:text-3xl">
                  Vibrant Environments for Well-Being and Growth.
                </h3>

                <p className="mt-3 font-['Montserrat',sans-serif] text-xs leading-6 text-white/70 sm:mt-4 sm:text-sm sm:leading-7">
                  To shape welcoming residential environments with recreational
                  areas, cricket turfs, outdoor fitness spaces, and landscaped
                  gardens that bring people together.
                </p>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-white/15 pt-4 sm:mt-7 sm:pt-5">
                <span className="font-['Montserrat',sans-serif] text-[11px] text-white/60 sm:text-xs">
                  Community-led planning
                </span>

                <span className="font-['Montserrat',sans-serif] text-[11px] font-bold text-[#e4c98d] sm:text-xs">
                  Spaces to Connect
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Core Values */}
        <Reveal className="mb-9 sm:mb-12 lg:mb-14">
          <div className="border border-slate-200 bg-white p-4 sm:p-7 lg:p-9">
            <SectionHeading
              eyebrow="Operating Principles"
              title="The Values Behind Our Work."
              description="Legal transparency, infrastructure planning, and community experience are central to our development approach."
            />

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3 xl:grid-cols-4">
              {coreValues.map((value) => (
                <div
                  key={value.title}
                  className="group flex h-full flex-col border border-slate-200 bg-[#fafaf8] p-4 transition-colors duration-300 hover:border-[#b79a5b] hover:bg-white sm:p-5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.12em] text-[#9b7d43] sm:text-[10px] sm:tracking-[0.16em]">
                      {value.keyword}
                    </span>

                    <span className="font-['Montserrat',sans-serif] text-xs font-medium text-slate-400">
                      {value.num}
                    </span>
                  </div>

                  <h3 className="mt-4 font-['Poppins',sans-serif] text-xl font-semibold text-slate-900 sm:mt-6 sm:text-2xl">
                    {value.title}
                  </h3>

                  <p className="mt-2 flex-1 font-['Montserrat',sans-serif] text-xs leading-6 text-slate-600 sm:mt-3 sm:text-sm sm:leading-7">
                    {value.desc}
                  </p>

                  <div className="mt-4 h-px w-8 bg-[#b79a5b] transition-all duration-300 group-hover:w-full sm:mt-5" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Project Portfolio */}
        <Reveal className="mb-9 sm:mb-12 lg:mb-14">
          <div
            id="about-projects"
            className="scroll-mt-24 border border-slate-200 bg-white p-4 sm:p-7 lg:p-9"
          >
            <SectionHeading
              eyebrow="Regional Portfolio"
              title="Our Developments."
              description="Discover our residential projects across Coimbatore and nearby growth corridors."
            />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
              {milestones.map((item, index) => (
                <div
                  key={item.title}
                  className="group border border-slate-200 bg-[#fafaf8] p-4 transition-colors duration-300 hover:border-emerald-900/50 hover:bg-white sm:p-5"
                >
                  <div className="flex items-start justify-between gap-3 border-b border-slate-200 pb-3 sm:pb-4">
                    <div className="min-w-0">
                      <span className="font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.14em] text-[#9b7d43] sm:text-[10px] sm:tracking-[0.18em]">
                        {item.tag}
                      </span>

                      <h3 className="mt-2 font-['Poppins',sans-serif] text-xl font-semibold text-slate-900 sm:text-2xl">
                        {item.title}
                      </h3>
                    </div>

                    <span className="font-['Montserrat',sans-serif] text-xs font-medium text-slate-300 sm:text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-3 min-h-0 font-['Montserrat',sans-serif] text-xs leading-6 text-slate-600 sm:mt-4 sm:min-h-[60px] sm:text-sm">
                    {item.desc}
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-2 sm:mt-5">
                    <span className="border border-slate-200 bg-white px-2 py-1.5 font-['Montserrat',sans-serif] text-[8px] font-bold uppercase tracking-[0.06em] text-slate-600 sm:px-2.5 sm:py-2 sm:text-[9px] sm:tracking-[0.1em]">
                      {item.status}
                    </span>

                    <span
                      aria-hidden="true"
                      className="shrink-0 font-['Montserrat',sans-serif] text-lg text-emerald-900 transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Legal Transparency */}
        <Reveal className="mb-9 sm:mb-12 lg:mb-14">
          <div className="border border-slate-200 bg-[#f1f2ec] p-4 sm:p-7 lg:p-9">
            <div className="mb-6 max-w-3xl sm:mb-8">
              <span className="font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.16em] text-[#9b7d43] sm:text-[11px] sm:tracking-[0.2em]">
                Documentation & Due Diligence
              </span>

              <h2 className="mt-2 font-['Poppins',sans-serif] text-2xl font-semibold text-slate-900 sm:mt-3 sm:text-3xl lg:text-4xl">
                Transparency at Every Stage.
              </h2>

              <p className="mt-3 font-['Montserrat',sans-serif] text-xs leading-6 text-slate-600 sm:mt-4 sm:text-sm sm:leading-7">
                Review the applicable registration, layout approval, and
                financing documentation for the specific property before making
                a purchase decision.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-3">
              {legalItems.map((item) => (
                <div
                  key={item.number}
                  className="border border-slate-200 bg-white p-4 sm:p-6"
                >
                  <div className="flex items-start justify-between gap-3 border-b border-slate-200 pb-3 sm:pb-4">
                    <span className="font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.12em] text-[#9b7d43] sm:text-[10px] sm:tracking-[0.16em]">
                      {item.subtitle}
                    </span>

                    <span className="font-['Montserrat',sans-serif] text-xs text-slate-300 sm:text-sm">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-4 font-['Poppins',sans-serif] text-xl font-semibold text-slate-900 sm:mt-5 sm:text-2xl">
                    {item.title}
                  </h3>

                  <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
                    {item.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex gap-2.5 font-['Montserrat',sans-serif] text-xs leading-5 text-slate-600 sm:gap-3 sm:leading-6"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#b79a5b]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-4 font-['Montserrat',sans-serif] text-[10px] leading-5 text-slate-500 sm:mt-5 sm:text-[11px]">
              Registration numbers and approval details are reproduced from the
              supplied content and should be independently verified with the
              relevant authority before publication or purchase.
            </p>
          </div>
        </Reveal>

        {/* Developer and Promoter Information */}
        <div className="mb-9 grid grid-cols-1 gap-3 sm:mb-12 sm:gap-5 lg:mb-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="h-full border border-slate-200 bg-white p-4 sm:p-7 lg:p-9">
              <span className="font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.16em] text-[#9b7d43] sm:text-[11px] sm:tracking-[0.2em]">
                Corporate Ecosystem
              </span>

              <h2 className="mt-2 font-['Poppins',sans-serif] text-2xl font-semibold text-slate-900 sm:mt-3 sm:text-3xl">
                Promoters & Development Partners.
              </h2>

              <p className="mt-3 font-['Montserrat',sans-serif] text-xs leading-6 text-slate-600 sm:mt-4 sm:text-sm sm:leading-7">
                Our project portfolio includes developments associated with the
                following developer and promoter entities.
              </p>

              <div className="mt-5 space-y-3 sm:mt-7">
                <div className="border border-slate-200 bg-[#fafaf8] p-4 sm:p-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <div className="min-w-0">
                      <span className="font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.14em] text-[#9b7d43]">
                        Developer
                      </span>

                      <h3 className="mt-2 break-words font-['Poppins',sans-serif] text-lg font-semibold text-slate-900 sm:text-xl">
                        Greenfield Housing India Pvt. Ltd.
                      </h3>

                      <p className="mt-2 font-['Montserrat',sans-serif] text-xs leading-5 text-slate-500 sm:leading-6">
                        Primary developer of Opal Garden and Fairland,
                        according to the supplied company profile.
                      </p>
                    </div>

                    <span className="self-start border border-slate-200 bg-white px-2.5 py-2 font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.1em] text-emerald-900 sm:self-center sm:px-3 sm:tracking-[0.14em]">
                      Developer
                    </span>
                  </div>
                </div>

                <div className="border border-slate-200 bg-[#fafaf8] p-4 sm:p-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <div className="min-w-0">
                      <span className="font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.14em] text-[#9b7d43]">
                        Promoter
                      </span>

                      <h3 className="mt-2 font-['Poppins',sans-serif] text-lg font-semibold text-slate-900 sm:text-xl">
                        Terra Field Realtors
                      </h3>

                      <p className="mt-2 font-['Montserrat',sans-serif] text-xs leading-5 text-slate-500 sm:leading-6">
                        Promoter and marketing entity for Crystal Gateway,
                        according to the supplied company profile.
                      </p>
                    </div>

                    <span className="self-start border border-slate-200 bg-white px-2.5 py-2 font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.1em] text-emerald-900 sm:self-center sm:px-3 sm:tracking-[0.14em]">
                      Promoter
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={70} className="lg:col-span-5">
            <div className="flex h-full flex-col justify-between bg-[#071b13] p-5 text-white sm:p-7 lg:p-9">
              <div>
                <span className="font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.16em] text-[#e4c98d] sm:text-[10px] sm:tracking-[0.2em]">
                  Our Commitment
                </span>

                <h2 className="mt-3 font-['Poppins',sans-serif] text-2xl font-semibold leading-tight text-white sm:mt-4 sm:text-3xl">
                  Built for Long-Term Value.
                </h2>

                <p className="mt-3 font-['Montserrat',sans-serif] text-xs leading-6 text-white/70 sm:mt-4 sm:text-sm sm:leading-7">
                  We aim to support clients throughout their property journey,
                  from understanding plot availability and reviewing documents
                  to coordinating site visits and discussing registration
                  requirements.
                </p>
              </div>

              <div className="mt-6 border-t border-white/15 pt-4 sm:mt-9 sm:pt-5">
                <span className="font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.14em] text-white/50 sm:text-[10px] sm:tracking-[0.16em]">
                  Client Advisory Support
                </span>

                <p className="mt-2 font-['Montserrat',sans-serif] text-sm font-semibold text-[#e4c98d]">
                  Monday – Saturday
                </p>

                <p className="mt-1 font-['Montserrat',sans-serif] text-xs text-white/60">
                  09:00 AM – 07:00 PM
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Contact Banner */}
        <Reveal className="mb-2">
          <div className="relative overflow-hidden bg-[#071b13] p-5 text-white sm:p-8 lg:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                backgroundSize: "35px 35px",
              }}
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-emerald-700/25 blur-[80px] sm:h-72 sm:w-72 sm:blur-[100px]"
            />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-2.5 py-2 font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.14em] text-[#e4c98d] sm:gap-3 sm:px-3 sm:text-[10px] sm:tracking-[0.18em]">
                  <span className="h-1.5 w-1.5 bg-[#e4c98d]" />
                  Direct Consultation
                </span>

                <h2 className="mt-4 font-['Poppins',sans-serif] text-2xl font-semibold leading-tight tracking-[-0.035em] text-white sm:mt-5 sm:text-3xl lg:text-4xl">
                  Find the Right Plot for Your Future.
                </h2>

                <p className="mt-3 max-w-2xl font-['Montserrat',sans-serif] text-xs leading-6 text-white/65 sm:mt-4 sm:text-sm sm:leading-7">
                  Connect with our team for updated availability, current
                  pricing, project documentation, and guided site visits across
                  Coimbatore.
                </p>

                <div className="mt-5 flex flex-col gap-4 sm:mt-7 sm:flex-row sm:items-center sm:gap-8">
                  <div>
                    <span className="font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.15em] text-white/50 sm:text-[10px] sm:tracking-[0.18em]">
                      Direct Helpline
                    </span>

                    <a
                      href="tel:+917395864774"
                      className="mt-1.5 block font-['Poppins',sans-serif] text-xl font-semibold text-white transition-colors hover:text-[#e4c98d] sm:mt-2 sm:text-2xl"
                    >
                      +91 73958 64774
                    </a>
                  </div>

                  <div className="hidden h-10 w-px bg-white/20 sm:block" />

                  <div>
                    <span className="font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.15em] text-white/50 sm:text-[10px] sm:tracking-[0.18em]">
                      Headquarters
                    </span>

                    <p className="mt-1.5 font-['Montserrat',sans-serif] text-xs font-semibold text-white sm:mt-2 sm:text-sm">
                      Kalapatti, Coimbatore
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex w-full flex-col gap-2.5 sm:flex-row lg:w-auto lg:min-w-[220px] lg:flex-col">
                <a
                  href="tel:+917395864774"
                  className="inline-flex min-h-10 items-center justify-center gap-3 bg-[#e4c98d] px-4 py-3 font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.1em] text-[#102117] transition-colors hover:bg-white sm:min-h-12 sm:gap-4 sm:px-6 sm:py-4 sm:text-[10px] sm:tracking-[0.13em]"
                >
                  <span>Call Representative</span>
                  <span aria-hidden="true">↗</span>
                </a>

                <a
                  href="https://wa.me/917395864774?text=Hi%2C%20I%27m%20interested%20in%20your%20residential%20plot%20projects."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center justify-center gap-3 border border-white/25 bg-white/5 px-4 py-3 font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.1em] text-white transition-colors hover:border-[#e4c98d] hover:bg-white/10 sm:min-h-12 sm:gap-4 sm:px-6 sm:py-4 sm:text-[10px] sm:tracking-[0.13em]"
                >
                  <span>WhatsApp Enquiry</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Fonts and Accessibility */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap');

        .about-section {
          font-family: 'Montserrat', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        @media (prefers-reduced-motion: reduce) {
          .about-section *,
          .about-section *::before,
          .about-section *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}