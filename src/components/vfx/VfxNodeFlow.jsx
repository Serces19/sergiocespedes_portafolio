import { useState } from 'react';
import { 
  Box, 
  Cloud, 
  Cpu, 
  Terminal, 
  Workflow, 
  Server
} from 'lucide-react';

export default function VfxNodeFlow() {
  const [dccTab, setDccTab] = useState('nuke'); // 'nuke' | 'blender'

  // SVG Canvas dimensions
  const vbWidth = 1040;
  const vbHeight = 560;

  // Primary Glassmorphic Pipes
  // Pipe 1: Loop from Node 1 (150, 130) -> left to 80 -> down to 430 -> right into Node 2 (150, 430)
  const pipeLoop = "M 150 130 H 100 A 20 20 0 0 0 80 150 V 410 A 20 20 0 0 0 100 430 H 150";

  // Pipe 2: From Node 1 -> Preview 1
  const wire1 = "M 380 130 H 430";

  // Pipe 3: From Preview 1 -> Node 3
  const pipeTop = "M 640 130 H 700";

  // Pipe 4: From Node 2 -> Preview 2
  const wire2 = "M 380 430 H 430";

  // Pipe 5: From Preview 2 (640, 430) -> right -> up to 185 -> right into Node 3 (700, 185)
  const pipeBottom = "M 640 430 H 660 A 20 20 0 0 0 680 410 V 205 A 20 20 0 0 1 700 185 H 700";

  // Wire 6: From Node 3 bottom (845, 225) -> down to Preview 3 (845, 310)
  const wire3 = "M 845 225 V 310";

  return (
    <div className="w-full">
      {/* ========================================================================= */}
      {/* DESKTOP COMFYUI-STYLE NODE CANVAS (>= 1024px) */}
      {/* ========================================================================= */}
      <div className="hidden lg:block relative w-full bg-[#080d18] rounded-3xl shadow-2xl overflow-hidden p-3">
        
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 blur-[110px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-amber-500/10 blur-[110px] pointer-events-none" />

        {/* Subtle dot matrix grid matching ComfyUI canvas */}
        <div 
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}
        />

        <svg 
          viewBox={`0 0 ${vbWidth} ${vbHeight}`} 
          className="w-full h-auto block select-none"
        >
          <defs>
            {/* Soft Pipe Glow */}
            <filter id="comfyPipeGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Neon Blue to Indigo Gradient */}
            <linearGradient id="comfyBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>

            {/* Neon Amber Gradient */}
            <linearGradient id="comfyAmber" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>

          {/* =================================================================== */}
          {/* PIPES & WIRES LAYER */}
          {/* =================================================================== */}
          
          {/* Loop Pipe: Node 1 -> Node 2 */}
          <g>
            <path d={pipeLoop} fill="none" stroke="#121d33" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
            <path d={pipeLoop} fill="none" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
            <path d={pipeLoop} fill="none" stroke="url(#comfyBlue)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" filter="url(#comfyPipeGlow)" />
            <path d={pipeLoop} fill="none" stroke="#7dd3fc" strokeWidth="3.5" strokeDasharray="14 100" strokeLinecap="round" className="animate-pulse" />
          </g>

          {/* Wire 1: Node 1 -> Preview 1 */}
          <g>
            <path d={wire1} fill="none" stroke="#18243c" strokeWidth="12" strokeLinecap="round" />
            <path d={wire1} fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* Pipe Top: Preview 1 -> Node 3 */}
          <g>
            <path d={pipeTop} fill="none" stroke="#121d33" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
            <path d={pipeTop} fill="none" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
            <path d={pipeTop} fill="none" stroke="url(#comfyBlue)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" filter="url(#comfyPipeGlow)" />
            <path d={pipeTop} fill="none" stroke="#7dd3fc" strokeWidth="3.5" strokeDasharray="14 100" strokeLinecap="round" className="animate-pulse" />
          </g>

          {/* Wire 2: Node 2 -> Preview 2 */}
          <g>
            <path d={wire2} fill="none" stroke="#18243c" strokeWidth="12" strokeLinecap="round" />
            <path d={wire2} fill="none" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* Pipe Bottom: Preview 2 -> Node 3 */}
          <g>
            <path d={pipeBottom} fill="none" stroke="#121d33" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
            <path d={pipeBottom} fill="none" stroke="rgba(245, 158, 11, 0.2)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
            <path d={pipeBottom} fill="none" stroke="url(#comfyAmber)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" filter="url(#comfyPipeGlow)" />
            <path d={pipeBottom} fill="none" stroke="#fcd34d" strokeWidth="3.5" strokeDasharray="14 100" strokeLinecap="round" className="animate-pulse" />
          </g>

          {/* Wire 3: Node 3 -> Preview 3 */}
          <g>
            <path d={wire3} fill="none" stroke="#18243c" strokeWidth="12" strokeLinecap="round" />
            <path d={wire3} fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* =================================================================== */}
          {/* NODES & COMFYUI PREVIEW CARDS */}
          {/* =================================================================== */}

          {/* 1. NODE: DCC INGESTION */}
          <foreignObject x="150" y="60" width="230" height="140" className="overflow-visible">
            <div className="relative w-full h-full p-5 rounded-2xl bg-[#121927] shadow-xl shadow-black/60 flex flex-col justify-center">
              {/* Badge Nuke */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-8 h-8 rounded-xl bg-[#1a2337] shadow-md flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              </div>
              {/* Badge Blender */}
              <div className="absolute -left-3.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-[#1a2337] shadow-md flex items-center justify-center">
                <Box className="w-4 h-4 text-sky-400" />
              </div>

              <span className="mono-text text-[10px] text-amber-400 font-bold uppercase tracking-wider block mb-1">
                Node / 01
              </span>
              <h4 className="font-title text-base font-bold text-white mb-1.5">
                DCC Ingestion
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Nuke & Blender integration with non-blocking linear OCIO plate execution.
              </p>
            </div>
          </foreignObject>

          {/* 1. COMFYUI FLOATING PREVIEW: NUKE / BLENDER PASS */}
          <foreignObject x="430" y="45" width="210" height="170" className="overflow-visible">
            <div className="w-full h-full rounded-2xl bg-[#101726] shadow-2xl shadow-black/70 flex flex-col overflow-hidden group">
              {/* ComfyUI Node Header */}
              <div className="px-3 py-1.5 bg-[#162035] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="mono-text text-[10px] font-bold text-slate-200">
                    Preview: {dccTab === 'nuke' ? 'Nuke Comp' : 'Blender 3D'}
                  </span>
                </div>
                {/* Switcher Tab */}
                <div className="flex items-center gap-1">
                  <button 
                    onClick={() => setDccTab('nuke')}
                    className={`px-1.5 py-0.5 rounded text-[9px] mono-text cursor-pointer ${
                      dccTab === 'nuke' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Nuke
                  </button>
                  <button 
                    onClick={() => setDccTab('blender')}
                    className={`px-1.5 py-0.5 rounded text-[9px] mono-text cursor-pointer ${
                      dccTab === 'blender' ? 'bg-sky-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    3D
                  </button>
                </div>
              </div>

              {/* Image Preview Body */}
              <div className="relative flex-1 bg-black overflow-hidden">
                <img 
                  src={dccTab === 'nuke' ? '/assets/vfx/nuke_ui.png' : '/assets/vfx/blender_ui.jpg'} 
                  alt="DCC Preview" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute bottom-1.5 right-1.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-xs text-[9px] mono-text text-slate-300">
                  {dccTab === 'nuke' ? 'Multi-Pass AOVs' : 'USD Viewport'}
                </div>
              </div>
            </div>
          </foreignObject>

          {/* 2. NODE: PIPELINE & AGENTS */}
          <foreignObject x="150" y="360" width="230" height="140" className="overflow-visible">
            <div className="relative w-full h-full p-5 rounded-2xl bg-[#121927] shadow-xl shadow-black/60 flex flex-col justify-center">
              {/* Badge Python */}
              <div className="absolute -top-3.5 left-8 w-8 h-8 rounded-xl bg-[#1a2337] shadow-md flex items-center justify-center">
                <Terminal className="w-4 h-4 text-purple-400" />
              </div>
              {/* Badge AYON */}
              <div className="absolute -bottom-3.5 left-8 w-8 h-8 rounded-xl bg-[#1a2337] shadow-md flex items-center justify-center">
                <Workflow className="w-4 h-4 text-sky-400" />
              </div>

              <span className="mono-text text-[10px] text-purple-400 font-bold uppercase tracking-wider block mb-1">
                Node / 02
              </span>
              <h4 className="font-title text-base font-bold text-white mb-1.5">
                Pipeline & Agents
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                AYON shot validation, editorial turnover sheets & Griptape agents via MCP.
              </p>
            </div>
          </foreignObject>

          {/* 2. COMFYUI FLOATING PREVIEW: AYON SHOT TREE */}
          <foreignObject x="430" y="350" width="210" height="160" className="overflow-visible">
            <div className="w-full h-full rounded-2xl bg-[#101726] shadow-2xl shadow-black/70 flex flex-col overflow-hidden group">
              {/* ComfyUI Node Header */}
              <div className="px-3 py-1.5 bg-[#162035] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                  <span className="mono-text text-[10px] font-bold text-slate-200">
                    Preview: AYON Shot Hub
                  </span>
                </div>
                <span className="mono-text text-[9px] text-sky-300 font-semibold">OpenPype</span>
              </div>

              {/* Image Preview Body */}
              <div className="relative flex-1 bg-black overflow-hidden">
                <img 
                  src="/assets/vfx/ayon.png" 
                  alt="AYON Shot Management Preview" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute bottom-1.5 right-1.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-xs text-[9px] mono-text text-slate-300">
                  Asset Manifest
                </div>
              </div>
            </div>
          </foreignObject>

          {/* 3. NODE: AWS DEADLINE & AI FARM */}
          <foreignObject x="700" y="70" width="290" height="155" className="overflow-visible">
            <div className="relative w-full h-full p-6 rounded-2xl bg-[#121927] shadow-xl shadow-black/60 flex flex-col justify-center">
              {/* Badge AWS */}
              <div className="absolute -top-3.5 left-8 w-8 h-8 rounded-xl bg-[#1a2337] shadow-md flex items-center justify-center">
                <Cloud className="w-4 h-4 text-cloud-light" />
              </div>
              {/* Badge ComfyUI */}
              <div className="absolute -top-3.5 right-8 w-8 h-8 rounded-xl bg-[#1a2337] shadow-md flex items-center justify-center">
                <Cpu className="w-4 h-4 text-amber-400" />
              </div>
              {/* Badge GPU */}
              <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 w-8 h-8 rounded-xl bg-[#1a2337] shadow-md flex items-center justify-center">
                <Server className="w-4 h-4 text-emerald-400" />
              </div>

              <span className="mono-text text-[10px] text-cloud-light font-bold uppercase tracking-wider block mb-1">
                Node / 03
              </span>
              <h4 className="font-title text-lg font-bold text-white mb-1.5">
                AWS Deadline & AI Farm
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Headless ComfyUI tensor graphs & auto-scaling spot GPU clusters with automated teardown.
              </p>
            </div>
          </foreignObject>

          {/* 3. COMFYUI FLOATING PREVIEW: HEADLESS TENSOR EXECUTION */}
          <foreignObject x="700" y="310" width="290" height="200" className="overflow-visible">
            <div className="w-full h-full rounded-2xl bg-[#101726] shadow-2xl shadow-black/70 flex flex-col overflow-hidden group">
              {/* ComfyUI Node Header */}
              <div className="px-3 py-1.5 bg-[#162035] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span className="mono-text text-[10px] font-bold text-slate-200">
                    Preview: ComfyUI Tensor Graph
                  </span>
                </div>
                <span className="mono-text text-[9px] text-amber-300 font-semibold">Headless API</span>
              </div>

              {/* Image Preview Body */}
              <div className="relative flex-1 bg-black overflow-hidden">
                <img 
                  src="/assets/vfx/comfyui_workflow.webp" 
                  alt="ComfyUI Node Graph Execution" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute bottom-1.5 right-1.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-xs text-[9px] mono-text text-slate-300">
                  GPU Tensor Dispatch
                </div>
              </div>
            </div>
          </foreignObject>

        </svg>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE / TABLET FLOW (< 1024px) */}
      {/* ========================================================================= */}
      <div className="lg:hidden flex flex-col gap-6">
        
        {/* Step 1 Card with ComfyUI-style Preview */}
        <div className="p-5 rounded-2xl bg-[#121927] shadow-xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <h4 className="font-title text-base font-bold text-white">DCC Ingestion</h4>
            </div>
            <span className="mono-text text-[10px] text-amber-400 font-bold uppercase">Node 01</span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed mb-4">
            Nuke & Blender integration with non-blocking linear OCIO plate execution.
          </p>

          {/* Floating Image Preview */}
          <div className="rounded-xl bg-[#0c1220] overflow-hidden shadow-lg">
            <div className="px-3 py-1 bg-[#162035] flex items-center justify-between text-[10px] mono-text text-slate-300">
              <span>Preview: Nuke Multi-Pass AOV</span>
              <span className="text-amber-400">EXR 32-bit</span>
            </div>
            <img src="/assets/vfx/nuke_ui.png" alt="Nuke UI" className="w-full h-36 object-cover" />
          </div>
        </div>

        {/* Step 2 Card with ComfyUI-style Preview */}
        <div className="p-5 rounded-2xl bg-[#121927] shadow-xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              <h4 className="font-title text-base font-bold text-white">Pipeline & Agents</h4>
            </div>
            <span className="mono-text text-[10px] text-purple-400 font-bold uppercase">Node 02</span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed mb-4">
            AYON shot validation, editorial turnover sheets & Griptape agents via MCP.
          </p>

          {/* Floating Image Preview */}
          <div className="rounded-xl bg-[#0c1220] overflow-hidden shadow-lg">
            <div className="px-3 py-1 bg-[#162035] flex items-center justify-between text-[10px] mono-text text-slate-300">
              <span>Preview: AYON Asset Hierarchy</span>
              <span className="text-sky-400">OpenPype</span>
            </div>
            <img src="/assets/vfx/ayon.png" alt="AYON UI" className="w-full h-36 object-cover" />
          </div>
        </div>

        {/* Step 3 Card with ComfyUI-style Preview */}
        <div className="p-5 rounded-2xl bg-[#121927] shadow-xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cloud-blue" />
              <h4 className="font-title text-base font-bold text-white">AWS Deadline & AI Farm</h4>
            </div>
            <span className="mono-text text-[10px] text-cloud-light font-bold uppercase">Node 03</span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed mb-4">
            Headless ComfyUI tensor graphs & auto-scaling spot GPU clusters (g6 / g4dn).
          </p>

          {/* Floating Image Preview */}
          <div className="rounded-xl bg-[#0c1220] overflow-hidden shadow-lg">
            <div className="px-3 py-1 bg-[#162035] flex items-center justify-between text-[10px] mono-text text-slate-300">
              <span>Preview: ComfyUI Tensor Graph</span>
              <span className="text-emerald-400">Headless API</span>
            </div>
            <img src="/assets/vfx/comfyui_workflow.webp" alt="ComfyUI Graph" className="w-full h-36 object-cover" />
          </div>
        </div>

      </div>

    </div>
  );
}
