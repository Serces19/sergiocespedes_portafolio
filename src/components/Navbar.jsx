import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    if (isHome) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo & Branding */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/assets/logo_scope.png" 
              alt="Sergio Céspedes Logo" 
              className="h-9 w-9 rounded-full object-cover border border-slate-200 group-hover:border-cloud-blue transition-colors"
            />
            <div className="flex flex-col">
              <span className="font-title font-bold text-slate-900 text-base md:text-lg leading-tight group-hover:text-cloud-blue transition-colors">
                Sergio Céspedes
              </span>
              <span className="font-mono text-[10px] md:text-xs text-slate-500 font-medium">
                Cloud Architect & TD
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
            {isHome ? (
              <>
                <a href="#featured-projects" onClick={() => handleNavClick('featured-projects')} className="hover:text-cloud-blue transition-colors">
                  Case Studies
                </a>
                <a href="#expertise" onClick={() => handleNavClick('expertise')} className="hover:text-cloud-blue transition-colors">
                  Expertise
                </a>
                <a href="#experience" onClick={() => handleNavClick('experience')} className="hover:text-cloud-blue transition-colors">
                  Experience
                </a>
                <a href="#about" onClick={() => handleNavClick('about')} className="hover:text-cloud-blue transition-colors">
                  About
                </a>
                <a href="#certifications" onClick={() => handleNavClick('certifications')} className="hover:text-cloud-blue transition-colors">
                  Certifications
                </a>
                <a href="#contact" onClick={() => handleNavClick('contact')} className="hover:text-cloud-blue transition-colors">
                  Contact
                </a>
              </>
            ) : (
              <>
                <Link to="/#featured-projects" className="hover:text-cloud-blue transition-colors">Case Studies</Link>
                <Link to="/#expertise" className="hover:text-cloud-blue transition-colors">Expertise</Link>
                <Link to="/#experience" className="hover:text-cloud-blue transition-colors">Experience</Link>
                <Link to="/#about" className="hover:text-cloud-blue transition-colors">About</Link>
                <Link to="/#certifications" className="hover:text-cloud-blue transition-colors">Certifications</Link>
                <Link to="/#contact" className="hover:text-cloud-blue transition-colors">Contact</Link>
              </>
            )}
            <Link 
              to="/articles" 
              className={`hover:text-cloud-blue transition-colors ${location.pathname === '/articles' ? 'text-cloud-blue font-semibold' : ''}`}
            >
              Articles & Notes
            </Link>
          </nav>

          {/* Right Action Icons (GitHub, LinkedIn) */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="https://github.com/serces19" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/sergio-cespedes/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-slate-600 hover:text-cloud-blue hover:bg-slate-100 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            type="button" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 hover:text-cloud-blue"
          >
            Home
          </Link>
          <a 
            href="#featured-projects" 
            onClick={() => handleNavClick('featured-projects')} 
            className="block py-2 text-base font-medium text-slate-600 hover:text-cloud-blue"
          >
            Case Studies
          </a>
          <a 
            href="#experience" 
            onClick={() => handleNavClick('experience')} 
            className="block py-2 text-base font-medium text-slate-600 hover:text-cloud-blue"
          >
            Experience
          </a>
          <a 
            href="#about" 
            onClick={() => handleNavClick('about')} 
            className="block py-2 text-base font-medium text-slate-600 hover:text-cloud-blue"
          >
            About
          </a>
          <a 
            href="#certifications" 
            onClick={() => handleNavClick('certifications')} 
            className="block py-2 text-base font-medium text-slate-600 hover:text-cloud-blue"
          >
            Certifications
          </a>
          <a 
            href="#contact" 
            onClick={() => handleNavClick('contact')} 
            className="block py-2 text-base font-medium text-slate-600 hover:text-cloud-blue"
          >
            Contact
          </a>
          <Link 
            to="/articles" 
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-semibold text-cloud-blue"
          >
            Articles & Notes
          </Link>
          <div className="pt-4 border-t border-slate-100 flex items-center gap-4">
            <a 
              href="https://github.com/serces19" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-100 px-4 py-2.5 rounded-lg"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/sergio-cespedes/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-white bg-cloud-blue px-4 py-2.5 rounded-lg"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}