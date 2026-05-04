"use client";
import { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Rocket, 
  Plus, 
  Star, 
  ShieldCheck, 
  Cpu, 
  Lightbulb, 
  Code2, 
  Cloud, 
  Palette, 
  Smartphone, 
  BarChart3, 
  Settings, 
  Coins, 
  Briefcase, 
  Megaphone, 
  Gamepad2, 
  Brain, 
  Quote,
  CheckCircle2 // Fixed: Added missing import
} from "lucide-react";
import { Button } from "../../components/ui/Button";

// 🎯 Professional Icon Mapping
const COURSE_ICONS: Record<string, any> = {
  "AI & Machine Learning": <Brain size={24} />,
  "Fullstack Development": <Code2 size={24} />,
  "Cybersecurity Essentials": <ShieldCheck size={24} />,
  "Cloud Computing": <Cloud size={24} />,
  "UI/UX Design": <Palette size={24} />,
  "Mobile App Development": <Smartphone size={24} />,
  "Data Science": <BarChart3 size={24} />,
  "DevOps Engineering": <Settings size={24} />,
  "Blockchain Technology": <Coins size={24} />,
  "Product Management": <Briefcase size={24} />,
  "Digital Marketing": <Megaphone size={24} />,
  "Game Development": <Gamepad2 size={24} />,
};

const ALL_COURSES = [
  { title: "AI & Machine Learning", desc: "Master algorithms and neural networks.", level: "Advanced" },
  { title: "Fullstack Development", desc: "Build scalable web apps with React & Node.", level: "Professional" },
  { title: "Cybersecurity Essentials", desc: "Protect enterprise networks and assets.", level: "Intermediate" },
  { title: "Cloud Computing", desc: "Architect scalable solutions on AWS & Azure.", level: "Professional" },
  { title: "UI/UX Design", desc: "Create intuitive user experiences and interfaces.", level: "Beginner" },
  { title: "Mobile App Development", desc: "Build native apps for iOS and Android.", level: "Intermediate" },
  { title: "Data Science", desc: "Extract insights from complex datasets.", level: "Advanced" },
  { title: "DevOps Engineering", desc: "Streamline development and operations.", level: "Advanced" },
  { title: "Blockchain Technology", desc: "Build decentralized applications.", level: "Professional" },
  { title: "Product Management", desc: "Lead products from conception to launch.", level: "Beginner" },
  { title: "Digital Marketing", desc: "Master SEO, SEM, and content strategy.", level: "Beginner" },
  { title: "Game Development", desc: "Create immersive 3D worlds with Unity.", level: "Intermediate" },
];

const SUCCESS_STORIES = [
  { name: "Prosper", role: "Software Engineer", text: "Jengatech rebuilt my brain. Zero to hired in 6 months not because I memorized syntax, but because I finally learned to think like an engineer.", growth: "100% Salary Increase", stars: 4 },
  { name: "", role: "Data Science", text: "I built my first churn prediction model. It was ugly, overfitted, and I presented it to a panel of actual data leads who tore it apart. Brutal. But I rebuilt it.", growth: "Senior Role in 3 Months", stars: 5 },
  { name: "", role: "Cybersecurity Analyst", text: "Most courses teach you tools. Jengatech's ethical hacking labs teach you to think like the one person in the room who actually wants the system to break and then how to stop them. I don't feel confident. I feel dangerous. The good kind.", growth: "Global Certification", stars: 5 },
];

export default function EducationPage() {
  const [showAll, setShowAll] = useState(false);
  const displayedCourses = showAll ? ALL_COURSES : ALL_COURSES.slice(0, 6);

  return (
    <main className="min-h-screen bg-white overflow-hidden selection:bg-[#FF6B00] selection:text-white">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#F8FAFC]">
        <div className="absolute top-40 right-[10%] text-gray-200 animate-bounce-slow hidden lg:block pointer-events-none">
          <Rocket size={120} strokeWidth={1} />
        </div>
        <Plus className="absolute top-32 left-[45%] text-[#FF6B00] opacity-40 animate-pulse" size={24} />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full aspect-square md:w-[520px] md:h-[520px] mx-auto overflow-hidden rounded-full border-[12px] md:border-[20px] border-white shadow-2xl">
              <img src="/images/fir.webp" alt="Jengatech Students" className="w-full h-full object-cover" loading="eager" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#0A0A0A] rounded-full -z-10 opacity-5 hidden md:block"></div>
          </div>

          <div className="order-1 lg:order-2">
            <h1 className="text-5xl md:text-7xl font-black text-[#0A0A0A] leading-[1.1] mb-8 tracking-tighter">
              Nurturing <span className="text-[#FF6B00]">Tech Talent</span> for a Brighter Tomorrow
            </h1>
            <p className="text-lg text-[#525252] mb-10 leading-relaxed max-w-lg">
              Advanced tech education designed to inspire curiosity, creativity, and confidence in the next generation of African engineers.
            </p>
            <Link href="/explore" className="inline-flex items-center gap-3 px-10 py-5 bg-white border-2 border-[#0A0A0A] text-[#0A0A0A] rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-[#0A0A0A] hover:text-white transition-all group">
              Enrol Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full leading-[0] fill-white">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[100px] shadow-sm"><path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,105.34,119.58,108.83,180,95.8c61.64-13.29,118.48-30.68,172.5-39.36Z"></path></svg>
        </div>
      </section>

      {/* --- 2. DARK FEATURE PILLARS --- */}
      <section className="py-20 px-6 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          <PillarCard icon={<Cpu size={24} />} title="Digital Learning Tools" desc="Functionally designed project platforms and e-learning systems." />
          <PillarCard icon={<Lightbulb size={24} />} title="Innovation in Learning" desc="STEM labs and smart classes to inspire deep creativity." />
          <PillarCard icon={<ShieldCheck size={24} />} title="Safe & Smart Campus" desc="Industry-standard security protocols for all digital classrooms." />
        </div>
      </section>

      {/* --- 3. ABOUT SECTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative flex items-end">
            <div className="w-2/3 aspect-[4/5] rounded-[4rem] rounded-bl-none overflow-hidden shadow-2xl border border-gray-100"><img src="/images/sec.webp" className="w-full h-full object-cover" /></div>
            <div className="w-1/2 aspect-square rounded-[3rem] border-[12px] border-white shadow-2xl -ml-24 mb-12 overflow-hidden"><img src="/images/thir.webp" className="w-full h-full object-cover" /></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-orange-50 rounded-full animate-spin-slow opacity-20"></div>
          </div>
          <div>
            <span className="text-[#FF6B00] font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">About Our Academy</span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#0A0A0A] tracking-tight">Future Kids & Pros Tech School</h2>
            <p className="text-[#525252] mb-10 leading-relaxed text-lg">We provide a stimulating environment where learners reach their full potential through exploration, code, and robotics.</p>
            <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[#0A0A0A] text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-[#FF6B00] transition-all group">Contact Now <ArrowRight size={18} className="group-hover:translate-x-1" /></Link>
          </div>
        </div>
      </section>

      {/* --- 4. PROFESSIONAL COURSE TRACKS --- */}
      <section className="py-24 px-6 bg-[#0A0A0A] rounded-t-[4rem] md:rounded-t-[6rem]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#FF6B00] font-black uppercase tracking-[0.3em] text-[10px] border-b border-[#FF6B00]/30 pb-2 text-center">Academic Tracks</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-6 tracking-tight">Professional Tech Courses</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedCourses.map((course, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[3rem] group hover:-translate-y-3 transition-all duration-500 flex flex-col shadow-2xl">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#FF6B00] mb-8 group-hover:bg-[#FF6B00] group-hover:text-white transition-colors duration-500">
                  {COURSE_ICONS[course.title] || <Code2 />}
                </div>
                <span className="text-[10px] font-black text-[#FF6B00] uppercase tracking-widest mb-3">{course.level}</span>
                <h4 className="text-2xl font-bold mb-4 text-[#0A0A0A] leading-tight">{course.title}</h4>
                <p className="text-[#525252] text-sm mb-10 leading-relaxed">{course.desc}</p>
                <Link href="/explore" className="mt-auto text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 text-[#0A0A0A] hover:text-[#FF6B00] transition-colors">
                  Enrol Now <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          {/* VIEW MORE TOGGLE */}
          <div className="mt-20 text-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="px-12 py-5 border-2 border-white/20 text-white rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-[#0A0A0A] transition-all"
            >
              {showAll ? "View Less Tracks" : "View All 12+ Tracks"}
            </button>
          </div>
        </div>
      </section>

      {/* --- 5. SUCCESS STORIES SECTION --- */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="max-w-2xl">
              <span className="text-[#FF6B00] font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Alumni Impact</span>
              <h2 className="text-4xl md:text-6xl font-black text-[#0A0A0A] tracking-tighter">Success Stories.</h2>
            </div>
            <div className="flex items-center gap-2 text-[#FF6B00] font-bold text-sm">
                <CheckCircle2 size={20} /> 98% Completion Rate
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SUCCESS_STORIES.map((story, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-[#F9FAFB] border border-gray-100 flex flex-col relative shadow-sm">
                <Quote className="absolute top-10 right-10 text-gray-200" size={40} />
                <div className="flex gap-1 mb-6">
                  {[...Array(story.stars)].map((_, s) => (
                    <Star key={s} size={16} fill="#FF6B00" className="text-[#FF6B00]" />
                  ))}
                </div>
                <p className="text-[#525252] text-lg italic mb-10 leading-relaxed">"{story.text}"</p>
                <div className="mt-auto pt-8 border-t border-gray-200">
                   <h5 className="font-black text-[#0A0A0A] text-lg">{story.name}</h5>
                   <p className="text-xs text-gray-400 font-bold mb-4">{story.role}</p>
                   <div className="inline-block px-4 py-1.5 bg-orange-100 text-[#FF6B00] rounded-full text-[10px] font-black uppercase tracking-widest">
                      {story.growth}
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 px-6 bg-[#0A0A0A] text-white text-center">
         <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight italic">Ready for your transition?</h2>
         <Button href="/explore" className="bg-white text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-orange-400 px-16 py-6 border-none text-xs rounded-2xl">
            Start Your Journey
         </Button>
      </section>
    </main>
  );
}

function PillarCard({ icon, title, desc }: any) {
  return (
    <div className="bg-[#0A0A0A] p-10 rounded-[2.5rem] text-white flex flex-col items-start hover:bg-[#151515] transition-all border border-white/5 shadow-2xl">
      <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 text-[#FF6B00] shadow-inner">{icon}</div>
      <h3 className="text-xl font-bold mb-4 tracking-tight">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}