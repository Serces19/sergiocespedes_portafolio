import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'dinov3_manifold',
      title: 'DINOv3 Latent Space Geometry & Manifold Audit',
      description: 'Deep dive into self-supervised Vision Transformers (DINOv3). Auditing how high-dimensional feature spaces map non-linear manifolds such as human facial aging and subtle image attributes.',
      image: '/assets/cover_manifold_dino.png',
      categories: ['cv-dl'],
      link: '/blog/dinov3_manifold',
      linkText: 'Read Case Study',
      colorClass: 'text-cloud-blue hover:text-blue-700'
    },
    {
      id: 'deadline_cloud',
      title: 'AWS Deadline Cloud & Distributed GPU Orchestration',
      description: 'Architecting hybrid cloud infrastructure on AWS for render farms and scalable GPU machine learning workloads. Implementing automated farm queues, storage caching, and cost-effective spot fleets.',
      image: '/assets/render.jpg',
      categories: ['cloud', 'pipeline'],
      link: '/blog/blog_deadline_cloud',
      linkText: 'Read Architecture Guide',
      colorClass: 'text-cloud-blue hover:text-blue-700'
    },
    {
      id: 'vfx_pipeline',
      title: 'High-Fidelity Few-Shot VFX Neural Compositing',
      description: 'Engineering a hybrid U-Net neural architecture with perceptual and structural loss functions. Designed to deliver high-fidelity VFX matting & compositing with minimal training samples.',
      image: '/assets/vfx_pipeline_header.png',
      categories: ['cv-dl', 'pipeline'],
      link: '/blog/blog_vfx_pipeline',
      linkText: 'Read Deep Tech Article',
      colorClass: 'text-purple-600 hover:text-purple-700'
    },
    {
      id: 'ayon',
      title: 'Enterprise Pipeline Data & Asset Automation (AYON)',
      description: 'Building open pipeline workflows for Netflix and Amazon Prime scale data productions. Automating asset tracking, shot ingestion, multi-department publisher scripts, and database metadata sync.',
      image: '/assets/cloud2.jpg',
      categories: ['pipeline', 'cloud'],
      link: '/blog/blog_ayon',
      linkText: 'Read Workflow Study',
      colorClass: 'text-amber-600 hover:text-amber-700'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.categories.includes(filter));

  return (
    <section id="featured-projects" className="py-24 px-4 bg-white border-y border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="mono-text text-xs uppercase tracking-widest text-cloud-blue font-semibold block mb-2">Featured Work & R&D</span>
          <h2 className="font-title text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Case Studies & Engineering Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article 
              key={project.id}
              className="project-card-item neo-card overflow-hidden group flex flex-col justify-between"
            >
              <div>
                <div className="relative overflow-hidden h-52 bg-slate-100 border-b border-slate-200">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-title text-xl font-bold text-slate-900 mb-2 group-hover:text-cloud-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-auto">
                <Link 
                  to={project.link} 
                  className={`inline-flex items-center text-sm font-semibold transition-colors ${project.colorClass}`}
                >
                  <span>{project.linkText}</span>
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Link 
            to="/articles" 
            className="inline-flex items-center px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-full border border-slate-300 transition-all text-sm"
          >
            <span>Browse All Case Studies & Technical Notes</span>
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

