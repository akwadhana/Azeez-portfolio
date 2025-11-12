export default function AboutMe() {
  return (
    <section className="bg-white py-10 px-6 sm:px-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl sm:text-3xl text-center font-semibold mb-3">About Me</h2>

        <p className="text-sm sm:text-base leading-relaxed text-slate-700 mb-4">
          PMP-certified Project Manager with expertise in technology project execution and Agile
          software delivery. Skilled in managing cross-functional teams and multi-vendor
          infrastructure projects from SOW validation through customer acceptance. Experienced in
          delivering network, data center, and cloud transformation initiatives, as well as guiding
          software development teams using Scrum and hybrid frameworks.
        </p>

        <p className="text-sm sm:text-base leading-relaxed text-slate-700">
          Recognized for high-quality delivery, financial accuracy, and exceptional stakeholder
          engagement across banking, telecom, public sector, and fintech industries.
        </p>

        {/* chips / highlights */}
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-100">
            PMP-certified
          </span>

          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-800 ring-1 ring-slate-200">
            Agile / Scrum
          </span>

          <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-800 ring-1 ring-sky-100">
            Infrastructure & Data Center
          </span>

          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-800 ring-1 ring-indigo-100">
            Cloud Transformation
          </span>

          <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800 ring-1 ring-amber-100">
            Multi-vendor Coordination
          </span>
        </div>

        {/* optional call-to-action / small footer */}
        <div className="mt-6 text-sm text-slate-600">
          <span className="font-medium">Availability:</span>{" "}
          <span>Open to new contract and full-time opportunities.</span>
        </div>
      </div>
    </section>
  );
}
