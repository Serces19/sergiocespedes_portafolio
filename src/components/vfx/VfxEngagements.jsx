import { useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';
import { Calendar, ArrowRight } from 'lucide-react';

export default function VfxEngagements() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '20min' });
      cal('ui', {
        theme: 'dark',
        hideEventTypeDetails: false,
        layout: 'month_view'
      });
    })();
  }, []);

  return (
    <section className="relative w-full py-28 md:py-36 overflow-hidden bg-[#070b14]">
      
      {/* Full-width background image with 80% dark overlay and seamless gradient edges */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src="/assets/vfx/bg_sky.jpg"
          alt="Cloud Pipeline Architecture Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay at 80% opacity for text contrast & aesthetic depth */}
        <div className="absolute inset-0 bg-[#070b14]/80 backdrop-blur-[2px]" />
        {/* Top and bottom subtle gradient masks to blend with adjacent sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070b14] via-transparent to-[#070b14]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="mono-text text-xs uppercase tracking-widest text-amber-400 font-semibold block mb-2">
            Section 05 / Engagement Models
          </span>
          <h2 className="font-title text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Flexible Engagement Models
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            No rigid packages or prolonged sales cycles. Projects start small with high-impact milestones and scale according to studio needs.
          </p>
        </div>

        {/* 4 Engagements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 01: Architecture Review */}
          <div className="p-7 rounded-3xl bg-[#0c1220]/85 backdrop-blur-md shadow-2xl hover:bg-[#11182a]/95 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-title text-3xl sm:text-4xl font-black text-amber-400 tracking-tight">
                  01
                </span>
                <span className="mono-text text-[10px] text-slate-300 font-semibold uppercase tracking-wider bg-slate-900/80 px-2.5 py-1 rounded-md">
                  Audit & Roadmap
                </span>
              </div>
              <h3 className="font-title text-xl sm:text-2xl font-black text-white tracking-tight leading-snug mb-3">
                Architecture Review
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                Comprehensive audit of your existing render farm, storage throughput, and artist pipeline to identify bottlenecks, cloud cost leaks, and AI integration readiness.
              </p>
            </div>

            <button
              data-cal-namespace="20min"
              data-cal-link="sergio-cespedes-1zpejv/20min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              className="w-full py-3 px-4 rounded-xl bg-amber-400/15 hover:bg-amber-400 text-amber-300 hover:text-slate-950 font-bold text-xs mono-text flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-md"
            >
              <span>Book an Architecture Review</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* 02: Proof of Concept */}
          <div className="p-7 rounded-3xl bg-[#0c1220]/85 backdrop-blur-md shadow-2xl hover:bg-[#11182a]/95 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-title text-3xl sm:text-4xl font-black text-cloud-light tracking-tight">
                  02
                </span>
                <span className="mono-text text-[10px] text-slate-300 font-semibold uppercase tracking-wider bg-slate-900/80 px-2.5 py-1 rounded-md">
                  Prototype
                </span>
              </div>
              <h3 className="font-title text-xl sm:text-2xl font-black text-white tracking-tight leading-snug mb-3">
                Proof of Concept
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                Rapid prototype design and validation of a specific cloud render queue, ComfyUI/Griptape headless worker, or custom Nuke neural pipeline tool.
              </p>
            </div>

            <button
              data-cal-namespace="20min"
              data-cal-link="sergio-cespedes-1zpejv/20min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              className="w-full py-3 px-4 rounded-xl bg-cloud-blue/15 hover:bg-cloud-blue text-cloud-light hover:text-white font-bold text-xs mono-text flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-md"
            >
              <span>Schedule PoC a Call</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* 03: Implementation */}
          <div className="p-7 rounded-3xl bg-[#0c1220]/85 backdrop-blur-md shadow-2xl hover:bg-[#11182a]/95 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-title text-3xl sm:text-4xl font-black text-purple-400 tracking-tight">
                  03
                </span>
                <span className="mono-text text-[10px] text-slate-300 font-semibold uppercase tracking-wider bg-slate-900/80 px-2.5 py-1 rounded-md">
                  Deployment
                </span>
              </div>
              <h3 className="font-title text-xl sm:text-2xl font-black text-white tracking-tight leading-snug mb-3">
                Implementation
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                End-to-end deployment of production infrastructure: Terraform IaC modules, AWS Deadline Cloud fleet, custom DCC gizmos, and artist training documentation.
              </p>
            </div>

            <button
              data-cal-namespace="20min"
              data-cal-link="sergio-cespedes-1zpejv/20min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              className="w-full py-3 px-4 rounded-xl bg-purple-500/15 hover:bg-purple-500 text-purple-300 hover:text-white font-bold text-xs mono-text flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-md"
            >
              <span>Plan a Deployment</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* 04: Ongoing Engineering */}
          <div className="p-7 rounded-3xl bg-[#0c1220]/85 backdrop-blur-md shadow-2xl hover:bg-[#11182a]/95 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-title text-3xl sm:text-4xl font-black text-emerald-400 tracking-tight">
                  04
                </span>
                <span className="mono-text text-[10px] text-slate-300 font-semibold uppercase tracking-wider bg-slate-900/80 px-2.5 py-1 rounded-md">
                  Retainer
                </span>
              </div>
              <h3 className="font-title text-xl sm:text-2xl font-black text-white tracking-tight leading-snug mb-3">
                Ongoing Engineering
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                Retained technical direction support, ongoing pipeline maintenance, cloud cost optimization, and continuous integration of emerging AI model architectures.
              </p>
            </div>

            <button
              data-cal-namespace="20min"
              data-cal-link="sergio-cespedes-1zpejv/20min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              className="w-full py-3 px-4 rounded-xl bg-emerald-500/15 hover:bg-emerald-500 text-emerald-300 hover:text-slate-950 font-bold text-xs mono-text flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-md"
            >
              <span>Discuss Ongoing Support</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Featured Cal.com 20-Min Discovery Banner */}
        <div className="relative mt-12 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#0e1628]/90 via-[#0b1220]/90 to-[#070b14]/90 backdrop-blur-md shadow-2xl overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 group">
          
          {/* Ambient Glow mesh lights */}
          <div className="absolute -top-16 -right-16 w-80 h-80 bg-amber-500/10 blur-[90px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-orange-500/10 blur-[90px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">

            <div>
              <h3 className="font-title text-2xl md:text-3xl font-black text-white tracking-tight mb-2">
                Book a 20-Minute Technical Discovery Call
              </h3>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-xl">
                Talk directly with Sergio Céspedes — no sales reps or account managers. We'll diagnose your farm bottlenecks, evaluate AWS costs, and chart an actionable roadmap.
              </p>
            </div>
          </div>

          <div className="relative z-10 shrink-0 w-full lg:w-auto">
            <button
              data-cal-namespace="20min"
              data-cal-link="sergio-cespedes-1zpejv/20min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              className="w-full lg:w-auto px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-2xl shadow-xl shadow-amber-400/20 hover:shadow-amber-400/35 transition-all flex items-center justify-center gap-3 text-xs uppercase tracking-wider cursor-pointer group/btn"
            >
              <Calendar className="w-4 h-4" />
              <span>Select Time on Calendar</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}
