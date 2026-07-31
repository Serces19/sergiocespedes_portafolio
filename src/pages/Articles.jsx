import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';

export default function Articles() {
  const articlesList = [
    {
      slug: 'blog_deadline_cloud',
      title: 'Setting Up Deadline Render Farm',
      description: 'A comprehensive guide to implementing and configuring Deadline for optimal rendering performance in a VFX pipeline',
      image: '/assets/render.jpg',
      borderColor: 'border-accent/20',
      hoverColor: 'group-hover:text-amber-500',
      linkColor: 'text-amber-500 hover:text-amber-600'
    },
    {
      slug: 'blog_studio_cloud',
      title: 'Cloud Infrastructure for ML Tasks',
      description: 'Exploring scalable cloud solutions for machine learning tasks in VFX production environments',
      image: '/assets/cloud2.jpg',
      borderColor: 'border-cloud-blue/20',
      hoverColor: 'group-hover:text-cloud-blue',
      linkColor: 'text-cloud-blue hover:text-blue-700'
    },
    {
      slug: 'blog_vfx_pipeline',
      title: 'Beyond CopyCat: Engineering a High-Fidelity Few-Shot VFX Pipeline',
      description: 'Deep dive into hybrid loss functions, U-Net architecture optimization, and cloud orchestration for SOTA VFX results with limited resources',
      image: '/assets/vfx_pipeline_header.png',
      borderColor: 'border-purple-500/30',
      hoverColor: 'group-hover:text-purple-600',
      linkColor: 'text-purple-600 hover:text-purple-700'
    },
    {
      slug: 'dinov3_manifold',
      title: 'The Manifold and the Ideology of the Real: DINOv3 Latent Space Geometry',
      description: 'Exploring how self-supervised Vision Transformers (DINOv3) map the geometry of facial age and non-linear feature manifolds.',
      image: '/assets/cover_manifold_dino.png',
      borderColor: 'border-blue-500/30',
      hoverColor: 'group-hover:text-blue-600',
      linkColor: 'text-blue-600 hover:text-blue-700'
    },
    {
      slug: 'blog_ayon',
      title: 'Building with Ayon (OpenPype)',
      description: 'Deep dive into pipeline development using Ayon, formerly known as OpenPype, for efficient asset management and studio automation.',
      image: '/assets/machine.jpg',
      borderColor: 'border-amber-500/20',
      hoverColor: 'group-hover:text-amber-600',
      linkColor: 'text-amber-600 hover:text-amber-700'
    },
    {
      slug: 'blog_linux',
      title: 'Linux Environment Setup for VFX Pipelines',
      description: 'Essential guide to configuring a Linux environment for VFX pipeline development, studio dependencies, and production environment consistency.',
      image: '/assets/linux.jpg',
      borderColor: 'border-slate-300',
      hoverColor: 'group-hover:text-slate-800',
      linkColor: 'text-slate-700 hover:text-slate-900'
    }
  ];

  const toolsList = [
    {
      slug: 'render_all',
      title: 'Render All!',
      description: 'Open source desktop app to render in local environments with an intuitive interface for managing render jobs.',
      image: '/assets/render_all_edit.png',
      github: 'https://github.com/Serces19/render-all',
      borderColor: 'border-amber-500/30',
      hoverColor: 'group-hover:text-amber-600',
      linkColor: 'text-amber-600 hover:text-amber-700'
    },
    {
      slug: 'telegram_notify',
      title: 'Telegram Notify',
      description: 'Easy way to get real-time notifications of your renders directly through Telegram messaging.',
      image: '/assets/telegram_notify.png',
      github: 'https://github.com/Serces19/telegram-notify',
      borderColor: 'border-cloud-blue/30',
      hoverColor: 'group-hover:text-cloud-blue',
      linkColor: 'text-cloud-blue hover:text-blue-700'
    },
    {
      slug: 'atom_app',
      title: 'Shot Tracker Pipeline',
      description: 'Artist-friendly pipeline tool designed to streamline compositing tasks with an intuitive interface.',
      image: '/assets/atom_app_edit.png',
      github: 'https://github.com/Serces19/shot-tracker',
      borderColor: 'border-purple-500/30',
      hoverColor: 'group-hover:text-purple-600',
      linkColor: 'text-purple-600 hover:text-purple-700'
    }
  ];

  return (
    <>
      {/* Header Banner */}
      <header className="relative min-h-[45vh] flex items-center justify-center bg-gradient-to-br from-cloud-blue via-blue-600 to-sky-700 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15)_0%,transparent_50%)]"></div>
        </div>

        {/* Floating Accents */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-amber-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Main Header Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-16">
          <h1 className="font-title text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white tracking-tight">
            Engineering Case Studies & R&D
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Technical articles, deep learning paper audits, AWS cloud architectures, and production pipeline benchmarks.
          </p>

          {/* Key Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-amber-300 font-title">MSc Candidate</div>
              <div className="text-white/80 text-xs uppercase tracking-wider">Machine Learning R&D</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-amber-300 font-title">AWS</div>
              <div className="text-white/80 text-xs uppercase tracking-wider">Cloud & MLOps</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-amber-300 font-title">Netflix / Prime</div>
              <div className="text-white/80 text-xs uppercase tracking-wider">Production Workflows</div>
            </div>
          </div>
        </div>
      </header>

      {/* Articles Grid Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-title text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900 tracking-tight">
            Case Studies & Technical Notes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articlesList.map((art) => (
              <article 
                key={art.slug}
                className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transform hover:-translate-y-1.5 transition-all duration-300 border ${art.borderColor} flex flex-col justify-between`}
              >
                <div>
                  <div className="relative overflow-hidden h-48 bg-slate-100">
                    <img 
                      src={art.image} 
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl font-bold text-slate-900 mb-3 transition-colors ${art.hoverColor}`}>
                      {art.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {art.description}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <Link 
                    to={`/blog/${art.slug}`}
                    className={`inline-flex items-center text-sm font-semibold transition-all ${art.linkColor}`}
                  >
                    <span>Read Technical Article</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Applications Section */}
      <section className="py-20 px-4 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-title text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900 tracking-tight">
            Tools & Applications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {toolsList.map((tool) => (
              <article 
                key={tool.slug}
                className={`group bg-slate-50/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transform hover:-translate-y-1.5 transition-all duration-300 border ${tool.borderColor} flex flex-col justify-between`}
              >
                <div>
                  <div className="relative overflow-hidden h-48 bg-slate-200">
                    <img 
                      src={tool.image} 
                      alt={tool.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* GitHub Link Badge */}
                    <div className="absolute top-3 right-3 z-10">
                      <a 
                        href={tool.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1 bg-black/60 backdrop-blur-md text-white rounded-full text-xs hover:bg-black/80 transition-all border border-white/20 gap-1.5"
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className={`text-xl font-bold text-slate-900 mb-2 transition-colors ${tool.hoverColor}`}>
                      {tool.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {tool.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-200/80 flex items-center justify-between mt-auto">
                  <Link 
                    to={`/blog/${tool.slug}`}
                    className={`inline-flex items-center text-sm font-semibold transition-all ${tool.linkColor}`}
                  >
                    <span>Read More</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Shared Contact Section */}
      <Contact />
    </>
  );
}


