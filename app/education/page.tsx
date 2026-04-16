import Link from "next/link";
import { ArrowRight, Rocket, Plus, Star, ShieldCheck, Cpu, Lightbulb, CheckCircle2 } from "lucide-react";
import { COURSES } from "../../data/content"; 

// 🎯 Professional Image Mapping for Tech Tracks
const COURSE_IMAGES: Record<string, string> = {
  "software-engineering": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=60&w=600",
  "cybersecurity": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=60&w=600",
  "devops-engineering": "https://images.unsplash.com/photo-1667372333114-3d4031493ad0?auto=format&fit=crop&q=60&w=600",
  "uiux-design": "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=60&w=600",
  "blockchain-development": "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=60&w=600",
  "app-development": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=60&w=600",
};

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      
      {/* --- 1. HERO SECTION (UI Reference Style) --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#F8FAFC]">
        {/* Floating Design Elements */}
        <div className="absolute top-40 right-[10%] text-gray-200 animate-bounce-slow hidden lg:block pointer-events-none">
          <Rocket size={120} strokeWidth={1} />
        </div>
        <Plus className="absolute top-32 left-[45%] text-[#FF6B00] opacity-40 animate-pulse" size={24} />
        <Plus className="absolute bottom-40 left-[10%] text-brand-black opacity-20" size={32} />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left: Circular Image Mask */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full aspect-square md:w-[520px] md:h-[520px] mx-auto overflow-hidden rounded-full border-[12px] md:border-[20px] border-white shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=60&w=600" 
                alt="Jengatech Students"
                loading="eager" // Pre-loads for speed
                className="w-full h-full object-cover"
              />
            </div>
            {/* Dark curved shape behind image */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#0A0A0A] rounded-full -z-10 opacity-5 hidden md:block"></div>
          </div>

          {/* Right: Text Content */}
          <div className="order-1 lg:order-2">
            <h1 className="text-5xl md:text-7xl font-black text-[#0A0A0A] leading-[1.1] mb-8 tracking-tighter">
              Nurturing <span className="text-[#FF6B00]">Tech Talent</span> for a Brighter Tomorrow
            </h1>
            <p className="text-lg text-[#525252] mb-10 leading-relaxed max-w-lg">
              Advanced tech education designed to inspire curiosity, creativity, and 
              confidence in the next generation of African engineers.
            </p>
            <Link 
              href="/consultation" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-white border-2 border-[#0A0A0A] text-[#0A0A0A] rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-[#0A0A0A] hover:text-white transition-all group"
            >
              Admission Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full leading-[0] fill-white">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[100px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,105.34,119.58,108.83,180,95.8c61.64-13.29,118.48-30.68,172.5-39.36Z"></path>
          </svg>
        </div>
      </section>

      {/* --- 2. DARK FEATURE PILLARS --- */}
      <section className="py-20 px-6 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          <PillarCard 
            icon={<Cpu size={24} />} 
            title="Digital Learning Tools" 
            desc="Functionally designed project platforms and e-learning systems."
          />
          <PillarCard 
            icon={<Lightbulb size={24} />} 
            title="Innovation in Learning" 
            desc="STEM labs and smart classes to inspire deep creativity."
          />
          <PillarCard 
            icon={<ShieldCheck size={24} />} 
            title="Safe & Smart Campus" 
            desc="Industry-standard security protocols for all digital classrooms."
          />
        </div>
      </section>

      {/* --- 3. OVERLAPPING ABOUT SECTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          {/* Overlapping Curved Images */}
          <div className="relative flex items-end">
            <div className="w-2/3 aspect-[4/5] rounded-[4rem] rounded-bl-none overflow-hidden shadow-2xl border border-gray-100">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=60&w=600" className="w-full h-full object-cover" />
            </div>
            <div className="w-1/2 aspect-square rounded-[3rem] border-[12px] border-white shadow-2xl -ml-24 mb-12 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=60&w=500" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-orange-50 rounded-full animate-jengascroll opacity-20"></div>
          </div>

          <div>
            <span className="text-[#FF6B00] font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">About Our Academy</span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#0A0A0A] tracking-tight">Future Kids & Pros Tech School</h2>
            <p className="text-[#525252] mb-10 leading-relaxed text-lg">
              We provide a stimulating environment where learners reach their full potential through exploration, code, and robotics. 
              Our curriculum blends traditional values with modern engineering methods.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#0A0A0A] text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-[#FF6B00] transition-all group"
            >
              Contact Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- 4. COURSE TRACKS (Dark Grid Style) --- */}
      <section className="py-24 px-6 bg-[#0A0A0A] rounded-t-[4rem] md:rounded-t-[6rem]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#FF6B00] font-black uppercase tracking-[0.3em] text-[10px] border-b border-[#FF6B00]/30 pb-2">Academic Tracks</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-6 tracking-tight">Professional Tech Courses</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.map((course) => (
              <div key={course.slug} className="bg-white rounded-[2.5rem] overflow-hidden group hover:-translate-y-3 transition-all duration-500 flex flex-col shadow-2xl shadow-black/20">
                <div className="h-60 overflow-hidden relative">
                  <img 
                    src={COURSE_IMAGES[course.slug] || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=60&w=600"} 
                    alt={course.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[9px] font-black text-white uppercase tracking-widest bg-brand-black/60 backdrop-blur-md px-4 py-2 rounded-full">
                      {course.duration || "6 Months"}
                    </span>
                  </div>
                </div>
                
                <div className="p-10 flex flex-col flex-grow">
                  <span className="text-[10px] font-black text-[#FF6B00] uppercase tracking-widest mb-3 block">
                    {course.level}
                  </span>
                  <h4 className="text-2xl font-bold mb-4 text-[#0A0A0A] group-hover:text-[#FF6B00] transition-colors leading-tight">
                    {course.title}
                  </h4>
                  <p className="text-[#525252] text-sm mb-10 leading-relaxed line-clamp-2">
                    {course.description}
                  </p>
                  <Link 
                    href={`/education/${course.slug}`} 
                    className="mt-auto text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all text-[#0A0A0A]"
                  >
                    View Syllabus <ArrowRight size={16} className="text-[#FF6B00]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// Sub-component for Feature Pillars
function PillarCard({ icon, title, desc }: any) {
  return (
    <div className="bg-[#0A0A0A] p-10 rounded-[2.5rem] text-white flex flex-col items-start hover:bg-[#151515] transition-all border border-white/5 shadow-2xl">
      <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 text-[#FF6B00] shadow-inner">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 tracking-tight">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}