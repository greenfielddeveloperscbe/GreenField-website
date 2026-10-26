import React from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

import Logo from "../../assests/greenfield.webp";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/project" },
  { label: "Community", href: "/community" },
  { label: "About Us", href: "/aboutus" },
  { label: "Contact Us", href: "/contactus" },
];

const projectLinks = [
  { label: "Ongoing Projects", href: "/project" },
  { label: "Completed Projects", href: "/project" },
  { label: "Ready to Occupy", href: "/project" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Privacy Policy", href: "/privacypolicy" },
  { label: "Disclaimer", href: "/disclaimer" },
];

const socials = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/greenfield_developers_/?hl=en",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61564948162389",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const headingClass =
    "font-['Poppins',sans-serif] text-[11px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.18em] text-emerald-700";

  const linkClass =
    "group inline-flex min-w-0 items-center gap-2 text-[12px] sm:text-sm md:text-[15px] font-medium text-slate-600 transition-colors duration-200 hover:text-emerald-700";

  return (
    <footer className="w-full bg-[#f4f7f2] px-2.5 py-3 font-['Montserrat',sans-serif] antialiased sm:px-5 sm:py-6 lg:px-8 lg:py-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

        .greenfield-footer {
          font-family: 'Montserrat', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .greenfield-footer h2,
        .greenfield-footer h3,
        .greenfield-footer .footer-heading {
          font-family: 'Poppins', sans-serif;
        }

        .greenfield-footer a:focus-visible {
          outline: 2px solid #059669;
          outline-offset: 4px;
        }

        @media (prefers-reduced-motion: reduce) {
          .greenfield-footer *,
          .greenfield-footer *::before,
          .greenfield-footer *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      <div className="greenfield-footer mx-auto w-full max-w-[1800px] overflow-hidden rounded-xl bg-white shadow-[0_16px_60px_rgba(16,70,42,0.08)] sm:rounded-3xl lg:rounded-[2.5rem]">
        {/* BRAND AND CONTACT SECTION */}

        <div className="relative isolate overflow-hidden bg-[#0b3d2a] px-4 py-7 text-white sm:px-8 sm:py-11 md:px-10 lg:px-14 lg:py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 -z-10 h-48 w-48 rounded-full bg-emerald-400/15 blur-[70px] sm:h-80 sm:w-80 sm:blur-[90px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 left-1/4 -z-10 h-48 w-48 rounded-full bg-green-400/10 blur-[70px] sm:h-64 sm:w-64 sm:blur-[90px]"
          />

          <div className="grid grid-cols-1 gap-7 sm:gap-9 md:gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
            {/* BRAND */}

            <div className="min-w-0">
              <Link
                to="/"
                aria-label="Greenfield Housing India home"
                className="inline-flex max-w-full items-center"
              >
              <img
  src={Logo}
  alt="Greenfield Housing India"
  className="h-9 w-auto max-w-[180px] object-contain"
/>
              </Link>

              <div className="mt-6 sm:mt-10 lg:mt-12">
                <p className="footer-heading mb-2.5 text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-300 sm:mb-3 sm:text-xs sm:tracking-[0.22em]">
                  Greenfield Housing India
                </p>

                <h2 className="max-w-2xl text-2xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl xl:text-[3.4rem]">
                  We turn empty space into
                  <span className="mt-1 block text-emerald-300">
                    aesthetic living spaces.
                  </span>
                </h2>

                <p className="mt-3 max-w-xl text-[12px] leading-5 text-white/70 sm:mt-4 sm:text-base sm:leading-7">
                  Thoughtfully planned spaces, trusted communities, and better
                  places to call home.
                </p>
              </div>
            </div>

            {/* CONTACT DETAILS */}

            <div className="min-w-0 border-t border-white/15 pt-5 sm:pt-8 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0">
              <p className="footer-heading mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300 sm:mb-5 sm:text-xs sm:tracking-[0.2em]">
                Get in Touch
              </p>

              <div className="space-y-4 sm:space-y-5">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Greenfield+Housing+India+Pvt+Ltd+Sitra+Road+Kalapatti+Coimbatore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-w-0 items-start gap-2.5 text-[12px] leading-5 text-white/75 transition-colors hover:text-white sm:gap-3 sm:text-[15px] sm:leading-6"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-emerald-300 transition-colors group-hover:bg-emerald-400/20 sm:h-9 sm:w-9 sm:rounded-xl">
                    <MapPin className="h-4 w-4" />
                  </span>

                  <span className="min-w-0 break-words">
                    Greenfield Housing India Pvt Ltd,
                    <br />
                    No.14/15, A1, Sitra Road, Kalapatti,
                    <br />
                    Near BOSCH Global Software Technologies,
                    <br />
                    Coimbatore - 641 048.
                    <span className="mt-1 inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-300 sm:text-xs">
                      View on map
                      <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </span>
                </a>

                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-1 xl:grid-cols-2">
                  <a
                    href="tel:+917092211222"
                    className="group flex min-w-0 items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 transition-colors hover:border-emerald-300/40 hover:bg-white/[0.08] sm:gap-3 sm:rounded-xl sm:py-3"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-emerald-300" />

                    <span className="min-w-0">
                      <span className="block text-[9px] font-semibold uppercase tracking-wider text-white/50 sm:text-[10px]">
                        Call Us
                      </span>
                      <span className="block break-words text-[12px] font-semibold text-white sm:text-sm">
                        +91 70922 11222
                      </span>
                    </span>
                  </a>

                  <a
                    href="mailto:greenfield.developers.cbe@mail.com"
                    className="group flex min-w-0 items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 transition-colors hover:border-emerald-300/40 hover:bg-white/[0.08] sm:gap-3 sm:rounded-xl sm:py-3"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-emerald-300" />

                    <span className="min-w-0">
                      <span className="block text-[9px] font-semibold uppercase tracking-wider text-white/50 sm:text-[10px]">
                        Email Us
                      </span>
                      <span className="block break-all text-[11px] font-semibold text-white sm:text-sm">
                        greenfield.developers.cbe@mail.com
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NAVIGATION SECTION */}

        <div className="px-4 py-6 sm:px-8 sm:py-10 md:px-10 lg:px-14 lg:py-12">
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-9 lg:grid-cols-[1.15fr_0.8fr_1fr] lg:gap-12">
            {/* QUICK LINKS */}

            <div className="min-w-0">
              <div className="mb-4 flex items-center gap-2.5 sm:mb-5 sm:gap-3">
                <span className="h-px w-6 shrink-0 bg-emerald-500 sm:w-7" />
                <h3 className={headingClass}>Quick Links</h3>
              </div>

              <nav
                aria-label="Quick links"
                className="grid grid-cols-2 gap-x-3 gap-y-3 sm:gap-x-5 sm:gap-y-4"
              >
                {quickLinks.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={linkClass}
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/50 transition-colors group-hover:bg-emerald-600" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* PROJECT LINKS */}

            <div className="min-w-0">
              <div className="mb-4 flex items-center gap-2.5 sm:mb-5 sm:gap-3">
                <span className="h-px w-6 shrink-0 bg-emerald-500 sm:w-7" />
                <h3 className={headingClass}>Our Projects</h3>
              </div>

              <nav
                aria-label="Project links"
                className="space-y-3 sm:space-y-4"
              >
                {projectLinks.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`${linkClass} group`}
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 transition-colors group-hover:bg-emerald-700 group-hover:text-white sm:h-7 sm:w-7">
                      <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    </span>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* SOCIAL LINKS */}

            <div className="min-w-0 sm:col-span-2 lg:col-span-1">
              <div className="mb-4 flex items-center gap-2.5 sm:mb-5 sm:gap-3">
                <span className="h-px w-6 shrink-0 bg-emerald-500 sm:w-7" />
                <h3 className={headingClass}>Follow Us</h3>
              </div>

              <p className="max-w-sm text-[12px] leading-5 text-slate-500 sm:text-sm sm:leading-6">
                Follow Greenfield Housing India for new projects, community
                updates, and inspiration for your future home.
              </p>

              <div className="mt-4 flex flex-wrap gap-2.5 sm:mt-5 sm:gap-3">
                {socials.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit our ${item.label} page`}
                      title={item.label}
                      className="group flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-700 hover:bg-emerald-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 sm:h-11 sm:w-11 sm:rounded-xl"
                    >
                      <Icon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110 sm:h-[18px] sm:w-[18px]" />
                    </a>
                  );
                })}
              </div>

              <p className="mt-4 text-[11px] leading-5 text-slate-400 sm:mt-5 sm:text-xs">
                Building better spaces. Creating lasting communities.
              </p>
            </div>
          </div>

          {/* BOTTOM BAR */}

          <div className="mt-7 border-t border-slate-100 pt-5 sm:mt-10 sm:pt-6 lg:mt-12">
            <div className="flex flex-col gap-4 sm:gap-4 lg:flex-row lg:items-center lg:justify-between">
              <p className="text-[11px] leading-5 text-slate-400 sm:text-sm">
                © {currentYear} Greenfield Housing India Pvt Ltd. All rights
                reserved.
              </p>

              <nav
                aria-label="Legal links"
                className="flex flex-wrap gap-x-4 gap-y-2.5 sm:gap-x-5 sm:gap-y-3"
              >
                {legalLinks.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-[11px] font-medium text-slate-400 transition-colors hover:text-emerald-700 focus-visible:outline-none focus-visible:text-emerald-700 sm:text-sm"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}