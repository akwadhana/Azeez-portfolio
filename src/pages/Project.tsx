"use client";

import React, { useMemo, useState } from "react";
import { motion, type Variants } from "framer-motion";

/* ========== Types ========== */
type Category = "Software Development" | "Infrastructure" | "Security";

interface Project {
  title: string;
  client: string;
  category: Category;
  impact: string;
  technologies: string[];
  budget?: number;
  projectType?: string;
  featured?: boolean;
  link?: string;
}

interface Stat {
  value: string;
  label: string;
}

/* ========== Data ========== */
const stats: Stat[] = [
  { value: "20+", label: "Projects Delivered" },
  { value: "$3.1M+", label: "Total Project Value" },
  { value: "96%", label: "On-Time Delivery" },
  { value: "100%", label: "Client Satisfaction" },
];

const projects: Project[] = [
  {
    title: "Thriftly (Ajo) MVP",
    client: "Stanix Consult",
    category: "Software Development",
    projectType: "MVP",
    impact: "98% QA test pass rate; intuitive onboarding.",
    technologies: ["React", "Node.js", "MongoDB", "Agile/Scrum"],
    featured: true,
    link: "https://thriftly.stanixconsult.com/",
  },
  {
    title: "MentorOS Platform",
    client: "Stanix Consult",
    category: "Software Development",
    projectType: "MVP",
    impact: "Improved mentor–mentee matching; enhanced engagement.",
    technologies: ["React", "Express.js", "PostgreSQL", "Scrum"],
    featured: true,
  },
  {
    title: "Cisco ACI Deployment",
    client: "Access Bank",
    category: "Infrastructure",
    budget: 300000,
    impact: "Scalable data center fabric; 40% faster provisioning.",
    technologies: ["Cisco ACI", "Data Center", "Network Automation"],
  },
  {
    title: "Tier II Data Center Build",
    client: "NSPMC",
    category: "Infrastructure",
    budget: 402777,
    impact: "99.98% uptime; MT5M savings.",
    technologies: ["Data Center Design", "Power & Cooling", "Monitoring"],
  },
  {
    title: "Dell VxRail Deployment",
    client: "Shell Nigeria",
    category: "Infrastructure",
    budget: 720000,
    impact: "Improved workload optimization and continuity.",
    technologies: ["Dell VxRail", "Hyper-converged", "VMware"],
    featured: true,
  },
  {
    title: "Fortinet Firewall Deployment",
    client: "Access Bank",
    category: "Security",
    budget: 500000,
    impact: "100% uptime; improved security posture.",
    technologies: ["Fortinet Security", "Policy Control", "Firewall Management"],
  },
  {
    title: "ATM Router Modernization",
    client: "Access Bank",
    category: "Infrastructure",
    budget: 320000,
    impact: "Increased uptime from 94.2% to 98.8%.",
    technologies: ["Network Routing", "ATM Infrastructure", "Monitoring"],
  },
];

/* ========== Icons ========== */
const BuildingIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 21h18" />
    <path d="M3 21V8l9-5 9 5v13" />
    <path d="M9 21V9h6v12" />
    <path d="M9 13h6" />
  </svg>
);

const ArrowUpRight = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const Star = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="m12 .587 3.668 7.431 8.2 1.192-5.934 5.786 1.402 8.172L12 18.896l-7.336 3.872 1.402-8.172L.132 9.21l8.2-1.192L12 .587Z" />
  </svg>
);


function formatBudget(value: number, currency: string = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

const categoryStyles: Record<Category, string> = {
  "Software Development":
    "bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-300 dark:ring-emerald-900/60",
  Infrastructure:
    "bg-blue-50 text-blue-700 ring-blue-200 dark:bg-blue-950/30 dark:text-blue-300 dark:ring-blue-900/60",
  Security:
    "bg-rose-50 text-rose-700 ring-rose-200 dark:bg-rose-950/30 dark:text-rose-300 dark:ring-rose-900/60",
};

/* ========== Motion Variants ========== */
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, when: "beforeChildren", staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ========== Small UI Bits ========== */
function Pill({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-1 text-[11px] font-semibold ring-1 ring-inset ${className}`}
    >
      {children}
    </span>
  );
}

function TechChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-sm bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-700 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700">
      {label}
    </span>
  );
}

/* ========== Card ========== */
function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -5, scale: 1.03, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.98 }}
      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="mb-3 flex items-center justify-between">
        <Pill className={categoryStyles[p.category]}>{p.category}</Pill>

        <div className="flex items-center gap-2">
          {p.featured && <Star className="h-4 w-4 text-amber-500" />}
          {p.link && (
            <a
              href={p.link}
              className="text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open project link"
            >
              <ArrowUpRight />
            </a>
          )}
        </div>
      </div>

      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100">
          {p.title}
        </h3>

        <div className="text-right">
          <div className="text-[11px] font-medium text-slate-400">Project Value</div>
          {typeof p.budget === "number" ? (
            <div className="text-[13px] font-semibold text-slate-700 dark:text-slate-200">
              {formatBudget(p.budget)}
            </div>
          ) : p.projectType ? (
            <div className="text-[13px] font-semibold text-slate-700 dark:text-slate-200">
              {p.projectType}
            </div>
          ) : null}
        </div>
      </div>

      <div className="mt-2 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
        <BuildingIcon className="h-4 w-4 text-slate-400 dark:text-slate-500" />
        <span>{p.client}</span>
      </div>

      <motion.div
        className="my-3 border-t border-slate-200 dark:border-slate-800"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
      />

      <div className="text-[12px] font-semibold text-slate-600 dark:text-slate-300">Key Impact:</div>
      <p className="mt-1 text-[13px] leading-relaxed text-slate-600 dark:text-slate-300">
        {p.impact}
      </p>

      <div className="mt-3 text-[12px] font-semibold text-slate-600 dark:text-slate-300">Technologies:</div>
      <div className="mt-2 flex flex-wrap gap-2">
        {p.technologies.map((t) => (
          <TechChip key={`${p.title}-${t}`} label={t} />
        ))}
      </div>
    </motion.article>
  );
}

/* ========== Main Section ========== */
export default function KeyProjectsSection() {
  const [showFeatured, setShowFeatured] = useState(false);
  const visibleProjects = useMemo(
    () => (showFeatured ? projects.filter((p) => p.featured) : projects),
    [showFeatured]
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="bg-slate-50 py-16 text-slate-900 dark:bg-slate-950 dark:text-slate-100"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">Key Projects Delivered</h2>
          <p className="mx-auto mt-2 max-w-3xl text-sm text-slate-600 dark:text-slate-400">
            A showcase of enterprise technology projects spanning software
            development, infrastructure deployment, and digital transformation
            initiatives across multiple industries.
          </p>
        </motion.header>

        {/* Stats Row */}
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4"
>
  {stats.map((s) => (
    <motion.div
      key={s.label}
      variants={cardVariants}
      whileHover={{
        scale: 1.06,
        y: -4,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className="rounded-xl bg-white px-4 py-4 text-center shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800 cursor-pointer transition-colors duration-300 hover:text-blue-600"
    >
      <div className="text-lg font-semibold text-blue-600 dark:text-slate-100">
        {s.value}
      </div>
      <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
        {s.label}
      </div>
    </motion.div>
  ))}
</motion.div>




        {/* Project Cards */}
        <motion.div
          key={showFeatured ? "featured" : "all"}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visibleProjects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </motion.div>

        {/* Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex justify-center mt-10"
        >
          <button
            onClick={() => setShowFeatured((prev) => !prev)}
            className="rounded-full bg-emerald-600 px-5 py-2 text-xs font-semibold text-white shadow hover:bg-emerald-700 transition"
          >
            {showFeatured ? "Show All Projects" : "Show Featured Only"}
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
