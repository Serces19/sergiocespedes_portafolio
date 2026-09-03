import { useEffect } from 'react';
import VfxHero from '../components/vfx/VfxHero';
import VfxProblemBento from '../components/vfx/VfxProblemBento';
import VfxCapabilities from '../components/vfx/VfxCapabilities';
import VfxAiPipelinePatterns from '../components/vfx/VfxAiPipelinePatterns';
import VfxVectorescopeCta from '../components/vfx/VfxVectorescopeCta';
import VfxDifferentiator from '../components/vfx/VfxDifferentiator';
import VfxEngagements from '../components/vfx/VfxEngagements';
import Contact from '../components/Contact';

export default function VfxLanding() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'VFX Cloud, Pipeline & AI Infrastructure — Sergio Céspedes';
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 selection:bg-amber-400 selection:text-slate-950 font-sans">
      <VfxHero onScrollToSection={scrollToSection} />
      <VfxProblemBento />
      <VfxCapabilities />
      <VfxAiPipelinePatterns />
      <VfxVectorescopeCta />
      <VfxDifferentiator />
      <VfxEngagements />
      <Contact />
    </div>
  );
}
