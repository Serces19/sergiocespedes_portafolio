export default function Expertise() {
  return (
    <section id="expertise" className="py-24 px-4 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_30%,rgba(0,122,204,0.4)_0%,transparent_60%)] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-800">
          <div>
            <span className="mono-text text-xs uppercase tracking-widest text-cloud-blue font-semibold">Core Competencies</span>
            <h2 className="font-title text-3xl md:text-5xl font-bold text-white mt-2 tracking-tight">
              Areas of Expertise
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md mt-4 md:mt-0 leading-relaxed">
            Bridging deep learning research with enterprise cloud architecture and high-throughput production pipelines.
          </p>
        </div>

        {/* Numbered Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-800 border-b border-slate-800 pb-12 gap-8 md:gap-0">
          
          {/* Column 01: Computer Vision & DL */}
          <div className="py-6 md:py-0 md:px-8 first:pl-0 last:pr-0 flex flex-col justify-between group">
            <div>
              <div className="font-title text-6xl md:text-7xl font-extrabold text-slate-700 group-hover:text-amber-400 transition-colors duration-300">
                01
              </div>
              <h3 className="font-title text-lg md:text-xl font-bold text-white mt-4 mb-3 tracking-wide">
                COMPUTER VISION & DEEP LEARNING
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Exploration and audit of state-of-the-art vision transformers (DINOv3), U-Net architectures, and self-supervised latent space manifold learning.
              </p>
            </div>
            <ul className="space-y-2.5 text-xs font-medium text-slate-300 mono-text border-t border-slate-800/80 pt-6">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                <span>DINOv3 & Vision Transformers</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                <span>PyTorch & Loss Engineering</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                <span>Latent Geometry & Manifolds</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                <span>Few-Shot Neural Compositing</span>
              </li>
            </ul>
          </div>

          {/* Column 02: Cloud Architecture & MLOps */}
          <div className="py-6 md:py-0 md:px-8 first:pl-0 last:pr-0 flex flex-col justify-between group">
            <div>
              <div className="font-title text-6xl md:text-7xl font-extrabold text-slate-700 group-hover:text-cloud-blue transition-colors duration-300">
                02
              </div>
              <h3 className="font-title text-lg md:text-xl font-bold text-white mt-4 mb-3 tracking-wide">
                CLOUD ARCHITECTURE & MLOPS
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Designing scalable AWS cloud infrastructures, distributed GPU compute farms, automated model validation, and containerized deployments.
              </p>
            </div>
            <ul className="space-y-2.5 text-xs font-medium text-slate-300 mono-text border-t border-slate-800/80 pt-6">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cloud-blue shrink-0"></span>
                <span>AWS Deadline Cloud & Fargate</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cloud-blue shrink-0"></span>
                <span>Multi-GPU Fleet Orchestration</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cloud-blue shrink-0"></span>
                <span>Terraform & Infrastructure-as-Code</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cloud-blue shrink-0"></span>
                <span>Docker & Storage Caching</span>
              </li>
            </ul>
          </div>

          {/* Column 03: Data Pipelines & Automation */}
          <div className="py-6 md:py-0 md:px-8 first:pl-0 last:pr-0 flex flex-col justify-between group">
            <div>
              <div className="font-title text-6xl md:text-7xl font-extrabold text-slate-700 group-hover:text-purple-400 transition-colors duration-300">
                03
              </div>
              <h3 className="font-title text-lg md:text-xl font-bold text-white mt-4 mb-3 tracking-wide">
                DATA PIPELINES & AUTOMATION
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Engineering enterprise data pipelines handling terabytes of asset information for high-end studio productions (Netflix & Amazon Prime scale).
              </p>
            </div>
            <ul className="space-y-2.5 text-xs font-medium text-slate-300 mono-text border-t border-slate-800/80 pt-6">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0"></span>
                <span>AYON & Open Pipeline Frameworks</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0"></span>
                <span>Terabyte-Scale Asset Ingestion</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0"></span>
                <span>Python Production Automation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0"></span>
                <span>Metadata & Database Sync</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
