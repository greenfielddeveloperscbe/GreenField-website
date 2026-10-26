import React, { useEffect, useState } from "react";

import Image1 from "../../assests/gallery/gallery1.webp";
import Image2 from "../../assests/gallery/gallery2.webp";
import Image3 from "../../assests/gallery/gallery3.webp";
import Image4 from "../../assests/gallery/gallery4.webp";
import Image5 from "../../assests/team/herosection/cubehero3.webp";
import Image6 from "../../assests/team/herosection/cubehero4.webp";

/* =========================================================
   CUBE4SPACES — RESPONSIVE PROJECT GALLERY
   Poppins Headings | Montserrat Body | Responsive Modal
========================================================= */

const WHATSAPP_NUMBER = "917395864774";

const projects = [
  {
    id: 1,
    img: Image1,
    category: "Kitchen",
    title: "Modular Kitchen",
    desc: "An elegant kitchen concept combining smart storage, considered finishes and an efficient everyday workflow.",
  },
  {
    id: 2,
    img: Image2,
    category: "Interior",
    title: "Living Interior",
    desc: "A contemporary living space balancing comfort, functionality, natural textures and visual harmony.",
  },
  {
    id: 3,
    img: Image3,
    category: "Commercial",
    title: "Office Space",
    desc: "A professional workspace designed around productivity, thoughtful planning and efficient use of space.",
  },
  {
    id: 4,
    img: Image4,
    category: "Bedroom",
    title: "Luxury Room",
    desc: "A calm bedroom concept featuring warm tones, refined materials and a relaxed atmosphere.",
  },
  {
    id: 5,
    img: Image5,
    category: "Residential",
    title: "Urban Home",
    desc: "A cohesive home concept focused on light, comfortable movement and practical long-term living.",
  },
  {
    id: 6,
    img: Image6,
    category: "Workspace",
    title: "Creative Studio",
    desc: "A contemporary studio designed to support focused work, collaboration and creative thinking.",
  },
];

const studioFeatures = [
  {
    label: "01 / Planning",
    title: "Space with purpose.",
    desc: "Thoughtful layouts that improve movement, comfort and everyday functionality.",
    variant: "dark",
  },
  {
    label: "02 / Execution",
    title: "Details matter.",
    desc: "A considered approach to finishes, materials and on-site coordination.",
    image: Image2,
    variant: "image",
  },
  {
    label: "03 / Turnkey",
    title: "One connected journey.",
    desc: "Design and execution coordinated around a clear project vision.",
    image: Image5,
    variant: "image",
  },
  {
    label: "04 / Support",
    title: "Clear communication.",
    desc: "Consistent updates and professional coordination throughout the process.",
    variant: "light",
  },
];

function openWhatsApp(subject = "Project Gallery") {
  const message = encodeURIComponent(
    `Hello! I would like to know more about ${subject} by Cube4Spaces. Please share the details.`
  );

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
    "_blank",
    "noopener,noreferrer"
  );
}

function Arrow({ diagonal = false }) {
  return (
    <span aria-hidden="true" className="inline-block text-lg leading-none sm:text-xl">
      {diagonal ? "↗" : "→"}
    </span>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project, index, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      aria-label={`View details for ${project.title}`}
      className="gallery-project group relative block w-full overflow-hidden bg-[#e8e6dd] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#173c2b]"
    >
      <div className="relative aspect-[4/4.7] overflow-hidden sm:aspect-[4/5] lg:aspect-[4/4.8]">
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#101b14]/95 via-[#101b14]/15 to-[#101b14]/5 transition-opacity duration-500 group-hover:from-[#101b14]/95" />

        {/* Category */}
        <div className="absolute left-3 right-3 top-3 flex items-center justify-between gap-2 sm:left-5 sm:right-5 sm:top-5 sm:gap-3">
          <span className="max-w-[75%] truncate border border-white/40 bg-[#faf9f4]/95 px-2.5 py-1.5 font-montserrat text-[9px] font-semibold uppercase tracking-[0.12em] text-[#173c2b] sm:px-3 sm:py-2 sm:text-[10px] sm:tracking-[0.14em]">
            {project.category}
          </span>

          <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/60 bg-white/10 text-white backdrop-blur-sm transition duration-300 group-hover:border-[#d5bc84] group-hover:bg-[#d5bc84] group-hover:text-[#173c2b] sm:h-10 sm:w-10">
            <Arrow diagonal />
          </span>
        </div>

        {/* Project information */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-7">
          <div className="mb-2 flex items-center gap-2.5 sm:mb-3 sm:gap-3">
            <span className="h-px w-5 bg-[#d5bc84] sm:w-6" />
            <span className="font-montserrat text-[9px] font-medium uppercase tracking-[0.16em] text-white/70 sm:tracking-[0.2em]">
              Project {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="font-poppins text-xl font-medium leading-tight tracking-[-0.025em] text-white sm:text-3xl">
            {project.title}
          </h3>

          <p className="mt-2 line-clamp-3 max-w-md font-montserrat text-[11px] leading-5 text-white/75 sm:mt-3 sm:text-sm sm:leading-7">
            {project.desc}
          </p>

          <div className="mt-3 flex items-center gap-2 font-montserrat text-[9px] font-semibold uppercase tracking-[0.12em] text-[#e1c994] sm:mt-5 sm:tracking-[0.16em]">
            View project details
            <Arrow />
          </div>
        </div>
      </div>
    </button>
  );
}

/* =========================================================
   STUDIO FEATURE CARD
========================================================= */

function StudioFeatureCard({ card }) {
  const isDark = card.variant === "dark";
  const isLight = card.variant === "light";
  const hasImage = Boolean(card.image);

  return (
    <article
      className={`studio-feature group relative flex min-h-[235px] flex-col justify-between overflow-hidden p-5 sm:min-h-[290px] sm:p-7 lg:min-h-[340px] lg:p-8 ${
        isDark
          ? "bg-[#173c2b] text-white"
          : isLight
          ? "border border-[#dedfd4] bg-[#f2f0e8] text-[#173c2b]"
          : "bg-[#e8e6dd] text-white"
      }`}
    >
      {hasImage && (
        <>
          <img
            src={card.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101b14]/95 via-[#101b14]/45 to-[#101b14]/15" />
        </>
      )}

      <div className="relative z-10">
        <span
          className={`inline-block border px-2.5 py-1.5 font-montserrat text-[9px] font-semibold uppercase tracking-[0.12em] sm:px-3 sm:py-2 sm:tracking-[0.15em] ${
            isDark
              ? "border-white/20 text-white/75"
              : isLight
              ? "border-[#cfd1c4] text-[#5d6b58]"
              : "border-white/40 bg-black/10 text-white"
          }`}
        >
          {card.label}
        </span>
      </div>

      <div className="relative z-10 mt-8 sm:mt-12">
        <span
          className={`mb-3 block h-px w-8 ${
            isLight ? "bg-[#b99a5b]" : "bg-[#d5bc84]"
          }`}
        />

        <h3
          className={`max-w-xs font-poppins text-xl font-medium leading-tight tracking-[-0.025em] sm:text-3xl ${
            isLight ? "text-[#173c2b]" : "text-white"
          }`}
        >
          {card.title}
        </h3>

        <p
          className={`mt-2 max-w-sm font-montserrat text-xs leading-5 sm:mt-3 sm:text-sm sm:leading-7 ${
            isDark
              ? "text-white/70"
              : isLight
              ? "text-[#6f7569]"
              : "text-white/80"
          }`}
        >
          {card.desc}
        </p>
      </div>
    </article>
  );
}

/* =========================================================
   PROJECT DETAIL MODAL
========================================================= */

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="gallery-modal fixed inset-0 z-[100] flex items-end justify-center bg-[#101b14]/80 p-0 backdrop-blur-sm sm:items-center sm:p-5 lg:p-8"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="gallery-modal-title"
        className="relative flex max-h-[94dvh] w-full max-w-5xl flex-col overflow-hidden bg-[#faf9f5] shadow-2xl sm:max-h-[90dvh] sm:flex-row"
      >
        {/* Modal image */}
        <div className="relative h-[30dvh] min-h-[165px] shrink-0 overflow-hidden bg-[#e8e6dd] sm:h-auto sm:min-h-[440px] sm:w-1/2">
          <img
            src={project.img}
            alt={project.title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#101b14]/45 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-[#101b14]/10" />

          <span className="absolute bottom-3 left-4 border border-white/60 bg-white/90 px-2.5 py-1.5 font-montserrat text-[9px] font-semibold uppercase tracking-[0.14em] text-[#173c2b] sm:bottom-6 sm:left-6 sm:px-3 sm:py-2 sm:tracking-[0.16em]">
            {project.category}
          </span>
        </div>

        {/* Modal details */}
        <div className="gallery-modal-content relative flex min-h-0 flex-1 flex-col overflow-y-auto p-4 sm:w-1/2 sm:p-8 md:p-10 lg:p-12">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center border border-[#dcded3] text-[#173c2b] transition hover:bg-[#173c2b] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173c2b] sm:right-6 sm:top-6 sm:h-10 sm:w-10"
          >
            <span aria-hidden="true" className="text-2xl leading-none">
              ×
            </span>
          </button>

          <div className="mb-4 mt-1 pr-10 sm:mb-8 sm:mt-8">
            <p className="mb-3 font-montserrat text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8c784d] sm:mb-4 sm:text-[10px] sm:tracking-[0.2em]">
              Selected project
            </p>

            <h2
              id="gallery-modal-title"
              className="font-poppins text-2xl font-medium leading-tight tracking-[-0.035em] text-[#173c2b] sm:text-4xl lg:text-5xl"
            >
              {project.title}
            </h2>

            <p className="mt-3 font-montserrat text-xs leading-6 text-[#72776c] sm:mt-5 sm:text-base sm:leading-8">
              {project.desc}
            </p>
          </div>

          <div className="mt-auto border-t border-[#e3e2d8] pt-4 sm:pt-7">
            <p className="mb-3 font-montserrat text-xs leading-5 text-[#7b7e72] sm:mb-4 sm:leading-6">
              Have a similar space in mind? Contact our team to discuss your
              requirements and project details.
            </p>

            <button
              type="button"
              onClick={() => openWhatsApp(project.title)}
              className="inline-flex min-h-11 w-full items-center justify-center gap-3 bg-[#173c2b] px-4 py-3 font-montserrat text-[10px] font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#2b5940] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173c2b] sm:min-h-12 sm:w-auto sm:px-5 sm:text-xs sm:tracking-[0.1em]"
            >
              Enquire on WhatsApp
              <Arrow diagonal />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN GALLERY COMPONENT
========================================================= */

export default function GalleryGrid() {
  const [selectedProject, setSelectedProject] = useState(null);

  const closeModal = () => setSelectedProject(null);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#faf9f5] py-10 sm:py-16 lg:py-24"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap');

        #gallery,
        .gallery-modal {
          font-family: 'Montserrat', sans-serif;
        }

        #gallery .font-poppins,
        .gallery-modal .font-poppins {
          font-family: 'Poppins', sans-serif;
        }

        #gallery .font-montserrat,
        .gallery-modal .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }

        #gallery .gallery-project {
          -webkit-tap-highlight-color: transparent;
        }

        @media (hover: none) {
          #gallery .gallery-project:active img {
            transform: scale(1.02);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #gallery *,
          #gallery *::before,
          #gallery *::after,
          .gallery-modal *,
          .gallery-modal *::before,
          .gallery-modal *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-[#e8e5d8]/50 blur-3xl sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-[38%] h-72 w-72 rounded-full bg-[#e6ebe0]/60 blur-3xl sm:h-[420px] sm:w-[420px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-3 sm:px-6 lg:px-12 xl:px-14">
        {/* Header */}
        <header className="mb-8 grid gap-5 sm:mb-12 sm:gap-7 lg:mb-16 lg:grid-cols-[1.1fr_0.75fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3 sm:mb-5">
              <span className="h-px w-9 bg-[#b99a5b]" />
              <span className="font-montserrat text-[9px] font-semibold uppercase tracking-[0.18em] text-[#6c775f] sm:text-[10px] sm:tracking-[0.22em]">
                Selected work
              </span>
            </div>

            <h1 className="max-w-3xl font-poppins text-3xl font-medium leading-[1.12] tracking-[-0.04em] text-[#173c2b] sm:text-5xl md:text-6xl lg:text-7xl">
              Crafted spaces.
              <span className="mt-1.5 block text-[#8c784d] sm:mt-2">
                Considered living.
              </span>
            </h1>
          </div>

          <div className="max-w-xl lg:ml-auto lg:pb-1">
            <p className="font-montserrat text-xs leading-6 text-[#74786e] sm:text-base sm:leading-8">
              Explore selected Cube4Spaces concepts across kitchens, homes,
              bedrooms, offices and creative workspaces. Each project starts
              with an understanding of how the space should work for you.
            </p>

            <button
              type="button"
              onClick={() => openWhatsApp("Project Gallery")}
              className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-3 bg-[#173c2b] px-4 py-3 font-montserrat text-[10px] font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[#2b5940] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#173c2b] sm:mt-6 sm:w-auto sm:min-w-[220px] sm:gap-4 sm:px-6 sm:text-xs sm:tracking-[0.12em]"
            >
              Discuss your project
              <Arrow diagonal />
            </button>
          </div>
        </header>

        {/* Gallery introduction */}
        <div className="mb-4 flex items-end justify-between gap-3 border-b border-[#e2e1d7] pb-3 sm:mb-7 sm:gap-4 sm:pb-5">
          <div>
            <p className="font-montserrat text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8c784d] sm:text-[10px] sm:tracking-[0.18em]">
              Portfolio
            </p>
            <h2 className="mt-1.5 font-poppins text-xl font-medium text-[#173c2b] sm:mt-2 sm:text-3xl">
              A closer look
            </h2>
          </div>

          <span className="pb-1 font-montserrat text-[9px] uppercase tracking-[0.1em] text-[#85877b] sm:text-xs sm:tracking-[0.12em]">
            06 projects
          </span>
        </div>

        {/* Responsive gallery grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={setSelectedProject}
            />
          ))}
        </div>

        {/* Studio section */}
        <section
          id="studio"
          className="mt-12 border-t border-[#e2e1d7] pt-9 sm:mt-20 sm:pt-16 lg:mt-28 lg:pt-20"
        >
          <div className="mb-7 grid gap-5 sm:mb-12 sm:gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3 sm:mb-5">
                <span className="h-px w-8 bg-[#b99a5b]" />
                <span className="font-montserrat text-[9px] font-semibold uppercase tracking-[0.18em] text-[#6c775f] sm:text-[10px] sm:tracking-[0.2em]">
                  The studio approach
                </span>
              </div>

              <h2 className="max-w-2xl font-poppins text-2xl font-medium leading-tight tracking-[-0.03em] text-[#173c2b] sm:text-4xl lg:text-5xl">
                Good design should look beautiful
                <span className="text-[#8c784d]">
                  {" "}and live beautifully.
                </span>
              </h2>
            </div>

            <div className="max-w-xl lg:ml-auto lg:pb-1">
              <p className="font-montserrat text-xs leading-6 text-[#74786e] sm:text-base sm:leading-8">
                We bring together design planning, material selection and
                project coordination to create spaces that feel considered,
                function effectively and reflect the needs of the people who
                use them.
              </p>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
            {studioFeatures.map((card) => (
              <StudioFeatureCard key={card.label} card={card} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-6 grid gap-4 bg-[#f0efe7] p-4 sm:mt-10 sm:gap-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center md:gap-8 lg:p-10">
            <div>
              <p className="mb-2 font-montserrat text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8c784d] sm:mb-3 sm:text-[10px] sm:tracking-[0.2em]">
                Start a conversation
              </p>

              <h3 className="max-w-2xl font-poppins text-2xl font-medium leading-tight tracking-[-0.03em] text-[#173c2b] sm:text-4xl">
                Have a space in mind?
              </h3>

              <p className="mt-2 max-w-xl font-montserrat text-xs leading-6 text-[#74786e] sm:mt-3 sm:text-sm sm:leading-7">
                Tell us about your home, workplace or interior design goals.
                Let’s discuss the possibilities for your project.
              </p>
            </div>

            <button
              type="button"
              onClick={() => openWhatsApp("New Interior Project")}
              className="inline-flex min-h-11 w-full items-center justify-center gap-3 bg-[#173c2b] px-4 py-3 font-montserrat text-[10px] font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[#2b5940] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#173c2b] sm:min-h-12 sm:w-auto sm:min-w-[230px] sm:gap-4 sm:px-6 sm:py-4 sm:text-xs sm:tracking-[0.12em]"
            >
              Request a consultation
              <Arrow diagonal />
            </button>
          </div>
        </section>
      </div>

      {/* Accessible project details modal */}
      <ProjectModal
        project={selectedProject}
        onClose={closeModal}
      />
    </section>
  );
}
