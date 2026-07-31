import { useState } from 'react';

export default function Contact() {
  const [activePanel, setActivePanel] = useState(0);

  return (
<section id="contact" className="py-24 px-4 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <span className="mono-text text-xs uppercase tracking-widest text-cloud-blue font-semibold">Direct Communication</span>
                <h2 className="font-title text-3xl md:text-5xl font-bold text-white mt-2 mb-4 tracking-tight">
                    Contact Channels
                </h2>
                <p className="text-slate-400 text-sm max-w-xl mx-auto flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-cloud-blue rounded-full animate-ping"></span>
                    <span>Click any channel below to expand details and direct action links.</span>
                </p>
            </div>

            {/* Accordion Wrapper */}
            <div className="accordion-wrapper bg-slate-950 p-2 lg:p-3 rounded-3xl border border-slate-800 shadow-2xl">
                
                {/* Panel 1: Contact Form (Default Expanded) */}
                <div className={`accordion-panel ${activePanel === 0 ? "active" : ""} bg-slate-900 text-white border border-slate-800 cursor-pointer`} onClick={() => setActivePanel(0)}>
                    {/* Collapsed Content (Desktop) */}
                    <div className="collapsed-content hidden lg:flex flex-col items-center justify-between h-full absolute inset-0 py-8 px-2 pointer-events-none">
                        <span className="font-title font-black text-2xl text-amber-400">01</span>
                        <span className="mono-text text-xs tracking-widest uppercase text-slate-300 font-bold [writing-mode:vertical-lr] rotate-180">
                            FORM INQUIRY
                        </span>
                        <div className="flex flex-col items-center gap-1">
                            <span className="mono-text text-[9px] uppercase tracking-wider text-amber-300 font-semibold bg-slate-800/80 px-1.5 py-0.5 rounded border border-amber-400/30">OPEN</span>
                            <svg className="w-5 h-5 text-cloud-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        </div>
                    </div>

                    {/* Expanded Content */}
                    <div className="expanded-content w-full h-full flex flex-col justify-between p-6 md:p-8 relative">
                        <span className="font-title text-8xl font-black absolute top-2 right-6 text-slate-800/40 pointer-events-none select-none">01</span>
                        
                        <div className="relative z-10">
                            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                                <div>
                                    <span className="mono-text text-xs text-amber-400 font-semibold uppercase">Channel 01</span>
                                    <h3 className="font-title text-2xl font-bold text-white mt-0.5">Send a Direct Message</h3>
                                </div>
                            </div>

                            <form action="https://formspree.io/f/mqakvjbe" method="POST" id="contact-form" className="space-y-3">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div>
                                        <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1 mono-text">Your Name</label>
                                        <input type="text" id="name" name="name" required placeholder="Sergio Cespedes" className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 text-white rounded-xl focus:outline-none focus:border-cloud-blue text-xs" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1 mono-text">Your Email</label>
                                        <input type="email" id="email" name="_replyto" required placeholder="name@example.com" className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 text-white rounded-xl focus:outline-none focus:border-cloud-blue text-xs" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-1 mono-text">Subject</label>
                                    <input type="text" id="subject" name="subject" placeholder="Project Inquiry / Research Collaboration" className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 text-white rounded-xl focus:outline-none focus:border-cloud-blue text-xs" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1 mono-text">Message</label>
                                    <textarea id="message" name="message" rows="3" required placeholder="Tell me more about your technical requirements..." className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 text-white rounded-xl focus:outline-none focus:border-cloud-blue text-xs resize-none"></textarea>
                                </div>
                                <input type="hidden" name="_subject" value="New inquiry from Portfolio" />
                                <button type="submit" className="w-full py-3.5 bg-cloud-blue hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                    Send Message Now
                                </button>
                            </form>
                            <div id="form-status" className="hidden mt-3 p-3 rounded-xl text-xs font-medium text-center"></div>
                        </div>
                    </div>
                </div>

                {/* Panel 2: Phone */}
                <div className={`accordion-panel ${activePanel === 1 ? "active" : ""} bg-blue-600 text-white border border-blue-500 cursor-pointer`} onClick={() => setActivePanel(1)}>
                    {/* Collapsed Content (Desktop) */}
                    <div className="collapsed-content hidden lg:flex flex-col items-center justify-between h-full absolute inset-0 py-8 px-2 pointer-events-none">
                        <span className="font-title font-black text-2xl text-white">02</span>
                        <span className="mono-text text-xs tracking-widest uppercase text-blue-100 font-bold [writing-mode:vertical-lr] rotate-180">
                            PHONE CALL
                        </span>
                        <div className="flex flex-col items-center gap-1">
                            <span className="mono-text text-[9px] uppercase tracking-wider text-blue-900 font-semibold bg-white/90 px-1.5 py-0.5 rounded">OPEN</span>
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        </div>
                    </div>

                    {/* Expanded Content */}
                    <div className="expanded-content w-full h-full flex flex-col justify-between p-6 md:p-8 relative">
                        <span className="font-title text-8xl font-black absolute top-2 right-6 text-blue-400/40 pointer-events-none select-none">02</span>
                        
                        <div className="relative z-10">
                            <span className="mono-text text-xs text-blue-200 font-semibold uppercase">Channel 02</span>
                            <h3 className="font-title text-3xl font-bold text-white mt-1 mb-4">Direct Voice Line</h3>
                            <p className="text-blue-100 text-sm leading-relaxed mb-8 max-w-sm">
                                Available for direct calls regarding urgent project inquiries, technical consulting, and architecture discussion.
                            </p>
                            <div className="p-4 bg-blue-700/60 rounded-2xl border border-blue-400/40 max-w-sm">
                                <span className="mono-text text-xs text-blue-200 block mb-1">Phone Number</span>
                                <span className="font-title text-2xl font-black text-white tracking-wider">+591 60760338</span>
                            </div>
                        </div>

                        <div className="relative z-10 pt-6">
                            <a href="tel:+59160760338" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-blue-50 text-blue-900 font-bold rounded-xl transition-all shadow-lg text-xs uppercase tracking-wider">
                                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                <span>Call +591 60760338</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Panel 3: LinkedIn */}
                <div className={`accordion-panel ${activePanel === 2 ? "active" : ""} bg-sky-500 text-white border border-sky-400 cursor-pointer`} onClick={() => setActivePanel(2)}>
                    {/* Collapsed Content (Desktop) */}
                    <div className="collapsed-content hidden lg:flex flex-col items-center justify-between h-full absolute inset-0 py-8 px-2 pointer-events-none">
                        <span className="font-title font-black text-2xl text-white">03</span>
                        <span className="mono-text text-xs tracking-widest uppercase text-sky-100 font-bold [writing-mode:vertical-lr] rotate-180">
                            LINKEDIN
                        </span>
                        <div className="flex flex-col items-center gap-1">
                            <span className="mono-text text-[9px] uppercase tracking-wider text-sky-950 font-semibold bg-white/90 px-1.5 py-0.5 rounded">OPEN</span>
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </div>
                    </div>

                    {/* Expanded Content */}
                    <div className="expanded-content w-full h-full flex flex-col justify-between p-6 md:p-8 relative">
                        <span className="font-title text-8xl font-black absolute top-2 right-6 text-sky-300/40 pointer-events-none select-none">03</span>
                        
                        <div className="relative z-10">
                            <span className="mono-text text-xs text-sky-100 font-semibold uppercase">Channel 03</span>
                            <h3 className="font-title text-3xl font-bold text-white mt-1 mb-4">LinkedIn Profile</h3>
                            <p className="text-sky-100 text-sm leading-relaxed mb-8 max-w-sm">
                                Connect professionally to view full network recommendations, technical posts, and credentials.
                            </p>
                            <div className="p-4 bg-sky-600/60 rounded-2xl border border-sky-300/40 max-w-sm">
                                <span className="mono-text text-xs text-sky-100 block mb-1">LinkedIn Profile</span>
                                <span className="font-title text-xl font-bold text-white">in/sergio-cespedes</span>
                            </div>
                        </div>

                        <div className="relative z-10 pt-6">
                            <a href="https://www.linkedin.com/in/sergio-cespedes/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-950 text-white font-bold rounded-xl transition-all shadow-lg text-xs uppercase tracking-wider">
                                <svg className="w-4 h-4 text-sky-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                <span>Open LinkedIn Profile</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Panel 4: WhatsApp */}
                <div className={`accordion-panel ${activePanel === 3 ? "active" : ""} bg-emerald-600 text-white border border-emerald-500 cursor-pointer`} onClick={() => setActivePanel(3)}>
                    {/* Collapsed Content (Desktop) */}
                    <div className="collapsed-content hidden lg:flex flex-col items-center justify-between h-full absolute inset-0 py-8 px-2 pointer-events-none">
                        <span className="font-title font-black text-2xl text-white">04</span>
                        <span className="mono-text text-xs tracking-widest uppercase text-emerald-100 font-bold [writing-mode:vertical-lr] rotate-180">
                            WHATSAPP
                        </span>
                        <div className="flex flex-col items-center gap-1">
                            <span className="mono-text text-[9px] uppercase tracking-wider text-emerald-950 font-semibold bg-white/90 px-1.5 py-0.5 rounded">OPEN</span>
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.149 4.194 4.192-1.099z"/></svg>
                        </div>
                    </div>

                    {/* Expanded Content */}
                    <div className="expanded-content w-full h-full flex flex-col justify-between p-6 md:p-8 relative">
                        <span className="font-title text-8xl font-black absolute top-2 right-6 text-emerald-400/40 pointer-events-none select-none">04</span>
                        
                        <div className="relative z-10">
                            <span className="mono-text text-xs text-emerald-100 font-semibold uppercase">Channel 04</span>
                            <h3 className="font-title text-3xl font-bold text-white mt-1 mb-4">WhatsApp Direct Chat</h3>
                            <p className="text-emerald-100 text-sm leading-relaxed mb-8 max-w-sm">
                                Fast track communication line for immediate technical chat and quick messages.
                            </p>
                            <div className="p-4 bg-emerald-700/60 rounded-2xl border border-emerald-400/40 max-w-sm">
                                <span className="mono-text text-xs text-emerald-200 block mb-1">Direct Chat Number</span>
                                <span className="font-title text-2xl font-bold text-white tracking-wider">+591 60760338</span>
                            </div>
                        </div>

                        <div className="relative z-10 pt-6">
                            <a href="https://wa.me/59160760338" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-950 text-white font-bold rounded-xl transition-all shadow-lg text-xs uppercase tracking-wider">
                                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.149 4.194 4.192-1.099z"/></svg>
                                <span>Start WhatsApp Chat</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Panel 5: Email */}
                <div className={`accordion-panel ${activePanel === 4 ? "active" : ""} bg-amber-400 text-slate-950 border border-amber-300 cursor-pointer`} onClick={() => setActivePanel(4)}>
                    {/* Collapsed Content (Desktop) */}
                    <div className="collapsed-content hidden lg:flex flex-col items-center justify-between h-full absolute inset-0 py-8 px-2 pointer-events-none">
                        <span className="font-title font-black text-2xl text-slate-950">05</span>
                        <span className="mono-text text-xs tracking-widest uppercase text-slate-900 font-bold [writing-mode:vertical-lr] rotate-180">
                            EMAIL ADDRESS
                        </span>
                        <div className="flex flex-col items-center gap-1">
                            <span className="mono-text text-[9px] uppercase tracking-wider text-amber-950 font-semibold bg-slate-950 text-amber-400 px-1.5 py-0.5 rounded">OPEN</span>
                            <svg className="w-5 h-5 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        </div>
                    </div>

                    {/* Expanded Content */}
                    <div className="expanded-content w-full h-full flex flex-col justify-between p-6 md:p-8 relative">
                        <span className="font-title text-8xl font-black absolute top-2 right-6 text-amber-600/30 pointer-events-none select-none">05</span>
                        
                        <div className="relative z-10">
                            <span className="mono-text text-xs text-amber-900 font-semibold uppercase">Channel 05</span>
                            <h3 className="font-title text-3xl font-bold text-slate-950 mt-1 mb-4">Direct Email Address</h3>
                            <p className="text-slate-900 text-sm leading-relaxed mb-8 max-w-sm">
                                Official inbox for formal project briefs, documentation, and architecture proposals.
                            </p>
                            <div className="p-4 bg-amber-300/90 rounded-2xl border border-amber-500/40 max-w-sm flex items-center justify-between min-w-0">
                                <div className="min-w-0 flex-1 pr-2">
                                    <span className="mono-text text-xs text-amber-900 block mb-0.5">Email Inbox</span>
                                    <span className="font-title text-lg font-bold text-slate-950 truncate block" title="serces19@gmail.com">serces19@gmail.com</span>
                                </div>
                                <button className="copy-btn px-3 py-2 bg-slate-950 hover:bg-slate-900 text-amber-400 rounded-lg flex-shrink-0 transition-colors text-xs font-semibold flex items-center gap-1" onClick={() => navigator.clipboard.writeText('serces19@gmail.com')} title="Copy Email">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                    <span>Copy</span>
                                </button>
                            </div>
                        </div>

                        <div className="relative z-10 pt-6">
                            <a href="mailto:serces19@gmail.com" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-950 hover:bg-slate-900 text-amber-400 font-bold rounded-xl transition-all shadow-lg text-xs uppercase tracking-wider">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                <span>Send Email to serces19@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
}
