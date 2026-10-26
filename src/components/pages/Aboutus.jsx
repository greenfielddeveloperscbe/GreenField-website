import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Award,
  ArrowRight,
  Building2,
  Ruler,
  CheckCircle2,
  Leaf,
  Users,
  Home,
  Calendar,
  Star,
  Shield,
  FileCheck,
  Phone,
  MessageCircle,
  Mail,
  UserCheck,
  TrendingUp,
  Target,
  Compass,
  Quote,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

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

function Reveal({ children, className = "", delay = 0, y = 40 }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        inView ? "translate-y-0 opacity-100" : "opacity-0"
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transform: inView ? "translateY(0)" : `translateY(${y}px)`,
      }}
    >
      {children}
    </div>
  );
}

// =====================================================
// ABOUT US PAGE
// =====================================================

export default function AboutUs() {
  const pageRef = useRef(null);
  const [drift, setDrift] = useState({ x: 0, y: 0 });

  const handleMove = useCallback((e) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const el = pageRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    setDrift({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  }, []);

  const handleLeave = useCallback(() => {
    setDrift({ x: 0, y: 0 });
  }, []);

  // =====================================================
  // DATA
  // =====================================================

  const stats = [
    { value: "20+", label: "Projects Delivered", sub: "Coimbatore & Erode" },
    { value: "1000+", label: "Acres Developed", sub: "Prime Locations" },
    { value: "10L+", label: "Sq.Ft. Constructed", sub: "Premium Quality" },
    { value: "15K+", label: "Happy Families", sub: "Since 2012" },
  ];

  const coreValues = [
    {
      icon: Shield,
      title: "Integrity",
      desc: "Staying true to our commitments with honesty and transparency in every dealing — from booking to handover.",
      number: "01",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      desc: "Constantly evolving with creative and forward-thinking solutions for modern living and community design.",
      number: "02",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      desc: "Building homes with respect for nature and future generations — green spaces, smart design, lasting value.",
      number: "03",
    },
    {
      icon: Home,
      title: "Customer Focus",
      desc: "Your needs are at the heart of everything we do — from the first site visit to years after possession.",
      number: "04",
    },
  ];

  const milestones = [
    {
      year: "2012",
      title: "Founded in Erode",
      desc: "Vision to redefine real estate in Tamil Nadu.",
    },
    {
      year: "2012",
      title: "Entered Coimbatore",
      desc: "Expanded operations to transform the sector.",
    },
    {
      year: "2012",
      title: "First Gated Community",
      desc: "Launched Natchatra Homes — our first gated project.",
    },
    {
      year: "2016",
      title: "4 Projects Delivered",
      desc: "Delivered 4 gated communities in record time.",
    },
    {
      year: "2017",
      title: "Maple Project",
      desc: "First luxury gated community in Kalapatti.",
    },
    {
      year: "2020",
      title: "CREDAI Award",
      desc: "First developer in Coimbatore honoured for environment-friendly projects.",
    },
    {
      year: "2022",
      title: "COVID Relief",
      desc: "Donated ₹1 crore to CM's relief fund.",
    },
    {
      year: "2025",
      title: "Lavender Project",
      desc: "Launched our prestigious landmark project in Saravanampatti.",
    },
    {
      year: "2025",
      title: "Crystal Gateway",
      desc: "RERA-registered 805-plot community in Sulur.",
    },
    {
      year: "2040",
      title: "Integrated City",
      desc: "Mission to complete an integrated city.",
    },
  ];

  const trustSignals = [
    {
      icon: Shield,
      title: "RERA Registered",
      desc: "Crystal Gateway (TN/11/Layout/0360/2025) and Fairland (TN/11/Layout/1405/2023) are fully RERA-registered.",
      accent: "emerald",
    },
    {
      icon: Award,
      title: "CREDAI Awarded",
      desc: "First developer in Coimbatore to receive CREDAI award for environment-friendly quality projects.",
      accent: "amber",
    },
    {
      icon: FileCheck,
      title: "DTCP Approved",
      desc: "Silver City (DTCP No. 58/2025) and Crown City are fully DTCP-approved residential layouts.",
      accent: "sky",
    },
  ];

  const leadership = [
    {
      name: "Mr. V. Sadhasivam",
      role: "Chairman",
      initials: "VS",
      quote:
        "Every home we build carries a promise — of quality, trust, and lasting value.",
    },
    {
      name: "Shri. C. K. Balasubramaniyam",
      role: "Managing Director",
      initials: "CB",
      quote:
        "We don't just build structures. We craft communities where families thrive.",
    },
  ];

  return (
    <main
      ref={pageRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="about-us-page relative w-full overflow-hidden bg-[#f7f8f5]"
    >
      {/* GLOBAL TYPOGRAPHY */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap');

        .about-us-page {
          font-family: 'Montserrat', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        .about-us-page [class*="font-['Poppins'"] {
          font-family: 'Poppins', sans-serif;
        }

        .about-us-page [class*="font-['Montserrat'"] {
          font-family: 'Montserrat', sans-serif;
        }

        .about-us-page a,
        .about-us-page button {
          -webkit-tap-highlight-color: transparent;
        }

        @media (prefers-reduced-motion: reduce) {
          .about-us-page *,
          .about-us-page *::before,
          .about-us-page *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#0a1f14] py-14 text-white sm:py-20 md:py-28 lg:py-40">
        {/* Layered gradient orbs */}
        <div
          className="pointer-events-none absolute -left-40 -top-40 h-[300px] w-[300px] rounded-full bg-emerald-500/15 blur-[100px] sm:h-[600px] sm:w-[600px] sm:blur-[140px]"
          style={{
            transform: `translate3d(${drift.x * -50}px, ${drift.y * -50}px, 0)`,
          }}
        />

        <div
          className="pointer-events-none absolute -right-40 bottom-0 h-[350px] w-[350px] rounded-full bg-amber-500/10 blur-[110px] sm:h-[700px] sm:w-[700px] sm:blur-[160px]"
          style={{
            transform: `translate3d(${drift.x * 60}px, ${drift.y * 60}px, 0)`,
          }}
        />

        {/* Fine grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Decorative ring */}
        <div
          className="pointer-events-none absolute right-[5%] top-[10%] h-24 w-24 rounded-full border border-white/10 sm:right-[8%] sm:top-[12%] sm:h-40 sm:w-40"
          style={{
            transform: `translate3d(${drift.x * 40}px, ${drift.y * 40}px, 0)`,
          }}
        >
          <div className="absolute inset-3 rounded-full border border-emerald-400/20 sm:inset-4" />
          <div className="absolute inset-6 rounded-full bg-emerald-400/5 blur-md sm:inset-10" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-4 min-[420px]:px-5 sm:px-8 lg:px-16 xl:px-20">
          {/* Breadcrumb */}
          <nav className="mb-7 flex items-center gap-2.5 font-body text-[9px] font-bold uppercase tracking-[0.15em] text-emerald-200/70 sm:mb-10 sm:gap-3 sm:text-[11px] sm:tracking-[0.22em]">
            <a href="/" className="transition hover:text-white">
              Home
            </a>

            <span className="h-px w-4 bg-emerald-300/40 sm:w-6" />

            <span className="text-white">About Us</span>
          </nav>

          <div className="grid gap-8 sm:gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            {/* LEFT: HEADING */}
            <div>
              <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-2 backdrop-blur sm:mb-8 sm:gap-3 sm:px-5 sm:py-2.5">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <span className="font-['Poppins',sans-serif] text-[8px] font-black uppercase tracking-[0.12em] text-emerald-100 sm:text-[10px] sm:tracking-[0.22em]">
                  Greenfield Housing India · Est. 2012
                </span>
              </div>

              <h1 className="font-['Poppins',sans-serif] text-[38px] font-black leading-[0.98] tracking-[-0.04em] min-[420px]:text-[44px] sm:text-[58px] md:text-[76px] lg:text-[88px]">
                We Build
                <br />

                <span className="bg-gradient-to-r from-emerald-300 via-emerald-200 to-amber-200 bg-clip-text text-transparent">
                  Homes,
                </span>{" "}
                Not
                <br />

                <span className="italic font-light text-emerald-100/90">
                  Houses.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl font-['Montserrat',sans-serif] text-sm font-medium leading-6 text-emerald-50/70 sm:mt-8 sm:text-base sm:leading-relaxed md:text-lg">
                For over a decade, Greenfield Housing India has been crafting
                premium apartments, luxury villas, and RERA-registered
                residential communities across Coimbatore and Erode — blending
                modern comfort with nature's embrace.
              </p>
            </div>

            {/* RIGHT: CTA + COMPANY INFORMATION */}
            <div className="lg:pl-8">
              <div className="mb-6 space-y-3 border-l-2 border-emerald-400/30 pl-4 sm:mb-8 sm:space-y-4 sm:pl-6">
                <div>
                  <p className="font-['Poppins',sans-serif] text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-300/70 sm:text-[10px] sm:tracking-[0.22em]">
                    Serving
                  </p>

                  <p className="mt-1 font-['Poppins',sans-serif] text-base font-black text-white sm:text-lg">
                    Coimbatore &amp; Erode
                  </p>
                </div>

                <div>
                  <p className="font-['Poppins',sans-serif] text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-300/70 sm:text-[10px] sm:tracking-[0.22em]">
                    Recognized by
                  </p>

                  <p className="mt-1 font-['Poppins',sans-serif] text-base font-black text-white sm:text-lg">
                    CREDAI · RERA · DTCP
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 min-[420px]:flex-row sm:gap-3">
                <a
                  href="/allprojects"
                  className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-emerald-400 px-5 py-3 font-['Poppins',sans-serif] text-xs font-bold text-emerald-950 shadow-xl shadow-emerald-500/20 transition-all hover:-translate-y-1 hover:bg-emerald-300 sm:min-h-12 sm:gap-3 sm:px-7 sm:py-4 sm:text-sm"
                >
                  Explore Projects
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="tel:+917395864774"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 font-['Poppins',sans-serif] text-xs font-bold text-white backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/10 sm:min-h-12 sm:gap-3 sm:px-7 sm:py-4 sm:text-sm"
                >
                  <Phone className="h-4 w-4" />
                  Call Vetri
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS STRIP
      ===================================================== */}

      <section className="relative -mt-8 sm:-mt-14 md:-mt-20">
        <div className="relative z-20 mx-auto w-full max-w-[1500px] px-4 min-[420px]:px-5 sm:px-8 lg:px-16 xl:px-20">
          <Reveal>
            <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_25px_80px_-30px_rgba(15,60,35,0.25)] sm:rounded-3xl md:grid-cols-4 md:rounded-[2rem]">
              {stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`relative p-3.5 transition-all duration-300 hover:bg-emerald-50/50 min-[420px]:p-4 sm:p-6 md:p-8 ${
                    idx !== stats.length - 1 ? "border-r border-slate-100" : ""
                  } ${idx < 2 ? "border-b border-slate-100 md:border-b-0" : ""}`}
                >
                  <div className="flex items-baseline gap-1">
                    <span className="font-['Poppins',sans-serif] text-3xl font-black leading-none tracking-tight text-emerald-700 min-[420px]:text-4xl md:text-5xl">
                      {stat.value}
                    </span>
                  </div>

                  <p className="mt-2 font-['Poppins',sans-serif] text-[9px] font-black uppercase leading-4 tracking-[0.08em] text-slate-800 sm:mt-3 sm:text-[11px] sm:leading-normal sm:tracking-[0.14em]">
                    {stat.label}
                  </p>

                  <p className="mt-1 font-['Montserrat',sans-serif] text-[8px] font-medium uppercase leading-4 tracking-wide text-slate-400 sm:text-[10px] sm:tracking-wider">
                    {stat.sub}
                  </p>

                  <div className="absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-emerald-400/60 sm:right-3 sm:top-3" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          OUR STORY
      ===================================================== */}

      <section className="py-14 sm:py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1500px] px-4 min-[420px]:px-5 sm:px-8 lg:px-16 xl:px-20">
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center">
            {/* STORY TEXT */}
            <Reveal>
              <div className="relative">
                <span className="absolute -left-4 -top-6 hidden font-['Poppins',sans-serif] text-[140px] font-black leading-none text-emerald-100/50 md:block">
                  “
                </span>

                <div className="relative">
                  <span className="font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.18em] text-emerald-700 sm:text-[10px] sm:tracking-[0.22em]">
                    Our Story
                  </span>

                  <h2 className="mt-4 font-['Poppins',sans-serif] text-3xl font-black leading-[1.08] tracking-tight text-slate-950 sm:mt-5 sm:text-4xl md:text-5xl">
                    Turning empty spaces into environments of{" "}
                    <span className="italic font-light text-emerald-700">
                      peace and comfort.
                    </span>
                  </h2>

                  <div className="mt-5 space-y-4 sm:mt-8 sm:space-y-5">
                    <p className="font-['Montserrat',sans-serif] text-sm font-medium leading-6 text-slate-600 sm:text-base sm:leading-relaxed md:text-lg">
                      Greenfield Housing was founded in 2012 with a mission to
                      create spaces that foster community, ideas, and a
                      balanced future built on trust.
                    </p>

                    <p className="font-['Montserrat',sans-serif] text-sm font-medium leading-6 text-slate-600 sm:text-base sm:leading-relaxed md:text-lg">
                      From premium apartments at{" "}
                      <strong className="font-bold text-slate-900">
                        Lavender
                      </strong>{" "}
                      in Saravanampatti and gated villas at{" "}
                      <strong className="font-bold text-slate-900">Maple</strong>{" "}
                      in Kalapatti, to RERA-registered plotted communities like{" "}
                      <strong className="font-bold text-slate-900">
                        Crystal Gateway
                      </strong>{" "}
                      in Sulur — every project is thoughtfully designed.
                    </p>
                  </div>

                  {/* MINI STAT PILLS */}
                  <div className="mt-6 flex flex-wrap gap-2 sm:mt-10 sm:gap-3">
                    {[
                      { icon: Building2, label: "20+ Projects" },
                      { icon: Ruler, label: "1000+ Acres" },
                      { icon: Users, label: "15K+ Families" },
                    ].map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.label}
                          className="flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-2 shadow-sm sm:gap-2.5 sm:px-4 sm:py-2.5"
                        >
                          <Icon className="h-3.5 w-3.5 text-emerald-600 sm:h-4 sm:w-4" />

                          <span className="font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-wide text-emerald-900 sm:text-[11px]">
                            {item.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* STORY VISUALS */}
            <Reveal delay={150}>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-800 via-emerald-900 to-[#0a1f14] p-5 text-white shadow-2xl sm:rounded-[2rem] sm:p-8 md:p-10">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                      backgroundSize: "24px 24px",
                    }}
                  />

                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-emerald-300 ring-1 ring-white/20 sm:h-14 sm:w-14 sm:rounded-2xl">
                      <Leaf className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>

                    <h3 className="mt-5 font-['Poppins',sans-serif] text-2xl font-black leading-tight tracking-tight sm:mt-8 sm:text-3xl md:text-4xl">
                      Homes inspired by nature
                    </h3>

                    <p className="mt-3 font-['Montserrat',sans-serif] text-sm font-medium leading-6 text-emerald-100/80 sm:mt-4 sm:leading-relaxed md:text-base">
                      Every Greenfield community is designed with lush green
                      spaces, wellness zones, and smart living features — a
                      neighborhood that breathes.
                    </p>

                    <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5 sm:mt-8 sm:pt-6">
                      <Star className="h-4 w-4 shrink-0 fill-amber-300 text-amber-300 sm:h-5 sm:w-5" />

                      <span className="font-['Montserrat',sans-serif] text-[10px] font-bold uppercase tracking-wider text-emerald-100/90 sm:text-xs">
                        CREDAI award · 2020
                      </span>
                    </div>
                  </div>
                </div>

                {/* TWO SMALLER TILES */}
                <div className="mt-3 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-6">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg sm:rounded-3xl sm:p-6">
                    <Calendar className="h-5 w-5 text-emerald-600 sm:h-7 sm:w-7" />

                    <p className="mt-3 font-['Poppins',sans-serif] text-2xl font-black text-slate-950 sm:mt-5 sm:text-3xl">
                      2012
                    </p>

                    <p className="mt-1 font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-wider text-slate-500 sm:text-[10px]">
                      Established
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg sm:rounded-3xl sm:p-6">
                    <Award className="h-5 w-5 text-amber-500 sm:h-7 sm:w-7" />

                    <p className="mt-3 font-['Poppins',sans-serif] text-xl font-black text-slate-950 sm:mt-5 sm:text-3xl">
                      CREDAI
                    </p>

                    <p className="mt-1 font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-wider text-slate-500 sm:text-[10px]">
                      Award 2020
                    </p>
                  </div>
                </div>

                {/* FLOATING BADGE */}
                <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-emerald-100 bg-white px-5 py-4 shadow-xl md:block">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
                      <TrendingUp className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="font-['Poppins',sans-serif] text-xs font-black text-slate-950">
                        13+ Years
                      </p>

                      <p className="font-['Montserrat',sans-serif] text-[10px] font-medium text-slate-500">
                        of trusted delivery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION & VISION
      ===================================================== */}

      <section className="bg-[#0f2418] py-14 text-white sm:py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1500px] px-4 min-[420px]:px-5 sm:px-8 lg:px-16 xl:px-20">
          <div className="mb-8 max-w-3xl sm:mb-12 md:mb-16">
            <span className="font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.18em] text-emerald-300 sm:text-[10px] sm:tracking-[0.22em]">
              Mission &amp; Vision
            </span>

            <h2 className="mt-4 font-['Poppins',sans-serif] text-3xl font-black leading-[1.08] tracking-tight sm:mt-5 sm:text-4xl md:text-5xl lg:text-6xl">
              What drives us
              <br />

              <span className="italic font-light text-emerald-300">
                forward, every day.
              </span>
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
            {/* MISSION */}
            <Reveal>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-emerald-400/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-5 backdrop-blur sm:rounded-[2rem] sm:p-8 md:p-12">
                <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-emerald-500/20 blur-[100px] transition-transform duration-700 group-hover:scale-125" />

                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400 text-emerald-950 sm:h-14 sm:w-14 sm:rounded-2xl">
                      <Target className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>

                    <span className="font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.15em] text-emerald-300/60 sm:text-[10px] sm:tracking-[0.22em]">
                      01 · Mission
                    </span>
                  </div>

                  <h3 className="mt-6 font-['Poppins',sans-serif] text-xl font-black leading-tight tracking-tight sm:mt-10 sm:text-2xl md:text-3xl">
                    Leading real estate services in Tamil Nadu.
                  </h3>

                  <p className="mt-4 font-['Montserrat',sans-serif] text-sm font-medium leading-6 text-emerald-50/70 sm:mt-6 sm:leading-relaxed md:text-base">
                    It is our mission to deliver properties designed by leading
                    architects, engineers, and interior designers — offering
                    cost-effective solutions and innovative designs that meet
                    the evolving needs of real estate.
                  </p>

                  <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5 font-['Montserrat',sans-serif] text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-300 sm:mt-8 sm:pt-6 sm:text-[11px] sm:tracking-[0.16em]">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Driven by purpose
                  </div>
                </div>
              </div>
            </Reveal>

            {/* VISION */}
            <Reveal delay={100}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-amber-400/10 bg-gradient-to-br from-amber-50/[0.06] to-white/[0.02] p-5 backdrop-blur sm:rounded-[2rem] sm:p-8 md:p-12">
                <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-amber-500/10 blur-[100px] transition-transform duration-700 group-hover:scale-125" />

                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-200 text-amber-950 sm:h-14 sm:w-14 sm:rounded-2xl">
                      <Compass className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>

                    <span className="font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.15em] text-amber-200/60 sm:text-[10px] sm:tracking-[0.22em]">
                      02 · Vision
                    </span>
                  </div>

                  <h3 className="mt-6 font-['Poppins',sans-serif] text-xl font-black leading-tight tracking-tight sm:mt-10 sm:text-2xl md:text-3xl">
                    Creating environments of peace and comfort.
                  </h3>

                  <p className="mt-4 font-['Montserrat',sans-serif] text-sm font-medium leading-6 text-emerald-50/70 sm:mt-6 sm:leading-relaxed md:text-base">
                    To turn empty spaces into environments of peace and comfort
                    through quality construction and best practices that
                    enhance the lives of people.
                  </p>

                  <div className="mt-6 grid gap-2.5 sm:mt-8 sm:gap-3">
                    {[
                      "Building with respect for nature",
                      "Neighborhoods where people thrive",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 sm:px-4"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-200" />

                        <span className="font-['Montserrat',sans-serif] text-xs font-semibold text-white/90 sm:text-sm">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          CORE VALUES
      ===================================================== */}

      <section className="py-14 sm:py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1500px] px-4 min-[420px]:px-5 sm:px-8 lg:px-16 xl:px-20">
          <div className="mb-8 grid gap-5 sm:mb-12 sm:gap-8 md:mb-16 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <span className="font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.18em] text-emerald-700 sm:text-[10px] sm:tracking-[0.22em]">
                Our Principles
              </span>

              <h2 className="mt-4 font-['Poppins',sans-serif] text-3xl font-black leading-[1.08] tracking-tight text-slate-950 sm:mt-5 sm:text-4xl md:text-5xl lg:text-6xl">
                Building blocks
                <br />

                of{" "}
                <span className="italic font-light text-emerald-700">
                  success.
                </span>
              </h2>
            </div>

            <p className="max-w-lg font-['Montserrat',sans-serif] text-sm font-medium leading-6 text-slate-600 sm:text-base sm:leading-relaxed md:text-lg">
              Safety, collaboration &amp; quality craftsmanship — laid on a
              strong foundation of integrity, innovation &amp; excellence.
            </p>
          </div>

          <div className="grid gap-3 min-[480px]:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;

              return (
                <Reveal key={value.title} delay={idx * 100}>
                  <article className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-2xl sm:rounded-3xl sm:p-7 md:p-8">
                    <span className="pointer-events-none absolute right-4 top-3 font-['Poppins',sans-serif] text-5xl font-black text-slate-100 transition-colors duration-500 group-hover:text-emerald-100 sm:right-5 sm:top-4 sm:text-6xl">
                      {value.number}
                    </span>

                    <div className="relative">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-950 text-emerald-300 transition-all duration-500 group-hover:bg-emerald-600 group-hover:text-white sm:h-14 sm:w-14 sm:rounded-2xl">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.2} />
                      </div>

                      <h3 className="mt-5 font-['Poppins',sans-serif] text-lg font-black text-slate-950 sm:mt-8 sm:text-xl md:text-2xl">
                        {value.title}
                      </h3>

                      <p className="mt-3 font-['Montserrat',sans-serif] text-sm font-medium leading-6 text-slate-600 sm:mt-4 sm:leading-relaxed">
                        {value.desc}
                      </p>

                      <div className="mt-5 h-px w-12 bg-emerald-600 transition-all duration-500 group-hover:w-20 sm:mt-6" />
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          TIMELINE
      ===================================================== */}

      <section className="bg-white py-14 sm:py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1500px] px-4 min-[420px]:px-5 sm:px-8 lg:px-16 xl:px-20">
          <div className="mb-8 max-w-3xl sm:mb-12 md:mb-16">
            <span className="font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.18em] text-emerald-700 sm:text-[10px] sm:tracking-[0.22em]">
              Our History
            </span>

            <h2 className="mt-4 font-['Poppins',sans-serif] text-3xl font-black leading-[1.08] tracking-tight text-slate-950 sm:mt-5 sm:text-4xl md:text-5xl lg:text-6xl">
              Decades of excellence
              <br />

              <span className="italic font-light text-emerald-700">
                in real estate.
              </span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent lg:block" />

            <div className="grid gap-5 min-[480px]:grid-cols-2 sm:gap-6 lg:grid-cols-5">
              {milestones.map((milestone, index) => (
                <Reveal key={`${milestone.year}-${milestone.title}`} delay={index * 60}>
                  <div className="group relative">
                    <div className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-xl border-2 border-slate-200 bg-white shadow-sm transition-all duration-300 group-hover:border-emerald-500 group-hover:bg-emerald-500 group-hover:shadow-lg sm:mb-6 sm:h-16 sm:w-16 sm:rounded-2xl">
                      <span className="font-['Poppins',sans-serif] text-xs font-black text-emerald-700 transition-colors group-hover:text-white sm:text-sm">
                        {milestone.year}
                      </span>
                    </div>

                    <h4 className="font-['Poppins',sans-serif] text-sm font-black leading-tight text-slate-950 sm:text-base">
                      {milestone.title}
                    </h4>

                    <p className="mt-2 font-['Montserrat',sans-serif] text-xs font-medium leading-5 text-slate-600 sm:leading-relaxed">
                      {milestone.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TRUST SIGNALS
      ===================================================== */}

      <section className="bg-[#0f2418] py-14 text-white sm:py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1500px] px-4 min-[420px]:px-5 sm:px-8 lg:px-16 xl:px-20">
          <div className="mb-8 text-center sm:mb-12 md:mb-16">
            <span className="font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.18em] text-emerald-300 sm:text-[10px] sm:tracking-[0.22em]">
              Compliance &amp; Trust
            </span>

            <h2 className="mt-4 font-['Poppins',sans-serif] text-3xl font-black leading-[1.08] tracking-tight sm:mt-5 sm:text-4xl md:text-5xl lg:text-6xl">
              Approved. Awarded.
              <br />

              <span className="italic font-light text-emerald-300">
                Trusted.
              </span>
            </h2>
          </div>

          <div className="grid gap-3 sm:gap-6 md:grid-cols-3">
            {trustSignals.map((signal, idx) => {
              const Icon = signal.icon;

              const accentMap = {
                emerald:
                  "border-emerald-400/20 bg-emerald-500/10 text-emerald-300",
                amber:
                  "border-amber-400/20 bg-amber-500/10 text-amber-300",
                sky: "border-sky-400/20 bg-sky-500/10 text-sky-300",
              };

              return (
                <Reveal key={signal.title} delay={idx * 100}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/30 hover:bg-white/[0.06] sm:rounded-3xl sm:p-8 md:p-10">
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border sm:h-14 sm:w-14 sm:rounded-2xl ${accentMap[signal.accent]}`}
                    >
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>

                    <h3 className="mt-5 font-['Poppins',sans-serif] text-lg font-black tracking-tight sm:mt-8 sm:text-xl md:text-2xl">
                      {signal.title}
                    </h3>

                    <p className="mt-3 font-['Montserrat',sans-serif] text-sm font-medium leading-6 text-white/60 sm:mt-4 sm:leading-relaxed">
                      {signal.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          LEADERSHIP
      ===================================================== */}

      <section className="py-14 sm:py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1500px] px-4 min-[420px]:px-5 sm:px-8 lg:px-16 xl:px-20">
          <div className="mb-8 max-w-3xl sm:mb-12 md:mb-16">
            <span className="font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.18em] text-emerald-700 sm:text-[10px] sm:tracking-[0.22em]">
              Leadership
            </span>

            <h2 className="mt-4 font-['Poppins',sans-serif] text-3xl font-black leading-[1.08] tracking-tight text-slate-950 sm:mt-5 sm:text-4xl md:text-5xl lg:text-6xl">
              Visionaries behind
              <br />

              <span className="italic font-light text-emerald-700">
                our mission.
              </span>
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {leadership.map((leader, idx) => (
              <Reveal key={leader.name} delay={idx * 100}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-2xl sm:rounded-[2rem] sm:p-8 md:p-10">
                  <Quote className="absolute right-4 top-4 h-9 w-9 text-emerald-100 transition-colors duration-500 group-hover:text-emerald-200 sm:right-8 sm:top-8 sm:h-12 sm:w-12" />

                  <div className="flex items-center gap-3 sm:gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-800 font-['Poppins',sans-serif] text-xl font-black text-white shadow-lg sm:h-20 sm:w-20 sm:rounded-2xl sm:text-2xl">
                      {leader.initials}
                    </div>

                    <div className="min-w-0 pr-7 sm:pr-10">
                      <h3 className="font-['Poppins',sans-serif] text-base font-black leading-snug tracking-tight text-slate-950 sm:text-xl md:text-2xl">
                        {leader.name}
                      </h3>

                      <p className="mt-1 font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.12em] text-emerald-700 sm:text-[10px] sm:tracking-[0.18em]">
                        {leader.role}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 border-t border-slate-100 pt-5 font-['Montserrat',sans-serif] text-sm font-medium italic leading-6 text-slate-600 sm:mt-8 sm:pt-6 sm:text-base sm:leading-relaxed md:text-lg">
                    “{leader.quote}”
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR PROMISE + SALES CONTACT
      ===================================================== */}

      <section className="bg-slate-50 py-14 sm:py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1500px] px-4 min-[420px]:px-5 sm:px-8 lg:px-16 xl:px-20">
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-[1.15fr_1fr]">
            {/* OUR PROMISE */}
            <Reveal>
              <div className="relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-[2rem] sm:p-8 md:p-12">
                <Quote className="absolute right-4 top-4 h-10 w-10 text-emerald-100 sm:right-8 sm:top-8 sm:h-16 sm:w-16" />

                <span className="font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.18em] text-emerald-700 sm:text-[10px] sm:tracking-[0.22em]">
                  Our Promise
                </span>

                <h2 className="mt-4 font-['Poppins',sans-serif] text-3xl font-black leading-[1.08] tracking-tight text-slate-950 sm:mt-5 sm:text-4xl lg:text-5xl">
                  “We Build Homes,
                  <br />

                  <span className="italic font-light text-emerald-700">
                    Not Houses.”
                  </span>
                </h2>

                <p className="mt-5 max-w-xl font-['Montserrat',sans-serif] text-sm font-medium leading-6 text-slate-600 sm:mt-6 sm:text-base sm:leading-relaxed md:text-lg">
                  This philosophy defines our approach to every project. We
                  create spaces that foster meaningful bonds, shared
                  experiences, and lasting joy — because a home is where life
                  happens.
                </p>

                <div className="mt-6 flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50/60 p-3.5 sm:mt-8 sm:items-center sm:gap-4 sm:rounded-2xl sm:p-5">
                  <Star className="mt-0.5 h-5 w-5 shrink-0 fill-emerald-600 text-emerald-600 sm:mt-0 sm:h-7 sm:w-7" />

                  <span className="font-['Montserrat',sans-serif] text-xs font-bold leading-5 text-slate-700 sm:text-sm sm:leading-normal md:text-base">
                    Trusted by 15,000+ happy families across Coimbatore &amp;
                    Erode
                  </span>
                </div>
              </div>
            </Reveal>

            {/* SALES CONTACT — VETRI */}
            <Reveal delay={100}>
              <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-700 via-emerald-800 to-[#0a1f14] p-5 text-white shadow-2xl sm:rounded-[2rem] sm:p-8 md:p-10">
                <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-emerald-400/20 blur-[100px]" />

                <div className="pointer-events-none absolute -bottom-20 -left-20 h-[250px] w-[250px] rounded-full bg-amber-400/10 blur-[90px]" />

                <div className="relative">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.14em] text-emerald-100 backdrop-blur sm:px-4 sm:text-[10px] sm:tracking-[0.22em]">
                    <UserCheck className="h-3 w-3" />
                    Sales Contact
                  </span>

                  <h3 className="mt-5 font-['Poppins',sans-serif] text-2xl font-black leading-tight sm:mt-6 sm:text-3xl">
                    Talk to Our
                    <br />

                    <span className="italic font-light text-emerald-200">
                      Sales Team
                    </span>
                  </h3>

                  {/* VETRI CARD */}
                  <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur sm:mt-8 sm:gap-4 sm:rounded-2xl sm:p-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-800 shadow-lg sm:h-14 sm:w-14">
                      <UserCheck className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>

                    <div>
                      <p className="font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.14em] text-emerald-200 sm:text-[10px] sm:tracking-[0.18em]">
                        Sales Manager
                      </p>

                      <p className="mt-0.5 font-['Poppins',sans-serif] text-xl font-black text-white sm:text-2xl">
                        Vetri
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
                    <a
                      href="tel:+917395864774"
                      className="flex min-h-11 items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5 transition hover:bg-white/10 sm:p-4"
                    >
                      <Phone className="h-4 w-4 shrink-0 text-emerald-300 sm:h-5 sm:w-5" />

                      <span className="break-words font-['Montserrat',sans-serif] text-xs font-bold text-white sm:text-sm">
                        +91 73958 64774
                      </span>
                    </a>

                    <a
                      href="https://wa.me/917395864774?text=Hi%20Vetri%2C%20I%27m%20interested%20in%20Greenfield%20Housing%20projects."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-11 items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5 transition hover:bg-white/10 sm:p-4"
                    >
                      <MessageCircle className="h-4 w-4 shrink-0 text-emerald-300 sm:h-5 sm:w-5" />

                      <span className="font-['Montserrat',sans-serif] text-xs font-bold text-white sm:text-sm">
                        WhatsApp Vetri
                      </span>
                    </a>

                    <a
                      href="mailto:info@gfhil.com"
                      className="flex min-h-11 items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5 transition hover:bg-white/10 sm:p-4"
                    >
                      <Mail className="h-4 w-4 shrink-0 text-emerald-300 sm:h-5 sm:w-5" />

                      <span className="break-words font-['Montserrat',sans-serif] text-xs font-bold text-white sm:text-sm">
                        info@gfhil.com
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#0a1f14] py-14 text-white sm:py-20 md:py-28">
        {/* DECORATIVE GRID */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-[100px] sm:h-[600px] sm:w-[600px] sm:blur-[140px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-4 min-[420px]:px-5 sm:px-8 lg:px-16 xl:px-20">
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <span className="font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.18em] text-emerald-300 sm:text-[10px] sm:tracking-[0.22em]">
                Ready to Begin?
              </span>

              <h2 className="mt-4 font-['Poppins',sans-serif] text-3xl font-black leading-[1.08] tracking-tight sm:mt-5 sm:text-4xl md:text-5xl lg:text-6xl">
                Find your dream home
                <br />

                <span className="italic font-light text-emerald-300">
                  with Greenfield.
                </span>
              </h2>

              <p className="mt-4 max-w-2xl font-['Montserrat',sans-serif] text-sm font-medium leading-6 text-emerald-50/70 sm:mt-6 sm:text-base sm:leading-relaxed md:text-lg">
                Explore premium apartments, gated villas, and RERA/DTCP-approved
                residential plots across Coimbatore and Erode.
              </p>

              <div className="mt-6 flex flex-col gap-2.5 min-[420px]:flex-row sm:mt-10 sm:gap-4">
                <a
                  href="/allprojects"
                  className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-emerald-400 px-5 py-3 font-['Poppins',sans-serif] text-xs font-bold text-emerald-950 shadow-xl shadow-emerald-500/20 transition-all hover:-translate-y-1 hover:bg-emerald-300 sm:min-h-12 sm:gap-3 sm:px-8 sm:py-4 sm:text-sm"
                >
                  View All Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
                </a>

                <a
                  href="tel:+917395864774"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 font-['Poppins',sans-serif] text-xs font-bold text-white backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/10 sm:min-h-12 sm:gap-3 sm:px-8 sm:py-4 sm:text-sm"
                >
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  Call Vetri
                </a>
              </div>
            </div>

            {/* STAT TILES */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
              {[
                { icon: Building2, value: "20+", label: "Projects" },
                { icon: Users, value: "15K+", label: "Families" },
                { icon: Ruler, value: "1000+", label: "Acres" },
                { icon: TrendingUp, value: "13+", label: "Years" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5 backdrop-blur transition-colors hover:border-emerald-400/30 hover:bg-white/[0.06] sm:rounded-2xl sm:p-5"
                  >
                    <Icon className="h-5 w-5 text-emerald-300 sm:h-6 sm:w-6" />

                    <p className="mt-3 font-['Poppins',sans-serif] text-2xl font-black text-white sm:mt-4 sm:text-3xl">
                      {item.value}
                    </p>

                    <p className="mt-1 font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.12em] text-emerald-200/70 sm:text-[10px] sm:tracking-[0.18em]">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}