import { motion, type Variants } from "framer-motion";

/* ========== Data ========== */
const experiences = [
  {
    role: "IT Project Manager",
    company: "Manifold Computers Ltd",
    period: "July 2024 – Present",
    current: true,
    bullets: [
      "Led ₦180M+ enterprise infrastructure and digital transformation projects for Tier 1 clients.",
      "Coordinated 15+ engineers and OEM partners (Cisco, Dell EMC, Microsoft).",
      "Achieved 95% on-time delivery and <3% budget variance.",
      "Delivered 45% network performance improvement and 99.98% uptime.",
    ],
  },
  {
    role: "IT Project Manager",
    company: "Arravo Technologies Ltd",
    period: "Aug 2022 – Jun 2024",
    bullets: [
      "Managed ₦250M+ projects including Access Bank ACI and NSPMC Data Center.",
      "Achieved 100% on-time delivery and 96% budget accuracy.",
      "Received Project Excellence Award 2023 for delivery quality.",
      "Led cross-functional teams across multiple vendor partnerships.",
    ],
  },
  {
    role: "Scrum Master / Project Manager",
    company: "Stanix Consult Ltd",
    period: "Jul – Oct 2025",
    bullets: [
      "Led Agile teams to deliver two digital products: Thriftly (Ajo) and MentorOS.",
      "Coordinated sprint cycles, backlog refinement, and release management.",
      "Achieved 98% QA test pass rate and successful MVP releases.",
      "Implemented DevOps practices for CI/CD.",
    ],
  },
  {
    role: "Project Manager",
    company: "SRADeV Nigeria",
    period: "Sep 2019 – Jul 2022",
    bullets: [
      "Delivered 15+ sustainability projects valued at $2.5M+.",
      "Improved collaboration efficiency by 35% using digital tools.",
      "Maintained 98% budget compliance and donor satisfaction.",
      "Managed international development projects across West Africa.",
    ],
  },
];

/* ========== Icons ========== */
const CalendarIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path d="M16 2v4M8 2v4M3 10h18M5 6h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
  </svg>
);

const CheckIcon = ({ className = "h-3.5 w-3.5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
      <span className="mt-1 rounded-full bg-emerald-50 p-0.5 ring-1 ring-emerald-200 dark:bg-emerald-900/20 dark:ring-emerald-900/40">
        <CheckIcon className="text-emerald-600 dark:text-emerald-400" />
      </span>
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}

/* ========== Motion Variants ========== */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

/* ========== Main Component ========== */
export default function ExperienceTimeline() {
  return (
    <section className="bg-white sm:bg-slate-50 py-10 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-full sm:max-w-5xl px-4 sm:px-6">
        {/* Header */}
        <header className="mb-6 text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Professional Experience
          </h2>
          <p className="mx-auto mt-2 max-w-full sm:max-w-3xl text-sm text-slate-600 dark:text-slate-400">
            Over 5 years of progressive experience in IT project management,
            delivering enterprise solutions across banking, telecom, public
            sector, and fintech industries.
          </p>
        </header>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* Vertical line */}
          <span className="absolute left-5 sm:left-6 top-0 h-full w-px bg-blue-100 dark:bg-blue-900/40" />

          <div className="space-y-6">
            {experiences.map((exp) => (
              <motion.div
                key={`${exp.company}-${exp.role}-${exp.period}`}
                variants={itemVariants}
                className="relative pl-10 sm:pl-12"
              >
                {/* Timeline dot */}
                <span className="absolute left-5 sm:left-6 top-7 h-3 w-3 -translate-x-1/2 rounded-full bg-blue-500 ring-4 ring-blue-100 dark:ring-blue-900/50" />

                {/* Card */}
                <article className="rounded-2xl border border-blue-200/60 bg-white p-5 shadow-sm ring-1 ring-blue-100/60 transition hover:shadow-md sm:p-6">
                  <header className="mb-2">
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                      {exp.role}
                    </p>
                    <p className="mt-1 text-sm font-medium text-blue-700 dark:text-blue-300">
                      {exp.company}
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <CalendarIcon />
                      <span>{exp.period}</span>
                      {exp.current && (
                        <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:ring-emerald-900/40">
                          Current
                        </span>
                      )}
                    </div>
                  </header>

                  <ul className="mt-3 space-y-2">
                    {exp.bullets.map((b, i) => (
                      <Bullet key={i}>{b}</Bullet>
                    ))}
                  </ul>

                  {/* Links for Thriftly and MentorOS */}
                  {exp.company === "Stanix Consult Ltd" && (
                    <div className="mt-4 flex flex-wrap gap-3">
                      <a
                        href="https://thriftly.stanixconsult.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-emerald-600 hover:underline"
                      >
                        🌐 View Thriftly (Ajo)
                      </a>
                      <a
                        href="https://mentoros.stanixconsult.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-emerald-600 hover:underline"
                      >
                        🌐 View MentorOS
                      </a>
                    </div>
                  )}
                </article>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
