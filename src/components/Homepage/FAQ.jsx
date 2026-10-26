import React, { useState } from "react";

/* =========================================================
   GREENFIELD HOUSING INDIA
   Responsive FAQ Section
   Poppins: Headings
   Montserrat: Body, questions, answers and buttons
========================================================= */

const faqCategories = [
  {
    title: "About Us",
    label: "Company",
    number: "01",
    faqs: [
      {
        question: "Who is Greenfield Housing India?",
        answer:
          "Greenfield Housing India Pvt. Ltd. is a real estate developer based in Coimbatore. The company focuses on residential plotted developments and community-oriented projects.",
      },
      {
        question: "Where are your projects located?",
        answer:
          "Our projects are located across the greater Coimbatore region, including Sulur, Kovilpalayam, Annur, S.S. Kulam and Karamadai Road.",
      },
      {
        question: "Are your projects RERA registered?",
        answer:
          "The supplied project information lists Crystal Gateway (TN11//Layout/0360/2025), Opal Garden Phase IV (TNRERA/11/LO/3358/2026) and Fairland (TN/11/Layout/1405/2023) as RERA-registered developments. Please verify the applicable registration details on the official RERA portal before making a purchase.",
      },
      {
        question: "Do you have DTCP approvals?",
        answer:
          "The supplied information lists Silver City (DTCP No. 58/2025) and Crown City as DTCP-approved developments. Contact our team for project-specific approval documents and verification details.",
      },
    ],
  },
  {
    title: "Projects",
    label: "Developments",
    number: "02",
    faqs: [
      {
        question: "What types of properties do you offer?",
        answer:
          "Greenfield Housing India specializes in residential plots within planned developments and gated communities.",
      },
      {
        question: "What are your key projects?",
        answer:
          "Our listed projects include Crystal Gateway in Sulur, Crown City in Kovilpalayam, Silver City on Karamadai Road, Fairland in Ponnigoundapudur, Opal Garden in Annur and Diamond Avenue in Pattanam.",
      },
      {
        question: "What is Crystal Gateway?",
        answer:
          "According to the supplied project information, Crystal Gateway is an 805-plot development in Sulur featuring a 3-acre cricket ground, clubhouse and mini theatre. Contact the sales team to confirm current availability and amenity details.",
      },
      {
        question: "What plot sizes are available?",
        answer:
          "Plot sizes vary by development. The supplied information lists Crystal Gateway plots from 1,200 to 2,400 sq. ft. and Silver City plots from 1.5 to 5 cents. Please confirm current availability and exact dimensions with our team.",
      },
    ],
  },
  {
    title: "Amenities",
    label: "Infrastructure",
    number: "03",
    faqs: [
      {
        question: "What basic infrastructure is provided?",
        answer:
          "The supplied project details mention infrastructure such as 30 ft and 40 ft blacktop roads, individual water pipelines, underground electricity cables and drainage systems. Specifications may vary by project, so please confirm the applicable facilities for your selected layout.",
      },
      {
        question: "Are your projects secure?",
        answer:
          "The supplied information describes security features across developments, including compound walls, entrance arches, security personnel and CCTV surveillance. Confirm the specific arrangements and operating provisions for your chosen project.",
      },
      {
        question: "Do you offer sports and fitness facilities?",
        answer:
          "The listed amenities include a 3-acre cricket ground and outdoor gym at Crystal Gateway, and a fitness centre and indoor shuttle court at Fairland. Please verify current amenities and access arrangements with the sales team.",
      },
      {
        question: "Are there community gathering spaces?",
        answer:
          "Some project descriptions mention landscaped gardens, children's play areas, community halls and clubhouses. Facilities differ by development.",
      },
    ],
  },
  {
    title: "Locations",
    label: "Find Us",
    number: "04",
    faqs: [
      {
        question: "Where is Crystal Gateway located?",
        answer:
          "The supplied project information places Crystal Gateway on Kalangal Road, Sulur, approximately 2 km from the L&T Bypass and 10 km from Coimbatore Airport. Please verify the route and distances before travelling.",
      },
      {
        question: "Where is Crown City?",
        answer:
          "Crown City is listed on Sathy Main Road in Kovilpalayam.",
      },
      {
        question: "Where is Fairland?",
        answer:
          "Fairland is listed in Ponnigoundapudur, S.S. Kulam, with access towards Avinashi Road (NH 544) and Sathy Road (NH 948).",
      },
    ],
  },
  {
    title: "Booking",
    label: "Buying Guide",
    number: "05",
    faqs: [
      {
        question: "How do I enquire about pricing?",
        answer:
          "Pricing and plot availability vary by project and plot. The supplied information lists Silver City prices starting at ₹7.50 lakh; this is not a guarantee of current pricing. Call 73958 64774 to request an updated price list and applicable charges.",
      },
      {
        question: "Do you assist with home loans?",
        answer:
          "Loan assistance is mentioned for select projects. The supplied information refers to assistance of up to 80% for Crown City, subject to eligibility, lender approval and current project terms. Confirm the details directly with the sales team and lending institution.",
      },
      {
        question: "How can I schedule a site visit?",
        answer:
          "Call our sales enquiry line at 73958 64774 to discuss site visits, available plots and dimensions. Please arrange your visit in advance.",
      },
    ],
  },
];

const phoneNumber = "+917395864774";

const whatsappLink =
  "https://wa.me/917395864774?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Greenfield%20Housing%20India%20projects.";

function Arrow({ diagonal = false }) {
  return (
    <span aria-hidden="true" className="inline-block text-base leading-none sm:text-lg">
      {diagonal ? "↗" : "→"}
    </span>
  );
}

/* =========================================================
   CATEGORY NAVIGATION
========================================================= */

function CategoryButton({ category, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={active ? "true" : undefined}
      className={`faq-category group flex shrink-0 items-center gap-2.5 border px-3 py-2.5 text-left transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173c2b] sm:gap-3 sm:px-5 sm:py-3.5 lg:w-full ${
        active
          ? "border-[#173c2b] bg-[#173c2b] text-white"
          : "border-[#e4e2d8] bg-white text-[#596458] hover:border-[#c4b07d] hover:bg-[#f5f3ec]"
      }`}
    >
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center border text-[9px] font-semibold tracking-wider sm:h-10 sm:w-10 sm:text-[10px] ${
          active
            ? "border-white/25 text-[#e3cd9c]"
            : "border-[#e2e2d7] text-[#8b805e]"
        }`}
      >
        {category.number}
      </span>

      <span className="min-w-0">
        <span className="block whitespace-nowrap text-[11px] font-semibold sm:text-sm">
          {category.title}
        </span>

        <span
          className={`mt-0.5 block text-[8px] uppercase tracking-[0.1em] sm:mt-1 sm:text-[9px] sm:tracking-[0.13em] ${
            active ? "text-white/60" : "text-[#929487]"
          }`}
        >
          {category.label}
        </span>
      </span>

      <span
        className={`ml-auto hidden text-lg transition-transform duration-300 lg:block ${
          active
            ? "translate-x-1 text-[#e3cd9c]"
            : "text-[#a9ab9e] group-hover:translate-x-1"
        }`}
        aria-hidden="true"
      >
        →
      </span>
    </button>
  );
}

/* =========================================================
   FAQ ACCORDION ITEM
========================================================= */

function FAQItem({ faq, index, open, onToggle, categoryNumber }) {
  const answerId = `faq-answer-${categoryNumber}-${index}`;
  const questionId = `faq-question-${categoryNumber}-${index}`;

  return (
    <article
      className={`faq-item border transition-colors duration-300 ${
        open
          ? "border-[#c8b582] bg-white"
          : "border-[#e5e3d9] bg-white hover:border-[#d2c8ad]"
      }`}
    >
      <h3 className="m-0">
        <button
          id={questionId}
          type="button"
          aria-expanded={open}
          aria-controls={answerId}
          onClick={onToggle}
          className="flex min-h-[58px] w-full items-center justify-between gap-3 px-3.5 py-3.5 text-left sm:min-h-[70px] sm:gap-4 sm:px-6 sm:py-6"
        >
          <span
            className={`pr-1 text-xs font-semibold leading-5 transition-colors sm:pr-2 sm:text-base sm:leading-7 ${
              open ? "text-[#173c2b]" : "text-[#303d32]"
            }`}
          >
            {faq.question}
          </span>

          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center border text-lg leading-none transition duration-300 sm:h-10 sm:w-10 sm:text-xl ${
              open
                ? "rotate-180 border-[#173c2b] bg-[#173c2b] text-white"
                : "border-[#e3e3d8] bg-[#f7f6f0] text-[#6c765f]"
            }`}
            aria-hidden="true"
          >
            {open ? "−" : "+"}
          </span>
        </button>
      </h3>

      <div
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        className={`faq-answer-grid ${open ? "faq-answer-open" : ""}`}
      >
        <div className="overflow-hidden">
          <div className="mx-3.5 border-t border-[#eeece3] pb-4 pt-3.5 sm:mx-6 sm:pb-6 sm:pt-5">
            <p className="max-w-3xl text-xs leading-6 text-[#71766b] sm:text-[15px] sm:leading-8">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   MAIN FAQ COMPONENT
========================================================= */

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);

  const currentCategory = faqCategories[activeCategory];

  const handleCategoryChange = (index) => {
    setActiveCategory(index);
    setOpenIndex(0);
  };

  const handleToggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="greenfield-faq relative overflow-hidden bg-[#faf9f5] py-10 sm:py-16 md:py-20 lg:py-28"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap');

        #faq {
          font-family: 'Montserrat', sans-serif;
        }

        #faq h1,
        #faq h2,
        #faq h3,
        #faq h4 {
          font-family: 'Poppins', sans-serif;
        }

        #faq p,
        #faq button,
        #faq a,
        #faq span {
          font-family: 'Montserrat', sans-serif;
        }

        #faq .faq-category {
          -webkit-tap-highlight-color: transparent;
        }

        #faq .faq-answer-grid {
          display: grid;
          grid-template-rows: 0fr;
          opacity: 0;
          transition: grid-template-rows 280ms ease, opacity 220ms ease;
        }

        #faq .faq-answer-open {
          grid-template-rows: 1fr;
          opacity: 1;
        }

        #faq .faq-topic-scroll {
          scrollbar-width: thin;
          scrollbar-color: #d2cfbf transparent;
          overscroll-behavior-x: contain;
        }

        #faq .faq-topic-scroll::-webkit-scrollbar {
          height: 4px;
        }

        #faq .faq-topic-scroll::-webkit-scrollbar-thumb {
          background: #d2cfbf;
        }

        @media (max-width: 639px) {
          #faq .faq-main-heading {
            font-size: clamp(27px, 7.5vw, 35px);
            line-height: 1.16;
          }

          #faq .faq-category-heading {
            font-size: 22px;
          }

          #faq .faq-header {
            margin-bottom: 28px;
          }

          #faq .faq-layout {
            gap: 24px;
          }

          #faq .faq-bottom-cta {
            margin-top: 36px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #faq *,
          #faq *::before,
          #faq *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-0 h-56 w-56 rounded-full bg-[#e9e6d9]/50 blur-3xl sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-[18%] h-56 w-56 rounded-full bg-[#e6ebe0]/60 blur-3xl sm:h-[420px] sm:w-[420px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-3.5 sm:px-7 lg:px-12 xl:px-14">
        {/* Header */}
        <header className="faq-header mb-8 max-w-4xl sm:mb-14 lg:mb-16">
          <div className="mb-4 flex items-center gap-3 sm:mb-5">
            <span className="h-px w-7 bg-[#b99a5b] sm:w-9" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#6c775f] sm:text-[10px] sm:tracking-[0.22em]">
              Frequently asked questions
            </span>
          </div>

          <h1 className="faq-main-heading max-w-4xl text-[29px] font-semibold leading-[1.13] tracking-[-0.035em] text-[#173c2b] sm:text-5xl lg:text-6xl">
            Good decisions
            <span className="mt-1.5 block text-[#8c784d] sm:mt-2">
              begin with clear answers.
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-xs leading-6 text-[#74786e] sm:mt-5 sm:text-base sm:leading-8">
            Find information about Greenfield Housing India, our residential
            developments, locations, amenities and the property-buying
            process.
          </p>
        </header>

        {/* FAQ layout */}
        <div className="faq-layout grid items-start gap-6 lg:grid-cols-[270px_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[300px_minmax(0,1fr)] xl:gap-14">
          {/* Category navigation */}
          <aside className="min-w-0 lg:sticky lg:top-24">
            <div className="mb-3 flex items-center justify-between gap-3 sm:mb-4">
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#6c775f] sm:text-[10px] sm:tracking-[0.2em]">
                Browse by topic
              </p>

              <span className="text-[9px] text-[#929487] lg:hidden sm:text-[10px]">
                Swipe to explore →
              </span>
            </div>

            <nav
              aria-label="FAQ categories"
              className="faq-topic-scroll -mx-3.5 flex gap-2 overflow-x-auto px-3.5 pb-2.5 sm:-mx-7 sm:px-7 lg:mx-0 lg:flex-col lg:gap-2.5 lg:overflow-visible lg:px-0 lg:pb-0"
            >
              {faqCategories.map((category, index) => (
                <CategoryButton
                  key={category.title}
                  category={category}
                  active={activeCategory === index}
                  onClick={() => handleCategoryChange(index)}
                />
              ))}
            </nav>

            <div className="mt-6 hidden border-t border-[#e4e2d8] pt-5 lg:block">
              <p className="text-xl leading-snug text-[#173c2b]">
                Need help choosing a project?
              </p>

              <p className="mt-2 text-xs leading-6 text-[#818478]">
                Contact our team for project-specific information and site
                visit arrangements.
              </p>

              <a
                href={`tel:${phoneNumber}`}
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#173c2b] hover:text-[#8c784d]"
              >
                73958 64774 <Arrow />
              </a>
            </div>
          </aside>

          {/* FAQ content */}
          <div className="min-w-0">
            {/* Active category header */}
            <div className="mb-5 flex items-center justify-between gap-3 border-b border-[#e3e1d7] pb-4 sm:mb-8 sm:gap-4 sm:pb-6">
              <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#173c2b] text-sm font-medium text-[#e1ca98] sm:h-14 sm:w-14 sm:text-xl">
                  {currentCategory.number}
                </div>

                <div className="min-w-0">
                  <p className="mb-1 text-[8px] font-semibold uppercase tracking-[0.13em] text-[#8c784d] sm:text-[9px] sm:tracking-[0.17em]">
                    Explore topic
                  </p>

                  <h2 className="faq-category-heading text-xl leading-tight tracking-[-0.025em] text-[#173c2b] sm:text-3xl">
                    {currentCategory.title}
                  </h2>
                </div>
              </div>

              <span className="shrink-0 text-[9px] font-medium text-[#85877b] sm:text-xs">
                {String(currentCategory.faqs.length).padStart(2, "0")} questions
              </span>
            </div>

            {/* Accordion list */}
            <div className="flex flex-col gap-2.5 sm:gap-4">
              {currentCategory.faqs.map((faq, index) => (
                <FAQItem
                  key={faq.question}
                  faq={faq}
                  index={index}
                  categoryNumber={activeCategory}
                  open={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>

            {/* Category navigation footer */}
            <div className="mt-5 flex flex-col gap-3 border-t border-[#e4e2d8] pt-4 sm:mt-6 sm:flex-row sm:items-center sm:justify-between sm:pt-5">
              <p className="text-xs leading-5 text-[#818478] sm:leading-6">
                Still looking for an answer? Our team can help.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center justify-center gap-3 border border-[#d8d7cc] px-4 py-2.5 text-[10px] font-semibold text-[#173c2b] transition hover:border-[#173c2b] hover:bg-[#f0efe7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173c2b] sm:min-h-11 sm:px-5 sm:py-3 sm:text-xs sm:w-fit"
              >
                Ask us directly
                <Arrow diagonal />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="faq-bottom-cta relative mt-10 overflow-hidden bg-[#173c2b] sm:mt-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-48 w-48 rounded-full border border-white/10 sm:h-80 sm:w-80"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-14 h-36 w-36 rounded-full border border-white/10 sm:h-60 sm:w-60"
          />

          <div className="relative z-10 grid gap-5 p-5 sm:gap-7 sm:p-9 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
            <div>
              <div className="mb-3 flex items-center gap-3 sm:mb-4">
                <span className="h-px w-7 bg-[#d2b477] sm:w-8" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#dfc895] sm:text-[10px] sm:tracking-[0.2em]">
                  Let’s talk
                </span>
              </div>

              <h2 className="max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
                Your property questions deserve clear answers.
              </h2>

              <p className="mt-3 max-w-xl text-xs leading-6 text-white/65 sm:mt-4 sm:text-sm sm:leading-7">
                Speak with our team about site visits, project details, plot
                availability and current pricing.
              </p>
            </div>

            <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:gap-3 lg:w-auto lg:flex-col">
              <a
                href="/allprojects"
                className="inline-flex min-h-11 w-full items-center justify-center gap-3 bg-[#d2b477] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#173c2b] transition hover:bg-[#e1ca98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white sm:min-h-12 sm:flex-1 sm:px-6 sm:text-xs sm:tracking-[0.1em] lg:min-w-[220px]"
              >
                View projects
                <Arrow />
              </a>

              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex min-h-11 w-full items-center justify-center gap-3 border border-white/35 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.08em] text-white transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white sm:min-h-12 sm:flex-1 sm:px-6 sm:text-xs sm:tracking-[0.1em] lg:min-w-[220px]"
              >
                Call 73958 64774
                <Arrow diagonal />
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-4 text-[9px] leading-5 text-[#85877b] sm:mt-5 sm:text-[10px]">
          Project specifications, amenities, pricing, approvals and availability
          may change. Please confirm current details and review the relevant
          documents before making a purchase decision.
        </p>
      </div>
    </section>
  );
}