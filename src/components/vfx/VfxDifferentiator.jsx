export default function VfxDifferentiator() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Visual Column / Photo Card */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl p-1.5 bg-gradient-to-b from-amber-400/20 via-slate-800/40 to-[#0c1220] shadow-2xl">
            <div className="w-full h-[400px] rounded-2xl overflow-hidden relative">
              <img
                src="/assets/Foto_Sergio_Cespedes.jpg"
                alt="Sergio Céspedes"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080d18] via-transparent to-transparent opacity-85" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-title text-xl font-bold text-white block">Sergio Céspedes</span>
                <span className="mono-text text-xs text-amber-300 font-semibold uppercase tracking-wider">
                  Cloud Infrastructure for Visual AI
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Column */}
        <div className="lg:col-span-7 space-y-6">
          <span className="mono-text text-xs uppercase tracking-widest text-cloud-light font-semibold block">
            Section 04 / The Differentiator
          </span>
          
          <h2 className="font-title text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Built by someone who understands both the artist and the infrastructure.
          </h2>

          <blockquote className="p-4 rounded-xl bg-[#0c1220] border-l-4 border-amber-400 text-slate-200 text-sm md:text-base italic leading-relaxed shadow-lg">
            "I understand what happens inside the DCC, what happens inside the pipeline, and what needs to happen underneath it in the infrastructure."
          </blockquote>

          <p className="text-slate-300 text-sm leading-relaxed">
            Traditional cloud engineering and VFX pipeline engineering are usually treated as separate disciplines. I work across both.I understand the DCC, the pipeline, the compute layer, and the AI systems connecting them.
          </p>

        </div>

      </div>

    </section>
  );
}
