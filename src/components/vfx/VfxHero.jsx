import { ArrowRight, Workflow, ShieldCheck } from 'lucide-react';

export default function VfxHero({ onScrollToSection }) {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center pt-28 pb-20 px-4 md:px-8 overflow-hidden">
      
      {/* Subtle grid pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cloud-blue/15 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[250px] bg-amber-400/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Main Title */}
        <h1 className="font-title text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.08] mb-6">
          Cloud, Pipeline & AI Infrastructure for{' '}
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
            VFX Studios
          </span>
        </h1>

        {/* Subtitle / Supporting Copy */}
        <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mb-10 font-normal">
          Design and deploy production infrastructure across AWS, local GPUs, and hybrid environments, from render workloads and pipeline automation to AI workflows integrated with the tools your artists already use.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={() => onScrollToSection?.('contact')}
            className="w-full sm:w-auto px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-2xl shadow-lg shadow-amber-400/15 transition-all flex items-center justify-center gap-3 text-xs uppercase tracking-wider group cursor-pointer"
          >
            <span>Talk to Sergio</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onScrollToSection?.('capabilities')}
            className="w-full sm:w-auto px-8 py-4 bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-bold rounded-2xl border border-white/[0.08] hover:border-amber-400/40 transition-all flex items-center justify-center gap-3 text-xs uppercase tracking-wider cursor-pointer shadow-lg shadow-black/40"
          >
            <span>See What I Build</span>
          </button>
        </div>

        {/* Core Positioning Statement Banner */}
        <div className="w-full max-w-4xl p-5 md:p-6 rounded-2xl bg-slate-900/70 border border-white/[0.06] backdrop-blur-md text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center shrink-0 text-amber-400">
              <Workflow className="w-5 h-5" />
            </div>
            <div>
              <span className="mono-text text-[10px] text-amber-400 font-semibold uppercase tracking-wider block">Core Mandate</span>
              <p className="text-sm font-medium text-slate-200">
                I help VFX studios build, migrate, and orchestrate production infrastructure across local and cloud environments.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 mono-text text-xs text-slate-400 border-t md:border-t-0 md:border-l border-white/[0.08] pt-3 md:pt-0 md:pl-6 shrink-0">
            <ShieldCheck className="w-4 h-4 text-cloud-light" />
            <span>Studio-Grade Reliability</span>
          </div>
        </div>

      </div>
    </section>
  );
}
