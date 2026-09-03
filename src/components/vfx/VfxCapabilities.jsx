import { CheckCircle2 } from 'lucide-react';

export default function VfxCapabilities() {
  return (
    <section id="capabilities" className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
      
      <div className="max-w-3xl mb-16">
        <span className="mono-text text-xs uppercase tracking-widest text-amber-400 font-semibold block mb-2">
          Section 02 / Capabilities
        </span>
        <h2 className="font-title text-3xl md:text-5xl font-bold text-white tracking-tight">
          Infrastructure for Modern VFX
        </h2>
        <p className="text-slate-400 text-base mt-4 leading-relaxed">
          I architect and implement the technical foundations required to make compute elastic, AI deterministic, and pipelines dependable.
        </p>
      </div>

      {/* 3 Core Capability Cards */}
      <div className="space-y-8">
        
        {/* Capability 01: Cloud & Compute Orchestration */}
        <div className="p-8 md:p-12 rounded-3xl bg-[#0c1220] shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-8">
            <div className="lg:max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cloud-blue/10 text-cloud-light mono-text text-xs font-semibold mb-4">
                <span>01</span>
                <span>/</span>
                <span>INFRASTRUCTURE</span>
              </div>
              <h3 className="font-title text-2xl md:text-3xl font-bold text-white mb-4">
                Cloud & Compute Orchestration (AWS Deadline Cloud)
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                Help studios design and deploy scalable cloud infrastructure for rendering, simulation, GPU workloads, and custom studio microservices. I implement cost-aware architectures that burst to AWS when delivery deadlines demand it, without runaway operational spending.
              </p>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
                Whether orchestrating <strong>AWS Deadline Cloud</strong> queues, custom EC2 spot fleets, or containerized workers, the focus is on predictable performance, strict storage caching, and automated teardown.
              </p>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {['AWS Deadline Cloud', 'EC2 GPU Fleets (g6 / g4dn)', 'S3 Asset Sync', 'Docker Containers', 'Terraform IaC', 'Hybrid Cloud Burst', 'Cost-Aware Spot Limits'].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-lg bg-slate-800/80 text-slate-300 text-xs mono-text">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Architecture Callout Card with Deadline Brand */}
            <div className="lg:w-96 w-full p-4 rounded-2xl bg-[#080d18] shadow-xl flex flex-col justify-between">
              <div className="rounded-xl overflow-hidden mb-4">
                <img src="/assets/vfx/deadline_portada.webp" alt="AWS Deadline Cloud Architecture" className="w-full h-36 object-cover" />
              </div>
              <div className="space-y-2 text-xs mono-text text-slate-300 px-2">
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.04]">
                  <span className="text-slate-500">Provisioning</span>
                  <span className="text-slate-200">Terraform / IaC</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.04]">
                  <span className="text-slate-500">Queue Engine</span>
                  <span className="text-amber-400">AWS Deadline Cloud</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.04]">
                  <span className="text-slate-500">Storage Sync</span>
                  <span className="text-sky-300">POSIX / S3 Gateway</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Cost Control</span>
                  <span className="text-emerald-400">Elastic Auto-Scale</span>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture Diagram Callout */}
          <div className="mt-6 p-6 rounded-2xl bg-[#080d18] shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2 text-xs mono-text text-cloud-light">
                <span className="w-2 h-2 rounded-full bg-cloud-blue animate-pulse" />
                <span className="font-bold uppercase tracking-wider">AWS Deadline Cloud Production Flow</span>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden bg-white p-2">
              <img 
                src="/assets/vfx/aws_diagram.jpg" 
                alt="AWS Deadline Cloud Architecture Diagram" 
                className="w-full max-h-[380px] object-contain mx-auto" 
              />
            </div>
          </div>
        </div>

        {/* Capability 02: AI Workflow Infrastructure (ComfyUI & Griptape) */}
        <div className="p-8 md:p-12 rounded-3xl bg-[#0c1220] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/5 blur-[100px] pointer-events-none" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/10 text-amber-300 mono-text text-xs font-semibold mb-4">
              <span>02</span>
              <span>/</span>
              <span>AI INTEGRATION</span>
            </div>
            <h3 className="font-title text-2xl md:text-4xl font-bold text-white mb-3">
              From AI Experiments to Production Workflows: ComfyUI & Griptape
            </h3>
            <p className="mono-text text-xs text-amber-400 font-semibold uppercase tracking-wider mb-6">
              "I don't just install an AI tool. I engineer the deterministic infrastructure around the creative workflow."
            </p>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-4xl mb-10">
              Moving machine learning out of experimental Jupyter notebooks into revenue-critical VFX deliveries requires two complementary pillars: <strong>ComfyUI</strong> for modular visual node graph execution, and <strong>Griptape</strong> for secure, agentic pipeline orchestration and tool calling.
            </p>

            {/* 2 Focused Columns: ComfyUI & Griptape */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              
              {/* ComfyUI Card */}
              <div className="p-6 md:p-8 rounded-2xl bg-[#080d18] shadow-xl flex flex-col justify-between group">
                <div>
                  <div className="rounded-xl overflow-hidden mb-6 bg-black">
                    <img 
                      src="/assets/comfyui.jpg" 
                      alt="ComfyUI Node Graph Visual Control" 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-title text-xl font-bold text-white">ComfyUI Production Engine</span>
                    <span className="px-2.5 py-0.5 rounded bg-amber-400/10 text-amber-300 text-[10px] mono-text font-bold uppercase">Headless Execution</span>
                  </div>
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-4">
                    Deployed as a high-throughput, headless API execution engine. Rather than forcing artists into raw web GUIs, custom Python wrappers translate Nuke parameters into serialized ComfyUI JSON graphs, dispatched automatically to local or AWS cloud GPU clusters.
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-white/[0.04] flex flex-wrap gap-1.5">
                  {['Headless API', 'Custom C++/Py Nodes', 'AWS Spot Auto-scale', 'OCIO Colorspace'].map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded bg-slate-850 text-slate-400 text-[10px] mono-text">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Griptape Card */}
              <div className="p-6 md:p-8 rounded-2xl bg-[#080d18] shadow-xl flex flex-col justify-between group">
                <div>
                  <div className="rounded-xl overflow-hidden mb-6 bg-black">
                    <img 
                      src="/assets/griptape.png" 
                      alt="Griptape Enterprise AI Orchestration by Foundry" 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-title text-xl font-bold text-white">Griptape from Foundry</span>
                    <span className="px-2.5 py-0.5 rounded bg-purple-400/10 text-purple-300 text-[10px] mono-text font-bold uppercase">Enterprise Agent Framework</span>
                  </div>
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-4">
                    Implemented as the secure orchestration backbone connecting LLMs and vision models with production databases. Leveraging Python and Model Context Protocol (MCP), Griptape empowers autonomous agents to inspect editorial cuts, validate shot manifests, and trigger pipeline operations with strict privacy.
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-white/[0.04] flex flex-wrap gap-1.5">
                  {['MCP Standard', 'ShotGrid / AYON Tools', 'Audit Logging', 'Private LLMs'].map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded bg-slate-850 text-slate-400 text-[10px] mono-text">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Integration Banner */}
            <div className="p-6 rounded-2xl bg-[#080d18] shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-amber-400 shrink-0" />
                <span className="text-xs text-slate-300 mono-text">
                  <strong>Unified AI Architecture:</strong> Griptape handles context, permissions, and tool orchestration; ComfyUI executes the heavy multi-GPU generative tensor graph.
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="px-3 py-1 rounded-md bg-amber-400/10 text-amber-300 text-xs mono-text font-semibold">
                  100% Studio-Integrated
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
