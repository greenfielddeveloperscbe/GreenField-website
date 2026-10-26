import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  MessageCircle,
  UserCheck,
  Clock,
  Shield,
  Leaf,
  ArrowUpRight,
  Building2,
  Users,
  FileCheck,
  Sparkles,
  Calendar,
  Compass,
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
      className={`transition-all duration-1000 ease-out ${className}`}
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
// CONTACT PAGE
// =====================================================

export default function ContactPage() {
  const pageRef = useRef(null);
  const [drift, setDrift] = useState({ x: 0, y: 0 });
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    project: "",
    budget: "",
    message: "",
  });

  const handleMove = useCallback((e) => {
    const el = pageRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    setDrift({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  }, []);

  const handleLeave = useCallback(
    () => setDrift({ x: 0, y: 0 }),
    []
  );

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Greenfield enquiry:", formData);
    setSubmitted(true);
  };

  const inputClass = `
    font-['Montserrat',sans-serif]
    w-full
    min-w-0
    rounded-xl
    border
    border-slate-200
    bg-white
    px-3.5
    py-3
    text-sm
    font-medium
    text-slate-900
    outline-none
    transition-all
    duration-300
    placeholder:text-slate-400
    hover:border-slate-300
    focus:border-emerald-500
    focus:ring-4
    focus:ring-emerald-500/10
    sm:px-4
    sm:py-3.5
  `;

  const labelClass = `
    font-['Poppins',sans-serif]
    mb-2
    block
    text-[10px]
    font-black
    uppercase
    tracking-[0.15em]
    text-slate-500
  `;

  return (
    <main
      ref={pageRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="contact-page relative w-full overflow-hidden bg-[#f7f8f5]"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Poppins:wght@400;500;600;700;800;900&display=swap');

        .contact-page {
          font-family: 'Montserrat', sans-serif;
        }

        .contact-page h1,
        .contact-page h2,
        .contact-page h3 {
          font-family: 'Poppins', sans-serif;
        }

        .contact-page input,
        .contact-page select,
        .contact-page textarea {
          max-width: 100%;
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-page *,
          .contact-page *::before,
          .contact-page *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#0a1f14] py-14 text-white sm:py-18 md:py-24 lg:py-28">
        {/* Grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Parallax orbs */}
        <div
          className="pointer-events-none absolute -left-40 -top-40 h-[300px] w-[300px] rounded-full bg-emerald-500/15 blur-[100px] sm:h-[450px] sm:w-[450px] md:h-[600px] md:w-[600px] md:blur-[140px]"
          style={{
            transform: `translate3d(${drift.x * -50}px, ${drift.y * -50}px, 0)`,
          }}
        />

        <div
          className="pointer-events-none absolute -right-40 bottom-0 h-[350px] w-[350px] rounded-full bg-amber-500/10 blur-[110px] sm:h-[500px] sm:w-[500px] md:h-[700px] md:w-[700px] md:blur-[160px]"
          style={{
            transform: `translate3d(${drift.x * 60}px, ${drift.y * 60}px, 0)`,
          }}
        />

        {/* Decorative ring */}
        <div
          className="pointer-events-none absolute right-[8%] top-[12%] hidden h-40 w-40 rounded-full border border-white/10 lg:block"
          style={{
            transform: `translate3d(${drift.x * 40}px, ${drift.y * 40}px, 0)`,
          }}
        >
          <div className="absolute inset-4 rounded-full border border-emerald-400/20" />
          <div className="absolute inset-10 rounded-full bg-emerald-400/5 blur-md" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-4 min-[420px]:px-5 sm:px-8 lg:px-12 xl:px-16">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-200/70 sm:mb-8 sm:gap-3 sm:text-[11px] sm:tracking-[0.22em]">
            <a href="/" className="transition hover:text-white">
              Home
            </a>
            <span className="h-px w-5 bg-emerald-300/40 sm:w-6" />
            <span className="text-white">Contact Us</span>
          </nav>

          <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <Reveal>
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-2 backdrop-blur sm:mb-8 sm:gap-3 sm:px-5 sm:py-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>

                  <span className="font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.16em] text-emerald-100 sm:text-[10px] sm:tracking-[0.22em]">
                    Greenfield Housing India
                  </span>
                </div>

                <h1 className="font-['Poppins',sans-serif] text-[clamp(2.25rem,8.5vw,3rem)] font-black leading-[1.02] tracking-[-0.03em] min-[420px]:text-[3rem] sm:text-[60px] md:text-[72px] lg:text-[84px]">
                  Let's find a place
                  <br />
                  <span className="bg-gradient-to-r from-emerald-300 via-emerald-200 to-amber-200 bg-clip-text text-transparent">
                    that feels
                  </span>
                  <br />
                  <span className="font-light italic text-emerald-100/90">
                    like home.
                  </span>
                </h1>

                <p className="mt-5 max-w-2xl font-['Montserrat',sans-serif] text-sm font-medium leading-relaxed text-emerald-50/70 sm:mt-8 sm:text-base md:text-lg">
                  Tell us what you're looking for — our team will help you
                  explore the right Greenfield property across Coimbatore and
                  Erode. RERA-registered, DTCP-approved, and built with care.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="space-y-4 border-l-2 border-emerald-400/30 pl-4 sm:space-y-6 sm:pl-6">
                <div>
                  <p className="font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.22em] text-emerald-300/70">
                    Serving
                  </p>
                  <p className="mt-1 font-['Poppins',sans-serif] text-base font-black text-white sm:text-lg">
                    Coimbatore &amp; Erode
                  </p>
                </div>

                <div>
                  <p className="font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.22em] text-emerald-300/70">
                    Trusted Since
                  </p>
                  <p className="mt-1 font-['Poppins',sans-serif] text-base font-black text-white sm:text-lg">
                    2012 · 13+ Years
                  </p>
                </div>

                <div>
                  <p className="font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.22em] text-emerald-300/70">
                    Response Time
                  </p>
                  <p className="mt-1 font-['Poppins',sans-serif] text-base font-black text-white sm:text-lg">
                    Within 2 Hours
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN — FORM + CONTACT SIDEBAR
      ===================================================== */}

      <section className="relative -mt-6 sm:-mt-10 md:-mt-16">
        <div className="relative z-20 mx-auto w-full max-w-[1500px] px-4 min-[420px]:px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid min-w-0 gap-5 sm:gap-6 lg:grid-cols-[1.15fr_.85fr]">
            {/* FORM CARD */}
            <Reveal>
              <div className="relative min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_25px_80px_-30px_rgba(15,60,35,0.25)] min-[420px]:p-5 sm:rounded-[1.5rem] sm:p-6 md:rounded-[2rem] md:p-10 lg:p-12">
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-100 blur-[80px]" />

                <div className="relative min-w-0">
                  {/* Header */}
                  <div className="mb-6 flex items-end justify-between gap-3 border-b border-slate-100 pb-5 sm:mb-8 sm:gap-4 sm:pb-6">
                    <div className="min-w-0">
                      <span className="font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.22em] text-emerald-700">
                        Property Enquiry
                      </span>
                      <h2 className="mt-3 font-['Poppins',sans-serif] text-xl font-black leading-tight tracking-tight text-slate-950 sm:text-2xl md:text-3xl">
                        Tell us what you need.
                      </h2>
                    </div>
                    <Leaf className="hidden h-7 w-7 shrink-0 text-emerald-200 sm:block" />
                  </div>

                  {/* Form / Success */}
                  {submitted ? (
                    <div className="flex min-h-[300px] flex-col items-center justify-center text-center sm:min-h-[400px]">
                      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-4 ring-emerald-100 sm:h-20 sm:w-20">
                        <CheckCircle2 size={32} className="sm:hidden" />
                        <CheckCircle2 size={36} className="hidden sm:block" />
                      </div>

                      <h3 className="font-['Poppins',sans-serif] text-2xl font-black text-slate-950">
                        Enquiry Received
                      </h3>

                      <p className="mt-3 max-w-sm font-['Montserrat',sans-serif] text-sm leading-relaxed text-slate-500">
                        Thank you for reaching out. Our Greenfield team —
                        including Vetri — will get back to you within 2 hours.
                      </p>

                      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <a
                          href="tel:+917395864774"
                          className="inline-flex items-center gap-2 rounded-full bg-emerald-950 px-4 py-3 font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.15em] text-white transition hover:bg-emerald-800 sm:px-6 sm:text-[11px]"
                        >
                          <Phone size={13} />
                          Call Vetri Now
                        </a>

                        <a
                          href="https://wa.me/917395864774?text=Hi%20Vetri%2C%20I%20just%20submitted%20a%20Greenfield%20enquiry."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.15em] text-slate-900 transition hover:border-emerald-300 sm:px-6 sm:text-[11px]"
                        >
                          <MessageCircle size={13} />
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-4 sm:space-y-5"
                    >
                      {/* Row 1 */}
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                        <div className="min-w-0">
                          <label htmlFor="name" className={labelClass}>
                            Full Name *
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="Your full name"
                          />
                        </div>

                        <div className="min-w-0">
                          <label htmlFor="phone" className={labelClass}>
                            Phone Number *
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="+91 73958 64774"
                          />
                        </div>
                      </div>

                      {/* Row 2 */}
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                        <div className="min-w-0">
                          <label htmlFor="email" className={labelClass}>
                            Email Address
                          </label>
                          <input
                            id="email"
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
                          <label htmlFor="propertyType" className={labelClass}>
                            Property Type *
                          </label>
                          <select
                            id="propertyType"
                            name="propertyType"
                            required
                            value={formData.propertyType}
                            onChange={handleChange}
                            className={inputClass}
                          >
                            <option value="">Select property type</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Villa">Luxury Villa</option>
                            <option value="Residential Plot">
                              Residential Plot
                            </option>
                            <option value="Gated Community">
                              Gated Community
                            </option>
                          </select>
                        </div>
                      </div>

                      {/* Row 3 */}
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                        <div className="min-w-0">
                          <label htmlFor="project" className={labelClass}>
                            Interested Project
                          </label>
                          <select
                            id="project"
                            name="project"
                            value={formData.project}
                            onChange={handleChange}
                            className={inputClass}
                          >
                            <option value="">Select a project</option>

                            <optgroup label="Ongoing Projects">
                              <option value="Lavender">
                                Lavender — Saravanampatti
                              </option>
                              <option value="Emerald City">
                                Emerald City — Saravanampatti
                              </option>
                              <option value="Crystal Gateway">
                                Crystal Gateway — Sulur
                              </option>
                              <option value="Diamond Avenue">
                                Diamond Avenue — Pattanam Pudur
                              </option>
                              <option value="Fairland">
                                Fairland — Ponnigoundapudur
                              </option>
                              <option value="Crown City">
                                Crown City — Kovilpalayam
                              </option>
                              <option value="Silver City">
                                Silver City — Kariyampalayam
                              </option>
                            </optgroup>

                            <optgroup label="Completed Projects">
                              <option value="Maple">Maple — Kalapatti</option>
                              <option value="Nandavanam">
                                Nandavanam — Neelambur
                              </option>
                              <option value="Ruby Lands">
                                Ruby Lands — Neelambur
                              </option>
                              <option value="Tulip Garden">
                                Tulip Garden — Kalapatti
                              </option>
                            </optgroup>

                            <optgroup label="Ready to Occupy">
                              <option value="Bougain Villea">
                                Bougain Villea — Vilankurichi
                              </option>
                              <option value="Coral Residency">
                                Coral Residency — Vellanaipatti
                              </option>
                              <option value="Platina">
                                Platina — Vilankurichi
                              </option>
                            </optgroup>

                            <option value="Not Sure">I'm not sure yet</option>
                          </select>
                        </div>

                        <div className="min-w-0">
                          <label htmlFor="budget" className={labelClass}>
                            Budget Range
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className={inputClass}
                          >
                            <option value="">Select budget</option>
                            <option value="Under ₹50L">Under ₹50L</option>
                            <option value="₹50L – ₹75L">₹50L – ₹75L</option>
                            <option value="₹75L – ₹1Cr">₹75L – ₹1Cr</option>
                            <option value="₹1Cr+">₹1Cr +</option>
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className={labelClass}>
                          Your Requirement
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className={`${inputClass} resize-y`}
                          placeholder="Tell us your preferred location, preferred visit date, or any specific requirement..."
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="group flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-emerald-950 px-4 py-3.5 font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-emerald-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-800 active:scale-[.98] sm:px-6 sm:py-4 sm:text-[11px] sm:tracking-[0.15em]"
                      >
                        Send Property Enquiry
                        <Send
                          size={15}
                          className="shrink-0 transition-transform group-hover:translate-x-1"
                        />
                      </button>

                      <p className="text-center font-['Montserrat',sans-serif] text-[10px] font-medium leading-relaxed text-slate-400">
                        Your details are used only for property enquiry and
                        follow-up. We never share your data.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </Reveal>

            {/* SIDEBAR */}
            <div className="grid min-w-0 content-start gap-5 sm:gap-6">
              {/* Sales Contact */}
              <Reveal delay={100}>
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-700 via-emerald-800 to-[#0a1f14] p-5 text-white shadow-2xl min-[420px]:p-6 sm:rounded-[1.5rem] sm:p-8 md:rounded-[2rem] md:p-10">
                  <div className="pointer-events-none absolute -right-20 -top-20 h-[220px] w-[220px] rounded-full bg-emerald-400/20 blur-[80px] sm:h-[300px] sm:w-[300px] sm:blur-[100px]" />
                  <div className="pointer-events-none absolute -bottom-20 -left-20 h-[200px] w-[200px] rounded-full bg-amber-400/10 blur-[80px] sm:h-[250px] sm:w-[250px] sm:blur-[90px]" />

                  <div className="relative">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.15em] text-emerald-100 backdrop-blur sm:px-4 sm:text-[10px] sm:tracking-[0.22em]">
                      <UserCheck className="h-3 w-3" />
                      Your Sales Contact
                    </span>

                    <div className="mt-5 flex items-center gap-3 sm:mt-6 sm:gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-emerald-800 shadow-xl sm:h-16 sm:w-16">
                        <UserCheck className="h-7 w-7 sm:h-8 sm:w-8" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-['Poppins',sans-serif] text-2xl font-black text-white sm:text-3xl">
                          Vetri
                        </h3>
                        <p className="mt-0.5 font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.15em] text-emerald-200 sm:text-[10px] sm:tracking-[0.18em]">
                          Sales Manager
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 space-y-3 sm:mt-8">
                      <a
                        href="tel:+917395864774"
                        className="flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10 sm:gap-4 sm:p-4"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-emerald-300">
                          <Phone size={16} />
                        </div>
                        <div className="min-w-0">
                          <p className="font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.15em] text-emerald-200/70">
                            Direct Line
                          </p>
                          <p className="mt-0.5 break-words font-['Montserrat',sans-serif] text-sm font-bold text-white">
                            +91 73958 64774
                          </p>
                        </div>
                      </a>

                      <a
                        href="https://wa.me/917395864774?text=Hi%20Vetri%2C%20I%27m%20interested%20in%20Greenfield%20Housing%20projects."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10 sm:gap-4 sm:p-4"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-emerald-300">
                          <MessageCircle size={16} />
                        </div>
                        <div className="min-w-0">
                          <p className="font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.15em] text-emerald-200/70">
                            WhatsApp
                          </p>
                          <p className="mt-0.5 font-['Montserrat',sans-serif] text-sm font-bold text-white">
                            Chat instantly
                          </p>
                        </div>
                      </a>

                      <a
                        href="mailto:info@gfhil.com"
                        className="flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10 sm:gap-4 sm:p-4"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-emerald-300">
                          <Mail size={16} />
                        </div>
                        <div className="min-w-0">
                          <p className="font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.15em] text-emerald-200/70">
                            Email
                          </p>
                          <p className="mt-0.5 break-words font-['Montserrat',sans-serif] text-sm font-bold text-white">
                            info@gfhil.com
                          </p>
                        </div>
                      </a>
                    </div>

                    <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-5 font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.12em] text-emerald-200/80 sm:text-[10px] sm:tracking-[0.14em]">
                      <Clock size={13} />
                      Mon – Sat · 9 AM – 7 PM
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Corporate Office */}
              <Reveal delay={150}>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm min-[420px]:p-5 sm:rounded-[1.5rem] sm:p-6 md:rounded-[2rem] md:p-8">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 sm:h-12 sm:w-12">
                      <MapPin size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.18em] text-emerald-700">
                        Corporate Office
                      </p>
                      <p className="mt-2 font-['Montserrat',sans-serif] text-sm font-medium leading-relaxed text-slate-700">
                        No.14/15, A1, Sitra Road,
                        <br />
                        Kalapatti, Near BOSCH Global
                        <br />
                        Software Technologies,
                        <br />
                        Coimbatore, Tamil Nadu – 641048
                      </p>

                      <a
                        href="https://maps.google.com/?q=Greenfield+Housing+India+Kalapatti+Coimbatore"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.15em] text-emerald-700 transition hover:text-emerald-900"
                      >
                        Get Directions
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Plan Site Visit */}
              <Reveal delay={200}>
                <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-white p-4 shadow-sm min-[420px]:p-5 sm:rounded-[1.5rem] sm:p-6 md:rounded-[2rem] md:p-8">
                  <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-lg sm:h-12 sm:w-12">
                      <Calendar size={20} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-['Poppins',sans-serif] text-sm font-black text-slate-950 sm:text-base">
                        Plan a Site Visit
                      </h3>
                      <p className="mt-1 font-['Montserrat',sans-serif] text-xs font-medium leading-relaxed text-slate-500">
                        Experience the project yourself.
                      </p>
                    </div>
                  </div>

                  <a
                    href="tel:+917395864774"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-950 text-white transition hover:bg-emerald-700 sm:h-11 sm:w-11"
                    aria-label="Call Vetri for site visit"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </Reveal>

              {/* Trust Badges */}
              <Reveal delay={250}>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { icon: Shield, label: "RERA" },
                    { icon: FileCheck, label: "DTCP" },
                    { icon: Sparkles, label: "CREDAI" },
                  ].map((badge) => {
                    const Icon = badge.icon;

                    return (
                      <div
                        key={badge.label}
                        className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-3 text-center sm:rounded-2xl sm:p-4"
                      >
                        <Icon className="h-5 w-5 text-emerald-600" />
                        <p className="mt-2 font-['Poppins',sans-serif] text-[8px] font-black uppercase tracking-[0.1em] text-slate-800 sm:text-[9px] sm:tracking-[0.15em]">
                          {badge.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAP SECTION
      ===================================================== */}

      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1500px] px-4 min-[420px]:px-5 sm:px-8 lg:px-12 xl:px-16">
          <Reveal>
            <div className="mb-7 flex flex-wrap items-end justify-between gap-4 sm:mb-10 sm:gap-6">
              <div>
                <span className="font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.22em] text-emerald-700">
                  Visit Us
                </span>
                <h2 className="mt-3 font-['Poppins',sans-serif] text-2xl font-black leading-tight tracking-tight text-slate-950 sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl">
                  Our Corporate Office
                </h2>
                <p className="mt-4 max-w-2xl font-['Montserrat',sans-serif] text-sm font-medium leading-relaxed text-slate-600 md:text-base">
                  No.14/15, A1, Sitra Road, Kalapatti, Near BOSCH Global
                  Software Technologies, Coimbatore — Tamil Nadu 641048
                </p>
              </div>

              <a
                href="https://www.google.com/maps?q=10.999396,77.129444"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.12em] text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700 sm:px-5 sm:text-[10px] sm:tracking-[0.15em]"
              >
                <MapPin className="h-4 w-4 shrink-0" />
                Open in Google Maps
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl sm:rounded-[1.5rem] md:rounded-[2rem]">
              <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] md:aspect-[21/9]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3916.522141599098!2d77.12686537504511!3d10.999396289163213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDU5JzU3LjgiTiA3N8KwMDcnNDYuMCJF!5e0!3m2!1sen!2sin!4v1791607564427!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Greenfield Housing India — Corporate Office Location"
                  className="absolute inset-0 h-full w-full"
                />
              </div>

              {/* Map information */}
              <div className="grid gap-5 border-t border-slate-100 p-4 sm:p-6 md:grid-cols-3 md:p-8">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">
                      Address
                    </p>
                    <p className="mt-1 font-['Montserrat',sans-serif] text-sm font-medium leading-relaxed text-slate-800">
                      Sitra Road, Kalapatti
                      <br />
                      Coimbatore – 641048
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">
                      Office Hours
                    </p>
                    <p className="mt-1 font-['Montserrat',sans-serif] text-sm font-medium leading-relaxed text-slate-800">
                      Mon – Sat · 9 AM – 7 PM
                      <br />
                      Sunday · Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Compass className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">
                      Landmark
                    </p>
                    <p className="mt-1 font-['Montserrat',sans-serif] text-sm font-medium leading-relaxed text-slate-800">
                      Near BOSCH Global
                      <br />
                      Software Technologies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          FAQ SECTION
      ===================================================== */}

      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1500px] px-4 min-[420px]:px-5 sm:px-8 lg:px-12 xl:px-16">
          <Reveal>
            <div className="mb-8 max-w-3xl sm:mb-10 md:mb-14">
              <span className="font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.22em] text-emerald-700">
                Common Questions
              </span>
              <h2 className="mt-4 font-['Poppins',sans-serif] text-2xl font-black leading-tight tracking-tight text-slate-950 sm:text-3xl md:text-4xl lg:text-5xl">
                Frequently Asked Questions
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
            {[
              {
                q: "How quickly will I get a response?",
                a: "Our sales team responds within 2 business hours. For urgent enquiries, call Vetri directly at +91 73958 64774.",
              },
              {
                q: "Are your projects RERA registered?",
                a: "Yes. Crystal Gateway (TN/11/Layout/0360/2025) and Fairland (TN/11/Layout/1405/2023) are fully RERA-registered, along with all our plotted developments.",
              },
              {
                q: "Can I schedule a site visit?",
                a: "Absolutely. Call or WhatsApp Vetri at +91 73958 64774 to schedule a guided site visit at any of our projects in Coimbatore and Erode.",
              },
              {
                q: "Do you assist with home loans?",
                a: "Yes. We provide end-to-end loan assistance guidance through our partner banks, with up to 80% financing available on eligible projects.",
              },
              {
                q: "Where are your projects located?",
                a: "Our projects span prime locations across Coimbatore — Saravanampatti, Kalapatti, Sulur, Kovilpalayam, Kariyampalayam, Vilankurichi, Neelambur, Ponnigoundapudur — and Erode.",
              },
              {
                q: "What documents are needed for booking?",
                a: "You'll need ID proof, address proof, PAN card, and a booking cheque. Our team will guide you through the entire documentation process.",
              },
            ].map((faq, idx) => (
              <Reveal key={faq.q} delay={idx * 60}>
                <div className="group h-full rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all hover:border-emerald-200 hover:bg-white hover:shadow-md sm:p-5 md:p-6">
                  <h3 className="font-['Poppins',sans-serif] text-sm font-black text-slate-950 sm:text-base md:text-lg">
                    {faq.q}
                  </h3>
                  <p className="mt-2 font-['Montserrat',sans-serif] text-sm font-medium leading-relaxed text-slate-600 sm:mt-3">
                    {faq.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#0a1f14] py-14 text-white sm:py-18 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="pointer-events-none absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-[100px] sm:h-[500px] sm:w-[500px] md:h-[600px] md:w-[600px] md:blur-[140px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-4 min-[420px]:px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <Reveal>
              <div>
                <span className="font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.22em] text-emerald-300">
                  Still Have Questions?
                </span>

                <h2 className="mt-4 font-['Poppins',sans-serif] text-3xl font-black leading-[1.05] tracking-tight sm:mt-5 sm:text-4xl md:text-5xl lg:text-6xl">
                  Talk to our team
                  <br />
                  <span className="font-light italic text-emerald-300">
                    directly.
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl font-['Montserrat',sans-serif] text-sm font-medium leading-relaxed text-emerald-50/70 sm:mt-6 sm:text-base md:text-lg">
                  Whether you're a first-time buyer, an investor, or looking
                  for your forever home — we're here to help you make the
                  right decision.
                </p>

                <div className="mt-6 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
                  <a
                    href="tel:+917395864774"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-5 py-3 font-['Poppins',sans-serif] text-xs font-bold text-emerald-950 shadow-xl shadow-emerald-500/20 transition-all hover:-translate-y-1 hover:bg-emerald-300 sm:gap-3 sm:px-8 sm:py-4 sm:text-sm"
                  >
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                    Call Vetri
                  </a>

                  <a
                    href="https://wa.me/917395864774?text=Hi%20Vetri%2C%20I%27d%20like%20to%20know%20more%20about%20Greenfield%20projects."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 font-['Poppins',sans-serif] text-xs font-bold text-white backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/10 sm:gap-3 sm:px-8 sm:py-4 sm:text-sm"
                  >
                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
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
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur transition-colors hover:border-emerald-400/30 hover:bg-white/[0.06] sm:p-5"
                    >
                      <Icon className="h-5 w-5 text-emerald-300 sm:h-6 sm:w-6" />
                      <p className="mt-3 font-['Poppins',sans-serif] text-2xl font-black text-white sm:mt-4 sm:text-3xl">
                        {item.value}
                      </p>
                      <p className="mt-1 font-['Poppins',sans-serif] text-[8px] font-black uppercase tracking-[0.12em] text-emerald-200/70 sm:text-[10px] sm:tracking-[0.18em]">
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