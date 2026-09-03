import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 px-4 border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        
        {/* Left Column - Branding */}
        <div>
          <Link to="/" className="inline-flex items-center gap-3 mb-2">
            <img src="/assets/logo_scope.png" alt="Logo" className="w-8 h-8 rounded-full border border-slate-700" />
            <span className="font-title text-xl font-bold text-white tracking-tight">Sergio Céspedes</span>
          </Link>
          <p className="text-xs text-slate-500 max-w-sm">
            Cloud Infrastructure for Visual AI
          </p>
        </div>

        {/* Center Column - Navigation */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-mono">
          <a href="/#featured-projects" className="hover:text-white transition-colors">Case Studies</a>
          <a href="/#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="/#about" className="hover:text-white transition-colors">About</a>
          <a href="/#certifications" className="hover:text-white transition-colors">Certifications</a>
          <a href="/#contact" className="hover:text-white transition-colors">Contact</a>
          <Link to="/vfx" className="text-amber-400 hover:text-amber-300 font-semibold transition-colors">VFX Infrastructure</Link>
          <Link to="/articles" className="text-cloud-blue hover:text-sky-300 transition-colors">Articles</Link>
        </div>

        {/* Right Column - Social & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3 text-xs">
          <div className="flex items-center gap-4">
            <a href="https://github.com/serces19" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/sergio-cespedes/" target="_blank" rel="noopener noreferrer" className="hover:text-cloud-blue transition-colors">
              LinkedIn
            </a>
            <a href="mailto:sergio@vectorescope.com" className="hover:text-amber-400 transition-colors">
              Email
            </a>
          </div>
          <p className="text-slate-600 font-mono text-[11px]">
            &copy; {new Date().getFullYear()} Sergio Céspedes. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}