import Link from "next/link";
import Image from "next/image";
import { Button } from "../components/ui/Button"; 
import { 
  ArrowRight, 
  ArrowUpRight,
  CheckCircle2, 
  Cpu, 
  Zap, 
  BookOpen,
  Sparkles,
  Star
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. FUTURISTIC HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden">
        {/* Subtle Background Glows to match the Web3 feel */}
        <div className="absolute top-20 right-[10%] w-96 h-96 bg-orange-100/50 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-20 left-[10%] w-72 h-72 bg-blue-50/40 rounded-full blur-[100px] -z-10" />

        <div className="max-width-container relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-black tracking-tighter leading-[0.8] mb-16 text-[#0A0A0A]">
            Empowering the  <br />
            <span className="text-[#FF6B00]">Future.</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12 mt-10">
            {/* Left Stats */}
            <div className="flex flex-col items-center lg:items-start gap-8">
              <div className="text-left group cursor-default">
                <p className="text-4xl font-black text-[#0A0A0A]">25+</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-[#FF6B00] transition-colors">Industry Partners</p>
              </div>
              <div className="text-left group cursor-default">
                <p className="text-4xl font-black text-[#0A0A0A]">94%</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-[#FF6B00] transition-colors">Success Ratio</p>
              </div>
            </div>

            {/* Center Visual (The 3D Element) */}
            <div className="relative flex justify-center py-10 lg:py-0">
               <div className="w-64 h-64 md:w-96 md:h-96 relative animate-bounce-slow">
                  {/* Replace with your high-end 3D visual or Logo mark */}
                  <Image 
                    src="/Logo.png" 
                    alt="Jengatech Core" 
                    fill 
                    className="object-contain drop-shadow-2xl"
                  />
               </div>
            </div>

            {/* Right CTA */}
            <div className="flex flex-col items-center lg:items-end gap-6">
              <p className="text-sm text-[#525252] max-w-[200px] lg:text-right leading-relaxed font-medium">
                JengaTech is a polymorphic ecosystem where rarefield technical mastery converges with enterprise-grade engineering to architect scalable futures in the evolving global economy.
              </p>
              <Button href="/solutions" className="bg-[#0A0A0A] hover:bg-[#FF6B00] px-4 py-4 rounded-full text-xs shadow-2xl transition-all scale-110">
                Our Services
              </Button>
              <Button href="/our-app" className="bg-[#0A0A0A] hover:bg-[#FF6B00] px-4 py-4 rounded-full text-xs shadow-2xl transition-all scale-110">
                Our Apps
              </Button>
              <Button href="/education" className="bg-[#0A0A0A] hover:bg-[#FF6B00] px-4 py-4 rounded-full text-xs shadow-2xl transition-all scale-110">
                Join Training Institute
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE FLOATING TICKER (Marquee) */}
      <div className="w-full bg-[#0A0A0A] py-6 overflow-hidden rotate-[-1deg] shadow-2xl relative z-20">
        <div className="animate-jengascroll flex items-center gap-12 whitespace-nowrap">
           {[1, 2, 3, 4].map((i) => (
             <div key={i} className="flex items-center gap-12 text-white font-black text-xs md:text-sm uppercase tracking-[0.3em]">
                <span>Software Design</span> <Sparkles className="text-[#FF6B00]" size={16} />
                <span>AI AUTOMATION SYSTEM</span> <Sparkles className="text-[#FF6B00]" size={16} />
                <span>Cloud Computing</span> <Sparkles className="text-[#FF6B00]" size={16} />
                <span>Cyber Security</span> <Sparkles className="text-[#FF6B00]" size={16} />
                <span>Robotics</span> <Sparkles className="text-[#FF6B00]" size={16} />
                <span>Software Development</span> <Sparkles className="text-[#FF6B00]" size={16} />
             </div>
           ))}
        </div>
      </div>

     {/* 3. THE JENGATECH ECOSYSTEM SECTION */}
      <section className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="max-width-container">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#FF6B00] text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              Our Core Pillars
            </div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tight text-[#0A0A0A] mb-6 leading-tight">
              How do you want to <br />
              <span className="text-[#FF6B00] italic">build with us?</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
            
            {/* --- PATHWAY 1: EDUCATION (Light Standard) --- */}
            <div className="group relative min-h-[600px] flex flex-col justify-end p-10 md:p-16 rounded-[4rem] overflow-hidden border border-gray-100 transition-all duration-700 hover:shadow-2xl">
              
              {/* IMAGE LAYER */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src="/images/academy.webp" 
                  alt="Tech Academy"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Professional White-to-Transparent Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/20 z-10" />
              </div>

              <div className="relative z-20">
                <div className="mb-8 w-16 h-16 bg-[#0A0A0A] rounded-2xl shadow-xl flex items-center justify-center text-[#FF6B00] group-hover:rotate-6 transition-transform">
                  <BookOpen size={32} strokeWidth={2} />
                </div>
                
                <h3 className="text-4xl md:text-5xl font-black text-[#0A0A0A] mb-6 tracking-tighter">
                  Technical <br />Academy.
                </h3>
                
                <p className="text-[#525252] text-lg mb-8 leading-relaxed font-medium max-w-sm">
                  We develop exceptional technical talent across africa, through focused, intensive programs designed for global opportunities.
                </p>

                <ul className="space-y-3 mb-10">
                  {['Industry Certificates', 'Project Portfolio', 'Job Placement'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-bold text-[#0A0A0A]">
                      <CheckCircle2 size={18} className="text-[#FF6B00]" /> {item}
                    </li>
                  ))}
                </ul>

                <Button href="/education" className="px-10 py-5 rounded-2xl bg-[#0A0A0A] text-white hover:bg-[#FF6B00] border-none text-[10px] tracking-[0.2em] font-black">
                  EXPLORE courses <ArrowRight className="ml-2" size={14} />
                </Button>
              </div>
            </div>

            {/* --- PATHWAY 2: SOLUTIONS (Dark Standard) --- */}
            <div className="group relative min-h-[600px] flex flex-col justify-end p-10 md:p-16 rounded-[4rem] overflow-hidden bg-[#0A0A0A] transition-all duration-700 hover:shadow-orange-900/20">
              
              {/* IMAGE LAYER */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src="/images/solutions.webp" 
                  alt="Enterprise Solutions"
                  fill
                  className="object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Professional Black-to-Transparent Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-10" />
              </div>

              <div className="relative z-20">
                <div className="mb-8 w-16 h-16 bg-[#FF6B00] rounded-2xl shadow-xl flex items-center justify-center text-white group-hover:-rotate-6 transition-transform">
                  <Cpu size={32} strokeWidth={2} />
                </div>

                <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">
                  Enterprise <br />Solutions.
                </h3>

                <p className="text-gray-300 text-lg mb-8 leading-relaxed font-medium max-w-sm">
                  We power modern companies with AI systems and secure cloud infrastructure.
                </p>

                <ul className="space-y-3 mb-10">
                  {['AI & Automation', 'Secure Cloud', 'Web/Mobile Apps'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-bold text-gray-100">
                      <CheckCircle2 size={18} className="text-[#FF6B00]" /> {item}
                    </li>
                  ))}
                </ul>

                <Button href="/solutions" className="px-10 py-5 rounded-2xl bg-white text-[#0A0A0A] hover:bg-[#FF6B00] hover:text-white border-none text-[10px] tracking-[0.2em] font-black">
                  GET SOLUTIONS <ArrowRight className="ml-2" size={14} />
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. LARGE STATS BAR */}
      <section className="py-24 border-y border-gray-100 bg-[#F9FAFB]">
        <div className="max-width-container grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { label: "Elite Graduates", val: "215+" },
            { label: "Enterprise projects", val: "220+" },
            { label: "Students", val: "59+" },
            { label: "Success", val: "94%" },
          ].map((s, i) => (
            <div key={i} className="group">
              <p className="text-4xl md:text-5xl font-black text-[#0A0A0A] mb-2 tracking-tighter group-hover:text-[#FF6B00] transition-colors">{s.val}</p>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

                        {/* --- FAQ REDIRECT SECTION - Forced Desktop Only --- */}
          <div className="!hidden lg:!block py-24 px-6 bg-[#F9FAFB] border-y border-gray-100">
            <div className="max-width-container flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl text-left">
                <h2 className="text-4xl md:text-6xl font-black text-[#0A0A0A] tracking-tighter leading-[0.9] mb-6">
                  Got questions? <br /> We have <span className="text-[#FF6B00]">Answers.</span>
                </h2>
                <p className="text-[#525252] text-lg font-medium leading-relaxed">
                  Explore our full knowledge base covering fees, career outcomes, and technical requirements.
                </p>
              </div>
              <Button 
                href="/faq" 
                className="group px-12 py-6 rounded-2xl bg-[#0A0A0A] text-white hover:bg-[#FF6B00] border-none transition-all shadow-xl shadow-black/10"
              >
                Open FAQ<ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>

      {/* 5. THE JENGATECH NETWORK (Partners) */}
      <section className="py-32 px-6 bg-white border-t border-gray-50">
        <div className="max-width-container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl text-left">
              <div className="flex items-center gap-2 mb-4 text-[#FF6B00] font-black text-[10px] uppercase tracking-[0.4em]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-pulse" />
                Global technical partnerships
              </div>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-[#0A0A0A] leading-[0.85]">
                The <span className="italic">Network.</span>
              </h2>
            </div>
            <p className="text-[#525252] font-medium text-sm md:text-base max-w-xs leading-relaxed border-l-2 border-gray-100 pl-6">
              Collaborating with global innovators to deliver excellence in technology and security.
            </p>
          </div>
          
          {/* THE REGISTRY GRID - A rare, high-end display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-100">
            {[
              { name: "Acacloud", industry: "Infrastructure", year: "2024" },
              { name: "Edu-Global", industry: "Neural Networks", year: "2025" },
              { name: "Vertex", industry: "Automation", year: "2024" },
              { name: "Cybercore", industry: "Fintech", year: "2026" },
              { name: "Technode", industry: "Cybersecurity", year: "2025" },
              { name: "Innova", industry: "LMS Systems", year: "2026" },
              { name: "Securitas", industry: "LMS Systems", year: "2026" },
            ].map((company, i) => (
              <div 
                key={i} 
                className="group relative p-12 border-r border-b border-gray-100 overflow-hidden transition-all duration-700 hover:bg-[#0A0A0A]"
              >
                {/* Background serial number */}
                <span className="absolute top-8 right-8 text-[40px] font-black text-gray-50 group-hover:text-white/5 transition-colors">
                  0{i + 1}
                </span>

                <div className="relative z-10">
                  <p className="text-[10px] font-bold text-[#FF6B00] mb-2 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    Project Verified
                  </p>
                  <h4 className="text-3xl font-black text-[#0A0A0A] group-hover:text-white transition-all tracking-tighter mb-12">
                    {company.name}
                  </h4>
                  
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <p className="text-[9px] font-black uppercase text-gray-400 tracking-widest">Industry</p>
                      <p className="text-xs font-bold text-[#525252] group-hover:text-gray-300">{company.industry}</p>
                    </div>          
                  </div>
                </div>

                {/* Rare animated background fill */}
                <div className="absolute bottom-0 left-0 w-full h-0 bg-[#FF6B00] group-hover:h-1 transition-all duration-500" />
              </div>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
             <Link href="/solutions" className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-[#0A0A0A] hover:text-[#FF6B00] transition-colors">
                <span>View Services we offer</span>
                <div className="w-12 h-12 rounded-full bg-[#F9FAFB] flex items-center justify-center group-hover:bg-[#FF6B00] group-hover:text-white transition-all">
                   <ArrowRight size={16} />
                </div>
             </Link>
          </div>
        </div>
      </section>

    </main>
  );
}