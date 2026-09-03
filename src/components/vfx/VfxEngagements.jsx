export default function VfxEngagements() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
      
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="mono-text text-xs uppercase tracking-widest text-amber-400 font-semibold block mb-2">
          Section 05 / Collaboration
        </span>
        <h2 className="font-title text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Flexible Engagement Models
        </h2>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed">
          No rigid packages or prolonged sales cycles. Projects start small with high-impact milestones and scale according to studio needs.
        </p>
      </div>

      {/* 4 Engagements Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Review */}
        <div className="p-6 rounded-2xl bg-[#0c1220] shadow-xl hover:bg-[#11182a] transition-all flex flex-col justify-between">
          <div>
            <span className="mono-text text-xs text-amber-400 font-bold block mb-2">01</span>
            <h3 className="font-title text-lg font-bold text-white mb-2">Architecture Review</h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-6">
              Comprehensive audit of your existing render farm, storage throughput, and artist pipeline to identify bottlenecks, cloud cost leaks, and AI integration readiness.
            </p>
          </div>
          <span className="mono-text text-[11px] text-slate-500 uppercase">Deliverable: Audit & Roadmap</span>
        </div>

        {/* PoC */}
        <div className="p-6 rounded-2xl bg-[#0c1220] shadow-xl hover:bg-[#11182a] transition-all flex flex-col justify-between">
          <div>
            <span className="mono-text text-xs text-cloud-light font-bold block mb-2">02</span>
            <h3 className="font-title text-lg font-bold text-white mb-2">Proof of Concept</h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-6">
              Rapid prototype design and validation of a specific cloud render queue, ComfyUI/Griptape headless worker, or custom Nuke neural pipeline tool.
            </p>
          </div>
          <span className="mono-text text-[11px] text-slate-500 uppercase">Deliverable: Working Prototype</span>
        </div>

        {/* Implementation */}
        <div className="p-6 rounded-2xl bg-[#0c1220] shadow-xl hover:bg-[#11182a] transition-all flex flex-col justify-between">
          <div>
            <span className="mono-text text-xs text-purple-400 font-bold block mb-2">03</span>
            <h3 className="font-title text-lg font-bold text-white mb-2">Implementation</h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-6">
              End-to-end deployment of production infrastructure: Terraform IaC modules, AWS Deadline Cloud fleet, custom DCC gizmos, and artist training documentation.
            </p>
          </div>
          <span className="mono-text text-[11px] text-slate-500 uppercase">Deliverable: Production Deployment</span>
        </div>

        {/* Ongoing Engineering */}
        <div className="p-6 rounded-2xl bg-[#0c1220] shadow-xl hover:bg-[#11182a] transition-all flex flex-col justify-between">
          <div>
            <span className="mono-text text-xs text-emerald-400 font-bold block mb-2">04</span>
            <h3 className="font-title text-lg font-bold text-white mb-2">Ongoing Engineering</h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-6">
              Retained technical direction support, ongoing pipeline maintenance, cloud cost optimization, and continuous integration of emerging AI model architectures.
            </p>
          </div>
          <span className="mono-text text-[11px] text-slate-500 uppercase">Deliverable: Sustained Capability</span>
        </div>

      </div>

    </section>
  );
}
