"use client";
import { useState } from "react";
import { Button } from "../../components/ui/Button";
import { 
  Globe, 
  Users, 
  Target, 
  ShieldCheck, 
  ArrowRight, 
  Zap, 
  Award, 
  BarChart3, 
  Play 
} from "lucide-react";
import Link from "next/link";

// --- Permanent Social Icon Fix (Raw SVGs) ---
const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><path d="M2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
);

const TwitterIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-1 2.1-3 2.8c1.4.3 2.2 1.1 3 3 .5 1.5 0 3.3-1.5 4.3C20.1 18.6 14.6 22 9 22c-5 0-7-3-7-3 2 0 4-1 5-3-2.1-.4-4.5-1.5-4.5-5 0-1 .4-1.8 1.1-2.5-.3-.4-1.1-2.1-.1-4.1 0 0 2 0 4 3 1.1-.3 2.5-.3 4 0 2-3 4-3 4-3 1 2 .2 3.7-.1 4.1.7.7 1.1 1.5 1.1 2.5z"/></svg>
);

export default function AboutPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <main className="bg-white selection:bg-[#FF6B00] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-44 pb-24 md:pt-60 md:pb-40 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.03] z-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-100 bg-orange-50 text-[#FF6B00] text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              <Zap size={12} fill="#FF6B00" /> Shaping the Next Ten Years of Technology
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-[#0A0A0A] tracking-tighter leading-[0.9] mb-10">
              Pioneering the <br /> 
              <span className="text-[#FF6B00] italic text-6xl md:text-7xl">Digital Frontier.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#525252] leading-relaxed font-medium max-w-3xl">
              Founded on the principle of purposeful innovation, we don't just build machines; we design 
              ecosystems that empower humans to achieve more. From automated warehouses to 
              surgical robotics, our footprint is global and our impact is transformative.
            </p>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="py-24 border-y border-gray-50 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24">
            {[
              { label: "Elite Engineers Trained", val: "215+", icon: <Users size={20}/> },
              { label: "Enterprise Solutions", val: "220+", icon: <Zap size={20}/> },
              { label: "Global Partners", val: "25+", icon: <Globe size={20}/> },
              { label: "Success Rate", val: "94%", icon: <BarChart3 size={20}/> },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <div className="text-[#FF6B00] mb-4">{stat.icon}</div>
                <span className="text-4xl md:text-6xl font-black tracking-tighter text-[#0A0A0A] mb-2">{stat.val}</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#525252]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="sticky top-32">
              <span className="text-[#FF6B00] font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Our Purpose</span>
              <h2 className="text-4xl md:text-6xl font-black text-[#0A0A0A] tracking-tight mb-8">Creating the foundations for how the <span className="italic">new economy works.</span></h2>
              <p className="text-lg text-[#525252] leading-relaxed mb-8">
                “Jenga” means to build. We create the systems and develop the talent that move African tech from participation to leadership.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                   <div className="w-10 h-10 bg-[#FF6B00] rounded-lg flex items-center justify-center text-white"><Target size={20}/></div>
                   <p className="font-bold text-sm">Empowering 1 million developers by 2030.</p>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              {/* --- PROFESSIONAL INTERACTIVE VIDEO SECTION --- */}
              <div 
                className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl bg-[#0A0A0A] relative group cursor-pointer border border-gray-100"
                onClick={() => setIsVideoPlaying(true)}
              >
                {isVideoPlaying ? (
                 <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/8qhYgGsc0pM?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />


                ) : (
                  <>
                    {/* Thumbnail Image */}
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                      alt="Jengatech Strategy" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    
                    {/* Professional Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-all group-hover:bg-black/10">
                      <div className="w-20 h-20 bg-[#FF6B00] rounded-full flex items-center justify-center text-white shadow-2xl shadow-orange-500/50 group-hover:scale-110 transition-transform duration-500">
                        <Play fill="currentColor" size={32} className="ml-1" />
                      </div>
                    </div>

                    {/* Subtle Overlay Finish */}
                    <div className="absolute inset-0 z-10 bg-black/5 pointer-events-none"></div>
                  </>
                )}
              </div>

              <div className="p-12 bg-[#0A0A0A] rounded-[3rem] text-white relative overflow-hidden shadow-2xl shadow-orange-900/20">
                <h3 className="text-3xl font-bold mb-6 relative z-10 text-white">What Drives Us</h3>
                <p className="text-gray-400 leading-relaxed relative z-10">
                 We’re building the engine that powers Africa’s digital transformation, starting 
                 with Nigerian enterprises and the systems they rely on every day.
                </p>
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF6B00]/20 blur-[80px] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE PHILOSOPHY */}
      <section className="py-32 px-6 bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-[#0A0A0A] tracking-tight uppercase">How we get things done</h2>
            <div className="h-2 w-15 bg-[#FF6B00] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                  title: "Built to Global Standards", 
                  desc: "We engineer every system with the discipline of world class tech teams, clean, scalable, and built to last." 
                },
                { 
                  title: "Nothing Hidden", 
                  desc: "We build with full transparency and strong data ethics, no black boxes, no shortcuts." 
                },
                { 
                  title: "Solving What Matters", 
                  desc: "We focus only on real problems that move African businesses and systems forward." 
                }
            ].map((item, i) => (
              <div key={i} className="group p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:border-[#FF6B00]/30 transition-all duration-500 hover:shadow-premium">
                <span className="text-[10px] font-black text-[#FF6B00] mb-6 block uppercase tracking-[0.2em]">Rule 0{i+1}</span>
                <h3 className="text-2xl font-bold text-[#0A0A0A] mb-4 group-hover:text-[#FF6B00] transition-colors">{item.title}</h3>
                <p className="text-[#525252] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE BUILDERS (Leadership) */}
      <section className="py-32 px-6 border-t border-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-[#FF6B00] font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Leadership</span>
              <h2 className="text-4xl md:text-7xl font-black text-[#0A0A0A] tracking-tighter">
                The team <br />behind  <span className="text-[#FF6B00] italic">Jengatech.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-24">
            <TeamCard name="Roland Onyekwere" role="Founder & Chief Visionary Officer" image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" />
            <TeamCard name="Marvelous Uzowuchi" role="COO & Corporate Strategy Lead" image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800" />
            <TeamCard name="Ngozi Nwobodo" role="CCO & Global Head Of Visual Intelligence" image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" />
            <TeamCard name="Wisdom Njimogu" role="V.P Engineering & Infrastructure" image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800" />
            <TeamCard name="Precious Onyekwere" role="Dean of Talent Transformation" image="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800" />
          </div>
        </div>
      </section>

      {/* 6. FINAL ACTION */}
      <section className="py-44 px-6 text-center bg-[#F9FAFB] border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black text-[#0A0A0A] tracking-tighter mb-12">
            Ready to build <br /> the <span className="text-[#FF6B00]">future?</span>
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-10">
            <Button href="/contact">Partner with us</Button>
            <Link href="/education" className="flex items-center gap-2 font-black uppercase text-[10px] tracking-widest hover:text-[#FF6B00] transition-colors group">
              Explore Academy <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform"/>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

function TeamCard({ name, role, image }: { name: string, role: string, image: string }) {
  return (
    <div className="group flex flex-col">
      <div className="aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 bg-gray-100 relative shadow-premium transition-all duration-700 group-hover:shadow-2xl">
        <img src={image} alt={name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
           <div className="flex gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0A0A0A] hover:bg-[#FF6B00] hover:text-white transition-all cursor-pointer"><LinkedinIcon /></div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0A0A0A] hover:bg-[#FF6B00] hover:text-white transition-all cursor-pointer"><TwitterIcon /></div>
           </div>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-[#0A0A0A] mb-1 group-hover:text-[#FF6B00] transition-colors">{name}</h3>
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#525252]">{role}</p>
    </div>
  );
}