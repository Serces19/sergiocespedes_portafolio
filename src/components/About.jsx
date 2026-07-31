export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-white border-t border-slate-200 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="mono-text text-xs uppercase tracking-widest text-cloud-blue font-semibold">Background & Vision</span>
          <h2 className="font-title text-3xl md:text-5xl font-bold text-slate-900 mt-2 mb-4 tracking-tight">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Showcase */}
          <div className="lg:col-span-6 relative">
            {/* Rounded Vibrant Backdrop Card */}
            <div className="relative rounded-[2rem] bg-gradient-to-br from-sky-400 via-cloud-blue to-blue-700 p-4 md:p-6 shadow-xl min-h-[420px] flex items-end overflow-hidden">
                
              {/* Profile / Work Desk Image */}
              <div className="relative z-10 w-full h-[360px] md:h-[400px] rounded-xl overflow-hidden shadow-lg border border-white/20">
                <img 
                  src="/assets/desk.jpg" 
                  alt="Sergio Cespedes - Machine Learning & Vision R&D" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>

              {/* Vertical Typography Overlay */}
              <span className="font-title text-5xl md:text-6xl font-black text-white/90 drop-shadow-md absolute top-6 left-2 z-20 tracking-tighter select-none pointer-events-none writing-vertical">
                INNOVATION
              </span>

              {/* Status Badge Inside Top Right Corner */}
              <div className="absolute top-4 right-4 z-30 bg-slate-900/90 backdrop-blur-md text-white px-4 py-2.5 rounded-xl border border-white/20 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                  <span className="mono-text text-[11px] font-bold uppercase tracking-wider text-amber-300">
                    Available for Engineering Projects
                  </span>
                </div>
              </div>
            </div>

            {/* Overlapping Floating Feature Card Bottom Right */}
            <div className="hidden sm:block absolute -bottom-5 -right-2 z-30 w-64 md:w-72 bg-blue-600 text-white rounded-2xl p-5 shadow-xl border border-sky-300/40">
              <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center mb-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="font-title font-bold text-sm text-white mb-0.5">R&D & Deep Learning</h4>
              <p className="text-[11px] text-sky-100 leading-relaxed">
                Transforming academic computer vision research into reproducible, high-performance production solutions.
              </p>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-title text-2xl md:text-3xl font-bold text-slate-900 leading-snug">
              Bridging Deep Learning Research & High-Scale Media Production
            </h3>
            
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              I am an MSc candidate in Machine Learning specializing in Computer Vision and pipeline automation for GPU-intensive workflows. I build end-to-end architectures to train, validate, and deploy deep learning models across local and cloud environments.
            </p>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              For years, I developed image processing workflows for high-end visual productions released on Netflix and Amazon Prime Video, handling terabytes of collaborative studio data under strict quality standards.
            </p>

            {/* Key Focus Highlights */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 font-title font-bold text-xs border border-amber-200">01</div>
                <div>
                  <h4 className="font-title font-bold text-slate-900 text-sm">Computer Vision & Manifold R&D</h4>
                  <p className="text-slate-600 text-xs leading-relaxed mt-0.5">Auditing self-supervised vision transformers (DINOv3), U-Net architectures, and perceptual loss engineering.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-xl bg-sky-50 text-cloud-blue flex items-center justify-center flex-shrink-0 font-title font-bold text-xs border border-sky-200">02</div>
                <div>
                  <h4 className="font-title font-bold text-slate-900 text-sm">GPU Fleet & Cloud Automation</h4>
                  <p className="text-slate-600 text-xs leading-relaxed mt-0.5">Architecting AWS Deadline Cloud, spot fleets, storage caching, and Terraform Infrastructure-as-Code.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0 font-title font-bold text-xs border border-purple-200">03</div>
                <div>
                  <h4 className="font-title font-bold text-slate-900 text-sm">Terabyte-Scale Production Data</h4>
                  <p className="text-slate-600 text-xs leading-relaxed mt-0.5">Automating asset tracking, shot ingestion, and open pipeline frameworks (AYON) for studio workflows.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

