import Link from "next/link";
import Image from "next/image";
import { Button } from "../components/ui/Button"; 
import { Card } from "../components/ui/Card";
import { COURSES } from "../data/content"; 
import { 
  ArrowRight, 
  Globe, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  Award, 
  Layers, 
  BarChart3,
  CheckCircle2
} from "lucide-react";

// Helper icon component
const Users = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-44 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid z-0" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-100 bg-orange-50 text-[#FF6B00] text-[10px] font-black uppercase tracking-[0.3em] mb-10">
            <Zap size={14} fill="#FF6B00" /> Defining the Next Decade of Tech
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-10 leading-[0.9] text-[#0A0A0A]">
            Empowering the  <br /> 
            <span className="text-[#FF6B00] italic">future</span> through digital innovation
          </h1>
          
          <p className="text-lg md:text-xl text-[#525252] max-w-2xl mx-auto mb-14 font-medium leading-relaxed">
            Jengatech is a polymorphic ecosystem where rarefied technical mastery converges with enterprise-grade engineering to architect scalable futures in the evolving digital economy.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button href="/solutions" variant="primary" className="shadow-2xl shadow-orange-200">
              Our Services
            </Button>
            <Button href="/education" variant="outline" className="bg-white">
              Join Training Institute 
            </Button>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR - Professional Auto-scroll */}
      <section className="py-20 border-y border-gray-50 bg-white">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#525252] opacity-60">
            Collaborating with global innovators to deliver excellence in technology and security.
          </p>
        </div>

        <div className="relative w-full overflow-hidden mask-fade">
          <div className="animate-jengascroll flex items-center gap-16 md:gap-32">
            {/* List 1 */}
            <div className="flex items-center gap-16 md:gap-32 opacity-40 grayscale shrink-0">
              <span className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter">EDU-GLOBAL</span>
              <span className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter">SECURITAS</span>
              <span className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter">VERTEX</span>
              <span className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter">INNOVA</span>
              <span className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter">ACACLOUD</span>
              <span className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter">CYBERCORE</span>
              <span className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter">TECHNODE</span>
            </div>
            {/* List 2 Duplicate */}
            <div className="flex items-center gap-16 md:gap-32 opacity-40 grayscale shrink-0" aria-hidden="true">
               <span className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter">EDU-GLOBAL</span>
              <span className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter">SECURITAS</span>
              <span className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter">VERTEX</span>
              <span className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter">INNOVA</span>
              <span className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter">ACACLOUD</span>
              <span className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter">CYBERCORE</span>
              <span className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter">TECHNODE</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DUAL PILLAR SECTION */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10">
            
            {/* Academy Pillar */}
            <div className="relative p-12 md:p-16 rounded-[3rem] overflow-hidden group transition-all duration-500 shadow-xl border border-gray-100 min-h-[550px] flex flex-col justify-end">
              <div className="absolute inset-0 z-0">
                <img 
                  src="/images/academy.webp" 
                  alt="Academy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-10" />
              </div>

              <div className="relative z-20 text-white">
                <div className="w-16 h-16 bg-[#FF6B00] rounded-2xl flex items-center justify-center text-white mb-10 shadow-lg group-hover:rotate-6 transition-transform">
                  <Award size={32} strokeWidth={1.5} />
                </div>
                <h2 className="text-4xl font-black mb-6 tracking-tight">The Academy</h2>
                <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-md">
                  We develop exceptional technical talent across Africa, through focused, intensive programs designed for global opportunities.
                </p>
                <ul className="space-y-4 mb-12">
                  {['Fullstack Mastery', 'Cybersecurity Engineering', 'DevOps & Cloud'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-bold text-gray-100">
                      <div className="flex-shrink-0 w-5 h-5 bg-[#FF6B00] rounded-full flex items-center justify-center">
                         <CheckCircle2 size={12} className="text-white" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button href="/education" className="bg-white text-black hover:bg-[#FF6B00] hover:text-white border-none">
                  Explore Courses
                </Button>
              </div>
            </div>

            {/* Enterprise Pillar */}
            <div className="relative p-12 md:p-16 rounded-[3rem] overflow-hidden group transition-all duration-500 shadow-xl border border-gray-100 min-h-[550px] flex flex-col justify-end">
              <div className="absolute inset-0 z-0">
                <img 
                  src="/images/solutions.webp" 
                  alt="Enterprise Solutions"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent z-10" />
              </div>

              <div className="relative z-20 text-white">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-[#FF6B00] mb-10 border border-white/20 group-hover:-rotate-6 transition-transform">
                  <Layers size={32} strokeWidth={1.5} />
                </div>
                <h2 className="text-4xl font-black mb-6 tracking-tight">Enterprise Solutions</h2>
                <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-md">
                  We power modern companies with AI systems and secure cloud infrastructure.
                </p>
                <ul className="space-y-4 mb-12">
                  {['Custom AI Agents', 'Blockchain Infrastructure', 'Enterprise Security'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-bold text-gray-100">
                      <div className="flex-shrink-0 w-5 h-5 bg-[#FF6B00] rounded-full flex items-center justify-center">
                         <CheckCircle2 size={12} className="text-white" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button href="/solutions" className="bg-[#FF6B00] text-white hover:bg-[#FF8533] border-none shadow-lg shadow-orange-900/20">
                  View Services
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. STATS SECTION */}
      <section className="py-32 px-6 border-y border-gray-50 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { label: "Elite Graduates", val: "215+", icon: <Users size={20} /> },
            { label: "Enterprise Projects", val: "220+", icon: <Zap size={20} /> },
            { label: "Industry Partners", val: "25+", icon: <Globe size={20} /> },
            { label: "Success Ratio", val: "94%", icon: <BarChart3 size={20} /> },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-[#FF6B00] mb-4">{s.icon}</div>
              <div className="text-5xl font-black mb-2 tracking-tighter text-[#0A0A0A]">{s.val}</div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#525252]">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

            {/* 5. ACADEMY HIGHLIGHTS */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-[#0A0A0A]">Top Learning Tracks</h2>
              <div className="h-2 w-20 bg-[#FF6B00] mx-auto md:mx-0"></div>
            </div>

            {/* UPDATED: "Explore All" now goes to the Explore Hub (/explore) */}
            <Link href="/explore" className="hidden md:flex items-center gap-2 font-black text-xs uppercase tracking-widest border-b-2 border-[#FF6B00] pb-2">
              Explore All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {COURSES.slice(0, 3).map((course) => (
              <Card key={course.slug} className="flex flex-col border-none shadow-premium p-10 hover:shadow-orange-100 transition-all duration-700">
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#FF6B00] mb-8">{course.level}</span>
                <h4 className="text-2xl font-bold mb-4">{course.title}</h4>
                <p className="text-[#525252] text-sm leading-relaxed mb-12 flex-grow">{course.description}</p>

                {/* UPDATED: Individual courses now take user to the Academy Page (/education) */}
                <Link href="/education" className="flex items-center gap-3 font-black text-[10px] uppercase tracking-widest hover:text-[#FF6B00] transition-colors">
                  View Track <ArrowRight size={14} />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL ACTION */}
      <section className="py-44 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tight text-[#0A0A0A]">
            Build the <br /><span className="text-[#FF6B00] italic">Standard.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <Button href="/contact" className="px-12 py-6">Collaborate With Us</Button>
            <Button href="/explore" variant="outline" className="px-12 py-6">Discover What’s Next</Button>
          </div>
        </div>
      </section>
    </main>
  );
}