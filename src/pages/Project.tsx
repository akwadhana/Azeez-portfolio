import { useMemo, useState } from "react";

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
    link: "https://mentoros.stanixconsult.com/",
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

/* ========== Helpers ========== */
function formatBudget(value: number, currency: string = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

const categoryStyles: Record<Category, string> = {
  "Software Development": "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Infrastructure: "bg-blue-50 text-blue-700 ring-blue-200",
  Security: "bg-rose-50 text-rose-700 ring-rose-200",
};

/* ========== Small UI Bits ========== */
function Pill({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-1 text-[11px] font-semibold ring-1 ring-inset ${className}`}>
      {children}
    </span>
  );
}

function TechChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-sm bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-700 ring-1 ring-slate-200">
      {label}
    </span>
  );
}

/* ========== Card ========== */
function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-lg">
      <div className="mb-3 flex items-center justify-between flex-wrap gap-2">
        <Pill className={categoryStyles[p.category]}>{p.category}</Pill>

        <div className="flex items-center gap-2">
          {p.featured && <span className="text-amber-500">★</span>}
          {p.link && (
            <a
              href={p.link}
              className="text-slate-400 hover:text-slate-600"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open project link"
            >
              ↗
            </a>
          )}
        </div>
      </div>

      <div className="flex items-start justify-between gap-4 flex-wrap">
        <h3 className="text-base font-semibold text-slate-800">{p.title}</h3>

        <div className="text-right">
          <div className="text-[11px] font-medium text-slate-400">Project Value</div>
          {typeof p.budget === "number" ? (
            <div className="text-[13px] font-semibold text-slate-700">{formatBudget(p.budget)}</div>
          ) : p.projectType ? (
            <div className="text-[13px] font-semibold text-slate-700">{p.projectType}</div>
          ) : null}
        </div>
      </div>

      <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
        🏢 <span>{p.client}</span>
      </div>

      <div className="my-3 border-t border-slate-200" />

      <div className="text-[12px] font-semibold text-slate-600">Key Impact:</div>
      <p className="mt-1 text-[13px] leading-relaxed text-slate-600">{p.impact}</p>

      <div className="mt-3 text-[12px] font-semibold text-slate-600">Technologies:</div>
      <div className="mt-2 flex flex-wrap gap-2">
        {p.technologies.map((t) => (
          <TechChip key={`${p.title}-${t}`} label={t} />
        ))}
      </div>
    </article>
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
    <section className="bg-white py-16 text-slate-900">
      <div className="mx-auto max-w-full px-4 sm:max-w-6xl sm:px-6">
        {/* Header */}
        <header className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Key Projects Delivered</h2>
          <p className="mx-auto mt-2 max-w-full sm:max-w-3xl text-sm text-slate-600">
            A showcase of enterprise technology projects spanning software
            development, infrastructure deployment, and digital transformation
            initiatives across multiple industries.
          </p>
        </header>

        {/* Stats Row */}
        <div className="mx-auto mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl bg-white px-4 py-4 text-center shadow-sm ring-1 ring-slate-200 cursor-pointer transition-colors duration-300 hover:text-blue-600"
            >
              <div className="text-lg font-semibold text-blue-600">{s.value}</div>
              <div className="mt-1 text-xs text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Project Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowFeatured((prev) => !prev)}
            className="rounded-full bg-emerald-600 px-5 py-2 text-xs font-semibold text-white shadow hover:bg-emerald-700 transition"
          >
            {showFeatured ? "Show All Projects" : "Show Featured Only"}
          </button>
        </div>
      </div>
    </section>
  );
}
