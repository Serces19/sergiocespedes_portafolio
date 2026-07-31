import { ArrowRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-slate-100/50 to-blue-50/50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,122,204,0.12)_0%,transparent_50%)]">
        </div>
      </div>

      {/* Floating Accent Glows */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-accent/20 to-amber-400/20 rounded-full blur-3xl animate-pulse">
      </div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cloud-blue/20 to-sky-400/20 rounded-full blur-3xl animate-pulse delay-1000">
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 py-16">
        {/* Profile Image */}
        <div className="mb-8 relative">
          <div className="w-44 h-44 md:w-56 md:h-56 mx-auto mb-6 relative">
            <img src="/assets/Foto_Sergio_Cespedes.jpg"
              alt="Sergio Cespedes - MSc Candidate in ML | Computer Vision & MLOps Architect"
              className="w-full h-full object-cover rounded-full border-4 border-accent shadow-xl hover:shadow-accent/40 transition-all duration-300" />
            {/* Status indicator */}
            <div className="absolute bottom-3 right-3 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white animate-pulse"
              title="Available for R&D & Architect Roles">
            </div>
          </div>
        </div>

        {/* Name & Title */}
        <h1 className="font-title pb-3 text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-slate-800 to-cloud-blue bg-clip-text text-transparent animate-fade-in tracking-tight">
          Sergio Cespedes
        </h1>
        <h2 className="text-lg md:text-xl lg:text-2xl font-medium mb-8 text-slate-700 tracking-normal max-w-3xl mx-auto animate-fade-in animation-delay-200">
          MSc Candidate in Machine Learning &nbsp;|&nbsp; Computer Vision & MLOps Architect
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-600">
          <a href="#featured-projects" className="inline-flex items-center px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 group">
            <span>Explore Featured Case Studies</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="https://www.linkedin.com/in/sergio-cespedes/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-white text-slate-800 font-semibold rounded-full border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 shadow-sm">
            <svg className="w-5 h-5 mr-2 text-cloud-blue" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#featured-projects" aria-label="Scroll down">
          <ArrowDown className="w-6 h-6 text-slate-400 hover:text-slate-600 transition-colors" />
        </a>
      </div>
    </section>
  );
}