import React from "react";

/* =========================================================
   GREENFIELD HOUSING INDIA
   Premium Home-Buying Process
   Poppins Headings | Montserrat Body
   Fully Responsive Design
========================================================= */

const steps = [
  {
    number: "01",
    eyebrow: "Discover",
    title: "Explore",
    description:
      "Discover residential plot communities across Coimbatore and shortlist a property that suits your plans.",
    details: [
      "Compare available plots",
      "Explore layout amenities",
      "Review applicable approval details",
    ],
    duration: "Your first step",
  },
  {
    number: "02",
    eyebrow: "Experience",
    title: "Site Visit",
    description:
      "Visit the property in person to understand the surroundings, layout, road access and plot boundaries.",
    details: [
      "Walk through the development",
      "Check plot dimensions",
      "Discuss current pricing",
    ],
    duration: "See it firsthand",
  },
  {
    number: "03",
    eyebrow: "Review",
    title: "Booking",
    description:
      "Review the property documents, applicable approvals and payment terms before making your booking decision.",
    details: [
      "Review approval documents",
      "Check title documentation",
      "Understand payment terms",
    ],
    duration: "Make an informed choice",
  },
  {
    number: "04",
    eyebrow: "Ownership",
    title: "Handover",
    description:
      "Complete the necessary formalities, inspect your plot and proceed with registration and handover as applicable.",
    details: [
      "Complete the final inspection",
      "Proceed with registration",
      "Confirm plot boundaries",
    ],
    duration: "Your next chapter",
  },
];

const phoneNumber = "+917395864774";

const whatsappLink =
  "https://wa.me/917395864774?text=Hi%2C%20I%27m%20interested%20in%20Greenfield%20Housing%20projects.%20Please%20share%20details.";

/* =========================================================
   PROCESS STEP CARD
========================================================= */

function ProcessStep({ step, isLast }) {
  return (
    <article className="process-step group relative min-w-0">
      {/* Timeline marker */}
      <div className="process-marker relative z-10 mb-4 flex items-center justify-between sm:mb-6">
        <span className="process-number flex h-11 w-11 shrink-0 items-center justify-center border border-[#d8d9cc] bg-[#faf9f5] font-poppins text-sm font-medium text-[#173c2b] transition duration-300 group-hover:border-[#b99a5b] group-hover:bg-[#173c2b] group-hover:text-white sm:h-16 sm:w-16 sm:text-2xl">
          {step.number}
        </span>

        {!isLast && (
          <span className="process-mobile-line ml-3 h-px flex-1 bg-[#d9dace] lg:hidden" />
        )}

        <span className="hidden font-montserrat text-[10px] font-medium uppercase tracking-[0.18em] text-[#999887] lg:block">
          Step {step.number}
        </span>
      </div>

      {/* Step card */}
      <div className="process-card flex h-full flex-col border border-[#e4e3d9] bg-white p-4 transition duration-300 group-hover:-translate-y-1 group-hover:border-[#c7b17e] group-hover:shadow-[0_18px_45px_rgba(23,60,43,0.07)] sm:p-7 lg:min-h-[340px] lg:p-8">
        <p className="mb-2 font-montserrat text-[9px] font-semibold uppercase tracking-[0.16em] text-[#9a8050] sm:mb-3 sm:text-[10px] sm:tracking-[0.2em]">
          {step.eyebrow}
        </p>

        <h3 className="font-poppins text-xl font-medium leading-tight tracking-[-0.03em] text-[#173c2b] sm:text-3xl">
          {step.title}
        </h3>

        <p className="mt-3 font-montserrat text-xs leading-6 text-[#74786e] sm:mt-4 sm:text-sm sm:leading-7">
          {step.description}
        </p>

        <div className="my-4 h-px w-full bg-[#ecebe3] sm:my-6" />

        <ul className="space-y-2.5 sm:space-y-4">
          {step.details.map((detail, index) => (
            <li key={detail} className="flex items-start gap-2.5 sm:gap-3">
              <span className="mt-[2px] flex h-5 w-5 shrink-0 items-center justify-center border border-[#d8dfd3] font-montserrat text-[9px] text-[#426348]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="font-montserrat text-[11px] leading-5 text-[#515c51] sm:text-[13px] sm:leading-6">
                {detail}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-5 border-t border-[#ecebe3] pt-4 sm:mt-auto sm:pt-5">
          <p className="font-montserrat text-[9px] font-semibold uppercase tracking-[0.12em] text-[#8b8d80] sm:tracking-[0.16em]">
            {step.duration}
          </p>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   MAIN PROCESS SECTION
========================================================= */

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#faf9f5] py-10 sm:py-16 lg:py-24"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');

        #process {
          font-family: 'Montserrat', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        #process .font-poppins {
          font-family: 'Poppins', sans-serif;
        }

        #process .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }

        #process .process-timeline {
          position: relative;
        }

        @media (min-width: 1024px) {
          #process .process-timeline::before {
            content: "";
            position: absolute;
            top: 31px;
            left: 8%;
            right: 8%;
            height: 1px;
            background: #d9dace;
          }

          #process .process-marker {
            min-height: 64px;
          }
        }

        @media (max-width: 639px) {
          #process .process-card {
            border-radius: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #process *,
          #process *::before,
          #process *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Subtle background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-12 h-48 w-48 rounded-full bg-[#e9e6d9]/50 blur-3xl sm:-right-28 sm:top-16 sm:h-72 sm:w-72"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-56 rounded-full bg-[#e6ebe0]/60 blur-3xl sm:-left-24 sm:h-80 sm:w-80"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-14">
        {/* Section heading */}
        <div className="mb-8 grid gap-5 sm:mb-12 sm:gap-7 lg:mb-16 lg:grid-cols-[1.1fr_0.7fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3 sm:mb-5">
              <span className="h-px w-7 bg-[#b99a5b] sm:w-9" />

              <span className="font-montserrat text-[9px] font-semibold uppercase tracking-[0.18em] text-[#6c775f] sm:text-[10px] sm:tracking-[0.23em]">
                The buying process
              </span>
            </div>

            <h2 className="max-w-3xl font-poppins text-[30px] font-medium leading-[1.15] tracking-[-0.04em] text-[#173c2b] sm:text-5xl lg:text-6xl">
              From the first visit
              <span className="mt-1.5 block text-[#8c784d] sm:mt-2">
                to a place of your own.
              </span>
            </h2>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="font-montserrat text-xs leading-6 text-[#74786e] sm:text-base sm:leading-8">
              Buying a property is an important decision. Our four-step
              journey helps you explore your options, visit the site, review
              documentation and understand the next steps towards ownership.
            </p>

            <a
              href="#projects"
              className="mt-4 inline-flex items-center gap-3 border-b border-[#b99a5b] pb-2 font-montserrat text-xs font-semibold text-[#173c2b] transition hover:gap-5 sm:mt-5"
            >
              Explore our projects
              <span aria-hidden="true" className="text-lg">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Responsive process steps */}
        <div className="process-timeline grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-5">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.number}
              step={step}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-8 overflow-hidden bg-[#173c2b] sm:mt-14 lg:mt-20">
          <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="px-5 py-7 sm:px-10 sm:py-11 lg:px-12 lg:py-14">
              <p className="mb-2 font-montserrat text-[9px] font-semibold uppercase tracking-[0.18em] text-[#d8c49b] sm:mb-3 sm:text-[10px] sm:tracking-[0.22em]">
                Let’s get started
              </p>

              <h3 className="max-w-2xl font-poppins text-2xl font-medium leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
                Your property journey begins with a conversation.
              </h3>

              <p className="mt-3 max-w-xl font-montserrat text-xs leading-6 text-white/65 sm:mt-4 sm:text-sm sm:leading-7">
                Speak with our team for project information, site visit
                arrangements and current pricing.
              </p>
            </div>

            <div className="flex flex-col gap-2.5 px-5 pb-6 sm:flex-row sm:px-10 sm:pb-8 lg:flex-col lg:px-12 lg:py-10">
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex min-h-11 items-center justify-center gap-3 bg-[#d2b477] px-5 py-3 font-montserrat text-[10px] font-semibold text-[#173c2b] transition hover:bg-[#e0c894] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:min-h-12 sm:px-6 sm:text-xs"
              >
                <span>Call 73958 64774</span>
                <span aria-hidden="true" className="text-lg">
                  →
                </span>
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-3 border border-white/30 px-5 py-3 font-montserrat text-[10px] font-semibold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:min-h-12 sm:px-6 sm:text-xs"
              >
                WhatsApp our team
                <span aria-hidden="true" className="text-lg">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
