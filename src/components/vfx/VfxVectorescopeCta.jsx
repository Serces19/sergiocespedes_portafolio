import { Box, ExternalLink } from 'lucide-react';

export default function VfxVectorescopeCta() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#0c1220] via-[#0b101d] to-[#080d18] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/10 text-amber-300 mono-text text-[11px] font-semibold mb-3">
            <Box className="w-3.5 h-3.5" />
            <span>Related Product Platform</span>
          </div>
          <h3 className="font-title text-2xl md:text-3xl font-bold text-white mb-2">
            Need AI model training infrastructure?
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            Vectorescope is a platform I'm building to make computer vision model training more accessible and repeatable for VFX teams.
          </p>
        </div>

        <div className="shrink-0">
          <a
            href="https://vectorescope.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg group cursor-pointer"
          >
            <span>Explore Vectorescope</span>
            <ExternalLink className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
