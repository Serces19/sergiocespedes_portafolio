export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-title text-3xl md:text-5xl font-bold text-center mb-4 text-slate-900 tracking-tight">
          Professional Experience
        </h2>
        <p className="text-slate-600 text-center text-base mb-20 max-w-xl mx-auto">
          Track record in studio pipeline engineering, high-throughput cloud workflows, and data automation.
        </p>

        {/* Vertical Timeline Container */}
        <div className="relative border-l-2 border-slate-200 ml-4 lg:ml-64 space-y-16">
          
          {/* Timeline Item 1 */}
          <div className="relative pl-6 lg:pl-10 group">
            {/* Timeline Node Dot */}
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-cloud-blue ring-4 ring-sky-100 group-hover:scale-125 transition-transform"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 items-start">
              {/* Left Info Column */}
              <div className="lg:col-span-5 lg:-ml-64 lg:text-right lg:pr-8">
                <h3 className="font-title text-2xl lg:text-3xl font-bold text-slate-900 leading-tight">
                  Pipeline TD
                </h3>
                <p className="text-cloud-blue font-semibold text-sm mt-1">Atom Studios</p>
                <p className="mono-text text-xs text-slate-400 mt-1">Aug 2023 – Present</p>
              </div>

              {/* Right Content Column */}
              <div className="lg:col-span-7 pt-0.5">
                <p className="text-slate-700 text-sm lg:text-base leading-relaxed mb-4">
                  Architecting studio pipeline infrastructure, implementing Deadline render farm clusters, and developing hybrid cloud automation systems for machine learning and computational rendering workloads.
                </p>
                <div className="mono-text text-xs text-slate-500 flex flex-wrap items-center gap-x-3 gap-y-1 pt-2 border-t border-slate-200/80">
                  <span>AWS Deadline Cloud</span>
                  <span className="text-slate-300">•</span>
                  <span>Render Farm Fleets</span>
                  <span className="text-slate-300">•</span>
                  <span>Machine Learning</span>
                  <span className="text-slate-300">•</span>
                  <span>Python 3</span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="relative pl-6 lg:pl-10 group">
            {/* Timeline Node Dot */}
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-amber-400 ring-4 ring-amber-100 group-hover:scale-125 transition-transform"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 items-start">
              {/* Left Info Column */}
              <div className="lg:col-span-5 lg:-ml-64 lg:text-right lg:pr-8">
                <h3 className="font-title text-2xl lg:text-3xl font-bold text-slate-900 leading-tight">
                  VFX Compositor
                </h3>
                <p className="text-amber-600 font-semibold text-sm mt-1">Elemental</p>
                <p className="mono-text text-xs text-slate-400 mt-1">Jan 2023 – Jul 2023</p>
              </div>

              {/* Right Content Column */}
              <div className="lg:col-span-7 pt-0.5">
                <p className="text-slate-700 text-sm lg:text-base leading-relaxed mb-4">
                  Engineered high-throughput image processing and data pipelines for high-end visual content released on Netflix and Amazon Prime Video. Managed large-scale collaborative data workflows, shot ingestion, and terabyte-scale asset storage protocols.
                </p>
                <div className="mono-text text-xs text-slate-500 flex flex-wrap items-center gap-x-3 gap-y-1 pt-2 border-t border-slate-200/80">
                  <span>Netflix & Prime Productions</span>
                  <span className="text-slate-300">•</span>
                  <span>Terabyte Data Scale</span>
                  <span className="text-slate-300">•</span>
                  <span>Image Processing</span>
                  <span className="text-slate-300">•</span>
                  <span>Nuke API</span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="relative pl-6 lg:pl-10 group">
            {/* Timeline Node Dot */}
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-slate-400 ring-4 ring-slate-100 group-hover:scale-125 transition-transform"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 items-start">
              {/* Left Info Column */}
              <div className="lg:col-span-5 lg:-ml-64 lg:text-right lg:pr-8">
                <h3 className="font-title text-2xl lg:text-3xl font-bold text-slate-900 leading-tight">
                  Creative Tech Lead
                </h3>
                <p className="text-slate-700 font-semibold text-sm mt-1">Feedback Studio</p>
                <p className="mono-text text-xs text-slate-400 mt-1">Dec 2019 – Aug 2022</p>
              </div>

              {/* Right Content Column */}
              <div className="lg:col-span-7 pt-0.5">
                <p className="text-slate-700 text-sm lg:text-base leading-relaxed mb-4">
                  Directed end-to-end digital campaigns, video editing, graphic design, and media automation workflows. Implemented audience segmentation, automated chatbots, and conversion tracking integrations.
                </p>
                <div className="mono-text text-xs text-slate-500 flex flex-wrap items-center gap-x-3 gap-y-1 pt-2 border-t border-slate-200/80">
                  <span>Media Automation</span>
                  <span className="text-slate-300">•</span>
                  <span>Digital Campaigns</span>
                  <span className="text-slate-300">•</span>
                  <span>Chatbots & Conversion</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


