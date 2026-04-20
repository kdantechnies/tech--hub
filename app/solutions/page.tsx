import { Button } from "../../components/ui/Button"; 
import { SERVICES } from "../../data/content";      
import { ArrowRight, ShieldAlert, CheckCircle2, Cpu, Globe, Zap, Layers, Code2 } from "lucide-react";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. PREMIUM HEADER: Minimalist & Bold */}
      <header className="relative pt-40 pb-20 md:pt-56 md:pb-32 px-6 overflow-hidden">
        {/* Subtle Background Glows (Professional Soft Design) */}
        <div className="absolute top-0 -left-20 w-96 h-96 bg-orange-50/50 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-100 bg-orange-50 text-[#FF6B00] text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            <Zap size={14} fill="#FF6B00" /> Enterprise Intelligence
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#0A0A0A] tracking-tighter leading-[0.95] mb-10">
            Digital Infrastructure <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-orange-400">for Global Growth.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#525252] max-w-2xl leading-relaxed font-medium">
            We architect and deploy intelligent systems that give companies a competitive edge.
          </p>
        </div>
      </header>

      {/* 2. SERVICES SECTION: Layered & Soft */}
      <section className="pb-32 px-6 max-w-7xl mx-auto space-y-32 md:space-y-48">
        {SERVICES.map((service, index) => (
          <div 
            key={service.slug} 
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 md:gap-24 items-center`}
          >
            {/* TEXT CONTENT */}
            <div className="w-full lg:flex-1">
              <div className="flex items-center gap-5 mb-10">
                <div className="w-16 h-16 bg-[#0A0A0A] rounded-2xl flex items-center justify-center text-[#FF6B00] shadow-xl">
                  {/* Icon logic: Fallback to Cpu if icon not found */}
                  <div className="text-3xl">{service.icon || <Cpu />}</div>
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0A0A0A]">{service.title}</h2>
              </div>

              <div className="space-y-6 mb-12">
                {/* CHALLENGE BOX (Soft Red) */}
                <div className="p-8 bg-[#FFF9F9] rounded-[2rem] border border-red-50/50 group transition-all">
                  <h4 className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <ShieldAlert size={16}/> The Business Challenge
                  </h4>
                  <p className="text-[#525252] text-base leading-relaxed">{service.problem}</p>
                </div>

                {/* SOLUTION BOX (High Contrast White) */}
                <div className="p-8 bg-white rounded-[2rem] border border-gray-100 shadow-premium group transition-all">
                  <h4 className="text-[10px] font-black text-green-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <CheckCircle2 size={16}/> Jengatech in Action
                  </h4>
                  <p className="text-[#525252] text-base leading-relaxed">{service.solution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button href="/consultation" variant="secondary" className="px-10">
                  Speak With a Strategy Expert
                </Button>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#525252] px-6">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> 
                  Systems Going Live
                </div>
              </div>
            </div>

            {/* VISUAL COMPONENT: Modern Glass Logic */}
            <div className="w-full lg:flex-1 relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-[#FF6B00]/5 rounded-[4rem] blur-3xl" />
              
              <div className="relative aspect-square bg-white border border-gray-50 rounded-[4rem] shadow-premium flex items-center justify-center overflow-hidden">
                {/* Subtle Grid overlay */}
                <div className="absolute inset-0 bg-grid opacity-5" />
                
                {/* Floating Tech Stack Visual */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                   {/* Central Animated Piece */}
                   <div className="w-40 h-40 bg-white rounded-[2.5rem] shadow-2xl flex items-center justify-center animate-bounce-slow border border-gray-50">
                      <Layers size={64} className="text-[#FF6B00]" strokeWidth={1} />
                   </div>
                   
                   {/* Satellite Icons (Floating around) */}
                   <div className="absolute top-20 right-20 p-4 bg-white rounded-2xl shadow-lg border border-gray-50 animate-pulse">
                      <Code2 size={24} className="text-[#0A0A0A]" />
                   </div>
                   <div className="absolute bottom-20 left-20 p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                      <Globe size={24} className="text-[#525252]" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 3. CASE STUDY CTA: High-End Footer Card */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto bg-[#0A0A0A] rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">Ready to modernise?</h2>
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Trusted by 50+ Nigerian companies scaling with our intelligent digital systems.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button href="/contact" className="bg-[#FF6B00] border-none px-12">Let’s Get Started</Button>
              <Button href="/consultation" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black">Speak With Our Team</Button>
            </div>
          </div>
          {/* Decorative gradients */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#FF6B00]/20 blur-[120px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full" />
        </div>
      </section>
    </main>
  );
}