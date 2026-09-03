import { useState } from 'react';
import VfxNodeFlow from './VfxNodeFlow';

export default function VfxAiPipelinePatterns() {
  const [selectedArch, setSelectedArch] = useState('griptape-comfy');

  return (
    <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
      
      <div className="max-w-3xl mb-16">
        <span className="mono-text text-xs uppercase tracking-widest text-amber-400 font-semibold block mb-2">
          Section 03 / Pipeline Integration
        </span>
        <h2 className="font-title text-3xl md:text-5xl font-bold text-white tracking-tight">
          AI Should Become Part of the Pipeline — Not Another Disconnected Application
        </h2>
        <p className="text-slate-400 text-base mt-4 leading-relaxed">
          Rather than jumping out of Nuke to upload plates to external web tools, AI inference runs as a deterministic node step in your pipeline.
        </p>
      </div>

      {/* Conceptual Pipeline Flow Graphic (Stylized Node Graph) */}
      <div className="mb-14">
        <div className="flex items-center justify-between mb-4">
        </div>

        <VfxNodeFlow />
      </div>

      {/* 3 Real Production Architectural Patterns */}
      <div className="space-y-4">
        <span className="mono-text text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
          Production Architecture Examples
        </span>

        {/* Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setSelectedArch('nuke-ai')}
            className={`px-4 py-2.5 rounded-xl text-xs mono-text font-semibold transition-all cursor-pointer shadow-md ${
              selectedArch === 'nuke-ai' 
                ? 'bg-amber-400 text-slate-950 font-bold' 
                : 'bg-[#101726] text-slate-400 hover:text-white hover:bg-[#151f33]'
            }`}
          >
            01 / Nuke Plate Turnaround
          </button>
          <button
            onClick={() => setSelectedArch('griptape-comfy')}
            className={`px-4 py-2.5 rounded-xl text-xs mono-text font-semibold transition-all cursor-pointer shadow-md ${
              selectedArch === 'griptape-comfy' 
                ? 'bg-amber-400 text-slate-950 font-bold' 
                : 'bg-[#101726] text-slate-400 hover:text-white hover:bg-[#151f33]'
            }`}
          >
            02 / Griptape & Comfy Batch
          </button>
          <button
            onClick={() => setSelectedArch('agent-task')}
            className={`px-4 py-2.5 rounded-xl text-xs mono-text font-semibold transition-all cursor-pointer shadow-md ${
              selectedArch === 'agent-task' 
                ? 'bg-amber-400 text-slate-950 font-bold' 
                : 'bg-[#101726] text-slate-400 hover:text-white hover:bg-[#151f33]'
            }`}
          >
            03 / Controlled AI Pipeline Agent
          </button>
        </div>

        {/* Active Pattern Card */}
        <div className="p-8 md:p-10 rounded-3xl bg-[#0c1220] shadow-2xl">
          
          {/* Pattern 01: Nuke Plate Turnaround */}
          {selectedArch === 'nuke-ai' && (
            <div className="space-y-6">
              <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
                <div className="lg:max-w-xl">
                  <div className="flex items-center gap-2 text-xs mono-text text-amber-400 mb-2">
                    <span>PATTERN:</span>
                    <span className="font-bold">Nuke → Custom Gizmo → GPU Queue → Multi-Layer EXR → Nuke</span>
                  </div>
                  <h4 className="font-title text-2xl font-bold text-white mb-3">
                    Interactive In-DCC Inference for Compositors
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    The artist triggers an AI plate turnaround (such as neural rotoscoping, clean-plating, or semantic feature segmentation) directly inside the Nuke node graph. The custom Python gizmo serializes the current frame and bounding box, submits a payload to the studio GPU queue, and automatically appends the resulting multi-channel EXR back into the compositor's node tree.
                  </p>
                  <div className="flex flex-wrap gap-4 text-xs mono-text text-slate-400 pt-2 border-t border-white/[0.04]">
                    <span>• Color managed: OCIO compliant</span>
                    <span>• Format: Linear Half-Float EXR</span>
                    <span>• Execution: Non-blocking background process</span>
                  </div>
                </div>

                <div className="lg:w-96 w-full rounded-2xl overflow-hidden bg-black shadow-xl">
                  <img src="/assets/vfx/nuke_ui.png" alt="Nuke Node Graph Composite Script" className="w-full h-56 object-cover" />
                </div>
              </div>
            </div>
          )}

          {/* Pattern 02: Griptape & ComfyUI + Deadline Cloud Batch */}
          {selectedArch === 'griptape-comfy' && (
            <div className="space-y-6">
              <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
                <div className="lg:max-w-xl">
                  <h4 className="font-title text-2xl font-bold text-white mb-3">
                    Headless Orchestration Layer with Griptape & Deadline Cloud
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    ComfyUI provides a modular execution layer for AI image and video workflows, while Griptape provides the orchestration layer for connecting AI models, production tools, and pipeline services. Shots submitted from the DCC are translated into headless execution batches, dispatched directly to <strong>AWS Deadline Cloud</strong> fleets with live step telemetry, wedge testing, and automatic retries.
                  </p>
                  <div className="flex flex-wrap gap-4 text-xs mono-text text-slate-400 pt-2 border-t border-white/[0.04]">
                    <span>• Execution: Headless API & Griptape Nodes</span>
                    <span>• Telemetry: AWS Deadline Cloud Job Monitor</span>
                    <span>• Scalability: Auto-scaling EC2 GPU Spot Fleet</span>
                  </div>
                </div>

                <div className="lg:w-96 w-full rounded-2xl overflow-hidden bg-black shadow-xl">
                  <img src="/assets/vfx/deadline_griptape.png" alt="Griptape Nodes on AWS Deadline Cloud Monitor" className="w-full h-56 object-cover" />
                </div>
              </div>
            </div>
          )}

          {/* Pattern 03: Autonomous Pipeline Agent */}
          {selectedArch === 'agent-task' && (
            <div className="space-y-6">
              <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
                <div className="lg:max-w-xl">
                  <div className="flex items-center gap-2 text-xs mono-text text-amber-400 mb-2">
                    <span>PATTERN:</span>
                    <span className="font-bold">Editorial Sheet → MCP Agent → AYON / ShotGrid → Automated Ingestion</span>
                  </div>
                  <h4 className="font-title text-2xl font-bold text-white mb-3">
                    Autonomous Asset Tracking & Ingestion Agents
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    AI agents connected through Model Context Protocol (MCP) inspect incoming camera data, verify resolution and naming conformance against the editorial turnover sheet, auto-populate the AYON project shot hierarchy, and trigger required proxy publishes without human intervention.
                  </p>
                  <div className="flex flex-wrap gap-4 text-xs mono-text text-slate-400 pt-2 border-t border-white/[0.04]">
                    <span>• Standards: Model Context Protocol (MCP)</span>
                    <span>• Integration: AYON / OpenPype / ShotGrid</span>
                    <span>• Verification: Automated sanity checks</span>
                  </div>
                </div>

                <div className="lg:w-96 w-full rounded-2xl overflow-hidden bg-black shadow-xl">
                  <img src="/assets/vfx/ayon.png" alt="AYON Studio Asset Hierarchy" className="w-full h-56 object-cover" />
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

    </section>
  );
}
