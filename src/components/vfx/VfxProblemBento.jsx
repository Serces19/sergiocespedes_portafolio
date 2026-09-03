import { ShieldCheck, ArrowRight, Workflow, Layers, Terminal } from 'lucide-react';

export default function VfxProblemBento() {
  return (
    <section className="w-full bg-[#f8fafc] text-slate-900 border-y border-slate-200/90 py-24 px-4 md:px-8 relative overflow-hidden">
      
      {/* Soft Ambient Background Mesh */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-amber-100/50 via-sky-100/30 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-purple-100/40 via-slate-100/40 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-700 border border-amber-500/20 mono-text text-xs font-bold uppercase tracking-wider mb-3">
            <span>01</span>
            <span>/</span>
            <span>Production Realities</span>
          </div>
          <h2 className="font-title text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Infrastructure Friction Slows Down Creative Delivery
          </h2>
          <p className="text-slate-600 text-base md:text-lg mt-4 leading-relaxed">
            Modern VFX workflows sit at the intersection of exponential compute demands, complex DCC ecosystems, and rapid AI developments. When the underlying plumbing is brittle, artistic output stalls.
          </p>
        </div>

        {/* Bento Grid — 12 Column Layout Inspired by Reference */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* CARD 1: Left Tall Card (Spans 2 Rows on Desktop) */}
          <div className="md:col-span-12 lg:col-span-4 lg:row-span-2 bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group">
            <div>
              {/* Top Image with Smooth Ambient Gradient Fade */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
                <img 
                  src="/assets/vfx/blender_ui.jpg" 
                  alt="VFX Production Crunch & Farm Demands" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] mono-text font-semibold flex items-center gap-2 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                  Delivery Crunch Bottlenecks
                </div>
              </div>

              {/* Body Content */}
              <div className="p-7 sm:p-8">
                <div className="font-title text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-2">
                  50%+
                </div>
                <span className="mono-text text-xs uppercase tracking-wider text-rose-600 font-bold block mb-2">
                  Idle Farm Waste & Sizing Dilemma
                </span>
                <h3 className="font-title text-xl font-bold text-slate-900 mb-3">
                  Peak Demand Outgrows Local Farm Capacity
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Production workloads require immense bursts of GPU and CPU capacity during delivery crunches. Sizing and paying for physical on-premise hardware to sit idle during quieter periods drains studio capital and creates high-risk crunch bottlenecks.
                </p>
              </div>
            </div>

            <div className="px-7 pb-7 pt-4 border-t border-slate-100 flex items-center justify-between text-xs mono-text text-slate-500">
              <span className="text-rose-600 font-semibold">CAPEX Inefficiency</span>
              <span>Unpredictable Deadlines</span>
            </div>
          </div>

          {/* CARD 2: Top-Middle Metric Card */}
          <div className="md:col-span-6 lg:col-span-3 bg-gradient-to-br from-sky-50/90 to-blue-50/50 border border-blue-100/90 rounded-3xl p-7 sm:p-8 flex flex-col justify-between hover:shadow-md transition-all group shadow-xs">
            <div>
              <div className="font-title text-5xl sm:text-6xl font-black text-sky-950 tracking-tight mb-4 group-hover:scale-105 transition-transform origin-left">
                85%
              </div>
              <span className="mono-text text-xs uppercase tracking-wider text-blue-600 font-bold block mb-2">
                Of AI Scripts Stay Trapped
              </span>
              <h4 className="font-title text-lg font-bold text-slate-900 mb-2">
                Notebooks Don’t Scale
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Ad-hoc Python notebooks and web interfaces fail at delivery time. Without pipeline engineering, artists face unrepeatable frames and missing shot context.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-blue-100/80 flex items-center justify-between text-[11px] mono-text text-slate-500">
              <span className="text-blue-700 font-semibold">Repeatability</span>
              <span>Deterministic I/O</span>
            </div>
          </div>

          {/* CARD 3: Top-Right Feature & Security Card */}
          <div className="md:col-span-6 lg:col-span-5 bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-4">
                {/* Glowing Shield Badge Box */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/50 border border-blue-100/80 flex flex-col items-center justify-center text-center shrink-0 sm:min-w-[125px]">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-blue-500/25 mb-2">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="font-title text-2xl font-bold text-slate-900 tracking-tight">100%</span>
                  <span className="text-[10px] mono-text text-slate-500 uppercase tracking-wider font-semibold">IP Isolation</span>
                </div>

                {/* Body Copy */}
                <div className="flex-1">
                  <span className="mono-text text-xs uppercase tracking-wider text-slate-400 font-bold block mb-1">
                    Enterprise Compliance
                  </span>
                  <h3 className="font-title text-xl font-bold text-slate-900 mb-2">
                    Zero-Trust Studio Security
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Cloud resources must respect strict studio NDAs, private VPCs, and POSIX permissions. Standalone public cloud setups fail client security audits and expose confidential plates.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs mono-text">
              <span className="text-slate-500">Security Standard</span>
              <span className="text-blue-600 font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                MPAA & Studio Audit Ready <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* CARD 4: Bottom-Middle Wide Card with Sub-Pills */}
          <div className="md:col-span-12 lg:col-span-5 bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group">
            {/* Bottom Subtle Mesh */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gradient-to-tl from-amber-200/30 via-sky-200/20 to-transparent blur-2xl pointer-events-none" />

            <div className="relative z-10 mb-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200 text-[10px] mono-text font-bold uppercase tracking-wider mb-3">
                <span>Pipeline Architecture</span>
              </div>
              <h3 className="font-title text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Cloud Resources Isolated from the Pipeline
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Spinning up cloud instances is useless if they are detached from the studio’s asset management, Nuke/Maya launch environments, storage mounts, and color pipeline (OCIO). Standalone cloud setups break pipeline context.
              </p>
            </div>

            {/* 2 Feature Micro-Pills */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-50/90 border border-slate-200/80 flex items-center gap-3 hover:bg-slate-100/90 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-amber-600 shrink-0 shadow-2xs">
                  <Workflow className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-title text-xs font-bold text-slate-900 block">OCIO / ACES</span>
                  <span className="text-[11px] text-slate-500 leading-tight block">Color consistency</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50/90 border border-slate-200/80 flex items-center gap-3 hover:bg-slate-100/90 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 shrink-0 shadow-2xs">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-title text-xs font-bold text-slate-900 block">Asset Context</span>
                  <span className="text-[11px] text-slate-500 leading-tight block">Zero sync drag</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 5: Bottom-Right Impact Card */}
          <div className="md:col-span-12 lg:col-span-3 bg-gradient-to-br from-emerald-50/70 via-slate-50 to-teal-50/40 border border-emerald-100/90 rounded-3xl p-7 sm:p-8 flex flex-col justify-between hover:shadow-md transition-all group shadow-xs">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/25 mb-6 group-hover:scale-110 transition-transform">
                <Terminal className="w-5 h-5" />
              </div>
              <div className="font-title text-5xl sm:text-6xl font-black text-emerald-950 tracking-tight mb-2">
                0 hrs
              </div>
              <span className="mono-text text-xs uppercase tracking-wider text-emerald-700 font-bold block mb-2">
                Sysadmin Overhead
              </span>
              <h4 className="font-title text-base font-bold text-slate-900 mb-2">
                Artists Shouldn’t Be Sysadmins
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Creative artists should never diagnose CUDA driver conflicts, container permissions, or AWS IAM roles. Infrastructure runs entirely invisible.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-emerald-100/80 flex items-center justify-between text-[11px] mono-text text-slate-500">
              <span className="text-emerald-700 font-semibold">Artist Focus</span>
              <span>Pure Delivery</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
