export default function VfxProblemBento() {
  return (
    <section className="w-full bg-[#f8fafc] text-slate-900 border-y border-slate-200/80 py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Meta Info Bar (Editorial Presentation Style) */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 pb-4 mb-8 text-[11px] mono-text text-slate-500 uppercase tracking-wider">
        <span className="mono-text text-xs uppercase tracking-widest text-amber-400 font-semibold block mb-2">
          Section 01 / The Problem
        </span>
        </div>

        {/* Top Row: Visual Asset + (01) Card + (02) Vibrant Amber Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-10 items-stretch">
          
          {/* Visual Showcase Card (Wide Rounded Shape) */}
          <div className="md:col-span-12 lg:col-span-6 h-64 sm:h-72 lg:h-80 rounded-[2rem] overflow-hidden bg-slate-950 relative group shadow-sm">
            <img 
              src="/assets/vfx/blender_ui.jpg" 
              alt="VFX Production Render Workloads" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] mono-text font-semibold">
                DCC & Farm Workloads
              </span>
            </div>
          </div>

          {/* Card 01: Minimal Light Card */}
          <div className="md:col-span-6 lg:col-span-3 rounded-[2rem] bg-white border border-slate-200/80 p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div>
              <span className="mono-text text-xs text-slate-400 font-bold block mb-4">
                (01)
              </span>
              <h3 className="font-title text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-3">
                PEAK FARM LIMITS
              </h3>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Render bursts quickly overwhelm on-premise hardware during crunch, turning delivery deadlines into high-risk bottlenecks.
            </p>
          </div>

          {/* Card 02: Vibrant Amber Accent Card (Inspired by Reference Yellow Card) */}
          <div className="md:col-span-6 lg:col-span-3 rounded-[2rem] bg-amber-400 text-slate-950 p-7 sm:p-8 flex flex-col justify-between shadow-md shadow-amber-400/20 hover:shadow-lg hover:shadow-amber-400/30 transition-all">
            <div>
              <span className="mono-text text-xs text-slate-900/70 font-bold block mb-4">
                (02)
              </span>
              <h3 className="font-title text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-snug mb-3">
                  THE AI WORKFLOW GAP
              </h3>
            </div>
            <p className="text-slate-900 text-xs sm:text-sm leading-relaxed font-medium">
              Experimental models fail under delivery pressure. AI needs deterministic pipeline plumbing and native DCC integration.
            </p>
          </div>

        </div>

        {/* Bottom Row: Massive Headline on Left + Dark Squircle Asterisk Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Big Bold Headline */}
          <div className="lg:col-span-8">
            <h2 className="font-title text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.06]">
              Infrastructure Friction Slows Down Creative Delivery
            </h2>
          </div>

          {/* Right Squircle Badge Card (Matching Reference Asterisk Badge) */}
          <div className="lg:col-span-4 rounded-[2rem] bg-[#0c1220] text-white p-6 sm:p-7 flex items-center gap-5 shadow-xl">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 shadow-inner">
              <span className="font-title text-3xl sm:text-4xl font-black text-amber-400 select-none leading-none">
                ✱
              </span>
            </div>
            <div>
              <span className="mono-text text-[20px] text-amber-400 font-bold uppercase tracking-wider block mb-1">
                Zero-Trust & Invisible Ops
              </span>
              <p className="text-slate-300 text-xs leading-relaxed">
                Private VPC routing and automated submitters keep pipeline plumbing completely invisible to artists.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
