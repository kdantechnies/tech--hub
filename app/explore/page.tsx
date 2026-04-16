import { Button } from "../../components/ui/Button";
import { 
  ArrowRight, 
  BookOpen, 
  Briefcase, 
  Zap, 
  Globe, 
  Cpu, 
  ArrowUpRight, 
  ShieldCheck,
  Layers,
  TrendingUp,
  Compass,
  Code2
} from "lucide-react";
import Link from "next/link";

export default function ExplorePage() {
  return (
    <main className="bg-white min-h-screen pt-32 pb-24 selection:bg-[#FF6B00] selection:text-white overflow-hidden">
      
      {/* 1. THE FRONTIER HEADER */}
      <section className="relative pt-20 pb-16 px-6">
        <div className="absolute top-0 right-0 w-[50%] h-[600px] bg-gradient-to-bl from-orange-50/40 to-transparent -z-10 rounded-bl-[30rem]" />
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0A0A] text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8 animate-fade-in">
                <Compass size={12} className="text-[#FF6B00] animate-spin-slow" /> Global Discovery Hub
              </div>
              <h1 className="text-6xl md:text-[10rem] font-black text-[#0A0A0A] tracking-tighter leading-[0.8] mb-8">
                Explore <br /> <span className="text-[#FF6B00]">Frontiers.</span>
              </h1>
              <p className="text-xl md:text-3xl text-[#525252] font-medium leading-relaxed max-w-2xl">
                Connecting African technical excellence with the most disruptive 
                innovations across the global landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE ECOSYSTEM PILLARS (Bento-Grid) */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* PILLAR 1: THE ACADEMY */}
            <div className="lg:col-span-7 group relative overflow-hidden bg-[#0A0A0A] rounded-[4rem] min-h-[600px] flex flex-col justify-between p-12 transition-all duration-700 hover:shadow-2xl hover:shadow-orange-900/30">
              <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none bg-grid" />
              
              <div className="relative z-10 flex justify-between items-start">
                <div className="w-20 h-20 bg-[#FF6B00] rounded-[2rem] flex items-center justify-center text-white shadow-2xl transition-transform duration-500 group-hover:scale-110">
                  <BookOpen size={40} />
                </div>
                <div className="px-6 py-2 rounded-full border border-white/10 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest">
                    6-Month Mastery
                </div>
              </div>

              <div className="relative z-10">
                <h2 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-none">
                    Academy <br /> <span className="text-[#FF6B00] italic">Track.</span>
                </h2>
                <p className="text-gray-400 text-lg mb-10 max-w-sm leading-relaxed">
                    Intensive engineering tracks designed to bridge the gap between 
                    beginner logic and Silicon Valley standards.
                </p>
                <Button href="/education" className="bg-white text-[#0A0A0A] hover:bg-[#FF6B00] hover:text-white px-12 py-7 border-none text-xs rounded-2xl">
                  View Syllabus <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </div>

            {/* PILLAR 2: SOLUTIONS */}
            <div className="lg:col-span-5 group relative overflow-hidden bg-[#F9FAFB] border border-gray-100 rounded-[4rem] min-h-[600px] flex flex-col justify-between p-12 transition-all duration-700 hover:shadow-premium hover:border-[#FF6B00]/20">
              <div className="relative z-10">
                <div className="w-20 h-20 bg-[#0A0A0A] rounded-[2rem] flex items-center justify-center text-[#FF6B00] shadow-xl mb-12">
                  <Briefcase size={40} />
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-[#0A0A0A] mb-6 tracking-tighter leading-none">
                    Enterprise <br /> Systems.
                </h2>
                <p className="text-[#525252] text-lg mb-10 leading-relaxed">
                    Custom AI frameworks and secure cloud architectures for modern Nigerian corporations.
                </p>
              </div>
              <Link href="/solutions" className="group/link inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-[#0A0A0A] hover:text-[#FF6B00] transition-colors">
                Explore Services <ArrowUpRight size={20} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 3. GLOBAL TECH PULSE (Real explorings section) */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-[#FF6B00] font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">World Intelligence</span>
              <h2 className="text-4xl md:text-6xl font-black text-[#0A0A0A] tracking-tighter">Global Tech Pulse.</h2>
            </div>
            <p className="text-[#525252] font-medium md:max-w-xs text-sm border-l-2 border-gray-100 pl-6">
              How Jengatech integrates current global shifts into your career and business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Trend 1 */}
            <div className="p-10 rounded-[3rem] bg-[#F9FAFB] border border-gray-50 group hover:bg-white hover:shadow-premium transition-all duration-500">
               <div className="flex justify-between items-start mb-10">
                 <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#FF6B00]"><Cpu size={24} /></div>
                 <span className="text-[10px] font-black text-gray-400">01 / SILICON VALLEY</span>
               </div>
               <h4 className="text-xl font-bold mb-4 text-[#0A0A0A]">Generative AI Agents</h4>
               <p className="text-sm text-[#525252] leading-relaxed mb-8">
                 We are moving beyond chatbots to autonomous agents. Our Academy now integrates LLM-orchestration in every backend track.
               </p>
               <div className="flex items-center gap-2 text-[10px] font-black uppercase text-[#FF6B00]">
                  <TrendingUp size={14} /> Critical Shift
               </div>
            </div>

            {/* Trend 2 */}
            <div className="p-10 rounded-[3rem] bg-[#F9FAFB] border border-gray-50 group hover:bg-white hover:shadow-premium transition-all duration-500">
               <div className="flex justify-between items-start mb-10">
                 <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#FF6B00]"><Code2 size={24} /></div>
                 <span className="text-[10px] font-black text-gray-400">02 / LONDON HUB</span>
               </div>
               <h4 className="text-xl font-bold mb-4 text-[#0A0A0A]">Next-Gen Fintech</h4>
               <p className="text-sm text-[#525252] leading-relaxed mb-8">
                 Real-time cross-border settlements via Blockchain. Jengatech Solutions builds the rails for the next era of African payments.
               </p>
               <div className="flex items-center gap-2 text-[10px] font-black uppercase text-[#FF6B00]">
                  <TrendingUp size={14} /> High Demand
               </div>
            </div>

            {/* Trend 3 */}
            <div className="p-10 rounded-[3rem] bg-[#0A0A0A] text-white group transition-all duration-500 shadow-2xl">
               <div className="flex justify-between items-start mb-10">
                 <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-[#FF6B00]"><Globe size={24} /></div>
                 <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Global Network</span>
               </div>
               <h4 className="text-xl font-bold mb-4">Remote Engineering</h4>
               <p className="text-gray-400 text-sm leading-relaxed mb-8">
                 African developers are now the primary workforce for EU startups. Jengatech ensures you are "Global-Ready."
               </p>
               <Button href="/education" variant="outline" className="w-full border-white/20 text-white hover:bg-white hover:text-black py-4 rounded-xl text-[10px]">
                 Join the Network
               </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL HUB ACTION */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-[#F9FAFB] rounded-[4rem] p-16 md:p-24 text-center border border-gray-100">
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#525252] mb-10">End of Discovery</h3>
            <h2 className="text-5xl md:text-8xl font-black text-[#0A0A0A] tracking-tighter mb-12 leading-none">
                Start your <br /> <span className="text-[#FF6B00] italic">Evolution.</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
                <Button href="/contact" className="px-16 py-6 rounded-2xl shadow-xl shadow-orange-200">Start Project</Button>
                <Button href="/education" variant="outline" className="px-16 py-6 rounded-2xl border-[#0A0A0A]">Visit Academy</Button>
            </div>
        </div>
      </section>

    </main>
  );
}