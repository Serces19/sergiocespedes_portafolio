import { ExternalLink } from 'lucide-react';

export default function VfxVectorescopeCta() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#0b1220] to-[#070b14] border border-amber-400/30 shadow-[0_0_70px_-15px_rgba(245,158,11,0.28)] overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 group">
        
        {/* Ambient Glow Effects */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-orange-500/15 blur-[100px] rounded-full pointer-events-none" />

        {/* Content with Logo */}
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 max-w-3xl">
          {/* Vectorescope Logo Emblem in sleek light card */}
          <div className="shrink-0 p-3 sm:p-3.5 rounded-2xl bg-white shadow-xl shadow-amber-500/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <img
              src="/assets/logo_black.png"
              alt="Vectorescope Logo"
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/10 text-amber-300 mono-text text-[11px] font-semibold mb-2.5">
              <span>Related Product Platform</span>
            </div>
            <h3 className="font-title text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
              Need Ready to use AI model training infrastructure?
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Vectorescope is a platform I'm building to make computer vision model training more accessible and repeatable for VFX teams.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="relative z-10 shrink-0 w-full sm:w-auto">
          <a
            href="https://vectorescope.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-400/20 hover:shadow-amber-400/35 group/btn cursor-pointer"
          >
            <span>Explore Vectorescope</span>
            <ExternalLink className="w-4 h-4 text-slate-950 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
