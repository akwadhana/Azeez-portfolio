import React from "react";
import { motion } from "framer-motion";
import newProfile from "../assets/Azeez.jpeg";
import Rack from "../assets/rack.jpg";

interface ProfilePageProps {
  scrollToProjects: () => void;
}

const STATS = [
  { value: "96%", label: "On‑Time Delivery" },
  { value: "<5%", label: "Budget Variance" },
  { value: "9.2/10", label: "Client Satisfaction" },
];

const linkedinUrl = "https://www.linkedin.com/in/azeez-yusuf";

const MapPin = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path d="M20 10a8 8 0 1 0-16 0c0 7 8 12 8 12s8-5 8-12Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const Phone = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.42 19.42 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.2 2 2 0 0 1 4.06 2h2a2 2 0 0 1 2 1.72c.12.9.32 1.78.59 2.63a2 2 0 0 1-.45 2.11L7.1 9.91a16 16 0 0 0 6 6l1.45-1.1a2 2 0 0 1 2.11-.45c.85.27 1.73.47 2.63.59A2 2 0 0 1 22 16.92Z" />
  </svg>
);
const Mail = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
const LinkedIn = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.5h4V23h-4V8.5ZM8.5 8.5h3.84v1.98h.05c.54-1.02 1.84-2.1 3.78-2.1 4.04 0 4.78 2.66 4.78 6.12V23h-4v-5.99c0-1.43-.03-3.26-1.99-3.26-1.99 0-2.3 1.56-2.3 3.16V23h-4V8.5Z" />
  </svg>
);
const GridIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z" />
  </svg>
);

const ProfilePage: React.FC<ProfilePageProps> = ({ scrollToProjects }) => {
  return (
    <section className="relative min-h-screen text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
         backgroundImage: `url(${Rack})`,
        }}
      />
      {/* Blue gradient overlay to improve contrast (heavier on left, transparent right) */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-blue-900/20" />
      {/* Subtle top-to-bottom fade for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-900/20" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 py-10 md:flex-row md:items-center md:gap-10 lg:py-16">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-xl"
        >
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Azeez Yusuf
            <br />
            Akorede
          </h1>

          {/* Badge row */}
          <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold">
            <span className="rounded-full bg-blue-500/20 px-2 py-1 text-blue-200 ring-1 ring-inset ring-blue-300/40">
              PMP Certified
            </span>
            <span className="opacity-70">|</span>
            <span className="rounded-full bg-white/10 px-2 py-1 text-blue-100 ring-1 ring-inset ring-white/20">
              ID: 412971
            </span>
          </div>

          <p className="mt-4 text-sm font-semibold text-blue-100/90">
            IT Project Manager | Scrum Master | Enterprise Technology Delivery Professional
          </p>

          {/* Contact list */}
          <ul className="mt-4 space-y-2 text-sm text-blue-100/90">
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-blue-200" />
              Lagos, Nigeria
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-blue-200" />
              +234 816 380 3886
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-blue-200" />
              azeezakerede41@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <LinkedIn className="h-4 w-4 text-blue-200" />
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-blue-200/40 underline-offset-2 hover:text-white"
              >
                linkedin.com/in/azeez-yusuf
              </a>
            </li>
          </ul>

          {/* Quote glass card */}
          <div className="mt-5 rounded-xl bg-white/10 p-4 text-[13.5px] leading-relaxed ring-1 ring-inset ring-white/20 backdrop-blur-sm">
            <p className="italic text-blue-100">
              “Delivering enterprise IT and software solutions with agility, precision, and business impact.”
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-5 flex flex-wrap gap-3">
            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 rounded-md bg-white/15 px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/30 hover:bg-white/20"
            >
              <GridIcon />
              View Projects
            </motion.button>

            <motion.a
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-600"
            >
              <LinkedIn className="h-4 w-4 fill-white" />
              Connect on LinkedIn
            </motion.a>
          </div>

          {/* Stats */}
          <div className="mt-7 grid grid-cols-3 gap-4 max-w-md">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-lg bg-white/10 px-3 py-3 text-center ring-1 ring-inset ring-white/20 backdrop-blur-sm"
              >
                <div className="text-lg font-bold">{s.value}</div>
                <div className="mt-1 text-[11px] text-blue-100/80">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right profile image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto mt-6 w-[240px] shrink-0 sm:w-[260px] md:mt-0"
        >
          <div className="rounded-full bg-blue-500/20 p-2 ring-4 ring-blue-300/40 backdrop-blur-sm">
            <motion.img
              src={newProfile}
              alt="Profile photo"
              className="h-[220px] w-[220px] rounded-full object-cover ring-4 ring-white/70 shadow-xl sm:h-[240px] sm:w-[240px]"
              whileHover={{ scale: 1.03, rotate: 0.5 }}
              transition={{ type: "spring", stiffness: 140, damping: 12 }}
            />
          </div>

          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-blue-900 shadow ring-1 ring-blue-200">
            PMP Certified
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfilePage;