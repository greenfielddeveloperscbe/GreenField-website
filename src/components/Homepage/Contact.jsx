import { useState } from "react";
import {
  ArrowUpRight,
  Send,
  Phone,
  Mail,
  MapPin,
  Leaf,
  CheckCircle2,
  MessageCircle,
  UserCheck,
  Clock,
  Shield,
  Compass,
  Calendar,
} from "lucide-react";

/* =========================================================
   FONT STYLES
   Headings: Poppins
   Body, form fields and buttons: Montserrat
========================================================= */

const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap');

  .greenfield-contact {
    font-family: 'Montserrat', sans-serif;
  }

  .greenfield-contact h1,
  .greenfield-contact h2,
  .greenfield-contact h3,
  .greenfield-contact h4 {
    font-family: 'Poppins', sans-serif;
  }

  .greenfield-contact p,
  .greenfield-contact span,
  .greenfield-contact label,
  .greenfield-contact input,
  .greenfield-contact select,
  .greenfield-contact textarea,
  .greenfield-contact button,
  .greenfield-contact a,
  .greenfield-contact address {
    font-family: 'Montserrat', sans-serif;
  }

  .greenfield-contact input,
  .greenfield-contact select,
  .greenfield-contact textarea {
    max-width: 100%;
    box-sizing: border-box;
  }

  .greenfield-contact iframe {
    display: block;
  }

  @media (max-width: 639px) {
    .greenfield-contact .contact-container {
      padding-left: 14px;
      padding-right: 14px;
    }

    .greenfield-contact .contact-main-heading {
      font-size: clamp(27px, 7vw, 34px);
      line-height: 1.16;
    }

    .greenfield-contact .contact-section-heading {
      font-size: 19px;
      line-height: 1.35;
    }

    .greenfield-contact .contact-description {
      font-size: 12px;
      line-height: 1.7;
    }

    .greenfield-contact .contact-form-card {
      padding: 15px;
      border-radius: 17px;
    }

    .greenfield-contact .contact-input {
      min-height: 43px;
      padding: 10px 12px;
      font-size: 12px;
      border-radius: 10px;
    }

    .greenfield-contact .contact-field-label {
      margin-bottom: 6px;
      font-size: 9px;
    }

    .greenfield-contact .contact-form-fields {
      gap: 14px;
    }

    .greenfield-contact .contact-form-submit {
      min-height: 46px;
      padding: 11px 14px;
      font-size: 10px;
    }

    .greenfield-contact .contact-sidebar-card {
      padding: 16px;
      border-radius: 17px;
    }

    .greenfield-contact .contact-map-heading {
      font-size: 21px;
      line-height: 1.3;
    }

    .greenfield-contact .contact-map-frame {
      aspect-ratio: 4 / 3;
    }

    .greenfield-contact .contact-bottom-cta {
      padding: 15px;
      gap: 12px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .greenfield-contact *,
    .greenfield-contact *::before,
    .greenfield-contact *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

/* =========================================================
   CONTACT DATA
========================================================= */

const PHONE_NUMBER = "917395864774";
const EMAIL_ADDRESS = "greenfield.developers.cbe@gmail.com";

const projectGroups = [
  {
    group: "Ongoing Projects",
    items: [
      ["Lavender", "Lavender — Saravanampatti"],
      ["Emerald City", "Emerald City — Saravanampatti"],
      ["Crystal Gateway", "Crystal Gateway — Sulur"],
      ["Diamond Avenue", "Diamond Avenue — Pattanam Pudur"],
      ["Fairland", "Fairland — Ponnigoundapudur"],
      ["Crown City", "Crown City — Kovilpalayam"],
      ["Silver City", "Silver City — Kariyampalayam"],
    ],
  },
  {
    group: "Completed Projects",
    items: [
      ["Maple", "Maple — Kalapatti"],
      ["Nandavanam", "Nandavanam — Neelambur"],
      ["Ruby Lands", "Ruby Lands — Neelambur"],
      ["Tulip Garden", "Tulip Garden — Kalapatti"],
    ],
  },
  {
    group: "Ready to Occupy",
    items: [
      ["Bougain Villea", "Bougain Villea — Vilankurichi"],
      ["Coral Residency", "Coral Residency — Vellanaipatti"],
      ["Platina", "Platina — Vilankurichi"],
    ],
  },
];

const trustItems = [
  { icon: Shield, label: "RERA Registered" },
  { icon: UserCheck, label: "15K+ Families" },
  { icon: Clock, label: "Since 2012" },
  { icon: Leaf, label: "1000+ Acres" },
];

const inputClass =
  "contact-input block w-full min-w-0 rounded-xl border border-[#dbe5d8] bg-[#f8faf7] px-3.5 py-3 text-sm text-[#173b21] outline-none transition placeholder:text-[#98a498] hover:border-[#b7cbb4] focus:border-[#4d8b58] focus:bg-white focus:ring-4 focus:ring-[#4d8b58]/10 sm:px-4 sm:py-3.5";

const labelClass =
  "contact-field-label mb-2 block text-[10px] font-bold uppercase tracking-[0.12em] text-[#647465] sm:tracking-[0.14em]";

const eyebrowClass =
  "text-[9px] font-bold uppercase tracking-[0.13em] text-[#4d8b58] sm:text-[10px] sm:tracking-[0.16em]";

function SectionEyebrow({ children, light = false }) {
  return (
    <div
      className={`mb-2.5 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.14em] sm:mb-3 sm:text-[10px] sm:tracking-[0.17em] ${
        light ? "text-[#b8d5bc]" : "text-[#4d8b58]"
      }`}
    >
      <span className="h-px w-5 bg-current sm:w-6" />
      {children}
    </div>
  );
}

function ContactLink({ icon: Icon, label, href, external, children }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex min-w-0 items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.05] p-2.5 transition-colors hover:bg-white/10 sm:gap-3 sm:p-3.5"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#c9e1cc] sm:h-10 sm:w-10">
        <Icon size={16} />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block text-[8px] font-bold uppercase tracking-[0.1em] text-[#a7bda9] sm:text-[9px] sm:tracking-[0.12em]">
          {label}
        </span>

        <span className="mt-1 block break-words text-xs font-semibold leading-5 text-white sm:text-sm">
          {children}
        </span>
      </span>

      <ArrowUpRight
        size={14}
        className="shrink-0 text-[#a7bda9] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  );
}

/* =========================================================
   CONTACT PAGE
========================================================= */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    project: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = [
      "Hello Vetri, I would like to enquire about Greenfield Housing.",
      "",
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email || "Not provided"}`,
      `Property Type: ${formData.propertyType}`,
      `Interested Project: ${formData.project || "Not decided"}`,
      `Requirement: ${formData.message || "Not specified"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp directly from the user-submitted form.
    const whatsappWindow = window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

    // Show a fallback link if the browser blocks the popup.
    if (whatsappWindow) {
      setSubmitted(true);
    } else {
      setSubmitted(true);
    }
  };

  const genericWhatsAppUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    "Hi Vetri, I would like to enquire about Greenfield Housing projects."
  )}`;

  return (
    <section
      id="contact"
      className="greenfield-contact relative isolate overflow-hidden bg-[#f4f7f1] py-9 sm:py-14 md:py-20 lg:py-24"
    >
      <style>{fontStyles}</style>

      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 -z-10 h-56 w-56 rounded-full bg-[#dcebd8]/70 blur-[80px] sm:h-96 sm:w-96 sm:blur-[90px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-20 -z-10 h-64 w-64 rounded-full bg-[#e2ecdd]/80 blur-[90px] sm:h-[450px] sm:w-[450px] sm:blur-[100px]"
      />

      <div className="contact-container mx-auto w-full max-w-[1280px] px-3.5 sm:px-6 lg:px-8 xl:px-10">
        {/* Header */}
        <div className="mb-7 grid gap-5 sm:mb-10 sm:gap-7 md:mb-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-10">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d7e4d3] bg-white px-3 py-1.5 sm:mb-5 sm:px-3.5 sm:py-2">
              <Leaf size={14} className="text-[#4d8b58]" />

              <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#376944] sm:text-[10px] sm:tracking-[0.15em]">
                Greenfield Housing India
              </span>
            </div>

            <h2 className="contact-main-heading max-w-3xl text-[29px] font-semibold leading-[1.12] tracking-tight text-[#173b21] sm:text-4xl md:text-5xl lg:text-[58px]">
              Let's find a place
              <span className="block text-[#4d8b58]">
                that feels like home.
              </span>
            </h2>

            <p className="contact-description mt-3 max-w-2xl text-xs leading-6 text-[#687568] sm:mt-5 sm:text-base sm:leading-7">
              Tell us what you're looking for. Our team will help you explore
              Greenfield properties across Coimbatore and Erode.
            </p>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {trustItems.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex min-h-[58px] min-w-0 items-center gap-2 rounded-xl border border-[#dce8da] bg-white p-2.5 transition-colors hover:border-[#b9d0b6] sm:min-h-[68px] sm:gap-3 sm:p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#edf5eb] text-[#4d8b58] sm:h-9 sm:w-9">
                  <Icon size={15} />
                </span>

                <span className="text-[8px] font-bold uppercase leading-4 tracking-[0.04em] text-[#3e6d47] sm:text-[10px] sm:tracking-[0.08em]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form and contact sidebar */}
        <div className="grid min-w-0 grid-cols-1 items-start gap-4 sm:gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-7">
          {/* Enquiry form */}
          <div className="contact-form-card min-w-0 rounded-2xl border border-[#dce8da] bg-white p-4 shadow-[0_16px_45px_rgba(23,59,33,0.06)] sm:rounded-3xl sm:p-7 md:p-9">
            <div className="mb-5 flex items-start justify-between gap-3 border-b border-[#e8efe6] pb-4 sm:mb-7 sm:pb-6">
              <div>
                <SectionEyebrow>Property Enquiry</SectionEyebrow>

                <h3 className="contact-section-heading text-xl font-semibold tracking-tight text-[#173b21] sm:text-2xl">
                  Tell us what you need.
                </h3>

                <p className="contact-description mt-2 text-xs leading-5 text-[#7a8679] sm:text-sm">
                  Share a few details to begin your property search.
                </p>
              </div>

              <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#edf5eb] text-[#4d8b58] sm:flex">
                <Leaf size={22} />
              </span>
            </div>

            {submitted ? (
              <div className="flex min-h-[250px] flex-col items-center justify-center py-7 text-center sm:min-h-[300px] sm:py-8">
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#e7f2e5] text-[#4d8b58] ring-8 ring-[#e7f2e5]/50 sm:mb-5 sm:h-20 sm:w-20">
                  <CheckCircle2 size={30} />
                </span>

                <h3 className="text-xl font-semibold text-[#173b21] sm:text-2xl">
                  Your enquiry is ready
                </h3>

                <p className="contact-description mt-3 max-w-sm text-xs leading-6 text-[#6d786e] sm:text-sm">
                  Please send your prepared enquiry in WhatsApp to contact our
                  team. If WhatsApp did not open, use the button below.
                </p>

                <a
                  href={genericWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#173b21] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#285b33] sm:mt-6 sm:px-6 sm:text-xs sm:tracking-[0.1em]"
                >
                  <MessageCircle size={16} />
                  Open WhatsApp
                </a>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-3 rounded-md px-3 py-2 text-xs font-semibold text-[#4d8b58] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#4d8b58]/30"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="contact-form-fields space-y-4 sm:space-y-5"
              >
                {/* Name and phone */}
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
                  <div className="min-w-0">
                    <label htmlFor="contact-name" className={labelClass}>
                      Full Name *
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </div>

                  <div className="min-w-0">
                    <label htmlFor="contact-phone" className={labelClass}>
                      Phone Number *
                    </label>

                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      required
                      pattern="[0-9+\s()-]{7,20}"
                      title="Enter a valid phone number."
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="+91 73958 64774"
                    />
                  </div>
                </div>

                {/* Email and property type */}
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
                  <div className="min-w-0">
                    <label htmlFor="contact-email" className={labelClass}>
                      Email Address
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="min-w-0">
                    <label
                      htmlFor="contact-property-type"
                      className={labelClass}
                    >
                      Property Type *
                    </label>

                    <select
                      id="contact-property-type"
                      name="propertyType"
                      required
                      value={formData.propertyType}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select property</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Villa">Villa</option>
                      <option value="Residential Plot">Residential Plot</option>
                      <option value="Gated Community">Gated Community</option>
                    </select>
                  </div>
                </div>

                {/* Project selection */}
                <div>
                  <label htmlFor="contact-project" className={labelClass}>
                    Interested Project
                  </label>

                  <select
                    id="contact-project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a project</option>

                    {projectGroups.map(({ group, items }) => (
                      <optgroup key={group} label={group}>
                        {items.map(([value, label]) => (
                          <option key={value} value={value}>
                            {label}
                          </option>
                        ))}
                      </optgroup>
                    ))}

                    <option value="Not Sure">I'm not sure yet</option>
                  </select>
                </div>

                {/* Requirement */}
                <div>
                  <label htmlFor="contact-message" className={labelClass}>
                    Your Requirement
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-y`}
                    placeholder="Preferred location, budget, or property requirements..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="contact-form-submit group flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#173b21] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.08em] text-white shadow-[0_10px_25px_rgba(23,59,33,0.15)] transition-colors hover:bg-[#285b33] focus:outline-none focus:ring-4 focus:ring-[#4d8b58]/20 active:scale-[0.99] sm:min-h-14 sm:py-4 sm:text-xs sm:tracking-[0.1em]"
                >
                  Send Property Enquiry
                  <Send
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <p className="text-center text-[9px] leading-5 text-[#899489] sm:text-[10px]">
                  Your details are prepared in a WhatsApp message. You choose
                  whether to send it.
                </p>
              </form>
            )}
          </div>

          {/* Contact sidebar */}
          <div className="grid min-w-0 gap-4 sm:gap-6">
            {/* Sales manager */}
            <div className="contact-sidebar-card relative isolate overflow-hidden rounded-2xl bg-gradient-to-br from-[#173b21] to-[#285b33] p-4 shadow-[0_18px_45px_rgba(23,59,33,0.12)] sm:rounded-3xl sm:p-7 md:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 -z-10 h-40 w-40 rounded-full border-[25px] border-white/[0.06] sm:h-48 sm:w-48"
              />

              <SectionEyebrow light>Your Sales Contact</SectionEyebrow>

              <div className="flex items-center gap-3.5 sm:gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#c9e1cc] ring-1 ring-white/20 sm:h-16 sm:w-16 sm:rounded-2xl">
                  <UserCheck size={25} />
                </span>

                <div className="min-w-0">
                  <h3 className="text-xl font-semibold tracking-tight text-white sm:text-3xl">
                    Vetri
                  </h3>

                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.1em] text-[#b8d5bc] sm:text-[10px] sm:tracking-[0.13em]">
                    Sales Manager
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-2.5 sm:mt-6 sm:space-y-3">
                <ContactLink
                  icon={Phone}
                  label="Direct Line"
                  href={`tel:+${PHONE_NUMBER}`}
                >
                  +91 73958 64774
                </ContactLink>

                <ContactLink
                  icon={MessageCircle}
                  label="WhatsApp"
                  href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
                    "Hi Vetri, I'm interested in Greenfield Housing projects."
                  )}`}
                  external
                >
                  Chat with Vetri
                </ContactLink>

                <ContactLink
                  icon={Mail}
                  label="Email"
                  href={`mailto:${EMAIL_ADDRESS}`}
                >
                  {EMAIL_ADDRESS}
                </ContactLink>
              </div>

              <div className="mt-5 flex items-center gap-2 border-t border-white/15 pt-4 text-[11px] font-medium text-[#c5d9c7] sm:mt-6 sm:pt-5 sm:text-xs">
                <Clock size={14} />
                Mon – Sat · 9 AM – 7 PM
              </div>
            </div>

            {/* Office address */}
            <div className="contact-sidebar-card flex min-w-0 gap-3 rounded-2xl border border-[#dce8da] bg-white p-4 sm:gap-4 sm:rounded-3xl sm:p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#edf5eb] text-[#4d8b58] sm:h-12 sm:w-12">
                <MapPin size={19} />
              </span>

              <div className="min-w-0">
                <p className={eyebrowClass}>Corporate Office</p>

                <address className="mt-2 break-words text-xs not-italic leading-6 text-[#536052] sm:text-sm">
                  No. 14/15, A1, Sitra Road,
                  <br />
                  Kalapatti, near BOSCH Global Software Technologies,
                  <br />
                  Coimbatore, Tamil Nadu – 641048
                </address>

                <a
                  href="https://maps.google.com/?q=Greenfield+Housing+India+Kalapatti+Coimbatore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex min-h-9 items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#376944] hover:text-[#4d8b58] focus:outline-none focus:ring-2 focus:ring-[#4d8b58]/30 sm:mt-4 sm:text-[10px] sm:tracking-[0.1em]"
                >
                  View on Map
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            {/* Site visit */}
            <div className="contact-sidebar-card flex min-w-0 items-center justify-between gap-3 rounded-2xl border border-[#dce8da] bg-white p-4 sm:gap-4 sm:rounded-3xl sm:p-6">
              <div className="flex min-w-0 items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#edf5eb] text-[#4d8b58] sm:h-12 sm:w-12">
                  <Calendar size={19} />
                </span>

                <div className="min-w-0">
                  <h3 className="text-xs font-semibold text-[#173b21] sm:text-base">
                    Plan a Site Visit
                  </h3>

                  <p className="mt-1 text-[10px] leading-5 text-[#758075] sm:text-xs">
                    Experience the project yourself.
                  </p>
                </div>
              </div>

              <a
                href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
                  "Hi Vetri, I would like to arrange a site visit for a Greenfield Housing project."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Arrange a site visit with Vetri"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#173b21] text-white transition-colors hover:bg-[#285b33] focus:outline-none focus:ring-4 focus:ring-[#4d8b58]/20 sm:h-11 sm:w-11"
              >
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Map heading */}
        <div className="mt-9 flex flex-col gap-3 sm:mt-14 sm:flex-row sm:items-end sm:justify-between lg:mt-16">
          <div>
            <SectionEyebrow>
              <Compass size={13} />
              Visit Us
            </SectionEyebrow>

            <h3 className="contact-map-heading text-2xl font-semibold tracking-tight text-[#173b21] sm:text-3xl">
              Our Corporate Office
            </h3>

            <p className="contact-description mt-2 max-w-xl text-xs leading-6 text-[#6d786e] sm:text-sm">
              Kalapatti, Coimbatore — near BOSCH Global Software Technologies.
            </p>
          </div>

          <a
            href="https://www.google.com/maps?q=10.999396,77.129444"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 w-fit items-center justify-center gap-2 rounded-full border border-[#dce8da] bg-white px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.06em] text-[#376944] transition-colors hover:border-[#4d8b58] hover:bg-[#f9fbf8] focus:outline-none focus:ring-2 focus:ring-[#4d8b58]/30 sm:min-h-11 sm:px-5 sm:text-[10px] sm:tracking-[0.08em]"
          >
            <MapPin size={14} />
            Open in Google Maps
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Responsive map */}
        <div className="mt-4 overflow-hidden rounded-xl border border-[#dce8da] bg-white shadow-[0_16px_45px_rgba(23,59,33,0.06)] sm:mt-6 sm:rounded-3xl">
          <div className="contact-map-frame relative aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-[21/8]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3916.522141599098!2d77.12686537504511!3d10.999396289163213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDU5JzU3LjgiTiA3N8KwMDcnNDYuMCJF!5e0!3m2!1sen!2sin!4v1791607564427!5m2!1sen!2sin"
              title="Greenfield Housing India — Corporate Office Location"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          {/* Office information */}
          <div className="grid grid-cols-1 gap-4 border-t border-[#e8efe6] p-4 sm:grid-cols-2 sm:gap-6 sm:p-6 lg:grid-cols-3 lg:p-7">
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#edf5eb] text-[#4d8b58] sm:h-10 sm:w-10">
                <MapPin size={17} />
              </span>

              <div>
                <p className={eyebrowClass}>Address</p>

                <p className="mt-2 text-xs leading-6 text-[#536052] sm:text-sm">
                  Sitra Road, Kalapatti
                  <br />
                  Coimbatore – 641048
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#edf5eb] text-[#4d8b58] sm:h-10 sm:w-10">
                <Clock size={17} />
              </span>

              <div>
                <p className={eyebrowClass}>Office Hours</p>

                <p className="mt-2 text-xs leading-6 text-[#536052] sm:text-sm">
                  Mon – Sat · 9 AM – 7 PM
                  <br />
                  Sunday · Closed
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#edf5eb] text-[#4d8b58] sm:h-10 sm:w-10">
                <Compass size={17} />
              </span>

              <div>
                <p className={eyebrowClass}>Landmark</p>

                <p className="mt-2 text-xs leading-6 text-[#536052] sm:text-sm">
                  Near BOSCH Global
                  <br />
                  Software Technologies
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="contact-bottom-cta mt-6 flex flex-col gap-3 rounded-2xl border border-[#dce8da] bg-[#e8f0e5] p-4 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:rounded-3xl sm:px-7 sm:py-6">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#4d8b58] sm:h-10 sm:w-10">
              <Leaf size={17} />
            </span>

            <span className="text-xs font-semibold leading-5 text-[#547057] sm:text-sm">
              Homes inspired by nature — since 2012
            </span>
          </div>

          <a
            href="/allprojects"
            className="inline-flex min-h-10 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.06em] text-[#376944] transition-colors hover:text-[#4d8b58] focus:outline-none focus:ring-2 focus:ring-[#4d8b58]/30 sm:min-h-11 sm:text-xs sm:tracking-[0.08em]"
          >
            Explore Greenfield Projects
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}