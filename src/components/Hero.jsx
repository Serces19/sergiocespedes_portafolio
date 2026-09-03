import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center bg-[#0B1120] text-white overflow-hidden py-20 px-4">
      
      {/* Neo-Flat Subtle Video Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-30">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter contrast-125 saturate-110"
        >
          <source src="/assets/Master_Pipeline_edit.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#0B1120]/75"></div>
      </div>

      {/* Hero Content - Clean, Minimalist, Spacious */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-amber-400/40 shadow-md mb-8">
          <span className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-pulse"></span>
          <span className="mono-text text-xs font-semibold uppercase tracking-wider text-amber-300">
            Available for R&D & Engineering Projects
          </span>
        </div>

        {/* Profile Avatar with Yellow Ring (Clean, no play badge) */}
        <div className="relative mb-8">
          <div className="w-44 h-44 md:w-56 md:h-56 rounded-full p-1.5 bg-amber-400 shadow-2xl shadow-amber-400/20">
            <img 
              src="/assets/Foto_Sergio_Cespedes.jpg" 
              alt="Sergio Céspedes" 
              className="w-full h-full object-cover rounded-full border-4 border-[#0B1120]" 
            />
          </div>
        </div>

        {/* Main Title & Subtitle */}
        <h1 className="font-title text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
          Sergio Céspedes
        </h1>

        <p className="mono-text text-xs md:text-sm text-amber-300 font-medium uppercase tracking-widest mb-6 max-w-2xl">
          MSc Candidate in Machine Learning &nbsp;•&nbsp; Computer Vision & MLOps Architect
        </p>

        <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl mb-10 font-normal">
          Building reproducible deep learning models, AWS cloud infrastructure, and GPU pipelines for production.
        </p>

        {/* Clean Neo-Flat Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Primary Action - Link to Articles */}
          <Link 
            to="/articles" 
            className="w-full sm:w-auto px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-2xl shadow-lg hover:shadow-amber-400/20 transition-all flex items-center justify-center gap-3 text-xs uppercase tracking-wider group"
          >
            <BookOpen className="w-4 h-4 text-slate-950" />
            <span>Articles & Tools</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Secondary Action - Scroll to Case Studies */}
          <a 
            href="#featured-projects" 
            className="w-full sm:w-auto px-8 py-4 bg-slate-900/90 hover:bg-slate-800 text-white font-bold rounded-2xl border border-slate-700 hover:border-amber-400/50 transition-all flex items-center justify-center gap-3 text-xs uppercase tracking-wider group"
          >
            <span>Explore Case Studies</span>
          </a>
        </div>

      </div>

    </section>
  );
}


