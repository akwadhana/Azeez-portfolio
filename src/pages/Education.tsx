const certifications = [
  { name: "PMP (PMI)", detail: "Project Management Professional" },
  { name: "ScrumStudy", detail: "Scrum Master Certification" },
  { name: "Oracle Cloud PM Practitioner" },
  { name: "Cisco CSM", detail: "Customer Success Manager" },
  { name: "Asana Foundation Skills" },
  { name: "PMI GenAI for PMs" },
];

const toolsLeft = [
  {
    title: "Project Management",
    items: ["Jira", "Asana", "Trello", "MS Project", "Planner"],
  },
];

const toolsRight = [
  {
    title: "Collaboration",
    items: ["Notion", "Microsoft 365", "Azure", "Teams", "SharePoint"],
  },
];

const education = [
  { degree: "B.Sc. Political Science", school: "University of Lagos", year: "2018" },
  { degree: "ND Mass Communication", school: "Yaba College of Technology", year: "2013" },
];

/* ========== Icons ========== */
const RibbonIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path d="M12 14a6 6 0 1 0-6-6 6 6 0 0 0 6 6Z" />
    <path d="M8.2 13.5 7 22l5-3 5 3-1.2-8.5" />
  </svg>
);

const WrenchIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path d="M14 7a6 6 0 0 0-8.9 7.1L2 17l5 5 2.9-3.1A6 6 0 0 0 14 7Z" />
    <path d="M14 7h7" />
  </svg>
);

const HatIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path d="m22 10-10-5L2 10l10 5 10-5Z" />
    <path d="M6 12v5c4 2 8 2 12 0v-5" />
  </svg>
);

const CheckIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

/* ========== Main Component ========== */
export default function SkillsEducation() {
  return (
    <section className="bg-slate-50 py-8 text-slate-900">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-2">

        {/* Certifications */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-blue-600">
              <RibbonIcon />
            </span>
            <h3 className="text-lg font-semibold text-slate-800">
              Certifications
            </h3>
          </div>

          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c.name} className="flex items-start gap-3">
                <span className="mt-1 rounded-full bg-emerald-50 p-1 ring-1 ring-emerald-200">
                  <CheckIcon />
                </span>
                <p className="text-sm text-slate-700">
                  <span className="font-semibold">{c.name}</span>
                  {c.detail && <span> — {c.detail}</span>}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-blue-600">
              <WrenchIcon />
            </span>
            <h3 className="text-lg font-semibold text-slate-800">
              Tools & Technologies
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[toolsLeft, toolsRight].map((groupCol, i) => (
              <div key={i} className="space-y-5">
                {groupCol.map((g) => (
                  <div key={g.title}>
                    <h4 className="mb-2 text-sm font-semibold text-slate-700">
                      {g.title}
                    </h4>
                    <ul className="space-y-1.5">
                      {g.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-2">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-blue-600">
              <HatIcon />
            </span>
            <h3 className="text-lg font-semibold text-slate-800">
              Education
            </h3>
          </div>

          <ul className="space-y-5">
            {education.map((e) => (
              <li key={e.degree} className="flex items-start gap-3">
                <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-blue-500" />
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {e.degree}
                  </p>
                  <p className="text-sm text-slate-600">
                    {e.school} ({e.year})
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
