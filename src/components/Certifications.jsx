export default function Certifications() {
  return (
<section id="certifications" className="py-24 px-4 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="mono-text text-xs uppercase tracking-widest text-cloud-blue font-semibold block mb-2">Verified Qualifications</span>
          <h2 className="font-title text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Academic & Professional Credentials
          </h2>
          <p className="text-slate-600 text-base max-w-xl mx-auto">
            Verified specializations in Machine Learning, Cloud Architecture, and Data Science from world-class institutions.
          </p>
        </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Column 1: AWS Cloud Architecture */}
                <div className="neo-card overflow-hidden group flex flex-col justify-between border border-slate-200">
                    <div>
                        {/* Chamfered Header Block */}
                        <div className="notch-block bg-slate-900 text-white p-6 relative min-h-[160px] flex flex-col justify-between">
                            <div className="flex items-start justify-between">
                                <span className="mono-text text-xs text-slate-400">cert 01 /</span>
                            </div>
                            <div className="mt-4">
                                <div className="font-title text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                                    AWS
                                </div>
                            </div>
                        </div>
                        
                        {/* Lower Content */}
                        <div className="p-6">
                            <h4 className="font-title font-bold text-slate-900 text-lg mb-1">Cloud Solutions Architecture</h4>
                            <p className="text-xs font-semibold text-cloud-blue uppercase tracking-wider mb-3">AWS Certified</p>
                            <p className="text-slate-600 text-xs leading-relaxed mb-4">
                                Cloud Infrastructure, AWS Deadline Cloud Render Farm Clusters & MLOps Pipelines.
                            </p>
                        </div>
                    </div>

                    <div className="p-6 pt-0">
                        <a href="https://coursera.org/verify/professional-cert/3YDL622YMNLJ" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center text-xs font-semibold text-cloud-blue hover:text-blue-700 pt-3 border-t border-slate-100 w-full justify-between group-hover:translate-x-0.5 transition-transform">
                            <span>Verify Credential</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </a>
                    </div>
                </div>

                {/* Column 2: Stanford ML */}
                <div className="neo-card overflow-hidden group flex flex-col justify-between border border-slate-200">
                    <div>
                        {/* Chamfered Header Block */}
                        <div className="notch-block bg-cloud-blue text-white p-6 relative min-h-[160px] flex flex-col justify-between">
                            <div className="flex items-start justify-between">
                                <span className="mono-text text-xs text-sky-200">cert 02 /</span>
                            </div>
                            <div className="mt-4">
                                <div className="font-title text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                                    STANFORD
                                </div>
                            </div>
                        </div>
                        
                        {/* Lower Content */}
                        <div className="p-6">
                            <h4 className="font-title font-bold text-slate-900 text-lg mb-1">Machine Learning</h4>
                            <p className="text-xs font-semibold text-sky-700 uppercase tracking-wider mb-3">Stanford University</p>
                            <p className="text-slate-600 text-xs leading-relaxed mb-4">
                                Supervised & Unsupervised Learning, Deep Neural Networks, Model Optimization & Validation.
                            </p>
                        </div>
                    </div>

                    <div className="p-6 pt-0">
                        <a href="https://coursera.org/verify/specialization/IZN0WRIW98GE" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center text-xs font-semibold text-cloud-blue hover:text-blue-700 pt-3 border-t border-slate-100 w-full justify-between group-hover:translate-x-0.5 transition-transform">
                            <span>Verify Credential</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </a>
                    </div>
                </div>

                {/* Column 3: Harvard Data Science */}
                <div className="neo-card overflow-hidden group flex flex-col justify-between border border-slate-200">
                    <div>
                        {/* Chamfered Header Block */}
                        <div className="notch-block bg-amber-400 text-slate-950 p-6 relative min-h-[160px] flex flex-col justify-between">
                            <div className="flex items-start justify-between">
                                <span className="mono-text text-xs text-amber-900">cert 03 /</span>
                            </div>
                            <div className="mt-4">
                                <div className="font-title text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950">
                                    HARVARD
                                </div>
                            </div>
                        </div>
                        
                        {/* Lower Content */}
                        <div className="p-6">
                            <h4 className="font-title font-bold text-slate-900 text-lg mb-1">Data Science & ML</h4>
                            <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-3">Harvard University</p>
                            <p className="text-slate-600 text-xs leading-relaxed mb-4">
                                Statistical Inference, Probability Models, Machine Learning Algorithms & Production Data Pipelines.
                            </p>
                        </div>
                    </div>

                    <div className="p-6 pt-0">
                        <a href="http://credentials.edx.org/credentials/913a58e2c45546cc941ba92508dc8c70" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center text-xs font-semibold text-amber-700 hover:text-amber-800 pt-3 border-t border-slate-100 w-full justify-between group-hover:translate-x-0.5 transition-transform">
                            <span>Verify Credential</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7 7H3"></path></svg>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
}
